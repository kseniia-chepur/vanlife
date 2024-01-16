import { useEffect, useState } from "react";
import './Vans.css';

const Vans = () => {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/vans.json')
        .then(res => res.json())
        .then(data => setVans(data));
  }, []);

  return (
    <div className="vans">
      <h1 className="vans__title">Explore our van options</h1>
      {vans && <div className="vans__list"> 
        {vans.map(van => (
        <div key={van.id} className="van">
          <img src={van.imageUrl} className="van__img" />
          <div className="van__info">
            <h3 className="van__title">{van.name}</h3>
            <p className="van__price">${van.price}<span className="van__price--for">/day</span></p>
          </div>
          <i className={`van__type van__type--${van.type} selected`}>{van.type}</i>
        </div>
      ))} 
      </div>}
    </div>
  )
}

export default Vans;