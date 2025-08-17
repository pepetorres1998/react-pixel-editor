import React from 'react';

const Pixel = React.memo(({ color, onClick, onMouseEnter }) => {
  return (
    <div
      className={`w-4 h-4 border border-gray-300`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    ></div>
  );
});

export default Pixel;
