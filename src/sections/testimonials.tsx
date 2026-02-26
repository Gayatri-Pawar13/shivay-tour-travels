import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { metrics } from "@/content/testimonials";
import { getReviews } from "@/lib/reviews-store";
import { StarRating } from "@/components/star-rating";
import { ReviewForm } from "@/components/review-form";

export const dynamic = "force-dynamic";

export async function TestimonialsSection() {
  const reviews = await getReviews();
  return (
    <section id="reviews" className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Trust</p>
        <h2 className="text-3xl font-semibold text-foreground">Riders count on us daily</h2>
        <p className="text-muted-foreground">Ratings and feedback from recent trips.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.slice(0, 6).map((item) => (
            <Card key={item.id} className="h-full">
              <CardHeader className="gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.route ?? "Verified rider"}</CardDescription>
                  </div>
                  <StarRating value={item.rating} />
                </div>
              </CardHeader>
              <CardContent className="text-sm text-foreground/90">{item.comment}</CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-white/70 p-4 shadow-inner">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-start justify-center rounded-xl bg-amber-50 p-4 text-foreground"
              >
                <div className="text-2xl font-semibold">{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          <Card className="border-amber-100 bg-white/85 shadow-lg shadow-amber-500/10">
            <CardHeader className="gap-1">
              <CardTitle className="text-xl">Leave a review</CardTitle>
              <CardDescription>Share rating and feedback to help other riders.</CardDescription>
            </CardHeader>
            <CardContent>
              <ReviewForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

