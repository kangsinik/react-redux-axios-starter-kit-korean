import React from 'react'
import {Link} from 'react-router'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import SvgIcon from 'material-ui/SvgIcon'

class ErrorPage extends React.Component {

  render () {
    var status = this.props.location.query.status
    var statusText = this.props.location.query.statusText

    if (this.props.location.query.status === 'undefined') {
      status = 'Network Error'
      statusText = 'Unable to access the network'
    }

    return (
      <div>
        <Card>
          <CardHeader style={{marginTop: '350px'}} />
          <CardMedia
            overlay={<CardTitle title='앗! Oops!'
              subtitle={status + ' : ' + statusText}
              style={{textAlign: 'center', paddingBottom: '50px'}}
              titleStyle={{fontSize: '40px', marginTop: '20px'}}
              subtitleStyle={{fontSize: '20px', marginTop: '30px'}} />}
          />
        </Card>
        <br /><br />
        <div style={{textAlign: 'center'}}>
          <Link to='/'>
            <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </Link>
        </div>
      </div>
    )
  }
}

ErrorPage.propTypes = {
  location: React.PropTypes.object.isRequired
}

export default ErrorPage
