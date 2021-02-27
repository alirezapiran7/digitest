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
    let url = urls.login
    dispatch(startLoading())

    const res = await axios({
      method: 'post',
      url: url,
      headers: { 'Accept': 'application/json', 'token': token },
      data: { username, password }
    });

    console.log('login user');
    console.log(res.data);

    await AsyncStorage.setItem('token', res.data.token)

    // dispatch({
    //   type: GET_TRANSACTIONS,
    //   value: res.data.user,
    // })
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
