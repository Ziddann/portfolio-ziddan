"use client";

import React, { useState } from "react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  ownerWhatsApp?: string;
}

export function ContactForm({ ownerWhatsApp = "087741787465" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormValues;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Gagal mengirim pesan.");
      }

      setStatus("success");
      setServerMessage(
        data.message ||
          "Pesan Anda berhasil dikirim. Terima kasih telah menghubungi!"
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        botField: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Terjadi kendala saat mengirim pesan. Silakan hubungi langsung via WhatsApp atau Email.";
      setServerMessage(errorMsg);
    }
  };

  const cleanedPhone = ownerWhatsApp.replace(/\D/g, "").replace(/^0/, "62");
  const directWhatsAppUrl = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(
    `Halo Ziddan, saya menghubungi Anda melalui portofolio web terkait: ${
      formData.subject || "Diskusi Proyek / Peluang"
    }`
  )}`;

  return (
    <div className="border-2 border-ink bg-paper-light shadow-pixel-md">
      {/* Window bar */}
      <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-paper-mid px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-rust" />
          <span className="h-1.5 w-1.5 bg-gold" />
          <span className="h-1.5 w-1.5 bg-teal" />
          <span className="hud-label-sm ml-1 text-ink/70">MESSAGE.TXT</span>
        </div>
        <span className="hud-label-sm flex items-center gap-1 text-teal-dark">
          <PixelIcon name="shield" size={10} />
          VALIDATED
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-5 border-b-2 border-ink/15 pb-4">
          <h3 className="font-display text-lg uppercase leading-tight text-ink">
            Kirim Pesan
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            Isi formulir berikut, atau langsung hubungi via WhatsApp. Semua field
            bertanda{" "}
            <span className="font-bold text-rust" aria-hidden="true">
              *
            </span>{" "}
            wajib diisi.
          </p>
        </div>

        {/* Success */}
        {status === "success" && (
          <div
            role="alert"
            className="mb-5 flex items-start gap-3 border-2 border-teal bg-teal-light p-3"
          >
            <PixelIcon
              name="check"
              size={14}
              className="mt-0.5 flex-shrink-0 text-teal-dark"
            />
            <div className="min-w-0">
              <h4 className="hud-label-sm text-teal-dark">PESAN TERKIRIM</h4>
              <p className="mt-1 text-xs leading-relaxed text-ink/75">
                {serverMessage}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 font-terminal text-base leading-none text-teal-dark underline decoration-2 underline-offset-2 hover:text-ink"
              >
                Kirim pesan lain
              </button>
            </div>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div
            role="alert"
            className="mb-5 flex items-start gap-3 border-2 border-gold bg-gold-light p-3"
          >
            <PixelIcon
              name="info"
              size={14}
              className="mt-0.5 flex-shrink-0 text-gold-dark"
            />
            <div className="min-w-0">
              <h4 className="hud-label-sm text-gold-dark">PEMBERITAHUAN</h4>
              <p className="mt-1 text-xs leading-relaxed text-ink/75">
                {serverMessage}
              </p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 border-2 border-ink bg-paper-light px-2 py-1 font-pixel text-[8px] uppercase leading-none text-ink shadow-[2px_2px_0_0_#191C18] hover:bg-paper-mid"
              >
                <PixelIcon name="phone" size={10} className="text-teal-dark" />
                WhatsApp langsung
              </a>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 flex items-center justify-between gap-2"
              >
                <span className="hud-label-sm text-ink/80">Nama Lengkap</span>
                <span className="font-terminal text-sm leading-none text-rust">
                  WAJIB *
                </span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                disabled={status === "submitting"}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={cn("pixel-input", errors.name && "pixel-input-error")}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 font-terminal text-sm leading-none text-rose-dark"
                >
                  ! {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 flex items-center justify-between gap-2"
              >
                <span className="hud-label-sm text-ink/80">Alamat Email</span>
                <span className="font-terminal text-sm leading-none text-rust">
                  WAJIB *
                </span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                disabled={status === "submitting"}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={cn("pixel-input", errors.email && "pixel-input-error")}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 font-terminal text-sm leading-none text-rose-dark"
                >
                  ! {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 flex items-center justify-between gap-2"
            >
              <span className="hud-label-sm text-ink/80">Subjek Pesan</span>
              <span className="font-terminal text-sm leading-none text-rust">
                WAJIB *
              </span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Peluang Kerja / Kolaborasi Proyek / Pertanyaan"
              disabled={status === "submitting"}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={cn("pixel-input", errors.subject && "pixel-input-error")}
            />
            {errors.subject && (
              <p
                id="subject-error"
                className="mt-1 font-terminal text-sm leading-none text-rose-dark"
              >
                ! {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 flex items-center justify-between gap-2"
            >
              <span className="hud-label-sm text-ink/80">Isi Pesan</span>
              <span className="font-terminal text-sm leading-none text-rust">
                WAJIB *
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tuliskan pesan, rincian proyek, atau tawaran kerja..."
              disabled={status === "submitting"}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(
                "pixel-input resize-y",
                errors.message && "pixel-input-error"
              )}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 font-terminal text-sm leading-none text-rose-dark"
              >
                ! {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-stretch justify-between gap-3 border-t-2 border-ink/15 pt-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="pixel-btn pixel-btn-primary w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <PixelIcon
                    name="terminal"
                    size={13}
                    className="animate-pulse-frame"
                  />
                  <span>MENGIRIM...</span>
                </>
              ) : (
                <>
                  <PixelIcon name="send" size={13} />
                  <span>KIRIM PESAN</span>
                </>
              )}
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 font-terminal text-base leading-none text-muted transition-colors hover:text-teal-dark"
            >
              <PixelIcon name="phone" size={11} className="text-teal-dark" />
              Atau via WhatsApp langsung
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
