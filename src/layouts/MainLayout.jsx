/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer.jsx";
import SendButton from "../components/Buttons/PhoneButton.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const MainLayout = () => {
  return (
    <>
        <Navbar></Navbar>
      <Outlet/>
      <motion.div
                className="fixed bottom-8 left-8 flex p-2 flex-col gap-6   "
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6}}
                >
                <SendButton text="Call us" color="#000000" icon={<Phone size={20} className="text-white" />} />
                <SendButton text="Whatsapp" color="#1E1E1E" icon={<FaWhatsapp size={20} className="text-white" />} />
            </motion.div>
            {/* <NewsLetter/> */}
              <Footer/>
    </>
  )
}

export default MainLayout
