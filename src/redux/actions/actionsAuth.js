import AsyncStorage from '@react-native-community/async-storage';
import {
  START_LOADING,
  END_LOADING,
  LOGED_OUT,
  AUTH_LOGEDIN,
  GET_USER,
} from './actionType';
import { urls } from '../../constants';
import { disMis, endLoading, showAlert, startLoading } from './actionsModal';
import axios from 'axios';


export const login = ({ username, password, navigation }) => async dispatch => {
  try {
    dispatch(startLoading())

    const res = await axios({
      method: 'post',
      url: urls.login,
      headers: { 'Accept': 'application/json' },
      data: { username, password }
    });
    
    await AsyncStorage.setItem('token', res.data.token)
    navigation.replace("main")
    console.log("loged in",res.data.token);
  } catch (err) {
    dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))
  } finally {
    dispatch(endLoading())
  }
}

export const getUser = ({ navigation }) => async dispatch => {
  try {
    navigation.replace("main")
  } catch (err) {
    dispatch(showAlert({ action: () => dispatch(disMis()), title: err.message }))
  } finally {
    dispatch(endLoading())
  }
}

export const logout = () => async dispatch => {
  try {
    await AsyncStorage.removeItem("token")
  } catch (err) {

  }
}
