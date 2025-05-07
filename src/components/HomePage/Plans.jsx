import React, { useEffect, useState } from 'react'
import CallActions from '../plans/CallActions'
import Faq from '../plans/Faq'
import DeliverySchedule from '../plans/ProvideDuration'
import MealPlanSelector from '../plans/MealPlan'
import MealPlanDemo from '../plans/MealCategory'
import { ChevronDown } from 'lucide-react';

const Plans = () => {
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20
      setShowArrow(!scrolledToBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <>
      <div className="flex h-26  items-center justify-center bg-[#1C1C1C]"></div>
        {/* ...Meta and Link Tags... */}

        {/* Sections */}
        <MealPlanDemo />
        <MealPlanSelector />
        <DeliverySchedule />
       
       {/* extra details */}
        <CallActions />
        <Faq />
      </>

      {/* Downward Arrow */}
      {showArrow && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-3xl rounded-full bg-black/60 text-white p-1 z-50">
           <ChevronDown size={20}/>
        </div>
      )}
    </div>
  )
}

export default Plans
