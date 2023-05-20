import { useState, useEffect } from "react";

const useScreenWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const isWindow = typeof window !== "undefined";

  const getWidth = (): number => (isWindow ? window.innerWidth : windowWidth);

  const resize = (): void => setWindowWidth(getWidth());

  useEffect(() => {
    if (isWindow) {
      setWindowWidth(getWidth());

      window.addEventListener("resize", resize);

      return () => window.removeEventListener("resize", resize);
    }
    //eslint-disable-next-line
  }, [isWindow]);

  return windowWidth;
};

export default useScreenWidth;
