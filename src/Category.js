import React, { useState } from "react";

const Category = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [category] = useState([
    "All categories",
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing"
  ]);
  const getCategory = (item) => {
    setSelectedCategory(item);
    {
      item === "All categories"
        ? props.getProducts()
        : props.getCategory(item.toLowerCase());
    }
  };

  return (
    <div>
      <div>
        <h5>
          <u>Filters</u>
        </h5>

        {category.map((item) => {
          return (
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>
              <p
                onClick={() => {
                  getCategory(item);
                }}
                style={{
                  fontWeight: selectedCategory === item ? "bold" : "normal",
                  cursor: "pointer",
                }}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
