import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import PlacesCardList from '../../components/places-card-list/places-card-list';
import Map from '../../components/map-leaflet/map';
import {useAppSelector} from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import SortForm from '../../components/sort-form/sort-form';
import { SortTypes } from '../../const';
import { Offers } from '../../types/offers';
import { getCity, getSortType } from '../../selector';
import Header from '../../components/header/header';

type MainPageProps = {
  activeCard: number;
  onSelectCard: (id: number) => void;
}

function MainPage({activeCard, onSelectCard}: MainPageProps): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const offersRedux = useAppSelector((state) => state.offers);

  const getSortedOffers = (items: Offers, sortType: string) => {
    switch (sortType) {
      case SortTypes.Popular:
        return items;
      case SortTypes.PriceToHigh:
        return items.sort((offerB, offerA) => offerB.price - offerA.price);
      case SortTypes.PriceToLow:
        return items.sort((offerB, offerA) => offerA.price - offerB.price);
      case SortTypes.TopRatedFirst:
        return items.sort((offerB, offerA) => offerA.rating - offerB.rating);
    } return items;
  };


  const cityOffers = getSortedOffers(
    offersRedux.filter((offer) => offer.city.name === currentCity.name), useAppSelector(getSortType)
  );

  return (
    <div>
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <Header />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {currentCity.name}</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                <PlacesCardList
                  offers={cityOffers}
                  activeCard={activeCard}
                  onSelectCard={onSelectCard}
                  className={'cities'}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} offers={cityOffers} activeCard={activeCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>


  );
}

export default MainPage;
