import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [customColor, setCustomColor] = useState(""); 

  const colorOptions = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "teal",
    "gray",
  ];

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleCustomColorChange = () => {
    setColor(customColor);
  };

  const handleDropdownChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
  };

  return (
    <div className="h-screen min-h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center top-4 inset-x-0 px-2">
      <select
  value={color}
  onChange={handleDropdownChange}
  className="bg-white px-3 py-1 rounded-md shadow-lg outline-none"
>
  <option value="">--Select Color--</option> 
  {colorOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">


  
  <input
    type="color"
    value={customColor}
    onChange={(e) => setCustomColor(e.target.value)}
    className="color-picker-input"
  />


          <button
            onClick={handleCustomColorChange}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: customColor }}
          >
            Apply Custom
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
