import { ReviewItem } from '../types/product';

export const STORE_RATING = {
  score: 4.5,
  totalReviews: 172,
  label: '4.5/5 from 172 customer reviews',
  distribution: {
    5: 74, // percentage
    4: 18,
    3: 5,
    2: 2,
    1: 1,
  },
};

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-01',
    author: 'Mirza Tariq',
    location: 'Quetta Cricket Academy',
    sport: 'Cricket',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Picked up a CA English Willow bat and leather balls directly from their Prince Road shop. Outstanding balance, genuine wood grain, and proper weight. Best sports shop in Quetta.',
  },
  {
    id: 'rev-02',
    author: 'Captain Naveed Bugti',
    location: 'Chaman Road Youth Club',
    sport: 'Football',
    rating: 5,
    date: '1 month ago',
    comment:
      'Ordered team kits and match footballs for our local tournament. The material quality was breathable and the stitching held up strong through heavy rain matches. Highly recommended.',
  },
  {
    id: 'rev-03',
    author: 'Khurram Shahzad',
    location: 'Cantt, Quetta',
    sport: 'Fitness & Gym',
    rating: 4,
    date: '1 month ago',
    comment:
      'Got a pair of rubber hex dumbbells and heavy resistance loops. High build quality and fair pricing compared to ordering from other cities with high courier fees.',
  },
  {
    id: 'rev-04',
    author: 'Sardar Farooq',
    location: 'Jinnah Town, Quetta',
    sport: 'Cricket & Badminton',
    rating: 5,
    date: '2 months ago',
    comment:
      'Very cooperative staff on WhatsApp. Confirmed the batting glove size before dispatch and saved me a trip down Prince Road during traffic. Genuine gear.',
  },
];
