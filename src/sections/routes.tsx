import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { popularRoutes } from "@/content/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RoutesSection() {
  return (
    <section id="routes" className="space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Popular routes</p>
        <h2 className="text-3xl font-semibold text-foreground">One-way and round trip corridors</h2>
        <p className="text-muted-foreground">Transparent fares on the most-booked city pairs.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularRoutes.map((route) => (
          <Card key={route.title} className="h-full border-amber-50/30 bg-white/95 shadow-sm">
            <CardHeader className="gap-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-xl">{route.title}</CardTitle>
                {route.badge ? (
                  <Badge className="bg-amber-500/15 text-amber-800 ring-amber-500/30">{route.badge}</Badge>
                ) : null}
              </div>
              <CardDescription>{route.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span>{route.distance}</span>
                <div className="flex items-center gap-1 text-foreground">
                  <ArrowRight className="size-4" />
                  <span>{route.duration}</span>
                </div>
              </div>
              <Button asChild size="sm" variant="outline" className="border-amber-200 hover:bg-amber-50">
                <Link href={`/${route.slug}`}>Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

