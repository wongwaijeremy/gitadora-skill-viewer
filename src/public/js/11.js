(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/url-search-params/build/url-search-params.node.js":
/*!************************************************************************!*\
  !*** ./node_modules/url-search-params/build/url-search-params.node.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/*!\nCopyright (C) 2015-2017 Andrea Giammarchi - @WebReflection\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\n*/\n\n\nfunction URLSearchParams(query) {\n  var\n    index, key, value,\n    pairs, i, length,\n    dict = Object.create(null)\n  ;\n  this[secret] = dict;\n  if (!query) return;\n  if (typeof query === 'string') {\n    if (query.charAt(0) === '?') {\n      query = query.slice(1);\n    }\n    for (\n      pairs = query.split('&'),\n      i = 0,\n      length = pairs.length; i < length; i++\n    ) {\n      value = pairs[i];\n      index = value.indexOf('=');\n      if (-1 < index) {\n        appendTo(\n          dict,\n          decode(value.slice(0, index)),\n          decode(value.slice(index + 1))\n        );\n      } else if (value.length){\n        appendTo(\n          dict,\n          decode(value),\n          ''\n        );\n      }\n    }\n  } else {\n    if (isArray(query)) {\n      for (\n        i = 0,\n        length = query.length; i < length; i++\n      ) {\n        value = query[i];\n        appendTo(dict, value[0], value[1]);\n      }\n    } else if (query.forEach) {\n      query.forEach(addEach, dict);\n    } else {\n      for (key in query) {\n         appendTo(dict, key, query[key]);\n      }\n    }\n  }\n}\n\nvar\n  isArray = Array.isArray,\n  URLSearchParamsProto = URLSearchParams.prototype,\n  find = /[!'\\(\\)~]|%20|%00/g,\n  plus = /\\+/g,\n  replace = {\n    '!': '%21',\n    \"'\": '%27',\n    '(': '%28',\n    ')': '%29',\n    '~': '%7E',\n    '%20': '+',\n    '%00': '\\x00'\n  },\n  replacer = function (match) {\n    return replace[match];\n  },\n  secret = '__URLSearchParams__:' + Math.random()\n;\n\nfunction addEach(value, key) {\n  /* jshint validthis:true */\n  appendTo(this, key, value);\n}\n\nfunction appendTo(dict, name, value) {\n  var res = isArray(value) ? value.join(',') : value;\n  if (name in dict)\n    dict[name].push(res);\n  else\n    dict[name] = [res];\n}\n\nfunction decode(str) {\n  return decodeURIComponent(str.replace(plus, ' '));\n}\n\nfunction encode(str) {\n  return encodeURIComponent(str).replace(find, replacer);\n}\n\nURLSearchParamsProto.append = function append(name, value) {\n  appendTo(this[secret], name, value);\n};\n\nURLSearchParamsProto.delete = function del(name) {\n  delete this[secret][name];\n};\n\nURLSearchParamsProto.get = function get(name) {\n  var dict = this[secret];\n  return name in dict ? dict[name][0] : null;\n};\n\nURLSearchParamsProto.getAll = function getAll(name) {\n  var dict = this[secret];\n  return name in dict ? dict[name].slice(0) : [];\n};\n\nURLSearchParamsProto.has = function has(name) {\n  return name in this[secret];\n};\n\nURLSearchParamsProto.set = function set(name, value) {\n  this[secret][name] = ['' + value];\n};\n\nURLSearchParamsProto.forEach = function forEach(callback, thisArg) {\n  var dict = this[secret];\n  Object.getOwnPropertyNames(dict).forEach(function(name) {\n    dict[name].forEach(function(value) {\n      callback.call(thisArg, value, name, this);\n    }, this);\n  }, this);\n};\n\n/*\nURLSearchParamsProto.toBody = function() {\n  return new Blob(\n    [this.toString()],\n    {type: 'application/x-www-form-urlencoded'}\n  );\n};\n*/\n\nURLSearchParamsProto.toJSON = function toJSON() {\n  return {};\n};\n\nURLSearchParamsProto.toString = function toString() {\n  var dict = this[secret], query = [], i, key, name, value;\n  for (key in dict) {\n    name = encode(key);\n    for (\n      i = 0,\n      value = dict[key];\n      i < value.length; i++\n    ) {\n      query.push(name + '=' + encode(value[i]));\n    }\n  }\n  return query.join('&');\n};\n\nURLSearchParams = (module.exports = global.URLSearchParams || URLSearchParams);\n\n(function (URLSearchParamsProto) {\n\n  var iterable = (function () {\n    try {\n      return !!Symbol.iterator;\n    } catch(error) {\n      return false;\n    }\n  }());\n\n  // mostly related to issue #24\n  if (!('forEach' in URLSearchParamsProto)) {\n    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {\n      var names = Object.create(null);\n      this.toString()\n          .replace(/=[\\s\\S]*?(?:&|$)/g, '=')\n          .split('=')\n          .forEach(function (name) {\n            if (!name.length || name in names) return;\n            (names[name] = this.getAll(name)).forEach(function(value) {\n              callback.call(thisArg, value, name, this);\n            }, this);\n          }, this);\n    };\n  }\n\n  if (!('keys' in URLSearchParamsProto)) {\n    URLSearchParamsProto.keys = function keys() {\n      var items = [];\n      this.forEach(function(value, name) { items.push(name); });\n      var iterator = {\n        next: function() {\n          var value = items.shift();\n          return {done: value === undefined, value: value};\n        }\n      };\n\n      if (iterable) {\n        iterator[Symbol.iterator] = function() {\n          return iterator;\n        };\n      }\n\n      return iterator;\n    };\n  }\n\n  if (!('values' in URLSearchParamsProto)) {\n    URLSearchParamsProto.values = function values() {\n      var items = [];\n      this.forEach(function(value) { items.push(value); });\n      var iterator = {\n        next: function() {\n          var value = items.shift();\n          return {done: value === undefined, value: value};\n        }\n      };\n\n      if (iterable) {\n        iterator[Symbol.iterator] = function() {\n          return iterator;\n        };\n      }\n\n      return iterator;\n    };\n  }\n\n  if (!('entries' in URLSearchParamsProto)) {\n    URLSearchParamsProto.entries = function entries() {\n      var items = [];\n      this.forEach(function(value, name) { items.push([name, value]); });\n      var iterator = {\n        next: function() {\n          var value = items.shift();\n          return {done: value === undefined, value: value};\n        }\n      };\n\n      if (iterable) {\n        iterator[Symbol.iterator] = function() {\n          return iterator;\n        };\n      }\n\n      return iterator;\n    };\n  }\n\n  if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {\n    URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;\n  }\n\n  if (!('sort' in URLSearchParamsProto)) {\n    URLSearchParamsProto.sort = function sort() {\n      var\n        entries = this.entries(),\n        entry = entries.next(),\n        done = entry.done,\n        keys = [],\n        values = Object.create(null),\n        i, key, value\n      ;\n      while (!done) {\n        value = entry.value;\n        key = value[0];\n        keys.push(key);\n        if (!(key in values)) {\n          values[key] = [];\n        }\n        values[key].push(value[1]);\n        entry = entries.next();\n        done = entry.done;\n      }\n      // not the champion in efficiency\n      // but these two bits just do the job\n      keys.sort();\n      for (i = 0; i < keys.length; i++) {\n        this.delete(keys[i]);\n      }\n      for (i = 0; i < keys.length; i++) {\n        key = keys[i];\n        this.append(key, values[key].shift());\n      }\n    };\n  }\n\n}(URLSearchParams.prototype));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/url-search-params/build/url-search-params.node.js?");

/***/ }),

/***/ "./src/modules/query.js":
/*!******************************!*\
  !*** ./src/modules/query.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var URLSearchParams = __webpack_require__(/*! url-search-params */ \"./node_modules/url-search-params/build/url-search-params.node.js\");\n\nfunction queryParser(url) {\n  var queryString = url.split(\"?\")[1];\n  var query = {};\n\n  if (queryString) {\n    var searchParams = new URLSearchParams(queryString);\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = searchParams[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var param = _step.value;\n        query[param[0]] = param[1];\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  }\n\n  return query;\n}\n\nmodule.exports = queryParser;\n\n//# sourceURL=webpack:///./src/modules/query.js?");

/***/ }),

/***/ "./src/react/SkillPageContainer.jsx":
/*!******************************************!*\
  !*** ./src/react/SkillPageContainer.jsx ***!
  \******************************************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _modules_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/fetch */ \"./src/modules/fetch.js\");\n/* harmony import */ var _modules_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/query */ \"./src/modules/query.js\");\n/* harmony import */ var _modules_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_query__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ \"./src/react/actions.js\");\n/* harmony import */ var _SkillPage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SkillPage.jsx */ \"./src/react/SkillPage.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_7__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nvar SkillPageContainer =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SkillPageContainer, _React$Component);\n\n  function SkillPageContainer(props) {\n    var _this;\n\n    _classCallCheck(this, SkillPageContainer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkillPageContainer).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleSaveSkill\", function (_ref) {\n      var id = _ref.id,\n          type = _ref.type,\n          skillPoint = _ref.skillPoint;\n      var _this$props$match$par = _this.props.match.params,\n          locale = _this$props$match$par.locale,\n          ver = _this$props$match$par.ver;\n      Object(_modules_fetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/\".concat(ver, \"/save\"), {\n        method: \"POST\",\n        body: JSON.stringify({\n          skill_id: id,\n          type: type,\n          skill: skillPoint\n        }),\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        if (res.err) {\n          console.error(res.err);\n        } else {\n          var savedSkillId = res.savedSkillId;\n\n          _this.props.history.push(\"/\".concat(locale, \"/\").concat(ver, \"/\").concat(savedSkillId, \"/p\")); // TODO redirection\n\n        }\n      });\n    });\n\n    _this.state = {\n      data: null\n    };\n    return _this;\n  }\n\n  _createClass(SkillPageContainer, [{\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      if (!this.props.isSSR) {\n        if (nextProps.match !== this.props.match) {\n          var query = _modules_query__WEBPACK_IMPORTED_MODULE_4___default()(nextProps.location.search);\n          loadData(nextProps.dispatch, nextProps.match, query);\n        }\n      }\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!this.props.isSSR) {\n        var query = _modules_query__WEBPACK_IMPORTED_MODULE_4___default()(this.props.location.search);\n        loadData(this.props.dispatch, this.props.match, query);\n      } else {\n        var urlParams = new URLSearchParams(window.location.search);\n        var gsvId = urlParams.get(\"setLocalStorage\");\n        var ver = this.props.match.params.ver;\n\n        if (gsvId && ver === \"exchain\") {\n          localStorage.setItem(\"gsvId\", gsvId);\n          localStorage.setItem(\"gsvName\", this.props.skillData.skillName);\n          window.history.pushState(\"\", \"\", window.location.href.split(\"?\")[0]);\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkillPage_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _extends({}, this.props, {\n        onSaveSkill: this.handleSaveSkill\n      }));\n    }\n  }]);\n\n  return SkillPageContainer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar loadData = function loadData(dispatch, match, query) {\n  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSkillData\"])(null));\n  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSkillSavedList\"])(null));\n  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSkillComparedSkill\"])(null));\n  var _match$params = match.params,\n      ver = _match$params.ver,\n      id = _match$params.id,\n      type = _match$params.type;\n  var comparedSkillId = query && query.c;\n  var promises = [Object(_modules_fetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/\".concat(ver, \"/\").concat(id, \"/\").concat(type)).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSkillData\"])(data));\n  }), Object(_modules_fetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/savedList/\".concat(ver, \"/\").concat(id, \"/\").concat(type)).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSkillSavedList\"])(data));\n  }), comparedSkillId && Object(_modules_fetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/\".concat(ver, \"/\").concat(comparedSkillId, \"/p\")).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSkillComparedSkill\"])(data));\n  })];\n  return Promise.all(promises);\n};\n\nfunction mapStateToProps(state) {\n  return {\n    isSSR: state.isSSR,\n    skillData: getSkillData(state),\n    hasComparedSkill: Boolean(state.skillComparedSkill),\n    skillSavedList: state.skillSavedList\n  };\n}\n\nfunction getSkillData(state) {\n  var skillData = state.skillData,\n      skillComparedSkill = state.skillComparedSkill;\n\n  if (!skillComparedSkill || !skillData) {\n    return skillData;\n  } else {\n    var result = _objectSpread({}, skillData.skillData);\n\n    var old = skillComparedSkill.skillData;\n    result.hot = compareSkillHalf(result.hot, old.hot);\n    result.other = compareSkillHalf(result.other, old.other);\n    var skillPointDiff = (Number(result.hot.point || 0) + Number(result.other.point || 0) - Number(old.hot.point || 0) - Number(old.other.point || 0)).toFixed(2);\n    return _objectSpread({}, skillData, {\n      skillData: result,\n      skillPointDiff: skillPointDiff\n    });\n  }\n}\n\nfunction compareSkillHalf(current, old) {\n  var result = Object.assign({}, current);\n\n  if (!current.data || !old.data) {\n    return result;\n  }\n\n  if (result) {\n    result.data.forEach(function (item) {\n      var newSkillFlag = true;\n\n      for (var i = 0; i < old.data.length; i++) {\n        if (old.data[i].name === item.name || _constants__WEBPACK_IMPORTED_MODULE_7__[\"OLD_NAME_MAP\"][old.data[i].name] === item.name) {\n          newSkillFlag = false;\n          var newSkill = Number(item.skill_value);\n          var oldSkill = Number(old.data[i].skill_value);\n\n          if (newSkill > oldSkill) {\n            var sub = (newSkill - oldSkill).toFixed(2);\n            item.compare = \"\".concat(sub, \"\\u2191\");\n          }\n\n          break;\n        }\n      }\n\n      if (newSkillFlag) {\n        item.compare = \"New!\";\n      }\n    });\n  }\n\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(SkillPageContainer)));\n\n//# sourceURL=webpack:///./src/react/SkillPageContainer.jsx?");

/***/ })

}]);