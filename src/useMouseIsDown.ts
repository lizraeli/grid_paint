import { useState, useEffect, useRef } from "react";

const useMouseIsDown = () => {
  const [mouseIsDown, setMouseIsDown] = useState(false);

  useEffect(() => {
    const setMouseIsDownTrue = (event: MouseEvent) => {
      event.preventDefault()
      setMouseIsDown(true);
    };

    const setMouseIsDownFalse = (event: MouseEvent)  => {
      event.preventDefault()
      setMouseIsDown(false);
    };

    document.addEventListener("mousedown", setMouseIsDownTrue);
    document.addEventListener("mouseup", setMouseIsDownFalse);

    return () => {
      document.removeEventListener("mousedown", setMouseIsDownTrue);
      document.removeEventListener("mouseup", setMouseIsDownFalse);
    };
  }, []);

  return { mouseIsDown };
};

export default useMouseIsDown;
