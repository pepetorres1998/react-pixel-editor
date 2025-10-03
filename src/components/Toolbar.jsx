import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGrid } from "../contexts/GridContext";
import { useToolbar } from "../contexts/ToolbarContext";

const Toolbar = () => {
  const { isDrawing, onSetIsDrawing } = useToolbar();
  const { resetGrid } = useGrid();

  return (
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
  );
};

export default Toolbar;
