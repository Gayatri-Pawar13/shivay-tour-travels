import "server-only";

import { randomUUID } from "crypto";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import * as z from "zod";

const reviewSchema = z.object({
  id: z.string(),
  name: z.string(),
  rating: z.number().int().min(1).max(5),
  comment: z.string(),
  route: z.string().optional(),
  createdAt: z.string(),
});

const reviewCreateSchema = z.object({
  name: z.string().min(2).max(80),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(3).max(800),
  route: z.string().max(80).optional(),
});

const reviewsFileSchema = z.object({
  reviews: z.array(reviewSchema),
});

export type Review = z.infer<typeof reviewSchema>;
export type ReviewCreate = z.infer<typeof reviewCreateSchema>;

function getReviewsFilePath() {
  return path.join(process.cwd(), "data", "reviews.json");
}

async function readDb() {
  const filePath = getReviewsFilePath();
  const raw = await readFile(filePath, "utf8");
  return reviewsFileSchema.parse(JSON.parse(raw));
}

async function writeDb(db: z.infer<typeof reviewsFileSchema>) {
  const filePath = getReviewsFilePath();
  await writeFile(filePath, JSON.stringify(db, null, 2) + "\n", "utf8");
}

export async function getReviews() {
  const db = await readDb();
  return db.reviews
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function addReview(input: ReviewCreate) {
  const create = reviewCreateSchema.parse(input);
  const db = await readDb();

  const review: Review = {
    id: randomUUID(),
    name: create.name,
    rating: create.rating,
    comment: create.comment,
    route: create.route,
    createdAt: new Date().toISOString(),
  };

  db.reviews.unshift(review);
  db.reviews = db.reviews.slice(0, 60);
  await writeDb(db);

  return review;
}

