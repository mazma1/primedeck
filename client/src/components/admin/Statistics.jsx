import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <div>
        <div className="col-md-4">
          <div className="col-sm-12 card text-center">
            <h1>4</h1>
            <hr />
            <h4>Admins</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-sm-12 card text-center">
            <h1>4</h1>
            <hr />
            <h4>Students</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-sm-12 card text-center">
            <h1>4</h1>
            <hr />
            <h4>Instructors</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
