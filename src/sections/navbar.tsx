import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, PhoneCall } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cabServices } from "@/content/cab-services";
import { ServicesDropdown } from "@/components/services-dropdown";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Routes", href: "/#routes" },
  { label: "Fleet", href: "/fleet" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const servicesNav = cabServices.map((s) => ({
  label: s.navLabel,
  href: `/${s.slug}`,
}));

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="Shivay Tour and Travels"
            width={150}
            height={150}
            priority
            className="h-9 w-9 rounded-md object-cover"
            sizes="36px"
          />
          <span className="hidden text-sm font-semibold text-white sm:inline">
            Shivay Tour and Travels
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-white/80 md:flex">
          <ServicesDropdown items={servicesNav} />

          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white/15 md:inline-flex"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </Link>
          <Link
            href={contactInfo.phonePrimaryHref}
            className="inline-flex items-center justify-center rounded-full bg-amber-500/15 p-2 text-amber-200 hover:bg-amber-500/20 sm:hidden"
            aria-label={`Call ${contactInfo.phonePrimary}`}
          >
            <PhoneCall className="size-5" />
          </Link>
          <Link
            href={contactInfo.phonePrimaryHref}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/25 transition hover:from-amber-300 hover:to-amber-500 sm:inline-flex"
          >
            <PhoneCall className="size-4" />
            {contactInfo.phonePrimary}
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white">
              <SheetHeader className="border-b border-white/10">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-1 p-4">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="rounded-xl px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                  >
                    Home
                  </Link>
                </SheetClose>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Services
                </div>
                <SheetClose asChild>
                  <Link
                    href="/cab-services"
                    className="rounded-xl px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                  >
                    All services
                  </Link>
                </SheetClose>
                {servicesNav.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Links
                </div>
                {primaryNav.slice(1).map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto grid gap-3 p-4">
                <Link
                  href={contactInfo.phonePrimaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-3 text-sm font-semibold text-black hover:from-amber-300 hover:to-amber-500"
                >
                  <PhoneCall className="size-4" />
                  Call {contactInfo.phonePrimary}
                </Link>
                <Link
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

