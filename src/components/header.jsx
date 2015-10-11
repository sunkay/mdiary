var React = require('react');
var ReactRouter = require('react-router');
var Time = require('react-time');

module.exports = React.createClass({
    render: function(){
      var now = new Date();
      now.setHours(now.getHours() + 4);
      return (
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper">
            <a id="logo-container" href="#" className="brand-logo"> mDiary </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <p><Time value={now} format="MM.DD HH:mm" /></p>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
});
