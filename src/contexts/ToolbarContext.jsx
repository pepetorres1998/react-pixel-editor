import { createContext, useContext, useState } from "react";

const ToolbarContext = createContext();

export const useToolbar = () => useContext(ToolbarContext);

export const ToolbarProvider = ({ children }) => {
  const [isDrawing, onSetIsDrawing] = useState(false);

  return (
    <ToolbarContext.Provider value={{ isDrawing, onSetIsDrawing }}>
      {children}
    </ToolbarContext.Provider>
  );
}
