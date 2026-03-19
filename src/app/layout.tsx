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
      <body className="antialiased">
        {children}
        <SocialProof />
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}