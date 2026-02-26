"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange?: (value: number) => void;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-1", className)} role="radiogroup" aria-label="Rating">
      {Array.from({ length: 5 }).map((_, index) => {
        const rating = index + 1;
        const selected = rating <= value;
        const Icon = (
          <Star className={cn("size-4", selected ? "fill-amber-400 text-amber-400" : "text-amber-300/70")} />
        );

        if (!onChange) {
          return (
            <span key={rating} aria-hidden className="p-1">
              {Icon}
            </span>
          );
        }

        return (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className="cursor-pointer rounded-sm p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
            aria-label={`${rating} star`}
            aria-checked={selected}
            role="radio"
          >
            {Icon}
          </button>
        );
      })}
    </div>
  );
}
