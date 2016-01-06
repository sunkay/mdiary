import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import * as actions from '../conditionActions';
import {
  REQUEST_CONDITIONS,
  RECEIVE_CONDITIONS
} from '../../constants';

describe('Conditions Actions test suite', () => {

  it('should create a Request Condition action for fetch spinner ', () => {
    const expectedAction = {
      type: REQUEST_CONDITIONS
    }

    expect(actions.requestConditions()).toEqual(expectedAction);
  });

/*
  it('should create a receiveConditions action ', () => {
    var conditions = [];
    var now = Date.now();
    const expectedAction = {
      type: RECEIVE_CONDITIONS,
      conditions: conditions,
      receivedAt: now
    }

    expect(actions.receiveConditions(conditions)).toEqual(expectedAction);
  });
*/

  it('should find the right condition ', () => {

    var items = [];
    items['1'] =
    {
      id: 1,
      title: '1- Headache',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    };
    items['2'] =
    {
      id: 2,
      title: '2 - Headache',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    };
    items['3'] =
    {
      id: 3,
      title: '2 - Headache',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    };

    var mockState = {
      isFetching: true,
      items: items
    }

    var found = actions.findCondition(mockState, '2');
    var expectedState =
    {
      id: 2,
      title: '2 - Headache',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    };

    expect(found).toEqual(expectedState);
  });



});
