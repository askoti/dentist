import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // High-end font pairing
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

// For clean, professional body text
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// For the luxurious "Riverdale" serif headings
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AskDentist | Premier Boutique Dentistry",
  description: "Experience modern dental care with a focus on luxury, comfort, and advanced technology.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> {/* Added smooth scroll for the 'Book Now' links */}
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#F8F9FA] text-[#1A252F]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}