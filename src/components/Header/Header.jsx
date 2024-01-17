import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
    <Link to="/" className="header__logo">#VanLife</Link>
      <nav>
        <Link to="/about" className="header__link">About</Link>
        <Link to="/" className="header__link">Home</Link>
        <Link to="/vans" className="header__link">Vans</Link>
      </nav>
  </header>
  )
}

export default Header;