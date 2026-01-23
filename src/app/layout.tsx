import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mas Metal Craft & Automation",
    default: "Mas Metal Craft & Automation | Metal Works in Madurai",
  },
  description: "Mas Metal Craft & Automation - Leading manufacturer of gates, grills, railings, and rolling shutters in Madurai since 2009. Call for custom metal works.",
  metadataBase: new URL("https://masmetal.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mas Metal Craft & Automation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen bg-background text-text-primary flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
