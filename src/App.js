import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomponent from './components/text.js';

class App extends Component {
  render() {
  var socket= new WebSocket('ws://stocks.mnet.website');
    console.log(socket);
socket.onopen= function() {
    socket.send('hello');
};
socket.onmessage= function(s) {
    console.log(s.data);
};
    return (
      <div className="App">
      <Mycomponent/>
      </div>
    );
  }
}

export default App;
