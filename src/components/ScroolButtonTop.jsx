import React, { useState, useEffect } from 'react';
import classes from './ScrollToTopButton.module.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
    className={`${classes.scroll_to_top} ${isVisible ? classes.visible : ''}`}
    onClick={scrollToTop}
  >
    ↑
  </button>
  
  );
};

export default ScrollToTopButton;
