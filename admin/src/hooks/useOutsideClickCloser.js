import { useEffect } from 'react';

function useOutsideClickCloser(elRef, setterFunction) {
  const closerFunction = (e) => {
    if (!elRef) return;

    const element = elRef.current;

    if (!element.contains(e.target)) {
      setterFunction(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', (e) => closerFunction(e));

    return window.removeEventListener('click', (e) => closerFunction(e));
  }, []);
}

export default useOutsideClickCloser;
