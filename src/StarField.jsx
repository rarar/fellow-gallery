import React, { useEffect, useRef } from 'react';
import './StarField.css';

const StarField = () => {
  const starsContainerRef = useRef(null);
  
  useEffect(() => {
    const container = starsContainerRef.current;
    
    // Create stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random positioning
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const z = Math.random() * 200 - 100; // Between -100 and 100
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.transform = `translateZ(${z}px)`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(star);
    }
    
    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return <div className="stars-container" ref={starsContainerRef}></div>;
};

export default StarField;