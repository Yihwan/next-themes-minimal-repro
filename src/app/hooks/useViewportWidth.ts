import { useEffect, useState } from 'react';

export const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);

    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportWidth;
};
