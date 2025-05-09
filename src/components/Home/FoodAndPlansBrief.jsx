import { ArrowRight } from "lucide-react";

export default function FoodAndPlansBrief() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
      {/* Punjabi Menu Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full  md:w-1/2">
          <img 
            src="/assets/home/menuBrief.jpg" 
            alt="Punjabi dish with curry in a metal bowl alongside naan bread and rice" 
            className="rounded-lg w-full h-40 h-auto shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Punjabi Menu
          </h2>
          <p className="text-gray-700 text-lg">
            Discover our extensive range of authentic Punjabi dishes, from 
            butter chicken to dal makhani, each prepared with traditional
            spices and love.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full inline-flex items-center mt-4 transition-colors">
            View Menu <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Meal Plans Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <img 
            src="/api/placeholder/600/500" 
            alt="Various healthy meal prep bowls with vegetables and proteins" 
            className="rounded-lg w-full h-auto shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flexible Meal Plans
          </h2>
          <p className="text-gray-700 text-lg">
            Choose from daily, weekly, or monthly tiffin plans. Customizable
            options available to suit your preferences and dietary needs.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full inline-flex items-center mt-4 transition-colors">
            View Plans <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}