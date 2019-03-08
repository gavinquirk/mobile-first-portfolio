import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <ul className='NavigationItems'>
    <NavigationItem to='NavBar' exact>
      Home
    </NavigationItem>
    <NavigationItem to='section-a'>Section A</NavigationItem>
    <NavigationItem to='section-b'>Section B</NavigationItem>
  </ul>
);

export default navigationItems;
