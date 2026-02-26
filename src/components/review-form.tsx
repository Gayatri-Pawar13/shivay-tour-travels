"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "@/components/star-rating";

export function ReviewForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim().length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (comment.trim().length < 3) {
      toast.error("Please enter your feedback.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          route: route.trim() || undefined,
          rating,
          comment: comment.trim(),
        }),
      });
      const body = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !body?.ok) {
        throw new Error(body?.error ?? "Failed to submit review");
      }

      toast.success("Thanks! Your review was submitted.");
      router.refresh();
      setName("");
      setRoute("");
      setComment("");
      setRating(5);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to submit review";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-2">
        <div className="text-sm font-semibold">Your rating</div>
        <StarRating value={rating} onChange={setRating} />
      </div>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <Input value={route} onChange={(e) => setRoute(e.target.value)} placeholder="Trip (optional) e.g., Indore → Ujjain" />
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your feedback"
        className="min-h-24"
      />
      <Button type="submit" disabled={submitting} className="bg-amber-500 text-black hover:bg-amber-600">
        {submitting ? "Submitting…" : "Submit review"}
      </Button>
    </form>
  );
}
