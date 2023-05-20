export interface Product {
  id: number;
  name: string;
  year: number;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 14max',
    year: 2020,
    price: 5600,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    year: 2012,
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    year: 2010,
    price: 299,
    description: '',
  },
  {
    id: 4,
    name: 'Tablet 9',
    year: 2005,
    price: 2000,
    description: 'A GREAT DEVICE IN YOUR HAND',
  },
];
