export type CabService = {
  slug: string;
  navLabel: string;
  title: string;
  subtitle: string;
  heroImage: string;
  highlights: string[];
  sections: Array<{
    title: string;
    description: string;
    bullets: string[];
  }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const cabServices: CabService[] = [
  {
    slug: "car-rental-indore",
    navLabel: "Car Rental Indore",
    title: "Car Rental in Indore",
    subtitle:
      "Local city rides, hourly packages, and point-to-point trips with clean cars and verified drivers.",
    heroImage: "/images/service-local.jpg",
    highlights: ["Local rides & hourly", "AC clean vehicles", "24/7 support"],
    sections: [
      {
        title: "Best for",
        description: "Everyday travel inside Indore city.",
        bullets: [
          "Office commute and daily runs",
          "Shopping and family travel",
          "City sightseeing and events",
        ],
      },
      {
        title: "What you get",
        description: "Reliable pickup, polite drivers, and transparent rates.",
        bullets: [
          "Verified drivers and well-maintained cars",
          "Instant confirmation on WhatsApp/call",
          "Support from booking to drop",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide local packages?",
        answer: "Yes. We offer local Indore packages and point-to-point rides based on your plan.",
      },
      {
        question: "Can I book for early morning or late night?",
        answer: "Yes, we operate 24/7. Share your pickup time and location to confirm availability.",
      },
    ],
  },
  {
    slug: "airport-taxi-service",
    navLabel: "Airport Taxi Service",
    title: "Airport Taxi Service",
    subtitle:
      "On-time pickups and drops for Indore airport with buffer planning and quick confirmation.",
    heroImage: "/images/service-airport.jpg",
    highlights: ["Airport pickup/drop", "On-time guarantee focus", "Quick WhatsApp support"],
    sections: [
      {
        title: "Airport transfers",
        description: "A smooth airport experience from door to terminal.",
        bullets: [
          "Airport pickup and drop from anywhere in Indore",
          "Ideal for family, business and solo riders",
          "Clean car, AC, and luggage friendly",
        ],
      },
      {
        title: "How to book",
        description: "Share trip details and we confirm quickly.",
        bullets: [
          "Send pickup location + flight time (optional)",
          "Choose a car type and get a quote",
          "Driver details shared on confirmation",
        ],
      },
    ],
    faqs: [
      {
        question: "What details should I share for airport pickup?",
        answer: "Pickup location, flight time (optional), and preferred car type are enough to confirm.",
      },
      {
        question: "Do you offer round trips?",
        answer: "Yes. You can book airport pickup, drop, or both as a round trip.",
      },
    ],
  },
  {
    slug: "corporate-taxi-service",
    navLabel: "Corporate Taxi Service",
    title: "Corporate Taxi Service",
    subtitle:
      "Professional cab solutions for staff movement, guests, events, and recurring bookings.",
    heroImage: "/images/service-corporate.jpg",
    highlights: ["Corporate & events", "Professional drivers", "On-call coordination"],
    sections: [
      {
        title: "Use cases",
        description: "Flexible options for companies and institutions.",
        bullets: [
          "Employee pickup/drop and office travel",
          "Guest and visitor movement",
          "Event and conference transportation",
        ],
      },
      {
        title: "Service promise",
        description: "Reliable vehicles with support throughout the ride.",
        bullets: [
          "Clean cars and punctual pickups",
          "Dedicated coordination on WhatsApp/call",
          "Transparent billing based on route",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you provide multiple cars for events?",
        answer: "Yes. Share the schedule and we can arrange multiple vehicles based on availability.",
      },
      {
        question: "Do you support recurring bookings?",
        answer: "Yes. We can manage recurring trips and schedule-based pickups.",
      },
    ],
  },
  {
    slug: "travel-from-indore",
    navLabel: "Travel From Indore",
    title: "Travel From Indore",
    subtitle:
      "Outstation travel from Indore to MP and nearby states for one-way or round trips.",
    heroImage: "/images/service-outstation.jpg",
    highlights: ["Outstation trips", "One-way/round", "Experienced drivers"],
    sections: [
      {
        title: "Popular reasons",
        description: "Trip-ready cars for long routes.",
        bullets: [
          "Pilgrimage trips and family travel",
          "Business travel and intercity visits",
          "Weekend getaways and sightseeing",
        ],
      },
      {
        title: "Comfort options",
        description: "Choose the right car for passengers and luggage.",
        bullets: [
          "Sedans and SUVs for family travel",
          "Innova / Crysta for comfort",
          "Tempo Traveller / Urbania for groups",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you support multi-day trips?",
        answer: "Yes. Share your itinerary and we’ll confirm vehicle availability and pricing.",
      },
      {
        question: "Is one-way available from Indore?",
        answer: "Yes, one-way and round trips both are available for many routes.",
      },
    ],
  },
  {
    slug: "travel-to-indore",
    navLabel: "Travel To Indore",
    title: "Travel To Indore",
    subtitle:
      "Book cabs to Indore from nearby cities with clean vehicles and quick confirmation.",
    heroImage: "/images/service-oneway.jpg",
    highlights: ["Intercity to Indore", "Transparent per-km rates", "Fast confirmation"],
    sections: [
      {
        title: "Ideal for",
        description: "Inbound travel to Indore for any purpose.",
        bullets: [
          "Business visits and meetings",
          "Family travel and events",
          "Railway/airport connections",
        ],
      },
      {
        title: "Booking steps",
        description: "Simple and fast booking on WhatsApp.",
        bullets: [
          "Share pickup city and address",
          "Choose car type and time",
          "We confirm and share driver details",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book late night intercity pickups?",
        answer: "Yes. Share your pickup time and we will confirm availability.",
      },
      {
        question: "Do you provide return trips too?",
        answer: "Yes, you can book one-way or round trips depending on your plan.",
      },
    ],
  },
  {
    slug: "one-way-cab",
    navLabel: "One Way Cab",
    title: "One Way Cab",
    subtitle:
      "Pay only for the distance you travel. Great for airport drops and intercity travel.",
    heroImage: "/images/service-oneway.jpg",
    highlights: ["One-way pricing", "Best for intercity", "No return fare stress"],
    sections: [
      {
        title: "When to choose one-way",
        description: "Perfect when you don’t need a return cab.",
        bullets: [
          "Airport drops and pickups",
          "Indore ↔ nearby cities",
          "Business and relocation trips",
        ],
      },
      {
        title: "What’s included",
        description: "A smooth ride with active support.",
        bullets: [
          "AC clean vehicles",
          "Verified drivers",
          "WhatsApp/call support during trip",
        ],
      },
    ],
    faqs: [
      {
        question: "Is one-way always available?",
        answer: "Availability depends on route and time. Share your plan and we’ll confirm quickly.",
      },
      {
        question: "How do I get an exact quote?",
        answer: "Send pickup, drop, date/time, and car type on WhatsApp to get the best quote.",
      },
    ],
  },
];
