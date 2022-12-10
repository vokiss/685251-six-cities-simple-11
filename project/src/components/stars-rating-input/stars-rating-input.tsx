import { ChangeEvent, Fragment } from 'react';
import { ratingTitles } from '../../const';

type StarsRatingInputProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: number;
}

function StarsRatingInput({onChangeHandler, rating}: StarsRatingInputProps): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {ratingTitles.map((title, index) => {
        const value = 5 - index;
        return (
          <Fragment key={title}>
            <input
              onChange={onChangeHandler}
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={rating === value}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>);
}

export default StarsRatingInput;
