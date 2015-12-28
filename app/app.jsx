import React from 'react';
import {render} from 'react-dom';
import {createHistory} from 'history';
import { syncReduxAndRouter } from 'redux-simple-router'
import Root from './containers/Root'
import configureStore from './create-redux-store'
import {monitorAuth} from './actions/authActions'
import history from './history';

const store = configureStore();
store.dispatch(monitorAuth());

//const history = createHistory();
syncReduxAndRouter(history, store);

render(
  <Root store={store} history={history}/>,
  document.querySelector('.component-replace')
);
