import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import ConfirmDialog from 'components/Common/ConfirmDialog'
import LoadingCircle from 'components/Common/LoadingCircle'


class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render () {
    const { history, routes, routerKey, store } = this.props
    injectTapEventPlugin()
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <div style={{ height: '100%' }}>
            <Router history={history} children={routes} key={routerKey} />
            <ConfirmDialog />
            <LoadingCircle />
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default AppContainer
