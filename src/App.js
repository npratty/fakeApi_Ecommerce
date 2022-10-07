import "./App.css";
import React from "react";
import Products from "./Products";
import Product from "./Product";
import Home from "./Home";
import Carts from "./Carts";

import SignIn from "./SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
