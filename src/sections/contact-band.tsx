import { contactInfo } from "@/content/contact";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

export function ContactBand() {
  return (
    <section className="mt-6 grid gap-4 rounded-3xl bg-black text-white shadow-lg shadow-black/30 sm:grid-cols-3">
      <div className="flex flex-col items-center gap-3 border-white/5 px-6 py-6 text-center sm:border-r">
        <div className="flex size-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-200">
          <MapPin className="size-5" />
        </div>
        <div className="text-xs uppercase tracking-wide text-white/70">Address</div>
        <Link
          href={contactInfo.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold hover:text-white/90"
        >
          {contactInfo.address}
        </Link>
      </div>

      <div className="flex flex-col items-center gap-3 border-white/5 px-6 py-6 text-center sm:border-r">
        <div className="flex size-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-200">
          <PhoneCall className="size-5" />
        </div>
        <div className="text-xs uppercase tracking-wide text-white/70">Call us</div>
        <div className="grid gap-1 text-base font-semibold">
          <Link href={contactInfo.phonePrimaryHref} className="hover:text-white/90">
            {contactInfo.phonePrimary}
          </Link>
          <Link href={contactInfo.phoneSecondaryHref} className="text-white/80 hover:text-white/90">
            {contactInfo.phoneSecondary}
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 px-6 py-6 text-center">
        <div className="flex size-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-200">
          <Mail className="size-5" />
        </div>
        <div className="text-xs uppercase tracking-wide text-white/70">Email</div>
        <Link href={contactInfo.emailHref} className="break-all text-base font-semibold hover:text-white/90">
          {contactInfo.email}
        </Link>
      </div>
    </section>
  );
}

