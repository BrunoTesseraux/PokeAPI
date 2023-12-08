import DarkMode from "../DarkMode/DarkMode";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";

// const [isDarkMode, setIsDarkMode] = useState(true);

// const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
// };

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Searchbar />
        <DarkMode />
      </nav>
    </div>
  );
};

export default Nav;
