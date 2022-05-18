import React from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide,scrollbar } from 'swiper/react';
import { Scrollbar } from "swiper";

import './Section2.scss';
 
import Icon1 from '../../images/Icone1.png'
import Icon2 from '../../images/Icon2.png'
import Icon3 from '../../images/Icon3.png'

import { StaticImage } from "gatsby-plugin-image"

const Section2 = ()=>{
return(
    <>
    <div className="section-2-container">
    <div className='swiper-container'>
            <div className='title-container'>
            <h1>Crowd Favourites</h1>
            <p>Fun for anyone, loved by everyone</p>
            </div>
      
            <Swiper
               scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      spaceBetween={20}
      slidesOffsetAfter= {110}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
 
    
 
        <SwiperSlide>
        <div>
            <StaticImage src="../../images/Kuala Lumpur@2x.png" />
            <h3>Kuala Lumpur</h3>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div>
            <StaticImage src="../../images/Selangor@2x.png" />
            <h3>Selangor</h3>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div>
        <StaticImage src="../../images/Malacca@2x.png" />
            <h3>Sabah</h3>
        </div>
      </SwiperSlide>
        <SwiperSlide>
        <div>
        <StaticImage src="../../images/Sabah@2x.png" />
            <h3>Melaka</h3>
        </div>
      </SwiperSlide>
 
   
 
  

      </Swiper>

        <div className="sec-2-cards-container">
        <div className="sec-1-cards">
            <div className="text-container">
                      <h2>Enhanced Travel Safety</h2>
                      <img src={Icon1}></img>
            <p>Each of our travel partners are individually screened and handpicked to ensure your experience is as safe and extraordinary as possible.</p>
    
            </div>
          </div>
        <div className="sec-1-cards">
        <div className="text-container">
        <h2>Easy Booking Service</h2>
        <img src={Icon2}></img>
            <p>Say goodbye to complicated reservation processes. Book and customise your travel arrangements with ease, all from a single place.</p>
     </div>
        </div>
        <div className="sec-1-cards">
        <div className="text-container">
        <h2>Mix & Match Experiences</h2>
        <img src={Icon3}></img>
            <p>No more rigid travel plans. Create flexible itineraries and travel on your terms. Choose what and how you want to experience your trip – even if it’s a last-minute getaway.</p>
     </div>
        </div>
        </div>

    </div>
   
    </div>
    </>
)
}

export default Section2;