import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./navbar";
import Footer from "./footer";
const Singleproduct = () => {
  const URL = `http://localhost:8000`;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${URL}/api/singleproduct/${id}`);
      setProduct(data);
      setLoading(false);
    })();
  }, [id, URL]);

  const handleAddCart = async () => {
    const tokenAndId = { id, token: localStorage.getItem("token") || null };
    await axios
      .put(`${URL}/api/addtocart`, tokenAndId)
      .then((response) => toast.success(response.data))
      .catch((err) => toast.error(err.response.data.text || "حدث خطأ"));
  };
  return (
    <div className="container-fluid">
      <Navbar />
      {!loading ? (
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      {" "}
                      <img
                        id="main-image"
                        src={product.product.img}
                        width="250"
                        alt="product"
                      />{" "}
                    </div>
                    <div className="thumbnail text-center">
                      {" "}
                      <img
                        src={product.product.img}
                        width="70"
                        alt="product"
                      />{" "}
                      <img src={product.product.img} width="70" alt="product" />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="mt-4 mb-3">
                      {" "}
                      <h5 className="text-uppercase">{product.product.name}</h5>
                      <div className="price d-flex flex-row align-items-center">
                        {" "}
                        <span className="act-price">
                          {product.product.price}
                        </span>{" "}
                        <span className="">ج.م</span>
                      </div>
                    </div>
                    <p className="about">{product.product.disc}</p>
                    <hr></hr>
                    <small className="text-muted">
                      <small className="text-muted">اسم البائع</small>
                      {" : "}
                      {product.product.sellerData.fs_name}{" "}
                      {product.product.sellerData.sec_name}
                    </small>
                    <div className="cart mt-4 align-items-center">
                      {" "}
                      <button
                        className="btn btn-secondary text-uppercase mr-2 px-4"
                        onClick={handleAddCart}
                      >
                        اضف الى السلة
                      </button>{" "}
                      <i className="fa fa-heart text-muted"></i>{" "}
                      <i className="fa fa-share-alt text-muted"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Singleproduct;
