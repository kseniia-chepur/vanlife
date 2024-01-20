import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const applyClassNames = ({ isActive } ) => 
  isActive 
    ? "header__link header__link--active"
    : "header__link"

const Header = () => {
  return (
    <header className="header">
      <Link to="." className="header__logo">#VanLife</Link>
      <nav>
        <NavLink to="host" 
          className={applyClassNames}>
          Host
        </NavLink>
        <NavLink to="about" 
          className={applyClassNames}>
          About
        </NavLink>
        <NavLink to="vans" 
          className={applyClassNames}>
          Vans
        </NavLink>
      </nav>
  </header>
  )
}

export default Header;