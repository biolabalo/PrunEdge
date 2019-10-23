import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from './store/reducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { fetchData } from './saga'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchData);
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider> , document.getElementById('root'));

serviceWorker.unregister();
