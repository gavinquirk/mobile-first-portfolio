import React, { Component } from 'react';

import NavigationItems from './NavigationItems';

import './NavBar.css';

// TODO: Make navbar transparent until scrolled down

class NavBar extends Component {
  state = {
    navColor: 'transparent',
    navLinkColor: '#fff'
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.scrollY <= 500) {
        this.setState({ navColor: 'transparent', navLinkColor: '#fff' });
      } else if (window.scrollY >= 500) {
        this.setState({ navColor: '#fff', navLinkColor: 'black' });
      }
    };
  }

  render() {
    return (
      <header className='header'>
        <nav
          style={{ backgroundColor: this.state.navColor }}
          className='NavBar navbar-fixed-top'
        >
          {/* TODO: LOGO WILL GO HERE */}
          <h1>LOGO</h1>
          <NavigationItems navLinkColor={this.state.navLinkColor} />
        </nav>
      </header>
    );
  }
}

export default NavBar;
