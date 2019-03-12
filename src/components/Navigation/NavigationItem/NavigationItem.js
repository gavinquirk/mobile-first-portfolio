import React from 'react';
import { Link } from 'react-scroll';

import './NavigationItem.css';

const navigationItem = props => (
  <li>
    <Link
      className='NavigationItem'
      to={props.to}
      activeClass='active'
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <span style={{ color: props.navLinkColor }}>{props.children}</span>
    </Link>
  </li>
);

export default navigationItem;
