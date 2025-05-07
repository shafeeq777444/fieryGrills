/* eslint-disable no-unused-vars */


// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import GlowButton from '../Buttons/GlowButton';
import AnimatedButton from '../Buttons/CallButton';
import { useNavigate, useLocation } from 'react-router-dom';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const navigate=useNavigate()
  
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

  

  // Navigation items
  const navItems = [
    { name: 'Menu', href: '/menu', isButton: false },
    { name: 'Plans', href: '/plans', isButton: false },
    { name: 'Location', href: '/location', isButton: false },
    { name: 'About', href: '/about', isButton: false },

  ];

  return (
    <motion.nav
      ref={navbarRef}
      className={`fixed   top-0 left-0 w-full z-50 px-6 py-4 md:py-6 font-balooTwo  text-white transition-all duration-300 ease-in-out bg-[#1C1C1C]
         ${
        scrolled ? ' bg-opacity-95 shadow-md py-3 ' : 'shadow-none bg-transparent'
      } will-change-[transform,opacity]`}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:1.5 }}
      key={"navbar"}
    >
      <div className=" md:mx-7 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
        >
          <img 
            src={"/assets/logo1.png" }
            onClick={()=>navigate('/')}
            alt="Tiffin Service Logo" 
            className="h-12 w-12 mr-3 md:h-12 md:w-12 duration-300 transition-all ease-in " 
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${scrolled ? 'text-white' : 'text-white'}`}
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
        <div className="hidden  md:block">
          <ul className="flex  space-x-8 items-center  ">
            {navItems.map((item, index) => (
              <motion.li key={index} 
              >
                <a
                onClick={(e)=>{
                  e.preventDefault();
                  navigate(item.href)
                }}
                  className={`
                    duration-200 transition-all ease-in 
                    ${item.isButton 
                      ? 'bg-orange-500 hover:bg-[#DB9801]  px-4 py-2 rounded-md' 
                      : `relative  hover:text-[#DB9801]` 
                    }
                    font-medium  transition-colors duration-300
                    ${location.pathname === item.href ? 'text-[#DB9801]' : 'text-white'}
                  `}
                >
                  {item.name}
                  {/* {!item.isButton && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )} */}
               {location.pathname === item.href && ( <motion.div
    layoutId="nav-indicator"
    className="rounded-full bg-[#DB9801] w-1 h-1 absolute -bottom-1 left-1/2 transform -translate-x-1/2"
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  />)}
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
            className="md:hidden fixed  top-25 rounded-3xl bg-[#1C1C1C] shadow-md py-2 w-[90vw] "
          >
            <motion.ul 
              className={`flex flex-col items-center  font-semibold  rounded-lg overflow-hidden py-2`}
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
                  onClick={(e)=>{
                    e.preventDefault();
                    navigate(item.href)
                    setIsOpen(false)
                  }}
                    // href={item.href}
                    className={`
                      block py-3 text-center font-balooTwo font-semibold
                      ${item.isButton 
                        ? 'mx-4 my-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md' 
                        : 'text-white hover:bg-gray-100'
                      }
                    `}
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