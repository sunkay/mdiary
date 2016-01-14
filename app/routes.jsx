import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Home from './components/home';
import Login from './components/auth/login-form';

import Terms from './components/org/terms';
import about from './components/org/about';
import Privacy from './components/org/privacy';

//containers
import ConditionsAddContainer from'./containers/conditions-add-container';
import ConditionsUpdateContainer from'./containers/conditions-update-container';
import RegisterContainer from './containers/register-container';
import LoginContainer from './containers/login-container';
import Logout from './components/auth/logout';
import authCtx from './components/auth/auth-context';

function requireAuth(nextState, replace){
  console.log("loggedIn = ", authCtx.loggedIn());
  console.log("path = ", nextState.location.pathname);
  if(!authCtx.loggedIn())
    replace({nextPathName: nextState.location.pathname}, '/login');
}

export default(
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="about" component={about} onEnter={requireAuth}/>
    <Route path="terms" component={Terms} />
    <Route path="privacy" component={Privacy} />
    <Route path="login" component={LoginContainer} />
    <Route path="logout" component={Logout} />
    <Route path="register" component={RegisterContainer} />
    <Route path="condition-add" component={ConditionsAddContainer} />
    <Route path="condition-update/:id" component={ConditionsUpdateContainer} />
    <Route path="/:num" component={Home} />
  </Route>
);
