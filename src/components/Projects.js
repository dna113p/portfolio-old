import React, { PropTypes, Component } from 'react';

import Project from './Project';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeId: null
    };

    this.handleClick = this.handleClick.bind(this)
  }

  updateActive(id) {
    if(this.state.activeId == id) {
      this.setState({activeId: null})
    }
    else {
      this.setState({ activeId: id});
    }
  }

  handleClick(index) {
    this.updateActive(index);
  }

  render() {
    return (
      <div>
        <a name={'projects'}>
          <h2 style={{textAlign: 'center'}}>Projects</h2>
        </a>
        <div style={styles}>
          {this.props.data.map((project,i)=> {
            return(
              <Project
                index={i} key={i}
                active={this.state.activeId === i}
                handleClick={this.handleClick}
                data={project}
                />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;

var styles = {
  margin: '0 auto 0 auto',

  //Use flexwrap to create project grid
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}
