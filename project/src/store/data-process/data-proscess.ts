import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { sortReviews } from '../../services/utils';
import { OffersData } from '../../types/state';
import { fetchCurrentOfferAction, fetchOffersAction, sendReviewAction } from '../api-action';

const initialState: OffersData = {
  offers: [],
  isOffersLoading: false,
  currentOffer: {
    offer: null,
    reviews: [],
    reviewsIsLoading: false,
    nearbyOffers: [],
    isLoading: false,
  },
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.currentOffer.isLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        sortReviews(state.currentOffer.reviews);
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.currentOffer.reviewsIsLoading = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.currentOffer.reviews = sortReviews(action.payload);
        state.currentOffer.reviewsIsLoading = false;
      });
  }
});
