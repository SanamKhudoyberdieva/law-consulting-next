export interface HeaderTypes {
  facebook_link?: string;
  instagram_link?: string;
  mini_logo: string;
  telegram_link?: string;
}

export interface FooterTypes {
  address_ru: string;
  address_en: string;
  address_uz: string;
  company_description: string;
  email: string;
  logo: string;
  phone_number: string;
}

export interface General {
  footer: FooterTypes | null;
  header: HeaderTypes | null;
}