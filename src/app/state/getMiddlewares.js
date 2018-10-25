import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const middlewares = process.env.NODE_ENV === 'production' ?

export default applyMiddleware(thunk);
