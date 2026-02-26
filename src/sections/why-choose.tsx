import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Timer, Wallet } from "lucide-react";

const points = [
  {
    title: "On-time, every time",
    description: "Live tracking for airport and outstation pickups with buffer time planned.",
    icon: Timer,
  },
  {
    title: "Transparent pricing",
    description: "Clear per-km rates and driver allowances upfront. No surprises.",
    icon: Wallet,
  },
  {
    title: "Safe rides",
    description: "Verified drivers, clean cars, and responsive phone support during your trip.",
    icon: ShieldCheck,
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-50 to-white">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_20%_20%,#ffe9a7,transparent_55%)]" />
      <div className="relative space-y-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Why ride with us</p>
          <h2 className="text-3xl font-semibold text-foreground">Built for reliability</h2>
          <p className="text-muted-foreground">We focus on punctuality, clarity, and comfort.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {points.map((p) => (
            <Card key={p.title} className="h-full border-amber-50 bg-white/95 shadow-sm">
              <CardHeader className="gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <p.icon className="size-5" />
                </div>
                <CardTitle className="text-xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/90">{p.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

