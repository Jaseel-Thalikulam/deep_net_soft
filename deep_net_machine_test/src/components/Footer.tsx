import React from "react";
import "../styles/footer.css";
import telephone from "../assets/telephone.svg";
import mail from "../assets/mail.svg";
import socialmedia from "../assets/socialmedia.svg";
import location from "../assets/location.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sub--footer--one">
          <div className="footer--child">
            <h4 className="footer--child--title">CONNECT WITH US</h4>
            <div className="footer--info--wrap">
              <img src={telephone} />
              <p className="footer--info">+1 470-788-8255</p>
            </div>
            <div className="footer--info--wrap">
              <img src={mail} />
              <p className="footer--info">email@42barandgrill.com</p>
            </div>
          </div>

          <div className="footer--child">
            <img src={logo} className="footer--logo"/>
            <h4 className="footer--child--logo">
              <span className="logo--primary">DEEP</span>
              <span className="logo--secondary"> NET</span>
              <span className="logo--gray"> SOFT</span>
            </h4>
            <div className="footer--info--wrap">
              <img src={socialmedia} />
            </div>
          </div>

          <div className="footer--child">
            <h4 className="footer--child--title">FIND US</h4>
            <div className="footer--info--wrap">
              <img src={location} />
              <p className="footer--info">
                327 Memorial Dr SE, Atlanta, GA 30312, USA
              </p>
            </div>
          </div>
        </div>
        <div className="sub--footer--two">
          <div className="copyright">
            <a>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</a>
          </div>
          <div>
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
