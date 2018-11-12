import React, { Component } from 'react';
// ajax_function better to return a promise
// get or post can be implemented the same way
import { ajax_get, ajax_post } from './some-axios-actions';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: undefined
        };
    }

    componentDidMount () {
        this.getFunction();
    };

    getFunction = _ => {
        ajax_get().then(data => {
            this.steState({
                data
            });
        });
    };
    postFunction = post_data => {
        ajax_post(post_data).then(res => {
            console.log('post ok');
            this.getFunction();
        });
    };

    render () {
        return (
            <div>
                <p>show some data;</p>
            </div>
        );
    }
}

export default App;