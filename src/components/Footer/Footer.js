import React from "react";
import "./Footer.scss"
import iata from "../../images/iata.png";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import NearMeIcon from '@mui/icons-material/NearMe';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

 
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="top-container">
          <div className="text">
              <h6>Subscribe to our newsletter for the latest promotions!</h6>
              <p>By clicking ‘Subscribe’, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>.</p>
          </div>
          <div className="subscribe-cont">
          <input className="subscribe-bar" placeholder="Enter your email address" />
          <button className="submit">Subscribe</button>
          </div>
      
        
        </div>
        <hr style={{color:"#BFBFBF", height:"0.3px", width:"100%", marginBottom:"40px", border:"none"}}/> 
        <div className="table">
<table class="tg">
<thead>
  <tr>
    <th class="tb-header">About Traworld</th>
    <th class="tb-header">Partnership</th>
    <th class="tb-header">Legal</th>
    <th class="tb-header">Contact Information</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tb-content">About Us</td>
    <td class="tb-content">Be Our Partner Today!</td>
    <td class="tb-content">Terms of Service</td>
    <td class="tb-content">Traworld Tour Sdn Bhd(KPK/LN:10199)</td>
  </tr>
  <tr>
    <td class="tb-content">Contact Us</td>
    <td class="tb-content">Merchant Login</td>
    <td class="tb-content">Privacy Policy</td>
    <td class="tb-content"><LocalPhoneIcon className="footer-icon" />+603-27710392</td>
  </tr>
  <tr>
    <td class="tb-content">FAQs</td>
    <td class="tb-content">Careers</td>
    <td class="tb-content">Cancellations &amp; Refund Policy</td>
    <td class="tb-content"><PhoneAndroidIcon className="footer-icon"/>+6012-2287615</td>
  </tr>
  <tr>
    <td class="tb-content">Traworld Blog</td>
    <td class="tb-content"></td>
    <td class="tb-content"></td>
    <td class="tb-content"><EmailIcon className="footer-icon"/>support@traworld.com</td>
  </tr>
  <tr>
    <td class="tb-content">Traworld Points Redemption</td>
    <td class="tb-content"></td>
    <td class="tb-content"></td>
    <td class="tb-content"><NearMeIcon className="footer-icon"/> Unit 3A-2, Level 3A, UOA CorporateTower, Bangsar South City, No 8, Jalan Kerinchi, 59200 Kuala Lumpur.</td>
  </tr>
  <tr>
    <td><img src={iata}></img></td>
    <td class="tb-content"></td>
    <td class="tb-content"></td>
  </tr>
  <tr>
  <td class="tb-content"></td>
    <td class="tb-content"></td>
    <td class="tb-content"></td>
    <td class="tb-content"></td>
  </tr>
  <tr>
  <td class="tb-content"></td>
    <td class="tb-content"></td>
    <td class="tb-content"></td>
    <td class="tb-content"> <FacebookIcon /> <LinkedInIcon /></td>
  </tr>
</tbody>
</table>
        </div>
      </div>
    </>
  );
};

export default Footer;
