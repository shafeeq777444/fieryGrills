import React from 'react'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import WhyChooseUs from '../components/About/WhyChooseUs'
import MeetOurTeam from '../components/About/MeetOurTeam.jsx'
import CallToAction from '../components/About/CallToAction'
import NewsLetter from '../components/HomePage/About.jsx'

const About = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - Punjabi Grills Tiffin Mess</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        :where([class^=\"ri-\"])::before { content: \"\\f3c2\"; }\n        body {\n            font-family: 'Open Sans', sans-serif;\n            color: #333;\n            background-color: #FFFFF;\n        }\n        h1, h2, h3, h4, h5, h6 {\n            font-family: 'Playfair Display', serif;\n        }\n        .hero-pattern {\n            background-image: url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D35400' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\");\n        }\n        .custom-checkbox {\n            display: inline-block;\n            position: relative;\n            padding-left: 30px;\n            cursor: pointer;\n            user-select: none;\n        }\n        .custom-checkbox input {\n            position: absolute;\n            opacity: 0;\n            cursor: pointer;\n            height: 0;\n            width: 0;\n        }\n        .checkmark {\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 20px;\n            width: 20px;\n            background-color: #fff;\n            border: 2px solid #F4B223;\n            border-radius: 4px;\n        }\n        .custom-checkbox:hover input ~ .checkmark {\n            background-color: #fff8e7;\n        }\n        .custom-checkbox input:checked ~ .checkmark {\n            background-color: #F4B223;\n        }\n        .checkmark:after {\n            content: \"\";\n            position: absolute;\n            display: none;\n        }\n        .custom-checkbox input:checked ~ .checkmark:after {\n            display: block;\n        }\n        .custom-checkbox .checkmark:after {\n            left: 6px;\n            top: 2px;\n            width: 5px;\n            height: 10px;\n            border: solid white;\n            border-width: 0 2px 2px 0;\n            transform: rotate(45deg);\n        }\n        .testimonial-slider {\n            scroll-snap-type: x mandatory;\n            -webkit-overflow-scrolling: touch;\n        }\n        .testimonial-slide {\n            scroll-snap-align: start;\n        }\n        .team-slider {\n            scroll-snap-type: x mandatory;\n            -webkit-overflow-scrolling: touch;\n        }\n        .team-slide {\n            scroll-snap-align: start;\n        }\n        input[type=range] {\n            -webkit-appearance: none;\n            width: 100%;\n            height: 8px;\n            border-radius: 4px;\n            background: #e2e8f0;\n            outline: none;\n        }\n        input[type=range]::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            background: #F4B223;\n            cursor: pointer;\n            border: 2px solid white;\n            box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n        }\n        input[type=range]::-moz-range-thumb {\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            background: #F4B223;\n            cursor: pointer;\n            border: 2px solid white;\n            box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n        }\n        .switch {\n            position: relative;\n            display: inline-block;\n            width: 50px;\n            height: 24px;\n        }\n        .switch input {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n        .slider {\n            position: absolute;\n            cursor: pointer;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-color: #e2e8f0;\n            transition: .4s;\n            border-radius: 34px;\n        }\n        .slider:before {\n            position: absolute;\n            content: \"\";\n            height: 18px;\n            width: 18px;\n            left: 3px;\n            bottom: 3px;\n            background-color: white;\n            transition: .4s;\n            border-radius: 50%;\n        }\n        input:checked + .slider {\n            background-color: #F4B223;\n        }\n        input:checked + .slider:before {\n            transform: translateX(26px);\n        }\n    "
    }}
  />
  {/* Header */}
  
  {/* Hero Section */}
 <AboutHero/>
  {/* Our Story Section */}
 <OurStory/>
  {/* Why Choose Us Section */}
  <WhyChooseUs/>
  {/* Meet Our Team Section */}
  <MeetOurTeam/>
  {/* Testimonials Section */}
  
  {/* Call to Action Section */}
  <CallToAction/>
  {/* Newsletter Section */}
  <NewsLetter/>
</>

  )
}

export default About
