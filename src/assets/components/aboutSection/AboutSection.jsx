import React, { useState } from "react";
import "./AboutSection.css";
import dotsImg from "/public/images/dots.png";
import aboutImg from "/public/images/about-img.jpg";
import ieeeImg from "/public/images/ieee.png";
import ncessImg from "/public/images/ncees.png";
import { RxCross1 } from "react-icons/rx";

import vedio from "/public/vedios/EPS-office-intro.mp4";
import { BiSolidRightArrow } from "react-icons/bi";

const AboutSection = () => {


    const [isPlaying, setIsPlaying] = useState(false); // State to manage video visibility

    const handlePlayVideo = () => {
      setIsPlaying(true);
    };
  
    const handleCloseVideo = () => {
      setIsPlaying(false);
    };
  return (
    <>
      <>
      <div className="about-section">
        <div className="left-dots-img">
          <img className="dits-img" src={dotsImg} alt="" />
        </div>
        <div className="about-section-center">
          <div className="about-left-img">
            <div className="image-container">
              <img src={aboutImg} alt="" className="about-image" />
              <div className="arrow-icon" onClick={handlePlayVideo}>
                <BiSolidRightArrow size={30} color="white" />
              </div>
            </div>
            <div className="about-text-section">
              <h1>About Us</h1>
              <p>
                Exploring new places broadens your horizons and enriches your experiences. Each destination offers unique cultures, flavors, and adventures. Pack your bags, embark on a journey, and create unforgettable memories. <br />
                Prioritizing your health is essential for a fulfilling life.
              </p>
              <div className="socail-imgs">
                <img src={ieeeImg} alt="" />
                <img src={ncessImg} alt="" />
              </div>
              <div className="btn">
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Overlay */}
      {isPlaying && (
        <div className="video-overlay">
          <div className="video-modal">
            <button className="close-button" onClick={handleCloseVideo}>
            <RxCross1 size={20} />

                </button>
            <video className="video-player" controls autoPlay>
              <source src={vedio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
    </>
  );
};
export default AboutSection;
