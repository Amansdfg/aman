import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0); 
  const phrases = ['Backend Developer', 'Frontend Developer', 'Fullstack Developer'];

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];
    if (isTyping) {
      if (index < currentPhrase.length) {
        timer = setTimeout(() => {
          setText((prev) => prev + currentPhrase.charAt(index));
          setIndex(index + 1);
        }, 150);
      } else {        
        if (phraseIndex < phrases.length - 1) {
          timer = setTimeout(() => setIsTyping(false), 1000);
        }
      }
    } else {      
      if (index > 0) {
        timer = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, 100);
      } else {        
        setIsTyping(true);
        setPhraseIndex(phraseIndex + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [index, isTyping, phraseIndex, phrases]);

  return (
    <div style={{ fontSize: '24px', fontFamily: 'monospace' }}>
      {text}
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
