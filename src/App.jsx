import { useState } from 'react';
import Grid from './components/Grid';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import Toolbar from './components/Toolbar';
import { GridProvider } from './contexts/GridContext.jsx';

const App = () => {
  const [color, setColor] = useColor('#000000');
  const [isDrawing, setIsDrawing] = useState(true);

  return (
    <GridProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Pixel Editor</h1>
        <div className="mb-2 w-2/3">
          <ColorPicker hideInput={["hsv", "rgb"]} color={color} onChange={setColor} />
        </div>
        <div className="mb-2">
          <Toolbar isDrawing={isDrawing} onSetIsDrawing={setIsDrawing} />
        </div>
        <Grid selectedColor={color.hex} isDrawing={isDrawing}/>
      </div>
    </GridProvider>
  );
};

export default App;
