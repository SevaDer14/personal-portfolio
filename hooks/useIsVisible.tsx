import { useEffect, useState } from "react";
import { useIsClient } from "./useIsClient";

const useIsVisible = (element: HTMLElement | null) => {
  const [isVisible, setIsVisible] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (!element || !isClient) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: `-${window.innerHeight / 5}px` },
    );

    observer.observe(element);
    
    return () => observer.disconnect();
  }, [element, isClient]);

  return isVisible;
};

export default useIsVisible;
