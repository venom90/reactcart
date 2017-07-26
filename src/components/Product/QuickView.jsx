
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Cookies from 'js-cookie';
import AddToCart from './AddToCart';
import _ from 'lodash';

class QuickView extends Component{
    constructor(props){
        super(props);

        this.cart = Cookies.getJSON('cart') || {};

        this.state = {
            q: (!_.isEmpty(this.cart) && this.cart[this.props.product.id]) ? this.cart[this.props.product.id].q : 0
        };

        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.updateCookie = this.updateCookie.bind(this);
    }
    inc(){
        this.setState({q: this.state.q + 1}, this.updateCookie.bind(this, this.props.product.id));
    }
    dec(){
        if(this.state.q === 0) return;
        this.setState({q: this.state.q - 1}, this.updateCookie.bind(this, this.props.product.id));
    }
    updateCookie(id){
        let cart = Cookies.getJSON('cart') || {};
        cart[id] = {q:this.state.q, p:this.props.product.price, id:id };
        Cookies.set('cart', cart);
        this.props.cartUpdated.call(this);
    }
    addToCart(id,evt){
        this.setState({q: this.state.q + 1}, this.updateCookie.bind(this, id));
    }
    render(){
        return(
            <div key={this.props.product.etag} className="box box-primary pull-left product">
                <div className="text-center">
                    <img src={this.props.product.image + `?id=${uniqid()}`} alt={this.props.product.name} style={{width:200}}/>
                    <div className="row">
                        <h4>{this.props.product.manufacturer}</h4>
                        <h3>{this.props.product.name}</h3>
                        <h2>Price: Rs {this.props.product.price}</h2>
                        {(this.state.q > 0) ?
                            <AddToCart q={this.state.q} inc={this.inc} dec={this.dec} />
                            : <button
                                className="btn btn-primary"
                                onClick={this.addToCart.bind(this, this.props.product.id)}
                            >Add to cart</button>
                        }

                    </div>
                </div>

            </div>
        );
    }
}

export default QuickView;