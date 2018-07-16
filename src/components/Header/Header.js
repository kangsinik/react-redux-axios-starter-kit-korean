
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { cyan500 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import SocialNotifications from 'material-ui/svg-icons/social/notifications'
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app'

const styles = {
  menuButtonStyle: {
    marginTop: '5px',
    color: cyan500
  },
  menuIconStyle: {
    marginTop: '5px',
    color: cyan500
  },
  avatarStyle: {
    marginTop: '10px',
    marginLeft: '10px',
    cursor: 'pointer'
  },
  textDivStyle: {
    margin: '20px 0px 0px 0px',
    cursor: 'pointer',
    display: 'inline-block'
  },
  badgeStyle: {
    width: '25px',
    height: '25px',
    top: 7,
    right: 7
  }
}

export class Header extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: 3,
      primaryButton: true,
      secondaryButton: true,
      toolbarFirstChild: true,
      notificationNumber: 0,
    }
  }

  handleChange = (event, index, value) => this.setState({value})

  render () {
    return (
      <div>
        <div style={{backgroundColor: 'white', height: '75px', width: '100%', padding: '10px 24px', position: 'fixed', zIndex: '1350',
          boxShadow: '0px 0px 5px 5px lightgray', minWidth: '1060px'}}>
          <div style={{float: 'left', minWidth: '180px'}}>
            <Link to='/'>
              <FlatButton style={styles.menuButtonStyle} label='Sample' primary={this.state.primaryButton}
              labelStyle={{color: cyan500, fontSize: '35px', padding: '15px 5px', fontWeight: 'bold'}} hoverColor='#FFFFFF'
              />
            </Link>
          </div>
          <div style={{float: 'left', minWidth: '410px'}}>
            <Link to='/counter'>
              <FlatButton style={styles.menuButtonStyle} label='Project' primary={this.state.primaryButton} labelStyle={{fontSize: '16px'}}
              />
              </Link>
          </div>
          <div style={{float: 'right', minWidth: '420px'}}>
            <div style={{float: 'right'}}>
              {this.state.notificationNumber > 0
              ? <Badge
                badgeContent={this.state.notificationNumber}
                secondary={this.state.secondaryButton}
                badgeStyle={styles.badgeStyle}
                style={{padding: '6px 12px 12px 12px'}}
              >
                <SocialNotifications />
              </Badge>
              : null
              }
              <IconButton tooltip='Sign Out' style={styles.menuIconStyle} onClick={this.props.logout}>
                <ActionExitToApp />
              </IconButton>
            </div>
            <div style={{float: 'right', margin: '15px 10px 0px 0px'}}>
              <Avatar size={30} backgroundColor={cyan500}>A</Avatar>
            </div>
            <div title="Test Proejct" style={{float: 'right', margin: '5px 15px 0px -10px'}}>
              <SelectField labelStyle={{textOverflow: 'ellipsis', overflow: 'hidden', color: 'black', cursor: 'default'}}
                value={1} disabled underlineStyle={{borderBottomStyle: 'none'}} style={{width: 'auto'}}>
                <MenuItem value={1} primaryText="Test Proejct" />
              </SelectField>
            </div>
            <div style={{float: 'right', margin: '20px 20px 0px 0px'}}>
            Test Company {'\u00A0'} │
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
