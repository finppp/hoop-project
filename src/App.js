import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddActivity from './components/AddActivity';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddActivity/>
      </div>
    );
  }
}

export default App;
