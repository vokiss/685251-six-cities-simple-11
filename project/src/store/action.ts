import {createAction} from '@reduxjs/toolkit';
import { City, CurrentOfferData, Offers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/review';

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

export const loadCurrentOfferData = createAction('data/loadCurrentOffer', (value: CurrentOfferData) => ({ payload: value }));

export const sendReview = createAction('data/sendReview', (value: Reviews) => ({ payload: value }));

export const setCurrentOfferDataLoadingStatus = createAction('data/setCurrentOfferLoadingStatus', (value: boolean) => ({ payload: value }));
