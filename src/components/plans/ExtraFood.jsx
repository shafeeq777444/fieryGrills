import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const extraCharges = [
  {
    item: "Roti",
    price: "$10 per month",
    img: "/extraFood/roti.jpg",
  },
  {
    item: "Sabzi (8oz)",
    price: "$80 per month",
    img: "/extraFood/sabzi2.jpg",
  },
  {
    item: "Sabzi (12oz)",
    price: "$100 per month",
    img: "/extraFood/sabzi.jpg",
  },
  {
    item: "Raita (4oz)",
    price: "$30 per month",
    img: "/extraFood/raita.jpg",
  },
  {
    item: "Raita (8oz)",
    price: "$40 per month",
    img: "/extraFood/raita2.jpg",
  },
  {
    item: "Raita (12oz)",
    price: "$50 per month",
    img: "/extraFood/raita.jpg",
  },
  {
    item: "Boiled Egg",
    price: "$35 per month",
    img: "/extraFood/boiledegg.jpg",
  },
];

const ExtraFood = () => {
  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryDark">
          Add-On Food Charges
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Choose from a variety of delicious extras to customize your meal plan. 
          Additional charges apply based on your selection.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {extraCharges.map((charge, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <div className="relative h-56">
                  <img
                    src={charge.img}
                    alt={charge.item}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <h3 className="text-white text-lg font-semibold">
                      {charge.item}
                    </h3>
                    <p className="text-gray-200 text-sm">{charge.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExtraFood;
