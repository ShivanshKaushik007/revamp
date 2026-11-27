import {
  Plus_Jakarta_Sans,
  Inter,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Shivansh Kaushik — Software Engineer",
  description:
    "Portfolio of Shivansh Kaushik — CS undergrad at IET Lucknow and full-stack engineer building real-time web applications, backend systems, and thoughtful interfaces.",
  keywords: [
    "Shivansh Kaushik",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "WebRTC",
    "Socket.io",
    "IET Lucknow",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark overflow-x-clip">
      <body
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-primary text-titanium-100 min-h-screen relative overflow-x-clip selection:bg-accent/25 selection:text-titanium-50`}
      >
        {/* Subtle tactile paper grain & static dot matrix */}
        <div className="fixed inset-0 -z-20 pointer-events-none dot-matrix opacity-55" />
        <div className="fixed inset-0 -z-10 pointer-events-none grain-overlay" />

        {/* Subtle warm ambient light at top edge only */}
        <div className="fixed top-[-180px] left-1/2 -translate-x-1/2 w-[780px] max-w-[100vw] h-[360px] bg-accent/[0.055] rounded-full blur-[140px] -z-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col min-h-screen overflow-x-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
