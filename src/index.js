import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/index';
import jwtDecode from 'jwt-decode';

const store = createStore(
    appReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
);
if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));
  }
ReactDOM.render(
    <Provider store = { store}>
        <App />
    </Provider>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
