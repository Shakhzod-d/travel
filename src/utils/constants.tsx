import { v4 as uuidv4 } from 'uuid' 
import { useTranslation } from 'react-i18next';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import img8 from "../assets/images/seasons/winter1.png";
import img9 from "../assets/images/seasons/winter2.png";
import img10 from "../assets/images/seasons/winter3.png";


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
      name: t("tours"),
      path: "/tours",
      active: false,
    },
    {
      id: uuidv4(),
      name: t("contact"),
      path: "/contact",
      active: false,
    },
    {
      id: uuidv4(),
      name: t("about"),
      path: "/about",
      active: false,
    },
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

export const FooterDatas = () => {
  const { t } = useTranslation()

  const footerData1 = [
    {
      id: uuidv4(),
      data: t("programs"),
      path: '/'
    },
    {
      id: uuidv4(),
      data: t("press"),
      path: '/'
    },
    {
      id: uuidv4(),
      data: t("environment"),
      path: '/'
    },
    {
      id: uuidv4(),
      data: t("jobs"),
      path: '/'
    },
    {
      id: uuidv4(),
      data: t("privacy"),
      path: '/'
    },
    {
      id: uuidv4(),
      data: t("contact"),
      path: '/'
    }
  ]

  const footerData2 = [
    {
      id: uuidv4(),
      data: t("tickets"),
      path: '/'
    },
    {
      id: uuidv4(),
      data: t("season"),
      path: '/'
    },
    {
      id: uuidv4(),
      data: t("vacation"),
      path: '/'
    }
  ]

  const footerData3 = [
  {
    id: uuidv4(),
    icon: '/icons/facebook.svg',
    alt: 'facebook',
    path: '/'
  },
  {
    id: uuidv4(),
    icon: '/icons/instagram.svg',
    alt: 'instagram',
    path: '/'
  },
  {
    id: uuidv4(),
    icon: '/icons/x.svg',
    alt: 'x',
    path: '/'
  },
  {
    id: uuidv4(),
    icon: '/icons/youtube.svg',
    alt: 'youtube',
    path: '/'
  },
  {
    id: uuidv4(),
    icon: '/icons/wordpress.png',
    alt: 'wordpress',
    path: '/'
  }
  ]
  return { footerData1, footerData2, footerData3 }
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

export const countries = [
  {
    id: uuidv4(),
    country: "Uzbekistan",
    active: true
  },
  {
    id: uuidv4(),
    country: "Kazakhstan",
    active: false
  },
  {
    id: uuidv4(),
    country: "Turkmenistan",
    active: false
  },
  {
    id: uuidv4(),
    country: "Tadjikistan",
    active: false
  },
  {
    id: uuidv4(),
    country: "Kyrgzstan",
    active: false
  }
]
