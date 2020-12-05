import { call, put, takeLatest } from 'redux-saga/effects';
import { jiraService } from '../../services/JiraServices';
import { STATUS_CODE } from '../../util/const/settingSystem';

function* createProjectSaga(action) {
	try {
		const { data, status } = yield call(() =>
			jiraService.createProjectAuthorization(action.newProject),
		);
		if (status === STATUS_CODE.SUCCESS) {
		}
	} catch (err) {
		console.log(err.response.data);
	}
}

export function* listenCreateProjectSaga() {
	yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga);
}
