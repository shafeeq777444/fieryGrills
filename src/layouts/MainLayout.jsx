import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Outlet/>
    </div>
  )
}

export default MainLayout
