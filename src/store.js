import { createStore } from 'redux';

const initialState = {
    value: 0
};

// Reducer
function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                value: state.value + 1
            };
        case 'DECREMENT':
            return {
                value: state.value - 1
            }
        default:
            return state;
    }
}

// Store
const store = createStore(counter);

// store.dispatch
// store.subscribe
// store.getState

// store.subscribe(() => {
//     console.log(store.getState());
// });

// Dispatch
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });

export default store;
