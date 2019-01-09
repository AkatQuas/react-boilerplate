import React, { Component, Fragment } from 'react';
import './App.scss';
import { HashRouter as Router, Link } from 'react-router-dom';
import Routes from './router';
import Header from './components/header';

class App extends Component {
    render () {
        return (
            <Router>
                <Fragment>
                    <div className="main-content">
                        <Header />
                        <Routes />
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;
