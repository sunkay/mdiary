import React from 'react';
import {Link} from 'react-router';
import Time from 'react-time';

//var SmartTimeAgo = TimeAgo;

export default class Header extends React.Component {
  render(){
    var now = new Date();
    now.setHours(now.getHours() + 4);
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header ">
            <Link to="/" className="navbar-brand">
              mDiary
            </Link>
          </div>
          <div>
            <div className="time">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/test"> Test1 </Link>
                  </li>
                  <li>
                    <Link to="/test"> Test2 </Link>
                  </li>
                  <li>
                    <Link to="/test"> Test3 </Link>
                  </li>
                </ul>
                <p className="navbar-text">signed in...</p>

            </div>
          </div>
        </div>
      </nav>
    );
  }
}
