import * as z from "zod";

export const enquirySchema = z.object({
  source: z.enum(["hero", "booking"]),
  name: z.string().min(2),
  phone: z.string().min(10),
  pickup: z.string().optional(),
  drop: z.string().optional(),
  dateTime: z.string().optional(),
  service: z.string().optional(),
  car: z.string().optional(),
  notes: z.string().optional(),
  pageUrl: z.string().url().optional(),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export function formatEnquiryText(enquiry: Enquiry) {
  const lines: Array<string | undefined> = [
    "New cab enquiry",
    `Source: ${enquiry.source}`,
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    enquiry.dateTime ? `Pickup date & time: ${enquiry.dateTime}` : undefined,
    enquiry.pickup ? `Pickup: ${enquiry.pickup}` : undefined,
    enquiry.drop ? `Drop: ${enquiry.drop}` : undefined,
    enquiry.service ? `Service: ${enquiry.service}` : undefined,
    enquiry.car ? `Car: ${enquiry.car}` : undefined,
    enquiry.notes ? `Notes: ${enquiry.notes}` : undefined,
    enquiry.pageUrl ? `Page: ${enquiry.pageUrl}` : undefined,
  ];

  return lines.filter(Boolean).join("\n");
}

export function enquiryEmailSubject(enquiry: Enquiry) {
  const suffix = enquiry.source === "hero" ? "Quick Enquiry" : "Booking Enquiry";
  return `Shivay Tour and Travels — ${suffix}`;
}

