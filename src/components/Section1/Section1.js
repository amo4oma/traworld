import React from 'react';
 
import Card from '../Card';
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide,scrollbar } from 'swiper/react';
import { Scrollbar } from "swiper";
import './Section1.scss';
import data from '../../data/data.json'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Section1 = () =>{
    return (
        <>
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
    {
        data && data.map(Data => {
            return(
        <SwiperSlide>
          <Card name={Data.name} 
              location={Data.location}
              rating={Data.rating}
              reviews={Data.reviews}
              before={Data.before}
              after={Data.before}
              duration={Data.duration} 
              Pax={Data.Pax}
              discount={Data.discount}
          />
      </SwiperSlide>
            )
        })
    }
  
    <div className='arrow'>
       <ArrowBackOutlinedIcon className='prev' />
    <ArrowForwardOutlinedIcon className='next' />
  </div>
      </Swiper>

            </div>
            <div className='swiper-container'>
            <div className='title-container'>
            <h1>Fun In The Sun</h1>
            <p>Beach activities with a postcard perfect view</p>
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
    {
        data && data.map(Data => {
            return(
        <SwiperSlide>
          <Card name={Data.name} 
              location={Data.location}
              rating={Data.rating}
              reviews={Data.reviews}
              before={Data.before}
              after={Data.before}
              duration={Data.duration} 
              Pax={Data.Pax}
              discount={Data.discount}
          />
      </SwiperSlide>
            )
        })
    }
  
    <div className='arrow'>
    <ArrowBackOutlinedIcon className='prev' />
    <ArrowForwardOutlinedIcon className='next' />
  </div>
      </Swiper>

            </div>
            <div className='swiper-container'>
            <div className='title-container'>
            <h1>Away From The City</h1>
            <p>Relax in the arms of Mother Nature</p>
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
    {
        data && data.map(Data => {
            return(
        <SwiperSlide>
          <Card name={Data.name} 
              location={Data.location}
              rating={Data.rating}
              reviews={Data.reviews}
              before={Data.before}
              after={Data.before}
              duration={Data.duration} 
              Pax={Data.Pax}
              discount={Data.discount}
          />
      </SwiperSlide>
            )
        })
    }
  
    <div className='arrow'>
    <ArrowBackOutlinedIcon className='prev' />
    <ArrowForwardOutlinedIcon className='next' />
  </div>
      </Swiper>

            </div>
            <div className='swiper-container'>
            <div className='title-container'>
            <h1>Reserve A Spectacular Night Out</h1>
            <p>Handpicked activities and destinations near you</p>
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
    {
        data && data.map(Data => {
            return(
        <SwiperSlide>
          <Card name={Data.name} 
              location={Data.location}
              rating={Data.rating}
              reviews={Data.reviews}
              before={Data.before}
              duration={Data.duration} 
              after={Data.before}
              Pax={Data.Pax}
              discount={Data.discount}
          />
      </SwiperSlide>
            )
        })
    }
  <div className='arrow'>
  <ArrowBackOutlinedIcon className='prev' />
    <ArrowForwardOutlinedIcon className='next' />
  </div>
 
      </Swiper>

            </div>
        </>
    )
}

export default Section1;