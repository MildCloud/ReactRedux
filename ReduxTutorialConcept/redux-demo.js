const redux = require('redux');

// The input of reducer should be oldSate and dispatchAction, it should not have side effect
// i.e. cannot send http request
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    else {
        return state;
    }
};

const store = redux.createStore(counterReducer);
console.log(store.getState());

const counterSubscriber = () => {
    const lateState = store.getState();
    console.log("Subscribe: ", lateState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
