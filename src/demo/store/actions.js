import {INCREMENT, DECREMENT, INPUT} from './types';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(increment());
        }, 500)
    }
}

export function actionInput(value) {
    return {
        type: INPUT,
        value
    }
}