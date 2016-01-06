import expect from 'expect';
import {user} from '../user-store';
import * as types from '../../constants';

describe('User Reducer test suite', () => {

  it('should return the initial state', () =>{
    expect(
      user(undefined, {})
    ).toEqual({});

  });

  it('should return the REGISTER_USER state', () =>{
    expect(
      user({}, {
        type: 'REGISTER_USER',
      })
    ).toEqual({
      loggedIn: false,
      newUser: true
    });

  });

  it('should return the LOGIN_USER state', () =>{
    expect(
      user({}, {
        type: 'LOGIN_USER',
        email: 's@y.com'
      })
    ).toEqual({
      loggedIn: true,
      username: 's@y.com'
    });

  });

  it('should return the LOGOUT_USER state', () =>{
    expect(
      user({}, {
        type: 'LOGOUT_USER',
      })
    ).toEqual({
      loggedIn: false,
      username: ''
    });

  });


});
