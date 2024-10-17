import React from "react";
import { teamMembers } from '../constants/constants'; // Import team members from constants

const Contact = () => {
  return (
    <footer className='overflow-x-hidden'>
      {/* Meet Our Team Section */}
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-12'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h3 className='text-3xl md:text-4xl font-extrabold mb-6 text-white'>Meet Our Team</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {teamMembers.map((member) => (
              <div key={member.id} className='flex flex-col items-center'>
                <div className='w-32 h-32 bg-white rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 flex items-center justify-center'>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className='w-28 h-28 object-cover rounded-full'
                  />
                </div>
                <div className='text-center mt-4'>
                  <h4 className='text-lg md:text-xl font-bold text-gray-100'>{member.name}</h4>
                  <p className='text-gray-200 mt-1'>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section with full-width background */}
      <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h3 className='text-3xl md:text-4xl font-extrabold mb-6 text-white'>Contact Us</h3>
          <p className='text-lg md:text-xl mb-6 text-gray-300'>
            We would love to hear from you! Reach out to us at any of the emails below:
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {[
              'contact@netram.com',
              'support@netram.com',
              'info@netram.com',
              'feedback@netram.com',
              'careers@netram.com',
              'press@netram.com',
            ].map((email, index) => (
              <div key={index}>
                <a
                  href={`mailto:${email}`}
                  className='block bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg transition duration-300'
                >
                  {email}
                </a>
              </div>
            ))}
          </div>

          {/* Copyright Section */}
          <p className='text-sm mt-8 text-white'>
            © {new Date().getFullYear()} Netram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;









// import React from "react";

// const Contact = () => {
//   return (
//     <footer className='bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-300 py-12'>
//       <div className='max-w-7xl mx-auto px-6 text-center'>
//         <h3 className='text-3xl font-extrabold mb-6 text-white'>Contact Us</h3>
//         <p className='text-lg mb-8 text-gray-200'>
//           We would love to hear from you! Reach out to us at any of the emails
//           below:
//         </p>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
//           <div>
//             <a
//               href='mailto:contact@netram.com'
//               className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
//             >
//               contact@netram.com
//             </a>
//           </div>
//           <div>
//             <a
//               href='mailto:support@netram.com'
//               className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
//             >
//               support@netram.com
//             </a>
//           </div>
//           <div>
//             <a
//               href='mailto:info@netram.com'
//               className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
//             >
//               info@netram.com
//             </a>
//           </div>
//           <div>
//             <a
//               href='mailto:feedback@netram.com'
//               className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
//             >
//               feedback@netram.com
//             </a>
//           </div>
//           <div>
//             <a
//               href='mailto:careers@netram.com'
//               className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
//             >
//               careers@netram.com
//             </a>
//           </div>
//           <div>
//             <a
//               href='mailto:press@netram.com'
//               className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
//             >
//               press@netram.com
//             </a>
//           </div>
//         </div>
//         <p className='text-sm mt-8 text-white'>
//           © {new Date().getFullYear()} Netram. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Contact;
