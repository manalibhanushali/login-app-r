import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});
