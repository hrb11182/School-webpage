import React from 'react'
import './slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

//Image Width: 484px; Image Height: 662px actual size of the card.


import img1 from './images/teacher-1.jpg';
import img4 from './images/teacher4.jpg';
import img5 from './images/teacher5.jpg';
import img6 from './images/teacher6.jpg';
import img7 from './images/teacher7.jpg';
import img8 from './images/teacher8.jpg';
import img9 from './images/teacher9.jpg';
import img10 from './images/teacher2.jpg';
import img11 from './images/teacher10.jpg';
//import img12 from './images/teacher12.jpg';

const Slider = () => {
  return (
    <div className='main-container'>
      <Swiper
        autoplay={{
          delay:2000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          draggable:true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation, Autoplay]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="Teachers" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="Teachers" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider;