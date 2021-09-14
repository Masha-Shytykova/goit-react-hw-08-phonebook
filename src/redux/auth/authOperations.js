import {
  userLoginApi,
  userLogOutApi,
  userRefreshApi,
  userRegisterApi,
} from '../../apiServices';
import {
  userLoginError,
  userLoginReguests,
  userLoginSuccess,
  userLogOutError,
  userLogOutReguests,
  userLogOutSuccess,
  userRefreshError,
  userRefreshReguests,
  userRefreshSuccess,
  userRegisterError,
  userRegisterReguests,
  userRegisterSuccess,
} from './authActions';

export const userRegister =
  ({ name, email, password }) =>
  async dispatch => {
    dispatch(userRegisterReguests());
    try {
      const userReg = await userRegisterApi({ name, email, password });
      dispatch(userRegisterSuccess(userReg));
    } catch (error) {
      dispatch(userRegisterError(error));
    }
  };

export const userLogin =
  ({ email, password }) =>
  async dispatch => {
    dispatch(userLoginReguests());
    try {
      const userLog = await userLoginApi({ email, password });
      dispatch(userLoginSuccess(userLog));
    } catch (error) {
      dispatch(userLoginError(error));
    }
  };

export const userLogOut = () => async dispatch => {
  dispatch(userLogOutReguests());
  try {
    await userLogOutApi();
    dispatch(userLogOutSuccess());
  } catch (error) {
    dispatch(userLogOutError(error));
  }
};

export const userRefresh = () => async (dispatch, getState) => {
  const persistedToken = getState().auth.token;
  if (persistedToken === null) {
    return;
  }
  dispatch(userRefreshReguests());
  try {
    const userRefresh = await userRefreshApi(persistedToken);
    dispatch(userRefreshSuccess(userRefresh));
  } catch (error) {
    dispatch(userRefreshError(error));
  }
};
