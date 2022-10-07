import React from "react";
// import { type } from "@testing-library/user-event/dist/type";
import Sort from "./Sort";
import Category from "./Category";
import { Button } from "react-bootstrap";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const type = localStorage.getItem("type");

    return (
      <div>
        {type === "admin" && (
          <div style={{ marginRight: "30px" }}>
            <Button
              variant="primary"
              onClick={() => this.props.showAddProduct(true)}
            >
              Add Product
            </Button>
          </div>
        )}
        {
          <div>
            <div style={{ marginRight: "30px", marginTop: "20px" }}>
              <Category
                getCategory={this.props.getCategory}
                getProducts={this.props.getProducts}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}
