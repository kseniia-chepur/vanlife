import { Link } from 'react-router-dom';
import  bgImg  from '../../assets/images/about-hero.png';
import './About.css';

const About = () => {
  return (
    <div className='about-page'>
      <main>
        <img 
          src={bgImg} 
          className='about-page__hero' 
          alt='Van with a person sitting on the top'
        />
        <section className='about-page__content'>
          <h1 className='about-page__title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p className='about-page__description'>
            Our mission is to enliven your road trip with the perfect travel van rental. 
            Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>
          <p className='about-page__description'>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </section>
        <section className='about-page__cta'>
          <h2 className='about-page__subtitle'>
            Your destination is waiting.
            Your van is ready.
          </h2>
          <Link to='/vans' className='link-btn'>Explore our vans</Link>
        </section>
      </main>
      <footer>
      Ⓒ 2022 #VANLIFE
    </footer>
    </div>
  )
}

export default About;