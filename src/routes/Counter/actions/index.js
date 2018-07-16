
import * as types from 'constants/ActionTypes'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: types.COUNTER_INCREMENT,
    payload: value
  }
}

export function decrement (value = 1) {
  return {
    type: types.COUNTER_DECREASE,
    payload: value
  }
}

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter.counter))
        resolve()
      }, 200)
    })
  }
}
export const actions = {
  increment,
  doubleAsync,
  decrement
}
