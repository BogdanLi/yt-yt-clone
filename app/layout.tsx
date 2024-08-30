import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import MobileSidebar from "@/components/UI/MobileSidebar";
import { PopupsStoreProvider } from "@/providers/popups-provider";
import Modal from "@/components/UI/Modal/Modal";

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "YtYt clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${montserrat.className} bg-[#f9f8fd]`}>
        <PopupsStoreProvider>
          <MobileSidebar />
          <Header />
          {children}
          <Footer />
        </PopupsStoreProvider>
      </body>
    </html>
  );
}
