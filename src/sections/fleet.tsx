import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { vehicles } from "@/content/vehicles";

export function FleetSection() {
  const preview = vehicles.slice(0, 6);
  return (
    <section id="fleet" className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Fleet & pricing</p>
        <h2 className="text-3xl font-semibold text-foreground">Choose your car by comfort & budget</h2>
        <p className="text-muted-foreground">Transparent per-km rates for sedans, SUVs, and group travellers.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((car) => (
          <Card key={car.slug} className="group h-full overflow-hidden">
            <div className="relative h-40 overflow-hidden bg-black">
              <Image
                src={car.image}
                alt={car.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-95 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/5" />
              <div className="absolute bottom-3 left-3">
                <Badge className="bg-amber-500/20 text-amber-100 ring-amber-400/30">
                  ₹{car.ratePerKm}/km
                </Badge>
              </div>
            </div>
            <CardHeader className="gap-2">
              <CardTitle className="text-xl">{car.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-3">
              <div className="text-sm text-muted-foreground">
                Starting from <span className="font-semibold text-foreground">₹{car.ratePerKm}/km</span>
              </div>
              <Button asChild size="sm" className="bg-amber-500 text-black hover:bg-amber-600">
                <Link href={`/fleet/${car.slug}`}>View</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" className="rounded-full border-amber-200 text-amber-700 hover:bg-amber-50">
          <Link href="/fleet">View full fleet & pricing</Link>
        </Button>
      </div>
    </section>
  );
}

