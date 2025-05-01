import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Banner from "../components/WeeklyMenu/Banner";

const weeklyMenu = [
  {
    day: "Monday",
    mainDish: "Amritsari Chole",
    sides: ["Kulcha", "Onion Rings", "Mint Chutney"],
    image: "/assets/tuesday.png",
    id: 1,
  },
  {
    day: "Tuesday",
    mainDish: "Butter Chicken",
    sides: ["Jeera Rice", "Naan", "Cucumber Raita"],
    image: "/assets/wedsday.png",
    id: 2,
  },
  {
    day: "Wednesday",
    mainDish: "Sarson Ka Saag",
    sides: ["Makki Di Roti", "White Butter", "Gur"],
    image: "/assets/thursday.png",
    id: 3,
  },
  {
    day: "Thursday",
    mainDish: "Rajma Chawal",
    sides: ["Methi Thepla", "Kachumber Salad", "Achar"],
    image: "/assets/monday.png",
    id: 4,
  },
  {
    day: "Friday",
    mainDish: "Shahi Paneer",
    sides: ["Paratha", "Jeera Rice", "Boondi Raita"],
    image: "/assets/sat.png",
    id: 5,
  },
  {
    day: "Saturday",
    mainDish: "Amritsari Fish",
    sides: ["Tandoori Roti", "Onion Salad", "Mint Chutney"],
    image: "/assets/friday.png",
    id: 6,
  },
];

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <h1></h1>
        <span className="font-semibold uppercase text-neutral-500">

        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${(weeklyMenu.length +24) }%`]);


  return (
    <section ref={targetRef} className="relative h-[300vh] bg-amber-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-8">
          {weeklyMenu.map((menu) => (
            <Card key={menu.id} menu={menu} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ menu }) => {
  return (
    <div
      className="relative w-[300px] font-staatliches rounded-lg bg-white overflow-hidden shadow-md transition-all duration-500 ease-in-out group"
    >
      <div className="absolute top-3 left-3 bg-red-800 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
        {menu.day}
      </div>

      <div className="overflow-hidden h-48">
        <img
          src={menu.image}
          alt={menu.mainDish}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-red-800 font-semibold text-lg text-center mb-2">
          {menu.mainDish}
        </h3>
        <div className="border-t border-amber-100 pt-2">
          {menu.sides.map((side, idx) => (
            <p
              key={idx}
              className="text-sm text-gray-600 text-center my-1 flex items-center justify-center gap-2"
            >
              <span className="w-1 h-1 bg-red-800 rounded-full inline-block" />
              {side}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example;
