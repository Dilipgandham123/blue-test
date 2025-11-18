import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bluejay Innolabs | Enterprise Audio-Video Solutions",
  description:
    "Innovative solutions with Unmatched support. Enterprise Audio-Video solutions for modern businesses.",
  keywords: [
    "audio video solutions",
    "enterprise av",
    "conference room systems",
    "bluejay innolabs",
  ],
  authors: [{ name: "Bluejay Innolabs" }],
  openGraph: {
    title: "Bluejay Innolabs | Enterprise Audio-Video Solutions",
    description: "Innovative solutions with Unmatched support",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}