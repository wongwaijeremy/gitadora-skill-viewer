(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/react/Index.jsx":
/*!*****************************!*\
  !*** ./src/react/Index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! radium */ \"./node_modules/radium/es/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/Snackbar/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _SlideToggle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SlideToggle.jsx */ \"./src/react/SlideToggle.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nvar Index =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Index, _React$Component);\n\n  function Index(props) {\n    var _this;\n\n    _classCallCheck(this, Index);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleMenuButtonClick\", function (id) {\n      return function (event) {\n        _this.setState(_defineProperty({}, \"\".concat(id, \"AnchorEl\"), event.currentTarget));\n      };\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleMenuClose\", function (id) {\n      return function () {\n        _this.setState(_defineProperty({}, \"\".concat(id, \"AnchorEl\"), null));\n      };\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleSnackbarClose\", function () {\n      _this.setState({\n        snackbarOpen: false\n      });\n    });\n\n    _this.state = {\n      listAnchorEl: null,\n      langAnchorEl: null,\n      snackbarOpen: false,\n      gsvId: null,\n      gsvName: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var gsvId = localStorage.getItem(\"gsvId\");\n      var gsvName = localStorage.getItem(\"gsvName\");\n\n      if (gsvId) {\n        this.setState({\n          snackbarOpen: true,\n          gsvId: gsvId,\n          gsvName: gsvName\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          formatMessage = _this$props.intl.formatMessage,\n          locale = _this$props.match.params.locale;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: styles.indexPage\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n        rel: \"canonical\",\n        href: \"http://gsv.fun/\".concat(locale)\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, formatMessage({\n        id: \"title\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\".concat(formatMessage({\n          id: \"intro.desc\"\n        }), \" \").concat(formatMessage({\n          id: \"desc.3rd\"\n        }).substring(2))\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        anchorOrigin: {\n          vertical: \"bottom\",\n          horizontal: \"center\"\n        },\n        open: this.state.snackbarOpen,\n        action: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/\".concat(locale, \"/exchain/\").concat(this.state.gsvId, \"/g\")\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          color: \"secondary\",\n          size: \"small\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n          id: \"snackbar.yes\"\n        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          color: \"secondary\",\n          size: \"small\",\n          onClick: this.handleSnackbarClose\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n          id: \"snackbar.no\"\n        }))),\n        ContentProps: {\n          \"aria-describedby\": \"message-id\"\n        },\n        message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          id: \"message-id\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n          id: \"snackbar.message\",\n          values: {\n            name: this.state.gsvName\n          }\n        }))\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideToggle_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        defaultOpen: true,\n        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n          id: \"intro.title\"\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"intro.desc\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"intro.info.title\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"intro.info.content1\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"intro.info.content2\",\n        values: {\n          uservoice: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n            to: \"\".concat(locale, \"/uservoice\")\n          }, \"User Voice\")\n        }\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideToggle_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n          id: \"how.title\"\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"how.upload.step1.desc\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        style: {\n          fontSize: 14\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"how.upload.step1.remark\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" For GITADORA EXCHAIN \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: styles.script\n      }, \"javascript:void(!function(d){var s=d.createElement('script');s.type='text/javascript';s.src='//gitadora-skill-viewer.herokuapp.com/js/uploaddata_exchain.js';d.head.appendChild(s);}(document));\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" For GITADORA Matixx \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: styles.script\n      }, \"javascript:void(!function(d){var s=d.createElement('script');s.type='text/javascript';s.src='//gitadora-skill-viewer.herokuapp.com/js/uploaddata_matixx.js';d.head.appendChild(s);}(document));\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: _objectSpread({\n          marginTop: 20\n        }, styles.imageContainer)\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"/image/1-1.jpg\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: {\n          position: \"absolute\",\n          left: 118,\n          top: 61\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"how.upload.step1.imgDesc1\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: {\n          position: \"absolute\",\n          left: 65,\n          top: 131,\n          backgroundColor: \"#FFFFFF\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"how.upload.step1.imgDesc2\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"how.upload.step2.desc\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: styles.imageContainer\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"/image/1-2.jpg\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: {\n          position: \"absolute\",\n          left: 298,\n          top: 66\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"how.upload.step2.imgDesc1\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: {\n          position: \"absolute\",\n          left: 116,\n          top: 106\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"how.upload.step2.imgDesc2\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"how.upload.step3.desc\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: styles.imageContainer\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"/image/1-3.jpg\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: {\n          position: \"absolute\",\n          left: 284,\n          top: 70\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"how.upload.step3.imgDesc1\"\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideToggle_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: formatMessage({\n          id: \"desc.title\"\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"desc.1st\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"desc.2nd\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedHTMLMessage\"], {\n        id: \"desc.3rd\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SlideToggle_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n          id: \"other.title\"\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"★\" + formatMessage({\n        id: \"other.code.title\"\n      }) + \"：\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://github.com/matsumatsu233/gitadora-skill-viewer\",\n        target: \"_blank\",\n        rel: \"noreferrer noopener\"\n      }, \"Github\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"★\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"other.voice.title\"\n      }), \"：\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"\".concat(locale, \"/uservoice\")\n      }, \"User Voice\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"other.voice.desc1\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"★\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], {\n        id: \"other.browser.title\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" Chrome, Safari \")));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar styles = {\n  indexPage: {\n    width: \"100%\"\n  },\n  script: {\n    background: \"#f6f6f6\",\n    padding: 20,\n    borderRadius: 6,\n    fontSize: \"80%\",\n    wordBreak: \"break-all\"\n  },\n  imageContainer: {\n    position: \"relative\",\n    color: \"red\",\n    whiteSpace: \"nowrap\"\n  },\n  kasegiLinkDiv: {\n    display: \"flex\",\n    whiteSpace: \"nowrap\",\n    flexWrap: \"wrap\"\n  },\n  kasegiLink: {\n    marginRight: 10\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"injectIntl\"])(Object(radium__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index)));\n\n//# sourceURL=webpack:///./src/react/Index.jsx?");

/***/ }),

/***/ "./src/react/SlideToggle.jsx":
/*!***********************************!*\
  !*** ./src/react/SlideToggle.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ \"./node_modules/radium/es/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar SlideToggle =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SlideToggle, _React$Component);\n\n  function SlideToggle() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, SlideToggle);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SlideToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"_toggleDiv\", function () {\n      $(_this.refs[\"toggle-div\"]).slideToggle();\n    });\n\n    return _this;\n  }\n\n  _createClass(SlideToggle, [{\n    key: \"render\",\n    value: function render() {\n      var commonTitleProps = {\n        style: styles[\"level\".concat(this.props.level)].title,\n        onClick: this._toggleDiv\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: styles[\"level\".concat(this.props.level)].div\n      }, this.props.level === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", commonTitleProps, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        ref: \"toggle-div\",\n        style: {\n          display: this.props.defaultOpen ? \"normal\" : \"none\"\n        }\n      }, this.props.children));\n    }\n  }]);\n\n  return SlideToggle;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n_defineProperty(SlideToggle, \"defaultProps\", {\n  defaultOpen: false,\n  level: 1\n});\n\nvar titleCommonStyle = {\n  fontWeight: \"normal\",\n  margin: 0,\n  color: \"#ffffff\",\n  backgroundColor: \"#333333\"\n};\nvar styles = {\n  level1: {\n    div: {\n      marginBottom: \"5px\"\n    },\n    title: _objectSpread({\n      fontSize: 19,\n      height: 35,\n      lineHeight: \"35px\"\n    }, titleCommonStyle, {\n      \"@media (max-width: 742px)\": {\n        height: 30,\n        lineHeight: \"30px\",\n        fontSize: 16\n      }\n    })\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(radium__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SlideToggle));\n\n//# sourceURL=webpack:///./src/react/SlideToggle.jsx?");

/***/ })

}]);