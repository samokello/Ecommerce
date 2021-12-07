import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <div className="footer-Container">
        <div className="my-footer-logo">
          <h1>Magoso Enterprises</h1>

          <p>
            Buy the best from the best.We bring you quality products and
            remarkable customers experiences.We value you
          </p>

          <div className="footer-icons">
            <div className="facebook">
              <a href="http://facebook.com" target="_blank">
                <FacebookOutlinedIcon />
              </a>
            </div>

            <div className="instagram">
              <InstagramIcon />
            </div>

            <div className="pinterest">
              <PinterestIcon />
            </div>

            <div className="twiter">
              <TwitterIcon />
            </div>
          </div>
        </div>



             <div className="li-2">
            <ul>
              <h1>Useful Links</h1>

              <li>Home</li>
              <li>Man Fashion</li>
              <li>Accessories</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
            </ul>
          </div>

          <div className="li-2 flex-li">
            <ul className=" flex-li">
              <li>Categories</li>
              <li>Women Fashion</li>
              <li>Accessories</li>
              <li>My Account</li>
              <li>Terms</li>
            </ul>
      
          </div>



          <div className="footer-terms">
            <h1>Contact</h1>

            <div className="great-container">
              <LocationOnIcon />
              <p className="great-street">Great Street,Lavington,Nairobi.Ke.</p>
            </div>

            <div>
              <AddIcCallIcon />

              <p>+254123456789</p>
            </div>

            <div>
              <EmailIcon />
              <p>Order@magoso.com</p>
            </div>

            <div className="payments">
              <div className="visa-svg">
                <img src="/Images/visa.svg" />
              </div>

              <div className="m-pesa-svg">
                <img src="/Images/m-pesa.png" />
              </div>

              <div className="master-card">
                <img src="/Images/master-card.svg" />
              </div>
            </div>
          </div>
            </div>

      <div className="copyright-container">
        <p>Magoso Enterprise &copy; 2021 -All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
