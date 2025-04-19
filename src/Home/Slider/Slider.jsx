import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import'./slider.css'

import Robot1 from '../Slider/Robots/Robot1.jpg'
import Robot2 from '../Slider/Robots/Robot2.jpg'
import Robot3 from '../Slider/Robots/Robot3.jpg'
import Robot4 from '../Slider/Robots/Robot4.jpg'
import Robot5 from '../Slider/Robots/Robot5.jpg'
import Robot6 from '../Slider/Robots/Robot6.jpg'

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    const images = [
        {
          id: 1,
          url: Robot1
        },
        {
          id: 2,
          url: Robot2
        },
        {
          id: 3,
          url: Robot3
        },
        {
          id: 4,
          url: Robot4
        },
        {
          id: 5,
          url: Robot5
        },
        {
          id: 6,
          url: Robot6
        },
        
      ];
  return (
    <>
    <Swiper
      slidesPerView={4.1}
      spaceBetween={0}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((image) => {
        return (
            <div className="img-container">
                <SwiperSlide><img
                    className="image"
                    alt="sliderImage"
                    key={image?.id}
                    src={image?.url}/>
                </SwiperSlide>
            </div>

        );
      })}
      

    </Swiper>
    </>
  )
}

export default Slider