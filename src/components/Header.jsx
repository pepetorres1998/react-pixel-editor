import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-row justify-around items-center w-full mb-6">
      <button>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <h1 className="text-3xl font-bold">Pixel Editor</h1>
      <button>
        <FontAwesomeIcon icon={faShareFromSquare}/>
      </button>
    </div>
  )
}

export default Header;
