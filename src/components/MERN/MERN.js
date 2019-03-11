import React, { Component } from 'react';

import MERNdisplay from '../MERNdisplay/MERNdisplay';

import './MERN.css';

class MERN extends Component {
  render() {
    return (
      <div className='MERN'>
        <MERNdisplay />
        <div className='mern-info'>
          <h1>Why use the MERN stack?</h1>
          <p>
            Express, React, and Node are all JavaScript frameworks. This means
            that when using MERN, full-stack applications can be built in only
            one language.
          </p>
        </div>
      </div>
    );
  }
}

export default MERN;
