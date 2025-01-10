'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', //  défilement fluide
    });
  };


   // Gestionnaire de défilement pour afficher ou masquer le bouton
   useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="absolute bottom-0 right-2">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-600 hover:bg-gray-900 text-white rounded-full p-2 md:p-4 md:text-xl"
        >
          <FaArrowUp  />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton