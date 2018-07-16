import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'
import { rotateLoadingCircle, stopLoadingCircle } from '../../../routes/Common/LoadingCircle/actions'

  const styles = {
    displayNone: {
      display: 'none'
    },
    displayBlock: {
      display: 'block'
    },
    loadingCircleOuter: {
     position: 'absolute',
     width: '100vw',
     height: '100vh',
     top: '75px',
     backgroundColor: 'rgba(0, 0, 0, 0.541176)',
     zIndex: '1600'
   },
   loadingCircleInner: {
     position: 'absolute',
     top: 'calc(50vh - 50px)',
     left: 'calc(50vw - 50px)'
   }
  }

class LoadingCircle extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loadingCircleShow : styles.displayNone
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.isLoading) {
      this.setState({
        loadingCircleShow : styles.displayBlock
      })
    } else {
      setTimeout(() => {
        this.setState({
          loadingCircleShow : styles.displayNone
        })
      }, 400)
    }
  }

  render () {
    return (
      <div style = {this.state.loadingCircleShow} >
        <div style= {styles.loadingCircleOuter}>
          <div style= {styles.loadingCircleInner}>
          <CircularProgress />
          </div>
        </div>
      </div>
    )
  }
}

const mapActionCreators = {
  rotateLoadingCircle,
  stopLoadingCircle
}

const mapStateToProps = (state) => ({
  isLoading: state.loadingCircle.isLoading // state.'key이름'
})

export default connect(mapStateToProps, mapActionCreators)(LoadingCircle)
