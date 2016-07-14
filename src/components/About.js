import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

class About extends Component {
  render() {
    var me = require('../assets/me.png');
    return (
      <div style={styles}>
        <img src={me} style={meImg} />
        <b><h2 style={body}>Hi I'm Dj,</h2></b>
        <p style={body}>
          I like to build things! With code, with photoshop, or in my garage. You can find some of the work I've done below.
          <br/><br/>I'm available for hire! Contact me at:  <b>djpelland@gmail.com</b>
        </p>
      </div>
    );
  }
}

export default Radium(About);
var styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  textAlign: 'right'
}

var header = {
  fontSize: '2em',
  color: '#333',
  marginTop: '-40px',
  marginBottom: '2rem',
  '@media (max-width: 700px)': {
    marginTop: '0',
    alignSelf: 'center'
  }
}

var body = {
  fontFamily: '"Raleway", sans-serif',
  fontSize: '1.3em',
}

var meImg = {
  alignSelf: 'flex-start',

  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',

  width: '300px',
  marginTop: '-150px',
  borderRadius: '50%',

  '@media (max-width: 1200px)': {
    width: '25vw',
    marginTop: '-12vw',
    alignSelf: 'center'
  },
  '@media (max-width: 600px)': {
    width: '50vw',
    marginTop: '-25vw',
    alignSelf: 'center'
  }

}
