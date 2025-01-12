import { useState } from 'react';
import Pixel from './Pixel';

const Grid = ({ selectedColor }) => {
  const gridSize = 32;
  const [pixels, setPixels] = useState(Array(gridSize * gridSize).fill('bg-gray-200'));

  const handlePixelClick = (index) => {
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  return (
    <div
      className="grid gap-1"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      }}
    >
      {pixels.map((color, index) => (
        <Pixel
          key={index}
          color={color}
          onClick={() => handlePixelClick(index)}
        />
      ))}
    </div>
  );
};

export default Grid;
