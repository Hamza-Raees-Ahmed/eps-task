import React, { useState, useEffect } from "react";
import "./imageslider.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import arrow1 from '/public/images/arrow-1.png'
import arrow2 from '/public/images/arrow-2.png'
import CardSlider from "../cardslider/cardslider";
import CenterMode from "../cardslider/cardslider";
const ImageSlider = () => {
  const images = [
    "https://www.epsfresno.com/wp-content/uploads/2024/06/EPS-Website-Hero-Picture-6.webp",
    "https://www.epsfresno.com/wp-content/uploads/2024/06/EPS-Website-Hero-Picture-12.webp",
    "https://www.epsfresno.com/wp-content/uploads/2024/06/EPS-Website-Hero-Picture-14.webp",
    "https://www.epsfresno.com/wp-content/uploads/2024/06/EPS-Website-Hero-Picture-8.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="Home-text-section">
        <div className="heading-text">
          <h1>
            ELECTRICAL <br />
            POWER SYSTEM, <span>INC</span>
          </h1>

          <div className="paragraph-text">
            <h3>
              EPS is committed to serving our clients by providing the best
              electrical and
               process control solutions for current needs and future
              demands
            </h3>
          </div>
          </div>
          </div>
          {/* text section */}
          <div className="home-section-btns">
            <div className="btn-1">
              <button>CONTACT US</button>
             <img src={arrow1} alt="" />
            </div>

            <div  className="btn-2">
              <button>LEARN ABOUT US</button>
             <img src={arrow2} alt="" />
            </div>
          </div>
       <div>
        <CardSlider/>
       </div>
        
       













    </div>
  );
};

export default ImageSlider;
