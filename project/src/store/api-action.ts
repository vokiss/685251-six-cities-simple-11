import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Offers, Offer, CurrentOfferData} from '../types/offers';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { State} from '../types/state';
import {saveToken, dropToken} from '../services/token';
import { Reviews, UserReview } from '../types/review';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    return data;
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<CurrentOfferData, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOfferAction',
  async (id, { extra: api}) => {
    const { data: offerData } = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
    const { data: reviewsData } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    const { data: nearbyOffersData } = await api.get<Offers>(`${APIRoute.Hotels}/${id}/nearby`);
    return {
      isLoading: false,
      reviews: reviewsData,
      reviewsIsLoading: false,
      nearbyOffers: nearbyOffersData,
      offer: offerData
    };
  },
);

export const sendReviewAction = createAsyncThunk<Reviews, UserReview, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({ id, rating, comment }, { extra: api }) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Comments}/${id}`, { comment, rating });
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, { extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
