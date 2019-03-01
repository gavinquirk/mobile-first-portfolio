import React, { Component } from 'react';

// import classes from './FlipCard.css';

import './FlipCard.css';

class FlipCard extends Component {
  render() {
    console.log(this.props.headerColor);
    return (
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div
            className='flip-card-front'
            style={{ backgroundColor: this.props.color }}
          >
            <h1>{this.props.character}</h1>
          </div>
          <div className='flip-card-back'>
            <h1 style={{ backgroundColor: this.props.color }}>
              {this.props.heading}
            </h1>
            <p className='flip-card-content'>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
