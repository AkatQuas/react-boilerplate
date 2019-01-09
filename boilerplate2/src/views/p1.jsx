import React, { Fragment } from 'react';
import CounterStore from '@/store/counter';
import CounterComp from '@/component/counter.comp';

export default _ => (
    <Fragment>
        <p>page 1</p>
        <CounterComp store={CounterStore}/>
    </Fragment>
)