import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeliveryBrief = () => {
    const navigate=useNavigate()
  return (
    <div className=''>
       <section id="delivery" className="py-16 p-4 ">
    <div className="container mx-auto px-4">
    <h2 className="text-xl md:text-3xl font-bold text-red-800 mb-4 md:hidden">
                    Delivery Available  Locations
                </h2>
    <div className="flex flex-col gap-4 md:flex-row items-center">
            <div className="md:w-1/2 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg ">
                    <img
                    src="/assets/home/foodCover.png"
                    alt="Delivery Coverage Map"
                    className="w-full h-120 object-cover"
                    />
                </div>
            </div>
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:order-1">
                <h2 className="text-3xl font-bold text-red-800 mb-4 hidden md:block">
                    Delivery Available Across Major Locations
                </h2>
                <p className="text-gray-700 mb-6 text-xs md:text-lg text-justify">
                    We currently deliver Punjabi tiffin services in the Greater
                    Toronto Area, including nearby suburbs and business hubs. Our
                    delivery network ensures that hot and fresh tiffins reach your
                    home, hostel, or office on time.
                </p>


                <button onClick={()=>{navigate('/about')
                    window.scrollTo({top:0,behavior:"smooth"})
                }} className="bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                    View Delivery Location Details
                </button> 
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default DeliveryBrief
