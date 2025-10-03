import Pixel from './Pixel';
import { useGrid } from '../contexts/GridContext.jsx';
import { useToolbar } from '../contexts/ToolbarContext.jsx';

const Grid = ({ selectedColor }) => {
  const gridSize = 32;
  const { gridColors, setGridColors } = useGrid();
  const { isDrawing } = useToolbar();

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
