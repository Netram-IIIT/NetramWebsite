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
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className='w-full h-48 object-cover rounded-t-xl'
              />
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











// import React from "react";
// import {features} from '../constants/constants'



// function FeatureSection() {
//   return (
//     <div className='py-12 bg-gradient-to-r from-cyan-500 to-blue-500'>
//       <div className='container mx-auto px-4'>
//         <h2 className='text-4xl md:text-4xl font-bold text-center text-white mb-8'>
//           Product Features
//         </h2>

//         {/* Feature Cards Grid */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className='bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'
//             >
//               <img
//                 src={feature.imageUrl}
//                 alt={feature.title}
//                 className='w-full h-48 object-cover rounded-t-lg'
//               />
//               <div className='p-4'>
//                 <h3 className='text-lg font-bold text-cyan-600'>
//                   {feature.title}
//                 </h3>
//                 <p className='text-gray-600 mt-2'>{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeatureSection;
