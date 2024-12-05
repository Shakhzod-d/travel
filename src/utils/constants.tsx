import { v4 as uuidv4 } from 'uuid' 
import { useTranslation } from 'react-i18next';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";


export const NavbarItems = () => {
  const { t } = useTranslation()

  const navItems = [
    {
      id: uuidv4(),
      name: t("home"),
      path: "/",
      active: true,
    },
    {
      id: uuidv4(),
      name: t("about"),
      path: "/about",
      active: false,
    },
    {
      id: uuidv4(),
      name: t("tours"),
      path: "/tours",
      active: false,
    },
    {
      id: uuidv4(),
      name: t("contact"),
      path: "/contact",
      active: false,
    }
    
  ];
  return { navItems }
}

export const StepItems = () => {
  const { t } = useTranslation()

  const steps = [
    {
      id: 1,
      step: t("find"),
      def: t("finddef")
    },
    {
      id: 2,
      step: t("book"),
      def: t("bookdef")
    },
    {
      id: 3,
      step: t("pay"),
      def: t("paydef")
    }
] 
  return { steps }
}

export const TravelMenuDatas = () => {
  const { t } = useTranslation()
  const travelMenuData = [
    { id: 1, text: t("summary"), to: "#overview" },
    { id: 2, text: t("reviews"), to: "#review" },
    { id: 4, text: t("location"), to: "#location" },
    { id: 5, text: t("other"), to: "#other" },
  ]
  return {  travelMenuData }
}




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const travelMenuData = [
  { id: 1, text: "Summary", to: "#summary" },
  { id: 2, text: "Review", to: "#review" },
  { id: 3, text: "Package", to: "#package" },
  { id: 4, text: "Location", to: "#location" },
  { id: 5, text: "Other", to: "#other" },
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

