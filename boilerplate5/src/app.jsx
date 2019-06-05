import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Router from './router';
import './app.less';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Link to="/" className="link"> Home </Link>
        <Link to="/setting" className="link">Setting</Link>
        <hr />
        <Router />
      </Fragment>
    )
  }
}
