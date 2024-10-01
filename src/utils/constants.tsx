import { v4 as uuidv4 } from 'uuid' 
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import img1 from '../assets/images/styles/Rectangle 3.png'
import img2 from '../assets/images/styles/Rectangle 1.png'
import img3 from '../assets/images/styles/Rectangle 2.png'
import img4 from '../assets/images/styles/Rectangle 33.png'
import img5 from '../assets/images/seasons/summer1.png'
import img6 from '../assets/images/seasons/summer2.png'
import img7 from '../assets/images/seasons/summer3.png'
import img8 from '../assets/images/seasons/winter1.png'
import img9 from '../assets/images/seasons/winter2.png'
import img10 from '../assets/images/seasons/winter3.png'

export const navItems = [
    {
        id: uuidv4(),
        name: 'home',
        path: '/',
        active: true
    },
    {
        id: uuidv4(),
        name: 'tours',
        path: '/tours',
        active: false
    },
    {
        id: uuidv4(),
        name: 'destinations',
        path: '/destinations',
        active: false
    },
    {
        id: uuidv4(),
        name: 'manage booking',
        path: '/booking',
        active: false
    },
    {
        id: uuidv4(),
        name: 'contact us',
        path: '/contact',
        active: false
    },
    {
        id: uuidv4(),
        name: 'about us',
        path: '/about',
        active: false
    }
]

export const socialMedias = [
    {
        id: uuidv4(),
        name: 'telegram',
        path: '/',
        icon: <TelegramIcon/>
    },
    {
        id: uuidv4(),
        name: 'instagram',
        path: '/tours',
        icon: <InstagramIcon/>
    },
    {
        id: uuidv4(),
        name: 'facebook',
        path: '/destinations',
        icon: <FacebookIcon/>
    }
]

export const travelStyles = [
    {
        id: uuidv4(),
        type: 'self drive tours',
        def: 'Drive famous scenic routes at your own pace.',
        link: 'Learn more',
        img: img1
    },
    {
        id: uuidv4(),
        type: 'self drive tours',
        def: 'Drive famous scenic routes at your own pace.',
        link: 'Learn more',
        img: img2
    },
    {
        id: uuidv4(),
        type: 'self drive tours',
        def: 'Drive famous scenic routes at your own pace.',
        link: 'Learn more',
        img: img3
    },
    {
        id: uuidv4(),
        type: 'self drive tours',
        def: 'Drive famous scenic routes at your own pace.',
        link: 'Learn more',
        img: img4
    }
]

export const summerFeature = [
    {
        id: uuidv4(),
        price: 400,
        time: '7D/6N',
        size: 14,
        location: 'Uzbekistan',
        special: 'Sunset view of beautiful Urganch lake',
        reviews: 25,
        stars: 4,
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day  Central Asia Group Tour covering the ...',
        img: img5
    },
    {
        id: uuidv4(),
        price: 400,
        time: '7D/6N',
        size: 14,
        location: 'Uzbekistan',
        special: 'Sunset view of beautiful Urganch lake',
        reviews: 25,
        stars: 4,
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day  Central Asia Group Tour covering the ...',
        img: img6
    },
    {
        id: uuidv4(),
        price: 400,
        time: '7D/6N',
        size: 14,
        location: 'Uzbekistan',
        special: 'Sunset view of beautiful Urganch lake',
        reviews: 25,
        stars: 4,
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day  Central Asia Group Tour covering the ...',
        img: img7
    }
]

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
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day  Central Asia Group Tour covering the ...',
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
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day  Central Asia Group Tour covering the ...',
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
        def: 'Experience the delights of summer on the Silk Road with our comprehensive 22-day  Central Asia Group Tour covering the ...',
        img: img10
    }
]