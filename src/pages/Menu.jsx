import AboutHero from "../components/About/AboutHero";
import AnimatedOnScroll from "../components/AnimatedScrollerOnWraaper";
import FeatureSection from "../components/Menu/FeatureSection";
import TotalMenuHeading from "../containers/Menu/TotalMenuHeading";
import HorizontalScrollCarousel from "../containers/Menu/WeeklyMenus";

const Example = () => {
    return (
        <div className="bg-white">
            <div className="flex h-22  items-center justify-center"></div>
             <AboutHero/>
            <TotalMenuHeading />
            <AnimatedOnScroll> <HorizontalScrollCarousel /></AnimatedOnScroll>
            <FeatureSection />
        </div>
    );
};

export default Example;
