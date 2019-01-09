import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loading';
import NotFound from '../views/not-found';
import Home from '../views/home';

const routes = [
    {
        path: '/work',
        component: Loadable({
            loader: () => import( /*  webpackChunkName: "work" */ '../views/work'),
            loading: Loading
        })
    },
    {
        path: '/test',
        component: Loadable({
            loader: () => import( /*  webpackChunkName: "test" */ '../views/test'),
            loading: Loading
        })
    },
]

export default () => (
    <Fragment>
        <Switch>
            <Route path="/" exact component={Home} />
            {
                routes.map(item => (
                    <Route key={item.path} {...item} />
                ))
            }
            <Route component={NotFound} />
        </Switch>
    </Fragment>
)