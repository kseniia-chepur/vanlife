import { BsStarFill } from "react-icons/bs";
import "./Reviews.scss";

const Reviews = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2024",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2023",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
]
  return (
    <section className="reviews">
      <div className="reviews__content">
        <h2 className="reviews__title">Your reviews</h2>
        <p className="reviews__period">
          Last <span>30 days</span>
        </p>
      </div>
      <h3 className="reviews__subtitle">Reviews (2)</h3>

      {reviewsData.map(review => (
        <div key={review.id}>
          <div className="review">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className="review__star" key={i} />
            ))}
            <div className="review__info">
              <p className="review__name">{review.name}</p>
              <p className="review__date">{review.date}</p>
            </div>
            <p className="review__text">{review.text}</p>
          </div>
          <hr className="review__separator"/>
        </div>
      ))}
    </section>
  )
}

export default Reviews;