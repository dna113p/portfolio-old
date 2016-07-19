import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

import ProjectSlide from './ProjectSlide';

class Project extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick(this.props.index);
  }

  render() {
    var active = this.props.active ? styles.active : [];
    var imgActive = this.props.active ? styles.imgActive : [];
    return (
      <div onClick={this.handleClick} style={[styles.base, active]} >
        <img src={this.props.data.imgUrl} style={[styles.img, imgActive]} />
        <ProjectSlide data={this.props.data} active={this.props.active}/>
      </div>
    );
  }
}

export default Radium(Project);

var styles = {
  base: {
    margin: '1.5rem',
    height: '225px',
    width: '225px',
    transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
  },

  active: {
    height: '525px',
  },

  img: {
    borderRadius: '50%',
    transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
    width: '100%',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',

    ':hover': {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
  },

  imgActive: {
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    ':hover': {
      boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    }
  }
}

