import React, { Component } from 'react';

import MERNdisplay from '../MERNdisplay/MERNdisplay';

import './MERN.css';

class MERN extends Component {
  render() {
    return (
      <div className='MERN'>
        <h1>This is the MERN section</h1>
        <MERNdisplay />
      </div>
    );
  }
}

export default MERN;
