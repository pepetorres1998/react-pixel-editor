import Pixel from './Pixel';

const Grid = () => {
  const gridSize = 32; // 16x16 grid
  const pixels = Array.from({ length: gridSize * gridSize }, () => '');

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
          onClick={() => console.log(`Pixel ${index} clicked`)}
        />
      ))}
    </div>
  );
};

export default Grid;
