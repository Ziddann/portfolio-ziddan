import type { Metadata, Viewport } from "next";
import { Inter, Press_Start_2P, Silkscreen, VT323 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { profileData } from "@/data/profile";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PixelCursor } from "@/components/ui/PixelCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const display = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const terminal = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F2E7D2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${profileData.name} — IoT & Software Engineer | Portfolio`,
  description: profileData.shortBio,
  keywords: [
    "Muhamad Ziddan Fadillah",
    "Ziddan Fadillah",
    "Teknik Informatika Trisakti",
    "Internet of Things",
    "IoT Engineer",
    "Fullstack Developer",
    "Software Engineer",
    "ESP32",
    "ROS 2",
    "Laravel",
    "React",
    "Next.js",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    title: `${profileData.name} — IoT & Software Engineer`,
    description: profileData.shortBio,
    type: "website",
    locale: "id_ID",
    siteName: "ZIDDAN.EXE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${pixel.variable} ${display.variable} ${terminal.variable}`}
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <Script id="motion-flag" strategy="beforeInteractive">
          {`try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion')}}catch(e){}`}
        </Script>

        <a href="#main-content" className="skip-link pixel-btn pixel-btn-primary">
          Lewati ke konten utama
        </a>

        <SmoothScrollProvider>
          <PixelCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
