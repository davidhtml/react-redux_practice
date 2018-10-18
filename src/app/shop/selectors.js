import { NAME } from './constants';

export const getProducts = state => state[NAME].data;
export const getFavorite = state => state[NAME].favorite;
export const getCheckout = state => state[NAME].checkout;
export const getError = state => state[NAME].error;
export const isFething = state => state[NAME].fetching;
