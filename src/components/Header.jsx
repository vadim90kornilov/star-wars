import { Link, useLocation } from "react-router-dom";
import logoSvg from "../assets/img/logo.svg";
import Search from "./Search";

const Header = ({ searchValue, setSearchValue }) => {
  let location = useLocation();

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="150" height="80" src={logoSvg} alt="SW logo" />
          </div>
        </Link>
        {location.pathname !== "/" && (
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        )}
        <nav className="header__nav">
          <ul>
            <Link to="/">
              <li className={location.pathname === "/" ? "active" : ""}>
                Home
              </li>
            </Link>
            <Link to="/characters">
              <li
                className={location.pathname === "/characters" ? "active" : ""}
              >
                Characters
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
