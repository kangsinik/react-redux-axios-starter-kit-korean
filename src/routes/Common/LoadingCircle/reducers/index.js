import * as types from 'constants/ActionTypes'

const initialState = {
  isLoading: false
}

export default function loadingCircle (state = initialState, action) {
  switch (action.type) {
    case types.ROTATE_LOADING_CIRCLE:
      return action.payload
    case types.STOP_LOADING_CIRCLE:
      return action.payload
    default:
      return state
  }
}
