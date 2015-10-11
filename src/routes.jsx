var React = require('react');
var ReactRouter = require('react-router');
var createHashHistory =  require('history').createHashHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('./components/main');
var Test = require('./components/test');
var Home = require('./components/home');

var history = createHashHistory();

export default(
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="test" component={Test} />
      </Route>
    </Router>
);
