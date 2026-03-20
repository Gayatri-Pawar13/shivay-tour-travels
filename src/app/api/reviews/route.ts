import { NextResponse } from "next/server";
import * as z from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const runtime = "nodejs";

const createSchema = z.object({
  name: z.string().min(2),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(3),
  route: z.string().optional(),
});

// GET → fetch reviews
export async function GET() {
  const snapshot = await getDocs(collection(db, "reviews"));

  const reviews = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json({ ok: true, reviews });
}

// POST → add review
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
    const docRef = await addDoc(collection(db, "reviews"), {
      ...parsed.data,
      createdAt: new Date(),
    });

    return NextResponse.json({
      ok: true,
      review: { id: docRef.id, ...parsed.data },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to save review";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}