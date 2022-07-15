const express = require("express");
const { ObjectID } = require("mongodb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getDb, connectToDb } = require("./db.js");
const app = express();
const jwt_decode = require("jwt-decode");
const { json } = require("express");

app.use(express.json());
app.use(require("cors")());
PORT = 8000;

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => console.log(`app is working on port ${PORT}`));
    db = getDb();
  }
});

// registeration process
app.post("/register", async (req, res) => {
  const newUser = req.body;
  let user = await db.collection("allusers").findOne({ email: newUser.email });
  if (user) {
    return res.status(401).json({
      text: "البريد الالكتروني الذي تحاول التسجيل به مُستخدَم من قبل مُستخدِِم اخر",
    });
  }
  if (
    newUser.password &&
    newUser.fs_name &&
    newUser.sec_name &&
    newUser.state_name &&
    newUser.city
  ) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashed;
  } else {
    return res
      .status(401)
      .json({ text: "برجاء ادخال جميع البيانات بشكل صحيح" });
  }
  db.collection("allusers")
    .insertOne(newUser)
    .then(() => res.status(200).json({ token: jwt.sign(newUser, "thepass") }))
    .catch((err) => {
      console.log(err.message);
    });
});
app.get("/register", (req, res) => {
  let allusers = [];
  db.collection("allusers")
    .find()
    .forEach((user) => allusers.push(user))
    .then(() => res.status(200).send(allusers))
    .catch((err) => res.status(500).json(err));
});

// auth process

app.post("/auth", async (req, res) => {
  const authuser = req.body;
  if (authuser.password && authuser.email) {
    const userData = await db
      .collection("allusers")
      .findOne({ email: authuser.email });
    if (userData) {
      const isMatch = await bcrypt.compare(
        authuser.password,
        userData.password
      );
      if (!isMatch) return res.status(401).json({ text: `الرقم السري خطأ` });
      res.status(200).json({ token: jwt.sign(userData, "authUserData") });
    } else {
      res.status(404).json({
        text: `البريد الالكتروني الذي تحاول تسجيل الدخول به غير موجود`,
      });
    }
  } else {
    res.status(401).json({ text: "برجاء ادخال جميع البيانات بشكل صحيح" });
  }
});

app.get("/api/shop", (req, res) => {
  let allproducts = [];
  db.collection("allproducts")
    .find()
    .forEach((product) => allproducts.push(product))
    .then(() => res.status(200).json({ allproducts }))
    .catch((err) => res.status(500).json(err));
});
app.post("/api/addproduct", (req, res, next) => {
  const userToken = req.body.token;
  if (!userToken)
    return res
      .status(401)
      .json({ text: "برجاء تسجيل الدخول اولا قبل اضافة منتجات لبيعها" });
  if (!req.body.product)
    return res
      .status(401)
      .json({ text: "برجاء ادخال جميع البيانات بشكل صحيح" });
  const userData = jwt_decode(userToken);
  req.body.product.sellerData = userData;
  console.log("adedd", req.body.product);
  db.collection("allproducts")
    .insertOne({ product: req.body.product })
    .then((results) => res.status(200).json({ results }))
    .catch((err) => res.status(500).send(err));
});
app.delete("/", (req, res) => {
  db.collection("allproducts").remove({});
  res.status(200).send("all is done");
});

app.get("/api/singleproduct/:id", (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id))
    return res.status(404).json({ text: "المنتج غير موجود" });
  db.collection("allproducts")
    .findOne({ _id: ObjectID(id) })
    .then((product) => res.status(200).send(product))
    .catch((err) => res.status(500).json(err));
});

// add to cart process
app.put("/api/addtocart", async (req, res) => {
  if (!req.body.token)
    return res
      .status(402)
      .json({ text: "برجاء تسجيل الدخول اولا قبل اضافة منتجات للسلة" });
  if (!req.body.id)
    return res
      .status(403)
      .json({ text: "برجاء ادخال جميع البيانات بشكل صحيح" });
  const tokenDecoded = jwt_decode(req.body.token);
  const userDB = await db.collection("allusers").findOne({
    _id: ObjectID(tokenDecoded._id),
  });
  if (!userDB) return res.status(401).json({ text: "المستخدم غير موجود" });
  const productDB = await db.collection("allproducts").findOne({
    _id: ObjectID(req.body.id),
  });
  if (!productDB) return res.status(401).json({ text: "المنتج غير موجود" });
  for (let i = 0; i < userDB.cart.length; i++) {
    if (userDB.cart[i] == productDB._id) {
      return res.status(401).json({ text: "المنتج موجود بالسلة" });
    }
  }
  db.collection("allusers")
    .updateOne({ email: tokenDecoded.email }, { $push: { cart: req.body.id } })
    .then(() => res.status(200).send(`تم اضافة المنتج الى السلة`))
    .catch((err) => res.status(500).send(err));
});
app.get("/api/addtocart", (req, res) => {
  let users = [];
  db.collection("allusers")
    .find()
    .forEach((user) => users.push(user))
    .then(() => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
});
// show added products process
app.get("/api/myproducts", (req, res) => {
  let myproducts = [];
  const token = req.query.token;
  if (!token)
    return res.status(401).json({ text: "برجاء اضافه منتجات لبيعها اولا" });

  const decodedToken = jwt_decode(token);
  db.collection("allproducts")
    .find({ "product.sellerData._id": decodedToken._id })
    .forEach((p) => myproducts.push(p))
    .then(() => res.status(200).send(myproducts))
    .catch((err) => res.status(404).send(err));
});

// show cart process
app.get("/api/mycart", async (req, res) => {
  const token = req.query.token;
  if (!token) return res.status(401).json({ text: "برجاء تسجيل الدخول اولا" });
  const decodedToken = jwt_decode(token);

  let mycart = [];
  let userD = {};
  userD = await db
    .collection("allusers")
    .findOne({ _id: ObjectID(decodedToken._id) })
    .catch((err) => console.error(err));
  if (userD.cart.length === 0)
    return res.status(401).json({ text: "لا يوجد منتجات في السلة" });
  for (let i = 0; i < userD.cart.length; i++) {
    mycart.push(
      await db
        .collection("allproducts")
        .findOne({ _id: ObjectID(userD.cart[i]) })
    );
  }
  res.status(200).json({ mycart, userD });
});

// remove from cart process
app.delete("/api/mycart/:id", (req, res) => {
  const token = req.query.token;
  if (!token) return res.status(401).json({ text: "برجاء تسجيل الدخول اولا" });
  const decodedToken = jwt_decode(token);
  const id = req.params.id;
  if (!ObjectID.isValid(id))
    return res.status(404).json({ text: "برجاء معالجة الاخطاء" });
  db.collection("allusers")
    .updateOne({ _id: ObjectID(decodedToken._id) }, { $pull: { cart: id } })
    .then((r) => {
      console.log("r", r);
      if (r.modifiedCount > 0)
        return res.status(200).send("تم حذف المنتج من السلة");
      return res.status(200).send("هناك خطأ ما");
    })
    .catch((err) => res.status(500).send(err));
});

// calc total
app.delete("/api/delete-mycart", (req, res) => {
  const token = req.query.token;
  if (!token) return res.status(401).json({ text: "برجاء تسجيل الدخول اولا" });
  const decodedToken = jwt_decode(token);
  db.collection("allusers")
    .updateOne({ _id: ObjectID(decodedToken._id) }, { $set: { cart: [] } })
    .then((r) => {
      if (r.modifiedCount > 0)
        return res.status(200).send("تم طلب المنتجات بنجاح");
      return res.status(200).send("هناك خطأ ما");
    })
    .catch((err) => res.status(500).json({ text: err }));
});
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});
