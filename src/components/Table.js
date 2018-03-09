import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import {WEB_SOCKETS} from './../actions';
import {connect} from 'react-redux';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
class Table extends React.Component {
  componentWillMount = () => {
this.props.WEB_SOCKETS();
}
render() {
  console.log(this.props.dataList[1],'tttttt');
  const products = [{'id':'guarav','name':'gaurav'}];
const columns = [{
  dataField: 'name',
  text: 'Product ID'
}, {
  dataField: 'price',
  text: 'Product Name'
}];
    return (
      <BootstrapTable data={this.props.dataList[1]} version='4' search>
              <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
               <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
           </BootstrapTable>
)
}
}
const mapStateToProps = ({main}) => {
  console.log('chatrt',main);
  const {dataList} = main;
  return {dataList}
}
export default connect(mapStateToProps,{WEB_SOCKETS})(Table);
