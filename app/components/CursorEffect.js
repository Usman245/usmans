import React, { useState, useEffect } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <div
        style={{
          position: "absolute",
          top: position.y - 50, // Adjust circle center to cursor
          left: position.x - 50,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 255, 0, 0.5) 0%, rgba(0, 255, 0, 0) 100%)",
          pointerEvents: "none", // Prevent blocking interaction with other elements
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default CursorEffect;
