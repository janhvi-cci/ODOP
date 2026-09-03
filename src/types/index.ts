export type ProductCategory = 'Pottery' | 'Textiles' | 'Food' | 'Crafts' | 'Bamboo';

export type Product = {
  id: string;
  name: string;
  district: string;
  cat: ProductCategory;
  price: string;
  icon: string;
  color: string;
  intl: boolean;
  img: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  img: string;
  district: string;
};

export type BillingDetails = {
  fullname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pin: string;
};

export type MarketTab = 'domestic' | 'international';

export type EligibilityMatch = { name: string; why: string };
