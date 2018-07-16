export default (store) => ({
  path: 'errorPage',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ErrorPage = require('./containers/ErrorPageContainer').default

      cb(null, ErrorPage)
    }, 'errorPage')
  }
})
