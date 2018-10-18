import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

// to create redux store
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
