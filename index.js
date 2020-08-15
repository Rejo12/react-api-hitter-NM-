"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApiHitter = /*#__PURE__*/function (_React$Component) {
  _inherits(ApiHitter, _React$Component);

  var _super = _createSuper(ApiHitter);

  function ApiHitter() {
    var _this;

    _classCallCheck(this, ApiHitter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      urlToSearch: '',
      responseData: [],
      viewMode: ''
    });

    return _this;
  }

  _createClass(ApiHitter, [{
    key: "handleClick",
    value: function () {
      var _handleClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(this.state.urlToSearch);
                _context.prev = 1;
                _context.next = 4;
                return _axios.default.get(this.state.urlToSearch);

              case 4:
                response = _context.sent;

                if (response.data != undefined) {
                  if (response.data.length > 0 && response.data.data == undefined) {
                    this.setState({
                      responseData: response.data
                    });
                  } else if (response.data.data.length > 0) {
                    this.setState({
                      responseData: response.data.data
                    });
                  }
                }

                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                this.setState({
                  responseData: _context.t0
                });

              case 12:
                this.setState({
                  viewMode: 'string'
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function handleClick() {
        return _handleClick.apply(this, arguments);
      }

      return handleClick;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.state.urlToSearch);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-8 col-md-8 col-sm-8"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        placeholder: "enter the api url",
        id: "apiUrl",
        onChange: function onChange(event) {
          return _this2.setState({
            urlToSearch: event.target.value
          });
        },
        value: this.state.urlToSearch,
        style: {
          'width': '80%'
        }
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-4 col-md-4 col-sm-4"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "primary",
        className: "btn-primary",
        style: {
          'width': '25%',
          'cursor': 'pointer'
        },
        onClick: function onClick() {
          return _this2.handleClick();
        }
      }, "Search"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-9 col-md-9 col-sm-9",
        style: {
          'border': 'inset',
          'minHeight': '200px',
          'maxHeight': '600px',
          'overflowY': 'auto'
        }
      }, this.state.responseData.length > 0 && this.state.viewMode == 'json' && this.state.responseData.map(function (item) {
        return Object.keys(item).map(function (value) {
          return /*#__PURE__*/_react.default.createElement("p", {
            key: item.id + item[value]
          }, value, ":", JSON.stringify(item[value]));
        });
      }), this.state.viewMode == 'string' && JSON.stringify(this.state.responseData)), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-1 col-md-1 col-sm-1"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-2 col-md-2 col-sm-2"
      }, this.state.viewMode == 'string' && /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn btn-warning",
        onClick: function onClick() {
          _this2.setState({
            viewMode: 'json'
          });
        }
      }, "Show data in JSON format"), this.state.viewMode == 'json' && /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn btn-warning",
        onClick: function onClick() {
          _this2.setState({
            viewMode: 'string'
          });
        }
      }, "Show data in string format"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null));
    }
  }]);

  return ApiHitter;
}(_react.default.Component);

var _default = ApiHitter;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApiHitter = /*#__PURE__*/function (_React$Component) {
  _inherits(ApiHitter, _React$Component);

  var _super = _createSuper(ApiHitter);

  function ApiHitter() {
    var _this;

    _classCallCheck(this, ApiHitter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      urlToSearch: '',
      responseData: [],
      viewMode: '',
      requestType: 'get',
      requestBody: '',
      shouldRender: ''
    });

    return _this;
  }

  _createClass(ApiHitter, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // console.log(nextState.shouldRender);
      if (nextState.shouldRender == false) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "handleClick",
    value: function () {
      var _handleClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  shouldRender: true
                });
                _context.prev = 1;

                if (!(this.state.requestType === 'get')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return _axios.default.get(this.state.urlToSearch);

              case 5:
                response = _context.sent;
                _context.next = 24;
                break;

              case 8:
                if (!(this.state.requestType === 'delete')) {
                  _context.next = 14;
                  break;
                }

                _context.next = 11;
                return _axios.default.delete(this.state.urlToSearch);

              case 11:
                response = _context.sent;
                _context.next = 24;
                break;

              case 14:
                if (!(this.state.requestType === 'post')) {
                  _context.next = 20;
                  break;
                }

                _context.next = 17;
                return _axios.default.post(this.state.urlToSearch, JSON.parse(this.state.requestBody));

              case 17:
                response = _context.sent;
                _context.next = 24;
                break;

              case 20:
                if (!(this.state.requestType === 'put')) {
                  _context.next = 24;
                  break;
                }

                _context.next = 23;
                return _axios.default.put(this.state.urlToSearch, JSON.parse(this.state.requestBody));

              case 23:
                response = _context.sent;

              case 24:
                if (response != undefined) {
                  // console.log(response);
                  this.setState({
                    responseData: response.data,
                    shouldRender: true
                  });
                }
                /*if(response.data != undefined){
                  if(response.data.length > 0 && response.data.data == undefined){
                    this.setState({responseData:response.data})
                  }
                  else if(response.data.data.length > 0) {
                      this.setState({responseData:response.data.data})
                  }
                }*/


                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](1);
                // console.log(error);
                this.setState({
                  responseData: _context.t0,
                  shouldRender: true
                });

              case 30:
                this.setState({
                  viewMode: 'string',
                  shouldRender: true
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 27]]);
      }));

      function handleClick() {
        return _handleClick.apply(this, arguments);
      }

      return handleClick;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var buttonDisable = true;

      if (this.state.urlToSearch != "") {
        buttonDisable = false;
      }

      var arr = [];

      if (this.state.responseData != undefined && this.state.viewMode == 'json') {
        if (this.state.responseData.length > 0) {
          this.state.responseData.map(function (items) {
            Object.keys(items).map(function (itemKeys) {
              var obj = {};
              obj[itemKeys] = items[itemKeys];
              arr.push(obj);
            });
          });
        } else {
          Object.keys(this.state.responseData).map(function (props) {
            if (_typeof(_this2.state.responseData[props]) !== 'object') {
              var obj = {};
              obj[props] = _this2.state.responseData[props];
              arr.push(obj);
            } else {
              if (_this2.state.responseData[props].length > 0) {
                _this2.state.responseData[props].map(function (items) {
                  Object.keys(items).map(function (itemKeys) {
                    var obj = {};
                    obj[itemKeys] = items[itemKeys];
                    arr.push(obj);
                  });
                });
              }
            }
          });
        }
      } // console.log(this.state.requestType);
      // console.log(this.state.urlToSearch);


      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          'height': '100vh',
          'backgroundColor': 'aliceblue'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          'maxWidth': 'max-content !important'
        }
      }, "Request Type:"), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-1 col-md-1 col-sm-1"
      }, /*#__PURE__*/_react.default.createElement("select", {
        name: "requestType",
        id: "requestType",
        onChange: function onChange(event) {
          _this2.setState({
            requestType: event.target.value,
            shouldRender: true
          });
        },
        value: this.state.requestType
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: "get"
      }, "GET"), /*#__PURE__*/_react.default.createElement("option", {
        value: "post"
      }, "POST"), /*#__PURE__*/_react.default.createElement("option", {
        value: "put"
      }, "PUT"), /*#__PURE__*/_react.default.createElement("option", {
        value: "delete"
      }, "DELETE"))), "\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-5 col-md-5 col-sm-5"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        placeholder: "enter the api url",
        id: "apiUrl",
        onChange: function onChange(event) {
          return _this2.setState({
            urlToSearch: event.target.value,
            shouldRender: false
          });
        },
        defaultValue: this.state.urlToSearch,
        style: {
          'width': '95%'
        }
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-2 col-md-2 col-sm-2"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "primary",
        className: "btn-primary",
        style: {
          'width': '50%',
          'cursor': 'pointer'
        },
        onClick: function onClick() {
          return _this2.handleClick();
        }
      }, "Search"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, (this.state.requestType == 'post' || this.state.requestType == 'put') && /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-9 col-md-9 col-sm-9"
      }, /*#__PURE__*/_react.default.createElement("textarea", {
        style: {
          'width': '100%',
          'minHeight': '200px',
          'overflowY': 'auto'
        },
        placeholder: "enter the request body",
        onChange: function onChange(event) {
          _this2.setState({
            requestBody: event.target.value,
            shouldRender: false
          });
        },
        defaultValue: this.state.requestBody
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-9 col-md-9 col-sm-9",
        style: {
          'border': 'inset',
          'minHeight': '200px',
          'maxHeight': '600px',
          'backgroundColor': 'white',
          'overflowY': 'auto'
        }
      }, this.state.responseData != undefined && this.state.viewMode == 'json' && arr.map(function (item1) {
        return Object.keys(item1).map(function (value) {
          // console.log(item1[value]);
          return /*#__PURE__*/_react.default.createElement("p", {
            key: value
          }, value, ":", JSON.stringify(item1[value]));
        });
      }), this.state.viewMode == 'string' && JSON.stringify(this.state.responseData)), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-1 col-md-1 col-sm-1"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-2 col-md-2 col-sm-2"
      }, this.state.viewMode == 'string' && /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn btn-warning",
        onClick: function onClick() {
          _this2.setState({
            viewMode: 'json',
            shouldRender: true
          });
        }
      }, "Format"), this.state.viewMode == 'json' && /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn btn-warning",
        onClick: function onClick() {
          _this2.setState({
            viewMode: 'string',
            shouldRender: true
          });
        }
      }, "Original data"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null)));
    }
  }]);

  return ApiHitter;
}(_react.default.Component);

var _default = ApiHitter;
exports.default = _default;
