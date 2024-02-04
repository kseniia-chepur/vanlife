import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to='/' className='not-found__home-link link-btn'>
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
