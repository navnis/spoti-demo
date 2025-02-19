import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import artistReducer from './store/reducers/reducer'
import promiseMiddleware from 'redux-promise';
import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({
  artist: artistReducer
})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
