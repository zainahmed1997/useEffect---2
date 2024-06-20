import React, { useState, useEffect } from 'react';

const Clock = () => {
 
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString());
    };

    
    const intervalId = setInterval(updateClock, 1000);

   
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <h2>{time}</h2>
  );
};

export default Clock











