import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { Header, Footer } from "@/components/common";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sigortanı Karşılaştır",
  description: "En uygun sigorta fiyatlarını karşılaştır",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {/* Insur Chatbot Widget */}
        {/* <Script src="https://insurai.test.onlyjs.com/chatbot/chatbot-widget.js" strategy="afterInteractive" />
        <insur-chatbot-widget></insur-chatbot-widget> */}
        {/* End Insur Chatbot Widget */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
