import * as types from './actionTypes';

const DEFAULT_ERROR = types.SET_PRODUCTS_ERROR;

const addToCart = data => ({ type: types.ADD_TO_CART, data });

const addToFavorite = data => ({ type: types.ADD_TO_FAVORITE, data });

const setProducts = data => ({ type: types.SET_PRODUCTS, data });

const removeFromArr = data => ({
  type: types.REMOVE_FROM_FAVORITE,
  data,
});

const removeFromArrCheckout = data => ({
  type: types.REMOVE_FROM_CHECKOUT,
  data,
});

const setProductsError = () => ({
  type: types.SET_PRODUCTS_ERROR,
  data: DEFAULT_ERROR,
});

const actions = {
  addToCart,
  addToFavorite,
  setProducts,
  setProductsError,
  removeFromArr,
  removeFromArrCheckout,
};

export default actions;
