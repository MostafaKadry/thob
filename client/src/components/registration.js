import React, { useState } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import Navbar from "./navbar";
import Footer from "./footer";
const Registration = () => {
  //   function getLocation() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //       alert("Geolocation is not supported by this browser.");
  //     }
  //   }

  //   function showPosition(position) {
  //     console.log(position.coords.longitude, position.coords.latitude);
  //   }
  //   getLocation();
  const [data, setData] = useState({
    fs_name: "",
    sec_name: "",
    password: "",
    state_name: "",
    city: "",
    email: "",
    cart: [],
  });

  const key = `token`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`/register`, data)
      .then((response) => {
        localStorage.setItem(key, response.data.token);
        console.log(jwtDecode(response.data.token));
        toast.success(`تم تسجيل حساب جديد بنجاح جارى الانتقال للمتجر`);
        setTimeout(() => {
          window.location = "/";
        }, 5000);
      })
      .catch((err) => {
        toast.error(
          err.response.data.text ? err.response.data.text : "خطأ فى البيانات"
        );
      });
  };
  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <form className="row g-3 text-end" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            الاسم الاول
          </label>
          <input
            type="text"
            name="fs_name"
            className="form-control"
            id="st-name"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">
            الاسم الاخير
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            name="sec_name"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault04" className="form-label">
            الدولة
          </label>
          <select
            className="form-select"
            id="state"
            required
            name="state_name"
            onChange={handleChange}
          >
            <option defaultValue disabled value="">
              اختر
            </option>

            <option>دولة الإمارات العربية</option>
            <option>الجزائر</option>
            <option>المغربالعربية</option>
            <option>موريتانيا</option>
            <option>الكويت</option>
            <option>ليبيا</option>
            <option>لبنان</option>
            <option>مصر</option>
            <option>فلسطين</option>
            <option>عمان</option>
            <option>السعودية</option>
            <option>تونس</option>
            <option>تركيا</option>
            <option>اليمن</option>
            <option>العراق</option>
            <option>السودان</option>
            <option>الاردن</option>
            <option>سوريا</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault03" className="form-label">
            المدينة
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault03" className="form-label">
            البريد الالكتروني
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            onChange={handleChange}
          ></input>
        </div>{" "}
        <div className="col-md-4">
          <label htmlFor="validationDefault03" className="form-label">
            الرقم السري
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-12 text-end">
          <div className="form-check">
            <input
              className="form-check-input float-end ms-1"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            ></input>
            <label className="form-check-label" htmlFor="invalidCheck2">
              اوافق على الشروط والاحكام
            </label>
          </div>
        </div>
        <div className="col-12 text-end">
          <button className="btn btn-primary" type="submit">
            تأكيد
          </button>
        </div>
        <div className="col-12 text-end">
          <button className="btn" type="">
            لدي حساب بالفعل اود<Link to="/login"> تسجيل الدخول</Link>
            <Outlet />
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Registration;
