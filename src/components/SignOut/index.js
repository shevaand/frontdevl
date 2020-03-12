import React from 'react';
import {NavLink} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
      <NavLink to={ROUTES.SIGN_IN} >Sign Out</NavLink>
  </button>
);

export default withFirebase(SignOutButton);
