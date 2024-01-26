import { useOutletContext } from "react-router-dom";
import "./HostVanInfo.scss";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();

  const vanType = currentVan.type[0].toUpperCase() + currentVan.type.slice(1);
  
  return (
    <section className="host-van-detail-info">
      <p className="host-van-detail-info__text">Name: <span>{currentVan.name}</span></p>
      <p className="host-van-detail-info__text">Category: <span>{vanType}</span></p>
      <p className="host-van-detail-info__text">Description: <span>{currentVan.description}</span></p>
      <p className="host-van-detail-info__text">Visibility: <span>Public</span></p>
    </section>
  )
}

export default HostVanInfo;