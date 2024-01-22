import React, { useEffect, useRef } from "react";

const Trailer = () => {
  const trailerRef = useRef();

  useEffect(() => {
    const trailer = trailerRef.current;

    window.onmousemove = (e) => {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };

      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
      });
    };
  }, []);

  return (
    <div id="trailer" ref={trailerRef}>
      <i></i>
    </div>
  );
};

export default Trailer;
