import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppToaster } from "@/components/app-toaster";
import { getBaseUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = new URL(await getBaseUrl());

  return {
    title: "Shivay Tour and Travels | Outstation, Airport & Local Cabs",
    description:
      "Book reliable cabs in Indore for airport transfers, outstation one-way or round trips, and local rides with verified drivers and transparent fares.",
    metadataBase: baseUrl,

    // ✅ GOOGLE VERIFICATION ADDED HERE
    verification: {
      google: "N8QDNLtDGjpni5BXP-YmoaJ2Zy7WLhNUt4dUY8rOAx4",
    },

    openGraph: {
      title: "Shivay Tour and Travels",
      description:
        "Reliable local, outstation, and airport cabs from Indore with transparent pricing and 24/7 support.",
      url: baseUrl,
      siteName: "Shivay Tour and Travels",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shivay Tour and Travels — taxi at night",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AppToaster />
      </body>
    </html>
  );
}