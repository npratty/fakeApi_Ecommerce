import React from "react";
import { signIn } from "./services";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { sendDataToServer, updateDataFromServer } from "./services";
import Form from "react-bootstrap/Form";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product || {};
  }

  addName = (e) => {
    this.setState({ title: e.target.value });
  };
  addDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  addPrice = (e) => {
    this.setState({ price: e.target.value });
  };
  addProduct = (e) => {
    e.preventDefault();
    let url = "https://fakestoreapi.com/products";
    let data = {
      title: this.state.title,
      price: this.state.price,
      description: this.state.description,
      image: "https://i.pravatar.cc",
    };

    sendDataToServer(url, data).then((response) => {
      this.props.getProducts();
      this.props.closeButton(false);
    });
  };

  editProduct = (e) => {
    e.preventDefault();
    const id = this.state.id;

    let url = "https://fakestoreapi.com/products/" + id;
    let data = {
      title: this.state.title,
      price: this.state.price,
      description: this.state.description,
      image: this.state.image,
      alt: this.state.alter,
    };

    updateDataFromServer(url, data).then((response) => {
      this.props.closeButton(false);
    });
  };

  render() {
    return (
      <div>
        <Modal show="true">
          <Modal.Header
            closeButton
            onClick={() => this.props.closeButton(false)}
          >
            <Modal.Title>
              {this.props.action === "add" ? "Add" : "Update" + " Product"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.state.title}
                  onChange={this.addName}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={this.state.description}
                  onChange={this.addDescription}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  value={this.state.price}
                  onChange={this.addPrice}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.props.closeButton(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={
                this.props.action === "add" ? this.addProduct : this.editProduct
              }
            >
              {this.props.action === "add" ? "Add" : "Update"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
