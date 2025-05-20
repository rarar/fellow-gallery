import React, { useState, useEffect, useRef } from 'react';
import './FellowGallery.css';
import StarField from './StarField';
import Letter from './Letter';
import LetterModal from './LetterModal';
import FlightSchoolLogo from './FlightSchoolLogo';
import { lettersData } from './lettersData';

const FellowGallery = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  // Filter items by type
  const filteredLetters = filter === 'all' 
    ? lettersData 
    : lettersData.filter(item => item.type === filter);

  // Handle letter selection
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedLetter(null);
  };

  // Toggle audio playback
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  // Navigation between letters
  const navigateLetters = (direction) => {
    if (!selectedLetter) return;
    
    const currentIndex = filteredLetters.findIndex(letter => letter.id === selectedLetter.id);
    let newIndex;
    
    if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < filteredLetters.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      return;
    }
    
    setSelectedLetter(filteredLetters[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedLetter) {
        if (e.key === 'Escape') {
          handleCloseModal();
        } else if (e.key === 'ArrowLeft') {
          navigateLetters('prev');
        } else if (e.key === 'ArrowRight') {
          navigateLetters('next');
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedLetter, filteredLetters]);

  return (
    <div className="fellow-gallery" ref={containerRef}>
      {/* Flight School Logo */}
      <FlightSchoolLogo />
      
      {/* Starfield background */}
      <StarField />
      
      {/* Gallery header */}
      <div className="title-container">
        <h1>Letters from Love</h1>
        <p className="subtitle">by Flight School Fellows</p>
      </div>
      
      {/* Filter options */}
      <div className="filter-options">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All Letters
        </button>
        <button 
          className={`filter-btn ${filter === 'handwritten' ? 'active' : ''}`} 
          onClick={() => setFilter('handwritten')}
        >
          Handwritten
        </button>
        <button 
          className={`filter-btn ${filter === 'typed' ? 'active' : ''}`} 
          onClick={() => setFilter('typed')}
        >
          Typed
        </button>
      </div>
      
      {/* Gallery grid */}
      <div className="gallery-container">
        <div className="gallery-grid">
          {filteredLetters.map((letter) => (
            <Letter 
              key={letter.id} 
              letter={letter} 
              onClick={() => handleLetterClick(letter)}
            />
          ))}
        </div>
      </div>
      
      {/* Audio control */}
      <button className="audio-control" onClick={toggleAudio}>
        {isAudioPlaying ? (
          <svg className="audio-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        ) : (
          <svg className="mute-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        )}
      </button>
      
      {/* Modal for displaying full letter */}
      {selectedLetter && (
        <LetterModal 
          letter={selectedLetter} 
          onClose={handleCloseModal}
          onPrev={() => navigateLetters('prev')}
          onNext={() => navigateLetters('next')}
          hasPrev={filteredLetters.findIndex(letter => letter.id === selectedLetter.id) > 0}
          hasNext={filteredLetters.findIndex(letter => letter.id === selectedLetter.id) < filteredLetters.length - 1}
        />
      )}
      
      {/* Hidden audio element */}
      <audio ref={audioRef} loop>
        <source src="https://assets.mixkit.co/music/preview/mixkit-calm-piano-background-music-727.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FellowGallery;