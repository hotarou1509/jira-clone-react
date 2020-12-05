import { applyMiddleware, combineReducers, createStore } from 'redux';
import HistoryReducer from './reducers/HistoryReducer';
import UserLoginJiraReducer from './reducers/UserJiraReducer';
import ProjectCategoryReducer from './reducers/ProjectCategoryReducer';

/* Middleware saga */
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
const middleWaraSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
	HistoryReducer,
	UserLoginJiraReducer,
	ProjectCategoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(middleWaraSaga));

/* Call saga */
middleWaraSaga.run(rootSaga);

export default store;
