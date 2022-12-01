import {createAction} from '@reduxjs/toolkit';
import { City, Offers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCityOffers = createAction(
  'offers/changeCity',
  (city: City) => ({
    payload:city,
  })
);

export const changeSortType = createAction(
  'changeSortType',
  (value: string) => ({
    payload: value })
);

export const loadOffersServer = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus, })
);

export const setOffersDataLoadingStatus = createAction<boolean>
('data/setOffersDataLoadingStatus');

export const loadUserData = createAction('user/loadUserData', (value: UserData) => ({ payload: value }));

