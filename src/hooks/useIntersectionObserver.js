import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (data, isList = true) => {
  const target = useRef(null);
  const [skip, setSkip] = useState(0);
  const [isLast, setIsLast] = useState(false);

  const markAsLast = () => {
    setIsLast(true);
  };

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setSkip((prev) => prev + 6);
    }
  };

  useEffect(() => {
    if (isLast) return;

    const observer = new IntersectionObserver(callback, { threshold: 1 });

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [data, isLast, isList]);

  return {
    target,
    skip,
    markAsLast,
  };
};

export default useIntersectionObserver;
