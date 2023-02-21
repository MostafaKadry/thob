import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "./footer";
const Usercart = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const requiredQty = 1;
  const [requested, setRequested] = useState(false);
  const [showPay, setShowPay] = useState(false);
  //   const handleRequest = () => {
  //     setRequested(true);
  //     toast.info("تم طلب المنتج وهو فى طريقه اليك ");
  //   };
  const handleCansel = () => {
    setRequested(false);
    toast.warning("تم الغاء الطلب");
  };
  const handleRemove = (id) => {
    axios
      .delete(`/api/mycart/${id}`, { params: { token } })
      .then((res) => {
        toast.warning(res.data);
        setUser({
          ...user,
          mycart: user.mycart.filter((cart) => cart._id !== id),
        });
      })

      .catch((err) =>
        toast.error(err.response.data ? err.response.data.text : "حدث خطأ")
      );
  };
  const getTotal = () => {
    let total = 0;
    user.mycart.map((cart) => {
      return (total += cart.product.price * requiredQty);
    });
    return total;
  };
  const emptyingCartFronDB = () => {
    axios
      .delete(`/api/delete-mycart`, { params: { token } })
      .then((res) => {
        setLoading(false);
        toast.warning(res.data);
        setUser({
          ...user,
          mycart: [],
        });
      })
      .catch((err) =>
        toast.error(err.response.data ? err.response.data.text : "حدث خطأ")
      );
  };
  const getPayPal = () => {
    if (!showPay) {
      setShowPay(true);
      window.paypal
        .Buttons({
          // Sets up the transaction when a payment button is clicked
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: getTotal(),
                  },
                },
              ],
            });
          },
          // Finalize the transaction after payer approval
          onApprove: (data, actions) => {
            return actions.order.capture().then(function (orderData) {
              // Successful capture! For dev/demo purposes:
              const transaction =
                orderData.purchase_units[0].payments.captures[0];
              toast.info(`تم تأكيد الطلب بنجاح رقم العمليه ${transaction.id}`);
              emptyingCartFronDB();
            });
          },
        })
        .render("#paypal-button-container");
    } else {
      setShowPay(false);
      document
        .getElementById("paypal-button-container")
        .removeChild(document.querySelector(".paypal-buttons"));
    }
  };
  useEffect(() => {
    axios
      .get(`/api/mycart`, { params: { token } })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === "ERR_BAD_RESPONSE")
          return toast.error("لا يتوفر اتصال بالانترنت");
        toast.warning(err.response.data ? err.response.data.text : "حدث خطأ");
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
        {user.mycart && user.mycart.length > 0 ? (
          <>
            <div className=" text-center row">
              <div className="card-header">
                <h3>بيانات المستحدم</h3>
                <div className="text-end">
                  <div className="">
                    الاسم : {user.userD.fs_name} {user.userD.sec_name}
                  </div>
                  <div>
                    عنوان الشحن : {user.userD.state_name} , {user.userD.city}
                  </div>
                  <div>البريد الالكتروني : {user.userD.email}</div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">المنتجات المطلوبة</h5>
                <div className="row">
                  {user.mycart.map((product) => (
                    <div
                      className="card col-md-3 m-2 p-0"
                      key={product._id}
                      style={{ width: "16rem" }}
                      id={product._id}
                    >
                      <button
                        type="button"
                        className="btn-close bg-danger m-1"
                        onClick={() => handleRemove(product._id)}
                      ></button>
                      <div className="card-body">
                        <h5 className="card-title">{product.product.name}</h5>
                        <img
                          src={product.product.img}
                          alt="product"
                          style={{ width: "14%" }}
                        />
                        <div className="">
                          سعر القطعة : {product.product.price}
                        </div>
                        <div className="">
                          الكمية المتاحة : {product.product.qty}
                        </div>
                        <div className=""> الكمية المطلوبة: {requiredQty}</div>
                        <hr className="m-1 p-0"></hr>
                        <div className="">
                          اجمالى : {requiredQty * product.product.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-footer text-muted">
                {!requested ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-primary my-3"
                      onClick={getPayPal}
                    >
                      طلب المنتجات للشحن
                    </button>
                    <div id="paypal-button-container"></div>
                  </>
                ) : (
                  <>
                    <div className="text-start">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleCansel}
                      >
                        الغاء الطلب
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <h2 className="title text-center mt-3">السلة فارغة </h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Usercart;
