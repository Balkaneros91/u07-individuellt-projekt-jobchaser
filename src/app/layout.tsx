"use client";

import { Provider } from "react-redux";
import { store } from '@/redux/store';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/components/DarkModeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all`}>
        <Provider store={store}>
          <DarkModeProvider>
            <Header />
            <main className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">{children}</main>
            <Footer />
          </DarkModeProvider>
        </Provider>
      </body>
    </html>
  );
}
