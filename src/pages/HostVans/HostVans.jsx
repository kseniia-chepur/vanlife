import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HostVans.scss";

const HostVans = () => {
  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setHostVans(data.vans))
  }, []);

  return (
    <section className="host-vans">
      <h1 className="host-vans__title">
        Your listed vans
      </h1>
      {hostVans 
        ? (hostVans.map(van => (
          <Link to={`/host/vans/${van.id}`} 
            key={van.id} 
            className="host-van__link-wrapper"
          >
            <div className="host-van">
              <img 
                src={van.imageUrl} 
                alt={van.name} 
                className="host-van__img" 
              />
              <div className="host-van__info">
                <h3 className="host-van__title">
                  {van.name}
                </h3>
                <p className="host-van__price">
                  ${van.price}/day
                </p>
              </div>
            </div>
          </Link>
        ))) 
        : <h2>Loading...</h2>}
    </section>
  )
}

export default HostVans;