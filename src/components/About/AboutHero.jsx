import React from 'react'

const AboutHero = () => {
  return (
    <section className="pt-20 relative overflow-hidden">
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage:
          'url("https://readdy.ai/api/search-image?query=Authentic%2520Punjabi%2520kitchen%2520with%2520warm%2520lighting%252C%2520traditional%2520cooking%2520utensils%252C%2520and%2520colorful%2520spices.%2520The%2520image%2520shows%2520homemade%2520Indian%2520food%2520being%2520prepared%2520with%2520a%2520soft%2520gradient%2520background%2520that%2520transitions%2520from%2520warm%2520orange%2520to%2520cream%2520on%2520the%2520left%2520side.%2520Professional%2520food%2520photography%2520style.&width=1920&height=1080&seq=1&orientation=landscape")',
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          <button className="bg-primary text-white px-6 py-3 !rounded-button hover:bg-white hover:text-black rounded-sm hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap duration-150 ease-in-out">
            Our Menu
          </button>
          <button className="bg-white    rounded-md y text-primary px-4 py-0 md:px-6 md:py-3 !rounded-button hover:bg-primary  transition-colors  whitespace-nowrap border-0">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutHero
