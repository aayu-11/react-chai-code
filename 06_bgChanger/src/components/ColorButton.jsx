import React from "react";

function ColorButton({ color, setColor, setShadow }) {
  return (
    <button
      className="h-8 w-8 mx-3 rounded-full hover:cursor-pointer"
      onClick={() => setColor(color)}
      style={{ backgroundColor: color }}
      onMouseEnter={() => setShadow(color)}
      onMouseLeave={() => setShadow("cyan")}
    ></button>
  );
}

export default ColorButton;
