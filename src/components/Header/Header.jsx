import "./Header.scss";

import { Link } from "react-router-dom";
import Nav from "./../Nav/Nav";

const Header = () => {
  return (
    <>
      <header>
        <Link>
          <img src="./../../../public/pocketmon.svg" alt="Logo Pocketmon" />
        </Link>
        <Nav />
      </header>
    </>
  );
};

export default Header;
