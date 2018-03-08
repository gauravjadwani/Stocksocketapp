import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';

// import LandingScreen from './components/LandingScreen';
import Chart from './components/Chart'
import C from './components/dummy';
export default (
  <Route path="/" component={App}>

    <IndexRoute component={C}/>

    <Route path='/landingscreen' component={C}/>
    <Route path='/Chart' component={Chart}/>
  </Route>
);
