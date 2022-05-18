import React from "react";
 

import logo from "../assests/Traworld_Logo@2x.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="navigation-container">
        <div className="burble-nav">
          <h3>Good Afternoon, Traworlder</h3>
          <h3>Subang Jaya, Malaysia</h3>
          <h3>Sunny, 32.0°C</h3>
        </div>
        <div className="header">
          <div className="container">
            <nav>
            <div className="f"> 
             <a href="#" className="logo">
                <img src={logo} alt="" />
              </a>
              <div className="banner-search">
                <input
                  className="nav-search"
                  name="Search"
                  placeholder="Start your search"
                ></input>
                <div className="banner-search-icon">
                  <SearchIcon  className="search-icon"/>
                </div>
              </div></div>
            
              <ul>
                <li className="nav-container">
                  <a href="#" className="dropdown">
                    Attractions
                  </a>
                </li>

                <li className="nav-container">
                  <a href="#" className="dropdown">
                    Tours
                  </a>
                </li>
                <li className="nav-container">
                  <a href="#" className="dropdown">
                    Activities
                  </a>
                </li>
                <li className="nav-container">
                  <a href="#" className="dropdown">
                    Workshops
                  </a>
                </li>
                <li className="nav-container">
                  <a href="#" className="dropdown">
                    Kidzone
                  </a>
                </li>
                <li className="nav-container">
                  <a href="#" className="dropdown">
                    Blog
                  </a>
                </li>
                <li className="nav-container">
                  <a href="#" className="dropdown cart">
                    <ShoppingCartOutlinedIcon className="cart-icon" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
