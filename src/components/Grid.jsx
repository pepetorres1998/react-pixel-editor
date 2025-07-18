import { useState } from 'react';
import Pixel from './Pixel';

const Grid = ({ selectedColor, isDrawing }) => {
  const gridSize = 32;
  const [pixels, setPixels] = useState(Array(gridSize * gridSize).fill('#E5E7EB'));

  const handlePixelUpdate = (index) => {
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  return (
    <div
      className="grid gap-1/2"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      }}
    >
      {pixels.map((color, index) => (
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
