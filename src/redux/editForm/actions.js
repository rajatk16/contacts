import {SHOW_EDIT_FORM, HIDE_EDIT_FORM} from './types'

export const showEditForm = () => ({
  type: SHOW_EDIT_FORM,
  payload: true
})

export const hideEditForm = () => ({
  type: HIDE_EDIT_FORM,
  payload: false
})