import React from 'react'
import './Testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVTR1,
    name: 'Abdul Ahad',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quibusdam necessitatibus! Id culpa aut facilis natus quia exercitationem deserunt tempora?'
  },
  {
    avatar: AVTR2,
    name: 'Ismail Butt',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quibusdam necessitatibus! Id culpa aut facilis natus quia exercitationem deserunt tempora?'
  },
  {
    avatar: AVTR3,
    name: 'Usman Feroze',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quibusdam necessitatibus! Id culpa aut facilis natus quia exercitationem deserunt tempora?'
  },
  {
    avatar: AVTR4,
    name: 'Umer Masood',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quibusdam necessitatibus! Id culpa aut facilis natus quia exercitationem deserunt tempora?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={true}
  
      >
        {data.map((d, index) => {
          return (<SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={d.avatar} alt="AVATAR" />
            </div>
            <h5 className="client__name">{d.name}</h5>
            <small className="client__review">{d.review}</small>
          </SwiperSlide>);
        })}


      </Swiper>
    </section>
  )
}

export default Testimonials