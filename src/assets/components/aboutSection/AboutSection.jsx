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
              Electrical Power Systems, Inc. (EPS), is a premier electrical engineering & consulting firm, serving Western United States and California for over 50+ years. We are really good at what we do offering electrical engineering design and construction management services to facility owners, managers, builders, contractors, municipalities, government agencies, A/E firms, and other engineering companies
              </p>
              <div className="socail-imgs">
              <img src={ncessImg} alt="" />
                <img src={ieeeImg} alt="" />
              
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
            </video>
          </div>
        </div>
      )}
    </>
    </>
  );
};
export default AboutSection;
