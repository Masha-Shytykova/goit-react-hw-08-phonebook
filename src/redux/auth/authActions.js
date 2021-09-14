import { createAction } from '@reduxjs/toolkit';

export const userRegisterReguests = createAction('auth/registerRequests');
export const userRegisterSuccess = createAction('auth/registerSuccess');
export const userRegisterError = createAction('auth/registerError');

export const userLoginReguests = createAction('auth/loginRequests');
export const userLoginSuccess = createAction('auth/loginSuccess');
export const userLoginError = createAction('auth/loginError');

export const userLogOutReguests = createAction('auth/logOutRequests');
export const userLogOutSuccess = createAction('auth/logOutSuccess');
export const userLogOutError = createAction('auth/logOutError');

export const userRefreshReguests = createAction('auth/refreshRequests');
export const userRefreshSuccess = createAction('auth/refreshSuccess');
export const userRefreshError = createAction('auth/refreshError');
