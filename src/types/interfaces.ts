export interface NavItems {
    id: string,
    name: string,
    path: string,
    active: boolean
}

export interface SocialMedias {
    id: string,
    name: string,
    path: string,
    icon: React.ReactElement
}

export interface CartItems {
    id: string,
    country: string,
    city: string,
    img: string
}

export interface TravelStyles{
    id: string,
    type: string,
    def: string,
    link: string,
    img: string
}

export interface SeasonCart{
    id: string,
    price: number,
    time: string,
    size: number,
    location: string,
    special: string,
    reviews: number,
    stars: number,
    def: string,
    img: string
}

export interface TourProps {
    type: string;
}

