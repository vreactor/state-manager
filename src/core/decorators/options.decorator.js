export function Options({middleware}) {
    return function decorator(Class) {
        return (rootReducer, initialState, middlewares) => {
            return middleware(Class, middlewares)(rootReducer, initialState);
        };
    }
}