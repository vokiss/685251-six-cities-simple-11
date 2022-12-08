import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentOfferData = (state: State) => state[NameSpace.Data].currentOffer;
export const getOffersData = (state: State) => state[NameSpace.Data].offers;
export const getOffersIsLoading = (state: State) => state[NameSpace.Data].isOffersLoading;
