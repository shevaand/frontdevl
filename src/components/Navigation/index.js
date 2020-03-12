import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import s from './navigate.module.css'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
     <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={ROUTES.POST} activeClassName={s.activeLink}>Posts</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={ROUTES.MESSAGE} activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={ROUTES.ACCOUNT} activeClassName={s.activeLink}>Account</NavLink>
      </div>
      {authUser.roles.includes(ROLES.ADMIN) && (
      <div className={s.item}>
        <NavLink to={ROUTES.ADMIN} activeClassName={s.activeLink}>Admin</NavLink>
      </div>
      )}
      <div className={s.item}>
        <SignOutButton />
      </div>
    </nav>
);

const NavigationNonAuth = () => (
<nav className={s.signin}>
    <div className={s.signitem}>
      <NavLink to={ROUTES.SIGN_IN} activeClassName={s.activeLink}>Sign In</NavLink>
    </div>
</nav>
);

export default Navigation;