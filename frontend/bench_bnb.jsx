import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
