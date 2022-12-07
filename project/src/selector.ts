import { State } from './types/state';

export const getSortType = (state: { sortType: string }) => state.sortType;
export const getCurrentOfferData = (state: State) => state.currentOffer;
export const getCity = (state: State) => state.city;
