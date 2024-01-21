import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import './HostVanDetail.scss';
import VanType from "../../components/VanType/VanType";
import BackButton from "../../components/BackButton/BackButton";

const applyClassNames = ({ isActive } ) => 
  isActive 
    ? "host-van-detail__link host-van-detail__link--active"
    : "host-van-detail__link"

const HostVanDetail = () => {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  }, [id]);

  return (
    <>
      <BackButton />
      {currentVan && (
        <section>
          <div className="host-van-detail">
            <div className="host-van-detail__content">
              <img src={currentVan.imageUrl} className="host-van-detail__img" alt={currentVan.name}/>
              <div className="host-van-detail__info">
                <VanType type={currentVan.type} />
                <h3 className="host-van-detail__title">{currentVan.name}</h3>
                <h4 className="host-van-detail__price">${currentVan.price}<span>/day</span></h4>
              </div>
            </div>
            <nav className="host-van-detail__nav">
              <NavLink to="." end
                className={applyClassNames}>
                Details
              </NavLink>
              <NavLink to="pricing" 
                className={applyClassNames}>
                Pricing
              </NavLink>
              <NavLink to="photos" 
                className={applyClassNames}>
                Photos
              </NavLink>
            </nav>
            <Outlet context={{ currentVan} }/>
          </div> 
       </section>
      )} 
    </>
  )
}

export default HostVanDetail;