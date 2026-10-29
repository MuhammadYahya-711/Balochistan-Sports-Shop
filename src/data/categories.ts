import { ProductCategory } from '../types/product';

export interface CategoryInfo {
  id: string;
  name: ProductCategory;
  slug: string;
  itemCount: number;
  image: string;
  description: string;
  tagline: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cricket',
    name: 'Cricket',
    slug: 'cricket',
    itemCount: 14,
    image: 'https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=800&q=80',
    description: 'English willow bats, leather balls, batting pads, gloves, and protective armor.',
    tagline: 'Built For The Next Innings',
  },
  {
    id: 'football',
    name: 'Football',
    slug: 'football',
    itemCount: 12,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    description: 'FIFA match balls, studded boots, training kits, goalkeeper gloves, and shin guards.',
    tagline: 'For The Love Of Football',
  },
  {
    id: 'sportswear',
    name: 'Sportswear',
    slug: 'sportswear',
    itemCount: 10,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    description: 'Moisture-wicking training tees, tracksuits, compression wear, and athlete shorts.',
    tagline: 'Engineered For Movement',
  },
  {
    id: 'footwear',
    name: 'Footwear',
    slug: 'footwear',
    itemCount: 8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    description: 'Firm-ground cleats, cricket spikes, indoor court shoes, and road runners.',
    tagline: 'Grip, Speed & Traction',
  },
  {
    id: 'gym-equipment',
    name: 'Gym Equipment',
    slug: 'gym-equipment',
    itemCount: 9,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    description: 'Hex rubber dumbbells, barbell plates, bench gear, power racks, and resistance tubes.',
    tagline: 'Make Every Session Count',
  },
  {
    id: 'team-kits',
    name: 'Team Kits',
    slug: 'team-kits',
    itemCount: 7,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    description: 'Custom team jerseys, club tracksuits, bibs, and tournament uniforms.',
    tagline: 'United By Colors',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    itemCount: 11,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    description: 'Speed cones, agility ladders, gym bags, sweatbands, and stainless steel bottles.',
    tagline: 'Precision Training Tools',
  },
  {
    id: 'other-sports',
    name: 'Other Sports',
    slug: 'other-sports',
    itemCount: 6,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
    description: 'Badminton rackets, shuttlecocks, volleyballs, table tennis paddles, and basketballs.',
    tagline: 'Multi-Sport Essentials',
  },
];
