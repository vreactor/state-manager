export const logger = store => next => action => {
    if (typeof action === 'function') {
        return next.call(store.context, action);
    }

    console.group(action.type)
    console.info('dispatching', action)
    let result = next.call(store.context, action)
    console.log('next state', store.getState.call(store.context, action))
    console.groupEnd()
    return result
}