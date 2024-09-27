import React, { useEffect, useState } from 'react';
import './cardSlider.css';
import cardimage1 from '/public/images/cardiamge1.png'
import cardimage2 from '/public/images/cardiamge2.png'
import cardimage3 from '/public/images/cardiamge3.png'
import cardimage4 from '/public/images/cardiamge4.png'
import cardimage5 from '/public/images/cardiamge5.png' 
import cardimage6 from '/public/images/cardiamge6.png' 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDown } from "react-icons/io";




const CardSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4); 
  useEffect(() => {
    const updateMedia = () => {
        if (window.innerWidth <= 546) {
            setSlidesToShow(1); // Show 1 slide on mobile
        }
        else if(window.innerWidth < 848){
          setSlidesToShow(2); //show 2 slide on tablet

        } else {
            setSlidesToShow(4); // Show 4 slides on larger screens
        }
    };

 
    window.addEventListener('resize', updateMedia); // Update on resize

    return () => window.removeEventListener('resize', updateMedia); // Cleanup
}, []);


const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
};


  const cards = [
    {
      imgSrc: cardimage1,
      title: 'Hospital System',
      description: 'We are the EEFor and call on Engineer  Engineer for HCAi',
      description1: 'Innovating  HCAi d call on Engineer for HCAi.',
    },
    {
      imgSrc: cardimage2,
      title: 'Healthcare Innovations',
      description: 'Innovating  HCAi d call on Engineer for HCAi.',
      description1: 'Innovating  HCAi d call on Engineer for HCAi.',
    },
    {
      imgSrc: cardimage3,
      title: 'Telemedicine Services',
      description: 'Connecting patients and dl on Engineer for HCAimotely.',
      description1: 'Innovating  HCAi d call on Engineer for HCAi.',
    },
    {
      imgSrc: cardimage4,
      title: 'Medical Research',
      description: 'Advancinon Engineer for HCAi d call on Engineer for HCAiative research.',
      description1: 'Innovating  HCAi d call on Engineer for HCAi.',
    },
    {
      imgSrc:cardimage5,
      title: 'Patient Management',
      description: 'Streamlining patient care w We are the EEFor and call on Engineer fo.',
      description1: 'Innovating  HCAi d call on Engineer for HCAi.',
    },
    {
        imgSrc:cardimage6,
        title: 'Patient Management',
        description: 'Streamlining d call on Engineer for HCAi d call on Engineer for HCAi technology.',
        description1: 'Innovating  HCAi d call on Engineer for HCAi.',
      },
  ];



  return (


    <>
    <div className='card-heading'>
        <h1>System We Support</h1>
    </div>
    <div className="card-slider">
      <div className="cards">
       
      <Slider {...settings}>
      {cards.map((card, index) => (
  <div className='card-section' key={index}>
    <img className='card-img' src={card.imgSrc} alt={card.title} />
    <h2>{card.title}</h2>
    <p className='text-para'>{card.description}</p>
    <p className='text-para2'>{card.description1}</p>
    <div className='arrow-icons'>
    <IoIosArrowDown/>
    </div>
  </div>
))}
              </Slider>
             
       
      </div>
      

    </div>
    </>
  );
};

export default CardSlider;
