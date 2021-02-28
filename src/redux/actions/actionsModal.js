import {
  SHOW_MODAL,
  CLEAR_MODAL,
  START_LOADING,
  END_LOADING,
  GLOBAL_END_LOADING,
  GLOBAL_START_LOADING,
  DISMIS_MODAL,
  
} from './actionType';
 import Alert from '../../components/Alert'



export const showAlert = ({action,title='NetWork Error'})=> async dispatch => {  
  return dispatch({
    type: SHOW_MODAL,
    value: {
      isVisible: true,
      isCancel:true,
       component:()=>Alert({title:title,message:'',actions:[{action:action,title:'Ok'}]}),
      transparent:false,
      animationType:'slide',
    }
  })
}

export const showModal = ({component,isCancel,transparent=false,animationType='slide'}) => async dispatch =>  {
  return dispatch({
    type: SHOW_MODAL,
    value: {
      isVisible: true,
      isCancel:isCancel,
      component:component,
      transparent:transparent,
      animationType:animationType,
    }
  })
}

export const disMis = () => async dispatch =>  {
  return dispatch({
    type: DISMIS_MODAL,
  })
}

export const clearModal = () => async dispatch =>  {
  return dispatch({
    type: CLEAR_MODAL,
  })
}

export const endLoading = () => async dispatch => {
  return (dispatch({
    type: END_LOADING,
  }))
}

export const startLoading = () => async dispatch => {
  return (dispatch({
    type: START_LOADING,
  }))
}

export const globalEndLoading = () => async dispatch => {
  return (dispatch({
    type: GLOBAL_END_LOADING,
  }))
}

export const globalStartLoading = () => async dispatch => {
  return (dispatch({
    type: GLOBAL_START_LOADING,
  }))
}

