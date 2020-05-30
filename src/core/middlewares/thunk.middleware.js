export const thunk = store => next => action =>
    typeof action === 'function'
        ? action(store.dispatch, store.context)
        : next.call(store.context, action)