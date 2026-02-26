"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { contactInfo } from "@/content/contact";
import { buildWhatsAppHref } from "@/lib/whatsapp";
import type { Enquiry } from "@/lib/enquiry";
import { vehicles } from "@/content/vehicles";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(10, "Enter a valid phone"),
  pickup: z.string().min(2, "Enter pickup location"),
  drop: z.string().min(2, "Enter drop location"),
  date: z.string().min(1, "Select date"),
  service: z.string().min(1, "Select service type"),
  car: z.string().min(1, "Select car type"),
  notes: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  "Car Rental Indore",
  "Airport Taxi Service",
  "Corporate Taxi Service",
  "Travel From Indore",
  "Travel To Indore",
  "One Way Cab",
  "Local Indore",
  "Outstation",
  "Airport Transfer",
  "Round Trip",
];

const carOptions = vehicles.map((v) => v.name);

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      pickup: "",
      drop: "",
      date: "",
      service: defaultService ?? "",
      car: "",
      notes: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const enquiry: Enquiry = {
      source: "booking",
      name: values.name,
      phone: values.phone,
      pickup: values.pickup,
      drop: values.drop,
      dateTime: values.date,
      service: values.service,
      car: values.car,
      notes: values.notes,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    };

    const message = [
      "Cab booking enquiry",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Pickup: ${values.pickup}`,
      `Drop: ${values.drop}`,
      `Date & time: ${values.date}`,
      `Service: ${values.service}`,
      `Car: ${values.car}`,
      values.notes ? `Notes: ${values.notes}` : undefined,
    ]
      .filter(Boolean)
      .join("\n");

    const href = buildWhatsAppHref(contactInfo.whatsappNumber, message);

    fetch("/api/enquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(enquiry),
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(body?.error ?? "Failed to submit booking request");
        }
        const body = (await res.json().catch(() => null)) as { emailSent?: boolean } | null;
        const emailSent = Boolean(body?.emailSent);

        window.open(href, "_blank", "noopener,noreferrer");
        toast.success(emailSent ? "Request sent. Opening WhatsApp…" : "Opening WhatsApp…", {
          description: emailSent ? "We also emailed your details to our team." : "Send the message to confirm your booking.",
        });
        form.reset();
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Failed to submit booking request";
        toast.error(message, { description: "Please try again or use WhatsApp/Call." });
        window.open(href, "_blank", "noopener,noreferrer");
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+91" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="pickup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup</FormLabel>
                <FormControl>
                  <Input placeholder="Location or airport terminal" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="drop"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Drop</FormLabel>
                <FormControl>
                  <Input placeholder="Destination" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup date & time</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="car"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose car" />
                    </SelectTrigger>
                    <SelectContent>
                      {carOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes (optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any specifics on luggage, flight no., or timing" {...field} />
                </FormControl>
                <FormDescription>We confirm on call/WhatsApp after submission.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" size="lg" className="bg-amber-500 text-black hover:bg-amber-600">
            Request booking
          </Button>
          <p className="text-sm text-muted-foreground">No online payment needed. Pay after confirmation.</p>
        </div>
      </form>
    </Form>
  );
}

