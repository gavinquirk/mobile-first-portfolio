import React, { Component } from 'react';

import './FlipCard.css';

class FlipCard extends Component {
  render() {
    // Map through content prop array to create bullet points
    const cardContent = this.props.content.map((bp, i) => {
      return (
        <li key={i} style={{ padding: '3px' }}>
          <i
            style={{
              color: this.props.color,
              marginRight: '1rem'
            }}
            className='fas fa-circle'
          />
          {bp}
        </li>
      );
    });

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
            <ul className='flip-card-content'>{cardContent}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
