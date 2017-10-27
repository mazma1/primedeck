import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <ul className="nav nav-pills nav-stacked">
          <li role="presentation" className="active">
            <Link to="/admin">
              <i className="glyphicon glyphicon-th padding-right10" />
              <span className="nav-item">Overview</span>
            </Link>
          </li>
          <li role="presentation">
            <Link to="/admin/register">
              <i className="glyphicon glyphicon-plus padding-right10" />
              <span className="nav-item">Register New User</span>
            </Link>
          </li>
          <li role="presentation">
            <a href="#"><i className="glyphicon glyphicon-cog not-active padding-right10" />
              <span className="nav-item not-active">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
