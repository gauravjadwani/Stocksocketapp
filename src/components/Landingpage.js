import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BarChart} from 'react-easy-chart';
class Landingpage extends Component {
  constructor(props){
    super(props);
     this.state = {
      dataList: []
     };
   }
  componentWillMount=()=>{
    var _this=this;
    var socket= new WebSocket('ws://stocks.mnet.website');
      console.log(socket);
    socket.onopen= function() {
      socket.send('hello');
    };
    socket.onmessage= function(s) {
      // console.log(s.data);
      var d=JSON.parse(s.data);
      console.log(d);
var holder=[];
      for(var i=0;i<d.length;i++){
            var c={};
        for(var j in d[i]){
          c['x']=d[i][0];
          c['y']=d[i][1];
        }
        holder.push(c);
}
console.log(holder,'holder');
       _this.setState({ dataList :holder });
    console.log(_this.state.dataList,'name');
    };
}
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
        <div className="">
        </div>
        <div className="">
          <MuiThemeProvider>
          <Paper style={style} zDepth={5} children={
            <BarChart colorBars  height={250}
    width={500}  axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
    axes data={this.state.dataList}/>}/>
     </MuiThemeProvider>
        </div>
        <div className="">
        </div>
      </div>
    );
  }
}

export default Landingpage;
