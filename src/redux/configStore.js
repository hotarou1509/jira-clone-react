import { applyMiddleware, combineReducers, createStore } from 'redux';

/* Middleware saga */
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
const middleWaraSaga = createMiddleWareSaga();

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(middleWaraSaga));

/* Call saga */
middleWaraSaga.run(rootSaga);

export default store;
