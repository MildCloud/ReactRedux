import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true},
    reducers: {
        increment(state) {
            //will auto copy the sate inside toolkit package
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});


export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
