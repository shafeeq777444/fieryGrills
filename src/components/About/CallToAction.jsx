import React from 'react'

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r bg-red-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Join Our Tiffin Family
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Experience the comfort of home-cooked meals without the hassle. Choose
          from our flexible subscription plans and enjoy delicious, nutritious
          Punjabi food delivered to your doorstep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white rounded-md text-black px-8 py-4 !rounded-button font-semibold hover:bg-opacity-90 transition-colors shadow-lg whitespace-nowrap">
            See Our Plans
          </button>
          <button className="bg-transparent rounded-md  px-8 py-4 !rounded-button font-semibold hover:bg-white hover:text-primary transition-colors whitespace-nowrap hover:text-black">
            Contact Us
          </button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold">200+</div>
            <p className="opacity-90">Daily Meals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">50+</div>
            <p className="opacity-90">Recipes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">5</div>
            <p className="opacity-90">Years of Service</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">98%</div>
            <p className="opacity-90">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CallToAction
