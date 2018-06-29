import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Warning, Smurf Territory</h2>
      <Link to="/smurfs">Smurf Zone</Link>
    </div>
  );
};

export default Header;
