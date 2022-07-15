import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product, isMine }) => {
  return (
    <div className="card m-1 col-md-3" key={product._id} id={product._id}>
      <img src={product.product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.product.name}</h5>
        <p className="card-text">{product.product.disc}</p>
      </div>

      <div className="card-footer">
        <small className="text-muted">{product.product.price} ج.م</small>
        <hr></hr>
        <small className="text-muted">الكمية</small>
        {" : "}
        <small className="text-muted">{product.product.qty}</small>
        <hr></hr>
        <small className="text-muted">
          <small className="text-muted">اسم البائع</small>
          {" : "}
          {product.product.sellerData.fs_name}{" "}
          {product.product.sellerData.sec_name}
        </small>
      </div>
      {isMine ? (
        <spn></spn>
      ) : (
        <div className="d-grid gap-2">
          <Link
            to={`/singleproduct/${product._id}`}
            className="btn btn-primary"
          >
            شراء
          </Link>
        </div>
      )}
    </div>
  );
};

export default Product;
