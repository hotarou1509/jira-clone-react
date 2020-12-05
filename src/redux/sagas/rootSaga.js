import { all } from 'redux-saga/effects';
import * as JiraSaga from './UserJiraSaga';
import * as ProjectCategorySaga from './ProjectCategorySaga';
import * as ProjectSaga from './ProjectSaga';

export function* rootSaga() {
	yield all([
		JiraSaga.listenSignin(),
		ProjectCategorySaga.listenAllProjectCategory(),
		ProjectSaga.listenCreateProjectSaga(),
	]);
}
