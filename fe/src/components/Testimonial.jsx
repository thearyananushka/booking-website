import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "Absolutely loved the concert! The experience was magical and well-organized.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Priya Mehta",
    review: "The theatre play was mesmerizing. A night to remember!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Amit Verma",
    review: "Super smooth ticket booking and a fantastic event experience.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Sneha Kapoor",
    review: "Best stand-up comedy show I’ve ever attended! Can’t wait for the next one.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full flex justify-center my-12 px-4">
      <div className="w-[85%] max-w-[1200px]">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          💬 What People Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="my-6"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 p-6 rounded-tl-[5px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[25px]  shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-400"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      {testimonial.rating % 1 !== 0 && <FaStar className="text-yellow-400 opacity-50" />}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-white relative">
                  <FaQuoteLeft className="text-blue-400 absolute -top-4 left-0 text-2xl" />
                  <p className="ml-6 italic">{testimonial.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
