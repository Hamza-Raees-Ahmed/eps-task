import React, { useEffect, useState } from 'react'
import "./countersection.css"
import handicon from '/public/images/Vector-2.png'
import profileicon from '/public/images/Black-1.png'
import staricon from '/public/images/Gray.png'


const Countersection = () => {
  const targets = [589, 200, 50]; // Target counts for each section
  const [counts, setCounts] = useState([0, 0, 0]); // Initial counts for each section

  useEffect(() => {
    const intervals = targets.map((target, index) => {
      const increment = () => {
        setCounts((prevCounts) => {
          if (prevCounts[index] < target) {
            return prevCounts.map((count, i) => (i === index ? count + 1 : count));
          } else {
            clearInterval(intervals[index]);
            return prevCounts;
          }
        });
      };
      
      return setInterval(increment, 10); 
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval)); // Clear all intervals on unmount
    };
  }, []);

  return (
    <div className='counter-section'>
      <div className='inner-connent'>
      <div className='counter-section-left'>
        <img src={handicon} alt="" />
        <h1>{counts[0]}</h1>
        <h2>Project Completed</h2>
      </div>
      <div className='counter-section-center'>
        <img src={profileicon} alt="" />
        <h1>{counts[1]}</h1>
        <h2>Happy Clients</h2>
      </div>
      <div className='counter-section-right'>
        <img src={staricon} alt="" />
        <h1>{counts[2]}</h1>
        <h2>Years In Business</h2>
      </div>
      </div>
    </div>
  );
};

export default Countersection