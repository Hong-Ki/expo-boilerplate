import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface ObserverOptions {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({
  callback,
  options = {},
}: ObserverOptions): [
  IntersectionObserver | null,
  Dispatch<SetStateAction<IntersectionObserver | null>>,
] => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  useEffect(() => {
    setObserver(new IntersectionObserver(callback, options));
    return () => observer?.disconnect();
  }, []);

  return [observer, setObserver];
};

export default useIntersectionObserver;
