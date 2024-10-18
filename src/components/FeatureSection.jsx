import React from "react";
import { features } from '../constants/constants';

function FeatureSection() {
  return (
    <div className='py-12 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold text-center text-white mb-8'>
          Product Features
        </h2>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-navy-900 via-purple-800 to-pink-600'
            >
              <div className="relative">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className='w-full h-48 object-cover rounded-t-xl'
                />
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
                  feature.status === "Completed" ? "bg-green-500" : "bg-yellow-500"
                }`}>
                  {feature.status}
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-300'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;