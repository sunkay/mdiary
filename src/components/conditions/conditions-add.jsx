var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ConditionsActions = require('../../actions/conditionsActions');

var History = require('react-router').History;


module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      title: "",
      description: ""
    };
  },

  handleSubmit: function(e){
    e.preventDefault();
    console.log("in handleSubmit: title= "+this.state.title+ " desc: "+this.state.description);

    ConditionsActions.addCondition(this.state);

    this.history.pushState(null, '/');
  },

  render: function(){
    return (
      <div id="basic-form" className="section">
        <div className="row">
          <div className="col s12 m12 l6">
            <div className="card-panel">
              <h4 className="header2">Condition</h4>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        placeholder="Enter title"
                        id="name2"
                        type="text"
                        valueLink={this.linkState('title')}/>
                      <label htmlFor="title" className="active">Title</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        placeholder="Enter description of the condition"
                        id="message2"
                        className="materialize-textarea"
                        valueLink={this.linkState('description')}
                        >

                      </textarea>
                      <label htmlFor="description" className="active">Description</label>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <button className="btn cyan waves-effect waves-light right"
                          onClick={this.handleSubmit}
                          type="submit"
                          name="action">Submit
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
