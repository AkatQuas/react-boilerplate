import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loading';
import Home from '@/views/home';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/p1',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "p1" */'../views/p1'),
            loading: Loading
        })
    },
    {
        path: '/p2',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "p2" */'../views/p2'),
            loading: Loading
        })
    }
];
export default _ => (
    <Fragment>
        <Switch>
            {routes.map(item => (
                <Route key={item.path} exact {...item}/>
            ))}
        </Switch>
    </Fragment>
)