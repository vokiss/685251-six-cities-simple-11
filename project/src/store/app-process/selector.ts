import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State) => state[NameSpace.App].city;

export const getActiveCard = (state: State) => state[NameSpace.App].activeCard;

export const getSortType = (state: State) => state[NameSpace.App].sortType;
