import React, { Component } from 'react';
import './App.css';

import ForexCalculator from './components/ForexCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>Forex App</h1>
          </header>
          <main className="main">
            <ForexCalculator />
          </main>
        </div>
      </div>
    );
  }
}

export default App;