import { createContext, useContext, useMemo, useState } from "react";
import { useColor } from "react-color-palette";

const ToolbarContext = createContext();

export const useToolbar = () => useContext(ToolbarContext);

export const ToolbarProvider = ({ children }) => {
  const [isDrawing, onSetIsDrawing] = useState(false);
  const [color, setColor] = useColor('#000000');

  const value = useMemo(() => ({ isDrawing, onSetIsDrawing, color, setColor }), [isDrawing, color]);

  return (
    <ToolbarContext.Provider value={value}>
      {children}
    </ToolbarContext.Provider>
  );
}
