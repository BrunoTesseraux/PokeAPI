import DarkMode from "../DarkMode/DarkMode";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import "./Nav.scss";
// const [isDarkMode, setIsDarkMode] = useState(true);

// const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
// };

const Nav = () => {
  return (
    <nav>
      <Link to="/types">
        <img src="./types.svg"></img>
      </Link>
      <Searchbar />
      <DarkMode />
    </nav>
  );
};

export default Nav;
