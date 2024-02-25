import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  useEffect(() => {
    const typed = new Typed('.text', {
      strings: ["Shikshasaathi "],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy(); // Clean up the Typed instance to avoid memory leaks
    };
  }, []);

  return (
    <span className="text" style={{color:'#006666'}}></span>
  );
};

export default TypedText;
