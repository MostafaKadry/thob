import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import Footer from "./footer";
import Product from "./product";
const Shop = () => {
  const URL = `http://localhost:8000`;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await axios.get(`${URL}/api/shop`);
      setLoading(false);
      setProducts(data.data.allproducts);
    })();
  }, [products, URL]);

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
