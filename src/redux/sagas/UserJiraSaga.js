import {
	// call,
	// fork,
	// take,
	// takeEvery,
	// delay,
	// put,
	takeLatest,
} from 'redux-saga/effects';
import { jiraService } from '../../services/JiraServices';
import { TOKEN, USER_LOGIN } from '../../util/const/settingSystem';

function* signinSaga(action) {
	// yield put({
	// 	type: DISPLAY_LOADING
	// })
	// yield delay(500);
	try {
		const { data, status } = yield jiraService.signinJira(action.userLogin);
		/* Save token & userInfo to local storage */
		localStorage.setItem(TOKEN, data.content.accessToken);
		localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
	} catch (err) {
		console.log(err.response.data);
	}
	// yield put({
	// 	type: HIDE_LOADING,
	// });
}

export function* listenSignin() {
	yield takeLatest('USER_SIGNIN_API', signinSaga);
}
