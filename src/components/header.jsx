import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            mDiary
          </a>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href=""> Test1 </a>
            </li>
            <li>
              <a href=""> Test2 </a>
            </li>
            <li>
              <a href=""> Test3 </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
