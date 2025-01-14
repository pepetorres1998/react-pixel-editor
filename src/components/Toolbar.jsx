const Toolbar = ({isDrawing, onSetIsDrawing}) => {
  return (
    <div className="flex gap-2 mb-4">
      <button className={`h-8 w-8 rounded-full border-2 bg-gray-300 ${
          isDrawing === true ? 'border-black' : 'border-transparent'
        }`}
        onClick={() => onSetIsDrawing(true)}
      ></button>
      <button className={`h-8 w-8 rounded-full border-2 bg-gray-400 ${
          isDrawing === false ? 'border-black' : 'border-transparent'
        }`}
        onClick={() => onSetIsDrawing(false)}
      ></button>
    </div>
  );
};

export default Toolbar;
