import React from 'react';

import './ButtonLarge.css';

function ButtonLarge(props) {
  return <button className='btn-large'>{props.children}</button>;
}

export default ButtonLarge;
