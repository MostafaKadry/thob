import React, { useState } from "react";
import { toast } from "react-toastify";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import { useAuth } from "./auth";
const Login = () => {
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const auth = useAuth();
  const key = `token`;
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`/auth/`, data)
      .then((response) => {
        localStorage.setItem(key, response.data.token);
        auth.login(response.data.token);
        toast.success(`تم تسجيل الدخول بنجاح وجارى الانتقال للمتجر`);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })

      .catch((err) => {
        console.log(err);
        toast.error(err.response ? err.response.data : "خطأ فى البيانات");
      });
  };
  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <form className="row g-3 text-end" onSubmit={handleSubmit}>
        {" "}
        <div className="col-md-4 mx-auto">
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
        </div>
        <div className="col-md-4 mx-auto">
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
          <button className="btn btn-primary" type="submit">
            تأكيد
          </button>
        </div>
        <div className="col-12 text-end">
          <button className="btn" type="">
            ليس لدي حساب اود<Link to="/register"> تسجيل حساب جديد</Link>
            <Outlet />
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default Login;
