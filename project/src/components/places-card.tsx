import { Offer } from '../types/offers';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, SELECT_CARD_DEFAULT } from '../const';
import { useAppDispatch } from '../hooks';
import { setActiveCard } from '../store/app-process/app-process';

type PlacesCardProps = {
  offer: Offer;
  className: string;
}

function PlacesCard (props: PlacesCardProps): JSX.Element {
  const {offer, className} = props;
  const {previewImage, price, title, type, rating, isPremium, id} = offer;
  const ratingStyle = {
    width: `${rating * 20}%`,
  };

  const dispatch = useAppDispatch();
  const linkRoute = generatePath(AppRoute.Room, {id: String(id)});

  const mouseOverHandler = () => dispatch(setActiveCard(id));
  const mouseLeaveHandler = () => dispatch(setActiveCard(SELECT_CARD_DEFAULT));
  const onClickHandler = () => window.scrollTo(0,0);

  return (
    <article className={`${className}__card place-card`}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={linkRoute} onClick={onClickHandler}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#top">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlacesCard;
