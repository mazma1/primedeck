import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Sidebar extends Component {
  render() {
    const { pathname } = location;
    const pathArray = window.location.pathname.split('/');
    const overview = (pathname === '/admin');
    const usersIsSelected = pathArray.length > 2 && (pathArray[2] === 'users' || pathArray[2] === 'register');
    const courseIsSelected = pathArray.length > 2 && (pathArray[2] === 'courses' || pathArray[2] === 'new-course');
    return (
      <div className="side-bar">
        <ul className="nav nav-pills nav-stacked">
          <li
            data-id="overview"
            role="presentation"
            onClick={this.handleClick}
            className={classnames('no-dropdown', { active: overview })}
            /* className={pathname === '/admin' ? 'active' : ''} */
          >
            <Link to="/admin">
              <i className="glyphicon glyphicon-th padding-right10" />
              <span className="nav-item">Overview</span>
            </Link>
          </li>
          <li className={classnames('dropdown-menu', { active: usersIsSelected })}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-users padding-right10" aria-hidden="true" />Users
              <span className="users caret" />
            </a>
            <ul className="dropdown-menu">
              <li
                data-id="register"
                role="presentation"
                className={pathname === '/admin/users' ? 'active' : ''}
                onClick={this.handleClick}
              >
                <Link to="/admin/users">
                  <i className="glyphicon glyphicon-eye-open padding-right10" />
                  <span className="nav-item">View All Users</span>
                </Link>
              </li>
              <li
                data-id="register"
                role="presentation"
                className={pathname === '/admin/register' ? 'active' : ''}
                onClick={this.handleClick}
              >
                <Link to="/admin/register">
                  <i className="glyphicon glyphicon-plus padding-right10" />
                  <span className="nav-item">Register New User</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={classnames('no-dropdown dropdown-submenu', { active: courseIsSelected })}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" tabIndex="-1">
              <i className="fa fa-book padding-right10" aria-hidden="true" />Courses
              <span className="courses caret" />
            </a>
            <ul className="dropdown-menu">
              <li
                data-id="register"
                role="presentation"
                className={pathname === '/admin/courses' ? 'active' : ''}
                onClick={this.handleClick}
              >
                <Link to="/admin/courses">
                  <i className="glyphicon glyphicon-eye-open padding-right10" />
                  <span className="nav-item">View All Courses</span>
                </Link>
              </li>
              <li
                data-id="register"
                role="presentation"
                className={pathname === '/admin/new-course' ? 'active' : ''}
                onClick={this.handleClick}
              >
                <Link to="/admin/new-course">
                  <i className="glyphicon glyphicon-plus padding-right10" />
                  <span className="nav-item">Add New Course</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
