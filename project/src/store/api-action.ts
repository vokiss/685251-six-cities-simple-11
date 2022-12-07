import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { Offers, Offer} from '../types/offers';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import {AppDispatch, State} from '../types/state';
import { loadCurrentOfferData, loadOffersServer, loadUserData, requireAuthorization, sendReview, setCurrentOfferDataLoadingStatus, setOffersDataLoadingStatus } from './action';
import {saveToken, dropToken} from '../services/token';
import { Reviews, UserReview } from '../types/review';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffersServer(data));
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOfferAction',
  async (id, {dispatch, extra: api}) => {
    dispatch(setCurrentOfferDataLoadingStatus(true));
    const { data: offerData } = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
    const { data: reviewsData } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    const { data: nearbyOffersData } = await api.get<Offers>(`${APIRoute.Hotels}/${id}/nearby`);
    dispatch(loadCurrentOfferData({
      offer: offerData,
      reviews: reviewsData,
      nearbyOffers: nearbyOffersData,
      isLoading: false
    }));
  },
);

export const sendReviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({ id, rating, comment }, { dispatch, extra: api }) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(sendReview(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserData(data));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
