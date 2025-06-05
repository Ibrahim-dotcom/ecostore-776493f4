
import { Product, Review, Order } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 199.99,
    originalPrice: 249.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    stock: 25,
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    sale: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    price: 299.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    stock: 15,
    rating: 4.6,
    reviewCount: 89,
    featured: true,
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt.',
    price: 29.99,
    image: '/placeholder.svg',
    category: 'Clothing',
    stock: 50,
    rating: 4.4,
    reviewCount: 67,
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    description: 'High-quality camera lens for professional photography.',
    price: 599.99,
    image: '/placeholder.svg',
    category: 'Photography',
    stock: 8,
    rating: 4.9,
    reviewCount: 43,
  },
  {
    id: '5',
    name: 'Minimalist Desk Lamp',
    description: 'Modern LED desk lamp with adjustable brightness.',
    price: 89.99,
    originalPrice: 119.99,
    image: '/placeholder.svg',
    category: 'Home',
    stock: 30,
    rating: 4.5,
    reviewCount: 156,
    sale: true,
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with excellent sound quality.',
    price: 79.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    stock: 20,
    rating: 4.3,
    reviewCount: 98,
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'John Doe',
    rating: 5,
    comment: 'Excellent sound quality and comfortable to wear for long periods.',
    date: '2024-01-15',
  },
  {
    id: '2',
    productId: '1',
    userName: 'Sarah Smith',
    rating: 4,
    comment: 'Great headphones, but a bit pricey. Worth it for the quality though.',
    date: '2024-01-10',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'order-1',
    items: [
      { product: mockProducts[0], quantity: 1 },
      { product: mockProducts[1], quantity: 2 },
    ],
    total: 799.97,
    status: 'completed',
    date: '2024-01-15',
    customerEmail: 'customer@example.com',
  },
];

export const salesData = [
  { month: 'Jan', sales: 12000, orders: 145 },
  { month: 'Feb', sales: 15000, orders: 167 },
  { month: 'Mar', sales: 18000, orders: 189 },
  { month: 'Apr', sales: 22000, orders: 210 },
  { month: 'May', sales: 25000, orders: 234 },
  { month: 'Jun', sales: 28000, orders: 267 },
];
