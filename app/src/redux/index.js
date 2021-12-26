import { createStore, applyMiddleware } from 'redux';
import { goodsReducer } from './goodsReducer';
import thunk from 'redux-thunk';

export const store = createStore(goodsReducer, applyMiddleware(thunk));
