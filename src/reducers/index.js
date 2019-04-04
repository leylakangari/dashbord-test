import {  combineReducers } from 'redux';
import comps from './comps-reduser';
import auth from './auth';
import { reducer as formReducer } from 'redux-form'

const rootReduser = combineReducers ({
    comps,
    auth,
    form: formReducer
})

export default rootReduser;