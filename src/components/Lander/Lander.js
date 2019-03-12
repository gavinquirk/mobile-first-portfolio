import React, { Component } from 'react';
import { Link } from 'react-scroll';

import ButtonLarge from '../Common/Buttons/ButtonLarge/ButtonLarge';

import badge_html_css from '../../images/badge_html_css.png';
import badge_javascript_jquery from '../../images/badge_javascript_jquery.png';
import badge_node_express from '../../images/badge_node_express.png';
import badge_react from '../../images/badge_react.png';
import badge_sql_nosql from '../../images/badge_sql_nosql.png';

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
          <div className='certificates'>
            <img src={badge_html_css} alt='HTML and CSS Certification' />
            <img
              src={badge_javascript_jquery}
              alt='JavaScript and jQuery certification'
            />
            <img
              src={badge_node_express}
              alt='Node and Express certification'
            />
            <img src={badge_react} alt='React certification' />
            <img src={badge_sql_nosql} alt='SQL and noSQL certification' />
          </div>
        </div>
        <div className='side-b'>
          <h2>MERN Stack Applications</h2>
          <Link to='MERN' spy={true} smooth={true} offset={-50} duration={500}>
            <ButtonLarge>Why MERN?</ButtonLarge>
          </Link>
        </div>
      </div>
    );
  }
}

export default Lander;
