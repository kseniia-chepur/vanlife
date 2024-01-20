import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './HostVanDetail.scss';
import VanType from "../../components/VanType/VanType";
import BackButton from "../../components/BackButton/BackButton";

const HostVanDetail = () => {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [id]);

  return (
    <>
      <BackButton />
      {van && (
        <section>
          <div className="host-van-detail">
            <div className="host-van-detail__content">
              <img src={van.imageUrl} className="host-van-detail__img" />
              <div className="host-van-detail__info">
                <VanType type={van.type} />
                <h3 className="host-van-detail__title">{van.name}</h3>
                <h4 className="host-van-detail__price">${van.price}<span>/day</span></h4>
              </div>
            </div>
          </div>
       </section>
      )}    
    </>
  )
}

export default HostVanDetail;