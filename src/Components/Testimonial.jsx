import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";


import "../App.css"; // Assuming you have some global styles


const testimonials = [
  {
    name: 'Aditya Kumar',
    role: 'Owner of Aburaya Fried Chicken',
    quote:
      '“The best part is your customer service. It’s so quick and friendly; it just made my life easier. If somebody asks me, I recommend Owner.”',
    image: '/aditya.jpeg',
    sales: '+$300,000',
    savings: '$100,000',
  },
  {
    name: 'Rajneet Kumar',
    role: 'Founder of Bihar Eats',
    quote:
      '“This platform boosted our outreach and streamlined our delivery channels in the best possible way!”',
    image: '/aditya.jpeg',
    sales: '+$200,000',
    savings: '$80,000',
  },
  {
    name: 'Rajneet Kumar',
    role: 'Founder of Bihar Eats',
    quote:
      '“This platform boosted our outreach and streamlined our delivery channels in the best possible way!”',
    image: '/aditya.jpeg',
    sales: '+$200,000',
    savings: '$80,000',
  },
  {
    name: 'Rajneet Kumar',
    role: 'Founder of Bihar Eats',
    quote:
      '“This platform boosted our outreach and streamlined our delivery channels in the best possible way!”',
    image: '/aditya.jpeg',
    sales: '+$200,000',
    savings: '$80,000',
  },

  {
    name: 'Rajneet Kumar',
    role: 'Founder of Bihar Eats',
    quote:
      '“This platform boosted our outreach and streamlined our delivery channels in the best possible way!”',
    image: '/aditya.jpeg',
    sales: '+$200,000',
    savings: '$80,000',
  },
];



const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-gray-100
     py-16 relative overflow-x-hidden">
      <Swiper
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides
        spaceBetween={30}
        
        slidesPerView={1.5}
        className="w-screen px-4"
        speed={500}
        breakpoints={{
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 1.5 },
        }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide
            key={i}
            className={`transition-opacity duration-500 ${
              i === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <div
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col md:flex-row w-full"
            >
              {/* Image Section */}
              <div className="relative w-[400px] h-[400px] ">
                <div className="relative h-[400px] w-[400px]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-[450px] w-[400px] object-cover rounded-3xl"
                  />
                  <div className=" h-[450px] w-[400px] rounded-3xl absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-300">{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
                  {t.quote}
                </p>
                <div className="flex flex-wrap items-center gap-8 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-black">{t.sales}</div>
                    <div className="text-sm text-gray-500">Online sales</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">{t.savings}</div>
                    <div className="text-sm text-gray-500">Delivery fees saved</div>
                  </div>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-5 py-3 rounded-xl text-sm w-fit transition">
                  See {t.name.split(' ')[0]}'s story →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;


