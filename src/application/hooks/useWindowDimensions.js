import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  const isDesktop = width >= 1024;
  const isTablet = width <= 801;
  const isTabletPortrait = width <= 600;
  const isMobile = width <= 480;

  return {
    width,
    isMobile,
    isTablet,
    isTabletPortrait,
    isDesktop,
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
