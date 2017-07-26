import React, { Component } from 'react';
import ListProduct from './Product/ListProduct';
import Cart from './Product/Cart';

class HomePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            key: 0
        };

        this.cartUpdated = this.cartUpdated.bind(this);
    }
    cartUpdated(){
        this.setState({ key: Math.random() });
    }
    render(){
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <h1>Welcome to Smart SHOP</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <ListProduct cartUpdated={this.cartUpdated}/>
                        </div>
                        <div className="col-md-4">
                            <Cart key={this.state.key} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;