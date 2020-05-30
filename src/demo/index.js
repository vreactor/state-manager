import './styles.css'
import {Store} from '../core/store';
import {rootReducer} from './store/root-reducer';
import {asyncIncrement, decrement, increment, actionInput} from './store/actions';
import {thunk} from '../core/middlewares/thunk.middleware';
import {logger} from '../core/middlewares/logger.middleware';

const counter = document.querySelector('#counter');

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');

const input = document.querySelector('#input');
const title = document.querySelector('#title');

const store = new Store(rootReducer, { counter: 0, title: ''}, [logger, thunk]);

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

input.addEventListener('input', (event) => {
    store.dispatch(actionInput(event.target.value));
});

store.subscribe(() => {
    const state = store.getState();

    counter.textContent = state.counter;
    title.textContent = state.title;
});

store.dispatch({type: 'INIT_APP'});

