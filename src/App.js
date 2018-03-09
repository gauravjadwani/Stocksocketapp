import React, { Component } from 'react';
import LandingScreen from './components/LandingScreen.js';
import './components/css/index.css';
class App extends Component {
  constructor (props) {
         super(props);
       }

  render() {
      console.log('App');
    return (
      <div className="container">
     // {this.props.children} just to show landing screen
     <LandingScreen/>
   </div>
    );
  }
}
export default App;
