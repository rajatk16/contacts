import {ADD_CONTACT} from './types';

const INITIAL_STATE = {
  contacts: []
}

const contactsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts, 
          {
            email: action.payload.email,
            firstName: action.payload.firstName,
            id: action.payload.id,
            image: action.payload.image,
            lastName: action.payload.lastName,
            phone: action.payload.phone
          }
        ]
      }
    default:
      return state;
  }
}

export default contactsReducer;