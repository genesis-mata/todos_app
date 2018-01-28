import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Reducers from './reducers';
import C from './constants';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(Reducers, C.initialState);

function render() {
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

window.store = this.store;

store.subscribe(render);

render();

registerServiceWorker();
