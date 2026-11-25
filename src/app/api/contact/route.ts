import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Simple in-memory rate-limiter: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside the active sliding window
  const recentTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & Rate Limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit reached. Please wait a few minutes before submitting another message.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload provided." },
        { status: 400 }
      );
    }

    // 3. Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errorDetails = validationResult.error.errors.map((e) => e.message).join(", ");
      return NextResponse.json(
        { success: false, error: `Validation failed: ${errorDetails}` },
        { status: 422 }
      );
    }

    const { name, email, subject, message, botField } = validationResult.data;

    // 4. Honeypot check (anti-bot spam)
    if (botField && botField.trim().length > 0) {
      // Silently discard spam submissions
      return NextResponse.json(
        { success: true, message: "Inquiry processed." },
        { status: 200 }
      );
    }

    const timestamp = new Date().toISOString();
    const formattedTimestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // 5. Structure payload for n8n Webhook & WhatsApp Cloud API
    const webhookPayload = {
      event: "PORTFOLIO_CONTACT_SUBMISSION",
      visitor: {
        name,
        email,
      },
      content: {
        subject,
        message,
      },
      metadata: {
        submittedAtIso: timestamp,
        submittedAtFormatted: formattedTimestamp,
        clientIp: ip,
        userAgent: request.headers.get("user-agent") || "Unknown",
      },
      whatsAppMessageFormatted: `*New Portfolio Contact*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Time:* ${formattedTimestamp} (WIB)\n\n*Message:*\n${message}`,
    };

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    const n8nWebhookSecret = process.env.N8N_WEBHOOK_SECRET;

    // 6. Forward to n8n Webhook if configured
    if (n8nWebhookUrl) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      try {
        const n8nResponse = await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(n8nWebhookSecret
              ? { "X-Webhook-Secret": n8nWebhookSecret }
              : {}),
          },
          body: JSON.stringify(webhookPayload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!n8nResponse.ok) {
          const n8nError = await n8nResponse.text().catch(() => "");
          console.error("n8n webhook error response:", n8nResponse.status, n8nError);
          return NextResponse.json(
            {
              success: false,
              error: `Automated dispatch service returned error code ${n8nResponse.status}. Please connect via WhatsApp directly.`,
            },
            { status: 502 }
          );
        }
      } catch (err: unknown) {
        clearTimeout(timeoutId);
        if (err instanceof Error && err.name === "AbortError") {
          return NextResponse.json(
            {
              success: false,
              error: "Automated webhook timed out. Please connect via direct WhatsApp.",
            },
            { status: 504 }
          );
        }
        console.error("Webhook connection error:", err);
        return NextResponse.json(
          {
            success: false,
            error: "Unable to reach n8n webhook server. Please use direct contact channels.",
          },
          { status: 503 }
        );
      }
    } else {
      // Development mode fallback when n8n webhook is not yet configured
      console.log(
        "[DEV NOTE] N8N_WEBHOOK_URL is not configured. Contact submission simulated successfully:\n",
        JSON.stringify(webhookPayload, null, 2)
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been received and forwarded to my WhatsApp notifications.",
        timestamp,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Unhandled error in /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}
