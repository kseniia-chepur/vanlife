import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <header className='header'>
        <nav>
          <Link to='/'>#VANLIFE</Link>
          <Link to='/about'>About</Link>
          <Link to='/'>Home</Link>
        </nav>
      </header>
      <main className='home__content'>
        <h1 className='home__title'>You got the travel plans, we got the travel vans.</h1>
        <p className='home__description'>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to='vans'>Find your van</Link>
      </main>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </div>
  );
};

export default Home;
