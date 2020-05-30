import {DECREMENT, INCREMENT, INPUT} from './types';

export function rootReducer(state, action) {
    switch (action.type) {
        case INCREMENT: {
            const counter = state.counter + 1;
            return {...state, counter};
        }
        case DECREMENT: {
            const counter = state.counter - 1;
            return {...state, counter};
        }
        case INPUT: {
            const title = action.payload.value;
            return {...state, title};
        }

        default: return state;
    }
}
