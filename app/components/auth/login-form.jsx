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

  componentWillMount: function(){
    if(this.props.conditions)
      this.replaceState(this.props.conditions);
  },

  componentWillReceiveProps: function(props){
    if(props.conditions)
      this.replaceState(props.conditions);
  },

  handleLogin: function(e){
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
              <h4 className="header2">Login</h4>
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
                        <button id="login-form-submit"
                          className="btn cyan waves-effect waves-light right"
                          onClick={this.handleLogin}
                          type="submit"
                          name="action">Login
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
