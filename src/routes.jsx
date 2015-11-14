import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Home from './components/home';
import Terms from './components/org/terms';
import about from './components/org/about';
import Privacy from './components/org/privacy';
import ConditionsAdd from'./components/conditions/conditions-add';


export default(
  <Router>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={about} />
      <Route path="terms" component={Terms} />
      <Route path="privacy" component={Privacy} />
      <Route path="condition-add" component={ConditionsAdd} />
    </Route>
  </Router>
);
