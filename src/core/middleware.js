import {compose} from './helpers';

/**
 * Creates a store that applies middleware to the dispatch method of the store.
 * Serves for such tasks, such as expressing asynchronous actions in a concise manner, or logging every action payload.
 * @param Store
 * @param middlewares
 * @returns Store
 */
export function middleware(Store, middlewares = []) {
    return (reducer, ...args) => {
        const store = new Store(reducer, ...args);

        if (middlewares.length) {
            let dispatch;

            const middlewareAPI = {
                getState: store.getState,
                context: store,
                dispatch: (action, ...args) => dispatch(action, ...args)
            };

            const chain = middlewares.map(middleware => middleware(middlewareAPI));

            dispatch = compose(...chain)(store.dispatch);

            store.__proto__.dispatch = dispatch;
        }

        return store;
    }
}
