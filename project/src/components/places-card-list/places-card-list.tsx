import { Offers } from '../../types/offers';
import PlacesCard from '../places-card';

type PlacesCardListProps = {
  offers: Offers;
  activeCard: number;
  onSelectCard: (id:number) => void;
  className: string;
}

function PlacesCardList(props: PlacesCardListProps): JSX.Element {
  const {offers, activeCard, onSelectCard, className} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlacesCard key={offer.id} offer={offer} activeCard={activeCard} onSelectCard={onSelectCard} className={className} />)}
    </div>
  );
}
export default PlacesCardList;
