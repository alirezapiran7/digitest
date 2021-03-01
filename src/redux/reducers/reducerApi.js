/** Redux Actions */
import {
  API_CREATE,API_DELETE,API_GET,API_PATCH,API_PUT , UPDATE_STATE
} from '../actions/actionType';

const initialState = {
  movies:[],
  categoreis:[],
  persons:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
   
    case API_GET:
      return {
        ...state,
        [action.result]: action.value
      };

      case UPDATE_STATE:
      return {
        ...state,
        [action.key]: action.value
      };

      case API_CREATE:
        return {
          ...state,
          [action.result]: action.value
        };
      
      case API_DELETE:
      return {
        ...state,
        [action.result]: action.value
      };

      case API_PATCH:
        return {
          ...state,
          [action.result]: action.value
        };

        case API_PUT:
          return {
            ...state,
            [action.result]: action.value
          };
          
    default:
      return state;
  }
};

