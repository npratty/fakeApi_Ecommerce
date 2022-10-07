import React from "react";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    localStorage.removeItem("type");
    return (
      <div>
        <Navbar />
        <div
          style={{ height: "85vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <div className="my-2">
              <Link style={{ textDecaration: "none" }} to="/products">
                <Button
                  style={{ width: "200px" }}
                  variant="primary"
                  onClick={() => localStorage.setItem("type", "customer")}
                >
                  {" "}
                  Customer
                </Button>
              </Link>
            </div>
            <div>
              <Link style={{ textDecaration: "none" }} to="/products">
                <Button
                  style={{ width: "200px" }}
                  variant="primary"
                  onClick={() => localStorage.setItem("type", "admin")}
                >
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
