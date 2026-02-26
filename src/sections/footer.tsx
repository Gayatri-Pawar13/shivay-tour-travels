import Link from "next/link";
import { Mail, MapPin, MessageCircle, PhoneCall, QrCode } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { ScannerImage } from "@/components/scanner-image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/cab-services" },
  { label: "Routes", href: "/#routes" },
  { label: "Fleet", href: "/fleet" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <div className="text-lg font-semibold">Shivay Tour and Travels</div>
          <p className="text-sm text-white/75">
            Local, outstation, and airport cabs with verified drivers and 24/7 support.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href={contactInfo.phonePrimaryHref}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90 hover:bg-white/15"
            >
              <PhoneCall className="size-4 text-white/80" />
              {contactInfo.phonePrimary}
            </Link>
            <Link
              href={contactInfo.phoneSecondaryHref}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90 hover:bg-white/15"
            >
              <PhoneCall className="size-4 text-white/80" />
              {contactInfo.phoneSecondary}
            </Link>
            <Link
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 font-semibold text-black hover:bg-amber-400"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Quick links
          </div>
          <ul className="grid gap-2 text-sm text-white/80 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Office
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <Link
              href={contactInfo.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 hover:text-white"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-white/70" />
              <span>{contactInfo.address}</span>
            </Link>
            <Link href={contactInfo.emailHref} className="inline-flex items-start gap-2 break-all hover:text-white">
              <Mail className="mt-0.5 size-4 shrink-0 text-white/70" />
              {contactInfo.email}
            </Link>
            <div className="text-white/65">{contactInfo.supportHours}</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Scanner
          </div>
          <div className="rounded-2xl bg-white p-3 text-black shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <QrCode className="size-4" />
              Scan to pay
            </div>
            <div className="mt-3 overflow-hidden rounded-xl border border-black/10 bg-white">
              <ScannerImage
                src={contactInfo.scannerImage}
                alt="Payment QR code"
                width={320}
                height={320}
              />
            </div>
            <div className="mt-2 text-xs text-black/60">
              Use any UPI app (PhonePe / Google Pay / Paytm).
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} Shivay Tour and Travels. All rights reserved.</div>
          <div>
            Transparent fares • Verified drivers • Local support
          </div>
        </div>
      </div>
    </footer>
  );
}
