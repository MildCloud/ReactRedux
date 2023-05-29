import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//     if (action.type === 'increment') {
//         // state.counter++;
//         // return state;
//         // should never change the existing state and obj are ref in JS
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     else if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     else if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     else if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }
//     else {
//         return state;
//     }
// };