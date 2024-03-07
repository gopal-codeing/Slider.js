import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import hanuman from './hanuman.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Swaper2 from './Swaper2';
import './styles1.css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

  };

  let url = ["https://cdn.zeebiz.com/sites/default/files/2023/11/03/267801-flipkart-diwali-sale.jpg", 
  "https://img.paisawapas.com/ovz3vew9pw/2023/09/25171152/Flipkart-Big-Diwali-Sale.jpg", 
  "https://images.moneycontrol.com/static-mcnews/2020/10/Flipkart.jpg"];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
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

        {
          url.map((imgurl, index) => (
            <SwiperSlide key={index}> <img src={imgurl} width="50%" alt=" " /></SwiperSlide>
          ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>


    </>
  );
}
