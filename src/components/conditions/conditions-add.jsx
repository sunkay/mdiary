var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate"/>
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">Text Area</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
