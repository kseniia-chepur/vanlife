import { Link, NavLink, Outlet } from "react-router-dom";
import "./HostLayout.scss";

const applyClassNames = ({ isActive } ) => 
  isActive 
    ? "host-nav__link host-nav__link--active" 
    : "host-nav__link"

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink to="/host" end
          className={applyClassNames}>
          Dashboard
        </NavLink>
        <NavLink to="/host/income"
          className={applyClassNames}> 
          Income
        </NavLink> 
        <NavLink to="/host/reviews"
          className={applyClassNames}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default HostLayout;