export type RoutePage = {
  slug: string;
  title: string;
  subtitle: string;
  distance: string;
  duration: string;
  heroImage: string;
  highlights: string[];
  sections: Array<{
    title: string;
    description: string;
    bullets: string[];
  }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const routePages: RoutePage[] = [
  {
    slug: "indore-to-bhopal-taxi",
    title: "Indore to Bhopal Taxi",
    subtitle: "One-way and round trip taxi from Indore to Bhopal with verified drivers and clean cars.",
    distance: "195 km",
    duration: "4h",
    heroImage: "/images/service-outstation.jpg",
    highlights: ["One-way / round trip", "Sedan / SUV / Innova", "24/7 support"],
    sections: [
      {
        title: "Trip overview",
        description: "Comfortable intercity ride for business, family, and airport connections.",
        bullets: [
          "Doorstep pickup in Indore",
          "Flexible stop points on request",
          "Best car options for luggage and comfort",
        ],
      },
      {
        title: "Recommended cars",
        description: "Choose based on passengers and luggage.",
        bullets: [
          "Sedan for budget comfort",
          "SUV / MUV for extra space",
          "Innova / Crysta for premium comfort",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book one-way from Indore to Bhopal?",
        answer: "Yes. Share pickup, drop, date/time, and car type on WhatsApp to confirm.",
      },
      {
        question: "Do you allow stops during the trip?",
        answer: "Yes. Tell us your stop points while booking and we’ll plan it accordingly.",
      },
    ],
  },
  {
    slug: "indore-to-maheshwar-cab",
    title: "Indore to Maheshwar Cab",
    subtitle: "Heritage trip cab booking for Maheshwar with comfortable cars and flexible timing.",
    distance: "95 km",
    duration: "2h 30m",
    heroImage: "/images/service-outstation.jpg",
    highlights: ["Heritage trip", "Family friendly", "Flexible stops"],
    sections: [
      {
        title: "Trip highlights",
        description: "A relaxed day trip to Maheshwar.",
        bullets: ["Pickup from Indore", "Ghats and fort visit time", "Return same day (or as per plan)"],
      },
    ],
    faqs: [
      {
        question: "Can I add Omkareshwar on the same trip?",
        answer: "Yes. Share your full plan and we’ll suggest the best route and timing.",
      },
    ],
  },
  {
    slug: "indore-to-mandu-cab",
    title: "Indore to Mandu Cab",
    subtitle: "Hilltop fort circuit cab booking to Mandu with sightseeing-friendly plans.",
    distance: "97 km",
    duration: "2h 40m",
    heroImage: "/images/service-outstation.jpg",
    highlights: ["Sightseeing", "Day trip", "SUV / MUV options"],
    sections: [
      {
        title: "Best for",
        description: "Weekend trips and family outings.",
        bullets: ["Mandu fort circuit", "Comfortable long-route cars", "Flexible return time"],
      },
    ],
    faqs: [
      {
        question: "Do you provide a full-day cab for Mandu?",
        answer: "Yes. Share pickup time and return preference to confirm a full-day plan.",
      },
    ],
  },
  {
    slug: "indore-to-ahmedabad-taxi",
    title: "Indore to Ahmedabad Taxi",
    subtitle: "Interstate taxi booking from Indore to Ahmedabad for business and leisure travel.",
    distance: "400 km",
    duration: "7h 30m",
    heroImage: "/images/service-outstation.jpg",
    highlights: ["Interstate travel", "One-way / round trip", "Comfort cars"],
    sections: [
      {
        title: "Comfort on long routes",
        description: "Choose the right vehicle for the highway journey.",
        bullets: ["Sedan for budget", "SUV / MUV for space", "Innova / Crysta for premium comfort"],
      },
    ],
    faqs: [
      {
        question: "Is one-way available for Ahmedabad?",
        answer: "Yes, one-way and round trips are available depending on date/time and availability.",
      },
    ],
  },
  {
    slug: "indore-to-ujjain-cab",
    title: "Indore to Ujjain Cab",
    subtitle: "Quick cab booking for Mahakaleshwar darshan trips with same-day return options.",
    distance: "55 km",
    duration: "1h 20m",
    heroImage: "/images/service-local.jpg",
    highlights: ["Temple trip", "Same-day return", "Experienced drivers"],
    sections: [
      {
        title: "Best for",
        description: "Pilgrimage and family travel with flexible timing.",
        bullets: [
          "Mahakaleshwar darshan trips",
          "Family and group travel",
          "Early morning / late-night pickups",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you provide a cab for early morning darshan?",
        answer: "Yes. Share your preferred time and we’ll confirm availability.",
      },
    ],
  },
  {
    slug: "indore-to-omkareshwar-cab",
    title: "Indore to Omkareshwar Cab",
    subtitle: "Comfortable Jyotirlinga darshan cab booking with full-day plans and flexible stops.",
    distance: "78 km",
    duration: "2h",
    heroImage: "/images/service-outstation.jpg",
    highlights: ["Full-day plan", "Family friendly", "Clean vehicles"],
    sections: [
      {
        title: "Trip plan",
        description: "A simple plan for darshan and return.",
        bullets: [
          "Pickup from Indore at preferred time",
          "Darshan + local sightseeing time",
          "Return trip same day (or as per plan)",
        ],
      },
    ],
    faqs: [
      {
        question: "Is same-day return available?",
        answer: "Yes, same-day return is common for Omkareshwar trips.",
      },
    ],
  },
];
