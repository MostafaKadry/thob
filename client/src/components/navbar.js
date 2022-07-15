import React, { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const Navbar = () => {
  let [user, setUser] = useState(localStorage.getItem("token"));
  const handleLogout = () => {
    toast.success("تم تسجيل الخروج بنجاح");
    localStorage.removeItem("token");
    setUser(null);
    return;
  };
  const handleAddProduct = () => {
    if (!user) return toast.error("برجاء تسجيل الدخول اولا");
    window.location.pathname = `/add-product`;
  };
  const handleshowmyproducts = () => {
    if (!user) return toast.error("برجاء تسجيل الدخول اولا");
    window.location.pathname = `/myproducts`;
  };
  const handleCart = () => {
    if (!user) return toast.error("برجاء تسجيل الدخول اولا");
    window.location.pathname = `/usercart`;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <>
          <form className="d-flex col-md-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <Link to="/" className="m-auto col-md-5 text-center">
            <h2>
              <span className="badge bg-info">ثوب للملابس </span>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <hr style={{ margin: "0.5rem 0" }}></hr>
              <hr style={{ margin: "0.5rem 0" }}></hr>
              <hr style={{ margin: "0.5rem 0" }}></hr>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-1">
                <img
                  src="./images/shoppingcart.png"
                  alt="shoping-cart"
                  style={{ width: "30px", height: "33px", cursor: "pointer" }}
                  onClick={handleCart}
                />
              </li>
              <li className="nav-item m-1">
                <button onClick={handleshowmyproducts} className="border-0 p-0">
                  <span className="badge bg-primary p-2">منتجاتك</span>
                </button>
              </li>
              <li className="nav-item m-1">
                <button onClick={handleAddProduct} className="border-0 p-0">
                  <span className="badge bg-primary p-2">بيع بضاعتك هنا</span>
                </button>
              </li>
              {user ? (
                <li className="nav-item m-1">
                  <button onClick={handleLogout} className="border-0 p-0">
                    <span className="badge bg-danger p-2">Logout</span>
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <span className="nav-link active">
                      <Link to="/register">إنشاء حساب جديد</Link>
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">
                      <Link to="/login">تسجيل الدخول</Link>
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </>
      </nav>
    </>
  );
};

export default Navbar;
