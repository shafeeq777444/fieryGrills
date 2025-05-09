import FeatureSection from "../components/Menu/FeatureSection";
import TotalMenuHeading from "../containers/Menu/TotalMenuHeading";
import HorizontalScrollCarousel from "../containers/Menu/WeeklyMenus";

const Example = () => {
    return (
        <div className="bg-[#1C1C1C]">
            <div className="flex h-26  items-center justify-center"></div>
            <TotalMenuHeading />
            <HorizontalScrollCarousel />
            <FeatureSection />
        </div>
    );
};

export default Example;
