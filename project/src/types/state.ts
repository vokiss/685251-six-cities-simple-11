import { AuthorizationStatus, City } from '../const';
import {store} from '../store/index';
import { CurrentOfferData, Offers } from './offers';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type OffersData = {
  offers: Offers;
  isOffersLoading: boolean;
  currentOffer: CurrentOfferData;
}

export type AppProcess = {
  city: City;
  sortType: string;
  activeCard: number | undefined;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
