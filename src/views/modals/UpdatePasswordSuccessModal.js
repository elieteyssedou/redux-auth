import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { hideUpdatePasswordSuccessModal } from "../../actions/ui";

@connect()
class UpdatePasswordSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideUpdatePasswordSuccessModal());
  }

  render () {
    return (
      <Modal
        show={this.props.show}
        className="update-password-success-modal"
        onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Your password has been successfully changed.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
            className="update-password-success-modal-close">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdatePasswordSuccessModal;
