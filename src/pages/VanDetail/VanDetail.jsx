import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './VanDetail.scss';
import VanType from "../../components/VanType/VanType";

const VanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [id]);

  return (
    <div className="van-detail">
    {van ? (
        <div className="van-detail__content">
            <img src={van.imageUrl} alt={van.name} className="van-detail__img"/>
            <VanType type={van.type} />
            <h2 className="van-detail__title">{van.name}</h2>
            <p className="van-detail__price"><span>${van.price}</span>/day</p>
            <p className="van-detail__description">{van.description}</p>
            <div className="van-detail__link">
              <button className="link-btn">Rent this van</button>
            </div>
        </div>
    ) : <h2>Loading...</h2>}
</div>
  )
}

export default VanDetail;