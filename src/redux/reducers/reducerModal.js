
/** Redux Actions */
import {

  SHOW_MODAL,
  CLEAR_MODAL,

  END_LOADING,
  START_LOADING,

  GLOBAL_END_LOADING,
  GLOBAL_START_LOADING,
  DISMIS_MODAL
} from '../actions/actionType';

const initialState = {
  isLoading: false,
  isGlobalLoading: false,
  isVisible: false,
  isCancel: false,
  transparent: false,
  animationType: 'slide',
  component: {},
};

export default (state = initialState, action) => {
  switch (action.type) {

    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case GLOBAL_START_LOADING:
      return {
        ...state,
        isGlobalLoading: true,
      };

    case GLOBAL_END_LOADING:
      return {
        ...state,
        isGlobalLoading: false,
      };

    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        isCancel: action.value.isCancel,
        component: action.value.component,
        transparent: action.value.transparent,
        animationType: action.value.slide,
      };

    case DISMIS_MODAL:
      return {
        ...state,
        isVisible: false,
      };

    case CLEAR_MODAL:
      return {
        ...state,
        isCancel: false,
        component: {},
      };

    default:
      return state;
  }
};

