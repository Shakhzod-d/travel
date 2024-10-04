import { v4 as uuidv4 } from "uuid";

export const navItems = [
  {
    id: uuidv4(),
    name: "home",
    path: "/",
    active: true,
  },
  {
    id: uuidv4(),
    name: "tours",
    path: "/tours",
    active: false,
  },
  {
    id: uuidv4(),
    name: "destinations",
    path: "/destinations",
    active: false,
  },
  {
    id: uuidv4(),
    name: "manage booking",
    path: "/booking",
    active: false,
  },
  {
    id: uuidv4(),
    name: "contact us",
    path: "/contact",
    active: false,
  },
  {
    id: uuidv4(),
    name: "about us",
    path: "/about",
    active: false,
  },
];

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const teamData = [
  { id: 1, name: "John Marvel", role: "Construction Expert Team" },
  { id: 2, name: "John Marvel", role: "Construction Expert Team" },
  { id: 3, name: "John Marvel", role: "Construction Expert Team" },
  { id: 4, name: "John Marvel", role: "Construction Expert Team" },
  { id: 5, name: "John Marvel", role: "Construction Expert Team" },
  { id: 6, name: "John Marvel", role: "Construction Expert Team" },
  { id: 7, name: "John Marvel", role: "Construction Expert Team" },
  { id: 8, name: "John Marvel", role: "Construction Expert Team" },
  { id: 9, name: "John Marvel", role: "Construction Expert Team" },
];

export const faqsData = [
  {
    id: 1,
    ind: "01",
    title: "Does this travel agency offer custom travel packages?",
    desc: "Yes, we provide custom travel services that can be tailored to your needs and preferences. Please contact our team to discuss your custom itinerary.",
  },
  {
    id: 2,
    ind: "02",
    title: "Does this travel agency offer custom travel packages?",
    desc: "Yes, we provide custom travel services that can be tailored to your needs and preferences. Please contact our team to discuss your custom itinerary.",
  },
  {
    id: 3,
    ind: "03",
    title: "Does this travel agency offer custom travel packages?",
    desc: "Yes, we provide custom travel services that can be tailored to your needs and preferences. Please contact our team to discuss your custom itinerary.",
  },
  {
    id: 4,
    ind: "04",
    title: "Does this travel agency offer custom travel packages?",
    desc: "Yes, we provide custom travel services that can be tailored to your needs and preferences. Please contact our team to discuss your custom itinerary.",
  },
];

export const travelMenuData = [
  { id: 1, text: "Summary", to: "#summary" },
  { id: 2, text: "Review", to: "#review" },
  { id: 3, text: "Package", to: "#package" },
  { id: 4, text: "Location", to: "#location" },
  { id: 5, text: "Other", to: "#other" },
];

export const travelOverviewData = [
  { id: 1, text: "Free wifi" },
  { id: 2, text: "Air Conditioning" },
  { id: 3, text: "Parking available" },
  { id: 4, text: "Business Services" },
  { id: 5, text: "Swimming pool" },
  { id: 6, text: "Top rated in area" },
];
