import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BaseLayout from "@/components/layouts/BaseLayouts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "moviesite-mandlake",
  description: "this is site by mandlake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#2B2B2B] text-white`}
      >
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
