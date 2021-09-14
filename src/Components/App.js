import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';
import { userLogOut, userRefresh } from '../redux/auth/authOperations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomeView = lazy(() =>
  import('../views/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('../views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('../views/LoginView' /* webpackChunkName: "login-page" */),
);
const ContactsView = lazy(() =>
  import('../views/ContactsView' /* webpackChunkName: "contacts-page" */),
);

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);
  const isRefresh = useSelector(authSelectors.getIsRefresh);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <>
      {isRefresh ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <nav className="container navContainer ">
            <NavLink exact to="/" className="link" activeClassName="activeLink">
              Phonebook
            </NavLink>

            {!isLoggedIn ? (
              <div>
                <NavLink
                  to="/register"
                  className="link"
                  activeClassName="activeLink"
                >
                  SignUp
                </NavLink>
                <NavLink
                  to="/login"
                  className="link"
                  activeClassName="activeLink"
                >
                  LogIn
                </NavLink>
              </div>
            ) : (
              <div>
                <span className="navText">Welcome, {name}</span>
                <button
                  className="button"
                  type="button"
                  onClick={() => dispatch(userLogOut())}
                >
                  LogOut
                </button>
              </div>
            )}
          </nav>

          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register">
                <RegisterView />
              </PublicRoute>
              <PublicRoute exact path="/login">
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
