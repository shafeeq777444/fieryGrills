

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
// import { useEffect, useState } from 'react'
import SplashScreen from './components/SplashScreen'
import MenuPage from './pages/Menu'

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

    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />

      </Routes>
    </>
  )
}

export default App
