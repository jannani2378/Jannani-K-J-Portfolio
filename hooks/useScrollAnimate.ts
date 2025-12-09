
import { useEffect, useRef, useCallback } from 'react';

const useScrollAnimate = () => {
  const elementRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    const element = elementRef.current;
    if (element) {
      const { top } = element.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100; // Trigger when 100px of the element is visible
      if (isVisible) {
        element.classList.add('visible');
        window.removeEventListener('scroll', handleScroll); // Remove listener after animation
      }
    }
  }, []);

  useEffect(() => {
    // Initial check in case the element is already in view
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return elementRef;
};

export default useScrollAnimate;
