import React from 'react';

import Loadable from 'react-loadable';

import { Route, Switch } from 'react-router-dom';

const MyLoading = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Sorry, there is no such route component.</div>;
    } else {
        return null;
    }
};

const Async = [
    {
        path: '/admin/dashboard',
        file: 'dashboard'
    },
    {
        path: '/admin/animation/basic',
        file: 'animation/basic'
    },
    {
        path: '/admin/animation/example',
        file: 'animation/example'
    }

].map(o => ({
    ...o,
    component: Loadable({
        loader: _ => import(`../views/${o.file}`),
        loading: MyLoading
    })
}));

export default _ => (
    <Switch>
        { Async.map(o => <Route { ...o } key={o.path} />) }
    </Switch>
)