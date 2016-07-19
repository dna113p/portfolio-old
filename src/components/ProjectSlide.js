import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

import ProjectCard from './ProjectCard';

class ProjectSlide extends Component {

  render() {
    var active = this.props.active ? styles.active : [];
    return (
      <div style={[styles.base, active]}>
          {this.props.active ?
            <ProjectCard data={this.props.data} /> : ""
          }
      </div>
    );
  }
}

export default Radium(ProjectSlide);

var styles = {
  base: {
    marginTop: '1rem',

    //Reset position
    position: 'absolute',
    left: '0',
    right: '0',

    //full width
    width: '100vw',
    height: '0px',
    overflow: 'hidden',

    backgroundColor: '#222',
    color: '#DDD',

    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.12),inset 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
  },

  //Display content when activated
  active: {
    height: '300px',
  }
}
