export interface Banner{
  desktop_image: string;
  id: number;
  mobile_image?: string;
  more_details_link?: string;
  subtitle_en?: string;
  subtitle_ru: string;
  subtitle_uz?: string;
  title_en?: string;
  title_ru: string;
  title_uz?: string;
}

export interface Service {
  description_en?: string;
  description_uz?: string;
  description_ru: string;
  id: number;
  image:string;
  title_en?: string;
  title_ru: string;
  title_uz?: string;
}

export interface ServicesType {
  data: Service[]
  main_title: string
}

export interface AboutCompany {
  text_en?: string;
  text_ru: string;
  text_uz?: string;
  title: string;
}

export interface Client {
  id: number;
  image: string;
  name: string;
}

export interface Clients {
  data: Client[]
  title: string;
}

export interface News {
  created_at: string;
  description_en?: string;
  description_uz?: string
  description_ru: string
  id: number;
  image: string
  title_en?: string
  title_uz?: string
  title_ru: string
}

export interface NewsList {
  data: News[]
  title: string
}

export interface HomeTypes {
  about_company: AboutCompany | null;
  banners: Banner[] | null;
  clients: Clients | null;
  language: string;
  news: NewsList | null;
  services: ServicesType | null;
}