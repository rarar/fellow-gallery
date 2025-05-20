import React, { useRef, useEffect } from 'react';
import './Letter.css';

const Letter = ({ letter, onClick }) => {
  const letterRef = useRef(null);
  
  // Set different z-positions for each letter to create depth
  useEffect(() => {
    if (letterRef.current) {
      // Assign random z-position for depth effect, but control the range
      const zPosition = Math.random() * 50 - 25; // Between -25 and 25
      letterRef.current.style.transform = `translateZ(${zPosition}px)`;
    }
  }, []);
  
  return (
    <div 
      ref={letterRef}
      className={`letter ${letter.type}`}
      onClick={onClick}
      style={{ backgroundColor: '#FFFDF7' }}
    >
      <p className={`letter-preview ${letter.type}`}>
        {letter.content.split('\n').slice(0, 5).join('\n')}
      </p>
    </div>
  );
};

export default Letter;