import {useState, ChangeEvent, FormEvent} from 'react';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-action';
import { getCurrentOfferData } from '../../store/data-process/selector';
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

  const isReviewSending = useAppSelector(getCurrentOfferData).reviewsIsLoading;
  const isFormValid = reviewData.rating > 0 && reviewData.comment.length >= MIN_REVIEW_LENGTH && reviewData.comment.length <= MAX_REVIEW_LENGTH;

  const dispatch = useAppDispatch();

  const onChangeTextReviewHandler = (evt: ChangeEvent<HTMLTextAreaElement> ) => setReviewData({ ...reviewData, comment: evt.target.value });
  const onChangeInputReviewHandler = (evt: ChangeEvent<HTMLInputElement> ) => setReviewData({ ...reviewData, rating: +evt.target.value });

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewAction(reviewData));
    reviewData.comment = '';
    reviewData.rating = 0;
  };

  return (
    <form onSubmit={onSubmitHandler} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarsRatingInput onChangeHandler={onChangeInputReviewHandler} rating={reviewData.rating}/>
      <textarea
        value={reviewData.comment}
        onChange={onChangeTextReviewHandler}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder={'Tell how was your stay, what you like and what can be improved'}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isReviewSending}>Submit </button>
      </div>
    </form>
  );
}

export default PropertyReviewForm;
