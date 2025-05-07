import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

// import AnimatedButton from "./Buttons/Order";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background image */}
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover"
        src="/assets/hero3.png"
        alt="Punjab food tiffin"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00000088] bg-opacity-40"></div>

      {/* Social Media */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 space-y-4 z-10 md:flex hidden   flex-col gap-4"
      >
        <a href="#" className="text-white text-2xl hover:text-yellow-400 transition">
          <FaInstagram />
        </a>
        <a href="#" className="text-white text-2xl hover:text-yellow-400 transition">
          <FaTwitter />
        </a>
        <a href="#" className="text-white text-2xl hover:text-yellow-400 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white text-2xl hover:text-yellow-400 transition">
          <FaYoutube />
        </a>

      </motion.div>

      {/* Text & Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
      >
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Delicious Punjabi Tiffin
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Order home-style food with a single click!
        </p> */}
        {/* <div className="flex gap-4">
          <AnimatedButton/>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow transition"
          >
            WhatsApp
          </a>
        </div> */}
     
      <div className="flex justify-start flex-col gap-3 items-start  w-20">
      </div>
      </motion.div>
    </div>
  );
};

export default Hero;
