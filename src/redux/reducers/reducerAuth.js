import AsyncStorage from '@react-native-community/async-storage';


/** Redux Actions */
import {
  GET_USER,
  LOGED_IN,
  LOGED_OUT
} from '../actions/actionType';

const initialState = {
  isLogin: false,

};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGED_IN:
      return {
        ...state,
        isLogin: action.value,
      };

    default:
      return state;
  }
};

