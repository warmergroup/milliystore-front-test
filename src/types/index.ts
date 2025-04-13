export interface iPost {
  id: number;
  title: string;
  description: string;
  price: number;
  old_price: number | null;
  status: string;
  views: number;
  quantity: number;
  region_id: number;
  city_id: number;
  cat1_id: number;
  cat2_id: number;
  cat3_id: number;
  cat4_id?: number; // cat4_id bo'sh bo'lishi mumkin
  country_id: number;
  created_at: string; // ISO formatli string
  updated_at: string | null;
  currency_id: number;
  delivery: number; // 0 yoki 1
  is_paid: number; // 0 yoki 1
  moderated: number; // 0 yoki 1
  published: number; // 0 yoki 1
  user_id: number;
  archive: number; // 0 yoki 1
  images: { rs_medium: string; rs_large?: string }[]; // Rasm obyekti massivda
  region: {
    id: number;
    country_id: number;
    name_uz: string;
    name_ru: string;
    name_en: string;
  };
  city: {
    id: number;
    region_id: number;
    name_uz: string;
    name_ru: string;
    name_en: string;
  };
  currency: {
    id: number;
    country_id: number | null;
    name_uz: string;
    name_ru: string;
    name_en: string | null;
  };
  cat2: {
    id: number;
    cat1_id: number;
    name_uz: string;
    name_ru: string;
    name_en: string;
  };
  cat3: {
    id: number;
    cat2_id: number;
    name_uz: string;
    name_ru: string;
    name_en: string;
  };
}