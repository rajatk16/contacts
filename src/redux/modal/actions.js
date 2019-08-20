import {SHOW_MODAL, HIDE_MODAL} from './types';

export const showModal = () => ({
  type: SHOW_MODAL,
  payload: true
})

export const hideModal = () => ({
  type: HIDE_MODAL,
  payload: false
})