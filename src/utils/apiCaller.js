import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', boby){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: boby
    }).catch(err => {
        console.log(err);         
    });
}