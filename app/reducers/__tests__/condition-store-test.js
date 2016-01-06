import expect from 'expect';
import {conditions} from '../condition-store';
import * as types from '../../constants';

describe('Reducer test suite', () => {

  it('should return the initial state', () =>{
    expect(
      conditions(undefined, {})
    ).toEqual({});

  });

  it('should return the REQUEST_CONDITIONS state', () =>{
    expect(
      conditions({}, {
        type: 'REQUEST_CONDITIONS',
      })
    ).toEqual({
      isFetching: true
    });

  });


  it('should return the initial state', () =>{

    expect(
      conditions({}, {
        type: 'RECEIVE_CONDITIONS',
        items: undefined,
        lastUpdated: undefined
      })
    ).toEqual(
      {
        isFetching: false,
        items: undefined,
        lastUpdated: undefined
      }
    );

  });

});
