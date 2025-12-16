import "./Footer.css";
import GalleryOne from "../../assets/images/galleryone.svg?react";
import GalleryTwo from "../../assets/images/gallerytwo.svg?react";
import GalleryThree from "../../assets/images/gallerythree.svg?react";
import GalleryFour from "../../assets/images/galleryfour.svg?react";
import GalleryFive from "../../assets/images/galleryfive.svg?react";
import GallerySix from "../../assets/images/gallerysix.svg?react";
import FooterLogo from "../../assets/icons/footerlogo.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import Pinterest from "../../assets/icons/pinterest.svg?react";
import Twitter from "../../assets/icons/twitter.svg?react";
import Forward from "../../assets/icons/forward.svg?react";
import Location from "../../assets/icons/location.svg?react";
import Phone from "../../assets/icons/phone.svg?react";
import Mail from "../../assets/icons/mail.svg?react";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerBody">
        <div className="contactInfo">
          <div className="contactBody">
            <div className="icon">
              <Location />
            </div>
            <div className="contact">
              <p className="contactTitle"> address</p>
              <p className="contactText">1925 Boggess Street</p>
            </div>
          </div>
          <hr />
          <div className="contactBody">
            <div className="icon">
              <Phone />
            </div>
            <div className="contact">
              <p className="contactTitle"> phone</p>
              <p className="contactText">(00) 875 784 568</p>
            </div>
          </div>
          <hr />
          <div className="contactBody">
            <div className="icon">
              <Mail />
            </div>
            <div className="contact">
              <p className="contactTitle"> email</p>
              <p className="contactText">info@gmail.com</p>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="footerTextContainer">
          <div className="footerTextSec">
            <div className="footerTitle">
              <FooterLogo />
            </div>
            <p>
              Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
              tortor aliqua mfacilisi cras fermentum odio eu.
            </p>
            <div className="footerSocials">
              <div className="social">
                <Facebook />
              </div>
              <div className="social">
                <Instagram />
              </div>
              <div className="social">
                <Pinterest />
              </div>
              <div className="social">
                <Twitter />
              </div>
            </div>
          </div>
          <div className="serviceSec">
            <div className="footerTitle">
              <h4>our services</h4>
            </div>
            <div className="serviceBody">
              <ul>
                <li>
                  <Forward />
                  web development
                </li>
                <li>
                  {" "}
                  <Forward />
                  UI/UX design
                </li>
                <li>
                  <Forward />
                  management
                </li>
                <li>
                  {" "}
                  <Forward />
                  digital marketing
                </li>
                <li>
                  {" "}
                  <Forward />
                  blog news
                </li>
              </ul>
            </div>
          </div>
          <div className="gallerySec">
            <div className="footerTitle">
              <h4>gallery</h4>
            </div>
            <div className="galleryImage">
              <GalleryOne />
              <GalleryTwo />
              <GalleryThree />
              <GalleryFour />
              <GalleryFive />
              <GallerySix />
            </div>
          </div>
          <div className="subscribeSec">
            <div className="footerTitle">
              <h4>subscribe</h4>
              <div className="inputSec">
                <input
                  type="Email"
                  placeholder="Enter your email"
                  className="emailInput"
                />
                <input
                  type="button"
                  value=" subscribe now"
                  className="subscribeButton"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p>
        Copyright © 2024 <span className="copyrightText">edunity</span> || All Rights Reserved
        </p>
      </div>
    </div>
  );
}
