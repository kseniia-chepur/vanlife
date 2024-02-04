import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='dashboard__income'>
        <div>
          <h1 className='dashboard__title'>Welcome!</h1>
          <p className='dashboard__period'>
            Income last <span>30 days</span>
          </p>
          <h2 className='dashboard__income-amount'>$2,260</h2>
        </div>
        <Link to='income' className='dashboard__link'>
          Details
        </Link>
      </div>
      <div className='dashboard__reviews'>
        <h2>Review score</h2>
        <BsStarFill className='dashboard__star' />
        <p className='dashboard__review-info'>
          <span>5.0</span>/5
        </p>
        <Link to='reviews' className='dashboard__link'>
          Details
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
