import { ColorRing } from 'react-loader-spinner';
import "./Loader.scss";

const Loader = () => {
  return (
    <ColorRing      
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#FFCC8D', '#FF8C38', '#115E59', '#E17654', '#FFEAD0']}
    />
  )
};

export default Loader;
