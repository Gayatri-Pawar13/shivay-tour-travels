"use client";

import Link from "next/link";
import { CalendarCheck, MessageCircle, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactInfo } from "@/content/contact";
import { cn } from "@/lib/utils";
import { buildWhatsAppHref } from "@/lib/whatsapp";

export function FloatingActions({
  className,
  bookHref = "/#contact",
}: {
  className?: string;
  bookHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setIsCoarse(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const whatsappHref = buildWhatsAppHref(
    contactInfo.whatsappNumber,
    "Hi! I need a cab booking quote from Indore."
  );

  return (
    <div
      className={cn(
        "fixed bottom-3 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-4 sm:right-4",
        className
      )}
      onMouseEnter={() => {
        if (!isCoarse) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!isCoarse) setOpen(false);
      }}
    >
      <div
        id="floating-actions"
        className={cn(
          "flex flex-col gap-2 transition-all duration-200",
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        )}
        aria-hidden={!open}
      >
        <Link
          href={bookHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-3 py-3 text-sm font-semibold text-black shadow-lg shadow-black/15 hover:bg-white/95 sm:px-4 sm:py-2"
          aria-label="Book now"
        >
          <CalendarCheck className="size-4" />
          <span className="hidden sm:inline">Book now</span>
        </Link>
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-black shadow-lg shadow-black/20 hover:bg-[#20c45e] sm:px-4 sm:py-2"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Link>
        <Link
          href={contactInfo.phonePrimaryHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-3 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/25 hover:bg-amber-400 sm:px-4 sm:py-2"
          aria-label="Call now"
        >
          <PhoneCall className="size-4" />
          <span className="hidden sm:inline">Call</span>
        </Link>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-black/85"
        aria-expanded={open}
        aria-controls="floating-actions"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-4" /> : <MessageCircle className="size-4" />}
        <span className="hidden sm:inline">{open ? "Close" : "Contact"}</span>
      </button>
    </div>
  );
}
