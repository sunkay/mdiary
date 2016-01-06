import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import * as actions from '../authActions';
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER
} from '../../constants';

describe('Auth Actions test suite', () => {

  it('should create a login user action type', () => {
    var email;
    const expectedAction = {
      type: LOGIN_USER,
      email: email
    }

    expect(actions.loginUserAction()).toEqual(expectedAction);
  });

  it('should create a logout user action ', () => {
    const expectedAction = {
      type: LOGOUT_USER,
    }

    expect(actions.logoutUserAction()).toEqual(expectedAction);
  });

});
