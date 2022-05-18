import React from "react";
 
import BoltIcon from "@mui/icons-material/Bolt";
import "./Card.scss";
import CardImage from "../images/Path 129@2x.png";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
 

const Card = (props) => {
  return (
    <>
      <div className="card-container">
      {
        props.discount ?  <div className="discount"> <h6>{props.discount}</h6> </div> : null
      }
     
        <div className="flag">
          <BookmarkBorderIcon className="bookmark" />
        </div>
        <img src={CardImage}></img>
        <div>
          <div className="card-body">
            <span className="location">
              <LocationOnIcon fontSize="small" />
              {props.location}
            </span>
            <p className="name">{props.name}</p>
            <div className="rating-container">
              <div className="rating-burble">
                <span className="rating">{props.rating} </span>
                <StarIcon className="starIcon" />
              </div>

              <p className="reviews">({props.reviews})</p>
            </div>
            <div className="icons">
              <BoltIcon className="blotIcon" />
              {
                  props.duration ?    <span className="duration"><AccessTimeFilledRoundedIcon />{props.duration}</span> : null
              }
                {
                        props.Pax ? <span className="pax"><PeopleAltIcon />Max 8</span> : null
                }
            
              <div>
               
              </div>
            </div>
            <div className="price-container">
              <p className="before-dis">{props.before}</p>
              <p className="after-dis"> From {props.after}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
