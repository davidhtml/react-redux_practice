import * as types from './actionTypes';

const DEFAULT_ERROR = types.SET_PRODUCTS_ERROR;

const INITIAL_STATE = {
  favorite: [],
  checkout: [],
  data: [],
  error: null,
  fetching: false,
};

export default (state = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case types.ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, data],
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        checkout: [...state.checkout, data],
      };
    case types.GET_PRODUCTS:
      return {
        ...state,
        fetching: true,
      };
    case types.SET_PRODUCTS:
      return {
        ...state,
        data,
        fetching: false,
      };
    case types.SET_PRODUCTS_ERROR:
      return {
        ...state,
        error: DEFAULT_ERROR,
        fetching: false,
      };
    case types.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter(card => data !== card),
      };
    case types.REMOVE_FROM_CHECKOUT:
      return {
        ...state,
        checkout: state.checkout.filter(card => data !== card),
      };
    default:
      return state;
  }
};
