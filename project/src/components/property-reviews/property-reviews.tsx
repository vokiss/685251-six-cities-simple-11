import { Review } from '../../types/review';
import PropertyReviewItem from './review-item';

type Reviews = {
  reviews: Review[];
}

function PropertyReviews (props: Reviews): JSX.Element {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <PropertyReviewItem key={review.id} review={review}/>)}
    </ul>
  );
}

export default PropertyReviews;
