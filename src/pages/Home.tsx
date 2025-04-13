import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const flowers = [
  {
    id: 1,
    name: 'Daily Fresh Bunch',
    description: 'A beautiful mix of seasonal flowers',
    price: 79,
    image: 'https://imgs.search.brave.com/y8kC3AZqteWzkC-FE4GqEd8n48DC-5Q9uTZ4XXH87GI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z3JvZmVycy5jb20v/Y2RuLWNnaS9pbWFn/ZS9mPWF1dG8sZml0/PXNjYWxlLWRvd24s/cT04NSxtZXRhZGF0/YT1ub25lLHc9NDgw/LGg9NDgwL2FwcC9h/c3NldHMvcHJvZHVj/dHMvc2xpZGluZ19p/bWFnZXMvanBlZy9i/MjBhMDA3NC1kNGEz/LTQ0NzktODA5MC1h/ZDUzOTQ4NjZhMzMu/anBnP3RzPTE3MzIx/NzcyOTE',
  },
  {
    id: 2,
    name: 'Pooja Flowers',
    description: 'Traditional flowers for daily pooja',
    price: 79,
    image: 'https://imgs.search.brave.com/REt9Va5t4kkviZvT26A4ZHVKKkBlR8MhEHtSo4uUJXE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcnJheS1vcmFu/Z2Utc2FmZnJvbi1v/dGhlci1mbG93ZXIt/cGV0YWwtZGVjb3Jh/dGlvbnNfODc1NzIy/LTE4MjM1LmpwZz9z/ZW10PWFpc19jb3Vu/dHJ5X2Jvb3N0Jnc9/NzQw',
  },
  {
    id: 3,
    name: 'Rose Bundle',
    description: 'Fresh roses in various colors',
    price: 150,
    image: 'https://imgs.search.brave.com/GhJrQqIjhAddMMKoMHea-hK4Wbsz23jhWPsvDIGB0sU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU0/OTE1MjMvcGhvdG8v/Y2xvc2UtdXAtb2Yt/YS1yZWQtcm9zZS1i/b3VxdWV0LXdpdGgt/d2F0ZXItZHJvcGxl/dHMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTJSaUVVSW5C/WjB4alRlN2c2Nkhr/TGxWcTZHaHN4bDRK/eUFWLVNjNmNyTDA9',
  },

];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hare Kṛṣṇa</h1>
            <h6 className="text-2xl md:text-4xl font-bold mb-6">We Deliver Fresh Flowers</h6>
            <p className="text-xl md:text-2xl mb-8">Bringing nature's beauty to your doorstep</p>
            <Link
              to="/order"
              className="inline-flex items-center bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Get Your Flowers Delivered
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Flower Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Flowers</h2>
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

      {/* CTA Section */}
      <div className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Day with Fresh Flowers</h2>
          <p className="text-xl text-gray-600 mb-8">Subscribe to our daily delivery service and never miss a fresh bloom.</p>
          <Link
            to="/order"
            className="inline-flex items-center bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
