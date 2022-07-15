import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "./navbar";
import Footer from "./footer";
const Addproduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    disc: "",
    img: "",
    qty: 0,
    sellerData: "",
  });

  const handleChange = ({ target }) => {
    setProduct({ ...product, [target.name]: target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token") || null;
    // setProduct({ ...product, sellerData: token });
    product.sellerData = token;
    if (
      !product.name ||
      product.price <= 0 ||
      !product.disc ||
      !product.img ||
      product.qty <= 0 ||
      !product.sellerData
    )
      return toast.error("برجاء ادخال جميع البيانات بشكل صحيح");
    axios
      .post(`/api/addproduct`, { product, token })
      .then(() => toast.success(`تم اضافه المنتج بنجاح`))
      .catch((err) => {
        toast.error(
          err.response.data.text || "حدث خطأ برجاء المحاولة مرة اخرى"
        );
      });
  };

  return (
    <div className="container-fluid text-end">
      <Navbar />
      <form
        className="row g-3 text-end justify-content-around"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
        action={`/api/addproduct`}
      >
        <div className="mb-3 col-md-3">
          <label className="form-label">اسم المنتج</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">السعر</label>
          <div className="input-group mb-3">
            <input
              name="price"
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              onChange={handleChange}
            />
            <span className="input-group-text">ج.م</span>
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">الكمية المتاحة</label>
          <div className="input-group mb-3">
            <input
              name="qty"
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" col-md-6">
          <label className="form-label">ضع ربط لصورة المنتج</label>
          <div className="input-group mb-3">
            <input
              type="url"
              className="form-control"
              name="img"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 col-md-3">
          <label className="form-label">الوصف</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingTextarea"
              name="disc"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-12 text-end text-center">
          <button className="btn btn-primary w-50" type="submit">
            تأكيد
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Addproduct;
