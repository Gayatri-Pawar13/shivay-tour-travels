"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { heroContent } from "@/content/hero";
import Link from "next/link";
import { type FormEvent, useMemo, useState } from "react";
import { toast } from "sonner";
import { contactInfo } from "@/content/contact";
import { buildWhatsAppHref } from "@/lib/whatsapp";
import type { Enquiry } from "@/lib/enquiry";
import { vehicles } from "@/content/vehicles";

export function HeroSection() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [carClass, setCarClass] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const whatsappHref = useMemo(() => {
    const message = [
      "Quick cab enquiry",
      name ? `Name: ${name}` : undefined,
      phone ? `Phone: ${phone}` : undefined,
      dateTime ? `Pickup date & time: ${dateTime}` : undefined,
      carClass ? `Car class: ${carClass}` : undefined,
    ]
      .filter(Boolean)
      .join("\n");

    return buildWhatsAppHref(contactInfo.whatsappNumber, message);
  }, [carClass, dateTime, name, phone]);

  const onEnquire = (event: FormEvent) => {
    event.preventDefault();
    if (!consent) {
      toast.error("Please accept the consent checkbox to continue.");
      return;
    }
    if (name.trim().length < 2) {
      toast.error("Enter your name.");
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      toast.error("Enter a valid phone number.");
      return;
    }
    if (!dateTime) {
      toast.error("Select pickup date & time.");
      return;
    }
    if (!carClass) {
      toast.error("Select a car class.");
      return;
    }

    const enquiry: Enquiry = {
      source: "hero",
      name,
      phone,
      dateTime,
      car: carClass,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    };

    fetch("/api/enquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(enquiry),
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(body?.error ?? "Failed to submit enquiry");
        }
        const body = (await res.json().catch(() => null)) as { emailSent?: boolean } | null;
        const emailSent = Boolean(body?.emailSent);

        window.open(whatsappHref, "_blank", "noopener,noreferrer");
        toast.success(emailSent ? "Enquiry sent. Opening WhatsApp…" : "Opening WhatsApp…", {
          description: emailSent ? "We also emailed your details to our team." : "Send your enquiry for an instant quote.",
        });
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Failed to submit enquiry";
        toast.error(message, { description: "Please try again or use WhatsApp/Call." });
        window.open(whatsappHref, "_blank", "noopener,noreferrer");
      });
  };

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-amber-50/20 bg-gradient-to-br from-black via-[#0d0c0a] to-[#1b0f02] shadow-2xl">
      <Image
        src="/images/hero.jpg"
        alt="Shivay Tour and Travels — cab booking"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 text-white lg:w-3/5">
          <Badge className="w-fit bg-amber-500/20 text-amber-200 ring-amber-400/40">
            {heroContent.badge}
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {heroContent.title}
          </h1>
          <p className="text-lg text-white/80">{heroContent.subtitle}</p>
          <ul className="grid gap-2 text-base text-white/85 sm:grid-cols-2">
            {heroContent.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block size-2 rounded-full bg-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onEnquire}
          className="w-full rounded-2xl bg-white/95 p-6 shadow-amber-500/20 shadow-2xl backdrop-blur"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <label className="grid gap-2">
              <span className="text-xs font-semibold text-muted-foreground">Your name</span>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="h-12 rounded-xl border-amber-100"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-semibold text-muted-foreground">Pickup date & time</span>
              <Input
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                type="datetime-local"
                className="h-12 rounded-xl border-amber-100"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-semibold text-muted-foreground">Car class</span>
              <Select value={carClass} onValueChange={setCarClass}>
                <SelectTrigger className="h-12 rounded-xl border-amber-100">
                  <SelectValue placeholder="Car Class" />
                </SelectTrigger>
                <SelectContent>
                  {vehicles.map((vehicle) => (
                    <SelectItem key={vehicle.slug} value={vehicle.name}>
                      {vehicle.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-semibold text-muted-foreground">Phone</span>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 Your Phone"
                className="h-12 rounded-xl border-amber-100"
                inputMode="tel"
                autoComplete="tel"
              />
            </label>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-amber-500"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />{" "}
              I agree that my submitted data is being collected and stored.
            </label>
            <div className="flex flex-wrap gap-3">
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 text-black hover:from-amber-300 hover:to-amber-500"
              >
                Enquire Now
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-amber-200 text-amber-700">
                <Link href={heroContent.primaryCta.href}>Call Now</Link>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

