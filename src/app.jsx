import React from 'react';
import Routes from './routes';

// material UI
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

React.render(Routes, document.querySelector('.container'));
