export interface State {
  menu: boolean;
  modal: boolean;
  bookingModal: boolean;
  userRate: number;
  activeCountry: string;
  district: string;
  category: string;
  serviceId: string;
  start: string,
  tourModal: boolean,
  id1: number,
  picturesModal: boolean,
  picturesGallery: boolean,
  activeThumb: number,
  tourSlug: string,
  modalType: string,
  galleryType: string,
  includedActive: string,
  days1: number
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
  content?: string
}

export interface PreferredTimeType{
  id: number,
  title: any
}

export interface BookingTourData{
  residence_country: string,
  preferred_time?: any,
  full_name: string,
  start_date: string | null,
  end_date: string | null,
  email?: string,
  arrival?: string,
  adults: number,
  youth?: number,
  children?: number,
  infants?: number,
  phone: string
  content?: string,
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
  id: number,
  type: number,
  image: string,
  link: string,
  content: string,
  updated_at?: string,
  created_at: string
}


export interface ModalDataType{
  full_name: string,
  position: string,
  rank?: number,
  content?: string,
  image?: string
}

export interface CountriesType{
  id: number,
  title: string,
  updated_at?: string,
  created_at: string
}

export interface DistrictType{
  id: number,
  title: string,
  country: CountriesType
  updated_at?: string,
  created_at: string
}
export interface CategoryType{
  id: number,
  title: string,
  sub_title: string,
  image: string,
  updated_at?: string,
  created_at?: string,
}
export interface IncludeType{
  id: number,
  title: string,
  context: string,
  images: ImagesType[]
}
export interface IncludesType{
  id: number,
  include: IncludeType
}
export interface TravelType{
  id: number,
  slug: string,
  title: string,
  category: CategoryType,
  tour_class: number,
  tour_type: number,
  image: string,
  country: CountriesType,
  district: DistrictType,
  price: string,
  days: number | null,
  nights: number | null,
  start_date: string,
  end_date: string,
  duration: string,
  reviews_count: number,
  overall_rank: number,
  context: string,
  is_popular: boolean,
  is_summer: boolean,
  is_winter: boolean,
  updated_at?: string,
  created_at?: string
}

export interface TravelDetailType{
  id: number,
  slug: string,
  title: string,
  category: CategoryType,
  images: ImagesType[],
  country: CountriesType,
  district: DistrictType,
  price: number,
  days: number,
  nights: number,
  start_date: string,
  end_date: string,
  context: string,
  availabilities: AvailabilitiesType[],
  lot: null | string,
  lang: null | string,
  is_popular: boolean,
  is_summer: boolean,
  is_winter: boolean,
  ranks: RanksType,
  reviews: ReviewsType[] | [],
  others: OthersType[] | [],
  includes: IncludesType[] | [],
  updated_at?: string,
  created_at: string
}

export interface ImagesType{
  id: number,
  image: string,
  updated_at?: string,
  created_at?: string
}

export interface AvailabilitiesType{
  id: number,
  title: string,
  image: string,
  updated_at?: string,
  created_at: string
}

export interface RanksType{
  overall: string,
  detail: DetailType[]
}

export interface DetailType{
  rank: number,
  count: number
}

export interface FaqType{
  id: number,
  title: string,
  content: string,
  updated_at?: string,
  created_at: string,
}

export interface TeamType{
  id: number,
  full_name: string,
  image: string,
  position: string,
  updated_at?: string,
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
  image: string | null,
  full_name: string,
  position: string,
  rank: number,
  content: string,
  updated_at?: string,
  created_at?: string,
}

export interface OthersType{
  id: number,
  title: string,
  context: string,
  updated_at?: string,
  created_at: string,
}

