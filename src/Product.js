import React from "react";
import { getDataFromServer, getUser, deleteDataFromServer } from "./services";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import AddProduct from "./AddProduct";
import ConfirmationPopup from "./ConfirmationPopup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerOnLoading from "./SpinnerOnLoading";

const Product = () => {
  const navigate = useNavigate();

  const [product, setproduct] = useState({ rating: {} });
  //   const [rating, setrating] = useState({});
  const [editproduct, seteditproduct] = useState(false);
  const [deleteConfirmation, setdeleteConfirmation] = useState(false);
  const [isLoading, setisLoading] = useState(false);



  useEffect(() => {
    CheckUser();
    let id = localStorage.getItem("id");
    let url = "https://fakestoreapi.com/products/" + id;
    getDataFromServer(url).then((response) => {
      setproduct(response);
      setisLoading(true)
      //   setrating(response.rating);
    });
  }, []);

  function CheckUser() {
    const user = getUser();
    if (!user) {
      navigate("/signin");
    }
  }

  function deleteProduct() {
    let id = localStorage.getItem("id");

    let url = "https://fakestoreapi.com/products/" + id;

    deleteDataFromServer(url).then((response) => {
      window.location = "/products";
    });
  }

  const type = localStorage.getItem("type");

  return (
    <div>
      <Navbar />
     {!isLoading && <SpinnerOnLoading/>}
      {type === "admin" && (
        <div style={{ display: "flex", marginLeft: "80%", marginTop: "30px" }}>
          <div className="mx-2">
            <Button variant="primary" onClick={() => seteditproduct(true)}>
              Edit Product
            </Button>
          </div>
          <div>
            <Button
              variant="danger"
              onClick={() => setdeleteConfirmation(true)}
            >
              Delete Product
            </Button>
          </div>
        </div>
      )}

      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <div style={{ width: "100%", marginTop: "50px", marginLeft: "50px" }}>
          <div>
            <img
              className="product-image-view"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <div className="product-title-price-view">
          <div> {product.title}</div>
          {product && product.price && (
            <div>
              <p> Rs. {product.price}</p>
              <p>
                {" "}
                {product.rating.rate}&#9733;|{product.rating.count}k Ratings
              </p>
            </div>
          )}
          {editproduct ? (
            <AddProduct
              action="edit"
              product={product}
              closeButton={seteditproduct}
            />
          ) : null}
        </div>
      </div>
      {deleteConfirmation && (
        <ConfirmationPopup
          header="Delete Product"
          action="Are you sure want to Delete? "
          deleteConfirmation={deleteConfirmation}
          Button="Delete"
          deleteProduct={deleteProduct}
        />
      )}
    </div>
  );
};

export default Product;
