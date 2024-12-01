import { Injectable } from '@nestjs/common';

const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Earbuds',
    description:
      'Compact and high-quality sound earbuds with noise cancellation.',
    price: 49.99,
    category: 'Electronics',
    stock: 120,
    ratings: 4.5,
  },
  {
    id: 2,
    name: 'Eco-Friendly Water Bottle',
    description:
      'Reusable stainless steel water bottle with thermal insulation.',
    price: 19.99,
    category: 'Lifestyle',
    stock: 300,
    ratings: 4.8,
  },
  {
    id: 3,
    name: 'Gaming Keyboard',
    description: 'RGB mechanical keyboard with customizable backlighting.',
    price: 89.99,
    category: 'Computers & Accessories',
    stock: 75,
    ratings: 4.6,
  },
  {
    id: 4,
    name: 'Organic Green Tea Pack',
    description:
      'Premium organic green tea leaves for a refreshing experience.',
    price: 14.99,
    category: 'Groceries',
    stock: 200,
    ratings: 4.7,
  },
  {
    id: 5,
    name: 'Fitness Tracker Watch',
    description:
      'Smart fitness tracker with heart rate monitor and sleep tracking.',
    price: 59.99,
    category: 'Fitness',
    stock: 150,
    ratings: 4.3,
  },
];

@Injectable()
export class ProductsService {
  findAll(): any {
    return products;
  }
}
