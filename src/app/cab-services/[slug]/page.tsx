import { notFound, redirect } from "next/navigation";
import { cabServices } from "@/content/cab-services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cabServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = cabServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Shivay Tour and Travels`,
    description: service.subtitle,
  };
}

export default async function CabServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = cabServices.find((s) => s.slug === slug);
  if (!service) notFound();
  redirect(`/${service.slug}`);
}
