import React from "react";
import { Link } from "react-router-dom";
import { deleteUser, getDataFromServer } from "./services";
import "./App.css";
import Carts from "./Carts";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carts: "" };
  }

  componentDidMount() {
    this.cartCount();
  }

  cartCount = async () => {
    let url = "https://fakestoreapi.com/carts";
    const response = await getDataFromServer(url);
    this.setState({ carts: response });
    console.log(this.state.carts);
  };

  navigateToProducts() {
    window.location = "/home";
    localStorage.removeItem("type");
  }

  render() {
    const type = localStorage.getItem("type");

    return (
      <div
        style={{
          height: "50px",
          backgroundColor: "#0a1b2b",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "30px",
            marginLeft: "10px",
            fontWeight: "bold",
            width: "80%",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div onClick={this.navigateToProducts}>Prat</div>
        </div>

        <div style={{ marginRight: 20 }} className="d-flex">
          {type === "customer" &&  (
            <div
              style={{ marginTop: 10 }}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mr-1 mx-2 ">
                <Link style={{ textDecoration: "none" }} to="/profile">
                  <i style={{ fontSize: 21 }} class="fa fa-user text-white"></i>
                </Link>
              </div>
              <div className="mx-2" style={{ marginLeft: 10 }}>
                <Link to="/carts">
                  <i
                    className="fa fa-shopping-cart"
                    style={{ fontSize: 24, color: "white" }}
                  ></i>
                  <span className="badge badge-warning" id="lblCartCount">
                    {this.state.carts.length}
                  </span>
                </Link>
              </div>
            </div>
          )}

          <Link
            style={{
              color: "white",
              fontSize: "17px",
              marginTop: "12px",
              marginRight: "20px",
              textDecoration: "none",
              marginLeft: 10,
            }}
            onClick={deleteUser}
            to="/signin"
          >
            Logout
          </Link>
        </div>
      </div>
    );
  }
}
