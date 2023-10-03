import React from "react";
import { useState } from "react";
function BgChanger({ color, textColor = "black" }) {
  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <button
        onClick={changeBackgroundColor}
        className={`text-${textColor} m-3 p-3 shadow-sm`}
        style={{
          backgroundColor: color,
          boxShadow: `4px 2px 2px 2px black`,
        }}
      >
        {color}
      </button>
    </>
  );
}

export default BgChanger;
