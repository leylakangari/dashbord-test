import axios from 'axios';
const URL = 'https://dev-rest-api.edozo.co';

export function allCompsLease(){
    const request = axios.get(`${URL}/users`)
                    .then(response => response.data)
    return {
        type: 'GET_COMPSLEASE',
        payload: request
    }
}

export function userLogin(values,cb){
    const request = axios.post(`${URL}/auth`,{ email:values.username, password:values.password})
        .then(response => response)
        .catch(err => err.response.data.message)
        return{
            type: 'POST_SIGNIN',
            payload: request
        }
}