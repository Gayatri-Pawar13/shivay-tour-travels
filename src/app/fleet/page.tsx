import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/content/vehicles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/footer";
import { FloatingActions } from "@/components/floating-actions";

export const metadata = {
  title: "Fleet | Shivay Tour and Travels",
  description: "Browse available cars and per-km rates for Indore local and outstation trips.",
};

export default function FleetPage() {
  return (
    <div className="min-h-dvh bg-kora text-foreground">
      <Navbar />

      <main id="main" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Fleet</p>
          <h1 className="text-3xl font-semibold">Choose your car</h1>
          <p className="text-muted-foreground">
            Rates shown are per-km. Final fare depends on route, timings, and availability.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.slug} className="group overflow-hidden">
              <div className="relative h-44 overflow-hidden bg-black">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-95 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/5" />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-amber-500/20 text-amber-100 ring-amber-400/30">
                    ₹{vehicle.ratePerKm}/km
                  </Badge>
                </div>
              </div>
              <CardHeader className="gap-2">
                <CardTitle className="text-xl">{vehicle.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-3">
                <div className="text-sm text-muted-foreground">
                  Starting from <span className="font-semibold text-foreground">₹{vehicle.ratePerKm}/km</span>
                </div>
                <Button asChild className="bg-amber-500 text-black hover:bg-amber-600">
                  <Link href={`/fleet/${vehicle.slug}`}>View</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <FloatingActions bookHref="/#contact" />
      <Footer />
    </div>
  );
}
