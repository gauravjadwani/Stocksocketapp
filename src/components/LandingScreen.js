import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Table from './Table';
import Chart from './Chart';
class LandingScreen extends Component {
render() {
const style = {
    height: 500,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
    return (
      <div className="row">
        <div className="col-md-6">
          <MuiThemeProvider>
        <Paper style={style} zDepth={5} children={<Chart/>}/>
       </MuiThemeProvider>
        </div>
        <div className="col-md-6">
        <MuiThemeProvider>
          <Paper style={style} zDepth={5} children={<Table/>}/>
          </MuiThemeProvider>
      </div>
          </div>
    );
  }
}

export default LandingScreen;
