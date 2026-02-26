import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingActions } from "@/components/floating-actions";
import { cabServices } from "@/content/cab-services";
import { routePages } from "@/content/route-pages";
import { Footer } from "@/sections/footer";
import { Navbar } from "@/sections/navbar";

export const metadata = {
  title: "Cab Services | Shivay Tour and Travels",
  description: "Explore cab services in Indore: local, airport, corporate, outstation, and one-way travel.",
  keywords: [
    "Indore cabs services",
    "Indore airport taxi services",
    "Indore railway cabs",
    "Indore to ujjain",
    "Indore to omkareshwar",
    "Indore to Maheshware",
    "Indore best services",
    "Indore to Pitampur",
    "taxi services",
    "taxi services in indore",
    "taxi near me",
    "cab company near me",
    "taxi booking",
    "24/7 taxi service Indore",
    "Indore outstation cab service",
  ],
};

export default function CabServicesPage() {
  return (
    <div className="min-h-dvh bg-kora text-foreground">
      <Navbar />

      <main id="main" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative isolate overflow-hidden rounded-3xl border border-amber-50/20 bg-gradient-to-br from-black via-[#0d0c0a] to-[#1b0f02] shadow-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Cab services"
            fill
            priority
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
          <div className="relative px-6 py-14 text-center text-white sm:px-10 lg:py-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-200/90">
              <Link href="/" className="hover:text-white">
                Home
              </Link>{" "}
              <span className="px-2 text-white/40">/</span> Our Cab Services
            </div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">Our Cab Services</h1>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-white/80">
              Local rides, airport transfers, corporate cabs, outstation travel, and one-way bookings.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full bg-amber-500 text-black hover:bg-amber-400">
                <Link href="/#contact">Book now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/fleet">View fleet</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cabServices.map((service) => (
            <Card key={service.slug} className="group h-full overflow-hidden">
 <div className="relative h-44 overflow-hidden bg-black">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-95 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/5" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {service.highlights.slice(0, 2).map((h) => (
                    <Badge key={h} className="bg-amber-500/20 text-amber-100 ring-amber-400/30">
                      {h}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader className="gap-2">
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                <Button asChild className="bg-amber-500 text-black hover:bg-amber-600">
                  <Link href={`/${service.slug}`}>View details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-10 rounded-3xl bg-black p-6 text-white shadow-lg shadow-black/25 sm:p-8">
          <div className="flex flex-col gap-2 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-200/90">
              Quick links
            </div>
            <div className="text-2xl font-semibold">Popular services & routes</div>
            <div className="text-sm text-white/70">Open a page and book instantly via WhatsApp/call.</div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="text-sm font-semibold text-amber-200">Services</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {cabServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="text-white/85 hover:text-white">
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="text-sm font-semibold text-amber-200">Routes</div>
              <ul className="mt-3 grid gap-2 text-sm">
                {routePages.slice(0, 6).map((r) => (
                  <li key={r.slug}>
                    <Link href={`/${r.slug}`} className="text-white/85 hover:text-white">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full bg-amber-500 text-black hover:bg-amber-400">
              <Link href="/#contact">Book via form</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="/#routes">Browse routes</Link>
            </Button>
          </div>
        </section>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="rounded-full border-amber-200 text-amber-800 hover:bg-amber-50">
            <Link href="/#contact">Book a cab now</Link>
          </Button>
        </div>
      </main>

      <FloatingActions bookHref="/#contact" />
      <Footer />
    </div>
  );
}
