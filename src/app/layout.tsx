import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TeachGrid - AI-powered Learning Platform",
  description: "The only learning platform you need to Transform Education. Create, deliver, and assess learning content in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        {children}
        <SocialProof />
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}