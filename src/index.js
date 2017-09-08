import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reducers from './store';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

sagaMiddleware.run(rootSaga);

/* global document */
ReactDOM.render(<Wrapper />, document.getElementById('root'));
