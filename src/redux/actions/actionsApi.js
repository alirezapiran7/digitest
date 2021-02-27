import AsyncStorage from '@react-native-community/async-storage';
import {
    API_CREATE,
    API_GET,
    API_DELETE,
    API_PATCH,
    API_PUT,
    CLEAR_STATE
} from './actionType';

import { urls } from '../../constants';
import { disMis, globalEndLoading, globalStartLoading, showAlert } from './actionsModal';
import { logout } from './actionsAuth';
import axios from 'axios';

export const Get = ({ model, body, id, result, isLoading }) => async dispatch => {

    try {
        let url = urls.baseApi + model
        if (id) url += '/' + id
        if (body) url += '?' + body
        console.log(url);

        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem("token")
        const res = await axios({
            method: 'GET',
            url: url,
            headers: { 'Accept': 'application/json', 'token': token },
        });

        return dispatch({
            type: API_GET,
            value: res.data.results,
            result: result
        })
    } catch (err) {
        console.log('error inja');
        console.log(err.message);

        if (err.response != null && err.response.status == '401') {
            dispatch(logout())
        } else {
            dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))
        }

    } finally {
        dispatch(globalEndLoading())
    }
}

export const Create = ({ model, data, result, isLoading }) => async dispatch => {

    try {
        let url = urls.baseApi + model

        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem('token')
        const res = await axios({
            method: 'post',
            url: url,
            headers: { 'Accept': 'application/json', 'token': token },
            data: data
        });

        console.log('generalCreate');
        console.log(res.data);

        return dispatch({
            type: API_CREATE,
            value: res.data,
            result: result
        })
    } catch (err) {
        console.log('error inja');
        console.log(err.message);

        if (err.response != null && err.response.status == '401') {
            dispatch(logout())
        } else {
            dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))
        }

    } finally {
        dispatch(globalEndLoading())
    }
}

export const Patch = ({ model, id, data, result, isLoading }) => async dispatch => {

    try {
        let url = urls.baseApi + model
        if (id) url += '/' + id

        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem('token')
        const res = await axios({
            method: 'patch',
            url: url,
            headers: { 'Accept': 'application/json', 'token': token },
            data: data
        });

        console.log('generalCreate');
        console.log(res.data);

        return dispatch({
            type: API_PATCH,
            value: res.data,
            result: result
        })
    } catch (err) {
        console.log('error inja');
        console.log(err.message);

        if (err.response != null && err.response.status == '401') {
            dispatch(logout())
        } else {
            dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))
        }

    } finally {
        dispatch(globalEndLoading())
    }
}

export const Put = ({ model, id, data, result, isLoading }) => async dispatch => {

    try {
        let url = urls.baseApi + model
        if (id) url += '/' + id

        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem('token')
        const res = await axios({
            method: 'put',
            url: url,
            headers: { 'Accept': 'application/json', 'token': token },
            data: data
        });

        console.log('generalCreate');
        console.log(res.data);

        return dispatch({
            type: API_PUT,
            value: res.data,
            result: result
        })
    } catch (err) {
        console.log('error inja');
        console.log(err.message);

        if (err.response != null && err.response.status == '401') {
            dispatch(logout())
        } else {
            dispatch(showAlert({ action: () => dispatch(generalGet(disMis())), title: err.message }))
        }

    } finally {
        dispatch(globalEndLoading())
    }
}

export const Delete = ({ model, id, result, isLoading }) => async dispatch => {

    try {
        let url = urls.baseApi + model
        if (id) url += '/' + id

        if (isLoading) dispatch(globalStartLoading())

        const token = await AsyncStorage.getItem('token')
        const res = await axios({
            method: 'delete',
            url: url,
            headers: { 'Accept': 'application/json', 'token': token }
        });

        console.log('delete');
        console.log(res.data);

        return dispatch({
            type: API_DELETE,
            value: res.data,
            result: result
        })
    } catch (err) {
        console.log('error inja');
        console.log(err.message);

        if (err.response != null && err.response.status == '401') {
            dispatch(logout())
        } else {
            dispatch(showAlert({ action: () => dispatch(generalGet(disMis())), title: err.message }))
        }

    } finally {
        dispatch(globalEndLoading())
    }
}

export const ClearState = ({ key, value }) => async dispatch => {

    return (dispatch(
      {
        type: CLEAR_STATE,
        key: key,
        value: value
      }
    ))
  }