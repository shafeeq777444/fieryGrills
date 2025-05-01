import React from 'react'

const punjabiVegDishes = [
  {
    name: "Sarson Da Saag & Makki Di Roti",
    description: "Mustard greens curry served with corn flour flatbread."
  },
  {
    name: "Chole (Chana Masala)",
    description: "Spicy chickpeas cooked with onions, tomatoes, and masala."
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in a creamy tomato-based gravy."
  },
  {
    name: "Rajma Masala",
    description: "Red kidney beans curry, often paired with rice."
  },
  {
    name: "Kadhi Pakora",
    description: "Gram flour and yogurt-based curry with fried fritters (pakoras)."
  },
  {
    name: "Aloo Gobi",
    description: "Dry or semi-dry curry of potatoes and cauliflower."
  },
  {
    name: "Baingan Bharta",
    description: "Roasted and mashed eggplant cooked with onions and spices."
  },
  {
    name: "Amritsari Kulcha with Chole",
    description: "Stuffed flatbread served with spicy chickpeas."
  }
];

const VegetarianMenuSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-amber-800 mb-12 text-center">Our Vegetarian Specialties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center md:hidden">
            <div className="rounded-lg shadow-lg overflow-hidden h-full w-full">
              <img src="/assets/veg2.jpeg" alt="Punjabi Vegetarian Dishes" className="object-cover w-full h-full" />
            </div>
          </div>
          <div>

            <ul className="space-y-6">
              {punjabiVegDishes.map((dish, index) => (
                <li key={index} className="border-b border-amber-200 pb-4">
                  <h3 className="text-xl font-medium text-amber-900">{dish.name}</h3>
                  <p className="text-slate-600 mt-1">{dish.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:flex justify-center hidden">
            <div className="rounded-lg shadow-lg overflow-hidden h-full w-full">
              <img src="/assets/veg1.jpeg" alt="Punjabi Vegetarian Dishes" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetarianMenuSection;