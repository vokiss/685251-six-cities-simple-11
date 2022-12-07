import {useState, ChangeEvent, FormEvent} from 'react';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-action';
import StarsRatingInput from '../stars-rating-input/stars-rating-input';

type PropertyReviewProps = {
  id: number;
}

function PropertyReviewForm ({id}: PropertyReviewProps): JSX.Element {
  const [reviewData, setReviewData] = useState({
    id: String(id),
    comment: '',
    rating: 0
  });

  const dispatch = useAppDispatch();

  const onChangeReviewHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => setReviewData({ ...reviewData, [evt.target.name]: evt.target.value });

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction(reviewData));
  };

  return (
    <form onSubmit={onSubmitHandler} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarsRatingInput onChangeHandler={onChangeReviewHandler}/>
      <textarea
        value={reviewData.comment}
        onChange={onChangeReviewHandler}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder={'Tell how was your stay, what you like and what can be improved'}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default PropertyReviewForm;
