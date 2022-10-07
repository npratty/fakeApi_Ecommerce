import React from "react";
import Navbar from "./Navbar";
import { getDataFromServer } from "./services";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    let url = "https://fakestoreapi.com/users/1";
    const response = await getDataFromServer(url);
    this.setState({ user: response });
  };

  render() {
    let user = this.state.user || {};
    return (
      <div>
        <Navbar />

        {Object.keys(user).length >= 1 && (
          <div
            style={{
              height: "100vh",
              display: "flex",
              backgroundColor: "#f1f3f6",
            }}
          >
            <div
              style={{
                padding: "10px",
                float: "right",
                marginTop: "125px",
                marginLeft: "250px",
              }}
            >
              <div className="d-flex align--center " style={{borderBottom:"1px solid black"}}>
                <h4>Name:</h4>
                <p style={{ marginTop: "4px" }}>
                  {" "}
                  {user.name["firstname"] + user.name["lastname"]}
                </p>
              </div>
              <div className="d-flex align-items-center " style={{borderBottom:"1px solid black"}}>
                <h4>Email:</h4>
                <p style={{ marginTop: "10px" }}>{user.email}</p>
              </div>
              <div className="d-flex align-items-center" style={{borderBottom:"1px solid black"}}>
                <h4>Address:</h4>
                <p style={{ marginTop: "14px" }}>
                  {user.address.number +
                    "," +
                    user.address.city +
                    "," +
                    user.address.street +
                    "," +
                    user.address.zipcode}
                </p>
              </div>
              <div className="d-flex align-items-center" style={{borderBottom:"1px solid black"}}>
                <h4>Phone No:</h4>
                <p style={{marginTop:"14px"}}>{user.phone}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
