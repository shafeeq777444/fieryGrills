import React from 'react'

const OurStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white ">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Story
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="md:w-3/5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            From Grandmother's Kitchen to Your Doorstep
          </h3>
          <p className="text-gray-700 mb-6">
            Punjabi Grills Tiffin Mess began in 2018 when Harpreet Singh,
            inspired by his grandmother's cooking, decided to share the
            authentic flavors of Punjab with busy professionals who missed
            home-cooked meals.
          </p>
          <p className="text-gray-700 mb-8">
            What started as a small operation serving 15 customers has grown
            into a beloved tiffin service delivering over 200 fresh meals daily
            across the city, while still maintaining the same traditional
            recipes and cooking methods that made our food special from day one.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                <i className="ri-check-line ri-lg text-primary" />
              </div>
              <p className="text-gray-700">
                Family recipes passed down through generations
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                <i className="ri-check-line ri-lg text-primary" />
              </div>
              <p className="text-gray-700">
                Fresh ingredients sourced from local farmers
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                <i className="ri-check-line ri-lg text-primary" />
              </div>
              <p className="text-gray-700">
                Traditional cooking methods for authentic taste
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Close-up%2520of%2520traditional%2520Punjabi%2520food%2520being%2520cooked%2520in%2520a%2520clay%2520pot%2520with%2520steam%2520rising%252C%2520showing%2520rich%2520curry%2520with%2520vibrant%2520spices%2520and%2520herbs.%2520Warm%2520lighting%2520highlights%2520the%2520texture%2520and%2520colors%2520of%2520the%2520dish.%2520Professional%2520food%2520photography%2520with%2520shallow%2520depth%2520of%2520field.&width=600&height=800&seq=2&orientation=portrait"
                alt="Traditional cooking"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Hands%2520kneading%2520traditional%2520Indian%2520bread%2520dough%2520on%2520a%2520wooden%2520surface%2520with%2520flour%2520dusting.%2520The%2520image%2520captures%2520the%2520artisanal%2520process%2520of%2520making%2520roti%2520or%2520naan%2520in%2520a%2520rustic%2520kitchen%2520setting%2520with%2520warm%2520ambient%2520lighting.%2520Professional%2520food%2520photography%2520style.&width=600&height=800&seq=3&orientation=portrait"
                alt="Making bread"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Beautifully%2520arranged%2520Punjabi%2520thali%2520%28meal%2520platter%29%2520with%2520various%2520dishes%2520including%2520dal%252C%2520paneer%252C%2520roti%252C%2520rice%252C%2520and%2520raita.%2520The%2520food%2520is%2520presented%2520on%2520traditional%2520metal%2520plates%2520with%2520small%2520bowls%252C%2520garnished%2520with%2520fresh%2520herbs.%2520Professional%2520food%2520photography%2520with%2520overhead%2520angle.&width=600&height=800&seq=4&orientation=portrait"
                alt="Punjabi thali"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <img
                src="https://readdy.ai/api/search-image?query=A%2520smiling%2520Indian%2520chef%2520in%2520traditional%2520attire%2520adding%2520finishing%2520touches%2520to%2520a%2520colorful%2520Punjabi%2520dish.%2520The%2520chef%2520is%2520working%2520in%2520a%2520warm%252C%2520well-lit%2520kitchen%2520with%2520traditional%2520elements%2520visible%2520in%2520the%2520background.%2520Professional%2520portrait%2520photography%2520style%2520with%2520natural%2520lighting.&width=600&height=800&seq=5&orientation=portrait"
                alt="Chef preparing food"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurStory
