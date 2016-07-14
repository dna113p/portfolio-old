import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

import Chip from './Chip';

class ProjectCard extends Component {

  render() {
    return (
      <div style={styles.fixedPad}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1>{this.props.data.title}</h1>
            <div style={styles.chips}>
            {
              this.props.data.keywords.split(' ').map((word, i) => {
                return (<Chip text={word} key={i} />)
              })
            }
            </div>
          </div>
            <p style={{fontFamily: '"Raleway", sans-serif', textAlign: 'center'}} >{this.props.data.description}</p>

          <div style={styles.links}>
            <a href={this.props.data.codeUrl} target={'none'} style={styles.link}>
              <span>code <i className="fa fa-code"></i></span>
            </a>
            <a href={this.props.data.liveUrl} target={'none'} style={styles.link}>
              <span><i className="fa fa-globe"></i> live</span>
            </a>
          </div>


        </div>
      </div>
    );
  }
}

export default Radium(ProjectCard);

var styles = {
  container: {
    padding: '0 1rem',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  header : {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    flexWrap: 'wrap',
  },

  links :{
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '1rem'
  },
  link: {
    fontSize: '1.75rem',
    alignItems: 'center',
    color: '#222',
    textDecoration: 'none',
    fontFamily: '"Raleway", sans-serif'
  },

  chips: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
    }
  },


  //Wraps container for predictable padding
  fixedPad : {
    //reset width and center
    width: '100%',
    height: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  }
}
