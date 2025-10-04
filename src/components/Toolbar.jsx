import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGrid } from "../contexts/GridContext";
import { useToolbar } from "../contexts/ToolbarContext";
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";

const Toolbar = () => {
  const { isDrawing, onSetIsDrawing, color, setColor } = useToolbar();
  const { resetGrid } = useGrid();

  return (
    <div className="flex justify-evenly mb-4 w-2/3">
      <div className="flex flex-col gap-2 my-4">
        <button className={`h-8 w-8 rounded-full border-2 bg-gray-300 ${
            isDrawing === true ? 'border-black' : 'border-transparent'
          }`}
          onClick={() => onSetIsDrawing(true)}
        >
          <FontAwesomeIcon icon={faBrush}/>
        </button>
        <button className={`h-8 w-8 rounded-full border-2 bg-gray-300 ${
            isDrawing === false ? 'border-black' : 'border-transparent'
          }`}
          onClick={() => onSetIsDrawing(false)}
        >
          <FontAwesomeIcon icon={faPencil}/>
        </button>
        <button className={'h-8 w-8 rounded-full border-2 bg-gray-300'}>
          <FontAwesomeIcon icon={faTrash} onClick={resetGrid}/>
        </button>
      </div>
      <div className="w-[100px]">
        <ColorPicker hideInput={true} hideAlpha={true} color={color} onChange={setColor} height={100} />
      </div>
    </div>
  );
};

export default Toolbar;
