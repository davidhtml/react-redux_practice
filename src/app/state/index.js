import { createStore } from 'redux';
import reducers from './reducers';

// to create redux store
const store = createStore(reducers);

export default store;
