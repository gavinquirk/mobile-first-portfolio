import React, { Component } from 'react';

import ButtonLarge from '../Common/Buttons/ButtonLarge/ButtonLarge';

import './Lander.css';

class Lander extends Component {
  render() {
    return (
      <div className='Lander'>
        <div className='side-a'>
          <div className='intro'>
            <h1>Gavin Quirk</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
        <div className='side-b'>
          <h2>MERN Stack Applications</h2>
          <ButtonLarge>Why MERN?</ButtonLarge>
        </div>
      </div>
    );
  }
}

export default Lander;
