import { all } from 'redux-saga/effects';
import * as JiraSaga from './UserJiraSaga';

export function* rootSaga() {
	yield all([JiraSaga.listenSignin()]);
}
