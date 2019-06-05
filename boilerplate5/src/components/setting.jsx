import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(({ tick }) => ({ tick }))
class Setting extends Component {
  static propTypes = {
    tick: PropTypes.shape({
      tick: PropTypes.number,
      locked: PropTypes.bool,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  toggleLock = () => {
    const { dispatch, tick } = this.props;
    dispatch({
      type: 'SET_LOCK_STATUS',
      locked: !tick.locked
    });
  }

  render() {
    const { tick } = this.props;
    return (
      <div>
        <p> the value of tick is now {tick.tick}</p>

        <p>Now you can{tick.locked ? ' not' : ''} change tick.</p>

        <button onClick={this.toggleLock}> TOGGLE LOCK</button>
      </div>
    )
  }
}

export default Setting;
