import React, { PropTypes, Component } from 'react';

import Signature from './Signature';
import BannerImage from './BannerImage';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
        <BannerImage>
          <div style={styles}>
            <Signature />
            <Navigation />
          </div>
        </BannerImage>
    );
  }
}

export default Header;

var styles = {
  height: '120vh',
}
