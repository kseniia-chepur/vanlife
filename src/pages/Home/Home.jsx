import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <main className="home__content">
        <h1 className="home__title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home__description">
          Add adventure to your life by joining the #vanlife movement. 
          Rent the perfect van to make your perfect road trip.
        </p>
        <Link to="vans" className="link-btn">
          Find your van
        </Link>
      </main>
    </div>
  );
};

export default Home;
