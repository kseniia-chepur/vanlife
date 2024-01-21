import { useOutletContext } from "react-router-dom";
import "./HostVanPricing.scss";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();

  return (
    <h3 className="host-van-detail-price">${currentVan.price}<span>/day</span></h3>
  )
}

export default HostVanPricing;