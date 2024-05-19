"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Cookies from "./_components/Cookies";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Cookies />
        {children}
        <Footer />
        </body>
    </html>
  );
}
