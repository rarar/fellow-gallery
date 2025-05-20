import React from 'react';
import './LetterModal.css';

const LetterModal = ({ letter, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  // Get the first line as the title
  const title = letter.content.split('\n')[0];
  
  // Prevent propagation to avoid closing when clicking the modal content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  
  return (
    <div className="letter-modal-overlay" onClick={onClose}>
      <div className="letter-modal-content" onClick={handleContentClick}>
        <div className="letter-modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="letter-modal-body">
          <div className={letter.type} style={{ whiteSpace: 'pre-line' }}>
            {letter.content}
          </div>
        </div>
        <div className="letter-modal-nav">
          <button 
            className="nav-btn" 
            onClick={onPrev} 
            disabled={!hasPrev}
            style={{ opacity: hasPrev ? '1' : '0.3' }}
          >
            ←
          </button>
          <button 
            className="nav-btn" 
            onClick={onNext}
            disabled={!hasNext}
            style={{ opacity: hasNext ? '1' : '0.3' }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;