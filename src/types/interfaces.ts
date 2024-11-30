export interface State {
  menu: boolean;
  modal: boolean;
  bookingModal: boolean;
  userRate: number;
  activeCountry: string;
  district: string;
  category: string;
  serviceId: string;
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

export interface TravelStyles {
  id: number;
  title: string;
  sub_title: string;
  image: string;
  updated_at?: string;
  created_at?: string;
}


export interface TourProps {
  type: string;
}

export interface Data{
  full_name: string,
  phone: string,
  dream?: string
}

export interface OpinionType{
  id: number,
  full_name: string,
  position: string,
  image: string,
  content: string,
  updated_at?: string,
  created_at?: string
}

export interface ReasonType{
  id: string,
  title: string,
  image: string,
  content: string,
  updated_at?: string,
  created_at?: string
}

export interface StepType{
  id: number,
  step: string,
  def: string
}

export interface FooterDataType{
  id: string,
  data: string,
  path: string
}

export interface FooterIconsType{
  id: string,
  icon: string,
  alt: string,
  path: string
}

export interface ModalDataType{
  name: string,
  job: string,
  rank: number,
  review: string,
  image: string
}

export interface CountriesType{
  id: number,
  title: string,
  updated_at: string,
  created_at: string
}

export interface DistrictType{
  id: number,
  title: string,
  country: CountriesType
  updated_at: string,
  created_at: string
}
export interface CategoryType{
  id: number,
  title: string,
  image: string,
  sub_title: string,
  updated_at?: string,
  created_at?: string,
}
export interface TravelType{
  id: number,
  slug: string,
  title: string,
  image: string,
  category: CategoryType,
  country: CountriesType,
  district: DistrictType,
  is_popular: boolean,
  is_summer: boolean,
  is_winter: boolean,
  price: number,
  days: number,
  nights: number,
  start_date: string,
  end_date: string,
  context: string,
  updated_at: string,
  created_at: string
}

export interface FaqType{
  id: number,
  title: string,
  content: string,
  updated_at: string,
  created_at: string,
}

export interface TeamType{
  id: number,
  full_name: string,
  image: string,
  position: string,
  updated_at: string,
  created_at: string,
}

export interface ServiceCartType{
  id: number,
  title: string,
  image: string,
  content: string,
  updated_at?: string,
  created_at?: string,
}

export interface FacilitiesType{
  id: number,
  title: string,
  image: string,
  updated_at?: string,
  created_at?: string,
}

export interface ReviewsType{
  id: number,
  title: string,
  image: string | null,
  content: string,
  full_name: string,
  position: string,
  rank: number,
  updated_at?: string,
  created_at?: string,
}

