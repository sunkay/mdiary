/*
var React = require('react');
var ReactRouter = require('react-router');
var createHashHistory = require('history/lib/createHashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
module.exports = (
  <Router history={createHashHistory()}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);
*/

import React from 'react';
import {Router, Route} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Main from './components/main';
import Test from './components/test';


export default(
    <Router history={createHashHistory()}>
      <Route path="/" component={Main}>
        <Route path="test" component={Test} />
      </Route>
    </Router>
);
