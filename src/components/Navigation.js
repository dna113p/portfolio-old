import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';


class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fixed: 'containerMove'
    };
  }

  componentDidMount() {
    this.topStart = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
    window.addEventListener('scroll', this.handleScroll.bind(this), false);
  }

  handleScroll() {
    if(window.scrollY > this.topStart) {
      this.setState({fixed: 'containerFixed'});
    }
    else {
      this.setState({fixed: 'containerMove'});
    }
  }

  render() {
    return (
      <div style={styles[this.state.fixed]} id={'nav'}>
        <div style={styles.container}>

          <a key={1} href={"#projects"} style={styles.link} >Projects</a>
          <a key={2} href={"http://dna113p.github.io/resume2016"} style={styles.link} >Resume</a>

          <div style={styles.socialIcons}>
            <a key={3} href={"http://github.com/dna113p"} target={"none"} style={styles.link}>
              <i className={"fa fa-github"} ></i>
            </a>

            <div style={{width:'10px'}}></div>

            <a key={4} href={"http://linkedin.com/in/dna113p"} target={"none"} style={styles.link}>
              <i className={"fa fa-linkedin"}></i>
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Navigation);

var styles = {
  //stretches nav background to edges
  containerMove: {
    zIndex: '100',
    position: 'absolute',
    bottom: '0',
    backgroundColor: '#222',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)',
    width: '100vw',
  },

//fixes nav to top
  containerFixed: {
    zIndex: '100',
    position: 'fixed',
    top: '0',
    backgroundColor: '#222',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)',
    width: '100vw',
    height: 'auto'
  },

//Inner div container
  container: {
    color: '#EEE',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

    margin: '0 auto 0 auto',
    width: '100vw',
    maxWidth: '1200px',
    height: '100%',

    fontSize: '2rem',

    '@media (max-width: 600px)': {
      fontSize : '2rem'
    }
  },

  socialIcons: {
    padding: '.5em 0',
    display:"flex"
  },

  link: {
    textDecoration: 'none',
    color: '#EEE',
    ':hover': {
      color: 'gray',
    }

  }
}

