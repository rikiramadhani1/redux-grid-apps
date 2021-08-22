import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import gridReducer from '../features/Grid/reducer'; // <--- import dulu reducer yang akan dipakai
import thunk from 'redux-thunk';


// ------ GABUNGKAN REDUCERS --------
let rootReducers = combineReducers({
  grid: gridReducer // <--- berikan nama state untuk reducer `gridReducer`, misalnya `grid`
});
// ------ END GABUNGKAN REDUCERS -------

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk))); // <--- buat store memanfaatkan fungsi createStore

export default store;