import React from 'react';
import './index.css';
import logo from '../../assets/pictures/pokemon.jpg';

const Header = () => (
  <div className="header">
    <img className="logo" src={logo} alt="Pokemon Logo" />
  </div>
);

export default Header;
