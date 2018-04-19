import { STATES } from '@/store/types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteContainer = ({ isAuth, component: Component, ...props }) => (
    <Route
        { ...props }
        render={
            _props => isAuth
                ? (<Component { ..._props } />) :
                (<Redirect to={ { pathname: '/login', state: { from: _props.location } } } />) }
    />
);

export default connect(state => ({
    isAuth: state[STATES.AUTH].isAuth
}))(PrivateRouteContainer);