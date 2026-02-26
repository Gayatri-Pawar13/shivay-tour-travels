export type RouteCard = {
  title: string;
  subtitle: string;
  distance: string;
  duration: string;
  slug: string;
  badge?: string;
};

export const popularRoutes: RouteCard[] = [
  {
    title: "Indore → Ujjain",
    subtitle: "Temple city same-day return",
    distance: "55 km",
    duration: "1h 20m",
    slug: "indore-to-ujjain-cab",
    badge: "Hot",
  },
  {
    title: "Indore → Omkareshwar",
    subtitle: "Jyotirlinga darshan trip",
    distance: "78 km",
    duration: "2h",
    slug: "indore-to-omkareshwar-cab",
  },
  {
    title: "Indore → Maheshwar",
    subtitle: "Heritage ghats & forts",
    distance: "95 km",
    duration: "2h 30m",
    slug: "indore-to-maheshwar-cab",
  },
  {
    title: "Indore → Mandu",
    subtitle: "Hilltop fort circuit",
    distance: "97 km",
    duration: "2h 40m",
    slug: "indore-to-mandu-cab",
  },
  {
    title: "Indore → Bhopal",
    subtitle: "Capital city one-way/round",
    distance: "195 km",
    duration: "4h",
    slug: "indore-to-bhopal-taxi",
  },
  {
    title: "Indore → Ahmedabad",
    subtitle: "Interstate business/leisure",
    distance: "400 km",
    duration: "7h 30m",
    slug: "indore-to-ahmedabad-taxi",
    badge: "One-way",
  },
];

