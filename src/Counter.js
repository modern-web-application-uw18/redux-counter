import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.value}</h2>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

// const array = [1, 2, 3, 4];
// array.map(i => i + 1);
// [2, 3, 4, 5];

// const state = { value: 0 };
// mapStateToProps(state);
// { value: 0 }

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
}

// export default Counter;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);