import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from './routes';

export default class Root extends React.Component{
  render(){
    const {store, history} = this.props
    console.log("In Root Render-1");

    return(
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
