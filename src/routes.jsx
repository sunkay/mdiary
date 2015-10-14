var React = require('react');
var ReactRouter = require('react-router');
var createHashHistory =  require('history').createHashHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('./components/main');
var Home = require('./components/home');
var Terms = require('./components/org/terms');
var about = require('./components/org/about');
var Privacy = require('./components/org/privacy');
var ConditionsAdd = require('./components/conditions/conditions-add');


var history = createHashHistory();

export default(
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={about} />
      <Route path="terms" component={Terms} />
      <Route path="privacy" component={Privacy} />
      <Route path="condition-add" component={ConditionsAdd} />
    </Route>
  </Router>
);
