import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="titleContainer">
      <h2 className="title">Pizza Places Tel-Aviv<span className="contribution">data provided by Foursquare</span></h2>
      </div>
    )
  }
}

export default Header;