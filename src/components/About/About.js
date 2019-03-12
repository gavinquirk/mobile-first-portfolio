import React, { Component } from 'react';

import gqPic from '../../images/gq-pic-1.jpg';

import './About.css';

class About extends Component {
  render() {
    return (
      <div className='About'>
        <h1 className='color-underline'>About Me</h1>

        <div className='about-a'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            modi pariatur incidunt beatae magnam et qui, magni sed dolorem,
            autem est veniam maiores iusto voluptates nemo hic doloremque
            delectus rem!
          </p>
        </div>
        <div className='about-b'>
          <img src={gqPic} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facere quam sunt architecto eius distinctio, mollitia accusamus
            corrupti fugiat laboriosam corporis iste, quisquam nostrum magni
            quas dolor, libero exercitationem consectetur possimus. Mollitia
            unde facere, explicabo placeat nihil ipsam labore nam recusandae
            enim aspernatur impedit, aperiam quas expedita, nesciunt repellat
            asperiores.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
