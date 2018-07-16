
import React from 'react'
import { connect } from 'react-redux'
import { grey300 } from 'material-ui/styles/colors'
export class Footer extends React.Component {

  constructor (props) {
    super(props)
  }

  handleChange = (event, index, value) => this.setState({value})

  render () {
    return (
      <div style={{height: '30px', width: '100%'}}>
        <div style={{textAlign: 'center', height: '100%'}}>
          <p>COPYRIGHT 2016 SAMSUNG, LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    )
  }
}


export default Footer
