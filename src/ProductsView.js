import React from "react";

const img = require("./tshirt.jpeg");

export default class ProductsView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let item = this.props.item;

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          width: "25%",
          boxShadow:"2px 2px 10px black"
        }}
      >
        <div
          onClick={() => this.props.navigateToProdctPage(item)}
          style={{
            width: "100%",
            height: "350px",
            cursor: "pointer",
            marginBottom: "50px",
          }}
        >
          <div className="products-image-view">
            <img
              style={{ width: "150px" }}
              src={item.image}
              alt="{item.title}"
            />
          </div>
          <div className="products-title-price-view">
            <p className="products-title-view" title={item.title}>
              {item.title}
            </p>{" "}
            <div>Rs.{item.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
