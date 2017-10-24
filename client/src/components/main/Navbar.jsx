import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/auth';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  /**
 * Logs a user out
 *
 * @param {SyntheticEvent} event
 *
 * @returns {void}
 */
  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/signin')
  }

  render() {
    const { firstname, lastname } = this.props.user;
    return (
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
                    Hello, {firstname} {lastname}!
                  </div>
                </li>
                <li>
                  <div>
                    <Link
                      to="/signin"
                      onClick={this.logout}
                    >
                      Log Out
                      <i className="glyphicon glyphicon-log-out padding-left5" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.signedInUser.user

  };
}

export default withRouter(connect(mapStateToProps, { logout })(NavigationBar));
