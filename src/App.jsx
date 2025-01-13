import Grid from './components/Grid';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const App = () => {
  const [color, setColor] = useColor('#000000');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Pixel Editor</h1>
      <div className="mb-2 w-2/3">
        <ColorPicker hideInput={["hsv", "rgb"]} color={color} onChange={setColor} />
      </div>
      <Grid selectedColor={color.hex}/>
    </div>
  );
};

export default App;
