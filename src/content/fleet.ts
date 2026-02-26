export type FleetItem = {
  name: string;
  seats: string;
  useCase: string;
  starting: string;
  features: string[];
};

export const fleet: FleetItem[] = [
  {
    name: "Hatchback",
    seats: "4 seats",
    useCase: "Budget airport and city rides",
    starting: "₹10/km",
    features: ["AC", "Upto 2 bags", "Clean interiors"],
  },
  {
    name: "Sedan",
    seats: "4 seats",
    useCase: "Comfort for business and family trips",
    starting: "₹11/km",
    features: ["Bottled water", "Comfort seating", "Mobile charger"],
  },
  {
    name: "SUV / MUV",
    seats: "6-7 seats",
    useCase: "Group and pilgrimage routes",
    starting: "₹14/km",
    features: ["Captain seats options", "Extra luggage", "Long-haul ready"],
  },
  {
    name: "Tempo Traveller",
    seats: "12-17 seats",
    useCase: "Weddings, events, and corporate shuttles",
    starting: "On request",
    features: ["Pushback seats", "AC", "Music system"],
  },
];

