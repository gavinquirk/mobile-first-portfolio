import React, { Component } from 'react';

import FlipCard from '../Common/FlipCard/FlipCard';

import './MERNdisplay.css';

class MERNdisplay extends Component {
  render() {
    return (
      <div className='mern-display'>
        <FlipCard
          character='M'
          color='dodgerblue'
          heading='MongoDB'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quas dicta perferendis qui nulla maxime, ducimus et assumenda impedit numquam voluptas sequi perspiciatis porro cupiditate id quis, facere deleniti!'
        />
        <FlipCard
          character='E'
          color='gold'
          heading='Express'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quas dicta perferendis qui nulla maxime, ducimus et assumenda impedit numquam voluptas sequi perspiciatis porro cupiditate id quis, facere deleniti!'
        />
        <FlipCard
          character='R'
          color='crimson'
          heading='React'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quas dicta perferendis qui nulla maxime, ducimus et assumenda impedit numquam voluptas sequi perspiciatis porro cupiditate id quis, facere deleniti!'
        />
        <FlipCard
          character='N'
          color='forestgreen'
          heading='Node'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quas dicta perferendis qui nulla maxime, ducimus et assumenda impedit numquam voluptas sequi perspiciatis porro cupiditate id quis, facere deleniti!'
        />
      </div>
    );
  }
}

export default MERNdisplay;
