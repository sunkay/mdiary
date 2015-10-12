var React = require('react');
var ReactRouter = require('react-router');
var Time = require('react-time');
var IndexLink = ReactRouter.IndexLink;
var Link = ReactRouter.Link;

module.exports = React.createClass({
  componentDidMount: function() {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  },
  render: function(){
    var now = new Date();
    now.setHours(now.getHours() + 4);
    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper">
          <Link id="logo-container" to="/" className="center brand-logo"> mDiary </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <p><Time value={now} format="MM.DD HH:mm" /></p>
            </li>
          </ul>

          <a href="#" data-activates="slide-out" className="button-collapse show-on-large" >
            <i className="mdi-navigation-menu"></i>
          </a>
          <ul id="slide-out" className="side-nav">
            <li>
              <Link to="/" className="center waves-effect waves-teal btn-flat">
                M
              </Link>
            </li>
            <li><hr/></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>

        </div>
      </nav>
    );
  }
});
