import {createReducer} from '@reduxjs/toolkit';
import {changeCityOffers, changeSortType, loadOffersServer, requireAuthorization, setOffersDataLoadingStatus} from './action';
import { City, Offers } from '../types/offers';
import { AuthorizationStatus, SortTypes, START_CITY } from '../const';

type InititalState = {
  city: City;
  offers: Offers;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
}

const initialState: InititalState = {
  city: START_CITY,
  offers: [],
  sortType: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityOffers, (state, action) => {
      state.city = action.payload;
      // state.offers = offers.filter((offer) =>
      //   offer.city.name === state.city.name);
    })
    .addCase(changeSortType, (state, action) =>{
      state.sortType = action.payload;
    })
    .addCase(loadOffersServer, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer};
