import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutBrief = () => {
  const navigate=useNavigate()
  return (
    <div>
         <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://readdy.ai/api/search-image?query=A%20professional%20Punjabi%20chef%20in%20traditional%20attire%20preparing%20food%20in%20a%20clean%20modern%20kitchen%2C%20adding%20spices%20to%20a%20large%20pot%2C%20with%20steam%20rising%2C%20warm%20lighting%20creating%20an%20inviting%20atmosphere%2C%20high-quality%20food%20preparation%20photography&width=300&height=300&seq=chef1&orientation=squarish"
                    alt="Punjabi Chef"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://readdy.ai/api/search-image?query=Assorted%20Indian%20spices%20in%20traditional%20metal%20bowls%20arranged%20on%20a%20wooden%20surface%2C%20including%20turmeric%2C%20red%20chili%2C%20garam%20masala%2C%20cumin%2C%20and%20coriander%2C%20with%20vibrant%20colors%20and%20textures%2C%20professional%20food%20photography%20with%20natural%20lighting&width=300&height=300&seq=spices1&orientation=squarish"
                    alt="Punjabi Spices"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://readdy.ai/api/search-image?query=A%20family%20enjoying%20a%20Punjabi%20meal%20together%20at%20home%2C%20sharing%20various%20dishes%20from%20tiffin%20boxes%2C%20smiling%20and%20conversing%2C%20warm%20homely%20atmosphere%2C%20natural%20lighting%20through%20windows%2C%20casual%20dining%20setting%20with%20traditional%20elements&width=300&height=300&seq=family1&orientation=squarish"
                    alt="Family Enjoying Meal"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="https://readdy.ai/api/search-image?query=Stacked%20stainless%20steel%20tiffin%20boxes%20with%20Punjabi%20food%20visible%20inside%2C%20arranged%20on%20a%20wooden%20table%20with%20some%20traditional%20Indian%20elements%20like%20a%20small%20potted%20plant%20and%20cloth%20napkins%2C%20bright%20natural%20lighting%2C%20minimalist%20composition&width=300&height=300&seq=tiffin1&orientation=squarish"
                    alt="Tiffin Boxes"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                About Fiery Grills Punjabi Tiffin
              </h2>
              <p className="text-gray-700 mb-4">
                Founded with love and passion for authentic cooking, Fiery
                Grills Punjabi Tiffin is your go-to for homemade Punjabi meals
                in town. Our journey began in 2018 when our founder, Chef Arjun
                Singh, noticed the lack of authentic Punjabi food options for
                busy professionals and students.
              </p>
              <p className="text-gray-700 mb-4">
                What sets us apart is our commitment to authenticity. We use
                traditional recipes passed down through generations, locally
                sourced ingredients, and cooking techniques that preserve the
                true essence of Punjabi cuisine.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to deliver the warmth and flavor of Punjabi
                kitchens, using locally sourced ingredients and traditional
                recipes. Experience the taste of Punjab, one tiffin at a time.
              </p>

              <div className="flex space-x-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">25+</div>
                  <div className="text-sm text-gray-600">Authentic Dishes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">7</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
              </div>

              <button onClick={()=>{navigate('/about')
                window.scrollTo({top:0,behavior:"smooth"})
              }} className="bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutBrief
