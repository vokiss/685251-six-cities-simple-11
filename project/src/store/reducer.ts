import {createReducer} from '@reduxjs/toolkit';
import {changeCityOffers, changeSortType, loadOffersServer, loadUserData, requireAuthorization, setOffersDataLoadingStatus} from './action';
import { City, Offers } from '../types/offers';
import { AuthorizationStatus, SortTypes, START_CITY } from '../const';
import { UserData } from '../types/user-data';

type InititalState = {
  city: City;
  offers: Offers;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  userData: UserData | null;
}

const initialState: InititalState = {
  city: START_CITY,
  offers: [],
  sortType: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  userData: null
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
