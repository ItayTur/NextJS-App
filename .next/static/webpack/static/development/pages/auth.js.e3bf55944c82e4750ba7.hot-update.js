webpackHotUpdate("static\\development\\pages\\auth.js",{

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User/User */ "./components/User/User.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\naum\\Desktop\\Home Work\\React\\NextJS\\NextJSApp\\pages\\auth\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var index = function index(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Auth Page Of - ", props.appName), __jsx(_components_User_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: 'Itay',
    age: 25,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
};

index.getInitialProps = function (context) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        appName: 'Next App'
      });
    }, 1000);
  });
  return promise;
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=auth.js.e3bf55944c82e4750ba7.hot-update.js.map