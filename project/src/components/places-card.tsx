import { Offer } from '../types/offers';
import {useState} from 'react';
import { Link } from 'react-router-dom';


type PlacesCardProps = {
  offer: Offer;
}

function PlacesCard (props: PlacesCardProps): JSX.Element {
  const {offer} = props;
  const {previewImage, price, title, type, rating, isPremium, id} = offer;
  const ratingStyle = {
    width: `${rating * 20}%`,
  };
  const [activePlaceCard, setActivePlaceCard] = useState(0);
  const mouseOverHandler = () => setActivePlaceCard(id);

  return (
    <article className="cities__card place-card"
      onMouseOver={mouseOverHandler}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${activePlaceCard}`}>
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
