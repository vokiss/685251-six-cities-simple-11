import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortTypes, START_CITY } from '../../const';
import { AppProcess } from '../../types/state';
import { City, } from '../../types/offers';

const initialState: AppProcess = {
  city: START_CITY,
  activeCard: undefined,
  sortType: SortTypes.Popular
};

export const appActionProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCityOffers: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortTypes>) => {
      state.sortType = action.payload;
    },
    setActiveCard: (state, action: PayloadAction<number>) => {
      state.activeCard = action.payload;
    }
  }
});

export const { changeCityOffers, setActiveCard, changeSortType } = appActionProcess.actions;
