import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/content/contact";
import { vehicles } from "@/content/vehicles";
import { buildWhatsAppHref } from "@/lib/whatsapp";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/footer";
import { FloatingActions } from "@/components/floating-actions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.name} | Fleet | Shivay Tour and Travels`, 
    description: `${vehicle.name} available from ₹${vehicle.ratePerKm}/km. Book your cab from Indore with 24/7 support.`,
  };
}

export default async function FleetVehiclePage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) notFound();

  const whatsappHref = buildWhatsAppHref(
    contactInfo.whatsappNumber,
    `Hello! I want to book ${vehicle.name} (₹${vehicle.ratePerKm}/km).`
  );

  return (
    <div className="min-h-dvh bg-kora text-foreground">
      <Navbar />

      <main id="main" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/fleet" className="text-sm font-semibold text-amber-800 hover:text-amber-900">
            ← Back to fleet
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden">
            <div className="relative aspect-[16/10] bg-black">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/0" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <Badge className="bg-amber-500/20 text-amber-100 ring-amber-400/30">
                  ₹{vehicle.ratePerKm}/km
                </Badge>
              </div>
            </div>
            <CardHeader className="gap-2">
              <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
              <div className="text-sm text-muted-foreground">
                Starting from <span className="font-semibold text-foreground">₹{vehicle.ratePerKm}/km</span>
              </div>
            </CardHeader>
          </Card>

          <Card className="h-fit">
            <CardHeader className="gap-2">
              <CardTitle className="text-xl">Book this car</CardTitle>
              <p className="text-sm text-muted-foreground">
                Share pickup/drop and time on WhatsApp. We confirm quickly.
              </p>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Button asChild className="bg-[#25D366] text-black hover:bg-[#20c45e]">
                <Link href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp now
                </Link>
              </Button>
              <Button asChild className="bg-amber-500 text-black hover:bg-amber-600">
                <Link href={contactInfo.phonePrimaryHref}>Call {contactInfo.phonePrimary}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#contact">Open booking form</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <FloatingActions bookHref="/#contact" />
      <Footer />
    </div>
  );
}
