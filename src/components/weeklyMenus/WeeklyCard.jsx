/* eslint-disable no-unused-vars */
import { motion, useTransform, useScroll } from "framer-motion";
const Card = ({ menu, isMobile }) => {
    return (
      <div
        className={`relative  rounded-lg bg-white overflow-hidden shadow-md transition-all duration-500 ease-in-out group
          ${isMobile ? 'w-[250px] flex-shrink-0' : 'w-[300px]'}`}
      >
  
  <div className="relative h-64 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src={menu.image}
                alt={menu.mainDish}
                className="w-full h-full object-cover  transition-transform duration-700 ease-in-out group-hover:scale-105"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-white text-2xl font-bold">{menu.day}</h3>
                </motion.div>
              </div>
            </div>
  
        <div className="p-3 md:p-4">
        <h4 className="text-amber-800 text-xl font-semibold mb-2">
                {menu.mainDish}
              </h4>

            {menu.sides.map((side, idx) => (
              <motion.li
              key={idx}
              className="text-gray-700 text-sm flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + idx * 0.1,
                duration: 0.3,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
              {side}
            </motion.li>
            ))}
          </div>
        </div>

    );
  };
  export default Card