import { Offers } from '../../types/offers';
import PlacesCard from '../places-card';

type PlacesCardListProps = {
  offers: Offers;
}

function PlacesCardList(props: PlacesCardListProps): JSX.Element {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlacesCard key={offer.id} offer={offer} />)}
    </div>
  );
}
export default PlacesCardList;
