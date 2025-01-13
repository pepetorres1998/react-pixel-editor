const Pixel = ({ color, onClick }) => {
  return (
    <div
      className={`w-6 h-6 border border-gray-300`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      onMouseEnter={onClick}
    ></div>
  );
};

export default Pixel;
