import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteLayout } from "@/components/layout/site-layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Smart Gadget Solution LLC",
    template: "%s | Smart Gadget Solution LLC",
  },
  description:
    "Premium device repair services from Smart Gadget Solution LLC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
