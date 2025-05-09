import React from 'react'

const AboutHero = () => {
  return (
    <section className="pt-20 relative overflow-hidden ">
    <img src='/assets/about/about-hero.jpg'
      className="absolute inset-0 z-0 object-cover object-top w-full h-full"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        opacity: "0.9"
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Who We Are
        </h1>
        <p className="text-sm md:text-md text-white mb-8">
          At Punjabi Grills Tiffin Mess, we serve freshly cooked, homely North
          Indian meals with love. Our mission is to bring the taste of
          traditional Punjabi kitchens to your table—healthy, hearty, and
          delivered daily.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-white px-4 py-3  hover:bg-white hover:text-black rounded-sm hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap duration-300 ease-out">
            Our Menu
          </button>
          <button className="bg-white    rounded-md y text-primary px-4 py-0 md:px-4 md:py-3 !rounded-button hover:bg-primary  transition-all  whitespace-nowrap border-0">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutHero
