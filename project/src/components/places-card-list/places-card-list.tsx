import { Offers } from '../../types/offers';
import PlacesCard from '../places-card';

type PlacesCardListProps = {
  offers: Offers;
  className: string;
}

function PlacesCardList(props: PlacesCardListProps): JSX.Element {
  const {offers, className} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlacesCard key={offer.id} offer={offer} className={className} />)}
    </div>
  );
}
export default PlacesCardList;
