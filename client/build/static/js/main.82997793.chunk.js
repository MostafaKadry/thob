(this.webpackJsonpthob = this.webpackJsonpthob || []).push([
  [0],
  {
    41: function (e, t, c) {},
    80: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(1),
        s = c(21),
        n = c.n(s),
        r = (c(41), c(10)),
        l = c(2),
        i = c(12),
        o = c(8),
        j = c(9),
        d = c.n(j),
        m = c(11),
        b = c(4),
        u = c(3),
        x = c(6),
        h = c.n(x),
        O = c(0),
        p = function () {
          var e = Object(a.useState)(localStorage.getItem("token")),
            t = Object(b.a)(e, 2),
            c = t[0],
            s = t[1];
          return Object(O.jsx)(O.Fragment, {
            children: Object(O.jsx)("nav", {
              className: "navbar navbar-expand-lg bg-light",
              children: Object(O.jsxs)("div", {
                className: "container-fluid",
                children: [
                  Object(O.jsxs)("form", {
                    className: "d-flex col-md-3",
                    role: "search",
                    children: [
                      Object(O.jsx)("input", {
                        className: "form-control me-2",
                        type: "search",
                        placeholder: "Search",
                        "aria-label": "Search",
                      }),
                      Object(O.jsx)("button", {
                        className: "btn btn-outline-success",
                        type: "submit",
                        children: "Search",
                      }),
                    ],
                  }),
                  Object(O.jsx)(r.b, {
                    to: "/",
                    className: "m-auto col-md-5 text-center",
                    children: Object(O.jsx)("h2", {
                      children: Object(O.jsx)("span", {
                        className: "badge bg-info",
                        children:
                          "\u062b\u0648\u0628 \u0644\u0644\u0645\u0644\u0627\u0628\u0633 ",
                      }),
                    }),
                  }),
                  Object(O.jsx)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: Object(O.jsxs)("ul", {
                      className: "navbar-nav me-auto mb-2 mb-lg-0",
                      children: [
                        Object(O.jsx)("li", {
                          className: "nav-item mx-1",
                          children: Object(O.jsx)("img", {
                            src: "./images/shoppingcart.png",
                            alt: "shoping-cart",
                            style: {
                              width: "30px",
                              height: "33px",
                              cursor: "pointer",
                            },
                            onClick: function () {
                              if (!c)
                                return u.toast.error(
                                  "\u0628\u0631\u062c\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0627\u0648\u0644\u0627"
                                );
                              window.location.pathname = "/usercart";
                            },
                          }),
                        }),
                        Object(O.jsx)("li", {
                          className: "nav-item mx-1",
                          children: Object(O.jsx)("button", {
                            onClick: function () {
                              if (!c)
                                return u.toast.error(
                                  "\u0628\u0631\u062c\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0627\u0648\u0644\u0627"
                                );
                              window.location.pathname = "/myproducts";
                            },
                            className: "border-0 p-0",
                            children: Object(O.jsx)("span", {
                              className: "badge bg-primary p-2",
                              children:
                                "\u0645\u0646\u062a\u062c\u0627\u062a\u0643",
                            }),
                          }),
                        }),
                        Object(O.jsx)("li", {
                          className: "nav-item mx-1",
                          children: Object(O.jsx)("button", {
                            onClick: function () {
                              if (!c)
                                return u.toast.error(
                                  "\u0628\u0631\u062c\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0627\u0648\u0644\u0627"
                                );
                              window.location.pathname = "/add-product";
                            },
                            className: "border-0 p-0",
                            children: Object(O.jsx)("span", {
                              className: "badge bg-primary p-2",
                              children:
                                "\u0628\u064a\u0639 \u0628\u0636\u0627\u0639\u062a\u0643 \u0647\u0646\u0627",
                            }),
                          }),
                        }),
                        c
                          ? Object(O.jsx)("li", {
                              className: "nav-item",
                              children: Object(O.jsx)("button", {
                                onClick: function () {
                                  u.toast.success(
                                    "\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c \u0628\u0646\u062c\u0627\u062d"
                                  ),
                                    localStorage.removeItem("token"),
                                    s(null);
                                },
                                className: "border-0 p-0",
                                children: Object(O.jsx)("span", {
                                  className: "badge bg-danger p-2",
                                  children: "Logout",
                                }),
                              }),
                            })
                          : Object(O.jsxs)(O.Fragment, {
                              children: [
                                Object(O.jsx)("li", {
                                  className: "nav-item",
                                  children: Object(O.jsx)("span", {
                                    className: "nav-link active",
                                    children: Object(O.jsx)(r.b, {
                                      to: "/register",
                                      children:
                                        "\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f",
                                    }),
                                  }),
                                }),
                                Object(O.jsx)("li", {
                                  className: "nav-item",
                                  children: Object(O.jsx)("span", {
                                    className: "nav-link",
                                    children: Object(O.jsx)(r.b, {
                                      to: "/login",
                                      children:
                                        "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        f = function () {
          return Object(O.jsx)("nav", {
            className: "navbar bg-light mt-3",
            children: Object(O.jsxs)("div", {
              className: "container-fluid",
              children: [
                Object(O.jsx)("a", {
                  className: "navbar-brand",
                  href: "mailto:mostafakadry806@gmail.com",
                  children: "mostafakadry806@gmail.com",
                }),
                Object(O.jsx)("div", {
                  className: "navbar-header",
                  children: Object(O.jsx)("h5", {
                    children: "Developed by Mostafa Kadry",
                  }),
                }),
              ],
            }),
          });
        },
        N = function () {
          var e = Object(a.useState)({ password: "", email: "" }),
            t = Object(b.a)(e, 2),
            c = t[0],
            s = t[1],
            n = (function () {
              var e = Object(m.a)(
                d.a.mark(function e(t) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.next = 3),
                            h.a
                              .post("".concat("http://", "/auth"), c)
                              .then(function (e) {
                                localStorage.setItem("token", e.data.token),
                                  u.toast.success(
                                    "\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0646\u062c\u0627\u062d \u0648\u062c\u0627\u0631\u0649 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0644\u0644\u0645\u062a\u062c\u0631"
                                  ),
                                  setTimeout(function () {
                                    window.location = "/";
                                  }, 4e3);
                              })
                              .catch(function (e) {
                                u.toast.error(
                                  e.response.data.text ||
                                    "\u062e\u0637\u0623 \u0641\u0649 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"
                                );
                              })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            j = function (e) {
              var t = e.target;
              s(
                Object(o.a)(
                  Object(o.a)({}, c),
                  {},
                  Object(i.a)({}, t.name, t.value)
                )
              );
            };
          return Object(O.jsxs)("div", {
            className: "container-fluid",
            children: [
              Object(O.jsx)(p, {}),
              Object(O.jsxs)("form", {
                className: "row g-3 text-end",
                onSubmit: n,
                children: [
                  " ",
                  Object(O.jsxs)("div", {
                    className: "col-md-4 mx-auto",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault03",
                        className: "form-label",
                        children:
                          "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
                      }),
                      Object(O.jsx)("input", {
                        type: "email",
                        className: "form-control",
                        id: "email",
                        name: "email",
                        required: !0,
                        onChange: j,
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "col-md-4 mx-auto",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault03",
                        className: "form-label",
                        children:
                          "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064a",
                      }),
                      Object(O.jsx)("input", {
                        type: "password",
                        className: "form-control",
                        id: "password",
                        name: "password",
                        required: !0,
                        onChange: j,
                      }),
                    ],
                  }),
                  Object(O.jsx)("div", {
                    className: "col-12 text-end",
                    children: Object(O.jsx)("button", {
                      className: "btn btn-primary",
                      type: "submit",
                      children: "\u062a\u0623\u0643\u064a\u062f",
                    }),
                  }),
                  Object(O.jsx)("div", {
                    className: "col-12 text-end",
                    children: Object(O.jsxs)("button", {
                      className: "btn",
                      type: "",
                      children: [
                        "\u0644\u064a\u0633 \u0644\u062f\u064a \u062d\u0633\u0627\u0628 \u0627\u0648\u062f",
                        Object(O.jsx)(r.b, {
                          to: "/register",
                          children:
                            " \u062a\u0633\u062c\u064a\u0644 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f",
                        }),
                        Object(O.jsx)(l.a, {}),
                      ],
                    }),
                  }),
                ],
              }),
              Object(O.jsx)(f, {}),
            ],
          });
        },
        v = c(36),
        g = function () {
          var e = Object(a.useState)({
              fs_name: "",
              sec_name: "",
              password: "",
              state_name: "",
              city: "",
              email: "",
              cart: [],
            }),
            t = Object(b.a)(e, 2),
            c = t[0],
            s = t[1],
            n = (function () {
              var e = Object(m.a)(
                d.a.mark(function e(t) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.next = 3),
                            h.a
                              .post("".concat("http://", "/register"), c)
                              .then(function (e) {
                                localStorage.setItem("token", e.data.token),
                                  console.log(Object(v.a)(e.data.token)),
                                  u.toast.success(
                                    "\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f \u0628\u0646\u062c\u0627\u062d \u062c\u0627\u0631\u0649 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0644\u0644\u0645\u062a\u062c\u0631"
                                  ),
                                  setTimeout(function () {
                                    window.location = "/";
                                  }, 5e3);
                              })
                              .catch(function (e) {
                                u.toast.error(
                                  e.response.data.text ||
                                    "\u062e\u0637\u0623 \u0641\u0649 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"
                                );
                              })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            j = function (e) {
              var t = e.target;
              s(
                Object(o.a)(
                  Object(o.a)({}, c),
                  {},
                  Object(i.a)({}, t.name, t.value)
                )
              );
            };
          return Object(O.jsxs)("div", {
            className: "container-fluid",
            children: [
              Object(O.jsx)(p, {}),
              Object(O.jsxs)("form", {
                className: "row g-3 text-end",
                onSubmit: n,
                children: [
                  Object(O.jsxs)("div", {
                    className: "col-md-4",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault01",
                        className: "form-label",
                        children:
                          "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",
                      }),
                      Object(O.jsx)("input", {
                        type: "text",
                        name: "fs_name",
                        className: "form-control",
                        id: "st-name",
                        onChange: j,
                        required: !0,
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "col-md-4",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault02",
                        className: "form-label",
                        children:
                          "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u062e\u064a\u0631",
                      }),
                      Object(O.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        id: "last-name",
                        name: "sec_name",
                        onChange: j,
                        required: !0,
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "col-md-4",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault04",
                        className: "form-label",
                        children: "\u0627\u0644\u062f\u0648\u0644\u0629",
                      }),
                      Object(O.jsxs)("select", {
                        className: "form-select",
                        id: "state",
                        required: !0,
                        name: "state_name",
                        onChange: j,
                        children: [
                          Object(O.jsx)("option", {
                            defaultValue: !0,
                            disabled: !0,
                            value: "",
                            children: "\u0627\u062e\u062a\u0631",
                          }),
                          Object(O.jsx)("option", {
                            children:
                              "\u062f\u0648\u0644\u0629 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                          }),
                          Object(O.jsx)("option", {
                            children:
                              "\u0627\u0644\u062c\u0632\u0627\u0626\u0631",
                          }),
                          Object(O.jsx)("option", {
                            children:
                              "\u0627\u0644\u0645\u063a\u0631\u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                          }),
                          Object(O.jsx)("option", {
                            children:
                              "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0627\u0644\u0643\u0648\u064a\u062a",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0644\u064a\u0628\u064a\u0627",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0644\u0628\u0646\u0627\u0646",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0645\u0635\u0631",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0641\u0644\u0633\u0637\u064a\u0646",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0639\u0645\u0627\u0646",
                          }),
                          Object(O.jsx)("option", {
                            children:
                              "\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u062a\u0648\u0646\u0633",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u062a\u0631\u0643\u064a\u0627",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0627\u0644\u064a\u0645\u0646",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0627\u0644\u0639\u0631\u0627\u0642",
                          }),
                          Object(O.jsx)("option", {
                            children:
                              "\u0627\u0644\u0633\u0648\u062f\u0627\u0646",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0627\u0644\u0627\u0631\u062f\u0646",
                          }),
                          Object(O.jsx)("option", {
                            children: "\u0633\u0648\u0631\u064a\u0627",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "col-md-4",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault03",
                        className: "form-label",
                        children: "\u0627\u0644\u0645\u062f\u064a\u0646\u0629",
                      }),
                      Object(O.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        id: "city",
                        name: "city",
                        required: !0,
                        onChange: j,
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "col-md-4",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault03",
                        className: "form-label",
                        children:
                          "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
                      }),
                      Object(O.jsx)("input", {
                        type: "email",
                        className: "form-control",
                        id: "email",
                        name: "email",
                        required: !0,
                        onChange: j,
                      }),
                    ],
                  }),
                  " ",
                  Object(O.jsxs)("div", {
                    className: "col-md-4",
                    children: [
                      Object(O.jsx)("label", {
                        htmlFor: "validationDefault03",
                        className: "form-label",
                        children:
                          "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064a",
                      }),
                      Object(O.jsx)("input", {
                        type: "password",
                        className: "form-control",
                        id: "password",
                        name: "password",
                        required: !0,
                        onChange: j,
                      }),
                    ],
                  }),
                  Object(O.jsx)("div", {
                    className: "col-12 text-end",
                    children: Object(O.jsxs)("div", {
                      className: "form-check",
                      children: [
                        Object(O.jsx)("input", {
                          className: "form-check-input float-end ms-1",
                          type: "checkbox",
                          value: "",
                          id: "invalidCheck2",
                          required: !0,
                        }),
                        Object(O.jsx)("label", {
                          className: "form-check-label",
                          htmlFor: "invalidCheck2",
                          children:
                            "\u0627\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0627\u062d\u0643\u0627\u0645",
                        }),
                      ],
                    }),
                  }),
                  Object(O.jsx)("div", {
                    className: "col-12 text-end",
                    children: Object(O.jsx)("button", {
                      className: "btn btn-primary",
                      type: "submit",
                      children: "\u062a\u0623\u0643\u064a\u062f",
                    }),
                  }),
                  Object(O.jsx)("div", {
                    className: "col-12 text-end",
                    children: Object(O.jsxs)("button", {
                      className: "btn",
                      type: "",
                      children: [
                        "\u0644\u062f\u064a \u062d\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644 \u0627\u0648\u062f",
                        Object(O.jsx)(r.b, {
                          to: "/login",
                          children:
                            " \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
                        }),
                        Object(O.jsx)(l.a, {}),
                      ],
                    }),
                  }),
                ],
              }),
              Object(O.jsx)(f, {}),
            ],
          });
        },
        y = function (e) {
          var t = e.product,
            c = e.isMine;
          return Object(O.jsxs)(
            "div",
            {
              className: "card m-1 col-md-3",
              id: t._id,
              children: [
                Object(O.jsx)("img", {
                  src: t.product.img,
                  className: "card-img-top",
                  alt: "...",
                }),
                Object(O.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(O.jsx)("h5", {
                      className: "card-title",
                      children: t.product.name,
                    }),
                    Object(O.jsx)("p", {
                      className: "card-text",
                      children: t.product.disc,
                    }),
                  ],
                }),
                Object(O.jsxs)("div", {
                  className: "card-footer",
                  children: [
                    Object(O.jsxs)("small", {
                      className: "text-muted",
                      children: [t.product.price, " \u062c.\u0645"],
                    }),
                    Object(O.jsx)("hr", {}),
                    Object(O.jsx)("small", {
                      className: "text-muted",
                      children: "\u0627\u0644\u0643\u0645\u064a\u0629",
                    }),
                    " : ",
                    Object(O.jsx)("small", {
                      className: "text-muted",
                      children: t.product.qty,
                    }),
                    Object(O.jsx)("hr", {}),
                    Object(O.jsxs)("small", {
                      className: "text-muted",
                      children: [
                        Object(O.jsx)("small", {
                          className: "text-muted",
                          children:
                            "\u0627\u0633\u0645 \u0627\u0644\u0628\u0627\u0626\u0639",
                        }),
                        " : ",
                        t.product.sellerData.fs_name,
                        " ",
                        t.product.sellerData.sec_name,
                      ],
                    }),
                  ],
                }),
                c
                  ? Object(O.jsx)("spn", {})
                  : Object(O.jsx)("div", {
                      className: "d-grid gap-2",
                      children: Object(O.jsx)(r.b, {
                        to: "/singleproduct/".concat(t._id),
                        className: "btn btn-primary",
                        children: "\u0634\u0631\u0627\u0621",
                      }),
                    }),
              ],
            },
            t._id
          );
        },
        w = function () {
          var e = "http://",
            t = Object(a.useState)([]),
            c = Object(b.a)(t, 2),
            s = c[0],
            n = c[1],
            r = Object(a.useState)(!0),
            l = Object(b.a)(r, 2),
            i = l[0],
            o = l[1];
          return (
            Object(a.useEffect)(
              function () {
                Object(m.a)(
                  d.a.mark(function t() {
                    var c;
                    return d.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), h.a.get("".concat(e, "/api/shop"))
                            );
                          case 2:
                            (c = t.sent), o(!1), n(c.data.allproducts);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              [s, e]
            ),
            Object(O.jsxs)("div", {
              className: "container-fluid",
              children: [
                Object(O.jsx)(p, {}),
                Object(O.jsx)("div", {
                  className: "loader m-2",
                  children: i
                    ? Object(O.jsx)("div", {
                        className: "",
                        children: Object(O.jsx)("div", {
                          className: "spinner-border",
                          role: "status",
                          children: Object(O.jsx)("span", {
                            className: "visually-hidden",
                            children: "Loading...",
                          }),
                        }),
                      })
                    : Object(O.jsx)("span", { className: "" }),
                }),
                Object(O.jsx)("div", {
                  className: "row justify-content-around",
                  children: s
                    ? s.map(function (e) {
                        return Object(O.jsx)(y, { product: e });
                      })
                    : Object(O.jsx)("h2", {
                        children:
                          "\u0627\u0644\u0645\u062a\u062c\u0631 \u0645\u063a\u0644\u0642 \u0627\u0644\u0627\u0646",
                      }),
                }),
                Object(O.jsx)(f, {}),
              ],
            })
          );
        },
        k = function () {
          var e = "http://",
            t = Object(a.useState)({
              name: "",
              price: 0,
              disc: "",
              img: "",
              qty: 0,
              sellerData: "",
            }),
            c = Object(b.a)(t, 2),
            s = c[0],
            n = c[1],
            r = function (e) {
              var t = e.target;
              n(
                Object(o.a)(
                  Object(o.a)({}, s),
                  {},
                  Object(i.a)({}, t.name, t.value)
                )
              );
            };
          return Object(O.jsxs)("div", {
            className: "container-fluid text-end",
            children: [
              Object(O.jsx)(p, {}),
              Object(O.jsxs)("form", {
                className: "row g-3 text-end justify-content-around",
                onSubmit: function (t) {
                  t.preventDefault();
                  var c = localStorage.getItem("token") || null;
                  if (
                    ((s.sellerData = c),
                    !s.name ||
                      s.price <= 0 ||
                      !s.disc ||
                      !s.img ||
                      s.qty <= 0 ||
                      !s.sellerData)
                  )
                    return u.toast.error(
                      "\u0628\u0631\u062c\u0627\u0621 \u0627\u062f\u062e\u0627\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"
                    );
                  h.a
                    .post("".concat(e, "/api/addproduct"), {
                      product: s,
                      token: c,
                    })
                    .then(function () {
                      return u.toast.success(
                        "\u062a\u0645 \u0627\u0636\u0627\u0641\u0647 \u0627\u0644\u0645\u0646\u062a\u062c \u0628\u0646\u062c\u0627\u062d"
                      );
                    })
                    .catch(function (e) {
                      u.toast.error(
                        e.response.data.text ||
                          "\u062d\u062f\u062b \u062e\u0637\u0623 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0627\u062e\u0631\u0649"
                      );
                    });
                },
                method: "POST",
                encType: "multipart/form-data",
                action: "".concat(e, "/api/addproduct"),
                children: [
                  Object(O.jsxs)("div", {
                    className: "mb-3 col-md-3",
                    children: [
                      Object(O.jsx)("label", {
                        className: "form-label",
                        children:
                          "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c",
                      }),
                      Object(O.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        name: "name",
                        onChange: r,
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "col-md-3",
                    children: [
                      Object(O.jsx)("label", {
                        className: "form-label",
                        children: "\u0627\u0644\u0633\u0639\u0631",
                      }),
                      Object(O.jsxs)("div", {
                        className: "input-group mb-3",
                        children: [
                          Object(O.jsx)("input", {
                            name: "price",
                            type: "text",
                            className: "form-control",
                            "aria-label": "Amount (to the nearest dollar)",
                            onChange: r,
                          }),
                          Object(O.jsx)("span", {
                            className: "input-group-text",
                            children: "\u062c.\u0645",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "col-md-3",
                    children: [
                      Object(O.jsx)("label", {
                        className: "form-label",
                        children:
                          "\u0627\u0644\u0643\u0645\u064a\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629",
                      }),
                      Object(O.jsx)("div", {
                        className: "input-group mb-3",
                        children: Object(O.jsx)("input", {
                          name: "qty",
                          type: "text",
                          className: "form-control",
                          "aria-label": "Amount (to the nearest dollar)",
                          onChange: r,
                        }),
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: " col-md-6",
                    children: [
                      Object(O.jsx)("label", {
                        className: "form-label",
                        children:
                          "\u0636\u0639 \u0631\u0628\u0637 \u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u062a\u062c",
                      }),
                      Object(O.jsx)("div", {
                        className: "input-group mb-3",
                        children: Object(O.jsx)("input", {
                          type: "url",
                          className: "form-control",
                          name: "img",
                          onChange: r,
                        }),
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "mb-3 col-md-3",
                    children: [
                      Object(O.jsx)("label", {
                        className: "form-label",
                        children: "\u0627\u0644\u0648\u0635\u0641",
                      }),
                      Object(O.jsx)("div", {
                        className: "form-floating",
                        children: Object(O.jsx)("textarea", {
                          className: "form-control",
                          id: "floatingTextarea",
                          name: "disc",
                          onChange: r,
                        }),
                      }),
                    ],
                  }),
                  Object(O.jsx)("div", {
                    className: "col-12 text-end text-center",
                    children: Object(O.jsx)("button", {
                      className: "btn btn-primary w-50",
                      type: "submit",
                      children: "\u062a\u0623\u0643\u064a\u062f",
                    }),
                  }),
                ],
              }),
              Object(O.jsx)(f, {}),
            ],
          });
        },
        S = function () {
          var e = "http://",
            t = Object(a.useState)({}),
            c = Object(b.a)(t, 2),
            s = c[0],
            n = c[1],
            r = Object(a.useState)(!0),
            i = Object(b.a)(r, 2),
            o = i[0],
            j = i[1],
            x = Object(l.h)().id;
          Object(a.useEffect)(
            function () {
              Object(m.a)(
                d.a.mark(function t() {
                  var c, a;
                  return d.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            h.a.get(
                              "".concat(e, "/api/singleproduct/").concat(x)
                            )
                          );
                        case 2:
                          (c = t.sent), (a = c.data), n(a), j(!1);
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            [x, e]
          );
          var N = (function () {
            var t = Object(m.a)(
              d.a.mark(function t() {
                var c;
                return d.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (c = {
                            id: x,
                            token: localStorage.getItem("token") || null,
                          }),
                          (t.next = 3),
                          h.a
                            .put("".concat(e, "/api/addtocart"), c)
                            .then(function (e) {
                              return u.toast.success(e.data);
                            })
                            .catch(function (e) {
                              return u.toast.error(
                                e.response.data.text ||
                                  "\u062d\u062f\u062b \u062e\u0637\u0623"
                              );
                            })
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return Object(O.jsxs)("div", {
            className: "container-fluid",
            children: [
              Object(O.jsx)(p, {}),
              o
                ? Object(O.jsx)("div", {
                    className: "m-3",
                    children: Object(O.jsx)("div", {
                      className: "spinner-border",
                      role: "status",
                      children: Object(O.jsx)("span", {
                        className: "visually-hidden",
                        children: "Loading...",
                      }),
                    }),
                  })
                : Object(O.jsx)("div", {
                    className: "row d-flex justify-content-center my-5",
                    children: Object(O.jsx)("div", {
                      className: "col-md-10",
                      children: Object(O.jsx)("div", {
                        className: "card",
                        children: Object(O.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(O.jsx)("div", {
                              className: "col-md-6",
                              children: Object(O.jsxs)("div", {
                                className: "images p-3",
                                children: [
                                  Object(O.jsxs)("div", {
                                    className: "text-center p-4",
                                    children: [
                                      " ",
                                      Object(O.jsx)("img", {
                                        id: "main-image",
                                        src: s.product.img,
                                        width: "250",
                                        alt: "product",
                                      }),
                                      " ",
                                    ],
                                  }),
                                  Object(O.jsxs)("div", {
                                    className: "thumbnail text-center",
                                    children: [
                                      " ",
                                      Object(O.jsx)("img", {
                                        src: s.product.img,
                                        width: "70",
                                        alt: "product",
                                      }),
                                      " ",
                                      Object(O.jsx)("img", {
                                        src: s.product.img,
                                        width: "70",
                                        alt: "product",
                                      }),
                                      " ",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(O.jsx)("div", {
                              className: "col-md-6",
                              children: Object(O.jsxs)("div", {
                                className: "product p-4",
                                children: [
                                  Object(O.jsxs)("div", {
                                    className: "mt-4 mb-3",
                                    children: [
                                      " ",
                                      Object(O.jsx)("h5", {
                                        className: "text-uppercase",
                                        children: s.product.name,
                                      }),
                                      Object(O.jsxs)("div", {
                                        className:
                                          "price d-flex flex-row align-items-center",
                                        children: [
                                          " ",
                                          Object(O.jsx)("span", {
                                            className: "act-price",
                                            children: s.product.price,
                                          }),
                                          " ",
                                          Object(O.jsx)("span", {
                                            className: "",
                                            children: "\u062c.\u0645",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(O.jsx)("p", {
                                    className: "about",
                                    children: s.product.disc,
                                  }),
                                  Object(O.jsx)("hr", {}),
                                  Object(O.jsxs)("small", {
                                    className: "text-muted",
                                    children: [
                                      Object(O.jsx)("small", {
                                        className: "text-muted",
                                        children:
                                          "\u0627\u0633\u0645 \u0627\u0644\u0628\u0627\u0626\u0639",
                                      }),
                                      " : ",
                                      s.product.sellerData.fs_name,
                                      " ",
                                      s.product.sellerData.sec_name,
                                    ],
                                  }),
                                  Object(O.jsxs)("div", {
                                    className: "cart mt-4 align-items-center",
                                    children: [
                                      " ",
                                      Object(O.jsx)("button", {
                                        className:
                                          "btn btn-secondary text-uppercase mr-2 px-4",
                                        onClick: N,
                                        children:
                                          "\u0627\u0636\u0641 \u0627\u0644\u0649 \u0627\u0644\u0633\u0644\u0629",
                                      }),
                                      " ",
                                      Object(O.jsx)("i", {
                                        className: "fa fa-heart text-muted",
                                      }),
                                      " ",
                                      Object(O.jsx)("i", {
                                        className: "fa fa-share-alt text-muted",
                                      }),
                                      " ",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
              Object(O.jsx)(f, {}),
            ],
          });
        },
        C = function () {
          var e = Object(a.useState)([]),
            t = Object(b.a)(e, 2),
            c = t[0],
            s = t[1],
            n = Object(a.useState)(!0),
            r = Object(b.a)(n, 2),
            l = r[0],
            i = r[1],
            o = localStorage.getItem("token");
          return (
            Object(a.useEffect)(
              function () {
                h.a
                  .get("".concat("http://", "/api/myproducts"), {
                    params: { token: o },
                  })
                  .then(function (e) {
                    console.log(e), s(e.data), i(!1);
                  })
                  .catch(function (e) {
                    if (e.response) return u.toast.error(e.response.data.text);
                    u.toast.error(
                      " \u062e\u0637\u0623 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0641\u064a \u0648\u0642\u062a \u0644\u0627\u062d\u0642"
                    );
                  });
              },
              [o]
            ),
            Object(O.jsxs)("div", {
              className: "container-fluid",
              children: [
                Object(O.jsx)(p, {}),
                Object(O.jsx)("div", {
                  className: "loader m-2",
                  children: l
                    ? Object(O.jsx)("div", {
                        className: "",
                        children: Object(O.jsx)("div", {
                          className: "spinner-border",
                          role: "status",
                          children: Object(O.jsx)("span", {
                            className: "visually-hidden",
                            children: "Loading...",
                          }),
                        }),
                      })
                    : Object(O.jsx)("span", { className: "" }),
                }),
                Object(O.jsx)("div", {
                  className: "row justify-content-around",
                  children: c
                    ? c.map(function (e) {
                        return Object(O.jsx)(y, { product: e, isMine: true });
                      })
                    : Object(O.jsx)("h2", {
                        className: "text-center my-3",
                        children:
                          "\u0644\u0645 \u062a\u0642\u0645 \u0628\u0625\u0636\u0627\u0641\u0629 \u0627\u0649 \u0645\u0646\u062a\u062c\u0627\u062a \u062d\u062a\u0649 \u0627\u0644\u0627\u0646",
                      }),
                }),
                Object(O.jsx)(f, {}),
              ],
            })
          );
        },
        D = function () {
          var e = "http://",
            t = localStorage.getItem("token"),
            c = Object(a.useState)(!0),
            s = Object(b.a)(c, 2),
            n = s[0],
            r = s[1],
            l = Object(a.useState)({}),
            i = Object(b.a)(l, 2),
            j = i[0],
            d = i[1],
            m = Object(a.useState)(!1),
            x = Object(b.a)(m, 2),
            N = x[0],
            v = x[1],
            g = Object(a.useState)(!1),
            y = Object(b.a)(g, 2),
            w = y[0],
            k = y[1],
            S = function () {
              var e = 0;
              return (
                j.mycart.map(function (t) {
                  return (e += 1 * t.product.price);
                }),
                e
              );
            };
          return (
            Object(a.useEffect)(
              function () {
                h.a
                  .get("".concat(e, "/api/mycart"), { params: { token: t } })
                  .then(function (e) {
                    d(e.data), r(!1);
                  })
                  .catch(function (e) {
                    if ((r(!1), "ERR_BAD_RESPONSE" === e.code))
                      return u.toast.error(
                        "\u0644\u0627 \u064a\u062a\u0648\u0641\u0631 \u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a"
                      );
                    u.toast.warning(
                      e.response.data.text
                        ? e.response.data.text
                        : "\u062d\u062f\u062b \u062e\u0637\u0623"
                    );
                  });
              },
              [e, t]
            ),
            Object(O.jsxs)("div", {
              className: "container-fluid",
              children: [
                Object(O.jsx)(p, {}),
                Object(O.jsx)("div", {
                  className: "loader m-2",
                  children: n
                    ? Object(O.jsx)("div", {
                        className: "",
                        children: Object(O.jsx)("div", {
                          className: "spinner-border",
                          role: "status",
                          children: Object(O.jsx)("span", {
                            className: "visually-hidden",
                            children: "Loading...",
                          }),
                        }),
                      })
                    : Object(O.jsx)("span", { className: "" }),
                }),
                Object(O.jsx)("div", {
                  className: "row justify-content-around",
                  children:
                    j.mycart && j.mycart.length > 0
                      ? Object(O.jsx)(O.Fragment, {
                          children: Object(O.jsxs)("div", {
                            className: " text-center row",
                            children: [
                              Object(O.jsxs)("div", {
                                className: "card-header",
                                children: [
                                  Object(O.jsx)("h3", {
                                    children:
                                      "\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062d\u062f\u0645",
                                  }),
                                  Object(O.jsxs)("div", {
                                    className: "text-end",
                                    children: [
                                      Object(O.jsxs)("div", {
                                        className: "",
                                        children: [
                                          "\u0627\u0644\u0627\u0633\u0645 : ",
                                          j.userD.fs_name,
                                          " ",
                                          j.userD.sec_name,
                                        ],
                                      }),
                                      Object(O.jsxs)("div", {
                                        children: [
                                          "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u062d\u0646 : ",
                                          j.userD.state_name,
                                          " , ",
                                          j.userD.city,
                                        ],
                                      }),
                                      Object(O.jsxs)("div", {
                                        children: [
                                          "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a : ",
                                          j.userD.email,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(O.jsxs)("div", {
                                className: "card-body",
                                children: [
                                  Object(O.jsx)("h5", {
                                    className: "card-title",
                                    children:
                                      "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629",
                                  }),
                                  Object(O.jsx)("div", {
                                    className: "row",
                                    children: j.mycart.map(function (c) {
                                      return Object(O.jsxs)(
                                        "div",
                                        {
                                          className: "card col-md-3 m-2 p-0",
                                          style: { width: "16rem" },
                                          id: c._id,
                                          children: [
                                            Object(O.jsx)("button", {
                                              type: "button",
                                              className:
                                                "btn-close bg-danger m-1",
                                              onClick: function () {
                                                return (
                                                  (a = c._id),
                                                  void h.a
                                                    .delete(
                                                      ""
                                                        .concat(
                                                          e,
                                                          "/api/mycart/"
                                                        )
                                                        .concat(a),
                                                      { params: { token: t } }
                                                    )
                                                    .then(function (e) {
                                                      u.toast.warning(e.data),
                                                        d(
                                                          Object(o.a)(
                                                            Object(o.a)({}, j),
                                                            {},
                                                            {
                                                              mycart:
                                                                j.mycart.filter(
                                                                  function (e) {
                                                                    return (
                                                                      e._id !==
                                                                      a
                                                                    );
                                                                  }
                                                                ),
                                                            }
                                                          )
                                                        );
                                                    })
                                                    .catch(function (e) {
                                                      return u.toast.error(
                                                        e.response.data.text
                                                      );
                                                    })
                                                );
                                                var a;
                                              },
                                            }),
                                            Object(O.jsxs)("div", {
                                              className: "card-body",
                                              children: [
                                                Object(O.jsx)("h5", {
                                                  className: "card-title",
                                                  children: c.product.name,
                                                }),
                                                Object(O.jsx)("img", {
                                                  src: c.product.img,
                                                  alt: "product",
                                                  style: { width: "14%" },
                                                }),
                                                Object(O.jsxs)("div", {
                                                  className: "",
                                                  children: [
                                                    "\u0633\u0639\u0631 \u0627\u0644\u0642\u0637\u0639\u0629 : ",
                                                    c.product.price,
                                                  ],
                                                }),
                                                Object(O.jsxs)("div", {
                                                  className: "",
                                                  children: [
                                                    "\u0627\u0644\u0643\u0645\u064a\u0629 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 : ",
                                                    c.product.qty,
                                                  ],
                                                }),
                                                Object(O.jsxs)("div", {
                                                  className: "",
                                                  children: [
                                                    " \u0627\u0644\u0643\u0645\u064a\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629: ",
                                                    1,
                                                  ],
                                                }),
                                                Object(O.jsx)("hr", {
                                                  className: "m-1 p-0",
                                                }),
                                                Object(O.jsxs)("div", {
                                                  className: "",
                                                  children: [
                                                    "\u0627\u062c\u0645\u0627\u0644\u0649 : ",
                                                    1 * c.product.price,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        c._id
                                      );
                                    }),
                                  }),
                                ],
                              }),
                              Object(O.jsx)("div", {
                                className: "card-footer text-muted",
                                children: N
                                  ? Object(O.jsx)(O.Fragment, {
                                      children: Object(O.jsx)("div", {
                                        className: "text-start",
                                        children: Object(O.jsx)("button", {
                                          type: "button",
                                          className: "btn btn-danger",
                                          onClick: function () {
                                            v(!1),
                                              u.toast.warning(
                                                "\u062a\u0645 \u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u0637\u0644\u0628"
                                              );
                                          },
                                          children:
                                            "\u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u0637\u0644\u0628",
                                        }),
                                      }),
                                    })
                                  : Object(O.jsxs)(O.Fragment, {
                                      children: [
                                        Object(O.jsx)("button", {
                                          type: "button",
                                          className: "btn btn-primary my-3",
                                          onClick: function () {
                                            w
                                              ? (k(!1),
                                                document
                                                  .getElementById(
                                                    "paypal-button-container"
                                                  )
                                                  .removeChild(
                                                    document.querySelector(
                                                      ".paypal-buttons"
                                                    )
                                                  ))
                                              : (k(!0),
                                                window.paypal
                                                  .Buttons({
                                                    createOrder: function (
                                                      e,
                                                      t
                                                    ) {
                                                      return t.order.create({
                                                        purchase_units: [
                                                          {
                                                            amount: {
                                                              value: S(),
                                                            },
                                                          },
                                                        ],
                                                      });
                                                    },
                                                    onApprove: function (c, a) {
                                                      return a.order
                                                        .capture()
                                                        .then(function (c) {
                                                          var a =
                                                            c.purchase_units[0]
                                                              .payments
                                                              .captures[0];
                                                          u.toast.info(
                                                            "\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062c\u0627\u062d \u0631\u0642\u0645 \u0627\u0644\u0639\u0645\u0644\u064a\u0647 ".concat(
                                                              a.id
                                                            )
                                                          ),
                                                            h.a
                                                              .delete(
                                                                "".concat(
                                                                  e,
                                                                  "/api/delete-mycart"
                                                                ),
                                                                {
                                                                  params: {
                                                                    token: t,
                                                                  },
                                                                }
                                                              )
                                                              .then(function (
                                                                e
                                                              ) {
                                                                r(!1),
                                                                  u.toast.warning(
                                                                    e.data
                                                                  ),
                                                                  d(
                                                                    Object(o.a)(
                                                                      Object(
                                                                        o.a
                                                                      )({}, j),
                                                                      {},
                                                                      {
                                                                        mycart:
                                                                          [],
                                                                      }
                                                                    )
                                                                  );
                                                              })
                                                              .catch(function (
                                                                e
                                                              ) {
                                                                return u.toast.error(
                                                                  e.response
                                                                    .data
                                                                    .text ||
                                                                    "\u062d\u062f\u062b \u062e\u0637\u0623"
                                                                );
                                                              });
                                                        });
                                                    },
                                                  })
                                                  .render(
                                                    "#paypal-button-container"
                                                  ));
                                          },
                                          children:
                                            "\u0637\u0644\u0628 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0644\u0644\u0634\u062d\u0646",
                                        }),
                                        Object(O.jsx)("div", {
                                          id: "paypal-button-container",
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        })
                      : Object(O.jsx)("h2", {
                          className: "title text-center mt-3",
                          children:
                            "\u0627\u0644\u0633\u0644\u0629 \u0641\u0627\u0631\u063a\u0629 ",
                        }),
                }),
                Object(O.jsx)(f, {}),
              ],
            })
          );
        };
      var _ = function () {
        return Object(O.jsx)(r.a, {
          children: Object(O.jsxs)(l.d, {
            children: [
              Object(O.jsx)(l.b, { path: "/", element: Object(O.jsx)(w, {}) }),
              Object(O.jsx)(l.b, {
                path: "/register",
                element: Object(O.jsx)(g, {}),
              }),
              Object(O.jsx)(l.b, {
                path: "/login",
                element: Object(O.jsx)(N, {}),
              }),
              Object(O.jsx)(l.b, {
                path: "/add-product",
                element: Object(O.jsx)(k, {}),
              }),
              Object(O.jsx)(l.b, {
                path: "/singleproduct/:id",
                element: Object(O.jsx)(S, {}),
              }),
              Object(O.jsx)(l.b, {
                path: "/myproducts",
                element: Object(O.jsx)(C, {}),
              }),
              Object(O.jsx)(l.b, {
                path: "/usercart",
                element: Object(O.jsx)(D, {}),
              }),
            ],
          }),
        });
      };
      c(79);
      n.a.render(
        Object(O.jsxs)(O.Fragment, {
          children: [Object(O.jsx)(_, {}), Object(O.jsx)(u.ToastContainer, {})],
        }),
        document.getElementById("root")
      );
    },
  },
  [[80, 1, 2]],
]);
//# sourceMappingURL=main.82997793.chunk.js.map
