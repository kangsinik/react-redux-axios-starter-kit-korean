import Home from './Home'
import CounterRoute from './Counter'
import ErrorPageRoute from './Common/ErrorPage'
// import { browserHistory, Router } from 'react-router'
import { push } from 'react-router-redux'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
const createRoutes = (store) => (
  {
    path: '/',
    getComponent (nextState, cb) {
      // const id = sessionStorage.getItem('username')
      // if (id === null) {
      //   store.dispatch(push('/login')) // for login, you can utilize this later.
      // } else {
      //   require.ensure([], (require) => {
      //     cb(null, require('../layouts/CoreLayout/CoreLayout').default) // should be default
      //   })
      // }
      require.ensure([], (require) => {
        cb(null, require('../layouts/CoreLayout/CoreLayout').default) // should be default
      })
    },
    indexRoute: Home,
    childRoutes: [
      CounterRoute(store)
    ]
  }
)

const routes = (store) => ({
  childRoutes: [
    ErrorPageRoute(store), // one of common route that is loaded before login.
    createRoutes(store) // this is separated for authrization with login function
  ]
})

/*
 Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }
    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default routes
