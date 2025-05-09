import React from "react";

import Hero from "../components/Hero";

// import GlowButton from '../components/Buttons/GlowButton'
import ScrollingReviewCards from "../components/Home/Review.jsx";
// import SwipableCardCarousel from '../components/Home/Gallery.js'
// import InstagramCard from '../components/Gallery/InstagramCard.jsx'
// import HeroAbout from '../components/Home/About.jsx'
import AboutBrief from "../components/Home/AboutBrief.jsx";
import NewsLetter from "../components/Home/NewsLetter.jsx";
import DeliveryBrief from "../components/Home/DeliveryBrief.jsx";
import FoodAndPlansBrief from "../components/Home/FoodAndPlansBrief.jsx";

// import CardList from '../containers/SocialCardList.jsx'

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <SwipableCardCarousel/> */}
            {/* <InstagramCard/> */}
            {/* <CardList/> */}
            <FoodAndPlansBrief/>
            <DeliveryBrief/>
            <AboutBrief />
            <ScrollingReviewCards />
            <NewsLetter />
        </div>
    );
};

export default Home;
