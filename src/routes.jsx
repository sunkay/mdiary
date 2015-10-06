import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';

import Main from './components/main';
import Test from './components/test';
import Home from './components/home';

let history = new createHashHistory();

export default(
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="test" component={Test} />
      </Route>
    </Router>
);
