import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Update the state with the current value
    setMatches(media.matches);
    
    // Create a listener function
    const listener = () => setMatches(media.matches);
    
    // Add the listener to track changes
    media.addEventListener('change', listener);
    
    // Remove the listener on cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);
  
  return matches;
}

export function useIsMobile() {
  // Using standard mobile breakpoint of 768px
  return useMediaQuery('(max-width: 768px)');
}