import { createContext, useContext, useState } from "react";

const GridContext = createContext();

export const useGrid = () => useContext(GridContext);

export const GridProvider = ({ children, gridSize = 32, defaultColor = '#FFFFFF', initialGrid = [] }) => {
  const [gridColors, setGridColors] = useState(() => {
    return initialGrid.length === 0 ? Array(gridSize * gridSize).fill(defaultColor) : initialGrid;
  });

  const resetGrid = () => {
    setGridColors(Array(gridSize * gridSize).fill(defaultColor));
  };

  return (
    <GridContext.Provider value={{ gridColors, setGridColors, resetGrid }}>
      {children}
    </GridContext.Provider>
  );
};
