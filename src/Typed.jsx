import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedHeading = () => {
  // Create a ref for the element where the typing will happen
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize the Typed.js library with options
    const typed = new Typed(typedElement.current, {
      strings: [
        "Stay Organized and Stay Productive with Todo Manager",
      ],
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of deleting (if you want to use this)
      showCursor: false, // Hide the blinking cursor
      loop: false, // Set to true if you want to repeat typing
    });

    // Destroy the Typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-2xl font-bold text-center mb-8 mt-2">
      <span ref={typedElement} />
    </div>
  );
};

export default TypedHeading;
