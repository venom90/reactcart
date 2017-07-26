import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from  'react-router';
import Header from './components/Header';

import HomePage from './components/HomePage';

class App extends Component{
    initialisePage(){}
    render(){
        return(
            <div className="wrapper">
            <Header/>
                <div className="row no_margin outerMostContainer">
                    <div className="col-md-12" id="parentContainer">
                        <Router  history={hashHistory} onUpdate={() => this.initialisePage()}>
                            <Route path="/" component={HomePage} />
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));