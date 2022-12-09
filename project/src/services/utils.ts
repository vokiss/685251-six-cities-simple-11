import dayjs from 'dayjs';
import { Reviews } from '../types/review';

export const humanizeDate = (date: string) => dayjs(date).format('MMMM YYYY');
export const sortReviews = (reviews: Reviews) => reviews.sort((reviewA, reviewB) => dayjs(reviewB.date).diff(dayjs(reviewA.date)));
export const validPassword = new RegExp('^(?=.*[1-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}$');
