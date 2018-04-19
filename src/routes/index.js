import Login from '@/views/login';
import Page404 from '@/views/misc/page-404';
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

const MyLoading = ({ isLoading, error }) => {
    if (isLoading) {
        return <div style={ { textAlign: 'center', minHeight: '200px' } }>Loading Page...</div>;
    } else if (error) {
        return <div>Sorry, there is no such route component.</div>;
    } else {
        return null;
    }
};

const common = (process.env.NODE_ENV === 'development' ? [{
    path: '/test',
    component: Loadable({
        loader: _ => import('@/views/misc/test-page'),
        loading: MyLoading
    })
}] : []).concat([
    {
        path: '/404',
        component: Page404
    },
    {
        path: '/login',
        component: Login
    },
    {
        key: 'match-rest',
        component: Page404
    }
]);

export const OpenRoutes = _ => (
    <Switch>
        { common.map(route => <Route { ...route } key={ route.path || route.key } />) }
    </Switch>
);

const _import = cp => ({
    ...cp,
    component: Loadable({
        loader: _ => import(`@/views/${cp.file}`),
        loading: MyLoading
    })
});

const Async = [
    {
        path: '/admin/dashboard',
        file: 'dashboard'
    },
    {
        path: '/admin/query-select',
        file: 'query-select-wrapper'
    },
    {
        path: '/admin/workorder/list',
        file: 'workorder/list'
    },
    {
        path: '/admin/workorder/detail/:one',
        file: 'workorder/one'
    },
    {
        path: '/admin/animation/basic',
        file: 'animation/basic'
    },
    {
        path: '/admin/animation/example',
        file: 'animation/example'
    },
    {
        path: '/admin/foo/basic',
        file: 'animation/basic'
    },
    {
        path: '/admin/foo/example',
        file: 'animation/example'
    },
    {
        path: '/admin/bar',
        file: 'animation/basic'
    }

].map(_import);

export const ContentRoutes = _ => (
    <Switch>
        { Async.map(route => <Route exact { ...route } key={ route.path } />) }
        <Route component={ Page404 } />
    </Switch>
);
