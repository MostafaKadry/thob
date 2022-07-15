import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./product";
import { toast } from "react-toastify";
import Navbar from "./navbar";
import Footer from "./footer";
const MyProducts = () => {
  const apiUrl = "http://localhost:8000";
  const [myproducts, setMyproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const isMine = true;
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/myproducts`, { params: { token } })
      .then((res) => {
        console.log(res);
        setMyproducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) return toast.error(err.response.data.text);
        toast.error(" خطأ برجاء المحاولة في وقت لاحق");
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
        {myproducts ? (
          myproducts.map((product) => (
            <Product product={product} isMine={isMine} />
          ))
        ) : (
          <h2 className="text-center my-3">لم تقم بإضافة اى منتجات حتى الان</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyProducts;
