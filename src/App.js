import React, { Component } from 'react';

import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

import projectData from './projectData.js';

export default class App extends Component {
  render() {
    return (
      <div>
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
  backgroundColor: '#fff',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24)',
  alignItems: 'center'
}

var section = {
  boxSizing: 'border-box',
  padding: '5px',
  marginBottom: '300px',
  maxWidth: '1200px'
}
