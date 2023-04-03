import { takeEvery } from "redux-saga/effects";
import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../actions/authActions';
import axios from 'axios';

function* loginSaga(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(axios.post, '/api/login', { username, password });
    const token = response.data.token;
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailure(error.response.data.error));
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
