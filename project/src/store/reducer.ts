import {createReducer} from '@reduxjs/toolkit';
import {changeCityOffers, changeSortType, loadCurrentOfferData, loadOffersServer, loadUserData, requireAuthorization, sendReview, setCurrentOfferDataLoadingStatus, setOffersDataLoadingStatus} from './action';
import { City, CurrentOfferData, Offers } from '../types/offers';
import { AuthorizationStatus, SortTypes, START_CITY } from '../const';
import { UserData } from '../types/user-data';

type InititalState = {
  city: City;
  offers: Offers;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  userData: UserData | null;
  currentOffer: CurrentOfferData;
}

const initialState: InititalState = {
  city: START_CITY,
  offers: [],
  sortType: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  userData: null,
  currentOffer: {
    offer: null,
    reviews: [],
    nearbyOffers: [],
    isLoading: false,
  }
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityOffers, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) =>{
      state.sortType = action.payload;
    })
    .addCase(loadOffersServer, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadCurrentOfferData, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setCurrentOfferDataLoadingStatus, (state, action) => {
      state.currentOffer.isLoading = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(sendReview, (state, action) => {
      state.currentOffer.reviews = action.payload;
    });
});

export {reducer};
