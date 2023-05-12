"use strict";
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 9411:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1946);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8140);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2773);
/* harmony import */ var _lib_getStripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _context_StateContext__WEBPACK_IMPORTED_MODULE_5__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _context_StateContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Cart = () => {
  const cartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove
  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_5__/* .useStateContext */ .F)();

  const handleCheckout = async () => {
    const stripe = await (0,_lib_getStripe__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    });
    if (response.statusCode === 500) return;
    const data = await response.json();
    react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].loading('Redirecting...');
    stripe.redirectToCheckout({
      sessionId: data.id
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-wrapper",
    ref: cartRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "cart-heading",
    onClick: () => setShowCart(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineLeft, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "heading"
  }, "Your Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "cart-num-items"
  }, "(", totalQuantities, " items)")), cartItems.length < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-cart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineShopping, {
    size: 150
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Your shopping bag is empty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => setShowCart(false),
    className: "btn"
  }, "Continue Shopping"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-container"
  }, cartItems.length >= 1 && cartItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product",
    key: item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_6__/* .urlFor */ .u)(item?.image[0]),
    className: "cart-product-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "\u20B9", item.price.toLocaleString('en-IN'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "quantity-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "minus",
    onClick: () => toggleCartItemQuanitity(item._id, 'dec')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineMinus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "num",
    onClick: ""
  }, item.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "plus",
    onClick: () => toggleCartItemQuanitity(item._id, 'inc')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "remove-item",
    onClick: () => onRemove(item)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiDeleteOutline, null))))))), cartItems.length >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "total"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Subtotal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u20B9", totalPrice.toLocaleString('en-IN'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn",
    onClick: handleCheckout
  }, "Pay with Stripe")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2023 SmallBizMart | All rights reserverd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillInstagram, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineTwitter, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 9617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2773);




const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image
  }
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, discount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, largeText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, largeText2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, saleTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, smallText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, midText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/product/${product}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(image),
    className: "footer-banner-image"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterBanner);

/***/ }),

/***/ 3838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2773);




const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "beats-solo"
  }, heroBanner.smallText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, heroBanner.midText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, heroBanner.largeText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(heroBanner.image),
    alt: "headphones",
    className: "hero-banner-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/product/${heroBanner.product}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    class: "button2"
  }, heroBanner.buttonText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, heroBanner.desc)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBanner);

/***/ }),

/***/ 4025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8565);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_2__]);
_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "SmallBizMart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main-container"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7019);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8140);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_3__, _context_StateContext__WEBPACK_IMPORTED_MODULE_4__]);
([___WEBPACK_IMPORTED_MODULE_3__, _context_StateContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities
  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__/* .useStateContext */ .F)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "logo"
  }, "SmallBizMart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/contactus"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Contact Us")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "cart-icon",
    onClick: () => setShowCart(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineShopping, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "cart-item-qty2"
  }, totalQuantities)), showCart && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_3__/* .Cart */ .AP, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true
  }, `
    .navbar-container {
    // display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    
    //background-image: linear-gradient(to bottom, rgba(29, 99, 240, 0.9), rgba(255, 255, 255, 0.1)); /* add a gradient shade with more blue */
  }


        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          list-style: none;
          margin-right: 3rem;
          padding-left: 45rem;
          //font-weight: bold;
          //text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
          font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
        }
        
        
        .nav-links li:not(:last-child) {
          margin-right: 3rem;
        }

        .nav-links a {
          font-size: 1rem;
          color: #333;
          text-decoration: none;
          cursor: pointer;
          
        }

        .nav-links a:hover {
          color: #000;
        }

        .cart-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1.5rem;
          color: #333;
          margin-left: 1rem;
        }

        .cart-item-qty {
          display: inline-block;
          font-size: 0.8rem;
          color: #fff;
          background-color: #333;
          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          text-align: center;
          line-height: 1.5rem;
          margin-left: 0.5rem;
        }
      `));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2773);




const Product = ({
  product: {
    image,
    name,
    slug,
    price
  }
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/product/${slug.current}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(image && image[0]),
    width: 250,
    height: 250,
    className: "product-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "product-name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "product-price"
  }, "\u20B9", price.toLocaleString('en-IN')))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ 6413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SearchBar = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      // display message or alert to user
      // alert('Please enter a Product to Search');
      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error('Please enter a Product to Search');
      return;
    }

    router.push(`/search/${encodeURIComponent(query)}`);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "search-bar-input",
    type: "text",
    placeholder: "Search products...",
    value: query,
    onChange: e => setQuery(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "search-bar-button"
  }, "Search")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AP": () => (/* reexport safe */ _Cart__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "Ar": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "E1": () => (/* reexport safe */ _SearchBar__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "LE": () => (/* reexport safe */ _FooterBanner__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "xs": () => (/* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "yo": () => (/* reexport safe */ _HeroBanner__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4865);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4025);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8565);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3838);
/* harmony import */ var _FooterBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9617);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9411);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Navbar__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_6__, _SearchBar__WEBPACK_IMPORTED_MODULE_7__]);
([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Navbar__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_6__, _SearchBar__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'aq058v9m',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: "skFo3HwU4b0E3IffpdQ6OddceGPYPwQZPIoewi84JfA84BgKIQUMP9kcwKqdbo9tkA6YnPm4MVtexfTRqPBVE2vcwcgntftLe7eLONrNua0NiA1RORpXs5MetRDFbebhZBZcFKgnjYVdHeOc8k4HSqrvPytSyckMpBg5extBULJlCug3xoA5"
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => builder.image(source);

/***/ }),

/***/ 5687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(943);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)("pk_test_51MyuznSFbzOUSF2V5qB2f18UF1Pz4wmnCn3QxBjWoxNYkXbbeo3T6rryXG3LZHmx5hdiiBSseJQ1sXlynjVKOm3k00JBUMGSsD");
  }

  return stripePromise;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStripe);

/***/ })

};
;