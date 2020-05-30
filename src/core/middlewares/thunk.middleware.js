/**
 * With a plain basic store, you can only do simple synchronous updates by dispatching an action.
 * Middleware extend the store's abilities, and let you write async logic that interacts with the store.
 */
export const thunk = store => next => action =>
    typeof action === 'function'
        ? action(store.dispatch, store.context)
        : next.call(store.context, action)