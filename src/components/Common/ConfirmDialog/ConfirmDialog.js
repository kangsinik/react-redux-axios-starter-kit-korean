import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { openConfirmDialog, closeConfirmDialog } from '../../../routes/Common/ConfirmDialog/actions'
import Warning from 'material-ui/svg-icons/alert/warning'
import { orange500 } from 'material-ui/styles/colors'

const style = {
  zIndex: 2000
}
export class ConfirmDialog extends React.Component {

  handleYes = () => {
    const submit = this.props.confirmDialog.submitOption.onSubmit
    setTimeout(() => {
      submit()
    }, 200)
    this.props.closeConfirmDialog()
  }

  render () {
    const actions = [
      <FlatButton
        id='confirmNo'
        label='no'
        primary
        onTouchTap={this.props.closeConfirmDialog}
      />,
      <FlatButton
        id='confirmYes'
        label='Yes'
        primary
        keyboardFocused
        onTouchTap={this.handleYes}
      />
    ]

    return (
      <div>
        <Dialog
          style={style}
          actions={actions}
          modal={false}
          open={this.props.confirmDialog.confirmDialogOpen}
          onRequestClose={this.props.closeConfirmDialog}
        >
          <Warning color={orange500} /><br /><br />{this.props.confirmDialog.confirmMessage}
        </Dialog>
      </div>
    )
  }
}

ConfirmDialog.propTypes = {
  confirmDialog: React.PropTypes.object.isRequired,
  openConfirmDialog: React.PropTypes.func.isRequired,
  closeConfirmDialog: React.PropTypes.func.isRequired
}

const mapActionCreators = {
  openConfirmDialog,
  closeConfirmDialog
}

const mapStateToProps = (state) => ({
  confirmDialog: state.confirmDialog // state.'key이름'
})

export default connect(mapStateToProps, mapActionCreators)(ConfirmDialog)
