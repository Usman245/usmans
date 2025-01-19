'use client'
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position:'fixed',
        width: "700px", // Adjust for size
        height: "700px", // Adjust for size
        borderRadius: "50%",
        pointerEvents: "none",
        background: "radial-gradient(circle, rgba(0,255,0,0.5) 0%, rgba(0,255,0,0) 70%)",
        transform: "translate(-50%, -50%)",
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: 9999,
        mixBlendMode: "screen",
        opacity:0.3,
        cursor: "pointer"
        
      }}
    ></div>
  );
};

export default CustomCursor;
