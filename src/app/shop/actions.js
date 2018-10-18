import * as types from './actionTypes';

const ENDPOINT =
  'https://boiling-reaches-93648.herokuapp.com/food-shop/products';

// const DEFAULT_ERROR = types.SET_PRODUCTS_ERROR;
// const setProductsError = () => ({
//   type: types.SET_PRODUCTS_ERROR,
//   data: DEFAULT_ERROR,
// });

// const setProducts = data => ({ type: types.SET_PRODUCTS, data });

const addToCart = data => ({ type: types.ADD_TO_CART, data });
const addToFavorite = data => ({ type: types.ADD_TO_FAVORITE, data });

const getProducts = () => dispatch => {
  dispatch({ type: types.GET_PRODUCTS });
  fetch(ENDPOINT)
    .then(resp => resp.json())
    .then(data => dispatch({ type: types.SET_PRODUCTS, data }))
    .catch(() => dispatch({ type: types.SET_PRODUCTS_ERROR }));
};

const removeFromArr = data => ({
  type: types.REMOVE_FROM_FAVORITE,
  data,
});

const removeFromArrCheckout = data => ({
  type: types.REMOVE_FROM_CHECKOUT,
  data,
});

export {
  addToCart,
  addToFavorite,
  getProducts,
  removeFromArr,
  removeFromArrCheckout,
};
