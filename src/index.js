import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducers from './store';

const store = createStore(reducers);

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

/* global document */
ReactDOM.render(<Wrapper />, document.getElementById('root'));
