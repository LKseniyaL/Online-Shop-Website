import {applyMiddleware, combineReducers, createStore} from 'redux';
import {categoryReducer }from '../store/reducer/categoryReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';
import { basketReducer } from './reducer/basketReducer';
 
const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    basket: basketReducer
 });

 export const store = createStore(rootReducer, applyMiddleware(thunk));