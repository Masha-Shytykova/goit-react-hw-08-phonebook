import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';
import { userLogOut, userRefresh } from '../redux/auth/authOperations';

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
      <nav className="container navContainer ">
        <NavLink exact to="/" className="link" activeClassName="activeLink">
          Phonebook
        </NavLink>
        {!isLoggedIn && !isRefresh && (
          <div>
            <NavLink
              to="/register"
              className="link"
              activeClassName="activeLink"
            >
              SignUp
            </NavLink>
            <NavLink to="/login" className="link" activeClassName="activeLink">
              LogIn
            </NavLink>
          </div>
        )}
        {isLoggedIn && !isRefresh && (
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

      <Suspense fallback={<div>Loading...</div>}>
        {!isRefresh && isLoggedIn && (
          <Switch>
            <Route path="/contacts">
              <ContactsView />
            </Route>
            <Redirect to="/contacts" />
          </Switch>
        )}
        {!isRefresh && !isLoggedIn && (
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/register">
              <RegisterView />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
            <Redirect to="/" />
          </Switch>
        )}
      </Suspense>
    </>
  );
}

export default App;
