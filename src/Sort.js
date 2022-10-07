import React, { useState } from "react";
import "./App.css";

const Sort = (props) => {
  const [sortValue, setSortValue] = useState("");

  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      <h5>Sort By:</h5>
      <div
        style={{
          marginLeft: "10px",
        }}
      ></div>
      <div
        style={{
          marginLeft: "10px",
        }}
      >
        <span
          className={
            "cursor-pointor " +
            (sortValue === "lowtohigh" ? "active-sort-text " : "sort-text ")
          }
          onClick={() => {
            props.lowToHigh();
            setSortValue("lowtohigh");
          }}
        >
          Price--Low to High
        </span>
      </div>

      <div
        style={{
          marginLeft: "10px",
        }}
      >
        <span
          className={
            "cursor-pointor " +
            (sortValue === "hightolow" ? "active-sort-text" : "sort-text")
          }
          onClick={() => {
            props.highToLow();
            setSortValue("hightolow");
          }}
        >
          Price--High to Low
        </span>
      </div>
    </div>
  );
};

export default Sort;
