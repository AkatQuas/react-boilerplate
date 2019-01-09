import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';

@observer
class CounterComp extends Component {
    inc = _ => {
        const { store } = this.props;
        store.increment();
    };
    inc40 = _ => {
        const { store } = this.props;
        store.increment(40);
    };

    render () {
        const { store: { counter, howFarFrom100 } } = this.props;
        return (
            <Fragment>
                class - CounterComp
                <p>now the counter is {counter}, <br/> and how far are we from 100 ? {howFarFrom100}</p>
                <button onClick={this.inc}> increment</button>
                <button onClick={this.inc40}> increment by 40</button>
            </Fragment>
        );
    }
}

export default CounterComp;