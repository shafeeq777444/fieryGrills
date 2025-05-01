// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="h-20 bg-transparent fixed  w-full  z-50 shadow-md hidden md:block" style={{ fontFamily: '"Segoe UI", sans-serif' }}>
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
//         {/* Logo */}
//         <div className="flex justify-start items-center w-1/3">
//           <img className="w-16 h-16 object-contain" src="/src/assets/logo1.png" alt="Logo" />
//         </div>
//         {/* Left Nav */}
//         <div className="hidden md:flex gap-20 text-ternaryWhite w-1/3  justify-center text-lg">
//           <a href="/menu">Menu</a>
//           <a href="/locations">Locations</a>
//           <a href="/about">About</a>
//         </div>


//         {/* Call Button */}
//         <div className="hidden md:flex w-1/3  justify-end items-center" >
//           <div className="relative flex justify-center rounded items-center bg-black w-40 h-10 ">
//             <button className="absolute rounded w-40 h-10 -left-1.5 -top-[4px] text-primaryDark bg-ternaryWhite hover:bg-secondaryLight px-8 py-2 border-2 border-black hover:-left-0 hover:-top-0 transition-all duration-300">
//               Call Now
//             </button>
//           </div>
//         </div>

//         {/* Hamburger */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-primaryDark focus:outline-none">
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden  bg-[#EFDCB4] px-4 pt-4 pb-2 text-primaryDark font-bold">
//           <a href="/menu" className="block py-2">Menu</a>
//           <a href="/locations" className="block py-2">Locations</a>
//           <a href="/about" className="block py-2">About</a>
//           <button className="mt-4 w-full bg-black text-ternaryWhite py-2 rounded">Call Now</button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowButton from '../Buttons/GlowButton';
import AnimatedButton from '../Buttons/CallButton';
import { useLocation } from 'react-router-dom';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  // const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  
  // Handle scroll effect with GSAP
  useEffect(() => {
    
    // Create GSAP scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top+=20',
        onEnter: () => setScrolled(true),
        onLeaveBack: () => setScrolled(false),
      }
    });
    
    // Clean up on unmount
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isHome = location.pathname === '/';
  //     const y = window.scrollY;
  //     setTimeout(() => {
  //     if (y < 500 && scrolled && isHome) {
  //       setScrolled(false);
  //     } else if (y >= 500 && !scrolled) {
  //       setScrolled(true);
  //     }
  //   }, 50); // debounce-like delay
  // };
  
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [scrolled,location.pathname]);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home', isButton: false },
    { name: 'Menu', href: '#menu', isButton: false },
    { name: 'Location', href: '#location', isButton: false },

  ];

  return (
    <motion.nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ease-in-out bg-[#F3EEE3]
         ${
        scrolled ? ' bg-opacity-95 shadow-md py-3' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:1.5 }}
      key={"navbar"}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
        >
          <img 
            src={scrolled?"src/assets/logo2.png":"src/assets/logo1.png" }
            alt="Tiffin Service Logo" 
            className="h-12 w-12 mr-3 md:h-16 md:w-16 duration-300 transition-all ease-in " 
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.li key={index} 
              >
                <a
                  href={item.href}
                  className={`
                    ${item.isButton 
                      ? 'bg-orange-500 hover:bg-[#DB9801] text-white px-4 py-2 rounded-md' 
                      : `relative ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-[#DB9801]`
                    }
                    font-medium transition-colors duration-300
                  `}
                >
                  {item.name}
                  {!item.isButton && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
            <li>
    <AnimatedButton/>
    </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden mt-4"
          >
            <motion.ul 
              className="flex flex-col items-center bg-[#F3EEE3] font-semibold  rounded-lg shadow-lg overflow-hidden py-2"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              initial="closed"
              animate="open"
            >
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="w-full"
                >
                  <a
                    href={item.href}
                    className={`
                      block py-3 text-center
                      ${item.isButton 
                        ? 'mx-4 my-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md' 
                        : 'text-gray-800 hover:bg-gray-100'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
               <li>
    <AnimatedButton/>
    </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;