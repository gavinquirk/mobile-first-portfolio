import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <ul className='NavigationItems'>
    <NavigationItem to='Lander' navLinkColor={props.navLinkColor}>
      Home
    </NavigationItem>
    <NavigationItem to='section-a' navLinkColor={props.navLinkColor}>
      Section A
    </NavigationItem>
    <NavigationItem to='section-b' navLinkColor={props.navLinkColor}>
      Section B
    </NavigationItem>
  </ul>
);

export default navigationItems;
