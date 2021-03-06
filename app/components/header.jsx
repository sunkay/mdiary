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
    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper">
          <Link id="logo-container" to="/" className="center brand-logo"> mDiary </Link>

            {this.renderLoginLinks()}

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
            <li><Link to="/condition-add">Add a Condition</Link></li>
            <li><Link to="/condition-update/1">Update a Condition</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>

        </div>
      </nav>
    );
  },

  renderLoginLinks: function(){
    //console.log("renderLoginLinks: loggedIn", this.props.loggedIn, this.props.username);
    if(this.props.loggedIn){
      return (
        <ul className="right">
          <li>
            <Link id="logout" to="/logout"> Logout </Link>
          </li>
        </ul>
      );
    } else {
        return(
          <ul className="right">
            <li>
              <Link id="login" to="/login"> Login </Link>
            </li>
            <li>
              <Link id="register" to="/register"> Sign Up </Link>
            </li>
          </ul>
        );
    }
  }
});
