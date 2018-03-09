import React, { Component } from 'react';
// import Header from './components/common/Header.js';
import './components/css/index.css';
class App extends Component {
  constructor (props) {
         super(props);
       }

  render() {
      console.log('App');
    return (
      <div className="container">
     {this.props.children}
   </div>
    );
  }
}
export default App;
