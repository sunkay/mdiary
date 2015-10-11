var React = require('react');

module.exports = React.createClass({
    render: function(){
      console.log("In Home render");

      return (
        <div className="row">
          <div className="col s12 m4 l3">
              <a href="test">TEST</a>
                <a href="test">TEST</a>
                  <a href="test">TEST</a>
                    <a href="test">TEST</a>
                      <a href="test">TEST</a>
          </div>

          <div className="col s12 m8 l9"> 
              <ul className="collection">
                 <li className="collection-item">Alvin</li>
                 <li className="collection-item">Alvin</li>
                 <li className="collection-item">Alvin</li>
                 <li className="collection-item">Alvin</li>
               </ul>
          </div>

        </div>
      );
    }
});
