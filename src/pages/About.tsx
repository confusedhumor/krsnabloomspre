import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 mb-4">
            Fresh Blooms started with a simple idea: bringing the beauty and freshness of flowers directly from our garden to your home. Our journey began in a small flower farm on the outskirts of the city, where we cultivate various flowers with love and care.
          </p>
          <p className="text-gray-600 mb-4">
            What sets us apart is our commitment to delivering flowers that are cut fresh each morning. We believe that everyone deserves to experience the joy of fresh flowers in their homes without the premium prices of traditional florists.
          </p>
          <p className="text-gray-600">
            Today, we serve hundreds of families in residential societies across the city, bringing a touch of nature's beauty to their daily lives. Our mission is to make fresh flowers accessible to everyone, one delivery at a time.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1558616629-899031969d5e?auto=format&fit=crop&q=80&w=800"
            alt="Our Garden"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Farm Fresh Daily</h3>
            <p className="text-gray-600">
              All our flowers are picked fresh from our garden every morning, ensuring you get the freshest blooms possible.
            </p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
            <p className="text-gray-600">
              By delivering directly from our farm to your home, we keep our prices reasonable and accessible.
            </p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Reliable Service</h3>
            <p className="text-gray-600">
              Count on us for timely deliveries every day, whether it's for your morning pooja or evening decoration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;