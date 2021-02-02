import * as React from "react";

export const useMediaQuery = () => {
  const [windowWidth, handleWindowWidth] = React.useState(window.innerWidth);
  const handleResize = () => handleWindowWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [windowWidth];
};
