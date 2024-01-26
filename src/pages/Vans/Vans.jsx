import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import './Vans.scss';
import VanType from "../../components/VanType/VanType";

const Vans = () => {
  const [vans, setVans] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');


  useEffect(() => {
    fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans));
  }, []);

  const handleFilterChange = (key, value) => {
    setSearchParams(params => {
      !value 
        ? params.delete(key)
        : params.set(key, value);
        
        return params;
    });
}

  return (
    <div className="vans">
      <h1 className="vans__title">
        Explore our van options
      </h1>
      <div className="vans__filter">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`vans__filter-btn vans__filter-btn--simple ${typeFilter === "simple" && "selected"}`}
        >
          Simple
        </button>
        <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`vans__filter-btn vans__filter-btn--luxury ${typeFilter === "luxury" && "selected"}`}
        >
          Luxury
        </button>
        <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`vans__filter-btn vans__filter-btn--rugged ${typeFilter === "rugged" && "selected"}`}
        >
          Rugged
        </button>

        {typeFilter && (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="vans__filter-btn vans__filter-btn--clear-filter"
            >
              Clear filter
            </button>
        )}
      </div>

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