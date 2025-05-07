import React from 'react'


import Hero from '../components/Hero'
// import GlowButton from '../components/Buttons/GlowButton'
import ScrollingReviewCards from '../components/HomePage/Review.jsx'
import About from '../components/HomePage/About.jsx'
import SwipableCardCarousel from '../components/HomePage/Gallery.jsx'
import InstagramCard from '../components/Gallery/InstagramCard.jsx'
import CardList from '../containers/SocialCardList.jsx'

const Home = () => {
  return (
    <div>

      <Hero></Hero>
      {/* <SwipableCardCarousel/> */}
      {/* <InstagramCard/> */}
      {/* <CardList/> */}
    <ScrollingReviewCards/>
    <About/>

    </div>
  )
}

export default Home
