import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { UrlEncoder } from "../lib/UrlEncoder";
import { useGrid } from '../contexts/GridContext.jsx';

const Header = () => {
  const { gridColors } = useGrid();
  const copyUrl = async () => {
    const token = UrlEncoder.encode(gridColors);

    await navigator.clipboard.writeText(token);
  }

  return (
    <div className="flex flex-row justify-around items-center w-full mb-6">
      <button onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <h1 className="text-3xl font-bold">Pixel Editor</h1>
      <div className="relative">
        <button onClick={copyUrl}>
          <FontAwesomeIcon icon={faShareFromSquare}/>
        </button>
      </div>
    </div>
  )
};

export default Header;
