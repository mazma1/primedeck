import React from 'react';

const NavigationBar = props => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">Prime Deck</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right user-name-and-icon">
            <li>
              <div className="padding-right20">
                Hello, {props.firstname} {props.lastname}!
              </div>
            </li>
            <li>
              <div>
                <a href="#">
                  Log Out
                  <i className="glyphicon glyphicon-log-out padding-left5" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default NavigationBar;
