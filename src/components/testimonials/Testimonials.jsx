import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/avatar1.1.jpeg'
import AV2 from '../../assets/avatar2.1.jpeg'
import AV3 from '../../assets/avatar3.1.jpeg'
import AV4 from '../../assets/avatar4.1.jpeg'
import AV5 from '../../assets/avatar5.1.jpeg'
import AV6 from  '../../assets/avatar6.1.jpeg'
import AV7 from '../../assets/avatar7.1.jpeg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Clients We Have Worked With</h2>

      <Swiper className="testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV1} alt="1" />
            </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV2} alt="2" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV3} alt="3" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV4} alt="4" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV5} alt="5" />
          </div>
          <h5 className='client__name'>Ousman Sayeed Jarju</h5>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV6} alt="6" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AV7} alt="7" />
          </div>
        </SwiperSlide>
        
      </Swiper>

      

    </section>
  )
}

export default Testimonials