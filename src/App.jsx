/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
// import { useEffect, useState } from 'react'
import SplashScreen from "./components/SplashScreen";
import MenuPage from "./pages/Menu";
import Location from "./pages/Location";
import SendButton from "./components/Buttons/PhoneButton.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About.jsx";
import Plans from "./components/HomePage/Plans.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
// import PunjabiGrillUI from "./pages/Gallery.jsx";

function App() {
    // const [showSplash, setShowSplash] = useState(true);

    // useEffect(() => {

    //   const timer = setTimeout(() => setShowSplash(false), 3000);
    //   return () => clearTimeout(timer);
    // }, []);

    // if (showSplash) {
    //   return <SplashScreen />;
    // }
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/location" element={<Location />} />
                <Route path="/about" element={<About />} />
                <Route path="/plans" element={<Plans></Plans>} />
                </Route>

                {/* <Route path="/gallery" element={<PunjabiGrillUI />} /> */}
            </Routes>
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
    );
}

export default App;
