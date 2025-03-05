import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import ProductDetails from "../src/pages/ProductDetails";
import CartPage from "../src/pages/CartPage";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Ad from "./components/Ad";
import Featured from "./components/Featured";
import New_arrival from "./components/New_arrival";
import SingleProduct from "./components/SingleProduct";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    {/* <Slider/>
    <Ad/>
    <New_arrival/>
    <Featured/> */}
    <SingleProduct/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

