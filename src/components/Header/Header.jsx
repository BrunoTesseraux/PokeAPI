import "./Header.scss";

import { Link } from "react-router-dom";
import Nav from "./../Nav/Nav";
import Typefilter from "../TypeFilter/Typefilter";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src="./../../../public/pocketmon.svg" alt="Logo Pocketmon" />
        </Link>
        <Link to="/types" >Type</Link>
        <Nav />
      </header>
    </>
  );
};

export default Header;
