import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TeachGrid - AI-powered Learning Platform",
  description: "Transform Education with AI-driven infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative bg-transparent min-h-screen">
        {/* Premium Soft-Pastel Global Aurora Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#fdfaf2] md:bg-[#fefafb]">
          <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-fuchsia-200/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[60px]" />
        </div>
        
        {children}
        <SocialProof />
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}