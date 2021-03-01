import AsyncStorage from '@react-native-community/async-storage';
import {
    API_CREATE,
    API_GET,
    API_DELETE,
    API_PATCH,
    API_PUT,
    UPDATE_STATE
} from './actionType';

import { disMis, endLoading, globalEndLoading, globalStartLoading, showAlert, startLoading } from './actionsModal';
import { logout } from './actionsAuth';
import axios from 'axios';

export const Get = ({ url, result, isLoading }) => async dispatch => {

    try {
        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem("token")
        console.log(token);
        const res = await axios({
            method: 'GET',
            url: url,
            headers: { 'Accept': 'application/json', 'Authorization': 'Token ' + token },
        });

        console.log("General Get", res.data);
        return dispatch({
            type: API_GET,
            value: res.data.results,
            result: result
        })
    } catch (err) {
        console.log('error');
        console.log(err.message);

        // if (err.response != null && err.response.status == '401') {
        //     dispatch(logout())
        // } else {
            dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))
        // }

    } finally {
        dispatch(globalEndLoading())
    }
}
export const GetOne = ({ url, result, isLoading }) => async dispatch => {

    try {
        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem("token")
        const res = await axios({
            method: 'GET',
            url: url,
            headers: { 'Accept': 'application/json', 'Authorization': 'Token ' + token },
        });

        console.log("General Get One", res.data);
        return dispatch({
            type: API_GET,
            value: res.data,
            result: result
        })
    } catch (err) {
        console.log('error');
        console.log(err.message);

        // if (err.response != null && err.response.status == '401') {
        //     dispatch(logout())
        // } else {
            dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))
        // }

    } finally {
        dispatch(globalEndLoading())
    }
}
export const Create = ({ url, data, result, isLoading }) => async dispatch => {

    try {
        if (isLoading) dispatch(startLoading())

        const token = await AsyncStorage.getItem('token')
        const res = await axios({
            method: 'post',
            url: url,
            headers: { 'Accept': 'application/json','Content-Type':'application/json', 'Authorization': 'Token ' + token },
            data: data
        });

        console.log('General Create');
        console.log(res.data);

        return dispatch({
            type: API_CREATE,
            value: true,
            result: result
        })
    } catch (err) {
        console.log('error');
        console.log(err.message);

        // if (err.response != null && err.response.status == '401') {
        //     dispatch(logout())
        // }
        dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))

    } finally {
        dispatch(endLoading())
    }
}
export const Patch = ({ url, data, result, isLoading }) => async dispatch => {

    try {
        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem('token')
        
        const res = await axios({
            method: 'PATCH',
            url: url,
            headers: { 'Accept': 'application/json','Content-Type':'application/json', 'Authorization': 'Token ' + token },
            data: data
        });

        console.log('General Patch');
        return dispatch({
            type: API_PATCH,
            value: res.data,
            result: result
        })
    } catch (err) {
        console.log('error');
        console.log(err.message);

        // if (err.response != null && err.response.status == '401') {
        //     dispatch(logout())
        // }
        dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))

    } finally {
        dispatch(globalEndLoading())
    }
}
export const Put = ({url, data, result, isLoading }) => async dispatch => {

    try {
        if (isLoading) dispatch(startLoading())

        const token = await AsyncStorage.getItem('token')
        const res = await axios({
            method: 'put',
            url: url,
            headers: { 'Accept': 'application/json','Content-Type':'application/json', 'Authorization': 'Token ' + token },
            data: data
        });

        console.log('General Put');
        console.log(res.data);

        return dispatch({
            type: API_PUT,
            value: res.data,
            result: result
        })
    } catch (err) {
        console.log('error' );
        console.log(err.message);
        // if (err.response != null && err.response.status == '401') {
        //     dispatch(logout())
        // } else {
            dispatch(showAlert({ action: () => dispatch(generalGet(disMis())), title: err.message }))
        // }

    } finally {
        dispatch(endLoading())
    }
}
export const Delete = ({url, result, isLoading }) => async dispatch => {

    try {
        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem('token')
        const res = await axios({
            method: 'delete',
            url: url,
            headers: { 'Accept': 'application/json','Content-Type':'application/json', 'Authorization': 'Token ' + token },
        });

        console.log('General Delete');
        console.log(res.data);

        return dispatch({
            type: API_DELETE,
            value: true,
            result: result
        })
    } catch (err) {
        console.log('error' );
        console.log(err.message);
        // if (err.response != null && err.response.status == '401') {
        //     dispatch(logout())
        // } else {
            dispatch(showAlert({ action: () => dispatch(generalGet(disMis())), title: err.message }))
        // }

    } finally {
        dispatch(globalEndLoading())
    }
}
export const updateState = ({ key, value }) => async dispatch => {

    return (dispatch(
        {
            type: UPDATE_STATE,
            key: key,
            value: value
        }
    ))
}