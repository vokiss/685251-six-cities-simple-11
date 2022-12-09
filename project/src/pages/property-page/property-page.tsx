import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import Map from '../../components/map-leaflet/map';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, MAX_OFFER_IMAGES_COUNT, MAX_REVIEW_COUNT} from '../../const';
import PropertyPhoto from '../../components/property-gallery-photo/property-gallery-photo';
import PlacesCardList from '../../components/places-card-list/places-card-list';
import PropertyReviewForm from '../../components/property-reviews/property-review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { fetchCurrentOfferAction } from '../../store/api-action';
import { useEffect } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import { getAuthStatus } from '../../store/user-process/selector';
import { getCurrentOfferData } from '../../store/data-process/selector';

function PropertyPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const isLogged = useAppSelector(getAuthStatus) === AuthorizationStatus.Auth;

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOfferAction(id));
    }
  }, [id, dispatch]);

  const { offer, nearbyOffers, isLoading, reviews } = useAppSelector(getCurrentOfferData);
  const showReviews = reviews.slice(0, MAX_REVIEW_COUNT);

  if (isLoading) { return <LoadingScreen />; }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const { images, price, title, type, rating, isPremium, bedrooms, maxAdults, goods,
    description, host} = offer;
  const ratingStyle = {
    width: `${rating * 20}%`,
  };

  return (
    <div>
      <Helmet>
        <title>Property offer</title>
      </Helmet>
      <div className="page">
        <div style={{display: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
        </div>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <Header/>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, MAX_OFFER_IMAGES_COUNT).map((image) => <PropertyPhoto key={image} image={image} />)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={ratingStyle} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((feature) => <li className="property__inside-item" key={feature}>{feature}</li> )}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host?.avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {host.isPro && (
                      <span className="property__user-status">
                    Pro
                      </span>)}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews · <span className="reviews__amount">{showReviews.length}</span></h2>
                  <PropertyReviews reviews={showReviews}/>
                  {isLogged && <PropertyReviewForm id={offer.id} />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={[...nearbyOffers, offer]} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <PlacesCardList offers={nearbyOffers} className={'near-places'}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>

  );
}

export default PropertyPage;
