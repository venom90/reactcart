
import React, { Component } from 'react';
import products from '../../../mockdata';
import QuickView from './QuickView';


class ListProduct extends Component{
    render(){
        if(!Array.isArray(products)) return <div>No data!</div>;
        return(
            <div>
                {products.map((product, index) => {
                    return <QuickView cartUpdated={this.props.cartUpdated} product={product} key={product.etag} />;
                })}
            </div>
        );
    }
}

export default ListProduct;