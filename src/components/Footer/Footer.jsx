// components/Footer.jsx
import React from "react";
import {
  RiInformationLine,
  RiPhoneLine,
  RiShoppingBasket2Line,
  RiFileList3Line,
} from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";

const links = [
  { label: "Menu", icon: <BiSolidFoodMenu /> },
  { label: "About Us", icon: <RiInformationLine /> },
  { label: "Contact", icon: <RiPhoneLine /> },
  { label: "Order Now", icon: <RiShoppingBasket2Line /> },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <IoMailOutline />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand (Optional) */}
        <div className="flex justify-center items-center">
         <img src="/assets/logo1.png" className="w-24 h-24 mr-4"></img>
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {links.map((item, i) => (
              <li key={i}>
                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-primary transition">
                  {React.cloneElement(item.icon, { className: "text-[#EBB03F]" })}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4 ">
          <h4 className="text-sm font-semibold">Contact Us</h4>
          <div className="flex items-center gap-2 text-gray-300">
            <IoMailOutline className="text-[#EBB03F]" />
            <span>fierygrills@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <RiPhoneLine className="text-[#EBB03F]" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex gap-3 pt-4">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full hover:border-[#EBB03F] transition"
              >
                {React.cloneElement(item.icon, { className: "text-[#EBB03F] text-sm" })}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter & Cover Letter */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Stay Updated</h3>
          <p className="text-gray-300 text-sm">Get menu updates & exclusive offers</p>
          <input
            type="text"
            placeholder="Enter your email or phone"
            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-md px-4 py-2 text-white text-sm placeholder:text-white/50 focus:outline-none focus:border-[#EBB03F]"
          />
          <button className="w-full bg-[#EBB03F] text-[#1E1E1E] font-medium py-2 rounded-md hover:bg-opacity-90 transition">
            Subscribe
          </button>
          {/* <button className="w-full border border-[#EBB03F] text-[#EBB03F] font-medium py-2 rounded-md hover:bg-[#EBB03F] hover:text-[#1E1E1E] transition">
            Get Cover Letter
          </button> */}
        </div>
      </div>
    </footer>
  );
}
