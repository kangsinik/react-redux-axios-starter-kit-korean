import * as types from 'constants/ActionTypes'
// ------------------------------------
// Actions
// ------------------------------------
export function openConfirmDialog (confirmMessage = '', submitOption = undefined) {
  return {
    type: types.OPEN_CONFIRM_DIALOG,
    payload: { confirmDialogOpen: true, confirmMessage: confirmMessage, submitOption: submitOption }
  }
}

export function closeConfirmDialog () {
  return {
    type: types.CLOSE_CONFIRM_DIALOG,
    payload: { confirmDialogOpen: false }
  }
}

export const actions = {
  openConfirmDialog,
  closeConfirmDialog
}
