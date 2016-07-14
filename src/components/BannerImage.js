import React, { PropTypes, Component } from 'react';

class BannerImage extends Component {

  render() {
    var path = require('../img/mountains.jpg');
    return (
      <div>
      <div style={fullWidth}>
      <img style={styles.img} src={path}></img>
      </div>
      {this.props.children}
      </div>
    );
  }
}

export default BannerImage;

var styles = {
  img: {
    height: '100vh',
  }
}

var fullWidth = {
  position: 'fixed',
  width: '100vw',
  overflow: 'hidden',
  zIndex: '-100'
}
