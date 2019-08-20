import {SHOW_MODAL, HIDE_MODAL} from './types';

const INITIAL_STATE = {
  visible: false
}

const modalReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        visible: action.payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        visible: action.payload
      }
    default: 
      return state;
  }
}

export default modalReducer;