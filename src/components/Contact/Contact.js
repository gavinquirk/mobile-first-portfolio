import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <div className='contact-section contact-email'>
          <div id='email-icon'>
            <i class='far fa-envelope fa-10x' />
          </div>
          <h1>Email me at:</h1>
          <h2>
            <a href='mailto: gavinquirk.work@gmail.com'>gavinquirk@gmail.com</a>
          </h2>
        </div>
        <div className='contact-section contact-social'>
          <div id='social-icon'>
            <i class='fas fa-globe fa-10x' />
          </div>
          <h1>Find me on Social Media</h1>
          <div className='sm-icons'>
            <a href='http://www.github.com/gavinquirk' target='_blank'>
              <i class='fab fa-github-square fa-4x' />
            </a>
            <a href='https://www.linkedin.com/in/gavin-quirk/' target='_blank'>
              <i class='fab fa-linkedin fa-4x' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
