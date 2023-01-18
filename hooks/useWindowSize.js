import { useState, useEffect, useRef } from "react";

export const useWindowSize = (handleResize) => {
  const isClient = typeof window === "object"; //Object represents browser window
  const lastWidth = useRef();

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    } //Exit if not user/browser

    window.addEventListener("resize", handleResize); // <-- I am only interested in window.innerWidth !
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
