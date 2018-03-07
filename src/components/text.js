import React, { Component } from 'react';
class MyComponent extends React.Component {

    constructor() {

        super();

        this.handleLoginKeyUp = this.keyUpHandler.bind(this);
    }

    keyUpHandler(e) {
        console.log(e.target.value,this);
        e.target.value=e.target.value.toLocaleUpperCase();
    }

    render() {

        return (
            <div>
                <input type="text" onKeyUp={this.handleLoginKeyUp}/>
            </div>
        );
    }
}
export default MyComponent;
