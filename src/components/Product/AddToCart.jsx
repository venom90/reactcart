
import React, { Component } from 'react'

class AddToCart extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-1"><button onClick={()=>{this.props.dec.call(this)}} className="btn btn-primary">-</button></div>
                    <div className="col-sm-6">{this.props.q} in cart</div>
                    <div className="col-sm-2"><button onClick={()=>{this.props.inc.call(this)}} className="btn btn-primary">+</button></div>
                </div>
            </div>
        );
    }
}

export default AddToCart;