import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

// IMPORT KOMPONEN PENTING (YANG HILANG TADI)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MA Soleh Al Mubarok",
  description: "Mencetak Generasi Cerdas & Berkarakter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="id">
        <body className={inter.className}>
          
          {/* KITA PASANG LAGI HEADERNYA DI SINI */}
          <Navbar />
          
          {children}
          
          {/* KITA PASANG LAGI FOOTERNYA DI SINI */}
          <Footer />
          
        </body>
      </html>
    </ClerkProvider>
  );
}