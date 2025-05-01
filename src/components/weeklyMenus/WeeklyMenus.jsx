import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import Card from "./WeeklyCard";

const vegWeeklyMenu = [
    {
        day: "Monday",
        mainDish: "Paneer Tikka Masala",
        sides: ["Tandoori Roti", "Cucumber Salad", "Mint Chutney"],
        image: "/assets/monday.png",
        id: 1,
    },
    {
        day: "Tuesday",
        mainDish: "Chana Masala",
        sides: ["Bhatura", "Onion Rings", "Pickle"],
        image: "/assets/tuesday.png",
        id: 2,
    },
    {
        day: "Wednesday",
        mainDish: "Aloo Baingan",
        sides: ["Chapati", "Boondi Raita", "Papad"],
        image: "/assets/wedsday.png",
        id: 3,
    },
    {
        day: "Thursday",
        mainDish: "Veg Pulao",
        sides: ["Mix Veg Curry", "Raita", "Salad"],
        image: "/assets/thursday.png",
        id: 4,
    },
    {
        day: "Friday",
        mainDish: "Palak Paneer",
        sides: ["Jeera Rice", "Naan", "Lassi"],
        image: "/assets/friday.png",
        id: 5,
    },
    {
        day: "Saturday",
        mainDish: "Kadhi Pakora",
        sides: ["Rice", "Papad", "Pickle"],
        image: "/assets/sat.png",
        id: 6,
    },
];

const nonVegWeeklyMenu = [
    {
        day: "Monday",
        mainDish: "Chicken Curry",
        sides: ["Rice", "Roti", "Onion Salad"],
        image: "/assets/monday-nonveg.png",
        id: 1,
    },
    {
        day: "Tuesday",
        mainDish: "Mutton Rogan Josh",
        sides: ["Naan", "Cucumber Raita", "Lemon"],
        image: "/assets/tuesday-nonveg.png",
        id: 2,
    },
    {
        day: "Wednesday",
        mainDish: "Egg Curry",
        sides: ["Paratha", "Tomato Chutney", "Onion Rings"],
        image: "/assets/wednesday-nonveg.png",
        id: 3,
    },
    {
        day: "Thursday",
        mainDish: "Fish Fry",
        sides: ["Lemon Rice", "Cabbage Slaw", "Green Chutney"],
        image: "/assets/thursday-nonveg.png",
        id: 4,
    },
    {
        day: "Friday",
        mainDish: "Butter Chicken",
        sides: ["Jeera Rice", "Garlic Naan", "Salad"],
        image: "/assets/friday-nonveg.png",
        id: 5,
    },
    {
        day: "Saturday",
        mainDish: "Keema Matar",
        sides: ["Lachha Paratha", "Pickle", "Curd"],
        image: "/assets/saturday-nonveg.png",
        id: 6,
    },
];

const mixedWeeklyMenu = [
    {
        day: "Monday",
        mainDish: "Vegetable Biryani",
        sides: ["Raita", "Papad", "Pickle"],
        image: "/assets/monday-mixed.png",
        id: 1,
    },
    {
        day: "Tuesday",
        mainDish: "Chicken Biryani",
        sides: ["Mirchi Ka Salan", "Onion Raita", "Boiled Egg"],
        image: "/assets/tuesday-mixed.png",
        id: 2,
    },
    {
        day: "Wednesday",
        mainDish: "Dal Makhani",
        sides: ["Butter Naan", "Salad", "Lassi"],
        image: "/assets/wednesday-mixed.png",
        id: 3,
    },
    {
        day: "Thursday",
        mainDish: "Grilled Fish",
        sides: ["Steamed Veggies", "Lemon Rice", "Mint Sauce"],
        image: "/assets/thursday-mixed.png",
        id: 4,
    },
    {
        day: "Friday",
        mainDish: "Shahi Paneer",
        sides: ["Tandoori Roti", "Jeera Rice", "Kachumber"],
        image: "/assets/friday-mixed.png",
        id: 5,
    },
    {
        day: "Saturday",
        mainDish: "Mutton Biryani",
        sides: ["Onion Raita", "Pickle", "Fried Papad"],
        image: "/assets/saturday-mixed.png",
        id: 6,
    },
];

// Categories definition (removed icons for minimal design)
const categories = [
    { id: "veg", name: "Vegetarian", menu: vegWeeklyMenu },
    { id: "nonveg", name: "Non-Vegetarian", menu: nonVegWeeklyMenu },
    { id: "mixed", name: "Mixed", menu: mixedWeeklyMenu },
];

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeCategory, setActiveCategory] = useState("veg");
    const [weeklyMenu, setWeeklyMenu] = useState(vegWeeklyMenu);

    // Function to handle category change
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        const selectedCategory = categories.find((cat) => cat.id === categoryId);
        setWeeklyMenu(selectedCategory.menu);
    };

    // Check if device is mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjust movement amount based on screen size
    const xRange = isMobile ? [0, 1] : [0, 1];

    // Adjusted to use the dynamic weeklyMenu state
    const xOutput = isMobile ? ["0%", `-${weeklyMenu.length * 85 - 10}%`] : ["1%", `-${weeklyMenu.length + 24}%`];

    const x = useTransform(scrollYProgress, xRange, xOutput);

    return (
        <section ref={targetRef} className="relative h-[100vh] md:h-[200vh] bg-white">
            <div className="sticky top-0 flex flex-col h-screen w-full">
                {/* Heading Section */}
                <div className="flex flex-col items-center justify-center absolute w-full pt-8 pb-4 px-4 md:pt-12 md:pb-8 text-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-2">
                            Fiery Grills Weekly Tiffin Menu
                        </h2>
                        <p className="text-lg text-amber-700">Discover what's cooking throughout the week</p>
                    </motion.div>

                    {/* Category Toggle Buttons - Minimal Design */}

                    <div className="flex justify-center mb-8">
                        <div className="bg-white p-1 rounded-lg shadow-md flex">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id)}
                                    className={`relative px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 min-w-24
                ${activeCategory === category.id ? "text-white" : "text-gray-700 hover:text-amber-800"}`}
                                >
                                    {activeCategory === category.id && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-amber-600 rounded-md"
                                            initial={false}
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                   
                </div>

                {/* Carousel Section */}
                <div className="flex-1 flex items-center overflow-hidden mt-40 md:mt-32">
                    {isMobile ? (
                        // Mobile view - swipeable horizontal scroll
                        <div className="w-full overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory">
                            <div className="flex gap-4">
                                {weeklyMenu.map((menu) => (
                                    <div key={menu.id} className="snap-center">
                                        <Card menu={menu} isMobile={true} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Desktop view - framer motion controlled scroll
                        <motion.div
                            style={{ x }}
                            className="flex gap-6 px-8"
                            key={activeCategory} // Key to force re-render when category changes
                        >
                            {weeklyMenu.map((menu) => (
                                <Card key={`${activeCategory}-${menu.id}`} menu={menu} />
                            ))}
                        </motion.div>
                    )}
                </div>
                <div>
                    <div className="absolute bottom-6 w-full text-center">
                         {/* Date Range */}
                    <p className="text-amber-700 text-sm mb-2">12-March-25 to 18-March-25</p>

{/* Saturday Note */}
<p className="text-xs text-amber-600 italic">
    *Saturday meals are optional and available only upon request
</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HorizontalScrollCarousel;
