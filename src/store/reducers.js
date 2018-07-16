import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import confirmDialogReducer from '../routes/Common/ConfirmDialog/reducers'
import loadingCircleReducer from '../routes/Common/LoadingCircle/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...asyncReducers,
    confirmDialog: confirmDialogReducer,
    loadingCircle: loadingCircleReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
