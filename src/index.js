import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/index';
import {Provider} from 'react-redux';
import axios from 'axios';
import cookie from 'js-cookie';
import * as Types from './constants/ActionTypes';
import jwt from 'jsonwebtoken';

const jwt_secret = 'ttgs123';
let token = cookie.get('token');

if(token){
    jwt.verify(token, jwt_secret, (err, decoded)=>{
        if(err){       
            cookie.remove('token');
            token = null;
        }
    });
}


const render =()=>{
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, 
        document.getElementById('root')
    );
}

if(token){
    var idUser = cookie.get('idUser');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get( `http://localhost:8081/api/users/getUserById?idUser=${idUser}`)
    .then(res => {
        store.dispatch({
            type: Types.SET_LOGIN,
            payload: res.data.result
        })
    });
    render();
}
else{
    render();
}

serviceWorker.unregister();
