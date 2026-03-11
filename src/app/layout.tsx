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
    title:
      "Shivay Travels Indore | Taxi Service, Tempo Traveller & Force Urbania on Rent",

    description:
      "Shivay Travels Indore offers reliable taxi service, tempo traveller on rent, and Force Urbania rental in Indore. Book comfortable airport transfers, local sightseeing, and outstation trips including Indore to Ujjain, Omkareshwar, and nearby destinations.",

    metadataBase: baseUrl,

    // ✅ CANONICAL URL (VERY IMPORTANT FOR GOOGLE INDEX)
    alternates: {
      canonical: "https://shivaytravelsindore.com",
    },

    verification: {
      google: "N8QDNLtDGjpni5BXP-YmoaJ2Zy7WLhNUt4dUY8rOAx4",
    },

    keywords: [
      "Taxi service in Indore",
      "Tempo traveller on rent in Indore",
      "Force Urbania on rent in Indore",
      "Indore airport taxi",
      "Indore to Ujjain taxi",
      "Indore to Omkareshwar taxi",
      "Travel agency in Indore",
      "Cab booking Indore",
    ],

    openGraph: {
      title:
        "Shivay Travels Indore | Taxi & Tempo Traveller Rental in Indore",
      description:
        "Book reliable taxi service, tempo traveller, and Force Urbania rental in Indore with Shivay Travels. Affordable local, airport, and outstation trips with professional drivers.",
      url: baseUrl,
      siteName: "Shivay Travels Indore",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shivay Travels Indore Taxi Service",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Shivay Travels Indore | Taxi & Tempo Traveller Rental",
      description:
        "Reliable taxi service and tempo traveller rental in Indore for airport transfers, local sightseeing, and outstation trips.",
      images: ["/og-image.png"],
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