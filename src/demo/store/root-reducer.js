import {DECREMENT, INCREMENT, INPUT} from './types';

export function rootReducer(state, action) {
    if (action.type === INCREMENT) {
        const counter = state.counter + 1;
        return {...state, counter};
    }

    if (action.type === DECREMENT) {
        const counter = state.counter - 1;
        return {...state, counter};
    }

    if (action.type === INPUT) {
        const title = action.value;
        return {...state, title};
    }

    return state;
}