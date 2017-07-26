import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>S</b>S</span>
                    <span className="logo-lg"><b>Smart</b>SHOP</span>
                </a>
                <nav className="navbar navbar-static-top"></nav>
            </header>
        );
    }
}

export default Header;