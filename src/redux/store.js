import { createStore } from 'redux';
import BatReducer from './batReducer';
import rootReducer from './rootReducer';

// This method is used to visualise the redux in devtools
// Add extension Redux Devtools in your browser to see this
import {composeWithDevTools} from 'redux-devtools-extension';

// If there is single reducer then it can be done easily like this
// const store = createStore(BatReducer, composeWithDevTools());

// IF multiple reducers are there then need to use rootReducer
const store = createStore(rootReducer, composeWithDevTools());



export default store;