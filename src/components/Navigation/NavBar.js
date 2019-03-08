import React from 'react';

import NavigationItems from './NavigationItems';

import './NavBar.css';

const NavBar = props => (
  <header className='header'>
    <nav className='NavBar navbar-fixed-top'>
      {/* TODO: LOGO WILL GO HERE */}
      <h1>LOGO</h1>
      <NavigationItems />
    </nav>
  </header>
);

export default NavBar;
