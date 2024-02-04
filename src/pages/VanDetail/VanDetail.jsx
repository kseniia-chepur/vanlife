import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './VanDetail.scss';
import VanType from '../../components/VanType/VanType';
import BackButton from '../../components/BackButton/BackButton';
import { getVans } from '../../api';
import Loader from '../../components/Loader/Loader';

const VanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const loadVans = async () => {
      setIsLoading(true);

      try {
        const van = await getVans(id);
        setVan(van);
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
    <div className='van-detail'>
      <BackButton />

      {van && (
        <div className='van-detail__content'>
          <img src={van.imageUrl} alt={van.name} className='van-detail__img' />
          <VanType type={van.type} />
          <h2 className='van-detail__title'>{van.name}</h2>
          <p className='van-detail__price'>
            <span>${van.price}</span>/day
          </p>
          <p className='van-detail__description'>{van.description}</p>
          <div className='van-detail__link'>
            <button className='link-btn'>Rent this van</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VanDetail;
