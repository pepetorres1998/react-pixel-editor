const Palette = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className="flex gap-2 mb-4">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full ${color} border-2 ${
            selectedColor === color ? 'border-black' : 'border-transparent'
          }`}
          onClick={() => onSelectColor(color)}
        ></button>
      ))}
    </div>
  );
};

export default Palette;
