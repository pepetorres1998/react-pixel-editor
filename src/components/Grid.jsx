import Pixel from './Pixel';
import { useGrid } from '../contexts/GridContext.jsx';
import { useToolbar } from '../contexts/ToolbarContext.jsx';
import { useCallback, useEffect, useRef } from 'react';

const Grid = ({ selectedColor }) => {
  const gridSize = 32;
  const { gridColors, setGridColors } = useGrid();
  const { isDrawing } = useToolbar();
  const isDrawingRef = useRef(isDrawing);

  useEffect(() => { isDrawingRef.current = isDrawing }, [isDrawing]);

  const handlePixelUpdate = useCallback((index) => {
    setGridColors(prev => {
      const next = [...prev];
      next[index] = selectedColor;
      return next;
    });
  }, [selectedColor]);

  const handleClick = useCallback((event) => {
    const index = Number(event.currentTarget.dataset.index);

    handlePixelUpdate(index);
  }, [handlePixelUpdate]);

  const handleMouseEnter = useCallback((event) => {
    if(!isDrawingRef.current) return;
    const index = Number(event.currentTarget.dataset.index);

    handlePixelUpdate(index);
  }, [handlePixelUpdate]);

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
          index={index}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
};

export default Grid;
