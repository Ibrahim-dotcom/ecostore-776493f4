
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: '1',
    name: 'Electronics',
    image: '/placeholder.svg',
    productCount: 156,
  },
  {
    id: '2',
    name: 'Clothing',
    image: '/placeholder.svg',
    productCount: 243,
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: '/placeholder.svg',
    productCount: 189,
  },
  {
    id: '4',
    name: 'Sports',
    image: '/placeholder.svg',
    productCount: 134,
  },
  {
    id: '5',
    name: 'Beauty',
    image: '/placeholder.svg',
    productCount: 98,
  },
  {
    id: '6',
    name: 'Books',
    image: '/placeholder.svg',
    productCount: 267,
  },
];

export function Categories() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">
            Browse our wide range of product categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 mx-auto rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {category.productCount} items
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
