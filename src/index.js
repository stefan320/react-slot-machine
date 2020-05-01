import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import './index.css';
import gameReducer from "./redux/game/game.reducer";
import App from './App';
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

const store = createStore(gameReducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();