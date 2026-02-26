import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cabServices } from "@/content/cab-services";

export function ServicesSection() {
  return (
    <section id="services" className="space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Services</p>
        <h2 className="text-3xl font-semibold text-foreground">Choose your cab service</h2>
        <p className="text-muted-foreground">Local, airport, corporate, and outstation travel with quick confirmation.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cabServices.map((service) => (
          <Link key={service.slug} href={`/${service.slug}`} className="group">
            <Card className="h-full overflow-hidden border-amber-50/30 bg-white/90 shadow-sm transition hover:shadow-md">
              <div className="relative h-40 overflow-hidden bg-black">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover opacity-95 transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {service.highlights.slice(0, 2).map((h) => (
                    <Badge key={h} className="bg-amber-500/20 text-amber-100 ring-amber-400/30">
                      {h}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader className="gap-2">
                <CardTitle className="text-lg">{service.navLabel}</CardTitle>
                <CardDescription>{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <span className="text-sm font-semibold text-amber-700 group-hover:text-amber-800">
                  View details →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" className="rounded-full border-amber-200 text-amber-800 hover:bg-amber-50">
          <Link href="/cab-services">View all cab services</Link>
        </Button>
      </div>
    </section>
  );
}
