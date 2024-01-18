import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";


const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main> 
      <Footer />
    </div>
  )
}

export default Layout;