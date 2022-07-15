import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import Shop from "./components/shop";
import Addproduct from "./components/addproduct";
import Singleproduct from "./components/singleproduct";
import MyProducts from "./components/myproducts";
import Usercart from "./components/usercart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/usercart" element={<Usercart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
