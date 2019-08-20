import {SHOW_EDIT_FORM, HIDE_EDIT_FORM} from './types'

const INITIAL_STATE = {
  showEdit: false
}


const editFormReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_EDIT_FORM: 
      return {
        ...state,
        showEdit: action.payload
      }
    case HIDE_EDIT_FORM: 
      return {
        ...state,
        showEdit: action.payload
      }
    default:
      return state;
  }  
}

export default editFormReducer;
