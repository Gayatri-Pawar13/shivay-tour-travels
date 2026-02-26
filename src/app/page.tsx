import { Navbar } from "@/sections/navbar";
import { HeroSection } from "@/sections/hero";
import { ServicesSection } from "@/sections/services";
import { WhyChooseSection } from "@/sections/why-choose";
import { RoutesSection } from "@/sections/routes";
import { FleetSection } from "@/sections/fleet";
import { TestimonialsSection } from "@/sections/testimonials";
import { FAQSection } from "@/sections/faq";
import { ContactSection } from "@/sections/contact";
import { ContactBand } from "@/sections/contact-band";
import { Footer } from "@/sections/footer";
import { FloatingActions } from "@/components/floating-actions";

export default function Home() {
  return (
    <div className="min-h-dvh bg-kora text-foreground">
      <Navbar />
      <main
        id="main"
        className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16"
      >
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <RoutesSection />
        <FleetSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <ContactBand />
      </main>
      <FloatingActions bookHref="/#contact" />
      <Footer />
    </div>
  );
}
