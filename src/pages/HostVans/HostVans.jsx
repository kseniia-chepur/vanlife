import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HostVans.scss';
import { getHostVans } from '../../api';
import Loader from '../../components/Loader/Loader';

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const loadVans = async () => {
      setIsLoading(true);

      try {
        const hostVans = await getHostVans();
        setHostVans(hostVans);
      } catch (err) {
        setErrorMsg('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadVans();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (errorMsg) {
    return <h1 className='vans__error-msg'>{errorMsg}</h1>;
  }

  return (
    <section className='host-vans'>
      <h1 className='host-vans__title'>Your listed vans</h1>
      {hostVans.length &&
        hostVans.map((van) => (
          <Link to={van.id} key={van.id} className='host-van__link-wrapper'>
            <div className='host-van'>
              <img
                src={van.imageUrl}
                alt={van.name}
                className='host-van__img'
              />
              <div className='host-van__info'>
                <h3 className='host-van__title'>{van.name}</h3>
                <p className='host-van__price'>${van.price}/day</p>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default HostVans;
