import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="md:h-[600px] h-64">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          // delay: 2500,
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://sportstaracademy.com/media/1342/16442_ssa_school_grants_website_banner_v2.jpg?anchor=center&height=500&quality=90"
            alt=""
          />
          <h1 className="absolute p-3 md:text-2xl bg-white -mt-20 md:-mt-56 md:p-6 rounded-full ">
            Power Play Academy
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.thesportsgurukul.com/assets/images/slider-show/2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/zVqQCps/Screenshot-2023-06-15-214546.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/6mP2fcP/Screenshot-2023-06-15-214608.png"
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
