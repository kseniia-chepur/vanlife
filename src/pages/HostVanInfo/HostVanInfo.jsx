import { useOutletContext } from "react-router-dom";
import "./HostVanInfo.scss";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  
  return (
    <section className="host-van-detail-info">
      <p className="host-van-detail-info__text">Name: <span>{currentVan.name}</span></p>
      <p className="host-van-detail-info__text">Category: <span>{currentVan.type}</span></p>
      <p className="host-van-detail-info__text">Description: <span>{currentVan.description}</span></p>
      <p className="host-van-detail-info__text">Visibility: <span>Public</span></p>
    </section>
  )
}

export default HostVanInfo;