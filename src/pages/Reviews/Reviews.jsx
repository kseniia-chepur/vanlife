import { BsStarFill } from 'react-icons/bs';
import { reviewsData } from '../../constants';
import './Reviews.scss';

const Reviews = () => {
  return (
    <section className='reviews'>
      <div className='reviews__content'>
        <h2 className='reviews__title'>Your reviews</h2>
        <p className='reviews__period'>
          Last <span>30 days</span>
        </p>
      </div>
      <h3 className='reviews__subtitle'>Reviews (2)</h3>

      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className='review'>
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className='review__star' key={i} />
            ))}
            <div className='review__info'>
              <p className='review__name'>{review.name}</p>
              <p className='review__date'>{review.date}</p>
            </div>
            <p className='review__text'>{review.text}</p>
          </div>
          <hr className='review__separator' />
        </div>
      ))}
    </section>
  );
};

export default Reviews;
