import React from "react";
import { Spinner } from "react-bootstrap";


export default class SpinnerOnLoading extends React.Component {
  render() {
    return (
      <div>
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      </div>
    );
  }
}
