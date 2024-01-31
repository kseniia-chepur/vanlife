import { Link, NavLink } from "react-router-dom";
import loginIcon from "../../assets/icons/login.svg";
import "./Header.scss";

const applyClassNames = ({ isActive } ) => 
  isActive 
    ? "header__link header__link--active"
    : "header__link"

const Header = () => {
  return (
    <header className="header">
      <Link to="." className="header__logo">#VanLife</Link>
      <nav className="header__nav">
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
        <Link to="login" 
          className="header__link"
        >
          <img 
            src={loginIcon}
            alt="login icon"
            className="header__login-icon"
          />
        </Link>
      </nav>
  </header>
  )
}

export default Header;