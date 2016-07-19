import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

class About extends Component {
  render() {
    var me = require('../assets/me.png');
    return (
      <div style={styles}>
        <div>
          <b><h2>Hi I'm DJ,</h2></b>
          <p>
            I like to build things! With code, with photoshop, or in my garage. You can find some of the work I've done below.
            <br/><br/>I'm available for hire! Contact me at:  <b>djpelland@gmail.com</b>
          </p>
        </div>
      <img src={me} style={meImg} />
      </div>
    );
  }
}

export default Radium(About);
var styles = {
  fontFamily: '"Raleway", sans-serif',

  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media (max-width: 700px)': {
    alignSelf: 'center'
  }
}

var meImg = {
  margin: '1rem',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',

  width: '300px',
  borderRadius: '50%',

  '@media (max-width: 1200px)': {
    width: '20vw',
  },

  '@media (max-width: 700px)': {
    width: '50vw',
    alignSelf: 'center'
  }

}
