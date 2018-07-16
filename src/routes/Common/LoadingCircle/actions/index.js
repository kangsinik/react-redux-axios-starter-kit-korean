import * as types from 'constants/ActionTypes'

export function rotateLoadingCircle () {
  return {
    type: types.ROTATE_LOADING_CIRCLE,
    payload: { isLoading: true }
  }
}

export function stopLoadingCircle () {
  return {
    type: types.STOP_LOADING_CIRCLE,
    payload: { isLoading: false }
  }
}

export const actions = {
  rotateLoadingCircle,
  stopLoadingCircle
}
