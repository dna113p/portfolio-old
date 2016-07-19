import React, { Component } from 'react';

import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

import projectData from './projectData.js';

export default class App extends Component {
  render() {
    return (
      <div style={{fontFamily: '"Exo", sans-serif'}}>
        <Header />
        <div style={background}>
            <div style={section}>
              <About />
            </div>
            <div style={section}>
              <Projects data={projectData}/>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

var background = {
  backgroundColor: '#FEFEFE',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

var section = {
  marginBottom: '3em',
  boxSizing: 'border-box',
  padding: '5px',
  maxWidth: '1200px'
}
