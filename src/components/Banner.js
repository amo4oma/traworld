import React from "react";
import { useNavigate } from "@reach/router";
import "./Banner.scss";
import banner from "../images/Mask Group 1@2x.png";
 
import SearchIcon from "@mui/icons-material/Search";

const Banner = () => {
  return (
    <div className="banner-container">
      <h1>Finally, it’s time to jalan-jalan</h1>
      <p>Charter your long-awaited adventure at exclusive prices</p>
      <div className="seacrh-contaoner">
        <input
          className="search"
          name="Search"
          placeholder="Search"
          width={500}
          height={50}
        ></input>
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Banner;
