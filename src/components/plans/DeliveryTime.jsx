import React from 'react'

const DeliveryTime = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery Days</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deliver Monday through Friday, with optional Saturday delivery.
        </p>
        <p className="text-sm text-gray-500 mt-4">
              Additional $5 fee applies for Saturday delivery
            </p>
        
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Regular Delivery Days
          </h3>
          <div className="grid grid-cols-5 gap-4 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 text-center bg-primary/10">
              <div className="text-lg font-medium text-gray-900 mb-1">Mon</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center bg-primary/10">
              <div className="text-lg font-medium text-gray-900 mb-1">Tue</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center bg-primary/10">
              <div className="text-lg font-medium text-gray-900 mb-1">Wed</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center bg-primary/10">
              <div className="text-lg font-medium text-gray-900 mb-1">Thu</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center bg-primary/10">
              <div className="text-lg font-medium text-gray-900 mb-1">Fri</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-1">
                  Saturday Delivery
                </h4>
               
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider" />
              </label>
            </div>
            
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              Preferred Delivery Time
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="radio"
                  id="morning"
                  name="delivery-time"
                  className="hidden"
                  defaultChecked=""
                />
                <label
                  htmlFor="morning"
                  className="flex items-center border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition"
                >
                  <span className="custom-radio" />
                  <div>
                    <span className="block text-gray-900 font-medium">
                      Morning
                    </span>
                    <span className="block text-sm text-gray-600">
                      8:00 AM - 11:00 AM
                    </span>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  type="radio"
                  id="afternoon"
                  name="delivery-time"
                  className="hidden"
                />
                <label
                  htmlFor="afternoon"
                  className="flex items-center border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition"
                >
                  <span className="custom-radio" />
                  <div>
                    <span className="block text-gray-900 font-medium">
                      Afternoon
                    </span>
                    <span className="block text-sm text-gray-600">
                      12:00 PM - 3:00 PM
                    </span>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  type="radio"
                  id="evening"
                  name="delivery-time"
                  className="hidden"
                />
                <label
                  htmlFor="evening"
                  className="flex items-center border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition"
                >
                  <span className="custom-radio" />
                  <div>
                    <span className="block text-gray-900 font-medium">
                      Evening
                    </span>
                    <span className="block text-sm text-gray-600">
                      4:00 PM - 7:00 PM
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default DeliveryTime
