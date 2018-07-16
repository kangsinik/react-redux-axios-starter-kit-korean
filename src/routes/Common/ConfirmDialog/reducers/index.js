import * as types from 'constants/ActionTypes'

const initialState = {
  confirmDialogOpen: false,
  confirmMessage: 'Do you want to confirm?',
  submitOption: undefined
}

export default function confirmDialogReducer (state = initialState, action) {
  switch (action.type) {
    case types.OPEN_CONFIRM_DIALOG:
      return action.payload
    case types.CLOSE_CONFIRM_DIALOG:
      return action.payload
    default:
      return state
  }
}
