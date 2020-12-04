import {
	call,
	put,
	select,
	// fork,
	// take,
	// takeEvery,
	// delay,
	takeLatest,
} from 'redux-saga/effects';
import { jiraService } from '../../services/JiraServices';
import { TOKEN, USER_LOGIN } from '../../util/const/settingSystem';
import { USER_SIGNIN_API, USLOGIN } from '../const/JiraConst';

function* signinSaga(action) {
	// yield put({
	// 	type: DISPLAY_LOADING
	// })
	// yield delay(500);
	try {
		const { data } = yield call(() =>
			jiraService.signinJira(action.userLogin),
		);
		/* Save token & userInfo to local storage */
		localStorage.setItem(TOKEN, data.content.accessToken);
		localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

		yield put({ type: USLOGIN, userLogin: data.content });

		let history = yield select((state) => state.HistoryReducer.history);
		history.push('/home');
	} catch (err) {
		console.log(err.response.data);
	}
	// yield put({
	// 	type: HIDE_LOADING,
	// });
}

export function* listenSignin() {
	yield takeLatest(USER_SIGNIN_API, signinSaga);
}
