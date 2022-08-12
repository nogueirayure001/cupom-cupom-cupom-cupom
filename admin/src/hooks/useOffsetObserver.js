import { useState, useEffect } from 'react';

import { useWidthObserver } from './index';

function useOffsetObserver(element) {
  const [offset, setOffset] = useState(0);
  const width = useWidthObserver();

  useEffect(() => {
    const marginLeft = element?.getBoundingClientRect().x;

    if (marginLeft > 0) setOffset(marginLeft);
  }, [width, element]);

  return offset;
}

export default useOffsetObserver;
