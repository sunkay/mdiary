import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root'
import configureStore from './create-redux-store'

import {monitorAuth} from './actions/authActions'

const store = configureStore();
store.dispatch(monitorAuth());

render(
  <Root store={store} />,
  document.querySelector('.component-replace')
);
