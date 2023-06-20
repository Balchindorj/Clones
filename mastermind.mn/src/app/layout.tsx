"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import RootProvider from "./providers/RootProvider";
import Header from "./Header";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </RootProvider>
  );
}
