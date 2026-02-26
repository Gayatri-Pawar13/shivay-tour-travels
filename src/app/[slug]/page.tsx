import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingActions } from "@/components/floating-actions";
import { cabServices } from "@/content/cab-services";
import { contactInfo } from "@/content/contact";
import { routePages } from "@/content/route-pages";
import { BookingForm } from "@/sections/booking-form";
import { Footer } from "@/sections/footer";
import { Navbar } from "@/sections/navbar";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...cabServices.map((s) => ({ slug: s.slug })), ...routePages.map((r) => ({ slug: r.slug }))];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = cabServices.find((s) => s.slug === slug);
  if (service) {
    return {
      title: `${service.title} | Shivay Tour and Travels`,
      description: service.subtitle,
    };
  }

  const route = routePages.find((r) => r.slug === slug);
  if (route) {
    return {
      title: `${route.title} | Shivay Tour and Travels`,
      description: route.subtitle,
    };
  }

  return {};
}

function Hero({
  title,
  subtitle,
  image,
  crumbs,
  badges,
  defaultService,
}: {
  title: string;
  subtitle: string;
  image: string;
  crumbs: Array<{ label: string; href: string }>;
  badges: string[];
  defaultService?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-amber-50/20 bg-gradient-to-br from-black via-[#0d0c0a] to-[#1b0f02] shadow-2xl">
      <Image src={image} alt={title} fill priority className="object-cover opacity-60" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="relative grid gap-6 px-6 py-12 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="space-y-4 text-white">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-200/90">
            {crumbs.map((c, index) => (
              <span key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
                {index === crumbs.length - 1 ? null : <span className="px-2 text-white/40">/</span>}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((h) => (
              <Badge key={h} className="bg-amber-500/20 text-amber-100 ring-amber-400/30">
                {h}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
          <p className="text-lg text-white/80">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-amber-500 text-black hover:bg-amber-400">
              <Link href="/#contact">Book now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href={contactInfo.phonePrimaryHref}>Call</Link>
            </Button>
          </div>
        </div>

        <Card className="border-amber-50/20 bg-white/95">
          <CardHeader className="gap-1">
            <CardTitle className="text-xl">Quick booking</CardTitle>
            <p className="text-sm text-muted-foreground">Share trip details and we confirm quickly.</p>
          </CardHeader>
          <CardContent>
            <BookingForm defaultService={defaultService ?? title} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;

  const service = cabServices.find((s) => s.slug === slug);
  const route = routePages.find((r) => r.slug === slug);
  if (!service && !route) notFound();

  const title = service ? service.title : route!.title;
  const subtitle = service ? service.subtitle : route!.subtitle;
  const image = service ? service.heroImage : route!.heroImage;
  const badges = service ? service.highlights : route!.highlights;

  return (
    <div className="min-h-dvh bg-kora text-foreground">
      <Navbar />

      <main id="main" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Hero
          title={title}
          subtitle={subtitle}
          image={image}
          badges={badges}
          defaultService={service ? service.navLabel : title}
          crumbs={[
            { label: "Home", href: "/" },
            { label: service ? "Cab Services" : "Routes", href: service ? "/cab-services" : "/#routes" },
            { label: title, href: `/${slug}` },
          ]}
        />

        <section className="mt-12 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">What we offer</p>
          <h2 className="text-3xl font-semibold">
            {service ? "Reliable cab booking service in Indore" : "Comfortable outstation cab booking"}
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            {service
              ? "Quick confirmation, clean cars, and professional drivers. Book on call or WhatsApp in minutes."
              : "One-way and round trips with transparent pricing and 24/7 support."}
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {(service ? service.sections : route!.sections).map((section) => (
              <Card key={section.title} className="border-amber-100 bg-white/85 shadow-lg shadow-amber-500/10">
                <CardHeader className="gap-1">
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-foreground/90">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 inline-block size-2 rounded-full bg-amber-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            {route ? (
              <Card className="border-amber-100 bg-white/85 shadow-lg shadow-amber-500/10">
                <CardHeader className="gap-1">
                  <CardTitle className="text-xl">Route details</CardTitle>
                  <p className="text-sm text-muted-foreground">Distance and approximate travel time.</p>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-amber-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Distance
                    </div>
                    <div className="mt-1 text-xl font-semibold">{route.distance}</div>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Duration
                    </div>
                    <div className="mt-1 text-xl font-semibold">{route.duration}</div>
                  </div>
                </CardContent>
              </Card>
            ) : null}

            <Card className="border-amber-100 bg-white/85 shadow-lg shadow-amber-500/10">
              <CardHeader className="gap-1">
                <CardTitle className="text-xl">Direct contacts for instant booking</CardTitle>
                <p className="text-sm text-muted-foreground">Call or WhatsApp for quick confirmation.</p>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Button asChild className="bg-amber-500 text-black hover:bg-amber-600">
                  <Link href={contactInfo.phonePrimaryHref}>Call {contactInfo.phonePrimary}</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-200 hover:bg-amber-50">
                  <Link href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer">
                    Book via WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-200 hover:bg-amber-50">
                  <Link href="/fleet">View fleet & pricing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-amber-100 bg-white/85 shadow-lg shadow-amber-500/10">
              <CardHeader className="gap-1">
                <CardTitle className="text-xl">FAQ</CardTitle>
                <p className="text-sm text-muted-foreground">Quick answers before you book.</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="grid gap-3">
                  {(service ? service.faqs : route!.faqs).map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question} className="rounded-xl border px-4">
                      <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-sm text-foreground/90">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <FloatingActions bookHref="/#contact" />
      <Footer />
    </div>
  );
}
