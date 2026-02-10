import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  variable: "--font-libre-caslon",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital SME Shift",
  description: "Transform your business for the digital age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreCaslon.variable} antialiased bg-[#060507]`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
