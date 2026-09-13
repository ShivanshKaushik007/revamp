import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/ui/header";
import ShapeGrid from "@/components/ui/ShapeGrid";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  title: "Shivansh Kaushik — Full-Stack Engineer & Tech Lead",
  description:
    "Portfolio of Shivansh Kaushik — Full-Stack Software Engineer & Technical Head at E-Cell IET Lucknow. Specializing in high-concurrency real-time systems, WebSockets, WebRTC, and craft-driven UI.",
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
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-primary text-titanium-100 min-h-screen relative selection:bg-accent/20 selection:text-accent`}
      >
        {/* Ambient background glow accents */}
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[500px] bg-slate-800/10 rounded-full blur-[180px]" />
        </div>

        {/* Dynamic canvas grid with subtle ice-blue interaction */}
        <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <ShapeGrid
            direction="diagonal"
            speed={0.15}
            borderColor="rgba(255, 255, 255, 0.035)"
            hoverFillColor="rgba(56, 189, 248, 0.08)"
            squareSize={55}
            shape="square"
            hoverTrailAmount={4}
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

