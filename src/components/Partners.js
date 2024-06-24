// Partners.js
import React from 'react';
import { partner } from '../data';


function Partners() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Industry leading Partnerships</h2>
        <p className="text-gray-600 mb-8">
          We work with top Indian Institutions to further our shared mission of improving ease of doing business and promoting Entrepreneurship in India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partner.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center p-4 border rounded-md bg-gray-50 shadow-sm">
              <img src={partner.img} alt={partner.name} className="max-h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
