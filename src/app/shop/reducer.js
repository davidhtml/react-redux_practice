import * as types from './actionTypes';

const INITIAL_STATE = {
  favorite: [],
  checkout: [],
  data: [],
  error: null,
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
    case types.SET_PRODUCTS:
      return {
        ...state,
        data,
      };
    case types.SET_PRODUCTS_ERROR:
      return {
        ...state,
        error: data,
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
