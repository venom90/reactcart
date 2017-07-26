
import React, { Component } from 'react';
import _ from 'lodash';
import Cookies from 'js-cookie';
import products from '../../../mockdata';

class Cart extends Component{
    constructor(props){
        super(props);
        this.cart = Cookies.getJSON('cart') || {};

        this.state = {
            price: 0,
            qty: 0
        };

        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    componentDidMount(){
        this.update();
    }
    remove(id){
        if(!_.isEmpty(this.cart)){
            delete this.cart[id];
            Cookies.set('cart', this.cart);
        }
        this.forceUpdate();
        this.update();
    }
    update(item){
        const that = this;
        let p = 0 , q = 0;
        Object.values(this.cart).map((item,i)=>{
            p += item.p * item.q;
            q += item.q;
        });

        that.setState({
            price: p,
            qty: q
        });

    }
    render(){
        return(
            <div>
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h4>Your cart summary</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box box-solid">
                                <div className="box-header with-border text-center">
                                    <h4>Items in cart</h4>
                                </div>
                                <div className="box-body text-center">
                                    <h2>{this.state.qty}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box box-solid">
                                <div className="box-header with-border text-center">
                                    <h4>Total Rs</h4>
                                </div>
                                <div className="box-body text-center">
                                    <h2>{this.state.price}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <table className="table table-striped" style={{marginLeft:"17px"}}>
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Total Rs</th>
                                <th></th>
                            </tr>
                            </thead>

                            <tbody>
                                {!_.isEmpty(this.cart) && Object.values(this.cart).map((item,i) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{!!item.id && products[item.id-1].name}</td>
                                            <td>{item.q}</td>
                                            <td>{item.p * item.q}</td>
                                            <td><button
                                                className="btn btn-primary"
                                                onClick={this.remove.bind(this,item.id)}
                                            >Remove</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;