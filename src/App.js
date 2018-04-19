import logo from '@/assets/logo.svg';
import React, { Component } from 'react';
import './App.scss';

class App extends Component {
    render () {
        // no router, only Switch wrapping Routes
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
