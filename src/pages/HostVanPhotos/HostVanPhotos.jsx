import { useOutletContext } from 'react-router-dom';
import './HostVanPhotos.scss';

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <img
      src={currentVan.imageUrl}
      className='host-van-detail-img'
      alt={currentVan.name}
    />
  );
};

export default HostVanPhotos;
