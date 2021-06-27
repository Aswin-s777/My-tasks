import React, { useState, useEffect } from "react";

function Mouseeffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseCordinates = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMouseCordinates);

    return () => {
      console.log("Component unmount");
      window.removeEventListener("mousemove", logMouseCordinates);
    };
  }, []);

  return (
    <div>
      X- {x} Y- {y}
    </div>
  );
}

export default Mouseeffect;