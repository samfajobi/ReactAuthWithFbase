import * as actionTypes from './actionTypes'
import axios from 'axios';



export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: idToken,
        userId: userId
    }
}

export const authLogOut = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


const authCheckExpiretime = (expireTime) => {
    return  dispatch => (
        setTimeout( () => {
            dispatch(authLogOut())
        }, expireTime * 100)
    )
}

export const auth = ( email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbI0Cs5ybAesROfIiH-Futo6wG7NVRW24'

        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbI0Cs5ybAesROfIiH-Futo6wG7NVRW24'
        }

        axios.post(url, authData)
        .then( response => {
            console.log(response)
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(authCheckExpiretime(response.data.expiresIn) )
        } )
        .catch( error => {
            console.log(error)
            dispatch(authFail(error))
        })
    }
}