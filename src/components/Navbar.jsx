import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to section smoothly when a link is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu if it's open
  };

  return (
    <nav
      className='bg-gradient-to-r from-pink-500 via-indigo-700 to-blue-900 p-4 shadow-lg transition-shadow duration-300 fixed w-full top-0 left-0 z-50'
      style={{ zIndex: 1000 }} // Ensuring it's always on top
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white text-2xl font-bold tracking-wide'>
          <a href='/'>Netram</a>
        </div>

        {/* Links for larger screens */}
        <div className='hidden md:flex space-x-6'>
          {["home", "about", "feature", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className='text-white hover:text-pink-300 hover:bg-blue-800/60 py-1 px-4 rounded transition-all duration-300 ease-in-out'
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Hamburger Menu Icon for smaller screens */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white hover:text-pink-300 focus:outline-none transition transform duration-200'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-500 ease-in-out md:hidden bg-blue-900/80 backdrop-blur-sm rounded-lg mt-2 shadow-lg`}
      >
        <div className='flex flex-col space-y-3 py-4'>
          {["home", "about", "feature", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className='text-white hover:bg-pink-600 hover:scale-105 transition-all duration-300 transform py-2 px-4 rounded-md'
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

















// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle the mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Scroll to section smoothly when a link is clicked
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false); // Close the mobile menu if it's open
//   };

//   return (
//     <nav className='bg-gradient-to-r from-pink-500 via-indigo-700 to-navy-900 p-4 shadow-lg transition-shadow duration-300 fixed w-full top-0 left-0 z-50'>
//       <div className='max-w-7xl mx-auto flex justify-between items-center'>
//         {/* Logo */}
//         <div className='text-white text-2xl font-bold tracking-wide'>
//           <a href='/'>Netram</a>
//         </div>

//         {/* Links for larger screens */}
//         <div className='hidden md:flex space-x-6'>
//           <button
//             onClick={() => scrollToSection("home")}
//             className='text-white hover:text-pink-300 hover:bg-white/10 py-1 px-4 rounded transition-all duration-300 ease-in-out'
//           >
//             Home
//           </button>
//           <button
//             onClick={() => scrollToSection("about")}
//             className='text-white hover:text-pink-300 hover:bg-white/10 py-1 px-4 rounded transition-all duration-300 ease-in-out'
//           >
//             About
//           </button>
//           <button
//             onClick={() => scrollToSection("feature")}
//             className='text-white hover:text-pink-300 hover:bg-white/10 py-1 px-4 rounded transition-all duration-300 ease-in-out'
//           >
//             Feature
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className='text-white hover:text-pink-300 hover:bg-white/10 py-1 px-4 rounded transition-all duration-300 ease-in-out'
//           >
//             Contact
//           </button>
//         </div>

//         {/* Hamburger Menu Icon for smaller screens */}
//         <div className='md:hidden'>
//           <button
//             onClick={toggleMenu}
//             className='text-white hover:text-pink-300 focus:outline-none transition transform duration-200'
//           >
//             <svg
//               className='w-8 h-8'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu with Animation */}
//       <div
//         className={`${
//           isOpen ? "max-h-screen" : "max-h-0"
//         } overflow-hidden transition-all duration-500 ease-in-out md:hidden bg-navy-900/80 backdrop-blur-sm rounded-lg mt-2 shadow-lg`}
//       >
//         <div className='flex flex-col space-y-3 py-4'>
//           <button
//             onClick={() => scrollToSection("home")}
//             className='text-white hover:bg-pink-600 hover:scale-105 transition-all duration-300 transform py-2 px-4 rounded-md'
//           >
//             Home
//           </button>
//           <button
//             onClick={() => scrollToSection("about")}
//             className='text-white hover:bg-pink-600 hover:scale-105 transition-all duration-300 transform py-2 px-4 rounded-md'
//           >
//             About
//           </button>
//           <button
//             onClick={() => scrollToSection("feature")}
//             className='text-white hover:bg-pink-600 hover:scale-105 transition-all duration-300 transform py-2 px-4 rounded-md'
//           >
//             Feature
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className='text-white hover:bg-pink-600 hover:scale-105 transition-all duration-300 transform py-2 px-4 rounded-md'
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className='bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow-lg transition-shadow duration-300'>
//       <div className='max-w-7xl mx-auto flex justify-between items-center'>
//         {/* Logo */}
//         <div className='text-white text-2xl font-bold'>
//           <a href='/'>Netram</a>
//         </div>

//         {/* Links for larger screens */}
//         <div className='hidden md:flex space-x-6'>
//           <a href='/' className='text-white hover:text-gray-100 transition'>
//             Home
//           </a>
//           <a
//             href='#about'
//             className='text-white hover:text-gray-100 transition'
//           >
//             About
//           </a>
//           <a
//             href='#feature'
//             className='text-white hover:text-gray-100 transition'
//           >
//             Feature
//           </a>
//           <a
//             href='#contact'
//             className='text-white hover:text-gray-100 transition'
//           >
//             Contact
//           </a>
//         </div>

//         {/* Hamburger Menu Icon for smaller screens */}
//         <div className='md:hidden'>
//           <button
//             onClick={toggleMenu}
//             className='text-white hover:text-gray-100 focus:outline-none transition transform duration-200'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu with Animation */}
//       <div
//         className={`${
//           isOpen ? "max-h-screen" : "max-h-0"
//         } overflow-hidden transition-max-h duration-300 ease-in-out md:hidden`}
//       >
//         <div className='flex flex-col space-y-2 py-2'>
//           <a
//             href='/'
//             className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
//           >
//             Home
//           </a>
//           <a
//             href='#about'
//             className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
//           >
//             About
//           </a>
//           <a
//             href='#feature'
//             className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
//           >
//             Feature
//           </a>
//           <a
//             href='#contact'
//             className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

