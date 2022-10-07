import React, { useEffect, useState } from "react";
import { getDataFromServer, getUser } from "./services";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AddProduct from "./AddProduct";
import Filter from "./Filter";
import Sort from "./Sort";
import ProductsView from "./ProductsView";
import SpinnerOnLoading from "./SpinnerOnLoading";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [productLists, setproductLists] = useState([]);
  const [storedProducts, setstoredProducts] = useState([]);
  const [addProduct, setaddProduct] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [searchProduct, setsearchProduct] = useState("");

  useEffect(() => {
    getProducts();
    checkUser();
  }, []);

  function checkUser() {
    const user = getUser();
    if (!user) {
      navigate("/signin");
    }
  }

  const getProducts = async () => {
    let url = "https://fakestoreapi.com/products";
    const response = await getDataFromServer(url);
    setproductLists(response);
    setstoredProducts(response);
    setisLoading(false);
  };
  function navigateToProdctPage(item) {
    console.log("success");
    localStorage.setItem("id", item.id);
    window.location = "./product/" + item.id;
  }
  function showAddProduct(value) {
    setaddProduct(value);
  }

  const lowToHigh = () => {
    let list = productLists.sort((a, b) => {
      return a.price - b.price;
    });
    setproductLists([...list]);
  };

  const highToLow = () => {
    let x = [...productLists] || [];
    x = x.sort((a, b) => {
      return b.price - a.price;
    });
    setproductLists(x);
  };

  const getCategory = async (x) => {
    let url = "https://fakestoreapi.com/products/category/" + x;
    let response = await getDataFromServer(url);
    setproductLists(response);
  };

  const searchProducts = (e) => {
    // setsearchProduct(e.target.value);
    if (!e.target.value) {
      setproductLists([...storedProducts]);
    } else {
      const searchedProducts = storedProducts.filter((obj) =>
        Object.values(obj).some((val) => val.toString().includes(searchProduct))
      );
      setproductLists([...searchedProducts]);
    }
  };

  return (
    <div style={{ backgroundColor: "#f1f3f6" }}>
      <Navbar />

      <h4 style={{ justifyContent: "center", display: "flex" }}>Products</h4>
      {<div>{isLoading && <SpinnerOnLoading />}</div>}

      <div style={{ justifyContent: "space-around", display: "flex" }}>
        <div className="filter-bar">
          <Filter
            showAddProduct={showAddProduct}
            getCategory={getCategory}
            getProducts={getProducts}
          />
        </div>
        <div className="products-view-space">
          <div className="search-products">
            <input
              className="inputbox, search-products"
              type="text"
              placeholder="Search"
              onChange={(e) => setsearchProduct(e.target.value)}
              onKeyPress={(e) => searchProducts(e)}
            />
          </div>

          <div className="sort-bar">
            <div style={{ display: "flex" }}>
              <h5>Products : </h5>
              {productLists.length} items
            </div>
            <Sort lowToHigh={lowToHigh} highToLow={highToLow} />
          </div>
          <div className="products-view">
            {productLists.map((item) => {
              return (
                <ProductsView
                  navigateToProdctPage={navigateToProdctPage}
                  item={item}
                />
              );
            })}
          </div>
        </div>
        {addProduct ? (
          <AddProduct
            action="add"
            closeButton={showAddProduct}
            getProducts={getProducts}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Products;
