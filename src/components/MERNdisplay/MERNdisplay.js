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
          content={[
            'Flexible',
            'Schema-less Structure',
            'Document Oriented Storage',
            'Support'
          ]}
        />
        <FlipCard
          character='E'
          color='gold'
          heading='Express'
          content={[
            'Large Web Community',
            'Matured Framework',
            'Easy to Customize',
            'Create REST APIs'
          ]}
        />
        <FlipCard
          character='R'
          color='crimson'
          heading='React'
          content={[
            'Fast Rendering',
            'Stable Code',
            'SEO Friendly',
            'Strong Community',
            'Used by Both Large and Small Companies'
          ]}
        />
        <FlipCard
          character='N'
          color='forestgreen'
          heading='Node'
          content={[
            'Quick Speeds',
            'Works Well with MongoDB',
            'Open Source',
            'Access to NPM'
          ]}
        />
      </div>
    );
  }
}

export default MERNdisplay;
