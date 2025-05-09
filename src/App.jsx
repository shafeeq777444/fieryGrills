/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
// import { useEffect, useState } from 'react'
import SplashScreen from "./components/SplashScreen";
import MenuPage from "./pages/Menu";
import Location from "./pages/Location";


import About from "./pages/About.jsx";
import Plans from "./pages/Plans.jsx";
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
            
        </>
    );
}

export default App;
