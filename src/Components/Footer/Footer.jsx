import React, { use } from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Half Human, Half Debugging Machine <br></br> | Chanting in Code | Manifesting
            in Logic.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          ©️2025 Abhishek Kunwar. All rights reserved.
        </div>
        <footer className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
