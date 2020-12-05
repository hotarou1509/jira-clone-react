import { call, put, takeLatest } from 'redux-saga/effects';
import { jiraService } from '../../services/JiraServices';
import { STATUS_CODE } from '../../util/const/settingSystem';
import {
	GET_ALL_PROJECT_CATEGORY,
	GET_ALL_PROJECT_CATEGORY_SAGA,
} from '../const/JiraConst';

function* getAllProjectCategorySaga(action) {
	try {
		const { data, status } = yield call(() =>
			jiraService.getAllProjectCategory(),
		);
		if (status === STATUS_CODE.SUCCESS) {
			yield put({
				type: GET_ALL_PROJECT_CATEGORY,
				data: data.content,
			});
		}
	} catch (err) {
		console.log(err.response.data);
	}
}

export function* listenAllProjectCategory() {
	yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga);
}
