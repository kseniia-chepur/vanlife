import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Vans.scss';
import VanType from "../../components/VanType/VanType";

const Vans = () => {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans));
  }, []);

  return (
    <div className="vans">
      <h1 className="vans__title">
        Explore our van options
      </h1>
      {vans && <div className="vans__list"> 
        {vans.map(van => (
        <div key={van.id} className="van">
          <Link to={van.id} className="van__link">
            <img 
              src={van.imageUrl} 
              alt={van.name} 
              className="van__img"
            />
            <div className="van__info">
              <h3 className="van__title">
                {van.name}
              </h3>
              <p className="van__price">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
            <VanType type={van.type} />
          </Link>
        </div>
      ))} 
      </div>}
    </div>
  )
}

export default Vans;