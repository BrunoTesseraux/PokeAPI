import DarkMode from "../DarkMode/DarkMode";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";

const [isDarkMode, setIsDarkMode] = useState(true);

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};

const Nav = () => {
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <Link to="/">Home</Link>
        <Searchbar />
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
    </div>
  );
};

export default Nav;
