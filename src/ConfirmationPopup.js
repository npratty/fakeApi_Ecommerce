import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class ConfirmationPopup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Modal show="true">
          <Modal.Header
            closeButton
            onClick={() => this.props.deleteConfirmation(false)}
          >
            {this.props.header}
          </Modal.Header>
          <Modal.Body> {this.props.action}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.props.deleteConfirmation(false)}
            >
              Close
            </Button>
            <Button variant="danger" onClick={this.props.deleteProduct}>
              {this.props.Button}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
