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
        <NavLink to="." end
          className={applyClassNames}>
          Dashboard
        </NavLink>
        <NavLink to="income"
          className={applyClassNames}> 
          Income
        </NavLink> 
        <NavLink to="vans"
          className={applyClassNames}>
          Vans
        </NavLink>
        <NavLink to="reviews"
          className={applyClassNames}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default HostLayout;