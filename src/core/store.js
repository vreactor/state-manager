import {middleware} from './middleware';
import {Options} from './decorators/options.decorator';

@Options({
    middleware: middleware
})
export class Store {
    constructor(rootReducer, initialState) {
        this.rootReducer = rootReducer;
        this.subscribers = [];
        this.state = rootReducer(initialState, { type: '__INIT__'});
    }

    dispatch(action) {
        this.state = this.rootReducer(this.state, action);
        this.subscribers.forEach(subscribe => subscribe());
    }

    subscribe(callback) {
        this.subscribers.push(callback);

        return {
            unsubscribe: () => {
                this.subscribers = this.subscribers.filter(subscribe => subscribe !== callback);
            }
        }
    }

    getState() {
        return this.state;
    }
}
