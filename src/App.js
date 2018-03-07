import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landingpage from './components/Landingpage.js';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Landingpage/>
      </div>
    );
  }
}

export default App;
