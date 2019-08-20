import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts';
import modalReducer from './modal';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

const rootReducer = combineReducers({
  modal: modalReducer,
  contacts: contactsReducer
})

export default persistReducer(persistConfig, rootReducer);