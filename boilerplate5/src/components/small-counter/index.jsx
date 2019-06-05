import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.less';

@connect(({ tick }) => ({ tick }))
class SmallCounter extends Component {
  static propTypes = {
    tick: PropTypes.shape({
      tick: PropTypes.number,
      locked: PropTypes.bool,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  mutateTick = (e) => {
    const { step, type } = e.target.dataset;
    const { dispatch } = this.props;
    dispatch({
      type: type + '_TICK',
      step: +step,
    });
  }

  asyncTick = (e) => {
    const { step, type } = e.target.dataset;
    const { dispatch } = this.props;
    dispatch({
      type: 'ASYNC_' + type + '_TICK',
      payload: +step
    });
  }

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
        <button data-step="2" data-type="ADD" onClick={this.mutateTick}>Add tick by 2</button>
        <button data-step="3" data-type="ADD" onClick={this.mutateTick}>Add tick by 3</button>
        <button data-step="3" data-type="SUBSTRACT" onClick={this.mutateTick}>Substract tick by 3</button>
        <button data-step="2" data-type="SUBSTRACT" onClick={this.mutateTick}>Substract tick by 2</button>

        <button data-step="2" data-type="ADD" onClick={this.asyncTick}>async add by 2</button>
        <button data-step="2" data-type="SUBSTRACT" onClick={this.asyncTick}>async substract by 2</button>
      </div>
    )
  }
}

export default SmallCounter;
