import React, { Component } from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

// My custom store
import { createStore } from 'redux';

function myCustomReducer(state = { value: 1 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      };
    case 'DECREMENT':
      alert('You cannot decrement');
      return state;
    default:
      return state;
  }
}

const myCustomStore = createStore(myCustomReducer);
// End my custom store


const DummyComponent = (props) => {
  return (
    <div>
      <h1>DummyComponent</h1>
      <Counter />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <Counter />
            <Counter />
            <DummyComponent />
          </div>
        </Provider>
        <Provider store={myCustomStore}>
          <div>
            <h2>Second store</h2>
            <Counter />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
