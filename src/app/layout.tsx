import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import NextAuthSessionProvider from "@/providers/session-provider";
import ToastProvider from "@/providers/toast-provider";
import QueryProvider from "@/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interviewer AI - AI-Powered Interview Practice",
  description: "Practice interviews with AI-powered questions and feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/interviewAIicon.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
        <NextAuthSessionProvider>          
            <ToastProvider />
            <Header />
            {children}
            <Footer />         
        </NextAuthSessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
