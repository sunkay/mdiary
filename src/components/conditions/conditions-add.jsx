var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e){
    console.log("in handleSubmit");
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
                      <input placeholder="Enter title" id="name2" type="text"/>
                      <label htmlFor="first_name" className="active">Title</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea placeholder="Enter description of the condition" id="message2" className="materialize-textarea"></textarea>
                      <label htmlFor="message" className="active">Description</label>
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
