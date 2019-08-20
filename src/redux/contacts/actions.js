import {ADD_CONTACT, DELETE_CONTACT} from './types';

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact
});

export const deleteContact = (contact) => ({
  type: DELETE_CONTACT,
  payload: contact
})

