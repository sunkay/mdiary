var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var History = require('react-router').History;


module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      email: "",
      password: ""
    };
  },

  handleRegister: function(e){
    e.preventDefault();

    this.props.onSubmit(this.state.email, this.state.password);

    //this.history.pushState(null, '/');
  },

  render: function(){

    return (
      <div id="basic-form" className="section">
        <div className="row">
          <div className="col s12 m12 l6">
            <div className="card-panel">
              <h4 className="header2">Sign Up</h4>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        valueLink={this.linkState('email')}/>
                      <label htmlFor="email" className="active">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        valueLink={this.linkState('password')}/>
                      <label htmlFor="password" className="active">Password</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <button className="btn cyan waves-effect waves-light right"
                          onClick={this.handleRegister}
                          type="submit"
                          name="action">Sign Up
                          <i className="mdi-content-send right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
