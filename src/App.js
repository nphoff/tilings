import React, { Component } from 'react';
import TilingContainer from './TilingContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tilings</h1>
        </header>
        <div className="content">
          <TilingContainer type="hex"/>
          <TilingContainer type="square"/>
          <TilingContainer type="circle"/>
          <TilingContainer type="soccer-ball"/>
        </div>
      </div>
    );
  }
}

export default App;
