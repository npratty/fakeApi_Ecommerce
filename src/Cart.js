import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { getDataFromServer } from "./services";
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, quantity: this.props.product.quantity };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    let url =
      "https://fakestoreapi.com/products/" + this.props.product.productId;
    const response = await getDataFromServer(url);
    this.setState({ product: response });
    console.log(this.state.product.title);
  };
  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  decreaseQuantity = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  render() {
    const product = this.state.product;
    return (
      <div>
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid black",
            padding: "20px 0px",
            justifyContent: "space-between",
            display: "flex",
            marginTop: "30px",            
          }}
        >
          <div
            style={{
              width: "50%",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "70%",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%" }}>
                {" "}
                <img
                  style={{ width: "80px", marginLeft: "10px" }}
                  src={product.image}
                  alt="{product.title}"
                ></img>{" "}
                <div style={{ marginTop: "10px", marginLeft: "15px" }}>
                  {" "}
                  {this.state.quantity <= 1 ? (
                    <button style={{ opacity: "" }} disabled>
                      -
                    </button>
                  ) : (
                    <button onClick={this.decreaseQuantity}>-</button>
                  )}
                  <a> {this.state.quantity}</a>
                  <button
                    style={{ marginLeft: "5px" }}
                    onClick={this.increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <div style={{ marginLeft: "50px" }}>{product.title}</div>
            </div>
          </div>
          <div style={{ marginRight: "80px" }} >
          {Math.round(product.price * this.state.quantity )}
          </div>
        </div>
      </div>
    );
  }
}
