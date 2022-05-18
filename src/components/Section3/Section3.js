import React from "react";
import "./Section3.scss";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Egeal from "../../images/eagel.png";
import bridge from "../../images/bridg.png";
import Egeal2 from "../../images/second-eagel.png";

const Section3 = () => {
  return (
    <>
      <div className="Section-3-container">
        <div className="sec-3-text">
          <div></div>
          <h1>Built By Travellers, For Travellers</h1>
          <p>
            Traworld was built by like-minded travel enthusiasts who know all
            too well how hard it is to plan, discover and book activities for a
            dream getaway. Which is why Traworld was purposefully designed to
            make your travel planning infinitely easier. From easy booking
            processes and flexible planning, to extensive lists of extraordinary
            activities and attractions, every aspect of Traworld was made for
            one reason – to help Traworldlers like you experience a
            postcard-perfect holiday without any headaches.
          </p>
        </div>
        <div className="sec-3-card">
          <div className="first-col">
            <h1>Explore The Traworld Blog</h1>
            <p>Exclusive travel tips, ideas and guides</p>
            <a>
              Read More <ArrowForwardRoundedIcon />
            </a>
          </div>
          <div className="second-col">
            <div className="second-col-mask">
              <div className="eagle-text">
                <h6>
                  A Perfect 3 Days 2 Nights Itinerary for Your Langkawi Trip
                </h6>
                <p>22 Sep 2021</p>
              </div>
            </div>
          </div>
          <div className="third-col">
            <div className="third-col-first-image">
              <div className="third-col-text-1">
                <div className="col-3-text">
                  <h6>
                    13 Hidden Gems in Langkawi (2021): Things to Do, Eat …
                  </h6>
                  <p>17 Sep 2021</p>
                </div>
              </div>
            </div>{" "}
            <div className="third-col-second-image">
              <div className="third-col-text-2">
                {" "}
                <div className="col-3-text">
                  <h6>(UPDATED) The Langkawi Travel Bubble: An UPDATE …</h6>
                  <p>14 Sep 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
