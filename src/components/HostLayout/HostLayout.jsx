import { Link, Outlet } from "react-router-dom";
import "./HostLayout.scss";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <Link to="/host" className="host-nav__link">Dashboard</Link>
        <Link to="/host/income" className="host-nav__link">Income</Link> 
        <Link to="/host/reviews" className="host-nav__link">Reviews</Link>
      </nav>
 
      <Outlet />
    </>
  )
}

export default HostLayout;