export interface State {
    menu: boolean;
}
export interface NavItems {
  id: string;
  name: string;
  path: string;
  active: boolean;
}

export interface ButtonProps {
  text: string;
  background: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface SocialMedias {
  id: string;
  name: string;
  path: string;
  icon: React.ReactElement;
}

export interface CartItems {
  id: string;
  country: string;
  city: string;
  img: string;
}

export interface TravelStyles {
  id: string;
  type: string;
  def: string;
  link: string;
  img: string;
}

export interface SeasonCart {
  id: string;
  price: number;
  time: string;
  size: number;
  location: string;
  special: string;
  reviews: number;
  stars: number;
  def: string;
  img: string;
}

export interface TourProps {
  type: string;
}

export interface BookingType{
    name: string,
    phone: string
}

export interface OpinionType{
    id: string,
    phrase: string,
    opinion: string,
    img: string,
    name: string,
    job: string
}

export interface ReasonType{
    id: string,
    img: string,
    reason: string,
    def: string
}

export interface StepType{
    id: number,
    step: string,
    def: string
}

