import React, { Component } from 'react';

import MERNdisplay from '../MERNdisplay/MERNdisplay';

import './MERN.css';

class MERN extends Component {
  render() {
    return (
      <div className='MERN'>
        <h1 className='color-underline'>Why use the MERN stack?</h1>

        <MERNdisplay />
        <div className='mern-info'>
          <div className='jsfriendly'>
            <h2 className='color-underline'>JavaScript Friendly</h2>
            <p>
              Express, React, and Node all use JavaScript. Unlike other
              applications which use a combination of languages on the Front and
              Back ends, the MERN stack allows for developers to create their
              applications in only one language. This keeps things simple, fast
              and stable.
            </p>
          </div>
          <div className='other'>
            <h2 className='color-underline'>JavaScript Friendly</h2>
            <p>
              Express, React, and Node all use JavaScript. Unlike other
              applications which use a combination of languages on the Front and
              Back ends, the MERN stack allows for developers to create their
              applications in only one language.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MERN;
