import React from "react";
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

const Extend = ()=>{
    return(
        <>
                  <div className="swiper-container">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
          spaceBetween={120}
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
          spaceBetween={120}
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
                    duration={Data.duration}
                    after={Data.before}
                    Pax={Data.Pax}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>  
        </>

    )
}

export default Extend;