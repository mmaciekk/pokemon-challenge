import React from 'react';
import './index.css';

const Header = () => (
  <div className="header">
    <img className="logo" src={require('../../assets/pictures/pokemon.jpg')} alt="Pokemon Logo" />
  </div>
);

export default Header;
