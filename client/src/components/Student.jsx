import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const App = () => (
  <div>
    <h2>Shout out for Student!</h2>
    <Link to="/signin">
      <Button bsStyle="primary">Primary</Button>
    </Link>
  </div>
);

export default App;