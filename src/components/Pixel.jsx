import React from 'react';

const Pixel = React.memo(({ color, onClick, onMouseEnter }) => {
  return (
    <div
      className={`w-6 h-6 border border-gray-300`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    ></div>
  );
});

export default Pixel;
