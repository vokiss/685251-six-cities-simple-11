import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appActionProcess } from './app-process/app-process';
import { dataProcess } from './data-process/data-proscess';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.App]: appActionProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
