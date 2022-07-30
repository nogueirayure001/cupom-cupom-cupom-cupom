import { useEffect, useState } from 'react';

function useWidthObserver() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return window.removeEventListener('resize', () =>
      setWidth(window.innerWidth)
    );
  });

  return width;
}

export default useWidthObserver;
