
import { Product, Review } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 15,
    rating: 4.5,
    reviewCount: 128,
    featured: true,
    sale: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness with this advanced smartwatch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 8,
    rating: 4.3,
    reviewCount: 94,
    featured: true
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'Clothing',
    stock: 25,
    rating: 4.7,
    reviewCount: 67,
    sale: true
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    description: 'Modern LED desk lamp with adjustable brightness',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    category: 'Home',
    stock: 12,
    rating: 4.2,
    reviewCount: 45,
    featured: true
  },
  {
    id: '5',
    name: 'Running Shoes',
    description: 'Lightweight running shoes for maximum comfort',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'Sports',
    stock: 18,
    rating: 4.6,
    reviewCount: 156,
  },
  {
    id: '6',
    name: 'Skincare Set',
    description: 'Complete skincare routine with natural ingredients',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    category: 'Beauty',
    stock: 0,
    rating: 4.4,
    reviewCount: 89,
    sale: true
  },
  {
    id: '7',
    name: 'JavaScript Programming Book',
    description: 'Learn modern JavaScript development techniques',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    category: 'Books',
    stock: 30,
    rating: 4.8,
    reviewCount: 234,
    featured: true
  },
  {
    id: '8',
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat for comfortable practice',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    category: 'Sports',
    stock: 22,
    rating: 4.1,
    reviewCount: 78,
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'John Smith',
    rating: 5,
    comment: 'Excellent sound quality and battery life. Highly recommend!',
    date: '2024-01-10'
  },
  {
    id: '2',
    productId: '1',
    userName: 'Sarah Johnson',
    rating: 4,
    comment: 'Great headphones, comfortable for long use. Only wish they came in more colors.',
    date: '2024-01-08'
  },
  {
    id: '3',
    productId: '2',
    userName: 'Mike Chen',
    rating: 5,
    comment: 'Perfect for tracking workouts. The heart rate monitor is very accurate.',
    date: '2024-01-12'
  },
  {
    id: '4',
    productId: '3',
    userName: 'Emily Davis',
    rating: 5,
    comment: 'So soft and comfortable! Love that it\'s organic cotton.',
    date: '2024-01-09'
  },
  {
    id: '5',
    productId: '4',
    userName: 'David Wilson',
    rating: 4,
    comment: 'Great lamp for my home office. The adjustable brightness is perfect.',
    date: '2024-01-11'
  }
];

export const salesData = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 198 },
  { month: 'Mar', sales: 5000, orders: 267 },
  { month: 'Apr', sales: 4500, orders: 243 },
  { month: 'May', sales: 6000, orders: 289 },
  { month: 'Jun', sales: 5500, orders: 267 },
];
