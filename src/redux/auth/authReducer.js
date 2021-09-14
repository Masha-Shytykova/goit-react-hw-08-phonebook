import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  userLoginSuccess,
  userLogOutSuccess,
  userRefreshError,
  userRefreshReguests,
  userRefreshSuccess,
  userRegisterSuccess,
} from './authActions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const userReducer = createReducer(initialState.user, {
  [userRegisterSuccess]: (_, { payload }) => payload.user,
  [userLoginSuccess]: (_, { payload }) => payload.user,
  [userLogOutSuccess]: () => initialState.user,
  [userRefreshSuccess]: (_, { payload }) => payload,
});

const tokenReducer = createReducer(null, {
  [userRegisterSuccess]: (_, { payload }) => payload.token,
  [userLoginSuccess]: (_, { payload }) => payload.token,
  [userLogOutSuccess]: () => null,
});

const isLoggedInReducer = createReducer(false, {
  [userRegisterSuccess]: () => true,
  [userLoginSuccess]: () => true,
  [userLogOutSuccess]: () => false,
  [userRefreshSuccess]: () => true,
});

const isRefreshReducer = createReducer(false, {
  [userRefreshReguests]: () => true,
  [userRefreshSuccess]: () => false,
  [userRefreshError]: () => false,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: isLoggedInReducer,
  isRefresh: isRefreshReducer,
});

export default authReducer;
