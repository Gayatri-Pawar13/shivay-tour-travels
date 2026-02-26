import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/content/contact";
import { MessageCircle, Phone, Send } from "lucide-react";
import Link from "next/link";
import { BookingForm } from "./booking-form";

export function ContactSection() {
  return (
    <section id="contact" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="border-amber-100 bg-white/85 shadow-lg shadow-amber-500/10">
        <CardHeader>
          <CardTitle className="text-2xl">Book a cab</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingForm />
        </CardContent>
      </Card>
      <Card className="h-full bg-gradient-to-br from-amber-50 via-white to-white shadow-inner shadow-amber-500/10">
        <CardHeader className="gap-2">
          <CardTitle className="text-xl">Talk to us now</CardTitle>
          <p className="text-sm text-muted-foreground">{contactInfo.supportHours}</p>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-white px-4 py-3 shadow-sm">
            <Phone className="size-5 text-amber-600" />
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Call</div>
              <div className="text-lg font-semibold text-foreground">{contactInfo.phonePrimary}</div>
              <div className="text-sm text-muted-foreground">{contactInfo.phoneSecondary}</div>
            </div>
            <Button asChild className="bg-amber-500 text-black hover:bg-amber-600">
              <Link href={contactInfo.phonePrimaryHref}>Call</Link>
            </Button>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-white px-4 py-3 shadow-sm">
            <MessageCircle className="size-5 text-amber-600" />
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">WhatsApp</div>
              <div className="text-lg font-semibold text-foreground">{contactInfo.whatsappDisplay}</div>
              <div className="text-sm text-muted-foreground">Chat for instant quotes</div>
            </div>
            <Button asChild variant="outline" className="border-amber-200 hover:bg-amber-50">
              <Link href={contactInfo.whatsappHref}>Message</Link>
            </Button>
          </div>
          <div className="rounded-xl border border-amber-100 bg-white px-4 py-3 shadow-sm">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
            <Link href={contactInfo.emailHref} className="text-foreground hover:text-foreground/80">
              {contactInfo.email}
            </Link>
          </div>
          <div className="rounded-xl border border-amber-100 bg-white px-4 py-3 shadow-sm">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Office</div>
            <Link
              href={contactInfo.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/80"
            >
              {contactInfo.address}
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-amber-100 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-amber-100 px-4 py-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Location</div>
                <div className="text-sm font-semibold text-foreground">Open in Google Maps</div>
              </div>
              <Button asChild size="sm" variant="outline" className="border-amber-200 hover:bg-amber-50">
                <Link href={contactInfo.mapsHref} target="_blank" rel="noopener noreferrer">
                  View
                </Link>
              </Button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                title="Shivay Tour and Travels location"
                src={contactInfo.mapsEmbedSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-white px-4 py-3 shadow-sm">
            <Send className="size-5 text-amber-600" />
            <div className="text-foreground">Share trip details; we confirm on call/WhatsApp.</div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

