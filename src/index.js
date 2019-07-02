import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { searchField, robotsFetch } from './reducers';

const store = createStore(
  combineReducers({searchField, robotsFetch}),
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
