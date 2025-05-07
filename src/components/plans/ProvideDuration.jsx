export default function DeliverySchedule() {
    const scheduleOptions = [
      {
        id: "weekly",
        title: "Weekly",
        price: "$49.99/week",
        features: [
          { icon: "calendar", text: "Delivered every week" },
          { icon: "dollar", text: "Standard pricing" },
          { icon: "refresh", text: "Change menu weekly" }
        ]
      },
      {
        id: "bi-weekly",
        title: "Bi-Weekly",
        price: "$47.49/week",
        priceDetail: "5% discount",
        features: [
          { icon: "calendar", text: "Delivered every 2 weeks" },
          { icon: "dollar", text: "5% off standard price" },
          { icon: "refresh", text: "Change menu bi-weekly" }
        ]
      },
      {
        id: "monthly",
        title: "Monthly",
        price: "$44.99/week",
        priceDetail: "10% discount",
        features: [
          { icon: "calendar", text: "Delivered once a month" },
          { icon: "dollar", text: "10% off standard price" },
          { icon: "refresh", text: "Change menu monthly" }
        ]
      }
    ];
  
    const getIcon = (icon) => {
      if (icon === "calendar") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        );
      }
      if (icon === "dollar") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      }
      if (icon === "refresh") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6"></path>
            <path d="M1 20v-6h6"></path>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        );
      }
    };
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Delivery Schedule
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver Monday through Friday, with optional Saturday delivery
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Additional $5 fee applies for Saturday delivery
            </p>
            
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scheduleOptions.map((option) => (
                <div key={option.id} className="rounded-xl shadow-md overflow-hidden bg-white">
                  <div className="px-6 py-4 bg-gray-100 text-gray-900">
                    <h3 className="text-xl font-bold">{option.title}</h3>
                  </div>
  
                  <div className="px-6 py-5 border-b border-gray-200">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900">
                        {option.price}
                      </span>
                      {option.priceDetail && (
                        <span className="ml-2 text-sm font-medium text-green-600">
                          {option.priceDetail}
                        </span>
                      )}
                    </div>
                  </div>
  
                  <div className="px-6 py-5">
                    <div className="space-y-4">
                      {option.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-3">
                            {getIcon(feature.icon)}
                          </div>
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
  
                  <div className="px-6 py-4 bg-white">
                    
                  </div>
                </div>
              ))}
            </div>
  
         
            <div className="mt-10 text-center">
              <button className="px-8 py-3 bg-red-800 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  