import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'p0',
    name: 'Hand-thrown Terracotta Planter Set',
    district: 'Bankura, West Bengal',
    cat: 'Pottery',
    price: '₹650',
    icon: '🏺',
    color: 'var(--terracotta)',
    intl: false,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/A%20small%20clay%20pot%20being%20shaped%20on%20a%20traditional%20potter%E2%80%99s%20wheel%20in%20India%2001.jpg?width=500',
  },
  {
    id: 'p1',
    name: 'Bishnupur Baluchari Silk Saree',
    district: 'Bankura, West Bengal',
    cat: 'Textiles',
    price: '₹4,200',
    icon: '🧵',
    color: 'var(--olive)',
    intl: true,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Baluchari%20saree%20of%20Bishnupur%20DSC06029.jpg?width=500',
  },
  {
    id: 'p2',
    name: 'Kashmiri Saffron, 5g Tin',
    district: 'Pulwama, J&K',
    cat: 'Food',
    price: '₹899',
    icon: '🌸',
    color: 'var(--gold)',
    intl: true,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crocus%20sativus%20-%20Saffron%20crocus%20-%20Safran%2003.JPG?width=500',
  },
  {
    id: 'p3',
    name: 'Channapatna Wooden Toy Set',
    district: 'Ramanagara, Karnataka',
    cat: 'Crafts',
    price: '₹520',
    icon: '🧸',
    color: 'var(--navy)',
    intl: false,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Finished%20Channapatna%20toys.jpg?width=500',
  },
  {
    id: 'p4',
    name: 'Majuli Bamboo Storage Basket',
    district: 'Majuli, Assam',
    cat: 'Bamboo',
    price: '₹380',
    icon: '🧺',
    color: 'var(--terracotta-dark)',
    intl: false,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/A%20bamboo%20basket%20big%20in%20size.JPG?width=500',
  },
  {
    id: 'p5',
    name: 'Kutch Embroidered Wall Hanging',
    district: 'Kutch, Gujarat',
    cat: 'Crafts',
    price: '₹1,150',
    icon: '🪡',
    color: 'var(--olive-dark)',
    intl: true,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Antique%20Kutch%20Embroidery.jpg?width=500',
  },
  {
    id: 'p6',
    name: 'Malabar Black Pepper, 200g',
    district: 'Wayanad, Kerala',
    cat: 'Food',
    price: '₹310',
    icon: '🌶️',
    color: 'var(--gold-dark)',
    intl: true,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Black%20Pepper%20%28Piper%20nigrum%29%20fruits.jpg?width=500',
  },
  {
    id: 'p7',
    name: 'Moradabad Brass Table Lamp',
    district: 'Moradabad, Uttar Pradesh',
    cat: 'Crafts',
    price: '₹1,780',
    icon: '💡',
    color: 'var(--navy-dark)',
    intl: true,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brass%20Handicrafts%20of%20Moradabad.jpg?width=500',
  },
  {
    id: 'p8',
    name: 'Pochampally Ikat Dupatta',
    district: 'Yadadri, Telangana',
    cat: 'Textiles',
    price: '₹1,450',
    icon: '🧣',
    color: 'var(--terracotta)',
    intl: false,
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pochampalli%20Ikat%20saree.jpg?width=500',
  },
];

export const CATEGORIES = [
  { value: 'all', label: 'All categories' },
  { value: 'Pottery', label: 'Pottery & Terracotta' },
  { value: 'Textiles', label: 'Handloom & Textiles' },
  { value: 'Food', label: 'Spices & Food' },
  { value: 'Crafts', label: 'Handicrafts' },
  { value: 'Bamboo', label: 'Bamboo & Cane' },
] as const;

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function shippingCopy(intlTab: boolean): string {
  return intlTab
    ? 'Ships internationally, export-ready.'
    : 'Ships across India, 3–7 business days.';
}
