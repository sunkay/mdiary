import React from 'react';
import {Link} from 'react-router';
import Time from 'react-time';

// material-ui
import mui from 'material-ui';
import {ThemeManager} from 'material-ui/lib/styles/theme-manager';

//let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let FlatButton = mui.FlatButton;
let RaisedButton = mui.RaisedButton;
let styles = mui.Styles;

//var SmartTimeAgo = TimeAgo;

export default class Header extends React.Component {
  render(){
    var now = new Date();
    now.setHours(now.getHours() + 4);
    return (
      <div id="page-container">
        <header>
          <AppBar title="mDiary"
            iconElementRight={<FlatButton label="Save" />}
            >
              <a href="/test">About</a>
              <FlatButton label="Home" />
          </AppBar>
          <RaisedButton label="My Button" primary={true} />
        </header>
      </div>
    );
  }
}
