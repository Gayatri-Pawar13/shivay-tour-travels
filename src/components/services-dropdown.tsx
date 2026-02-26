"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesDropdown({
  items,
  className,
}: {
  items: Array<{ label: string; href: string }>;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        Services <ChevronDown className="size-4 text-white/70" />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label="Services menu"
        className={cn(
          "absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl bg-amber-500 p-2 shadow-xl transition",
          open
            ? "visible translate-y-0 opacity-100 pointer-events-auto"
            : "invisible translate-y-1 opacity-0 pointer-events-none"
        )}
      >
        <Link
          href="/cab-services"
          role="menuitem"
          onClick={() => setOpen(false)}
          className="block rounded-xl px-3 py-2 text-sm font-semibold text-black/90 hover:bg-black/10"
        >
          All services
        </Link>
        <div className="my-2 h-px bg-black/15" />
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2 text-sm font-semibold text-black hover:bg-black/10"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
