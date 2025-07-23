import { createContext, useContext, useState } from "react";

const GridContext = createContext();

export const useGrid = () => useContext(GridContext);

export const GridProvider = ({ children, gridSize = 32, defaultColor = '#E5E7EB' }) => {
  const [gridColors, setGridColors] = useState(Array(gridSize * gridSize).fill(defaultColor));

  const resetGrid = () => {
    setGridColors(Array(gridSize * gridSize).fill(defaultColor));
  };

  return (
    <GridContext.Provider value={{ gridColors, setGridColors, resetGrid }}>
      {children}
    </GridContext.Provider>
  );
};
