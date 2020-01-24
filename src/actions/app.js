import * as type from './types';
import * as actionTypes from './types';

export const userLoggedIn = user => ({
    type: actionTypes.USER_LOGGED_IN,
    payload: user
}); 

export const changePage = action => ({
    type: actionTypes.CHANGE_PAGE,
    payload:  action.payload
}); 