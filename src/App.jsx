import { useState } from 'react';
import Palette from './components/Palette';
import Grid from './components/Grid';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('bg-red-500');
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Pixel Editor</h1>
      <Palette
        colors={colors}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      <Grid selectedColor={selectedColor}/>
    </div>
  );
};

export default App;
