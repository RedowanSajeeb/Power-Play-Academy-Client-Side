
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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
            src="https://kaptivasportsacademy.com/wp-content/uploads/2022/09/MicrosoftTeams-image-6-1024x576.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5a5da7c74bce1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczcByReSmKNPSW2RkhyOpLuf5JRvwapoNV0_YPqyGdjwoP7CK1kqjCygQ7gLsKyCIjjg&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thebridge.in/h-upload/2021/04/19/3167-untitled-1.webp"
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
    </>
  );
};

export default Slider;
