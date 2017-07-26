
import React, { Component } from 'react';

class Logo extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="logo">
                <img src='static/images/logo.png'/> Shopping Cart
            </div>
        );
    }
}

export default Logo;