var React = require('react');

import {logoutUser} from '../../actions/authActions';


module.exports = React.createClass({
  componentDidMount: function(){
      logoutUser();
  },

  render: function(){
    return (
      <div className="container">
        <h3>
          You are now logged out. Thank you for visiting.
        </h3>

        <p>

        </p>

      </div>
    );
  }
});
