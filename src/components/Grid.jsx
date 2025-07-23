import { useState } from 'react';
import Pixel from './Pixel';
import { useGrid } from '../contexts/GridContext.jsx';

const Grid = ({ selectedColor, isDrawing }) => {
  const gridSize = 32;
  const { gridColors, setGridColors } = useGrid();

  const handlePixelUpdate = (index) => {
    const newPixels = [...gridColors];
    newPixels[index] = selectedColor;
    setGridColors(newPixels);
  };

  return (
    <div
      className="grid gap-1/2"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      }}
    >
      {gridColors.map((color, index) => (
        <Pixel
          key={index}
          color={color}
          onClick={() => handlePixelUpdate(index)}
          onMouseEnter={() => isDrawing && handlePixelUpdate(index)}
        />
      ))}
    </div>
  );
};

export default Grid;
