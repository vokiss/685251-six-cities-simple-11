import {createAction} from '@reduxjs/toolkit';
import { City, Offers } from '../types/offers';

export const changeCityOffers = createAction(
  'offers/changeCity',
  (city: City) => ({
    payload:city,
  })
);

export const loadOffersAction = createAction(
  'offers/loadOffers',
  (offers: Offers) => ({
    payload: offers,
  })
);

export const changeSortType = createAction(
  'changeSortType',
  (value: string) => ({
    payload: value })
);
