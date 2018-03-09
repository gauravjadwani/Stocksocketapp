import React, { Component } from 'react';
import {BarChart} from 'react-easy-chart';
import {WEB_SOCKETS} from './../actions';
import {connect} from 'react-redux';
import ConfigureStore from './../store/configureStore';
class Chart extends React.Component {
  constructor(props) {
    super(props);
    console.log('landing props', props);
  }
  componentWillMount = () => {
this.props.WEB_SOCKETS();
}
render() {
  console.log(this.props.dataList[0],'chart.js');
    return (
            <BarChart axes colorBars data={this.props.dataList[0]} height={250} width={500}  axisLabels={{x: 'My x Axis', y: 'My y Axis'}}/>
        );
    }
}
const mapStateToProps = ({main}) => {
  console.log('chatrt',main);
  const {dataList} = main;
  return {dataList}
}
export default connect(mapStateToProps,{WEB_SOCKETS})(Chart);
