var React = require('react');
var ReactRouter = require('react-router');
var Time = require('react-time');
var IndexLink = ReactRouter.IndexLink;
var Link = ReactRouter.Link;

module.exports = React.createClass({
  componentDidMount: function() {
    $(".button-collapse").sideNav();
  },
  render: function(){
    var now = new Date();
    now.setHours(now.getHours() + 4);
    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper">
          <Link id="logo-container" to="/" className="brand-logo"> mDiary </Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li>
              <p><Time value={now} format="MM.DD HH:mm" /></p>
            </li>
          </ul>

          {/* Responsive hamburger menu on small screens */}
          <a href="#" data-activates="slide-out" className="button-collapse" >
            <i className="mdi-navigation-menu"></i>
          </a>
          <ul id="slide-out" className="side-nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>

        </div>
      </nav>
    );
  }
});
