import { Link } from 'react-router-dom';
import './BackButton.scss';

const BackButton = () => {
  return (
    <Link to=".."
      relative="path"
      className="back-btn"
    >
      &larr; <span className="back-btn__text">Back to all vans</span>
    </Link>
  )
}

export default BackButton;