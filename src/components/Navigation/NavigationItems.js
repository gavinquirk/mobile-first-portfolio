import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <ul className='NavigationItems'>
    <NavigationItem to='Lander' navLinkColor={props.navLinkColor}>
      Home
    </NavigationItem>
    <NavigationItem to='About' navLinkColor={props.navLinkColor}>
      About
    </NavigationItem>
    <NavigationItem to='MERN' navLinkColor={props.navLinkColor}>
      MERN
    </NavigationItem>
    <NavigationItem to='Portfolio' navLinkColor={props.navLinkColor}>
      Portfolio
    </NavigationItem>
    <NavigationItem to='Contact' navLinkColor={props.navLinkColor}>
      Contact
    </NavigationItem>
  </ul>
);

export default navigationItems;
