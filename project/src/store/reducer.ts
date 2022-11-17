import {createReducer} from '@reduxjs/toolkit';
import {changeCityOffers, changeSortType, loadOffersAction} from './action';
import { City, Offers } from '../types/offers';
import { SortTypes, START_CITY } from '../const';
import { offers } from '../mocks/offers';

type State = {
  city: City;
  offers: Offers;
  sortType: string;
}

const initialState: State = {
  city: START_CITY,
  offers: offers,
  sortType: SortTypes.Popular
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityOffers, (state, action) => {
      state.city = action.payload;
      state.offers = offers.filter((offer) => offer.city.name === state.city.name);

    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) =>{
      state.sortType = action.payload;
    });
});

export {reducer};
