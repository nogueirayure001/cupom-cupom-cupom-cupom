import { useState, useEffect } from 'react';

function useBackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const checkScrollState = () => {
    setShowButton(window.scrollY > window.innerHeight + 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      checkScrollState();
    });

    return window.removeEventListener('scroll', () => {
      checkScrollState();
    });
  }, []);

  return showButton;
}

export default useBackToTopButton;
