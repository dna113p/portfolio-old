import React, { PropTypes, Component } from 'react';

class Chip extends Component {


  render() {
    return (
      <div style={styles.base}>
        {this.props.text}
      </div>
    );
  }
}

export default Chip;

var styles = {
  base: {
    backgroundColor: '#009688',
    color: '#ddd',
    padding: '.3rem 1rem',
    margin: '.1rem',
    borderRadius: '2rem',
    height: '1rem',
    fontSize: '.9rem',
    fontFamily: '"Raleway", sans-serif',
  }
}
