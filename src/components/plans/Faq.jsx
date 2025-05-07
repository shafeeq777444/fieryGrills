import React from 'react'

const Faq = () => {
  return (
    <div>
      <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our tiffin service.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition">
              <span className="text-lg font-medium text-gray-900">
                How fresh is your food?
              </span>
              <i className="ri-arrow-down-s-line text-gray-500" />
            </button>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">
                All our meals are freshly prepared on the day of delivery. We
                use locally sourced ingredients whenever possible and never use
                preservatives or artificial flavors.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition">
              <span className="text-lg font-medium text-gray-900">
                Can I skip a delivery?
              </span>
              <i className="ri-arrow-down-s-line text-gray-500" />
            </button>
            <div className="p-4 bg-gray-50 border-t border-gray-200 hidden">
              <p className="text-gray-700">
                Yes, you can skip a delivery by notifying us at least 48 hours
                in advance. Simply log into your account or call our customer
                service to arrange this.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition">
              <span className="text-lg font-medium text-gray-900">
                How do you handle food allergies?
              </span>
              <i className="ri-arrow-down-s-line text-gray-500" />
            </button>
            <div className="p-4 bg-gray-50 border-t border-gray-200 hidden">
              <p className="text-gray-700">
                We take food allergies very seriously. You can specify any
                allergies or dietary restrictions when you sign up, and our
                chefs will ensure your meals are prepared accordingly. However,
                all meals are prepared in the same kitchen, so
                cross-contamination is possible.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition">
              <span className="text-lg font-medium text-gray-900">
                What areas do you deliver to?
              </span>
              <i className="ri-arrow-down-s-line text-gray-500" />
            </button>
            <div className="p-4 bg-gray-50 border-t border-gray-200 hidden">
              <p className="text-gray-700">
                We currently deliver to all major areas within a 15-mile radius
                of our kitchen. You can check if your location is covered by
                entering your zip code on our delivery page.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 transition">
              <span className="text-lg font-medium text-gray-900">
                How do I heat the food?
              </span>
              <i className="ri-arrow-down-s-line text-gray-500" />
            </button>
            <div className="p-4 bg-gray-50 border-t border-gray-200 hidden">
              <p className="text-gray-700">
                Our meals come in microwave-safe containers. Simply heat for 2-3
                minutes or transfer to a pot and heat on the stove. Detailed
                heating instructions are included with each delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Faq
