import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import Footer from "./footer";
import Product from "./product";
import { toast } from "react-toastify";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`/api/shop`)
      .then((data) => {
        setProducts(data.data.allproducts);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(
          err.response.data.text ? err.response.data.text : "حدث خطأ"
        );
      });
  }, [token]);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="loader m-2">
        {loading ? (
          <div className="">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <span className=""></span>
        )}
      </div>
      <div className="row justify-content-around">
        {products ? (
          products.map((product) => <Product product={product} />)
        ) : (
          <h2>المتجر مغلق الان</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
