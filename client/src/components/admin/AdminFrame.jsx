import React from 'react';
import NavigationBar from '../main/NavigationBar';
import Sidebar from '../admin/Sidebar';

const AdminFrame = () => ({
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col-md-3 sidebar">
              <Sidebar />
            </div>
            <div className="col-md-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default AdminFrame;
