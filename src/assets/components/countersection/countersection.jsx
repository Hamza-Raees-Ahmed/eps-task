import React, { useEffect, useState } from 'react'
import "./countersection.css"
import handicon from '/public/images/Vector-2.png'
import profileicon from '/public/images/Black-1.png'
import staricon from '/public/images/Gray.png'


 const Countersection = () => {
    const [count, setCount] = useState(0);
    const targetCount = 500; 
  
    useEffect(() => {
      const increment = () => {
        setCount((prevCount) => {
          if (prevCount < targetCount) {
            return prevCount + 1;
          } else {
            clearInterval(intervalId);
            return prevCount;
          }
        });
      };
  
      const intervalId = setInterval(increment, 1); 
  
 
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  return (
    <>

      <div className='counter-section'>
        <div className='counter-section-left'>
            <img src={handicon} alt="" />
            <h1>{count} </h1>
            <h2>Project Completed</h2>
        </div>
        <div className='counter-section-center'>
            <img src={profileicon} alt="" />
            <h1> {count} </h1>
            <h2> Happy Clients</h2>
        </div>

        <div className='counter-section-right'>
            <img src={staricon} alt="" />
            <h1>{count}</h1>
            <h2>Years In Business</h2>
        </div>
      </div>
    </>
  )
}


export default Countersection