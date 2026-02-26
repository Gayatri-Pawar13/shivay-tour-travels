import { NextResponse } from "next/server";
import * as z from "zod";
import { addReview, getReviews } from "@/lib/reviews-store";

export const runtime = "nodejs";

const createSchema = z.object({
  name: z.string().min(2),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(3),
  route: z.string().optional(),
});

export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json({ ok: true, reviews });
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = createSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const review = await addReview(parsed.data);
    return NextResponse.json({ ok: true, review });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to save review";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

