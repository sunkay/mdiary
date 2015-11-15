import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Home from './components/home';
import Terms from './components/org/terms';
import about from './components/org/about';
import Privacy from './components/org/privacy';
import ConditionsAddContainer from'./containers/conditions-add-container';

import {Provider} from 'react-redux';
import createStore from './create-redux-store'

const store = createStore();

export default(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="about" component={about} />
        <Route path="terms" component={Terms} />
        <Route path="privacy" component={Privacy} />
        <Route path="condition-add" component={ConditionsAddContainer} />
      </Route>
    </Router>
  </Provider>
);
