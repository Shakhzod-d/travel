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
