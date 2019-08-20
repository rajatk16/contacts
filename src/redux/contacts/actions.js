import {ADD_CONTACT} from './types';

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact
})