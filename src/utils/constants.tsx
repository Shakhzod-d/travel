import { v4 as uuidv4 } from 'uuid' 
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import img1 from "../assets/images/styles/Rectangle 3.png";
import img2 from "../assets/images/styles/Rectangle 1.png";
import img3 from "../assets/images/styles/Rectangle 2.png";
import img4 from "../assets/images/styles/Rectangle 33.png";
import img5 from "../assets/images/seasons/summer1.png";
import img6 from "../assets/images/seasons/summer2.png";
import img7 from "../assets/images/seasons/summer3.png";
import img8 from "../assets/images/seasons/winter1.png";
import img9 from "../assets/images/seasons/winter2.png";
import img10 from "../assets/images/seasons/winter3.png";
import img11 from '../assets/images/clients/client.png'
import img12 from '../assets/images/reasons/reason1.png'
import img13 from '../assets/images/reasons/reason3.png'
import img14 from '../assets/images/reasons/reason3.png'


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



export const socialMedias = [
  {
    id: uuidv4(),
    name: "telegram",
    path: "/",
    icon: <TelegramIcon />,
  },
  {
    id: uuidv4(),
    name: "instagram",
    path: "/tours",
    icon: <InstagramIcon />,
  },
  {
    id: uuidv4(),
    name: "facebook",
    path: "/destinations",
    icon: <FacebookIcon />,
  },
];

export const travelStyles = [
  {
    id: uuidv4(),
    type: "self drive tours",
    def: "Drive famous scenic routes at your own pace.",
    link: "Learn more",
    img: img1,
  },
  {
    id: uuidv4(),
    type: "self drive tours",
    def: "Drive famous scenic routes at your own pace.",
    link: "Learn more",
    img: img2,
  },
  {
    id: uuidv4(),
    type: "self drive tours",
    def: "Drive famous scenic routes at your own pace.",
    link: "Learn more",
    img: img3,
  },
  {
    id: uuidv4(),
    type: "self drive tours",
    def: "Drive famous scenic routes at your own pace.",
    link: "Learn more",
    img: img4,
  },
];

export const summerFeature = [
  {
    id: uuidv4(),
    price: 400,
    time: "7D/6N",
    size: 14,
    location: "Uzbekistan",
    special: "Sunset view of beautiful Urganch lake",
    reviews: 25,
    stars: 4,
    def: "Experience the delights of summer on the Silk Road with our comprehensive 22-day Central Asia Group Tour covering the ...",
    img: img5,
  },
  {
    id: uuidv4(),
    price: 400,
    time: "7D/6N",
    size: 14,
    location: "Uzbekistan",
    special: "Sunset view of beautiful Urganch lake",
    reviews: 25,
    stars: 4,
    def: "Experience the delights of summer on the Silk Road with our comprehensive 22-day Central Asia Group Tour covering the ...",
    img: img6,
  },
  {
    id: uuidv4(),
    price: 400,
    time: "7D/6N",
    size: 14,
    location: "Uzbekistan",
    special: "Sunset view of beautiful Urganch lake",
    reviews: 25,
    stars: 4,
    def: "Experience the delights of summer on the Silk Road with our comprehensive 22-day Central Asia Group Tour covering the ...",
    img: img7,
  },
];

export const winterFeature = [
    {
        id: uuidv4(),
        price: 400,
        time: '7D/6N',
        size: 14,
        location: 'Uzbekistan',
        special: 'Winter tour beautiful Urganch lake',
        reviews: 25,
        stars: 4,
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day Central Asia Group Tour covering the ...',
        img: img8
    },
    {
        id: uuidv4(),
        price: 400,
        time: '7D/6N',
        size: 14,
        location: 'Uzbekistan',
        special: 'Winter tour beautiful Urganch lake',
        reviews: 25,
        stars: 4,
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day Central Asia Group Tour covering the ...',
        img: img9
    },
    {
        id: uuidv4(),
        price: 400,
        time: '7D/6N',
        size: 14,
        location: 'Uzbekistan',
        special: 'Winter tour beautiful Urganch lake',
        reviews: 25,
        stars: 4,
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day Central Asia Group Tour covering the ...',
        img: img10
    }
]

export const clientOpinions = [
    {
        id: uuidv4(),
        phrase: '“BRIX Templates is the #1”',
        opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
        img: img11,
        name: 'Adam',
        job: 'webflow developer'
    },
    {
        id: uuidv4(),
        phrase: '“BRIX Templates is the #1”',
        opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
        img: img11,
        name: 'Adam',
        job: 'webflow developer'
    },
    {
        id: uuidv4(),
        phrase: '“BRIX Templates is the #1”',
        opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
        img: img11,
        name: 'Adam',
        job: 'webflow developer'
    },
    {
      id: uuidv4(),
      phrase: '“BRIX Templates is the #1”',
      opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
      img: img11,
      name: 'Adam',
      job: 'webflow developer'
  },
  {
    id: uuidv4(),
    phrase: '“BRIX Templates is the #1”',
    opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
    img: img11,
    name: 'Adam',
    job: 'webflow developer'
  },
  {
    id: uuidv4(),
    phrase: '“BRIX Templates is the #1”',
    opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
    img: img11,
    name: 'Adam',
    job: 'webflow developer'
  },
  {
    id: uuidv4(),
    phrase: '“BRIX Templates is the #1”',
    opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
    img: img11,
    name: 'Adam',
    job: 'webflow developer'
  },
  {
    id: uuidv4(),
    phrase: '“BRIX Templates is the #1”',
    opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
    img: img11,
    name: 'Adam',
    job: 'webflow developer'
  }
]

export const reasonsArray = [
    {
        id: uuidv4(),
        img: img12,
        reason: 'Best guide',
        def: 'Our expert tour guide knows the best about traveling they will guide you all time'
    },
    {
        id: uuidv4(),
        img: img13,
        reason: 'Support 24/7',
        def: 'Our customer experience team is available around clock to answer your questions'
    },
    {
        id: uuidv4(),
        img: img14,
        reason: 'Luxury hotels',
        def: 'We realise ideas from simple to complex, everything becomes easy to use'
    }
]

export const steps = [
    {
        id: 1,
        step: 'Find your destination',
        def: 'Find your travel destination, because we have covered all regions in the world.'
    },
    {
        id: 2,
        step: 'Book a ticket',
        def: 'After you find the trip you want to go to. you can directly order ticket.'
    },
    {
        id: 3,
        step: 'Pay and go to destination',
        def: 'After you pay, you can immediatly enjoy the trip to the destination'
    }
] 
