import React from "react";
import VegetarianMenuSection from "./VegMenu";

import HorizontalScrollCarousel from "../weeklyMenus/WeeklyMenus";

const punjabiNonVegDishes = [
    {
        name: "Butter Chicken",
        description: "Tender chicken pieces in a rich, creamy tomato gravy with butter and cream.",
    },
    {
        name: "Amritsari Fish",
        description: "Spiced and battered fish, deep fried to perfection. A Punjabi street food favorite.",
    },
    {
        name: "Delhi Nihari",
        description: "Slow-cooked meat stew with aromatic spices, traditionally eaten at breakfast.",
    },
    {
        name: "Chicken Korma Curry",
        description: "Chicken cooked in a rich, yogurt-based gravy with ground nuts and spices.",
    },
    {
        name: "Chicken Saag",
        description: "Chicken cooked with spinach and spices for a hearty, nutritious dish.",
    },
    {
        name: "Tandoori Chicken",
        description: "Chicken marinated in yogurt and spices, roasted in a tandoor oven.",
    },
    {
        name: "Egg Spinach Curry",
        description: "Hard-boiled eggs in a flavorful spinach gravy, rich in nutrients.",
    },
    {
        name: "Chicken Mughlai",
        description: "Royal preparation of chicken in a rich, creamy sauce with nuts and spices.",
    },
];

const punjabiSalads = [
    {
        name: "Punjabi Kachumber Salad",
        description: "Fresh mixture of diced cucumber, tomatoes, onions with lemon juice and spices.",
    },
    {
        name: "Sirka Onion",
        description: "Red onions pickled in vinegar with spices, a tangy accompaniment.",
    },
    {
        name: "Cucumber and Mint Raita",
        description: "Cooling yogurt dip with fresh cucumber, mint and roasted cumin.",
    },
    {
        name: "Carrot and Peanut Salad",
        description: "Crunchy salad with shredded carrots, roasted peanuts and tangy dressing.",
    },
    {
        name: "Boondi Raita",
        description: "Yogurt mixed with tiny fried gram flour balls and spices.",
    },
];

// Weekly special menu from the examples provided
const weeklySpecials = [
    {
        day: "Monday",
        vegDish: "Kadai Paneer Gravy",
        sideDish: "Aloo Methi",
        nonVegDish: "Delhi Nihari",
        accompaniment: "Cucumber and Mint Raita",
    },
    {
        day: "Tuesday",
        vegDish: "Pancharatna Dal",
        sideDish: "Sabji Pakoda",
        nonVegDish: "Chicken Korma Curry",
        accompaniment: "Carrot and Peanut Salad",
    },
    {
        day: "Wednesday",
        vegDish: "Lauki Sabji Gravy Shahi Wali",
        sideDish: "Kadhai Mushroom",
        nonVegDish: "Egg Spinach Curry",
        accompaniment: "Sirka Onion",
    },
    {
        day: "Thursday",
        vegDish: "Moong Masoor Dal",
        sideDish: "Dum Aloo",
        nonVegDish: "Chicken Mughlai",
        accompaniment: "Tomato and Onion Chutney",
    },
    {
        day: "Friday",
        vegDish: "Sweet Potato Chickpea Curry",
        sideDish: "Paneer Corn Masala",
        nonVegDish: "Chicken Saag Curry",
        accompaniment: "Punjabi Kachumber Salad",
    },
];

const PunjabiNonVegMenu = () => {
    return (
        <div className="min-h-screen bg-amber-50 text-slate-800">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-5xl font-bold text-amber-800 mb-4">Fiery Grills Punjabi Tiffin</h1>
                    <p className="text-lg text-amber-700 max-w-lg">
                        Savor the rich traditions of Punjab with our authentic vegetarian and non-vegetarian specialties,
                        complemented by fresh salads. Each dish is prepared using traditional spices and time-honored
                        cooking techniques.
                    </p>
                </div>
                <div className="w-1/2 flex justify-center">
                    {/* <div className="rounded-lg shadow-lg overflow-hidden h-120 flex justify-center items-start w-full"> */}
                        <img src="/assets/menu2.png" alt="Punjabi Non-Veg Food" className="object-fill object-bottom w-full h-full " />
                    {/* </div> */}
                </div>
            </div>

            {/* Non-Veg Menu Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-amber-800 mb-12 text-center">Our Non-Vegetarian Specialties</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex justify-center">
                            <div className="rounded-lg shadow-lg overflow-hidden h-full w-full">
                                <img
                                    src="/assets/nonveg.jpeg"
                                    alt="Punjabi Non-Vegetarian Dishes"
                                    className="object-cover w-full h-full  md:block "
                                />
                            </div>
                        </div>

                        <div>
                            <ul className="space-y-6">
                                {punjabiNonVegDishes.map((dish, index) => (
                                    <li key={index} className="border-b border-amber-200 pb-4">
                                        <h3 className="text-xl font-medium text-amber-900">{dish.name}</h3>
                                        <p className="text-slate-600 mt-1">{dish.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <VegetarianMenuSection />

            {/* Salads Section */}
            <div className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-amber-800 mb-12 text-center">
                        Fresh Punjabi Salads & Accompaniments
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {punjabiSalads.map((salad, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-medium text-amber-900 mb-2">{salad.name}</h3>
                                <p className="text-slate-600">{salad.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Weekly Special Menu */}
            {/* <div className="bg-white py-16 w-screen">
        <div className=" px-8 w-screen">
          <h2 className="text-3xl font-bold text-amber-800 mb-12 text-center ">Fiery Grills Weekly Tiffin Menu</h2>
          
          
        </div>
      </div> */}

            {/* Call to Action */}
            {/* <div className="py-16 px-8 text-center">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Experience the Authentic Taste of Punjab</h2>
        <p className="text-amber-700 max-w-2xl mx-auto mb-8">
          Subscribe to our tiffin service and enjoy hearty Punjabi meals delivered fresh to your doorstep daily.
        </p>
        <div className="space-x-4">
          <button className="bg-amber-700 text-white py-3 px-8 rounded-lg hover:bg-amber-800 transition-colors">
            Order Non-Veg Tiffin
          </button>
          <button className="bg-white border-2 border-amber-700 text-amber-700 py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors">
            View Full Menu
          </button>
        </div>
      </div> */}
        </div>
    );
};

export default PunjabiNonVegMenu;
