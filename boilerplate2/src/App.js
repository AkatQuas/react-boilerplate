import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import MyHeader from '@/component/header';
import Routes from '@/router/routes';

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <MyHeader/>
                    <Routes/>
                </div>
            </Router>
        );
    }
}

export default App;
