import './VanType.scss';

const VanType = ({ type }) => {
  return (
    <>
      <span className={`van-type van-type--${type} selected`}>{type}</span>
    </>
  )
}

export default VanType;
