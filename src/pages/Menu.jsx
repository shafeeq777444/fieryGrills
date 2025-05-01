import TotalMenuHeading from "../components/TotalMenu/TotalMenuHeading";

import HorizontalScrollCarousel from "../components/weeklyMenus/WeeklyMenus";




const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-24  items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-playfair tracking-tight  text-white mb-4 ml-4 md:mr-10 md:mb-0 ">
            Fiery Grills
          </h1>
      </div>

      {/* <FoodCard/> */}
      {/* <div className="flex h-24 md:h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
        Scroll up
        </span>
        </div> */}
        <TotalMenuHeading/>
        <HorizontalScrollCarousel />
    </div>
  );
};





export default Example;