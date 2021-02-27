import { combineReducers } from 'redux';
import reducerApi from './reducerApi';
import reducerAuth from './reducerAuth';
import reducerModal from './reducerModal';

export default combineReducers({
  api: reducerApi,
  auth: reducerAuth,
  modal: reducerModal,
});
