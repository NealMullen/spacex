import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '../reducers'
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState ={};

const store = createStore(allReducers,initialState,composeEnhancers(applyMiddleware(thunk)));

export default store;