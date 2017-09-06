import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox'
import Composition from './Composition'
import Hashtags from './Hashtags'
import Timeline from './Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="top-nav">
          <SearchBox />
        </header>
        <main class='container'>
          <Composition />
          <Hashtags />
          <Timeline />
        </main>
      </div>
    );
  }
}

export default App;
