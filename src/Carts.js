import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

import { getDataFromServer } from "./services";

export default class Carts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: { products: [] } };
  }

  componentDidMount() {
    this.carts();
  }
  carts = async () => {
    let url = "https://fakestoreapi.com/carts";
    const response = await getDataFromServer(url);
    const cart = response.find((response) => response.userId === 1);
    this.setState({ cart: cart });
    console.log(this.state.cart);
    
}
  render() {
    return (
      <div>
        <Navbar />

        <div
          style={{
            width: "60%",
            borderStyle: "ridge",
            marginTop: "50px",
          }}
        >
          {this.state.cart.products.map((item) => {
            return <Cart product={item} />;
          })}
        </div>
      </div>
    );
  }
}
