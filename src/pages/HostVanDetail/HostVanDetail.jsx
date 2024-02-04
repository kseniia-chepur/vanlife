import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import './HostVanDetail.scss';
import VanType from '../../components/VanType/VanType';
import BackButton from '../../components/BackButton/BackButton';
import Loader from '../../components/Loader/Loader';
import { getHostVans } from '../../api';

const applyClassNames = ({ isActive }) =>
  isActive
    ? 'host-van-detail__link host-van-detail__link--active'
    : 'host-van-detail__link';

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const loadVans = async () => {
      setIsLoading(true);

      try {
        const vans = await getHostVans(id);
        setCurrentVan(vans);
      } catch (err) {
        setErrorMsg(
          'Failed to load data about the selected van. Please try again later.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadVans();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorMsg) {
    return <h1 className='vans__error-msg'>{errorMsg}</h1>;
  }

  return (
    <>
      <BackButton />
      {currentVan && (
        <section className='host-van-detail'>
          <div className='host-van-detail__content'>
            <img
              src={currentVan.imageUrl}
              className='host-van-detail__img'
              alt={currentVan.name}
            />
            <div className='host-van-detail__info'>
              <VanType type={currentVan.type} />
              <h3 className='host-van-detail__title'>{currentVan.name}</h3>
              <h4 className='host-van-detail__price'>
                ${currentVan.price}
                <span>/day</span>
              </h4>
            </div>
          </div>
          <nav className='host-van-detail__nav'>
            <NavLink to='.' end className={applyClassNames}>
              Details
            </NavLink>
            <NavLink to='pricing' className={applyClassNames}>
              Pricing
            </NavLink>
            <NavLink to='photos' className={applyClassNames}>
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </section>
      )}
    </>
  );
};

export default HostVanDetail;
