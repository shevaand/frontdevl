import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import style from './app.module.css'

import Navigation from '../Navigation';
import PostPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import MessagePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div className={style.content}>

      <Navigation />
      
      <div className={style.wrappContent}>
        <Route exact path={ROUTES.POST} component={PostPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.MESSAGE} component={MessagePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </div>
  </Router>
);

export default withAuthentication(App);
