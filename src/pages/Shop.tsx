import React from 'react';
import { Link } from 'react-router-dom';

const flowers = [
  {
    id: 1,
    name: 'Daily Fresh Bunch',
    description: 'A beautiful mix of seasonal flowers',
    price: 79,
    image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 2,
    name: 'Pooja Flowers',
    description: 'Traditional flowers for daily pooja',
    price: 79,
    image: 'https://images.unsplash.com/photo-1599789197514-47a02adf0a34?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 3,
    name: 'Rose Bundle',
    description: 'Fresh roses in various colors',
    price: 99,
    image: 'https://images.unsplash.com/photo-1548586196-aa5803b77379?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 4,
    name: 'Festive Special',
    description: 'Special arrangement for festivals',
    price: 120,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 5,
    name: 'Marigold Bunch',
    description: 'Fresh marigold flowers',
    price: 79,
    image: 'https://images.unsplash.com/photo-1602515974223-b953f5310f3f?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 6,
    name: 'Lotus Special',
    description: 'Fresh lotus flowers for pooja',
    price: 95,
    image: 'https://images.unsplash.com/photo-1616628188467-8f10b63610f6?auto=format&fit=crop&q=80&w=500'
  }
];

function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Flowers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flowers.map((flower) => (
          <div key={flower.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
              <p className="text-gray-600 mb-4">{flower.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-500">₹{flower.price}</span>
                <Link
                  to="/order"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;