import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import SearchIcon from "@mui/icons-material/Search";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, scrollbar } from "swiper/react";
import { Scrollbar } from "swiper";
import "./Section4.scss";
import data from "../../data/data.json";
import Extend from "./Extend"

const Section1 = () => {
  const [showResults, setShowResults] = React.useState(false)
  const [hideButton, sethideButton] = React.useState(true)
  const onClick = () =>{
    !setShowResults(true) ?  setShowResults(true) : setShowResults(false)
    sethideButton(false)
  } 
  return (
    <>
      <div className="swiper-container">
        <div className="title-container">
          <h1>Get Inspired</h1>
          <p>Explore your next Traworld destination</p>
        </div>

        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
          spaceBetween={20}
          slidesOffsetAfter={110}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data &&
            data.map((Data) => {
              return (
                <SwiperSlide>
                  <Card
                    name={Data.name}
                    location={Data.location}
                    rating={Data.rating}
                    reviews={Data.reviews}
                    before={Data.before}
                    after={Data.before}
                    duration={Data.duration}
                    Pax={Data.Pax}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="swiper-container">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
          spaceBetween={20}
          slidesOffsetAfter={110}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data &&
            data.map((Data) => {
              return (
                <SwiperSlide>
                  <Card
                    name={Data.name}
                    location={Data.location}
                    rating={Data.rating}
                    reviews={Data.reviews}
                    before={Data.before}
                    after={Data.before}
                    duration={Data.duration}
                    Pax={Data.Pax}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      {
        hideButton ? <div className="expand-button"><button onClick={onClick}> View More</button></div> : null
      }
            
            {
              showResults ? <Extend  /> : null
            }
     
 
    </>
  );
};

export default Section1;
