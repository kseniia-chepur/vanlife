import './VanType.scss';

const VanType = ({ type }) => {
  return (
    <>
      <i className={`van-type van-type--${type} selected`}>{type}</i>
    </>
  )
}

export default VanType;
