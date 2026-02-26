import type React from "react";
import { Car, Clock3, Plane, RefreshCw, ShieldCheck, Users2 } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
};

export const services: Service[] = [
  {
    title: "Local Indore",
    description: "Hourly and point-to-point within Indore city limits.",
    icon: Clock3,
    image: "/images/service-local.jpg",
  },
  {
    title: "Outstation",
    description: "Same-day and multi-day trips across Madhya Pradesh and nearby states.",
    icon: RefreshCw,
    image: "/images/service-outstation.jpg",
  },
  {
    title: "Airport Transfers",
    description: "On-time pickups and drops for IDR airport with flight tracking.",
    icon: Plane,
    image: "/images/service-airport.jpg",
  },
  {
    title: "Corporate",
    description: "Dedicated cabs for events, guests, and recurring staff movement.",
    icon: Users2,
    image: "/images/service-corporate.jpg",
  },
  {
    title: "One-Way Routes",
    description: "Pay only for the distance you travel on popular corridors.",
    icon: Car,
    image: "/images/service-oneway.jpg",
  },
  {
    title: "Safe & Clean",
    description: "Verified drivers, sanitized cars, and live support throughout the ride.",
    icon: ShieldCheck,
    image: "/images/service-safety.jpg",
  },
];

