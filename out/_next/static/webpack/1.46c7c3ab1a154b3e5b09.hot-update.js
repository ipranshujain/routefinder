webpackHotUpdate_N_E(1,{

/***/ "./components/grid.js":
/*!****************************!*\
  !*** ./components/grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11__);










var _jsxFileName = "C:\\Users\\jitendra\\Desktop\\PROGRAMMING LANGUAGES\\next-learning\\routefinder\\components\\grid.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Grid = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Grid, _React$Component);

  var _super = _createSuper(Grid);

  function Grid() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Grid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      C: 10,
      R: 10,
      start: {
        x: 1,
        y: 4,
        p: null
      },
      end: {
        x: 9,
        y: 9,
        p: null
      },
      visited: [],
      node: [],
      ndij: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "down", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "shiftstart", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "shiftend", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "mouseDown", function (i, j) {
      if (_this.state.node && _this.state.visited) {
        var node = _this.state.node;
        var visited = _this.state.visited;

        if (_this.checkSE(i, j)) {
          if (_this.state.start.x == j && _this.state.start.y == i) {
            _this.shiftstart = true;
            node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.start); // node[this.state.C*i+j].innerHTML="<div></div>";
            // node[this.state.C*i+j].classList.add(styles.box);
          } else {
            _this.shiftend = true;
            node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.end); // node[this.state.C*i+j].innerHTML="<div></div>";
            // node[this.state.C*i+j].classList.add(styles.box);
          }

          return;
        }

        _this.down = true;

        if (visited[i][j]) {
          visited[i][j] = false;
          node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall);
          return;
        }

        if (!_this.checkSE(i, j)) {
          node[_this.state.C * i + j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall);
          visited[i][j] = true;

          _this.setState({
            visited: visited
          });
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "mouseLeave", function (i, j) {
      if (_this.down == true) {
        _this.down = false;
      } else if (_this.shiftstart == true) {
        _this.shiftstart = false;
      } else if (_this.shiftend == true) {
        _this.shiftend = false;
      } // console.log("I am leaving now!")

    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "mouseEnter", function (i, j) {
      var node = _this.state.node;

      if (_this.shiftstart) {
        _this.setState({
          start: {
            x: j,
            y: i,
            p: null
          }
        });

        node[_this.state.C * i + j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.start); // node[this.state.C*i+j].innerHTML="<div>S</div>";

        return;
      }

      if (_this.shiftend) {
        _this.setState({
          end: {
            x: j,
            y: i
          }
        });

        node[_this.state.C * i + j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.end); // node[this.state.C*i+j].innerHTML="<div>E</div>";

        return;
      }

      if (_this.down) {
        _this.mouseDown(i, j);

        return;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sleep", function (ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "bfs", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var node, q, count, i, j, visited, ri, ci, dx, dy, ele, x, y, r, c;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              node = _this.state.node;
              console.log(node);
              q = [];
              count = 0;
              visited = _this.state.visited;
              ri = [-1, 1, 0, 0];
              ci = [0, 0, -1, 1];

              if (visited[_this.state.start.y][_this.state.start.x]) {
                for (i = 0; i < _this.state.R; i++) {
                  for (j = 0; j < _this.state.C; j++) {
                    if (!node[_this.state.C * i + j].classList.contains(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall)) {
                      visited[i][j] = false;
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
                    }
                  }
                }
              }

              q.push(_this.state.start);
              dx = _this.state.end.x;
              dy = _this.state.end.y;
              ele = {};

            case 12:
              if (!(!q.length == 0)) {
                _context.next = 45;
                break;
              }

              ele = q[0];
              x = ele.x;
              y = ele.y;
              visited[y][x] = true;
              if (!(y == _this.state.start.y && x == _this.state.start.x || y == _this.state.end.y && x == _this.state.end.x)) node[_this.state.C * y + x].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
              q.splice(0, 1);

              if (!(dx === x && dy === y)) {
                _context.next = 29;
                break;
              }

            case 20:
              if (!(ele !== null)) {
                _context.next = 28;
                break;
              }

              console.log("I am inside!");
              node[_this.state.C * ele.y + ele.x].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              ele = ele.p;
              _context.next = 26;
              return _this.sleep(50);

            case 26:
              _context.next = 20;
              break;

            case 28:
              return _context.abrupt("return");

            case 29:
              i = 0;

            case 30:
              if (!(i < 4)) {
                _context.next = 43;
                break;
              }

              r = ri[i] + y;
              c = ci[i] + x;
              console.log("Count:" + count++);

              if (!(r >= 0 && r < _this.state.R && c >= 0 && c < _this.state.C && !visited[r][c])) {
                _context.next = 40;
                break;
              }

              q.push({
                x: c,
                y: r,
                p: ele
              });
              visited[r][c] = true;
              if (!(r == _this.state.start.y && c == _this.state.start.x || r == _this.state.end.y && c == _this.state.end.x)) node[_this.state.C * r + c].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
              _context.next = 40;
              return _this.sleep(30);

            case 40:
              i++;
              _context.next = 30;
              break;

            case 43:
              _context.next = 12;
              break;

            case 45:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "dfs", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var node, q, count, i, j, visited, ri, ci, dx, dy, ele, x, y, r, c;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.clear();

              node = _this.state.node;
              console.log(node);
              q = [];
              count = 0;
              visited = _this.state.visited;
              ri = [-1, 1, 0, 0];
              ci = [0, 0, -1, 1];

              if (visited[_this.state.start.y][_this.state.start.x]) {
                for (i = 0; i < _this.state.R; i++) {
                  for (j = 0; j < _this.state.C; j++) {
                    if (!node[_this.state.C * i + j].classList.contains(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall)) {
                      visited[i][j] = false;
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
                    }
                  }
                }
              }

              q.push(_this.state.start);
              dx = _this.state.end.x;
              dy = _this.state.end.y;
              ele = {};

            case 13:
              if (!(!q.length == 0)) {
                _context2.next = 45;
                break;
              }

              ele = q.pop();
              x = ele.x;
              y = ele.y;
              visited[y][x] = true;
              if (!(y == _this.state.start.y && x == _this.state.start.x || y == _this.state.end.y && x == _this.state.end.x)) node[_this.state.C * y + x].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);

              if (!(dx === x && dy === y)) {
                _context2.next = 29;
                break;
              }

            case 20:
              if (!(ele !== null)) {
                _context2.next = 28;
                break;
              }

              console.log("I am inside!");
              node[_this.state.C * ele.y + ele.x].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              ele = ele.p;
              _context2.next = 26;
              return _this.sleep(50);

            case 26:
              _context2.next = 20;
              break;

            case 28:
              return _context2.abrupt("return");

            case 29:
              i = 0;

            case 30:
              if (!(i < 4)) {
                _context2.next = 43;
                break;
              }

              r = ri[i] + y;
              c = ci[i] + x;
              console.log("Count:" + count++);

              if (!(r >= 0 && r < _this.state.R && c >= 0 && c < _this.state.C && !visited[r][c])) {
                _context2.next = 40;
                break;
              }

              q.push({
                x: c,
                y: r,
                p: ele
              });
              visited[r][c] = true;
              if (!(r == _this.state.start.y && c == _this.state.start.x || r == _this.state.end.y && c == _this.state.end.x)) node[_this.state.C * r + c].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
              _context2.next = 40;
              return _this.sleep(30);

            case 40:
              i++;
              _context2.next = 30;
              break;

            case 43:
              _context2.next = 13;
              break;

            case 45:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "dijkstra", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var node, visited, i, j, weight, count, ii, jj, id, num, k, mark, d, parent, ri, ci, C, R, r, c, _r, _c, index, W;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                ndij: true
              });

              node = _this.state.node;
              visited = _this.state.visited;

              if (visited[_this.state.start.y][_this.state.start.x]) {
                for (i = 0; i < _this.state.R; i++) {
                  for (j = 0; j < _this.state.C; j++) {
                    if (!node[_this.state.C * i + j].classList.contains(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall)) {
                      visited[i][j] = false;
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
                      node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
                    }
                  }
                }
              }

              visited[_this.state.start.y][_this.state.start.x] = true;

              _this.setState({
                visited: visited
              });

              weight = [];

              for (i = 0; i < _this.state.R * _this.state.C; i++) {
                weight.push(-1);
              }

              for (i = 0; i < _this.state.R; i++) {
                for (j = 0; j < _this.state.C; j++) {
                  if (!visited[i][j] && !_this.checkSE(i, j)) {
                    weight[i * _this.state.C + j] = Math.floor(Math.random() * 20 + 1);
                    node[i * _this.state.C + j].innerHTML = "<div>".concat(weight[i * _this.state.C + j], "</div>");
                  }
                }
              }

              count = 0;
              mark = [];

              for (i = 0; i < _this.state.R * _this.state.C; i++) {
                mark.push(false);
              }

              d = [];

              for (i = 0; i < _this.state.R * _this.state.C; i++) {
                d.push(10e5);
              }

              parent = [];

              for (i = 0; i < _this.state.R * _this.state.C; i++) {
                parent.push(null);
              }

              d[_this.state.start.y * _this.state.C + _this.state.start.x] = 0;
              console.log("Hey, listen", _this.state.start.y * _this.state.C + _this.state.start.x);
              ri = [-1, 1, 0, 0];
              ci = [0, 0, -1, 1];
              C = _this.state.C, R = _this.state.R;
              i = 0;

            case 22:
              if (!(i < _this.state.R * _this.state.C)) {
                _context3.next = 63;
                break;
              }

              j = -1;
              num = 10e5;

              for (id = 0; id < _this.state.R * _this.state.C; id++) {
                // console.log("I am d",d[id])
                if (!mark[id] && d[id] < num) {
                  j = id;
                  num = d[id];
                }
              }

              mark[j] = true;
              r = Math.floor(j / C);
              c = j - r * C;

              if (!(r == _this.state.end.y && c == _this.state.end.x)) {
                _context3.next = 39;
                break;
              }

            case 30:
              if (!(parent[j] != null)) {
                _context3.next = 37;
                break;
              }

              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              j = parent[j];
              _context3.next = 35;
              return _this.sleep(50);

            case 35:
              _context3.next = 30;
              break;

            case 37:
              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              return _context3.abrupt("return");

            case 39:
              if (!(j != -1)) {
                _context3.next = 60;
                break;
              }

              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
              k = 0;

            case 42:
              if (!(k < 4)) {
                _context3.next = 60;
                break;
              }

              _r = Math.floor(j / C);
              _c = j - _r * C;
              _r = _r + ri[k]; // console.log("I am inside")

              _c = _c + ci[k];
              index = _r * C + _c;

              if (!(_r >= 0 && _r < R && _c >= 0 && _c < C && !visited[_r][_c])) {
                _context3.next = 57;
                break;
              }

              W = weight[_r * C + _c];
              console.log("index", index);

              if (!(d[j] + W < d[index])) {
                _context3.next = 57;
                break;
              }

              d[index] = d[j] + W;
              node[index].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
              parent[index] = j;
              _context3.next = 57;
              return _this.sleep(20);

            case 57:
              k++;
              _context3.next = 42;
              break;

            case 60:
              i++;
              _context3.next = 22;
              break;

            case 63:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "generateWalls", function () {
      var v = [];
      var node = _this.state.node;

      for (var i = 0; i < _this.state.R; i++) {
        v.push(new Array(_this.state.C).fill(false));
      }

      for (var i = 0; i < _this.state.R; i++) {
        for (var j = 0; j < _this.state.C; j++) {
          var rand = Math.floor(Math.random() * 2);

          if (rand === 1 && !_this.checkSE(i, j)) {
            v[i][j] = true;
            node[_this.state.C * i + j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall);
          } else {
            node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall);
          }
        }
      }

      _this.setState({
        visited: v
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "clearBoard", function () {
      var node = _this.state.node;
      var visited = _this.state.visited;
      var _this$state = _this.state,
          R = _this$state.R,
          C = _this$state.C;

      for (var i = 0; i < _this.state.R; i++) {
        for (var j = 0; j < _this.state.C; j++) {
          node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall);
          node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
          node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
          node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
          visited[i][j] = false;
        }
      }

      _this.clear();

      _this.setState({
        visited: visited
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var visited = [];

      for (var i = 0; i < this.state.R; i++) {
        visited.push(new Array(this.state.C).fill(false));
      }

      var node = document.querySelectorAll("." + _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.grid + " > div");
      this.setState({
        visited: visited,
        node: node
      });
    }
  }, {
    key: "determineClass",
    value: function determineClass(i, j) {
      if (this.state.start.x === j && this.state.start.y === i) return _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.start;else if (this.state.end.x === j && this.state.end.y === i) return _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.end;else return _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.box;
    }
  }, {
    key: "checkSE",
    value: function checkSE(i, j) {
      return i == this.state.start.y && j == this.state.start.x || i == this.state.end.y && j == this.state.end.x;
    }
  }, {
    key: "determineText",
    value: function determineText(i, j) {
      if (this.state.start.x === j && this.state.start.y === i) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "S"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 16
      }, this);else if (this.state.end.x === j && this.state.end.y === i) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 16
      }, this);else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "clear",
    value: function clear() {
      var node = this.state.node;

      for (var i = 0; i < this.state.R * this.state.C; i++) {
        if (!this.checkSE(Math.floor(i / this.state.C), i - this.state.C * Math.floor(i / this.state.C))) {
          node[i].innerHTML = "<div></div>";
        } else if (Math.floor(i / this.state.C) == this.state.start.y && i - this.state.C * Math.floor(i / this.state.C) == this.state.start.x) {
          node[i].innerHTML = "<div>S</div>";
        } else {
          node[i].innerHTML = "<div>E</div>";
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = [];
      var box = [];

      var _loop = function _loop(i) {
        list = [];

        var _loop2 = function _loop2(j) {
          var _jsxDEV2;

          list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", (_jsxDEV2 = {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.box
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "className", _this2.determineClass(i, j)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "onMouseDown", function onMouseDown() {
            return _this2.mouseDown(i, j);
          }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "onMouseUp", function onMouseUp() {
            return _this2.mouseLeave(i, j);
          }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "onMouseEnter", function onMouseEnter() {
            return _this2.mouseEnter(i, j);
          }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "children", _this2.determineText(i, j)), _jsxDEV2), j, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 22
          }, _this2));
        };

        for (var j = 0; j < _this2.state.C; j++) {
          _loop2(j);
        }

        box.push(list);
      };

      for (var i = 0; i < this.state.R; i++) {
        _loop(i);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [this.state.ndij && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Dijkstra"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 31
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.gridP,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.algorithm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Algorithms"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.bfs,
              children: "Run Breadth First Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.dfs,
              children: "Run Depth First Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.dfs,
              children: "Run A* Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.dijkstra,
              children: "Run dijkstra Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.generateWalls,
              children: "Generate  Random Walls"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.clearBoard,
              onMouseDown: this.clearBoard,
              children: "Clear Board"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 14
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.grid,
            children: box
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 13
      }, this);
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJDIiwiUiIsInN0YXJ0IiwieCIsInkiLCJwIiwiZW5kIiwidmlzaXRlZCIsIm5vZGUiLCJuZGlqIiwiaSIsImoiLCJzdGF0ZSIsImNoZWNrU0UiLCJzaGlmdHN0YXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGVzIiwic2hpZnRlbmQiLCJkb3duIiwid2FsbCIsImFkZCIsInNldFN0YXRlIiwibW91c2VEb3duIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicSIsImNvdW50IiwicmkiLCJjaSIsImNvbnRhaW5zIiwidmlzaXRpbmciLCJwYXRoIiwicHVzaCIsImR4IiwiZHkiLCJlbGUiLCJsZW5ndGgiLCJzcGxpY2UiLCJzbGVlcCIsInIiLCJjIiwiY2xlYXIiLCJwb3AiLCJ3ZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbm5lckhUTUwiLCJtYXJrIiwiZCIsInBhcmVudCIsIm51bSIsImlkIiwiayIsImluZGV4IiwiVyIsInYiLCJBcnJheSIsImZpbGwiLCJyYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZCIsImJveCIsImxpc3QiLCJkZXRlcm1pbmVDbGFzcyIsIm1vdXNlTGVhdmUiLCJtb3VzZUVudGVyIiwiZGV0ZXJtaW5lVGV4dCIsImdyaWRQIiwiYWxnb3JpdGhtIiwiYmZzIiwiZGZzIiwiZGlqa3N0cmEiLCJnZW5lcmF0ZVdhbGxzIiwiY2xlYXJCb2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ0ZDLE9BQUMsRUFBQyxFQURBO0FBRUZDLE9BQUMsRUFBQyxFQUZBO0FBR0ZDLFdBQUssRUFBQztBQUFDQyxTQUFDLEVBQUMsQ0FBSDtBQUFLQyxTQUFDLEVBQUMsQ0FBUDtBQUFVQyxTQUFDLEVBQUU7QUFBYixPQUhKO0FBSUZDLFNBQUcsRUFBQztBQUFDSCxTQUFDLEVBQUMsQ0FBSDtBQUFLQyxTQUFDLEVBQUMsQ0FBUDtBQUFVQyxTQUFDLEVBQUU7QUFBYixPQUpGO0FBS0ZFLGFBQU8sRUFBQyxFQUxOO0FBTUZDLFVBQUksRUFBQyxFQU5IO0FBT0ZDLFVBQUksRUFBQztBQVBILEs7OytNQVNELEs7O3FOQUNNLEs7O21OQUNGLEs7O29OQXdCQyxVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBTztBQUNiLFVBQUcsTUFBS0MsS0FBTCxDQUFXSixJQUFYLElBQWlCLE1BQUtJLEtBQUwsQ0FBV0wsT0FBL0IsRUFBdUM7QUFFdkMsWUFBSUMsSUFBSSxHQUFHLE1BQUtJLEtBQUwsQ0FBV0osSUFBdEI7QUFDQSxZQUFJRCxPQUFPLEdBQUcsTUFBS0ssS0FBTCxDQUFXTCxPQUF6Qjs7QUFDQSxZQUFHLE1BQUtNLE9BQUwsQ0FBYUgsQ0FBYixFQUFlQyxDQUFmLENBQUgsRUFBcUI7QUFDakIsY0FBRyxNQUFLQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJDLENBQWpCLElBQW9CUSxDQUFwQixJQUF1QixNQUFLQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJFLENBQWpCLElBQW9CTSxDQUE5QyxFQUFnRDtBQUM1QyxrQkFBS0ksVUFBTCxHQUFnQixJQUFoQjtBQUNBTixnQkFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3Q0MsZ0VBQU0sQ0FBQ2YsS0FBL0MsRUFGNEMsQ0FHNUM7QUFDQTtBQUNILFdBTEQsTUFLSztBQUNELGtCQUFLZ0IsUUFBTCxHQUFjLElBQWQ7QUFDQVYsZ0JBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0NDLGdFQUFNLENBQUNYLEdBQS9DLEVBRkMsQ0FHTDtBQUNJO0FBQ0g7O0FBQ0Q7QUFDSDs7QUFDRCxjQUFLYSxJQUFMLEdBQVUsSUFBVjs7QUFDQSxZQUFHWixPQUFPLENBQUNHLENBQUQsQ0FBUCxDQUFXQyxDQUFYLENBQUgsRUFBaUI7QUFDYkosaUJBQU8sQ0FBQ0csQ0FBRCxDQUFQLENBQVdDLENBQVgsSUFBYyxLQUFkO0FBQ0FILGNBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0NDLGdFQUFNLENBQUNHLElBQS9DO0FBQ0E7QUFDSDs7QUFDRCxZQUFHLENBQUMsTUFBS1AsT0FBTCxDQUFhSCxDQUFiLEVBQWVDLENBQWYsQ0FBSixFQUFzQjtBQUNsQkgsY0FBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDTSxHQUFqQyxDQUFxQ0osZ0VBQU0sQ0FBQ0csSUFBNUM7QUFDQWIsaUJBQU8sQ0FBQ0csQ0FBRCxDQUFQLENBQVdDLENBQVgsSUFBYyxJQUFkOztBQUVBLGdCQUFLVyxRQUFMLENBQWM7QUFDVmYsbUJBQU8sRUFBQ0E7QUFERSxXQUFkO0FBR0g7QUFDQTtBQUNKLEs7O3FOQUNVLFVBQUNHLENBQUQsRUFBR0MsQ0FBSCxFQUFPO0FBQ2QsVUFBRyxNQUFLUSxJQUFMLElBQVcsSUFBZCxFQUFtQjtBQUNmLGNBQUtBLElBQUwsR0FBVSxLQUFWO0FBQ0gsT0FGRCxNQUVNLElBQUcsTUFBS0wsVUFBTCxJQUFpQixJQUFwQixFQUF5QjtBQUMzQixjQUFLQSxVQUFMLEdBQWdCLEtBQWhCO0FBQ0gsT0FGSyxNQUVBLElBQUcsTUFBS0ksUUFBTCxJQUFlLElBQWxCLEVBQXVCO0FBQ3pCLGNBQUtBLFFBQUwsR0FBYyxLQUFkO0FBQ0gsT0FQYSxDQVNkOztBQUNILEs7O3FOQUNVLFVBQUNSLENBQUQsRUFBR0MsQ0FBSCxFQUFPO0FBQ2QsVUFBSUgsSUFBSSxHQUFHLE1BQUtJLEtBQUwsQ0FBV0osSUFBdEI7O0FBQ0EsVUFBRyxNQUFLTSxVQUFSLEVBQW1CO0FBQ2YsY0FBS1EsUUFBTCxDQUFjO0FBQ1ZwQixlQUFLLEVBQUM7QUFDRkMsYUFBQyxFQUFDUSxDQURBO0FBRUZQLGFBQUMsRUFBQ00sQ0FGQTtBQUdGTCxhQUFDLEVBQUM7QUFIQTtBQURJLFNBQWQ7O0FBT0FHLFlBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ00sR0FBakMsQ0FBcUNKLGdFQUFNLENBQUNmLEtBQTVDLEVBUmUsQ0FTZjs7QUFDQTtBQUNIOztBQUNELFVBQUcsTUFBS2dCLFFBQVIsRUFBaUI7QUFDYixjQUFLSSxRQUFMLENBQWM7QUFDVmhCLGFBQUcsRUFBQztBQUNBSCxhQUFDLEVBQUNRLENBREY7QUFFQVAsYUFBQyxFQUFDTTtBQUZGO0FBRE0sU0FBZDs7QUFNQUYsWUFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDTSxHQUFqQyxDQUFxQ0osZ0VBQU0sQ0FBQ1gsR0FBNUMsRUFQYSxDQVFiOztBQUNBO0FBQ0g7O0FBQ0QsVUFBRyxNQUFLYSxJQUFSLEVBQWE7QUFDVCxjQUFLSSxTQUFMLENBQWViLENBQWYsRUFBaUJDLENBQWpCOztBQUNBO0FBQ0g7QUFFSixLOztnTkFTSyxVQUFDYSxFQUFELEVBQU87QUFDVCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsZUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBZDtBQUFBLE9BQW5CLENBQVA7QUFDRCxLOzs0WUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSWhCLGtCQURKLEdBQ1csTUFBS0ksS0FBTCxDQUFXSixJQUR0QjtBQUVBb0IscUJBQU8sQ0FBQ0MsR0FBUixDQUFZckIsSUFBWjtBQUNJc0IsZUFISixHQUdPLEVBSFA7QUFJSUMsbUJBSkosR0FJVSxDQUpWO0FBS0l4QixxQkFMSixHQUtjLE1BQUtLLEtBQUwsQ0FBV0wsT0FMekI7QUFNTXlCLGdCQU5OLEdBTVcsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsQ0FOWDtBQU9NQyxnQkFQTixHQU9XLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFDLENBQU4sRUFBUSxDQUFSLENBUFg7O0FBUUEsa0JBQUcxQixPQUFPLENBQUMsTUFBS0ssS0FBTCxDQUFXVixLQUFYLENBQWlCRSxDQUFsQixDQUFQLENBQTRCLE1BQUtRLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkMsQ0FBN0MsQ0FBSCxFQUFtRDtBQUMvQyxxQkFBSU8sQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDLE1BQUtFLEtBQUwsQ0FBV1gsQ0FBckIsRUFBdUJTLENBQUMsRUFBeEIsRUFBMkI7QUFDdkIsdUJBQUlDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxNQUFLQyxLQUFMLENBQVdaLENBQXJCLEVBQXVCVyxDQUFDLEVBQXhCLEVBQTJCO0FBQ3ZCLHdCQUFHLENBQUNILElBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ21CLFFBQWpDLENBQTBDakIsZ0VBQU0sQ0FBQ0csSUFBakQsQ0FBSixFQUEyRDtBQUN2RGIsNkJBQU8sQ0FBQ0csQ0FBRCxDQUFQLENBQVdDLENBQVgsSUFBYyxLQUFkO0FBQ0FILDBCQUFJLENBQUMsTUFBS0ksS0FBTCxDQUFXWixDQUFYLEdBQWFVLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QkksU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDQyxnRUFBTSxDQUFDVixPQUEvQztBQUNBQywwQkFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3Q0MsZ0VBQU0sQ0FBQ2tCLFFBQS9DO0FBQ0EzQiwwQkFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3Q0MsZ0VBQU0sQ0FBQ21CLElBQS9DO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBQ0ROLGVBQUMsQ0FBQ08sSUFBRixDQUFPLE1BQUt6QixLQUFMLENBQVdWLEtBQWxCO0FBQ0lvQyxnQkFyQkosR0FxQlMsTUFBSzFCLEtBQUwsQ0FBV04sR0FBWCxDQUFlSCxDQXJCeEI7QUFzQklvQyxnQkF0QkosR0FzQlMsTUFBSzNCLEtBQUwsQ0FBV04sR0FBWCxDQUFlRixDQXRCeEI7QUF1QklvQyxpQkF2QkosR0F1QlEsRUF2QlI7O0FBQUE7QUFBQSxvQkF3QlUsQ0FBQ1YsQ0FBQyxDQUFDVyxNQUFILElBQVcsQ0F4QnJCO0FBQUE7QUFBQTtBQUFBOztBQTBCUUQsaUJBQUcsR0FBR1YsQ0FBQyxDQUFDLENBQUQsQ0FBUDtBQUNBM0IsZUFBQyxHQUFHcUMsR0FBRyxDQUFDckMsQ0FBUjtBQUNBQyxlQUFDLEdBQUdvQyxHQUFHLENBQUNwQyxDQUFSO0FBQ0FHLHFCQUFPLENBQUNILENBQUQsQ0FBUCxDQUFXRCxDQUFYLElBQWMsSUFBZDtBQUNBLGtCQUFHLEVBQUdDLENBQUMsSUFBRSxNQUFLUSxLQUFMLENBQVdWLEtBQVgsQ0FBaUJFLENBQXBCLElBQXVCRCxDQUFDLElBQUUsTUFBS1MsS0FBTCxDQUFXVixLQUFYLENBQWlCQyxDQUE1QyxJQUFpREMsQ0FBQyxJQUFFLE1BQUtRLEtBQUwsQ0FBV04sR0FBWCxDQUFlRixDQUFsQixJQUFxQkQsQ0FBQyxJQUFFLE1BQUtTLEtBQUwsQ0FBV04sR0FBWCxDQUFlSCxDQUExRixDQUFILEVBQ0lLLElBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYUksQ0FBYixHQUFlRCxDQUFoQixDQUFKLENBQXVCWSxTQUF2QixDQUFpQ00sR0FBakMsQ0FBcUNKLGdFQUFNLENBQUNWLE9BQTVDO0FBRUp1QixlQUFDLENBQUNZLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWDs7QUFqQ1Isb0JBa0NXSixFQUFFLEtBQUduQyxDQUFMLElBQVFvQyxFQUFFLEtBQUduQyxDQWxDeEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvQkFtQ2tCb0MsR0FBRyxLQUFHLElBbkN4QjtBQUFBO0FBQUE7QUFBQTs7QUFvQ2dCWixxQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBckIsa0JBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBY3dDLEdBQUcsQ0FBQ3BDLENBQWxCLEdBQXFCb0MsR0FBRyxDQUFDckMsQ0FBMUIsQ0FBSixDQUFpQ1ksU0FBakMsQ0FBMkNNLEdBQTNDLENBQStDSixnRUFBTSxDQUFDbUIsSUFBdEQ7QUFDQUksaUJBQUcsR0FBQ0EsR0FBRyxDQUFDbkMsQ0FBUjtBQXRDaEI7QUFBQSxxQkF1Q3NCLE1BQUtzQyxLQUFMLENBQVcsRUFBWCxDQXZDdEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUEyQ1lqQyxlQUFDLEdBQUMsQ0EzQ2Q7O0FBQUE7QUFBQSxvQkEyQ2dCQSxDQUFDLEdBQUMsQ0EzQ2xCO0FBQUE7QUFBQTtBQUFBOztBQTRDWWtDLGVBQUMsR0FBQ1osRUFBRSxDQUFDdEIsQ0FBRCxDQUFGLEdBQU1OLENBQVI7QUFDQXlDLGVBQUMsR0FBQ1osRUFBRSxDQUFDdkIsQ0FBRCxDQUFGLEdBQU1QLENBQVI7QUFDQXlCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFTRSxLQUFLLEVBQTFCOztBQTlDWixvQkErQ2VhLENBQUMsSUFBRSxDQUFILElBQU1BLENBQUMsR0FBQyxNQUFLaEMsS0FBTCxDQUFXWCxDQUFuQixJQUFzQjRDLENBQUMsSUFBRSxDQUF6QixJQUE0QkEsQ0FBQyxHQUFDLE1BQUtqQyxLQUFMLENBQVdaLENBQXpDLElBQTRDLENBQUNPLE9BQU8sQ0FBQ3FDLENBQUQsQ0FBUCxDQUFXQyxDQUFYLENBL0M1RDtBQUFBO0FBQUE7QUFBQTs7QUFnRGdCZixlQUFDLENBQUNPLElBQUYsQ0FBTztBQUFDbEMsaUJBQUMsRUFBQzBDLENBQUg7QUFBS3pDLGlCQUFDLEVBQUN3QyxDQUFQO0FBQVN2QyxpQkFBQyxFQUFDbUM7QUFBWCxlQUFQO0FBQ0FqQyxxQkFBTyxDQUFDcUMsQ0FBRCxDQUFQLENBQVdDLENBQVgsSUFBYyxJQUFkO0FBQ0Esa0JBQUcsRUFBR0QsQ0FBQyxJQUFFLE1BQUtoQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJFLENBQXBCLElBQXVCeUMsQ0FBQyxJQUFFLE1BQUtqQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJDLENBQTVDLElBQWlEeUMsQ0FBQyxJQUFFLE1BQUtoQyxLQUFMLENBQVdOLEdBQVgsQ0FBZUYsQ0FBbEIsSUFBcUJ5QyxDQUFDLElBQUUsTUFBS2pDLEtBQUwsQ0FBV04sR0FBWCxDQUFlSCxDQUExRixDQUFILEVBQ0lLLElBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYTRDLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QjlCLFNBQXZCLENBQWlDTSxHQUFqQyxDQUFxQ0osZ0VBQU0sQ0FBQ2tCLFFBQTVDO0FBbkRwQjtBQUFBLHFCQW9Ec0IsTUFBS1EsS0FBTCxDQUFXLEVBQVgsQ0FwRHRCOztBQUFBO0FBMkNvQmpDLGVBQUMsRUEzQ3JCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7NFlBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUFLb0MsS0FBTDs7QUFDSXRDLGtCQUZKLEdBRVcsTUFBS0ksS0FBTCxDQUFXSixJQUZ0QjtBQUdBb0IscUJBQU8sQ0FBQ0MsR0FBUixDQUFZckIsSUFBWjtBQUNJc0IsZUFKSixHQUlPLEVBSlA7QUFLSUMsbUJBTEosR0FLVSxDQUxWO0FBTUl4QixxQkFOSixHQU1jLE1BQUtLLEtBQUwsQ0FBV0wsT0FOekI7QUFPTXlCLGdCQVBOLEdBT1csQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsQ0FQWDtBQVFNQyxnQkFSTixHQVFXLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFDLENBQU4sRUFBUSxDQUFSLENBUlg7O0FBU0Esa0JBQUcxQixPQUFPLENBQUMsTUFBS0ssS0FBTCxDQUFXVixLQUFYLENBQWlCRSxDQUFsQixDQUFQLENBQTRCLE1BQUtRLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkMsQ0FBN0MsQ0FBSCxFQUFtRDtBQUMvQyxxQkFBSU8sQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDLE1BQUtFLEtBQUwsQ0FBV1gsQ0FBckIsRUFBdUJTLENBQUMsRUFBeEIsRUFBMkI7QUFDdkIsdUJBQUlDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxNQUFLQyxLQUFMLENBQVdaLENBQXJCLEVBQXVCVyxDQUFDLEVBQXhCLEVBQTJCO0FBQ3ZCLHdCQUFHLENBQUNILElBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ21CLFFBQWpDLENBQTBDakIsZ0VBQU0sQ0FBQ0csSUFBakQsQ0FBSixFQUEyRDtBQUN2RGIsNkJBQU8sQ0FBQ0csQ0FBRCxDQUFQLENBQVdDLENBQVgsSUFBYyxLQUFkO0FBQ0FILDBCQUFJLENBQUMsTUFBS0ksS0FBTCxDQUFXWixDQUFYLEdBQWFVLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QkksU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDQyxnRUFBTSxDQUFDVixPQUEvQztBQUNBQywwQkFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3Q0MsZ0VBQU0sQ0FBQ2tCLFFBQS9DO0FBQ0EzQiwwQkFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3Q0MsZ0VBQU0sQ0FBQ21CLElBQS9DO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBQ0ROLGVBQUMsQ0FBQ08sSUFBRixDQUFPLE1BQUt6QixLQUFMLENBQVdWLEtBQWxCO0FBQ0lvQyxnQkF0QkosR0FzQlMsTUFBSzFCLEtBQUwsQ0FBV04sR0FBWCxDQUFlSCxDQXRCeEI7QUF1QklvQyxnQkF2QkosR0F1QlMsTUFBSzNCLEtBQUwsQ0FBV04sR0FBWCxDQUFlRixDQXZCeEI7QUF3QklvQyxpQkF4QkosR0F3QlEsRUF4QlI7O0FBQUE7QUFBQSxvQkF5QlUsQ0FBQ1YsQ0FBQyxDQUFDVyxNQUFILElBQVcsQ0F6QnJCO0FBQUE7QUFBQTtBQUFBOztBQTJCUUQsaUJBQUcsR0FBSVYsQ0FBQyxDQUFDaUIsR0FBRixFQUFQO0FBQ0E1QyxlQUFDLEdBQUdxQyxHQUFHLENBQUNyQyxDQUFSO0FBQ0FDLGVBQUMsR0FBR29DLEdBQUcsQ0FBQ3BDLENBQVI7QUFDQUcscUJBQU8sQ0FBQ0gsQ0FBRCxDQUFQLENBQVdELENBQVgsSUFBYyxJQUFkO0FBQ0Esa0JBQUcsRUFBR0MsQ0FBQyxJQUFFLE1BQUtRLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkUsQ0FBcEIsSUFBdUJELENBQUMsSUFBRSxNQUFLUyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJDLENBQTVDLElBQWlEQyxDQUFDLElBQUUsTUFBS1EsS0FBTCxDQUFXTixHQUFYLENBQWVGLENBQWxCLElBQXFCRCxDQUFDLElBQUUsTUFBS1MsS0FBTCxDQUFXTixHQUFYLENBQWVILENBQTFGLENBQUgsRUFDSUssSUFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhSSxDQUFiLEdBQWVELENBQWhCLENBQUosQ0FBdUJZLFNBQXZCLENBQWlDTSxHQUFqQyxDQUFxQ0osZ0VBQU0sQ0FBQ1YsT0FBNUM7O0FBaENaLG9CQWtDVytCLEVBQUUsS0FBR25DLENBQUwsSUFBUW9DLEVBQUUsS0FBR25DLENBbEN4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9CQW1Da0JvQyxHQUFHLEtBQUcsSUFuQ3hCO0FBQUE7QUFBQTtBQUFBOztBQW9DZ0JaLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FyQixrQkFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFjd0MsR0FBRyxDQUFDcEMsQ0FBbEIsR0FBcUJvQyxHQUFHLENBQUNyQyxDQUExQixDQUFKLENBQWlDWSxTQUFqQyxDQUEyQ00sR0FBM0MsQ0FBK0NKLGdFQUFNLENBQUNtQixJQUF0RDtBQUNBSSxpQkFBRyxHQUFDQSxHQUFHLENBQUNuQyxDQUFSO0FBdENoQjtBQUFBLHFCQXVDc0IsTUFBS3NDLEtBQUwsQ0FBVyxFQUFYLENBdkN0Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQTJDWWpDLGVBQUMsR0FBQyxDQTNDZDs7QUFBQTtBQUFBLG9CQTJDZ0JBLENBQUMsR0FBQyxDQTNDbEI7QUFBQTtBQUFBO0FBQUE7O0FBNENZa0MsZUFBQyxHQUFDWixFQUFFLENBQUN0QixDQUFELENBQUYsR0FBTU4sQ0FBUjtBQUNBeUMsZUFBQyxHQUFDWixFQUFFLENBQUN2QixDQUFELENBQUYsR0FBTVAsQ0FBUjtBQUNBeUIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVNFLEtBQUssRUFBMUI7O0FBOUNaLG9CQStDZWEsQ0FBQyxJQUFFLENBQUgsSUFBTUEsQ0FBQyxHQUFDLE1BQUtoQyxLQUFMLENBQVdYLENBQW5CLElBQXNCNEMsQ0FBQyxJQUFFLENBQXpCLElBQTRCQSxDQUFDLEdBQUMsTUFBS2pDLEtBQUwsQ0FBV1osQ0FBekMsSUFBNEMsQ0FBQ08sT0FBTyxDQUFDcUMsQ0FBRCxDQUFQLENBQVdDLENBQVgsQ0EvQzVEO0FBQUE7QUFBQTtBQUFBOztBQWdEZ0JmLGVBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQUNsQyxpQkFBQyxFQUFDMEMsQ0FBSDtBQUFLekMsaUJBQUMsRUFBQ3dDLENBQVA7QUFBU3ZDLGlCQUFDLEVBQUNtQztBQUFYLGVBQVA7QUFDQWpDLHFCQUFPLENBQUNxQyxDQUFELENBQVAsQ0FBV0MsQ0FBWCxJQUFjLElBQWQ7QUFDQSxrQkFBRyxFQUFHRCxDQUFDLElBQUUsTUFBS2hDLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkUsQ0FBcEIsSUFBdUJ5QyxDQUFDLElBQUUsTUFBS2pDLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkMsQ0FBNUMsSUFBaUR5QyxDQUFDLElBQUUsTUFBS2hDLEtBQUwsQ0FBV04sR0FBWCxDQUFlRixDQUFsQixJQUFxQnlDLENBQUMsSUFBRSxNQUFLakMsS0FBTCxDQUFXTixHQUFYLENBQWVILENBQTFGLENBQUgsRUFDSUssSUFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhNEMsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCOUIsU0FBdkIsQ0FBaUNNLEdBQWpDLENBQXFDSixnRUFBTSxDQUFDa0IsUUFBNUM7QUFuRHBCO0FBQUEscUJBb0RzQixNQUFLUSxLQUFMLENBQVcsRUFBWCxDQXBEdEI7O0FBQUE7QUEyQ29CakMsZUFBQyxFQTNDckI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztpWkF5REs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMLG9CQUFLWSxRQUFMLENBQWM7QUFDVmIsb0JBQUksRUFBQztBQURLLGVBQWQ7O0FBR0lELGtCQUpDLEdBSUssTUFBS0ksS0FBTCxDQUFXSixJQUpoQjtBQU1ERCxxQkFOQyxHQU1RLE1BQUtLLEtBQUwsQ0FBV0wsT0FObkI7O0FBT0wsa0JBQUdBLE9BQU8sQ0FBQyxNQUFLSyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJFLENBQWxCLENBQVAsQ0FBNEIsTUFBS1EsS0FBTCxDQUFXVixLQUFYLENBQWlCQyxDQUE3QyxDQUFILEVBQW1EO0FBQy9DLHFCQUFJTyxDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUMsTUFBS0UsS0FBTCxDQUFXWCxDQUFyQixFQUF1QlMsQ0FBQyxFQUF4QixFQUEyQjtBQUN2Qix1QkFBSUMsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDLE1BQUtDLEtBQUwsQ0FBV1osQ0FBckIsRUFBdUJXLENBQUMsRUFBeEIsRUFBMkI7QUFDdkIsd0JBQUcsQ0FBQ0gsSUFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDbUIsUUFBakMsQ0FBMENqQixnRUFBTSxDQUFDRyxJQUFqRCxDQUFKLEVBQTJEO0FBQ3ZEYiw2QkFBTyxDQUFDRyxDQUFELENBQVAsQ0FBV0MsQ0FBWCxJQUFjLEtBQWQ7QUFDQUgsMEJBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0NDLGdFQUFNLENBQUNWLE9BQS9DO0FBQ0FDLDBCQUFJLENBQUMsTUFBS0ksS0FBTCxDQUFXWixDQUFYLEdBQWFVLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QkksU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDQyxnRUFBTSxDQUFDa0IsUUFBL0M7QUFDQTNCLDBCQUFJLENBQUMsTUFBS0ksS0FBTCxDQUFXWixDQUFYLEdBQWFVLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QkksU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDQyxnRUFBTSxDQUFDbUIsSUFBL0M7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRDdCLHFCQUFPLENBQUMsTUFBS0ssS0FBTCxDQUFXVixLQUFYLENBQWlCRSxDQUFsQixDQUFQLENBQTRCLE1BQUtRLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkMsQ0FBN0MsSUFBZ0QsSUFBaEQ7O0FBQ0Esb0JBQUttQixRQUFMLENBQWM7QUFDVmYsdUJBQU8sRUFBQ0E7QUFERSxlQUFkOztBQUlJeUMsb0JBeEJDLEdBd0JNLEVBeEJOOztBQXlCTCxtQkFBSXRDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxNQUFLRSxLQUFMLENBQVdYLENBQVgsR0FBYSxNQUFLVyxLQUFMLENBQVdaLENBQWxDLEVBQW9DVSxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDc0Msc0JBQU0sQ0FBQ1gsSUFBUCxDQUFZLENBQUMsQ0FBYjtBQUNIOztBQUNELG1CQUFJM0IsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDLE1BQUtFLEtBQUwsQ0FBV1gsQ0FBckIsRUFBdUJTLENBQUMsRUFBeEIsRUFBMkI7QUFDdkIscUJBQUlDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxNQUFLQyxLQUFMLENBQVdaLENBQXJCLEVBQXVCVyxDQUFDLEVBQXhCLEVBQTJCO0FBQ3ZCLHNCQUFHLENBQUNKLE9BQU8sQ0FBQ0csQ0FBRCxDQUFQLENBQVdDLENBQVgsQ0FBRCxJQUFnQixDQUFDLE1BQUtFLE9BQUwsQ0FBYUgsQ0FBYixFQUFlQyxDQUFmLENBQXBCLEVBQXNDO0FBQ2xDcUMsMEJBQU0sQ0FBQ3RDLENBQUMsR0FBQyxNQUFLRSxLQUFMLENBQVdaLENBQWIsR0FBZVcsQ0FBaEIsQ0FBTixHQUEyQnNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxFQUFkLEdBQWlCLENBQTVCLENBQTNCO0FBQ0EzQyx3QkFBSSxDQUFDRSxDQUFDLEdBQUMsTUFBS0UsS0FBTCxDQUFXWixDQUFiLEdBQWVXLENBQWhCLENBQUosQ0FBdUJ5QyxTQUF2QixrQkFBeUNKLE1BQU0sQ0FBQ3RDLENBQUMsR0FBQyxNQUFLRSxLQUFMLENBQVdaLENBQWIsR0FBZVcsQ0FBaEIsQ0FBL0M7QUFDSDtBQUNKO0FBQ0o7O0FBQ0dvQixtQkFwQ0MsR0FvQ0ssQ0FwQ0w7QUFxQ0RzQixrQkFyQ0MsR0FxQ0ssRUFyQ0w7O0FBc0NMLG1CQUFJM0MsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDLE1BQUtFLEtBQUwsQ0FBV1gsQ0FBWCxHQUFhLE1BQUtXLEtBQUwsQ0FBV1osQ0FBbEMsRUFBb0NVLENBQUMsRUFBckMsRUFBd0M7QUFDcEMyQyxvQkFBSSxDQUFDaEIsSUFBTCxDQUFVLEtBQVY7QUFDSDs7QUFDR2lCLGVBekNDLEdBeUNHLEVBekNIOztBQTBDTCxtQkFBSTVDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxNQUFLRSxLQUFMLENBQVdYLENBQVgsR0FBYSxNQUFLVyxLQUFMLENBQVdaLENBQWxDLEVBQW9DVSxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDNEMsaUJBQUMsQ0FBQ2pCLElBQUYsQ0FBTyxJQUFQO0FBQ0g7O0FBQ0drQixvQkE3Q0MsR0E2Q1EsRUE3Q1I7O0FBOENMLG1CQUFJN0MsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDLE1BQUtFLEtBQUwsQ0FBV1gsQ0FBWCxHQUFhLE1BQUtXLEtBQUwsQ0FBV1osQ0FBbEMsRUFBb0NVLENBQUMsRUFBckMsRUFBd0M7QUFDcEM2QyxzQkFBTSxDQUFDbEIsSUFBUCxDQUFZLElBQVo7QUFDSDs7QUFDRGlCLGVBQUMsQ0FBQyxNQUFLMUMsS0FBTCxDQUFXVixLQUFYLENBQWlCRSxDQUFqQixHQUFtQixNQUFLUSxLQUFMLENBQVdaLENBQTlCLEdBQWdDLE1BQUtZLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkMsQ0FBbEQsQ0FBRCxHQUFzRCxDQUF0RDtBQUNBeUIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMEIsTUFBS2pCLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkUsQ0FBakIsR0FBbUIsTUFBS1EsS0FBTCxDQUFXWixDQUE5QixHQUFnQyxNQUFLWSxLQUFMLENBQVdWLEtBQVgsQ0FBaUJDLENBQTNFO0FBQ002QixnQkFuREQsR0FtRE0sQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsQ0FuRE47QUFvRENDLGdCQXBERCxHQW9ETSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBQyxDQUFOLEVBQVEsQ0FBUixDQXBETjtBQXFERGpDLGVBckRDLEdBcURHLE1BQUtZLEtBQUwsQ0FBV1osQ0FyRGQsRUFxRGdCQyxDQXJEaEIsR0FxRG9CLE1BQUtXLEtBQUwsQ0FBV1gsQ0FyRC9CO0FBc0REUyxlQUFDLEdBQUMsQ0F0REQ7O0FBQUE7QUFBQSxvQkFzREdBLENBQUMsR0FBQyxNQUFLRSxLQUFMLENBQVdYLENBQVgsR0FBYSxNQUFLVyxLQUFMLENBQVdaLENBdEQ3QjtBQUFBO0FBQUE7QUFBQTs7QUF1RERXLGVBQUMsR0FBQyxDQUFDLENBQUg7QUFBTTZDLGlCQUFHLEdBQUMsSUFBSjs7QUFDTixtQkFBSUMsRUFBRSxHQUFDLENBQVAsRUFBU0EsRUFBRSxHQUFDLE1BQUs3QyxLQUFMLENBQVdYLENBQVgsR0FBYSxNQUFLVyxLQUFMLENBQVdaLENBQXBDLEVBQXNDeUQsRUFBRSxFQUF4QyxFQUEyQztBQUN2QztBQUNBLG9CQUFHLENBQUNKLElBQUksQ0FBQ0ksRUFBRCxDQUFMLElBQVdILENBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQU1ELEdBQXBCLEVBQXdCO0FBQ3BCN0MsbUJBQUMsR0FBQzhDLEVBQUY7QUFBTUQscUJBQUcsR0FBR0YsQ0FBQyxDQUFDRyxFQUFELENBQVA7QUFDVDtBQUNKOztBQUNESixrQkFBSSxDQUFDMUMsQ0FBRCxDQUFKLEdBQVEsSUFBUjtBQUNJaUMsZUEvREgsR0ErRE9LLElBQUksQ0FBQ0MsS0FBTCxDQUFXdkMsQ0FBQyxHQUFDWCxDQUFiLENBL0RQO0FBZ0VHNkMsZUFoRUgsR0FnRU9sQyxDQUFDLEdBQUNpQyxDQUFDLEdBQUM1QyxDQWhFWDs7QUFBQSxvQkFpRUU0QyxDQUFDLElBQUUsTUFBS2hDLEtBQUwsQ0FBV04sR0FBWCxDQUFlRixDQUFsQixJQUFxQnlDLENBQUMsSUFBRSxNQUFLakMsS0FBTCxDQUFXTixHQUFYLENBQWVILENBakV6QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9CQWtFU29ELE1BQU0sQ0FBQzVDLENBQUQsQ0FBTixJQUFXLElBbEVwQjtBQUFBO0FBQUE7QUFBQTs7QUFtRU9ILGtCQUFJLENBQUNHLENBQUQsQ0FBSixDQUFRSSxTQUFSLENBQWtCTSxHQUFsQixDQUFzQkosZ0VBQU0sQ0FBQ21CLElBQTdCO0FBQ0F6QixlQUFDLEdBQUU0QyxNQUFNLENBQUM1QyxDQUFELENBQVQ7QUFwRVA7QUFBQSxxQkFxRWEsTUFBS2dDLEtBQUwsQ0FBVyxFQUFYLENBckViOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQXVFR25DLGtCQUFJLENBQUNHLENBQUQsQ0FBSixDQUFRSSxTQUFSLENBQWtCTSxHQUFsQixDQUFzQkosZ0VBQU0sQ0FBQ21CLElBQTdCO0FBdkVIOztBQUFBO0FBQUEsb0JBMkVFekIsQ0FBQyxJQUFFLENBQUMsQ0EzRU47QUFBQTtBQUFBO0FBQUE7O0FBNkVESCxrQkFBSSxDQUFDRyxDQUFELENBQUosQ0FBUUksU0FBUixDQUFrQk0sR0FBbEIsQ0FBc0JKLGdFQUFNLENBQUNWLE9BQTdCO0FBQ0ltRCxlQUFDLEdBQUMsQ0E5RUw7O0FBQUE7QUFBQSxvQkE4RU9BLENBQUMsR0FBQyxDQTlFVDtBQUFBO0FBQUE7QUFBQTs7QUErRU9kLGdCQS9FUCxHQStFV0ssSUFBSSxDQUFDQyxLQUFMLENBQVd2QyxDQUFDLEdBQUNYLENBQWIsQ0EvRVg7QUFnRk82QyxnQkFoRlAsR0FnRldsQyxDQUFDLEdBQUNpQyxFQUFDLEdBQUM1QyxDQWhGZjtBQWlGRzRDLGdCQUFDLEdBQUVBLEVBQUMsR0FBRVosRUFBRSxDQUFDMEIsQ0FBRCxDQUFSLENBakZILENBa0ZHOztBQUNBYixnQkFBQyxHQUFFQSxFQUFDLEdBQUVaLEVBQUUsQ0FBQ3lCLENBQUQsQ0FBUjtBQUNJQyxtQkFwRlAsR0FvRmVmLEVBQUMsR0FBQzVDLENBQUYsR0FBSTZDLEVBcEZuQjs7QUFBQSxvQkFxRk1ELEVBQUMsSUFBRSxDQUFILElBQU1BLEVBQUMsR0FBQzNDLENBQVIsSUFBVzRDLEVBQUMsSUFBRSxDQUFkLElBQWlCQSxFQUFDLEdBQUM3QyxDQUFuQixJQUFzQixDQUFDTyxPQUFPLENBQUNxQyxFQUFELENBQVAsQ0FBV0MsRUFBWCxDQXJGN0I7QUFBQTtBQUFBO0FBQUE7O0FBc0ZXZSxlQXRGWCxHQXNGZVosTUFBTSxDQUFDSixFQUFDLEdBQUM1QyxDQUFGLEdBQUk2QyxFQUFMLENBdEZyQjtBQXVGT2pCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQW9COEIsS0FBcEI7O0FBdkZQLG9CQXdGVUwsQ0FBQyxDQUFDM0MsQ0FBRCxDQUFELEdBQUtpRCxDQUFMLEdBQU9OLENBQUMsQ0FBQ0ssS0FBRCxDQXhGbEI7QUFBQTtBQUFBO0FBQUE7O0FBeUZPTCxlQUFDLENBQUNLLEtBQUQsQ0FBRCxHQUFTTCxDQUFDLENBQUMzQyxDQUFELENBQUQsR0FBS2lELENBQWQ7QUFDQXBELGtCQUFJLENBQUNtRCxLQUFELENBQUosQ0FBWTVDLFNBQVosQ0FBc0JNLEdBQXRCLENBQTBCSixnRUFBTSxDQUFDa0IsUUFBakM7QUFDQW9CLG9CQUFNLENBQUNJLEtBQUQsQ0FBTixHQUFlaEQsQ0FBZjtBQTNGUDtBQUFBLHFCQTRGYSxNQUFLZ0MsS0FBTCxDQUFXLEVBQVgsQ0E1RmI7O0FBQUE7QUE4RVdlLGVBQUMsRUE5RVo7QUFBQTtBQUFBOztBQUFBO0FBc0QrQmhELGVBQUMsRUF0RGhDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzt3TkFnSEssWUFBSTtBQUNkLFVBQUltRCxDQUFDLEdBQUMsRUFBTjtBQUNBLFVBQUlyRCxJQUFJLEdBQUcsTUFBS0ksS0FBTCxDQUFXSixJQUF0Qjs7QUFDQSxXQUFJLElBQUlFLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQyxNQUFLRSxLQUFMLENBQVdYLENBQTFCLEVBQTZCUyxDQUFDLEVBQTlCLEVBQWtDO0FBQzlCbUQsU0FBQyxDQUFDeEIsSUFBRixDQUFPLElBQUl5QixLQUFKLENBQVUsTUFBS2xELEtBQUwsQ0FBV1osQ0FBckIsRUFBd0IrRCxJQUF4QixDQUE2QixLQUE3QixDQUFQO0FBQ0g7O0FBQ0QsV0FBSSxJQUFJckQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFFLE1BQUtFLEtBQUwsQ0FBV1gsQ0FBMUIsRUFBNkJTLENBQUMsRUFBOUIsRUFBaUM7QUFDN0IsYUFBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUUsTUFBS0MsS0FBTCxDQUFXWixDQUEzQixFQUE4QlcsQ0FBQyxFQUEvQixFQUFrQztBQUM5QixjQUFJcUQsSUFBSSxHQUFDZixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQVQ7O0FBQ0EsY0FBR2EsSUFBSSxLQUFHLENBQVAsSUFBVSxDQUFDLE1BQUtuRCxPQUFMLENBQWFILENBQWIsRUFBZUMsQ0FBZixDQUFkLEVBQWdDO0FBQzVCa0QsYUFBQyxDQUFDbkQsQ0FBRCxDQUFELENBQUtDLENBQUwsSUFBUSxJQUFSO0FBQ0FILGdCQUFJLENBQUMsTUFBS0ksS0FBTCxDQUFXWixDQUFYLEdBQWFVLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QkksU0FBdkIsQ0FBaUNNLEdBQWpDLENBQXFDSixnRUFBTSxDQUFDRyxJQUE1QztBQUNILFdBSEQsTUFHSztBQUNEWixnQkFBSSxDQUFDLE1BQUtJLEtBQUwsQ0FBV1osQ0FBWCxHQUFhVSxDQUFiLEdBQWVDLENBQWhCLENBQUosQ0FBdUJJLFNBQXZCLENBQWlDQyxNQUFqQyxDQUF3Q0MsZ0VBQU0sQ0FBQ0csSUFBL0M7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsWUFBS0UsUUFBTCxDQUFjO0FBQ1ZmLGVBQU8sRUFBQ3NEO0FBREUsT0FBZDtBQUdILEs7O3FOQUNVLFlBQUk7QUFFWCxVQUFJckQsSUFBSSxHQUFHLE1BQUtJLEtBQUwsQ0FBV0osSUFBdEI7QUFDQSxVQUFJRCxPQUFPLEdBQUcsTUFBS0ssS0FBTCxDQUFXTCxPQUF6QjtBQUhXLHdCQUlBLE1BQUtLLEtBSkw7QUFBQSxVQUlOWCxDQUpNLGVBSU5BLENBSk07QUFBQSxVQUlKRCxDQUpJLGVBSUpBLENBSkk7O0FBS1gsV0FBSSxJQUFJVSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsTUFBS0UsS0FBTCxDQUFXWCxDQUF6QixFQUE0QlMsQ0FBQyxFQUE3QixFQUFnQztBQUM1QixhQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBRSxNQUFLQyxLQUFMLENBQVdaLENBQTNCLEVBQThCVyxDQUFDLEVBQS9CLEVBQWtDO0FBQzlCSCxjQUFJLENBQUMsTUFBS0ksS0FBTCxDQUFXWixDQUFYLEdBQWFVLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QkksU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDQyxnRUFBTSxDQUFDRyxJQUEvQztBQUNBWixjQUFJLENBQUMsTUFBS0ksS0FBTCxDQUFXWixDQUFYLEdBQWFVLENBQWIsR0FBZUMsQ0FBaEIsQ0FBSixDQUF1QkksU0FBdkIsQ0FBaUNDLE1BQWpDLENBQXdDQyxnRUFBTSxDQUFDa0IsUUFBL0M7QUFDQTNCLGNBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0NDLGdFQUFNLENBQUNWLE9BQS9DO0FBQ0FDLGNBQUksQ0FBQyxNQUFLSSxLQUFMLENBQVdaLENBQVgsR0FBYVUsQ0FBYixHQUFlQyxDQUFoQixDQUFKLENBQXVCSSxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0NDLGdFQUFNLENBQUNtQixJQUEvQztBQUNBN0IsaUJBQU8sQ0FBQ0csQ0FBRCxDQUFQLENBQVdDLENBQVgsSUFBYyxLQUFkO0FBQ0g7QUFDSjs7QUFFRCxZQUFLbUMsS0FBTDs7QUFDQSxZQUFLeEIsUUFBTCxDQUFjO0FBQ1ZmLGVBQU8sRUFBQ0E7QUFERSxPQUFkO0FBR0gsSzs7Ozs7Ozt3Q0F6WGtCO0FBQ2YsVUFBSUEsT0FBTyxHQUFDLEVBQVo7O0FBQ0EsV0FBSSxJQUFJRyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUMsS0FBS0UsS0FBTCxDQUFXWCxDQUExQixFQUE2QlMsQ0FBQyxFQUE5QixFQUFrQztBQUM5QkgsZUFBTyxDQUFDOEIsSUFBUixDQUFhLElBQUl5QixLQUFKLENBQVUsS0FBS2xELEtBQUwsQ0FBV1osQ0FBckIsRUFBd0IrRCxJQUF4QixDQUE2QixLQUE3QixDQUFiO0FBQ0g7O0FBQ0QsVUFBSXZELElBQUksR0FBRXlELFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsTUFBSWpELGdFQUFNLENBQUNrRCxJQUFYLEdBQWdCLFFBQTFDLENBQVY7QUFDQSxXQUFLN0MsUUFBTCxDQUFjO0FBQ1ZmLGVBQU8sRUFBQ0EsT0FERTtBQUVWQyxZQUFJLEVBQUNBO0FBRkssT0FBZDtBQUtIOzs7bUNBQ2NFLEMsRUFBRUMsQyxFQUFFO0FBQ2YsVUFBRyxLQUFLQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJDLENBQWpCLEtBQXFCUSxDQUFyQixJQUF3QixLQUFLQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJFLENBQWpCLEtBQXFCTSxDQUFoRCxFQUNBLE9BQU9PLGdFQUFNLENBQUNmLEtBQWQsQ0FEQSxLQUVLLElBQUcsS0FBS1UsS0FBTCxDQUFXTixHQUFYLENBQWVILENBQWYsS0FBbUJRLENBQW5CLElBQXNCLEtBQUtDLEtBQUwsQ0FBV04sR0FBWCxDQUFlRixDQUFmLEtBQW1CTSxDQUE1QyxFQUNMLE9BQU9PLGdFQUFNLENBQUNYLEdBQWQsQ0FESyxLQUdMLE9BQU9XLGdFQUFNLENBQUNtRCxHQUFkO0FBQ0g7Ozs0QkFDTzFELEMsRUFBRUMsQyxFQUFFO0FBQ1IsYUFBUUQsQ0FBQyxJQUFFLEtBQUtFLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkUsQ0FBcEIsSUFBdUJPLENBQUMsSUFBRSxLQUFLQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJDLENBQTVDLElBQWlETyxDQUFDLElBQUUsS0FBS0UsS0FBTCxDQUFXTixHQUFYLENBQWVGLENBQWxCLElBQXFCTyxDQUFDLElBQUUsS0FBS0MsS0FBTCxDQUFXTixHQUFYLENBQWVILENBQS9GO0FBQ0g7OztrQ0E4RWFPLEMsRUFBRUMsQyxFQUFFO0FBQ2QsVUFBRyxLQUFLQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJDLENBQWpCLEtBQXFCUSxDQUFyQixJQUF3QixLQUFLQyxLQUFMLENBQVdWLEtBQVgsQ0FBaUJFLENBQWpCLEtBQXFCTSxDQUFoRCxFQUNBLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVAsQ0FEQSxLQUVLLElBQUcsS0FBS0UsS0FBTCxDQUFXTixHQUFYLENBQWVILENBQWYsS0FBbUJRLENBQW5CLElBQXNCLEtBQUtDLEtBQUwsQ0FBV04sR0FBWCxDQUFlRixDQUFmLEtBQW1CTSxDQUE1QyxFQUNMLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVAsQ0FESyxLQUdMLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNIOzs7NEJBME5NO0FBQ0gsVUFBSUYsSUFBSSxHQUFHLEtBQUtJLEtBQUwsQ0FBV0osSUFBdEI7O0FBQ0EsV0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS0UsS0FBTCxDQUFXWCxDQUFYLEdBQWEsS0FBS1csS0FBTCxDQUFXWixDQUF0QyxFQUF3Q1UsQ0FBQyxFQUF6QyxFQUE0QztBQUN4QyxZQUFHLENBQUMsS0FBS0csT0FBTCxDQUFhb0MsSUFBSSxDQUFDQyxLQUFMLENBQVd4QyxDQUFDLEdBQUMsS0FBS0UsS0FBTCxDQUFXWixDQUF4QixDQUFiLEVBQXdDVSxDQUFDLEdBQUMsS0FBS0UsS0FBTCxDQUFXWixDQUFYLEdBQWFpRCxJQUFJLENBQUNDLEtBQUwsQ0FBV3hDLENBQUMsR0FBQyxLQUFLRSxLQUFMLENBQVdaLENBQXhCLENBQXZELENBQUosRUFBdUY7QUFDbkZRLGNBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVEwQyxTQUFSO0FBQ0gsU0FGRCxNQUVNLElBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXeEMsQ0FBQyxHQUFDLEtBQUtFLEtBQUwsQ0FBV1osQ0FBeEIsS0FBNEIsS0FBS1ksS0FBTCxDQUFXVixLQUFYLENBQWlCRSxDQUE3QyxJQUFnRE0sQ0FBQyxHQUFDLEtBQUtFLEtBQUwsQ0FBV1osQ0FBWCxHQUFhaUQsSUFBSSxDQUFDQyxLQUFMLENBQVd4QyxDQUFDLEdBQUMsS0FBS0UsS0FBTCxDQUFXWixDQUF4QixDQUFmLElBQTJDLEtBQUtZLEtBQUwsQ0FBV1YsS0FBWCxDQUFpQkMsQ0FBL0csRUFBaUg7QUFDbkhLLGNBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVEwQyxTQUFSO0FBQ0gsU0FGSyxNQUVEO0FBQ0Q1QyxjQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRMEMsU0FBUjtBQUNIO0FBQ0o7QUFDSjs7OzZCQTBDTztBQUFBOztBQUNKLFVBQUlpQixJQUFJLEdBQUMsRUFBVDtBQUNBLFVBQUlELEdBQUcsR0FBQyxFQUFSOztBQUZJLGlDQUdJMUQsQ0FISjtBQUlBMkQsWUFBSSxHQUFDLEVBQUw7O0FBSkEscUNBS1ExRCxDQUxSO0FBQUE7O0FBTUkwRCxjQUFJLENBQUNoQyxJQUFMLGVBQ0s7QUFDRCxxQkFBUyxFQUFFcEIsZ0VBQU0sQ0FBQ21EO0FBRGpCLDhIQUVVLE1BQUksQ0FBQ0UsY0FBTCxDQUFvQjVELENBQXBCLEVBQXNCQyxDQUF0QixDQUZWLHNIQUdZO0FBQUEsbUJBQUksTUFBSSxDQUFDWSxTQUFMLENBQWViLENBQWYsRUFBaUJDLENBQWpCLENBQUo7QUFBQSxXQUhaLG9IQUlVO0FBQUEsbUJBQUksTUFBSSxDQUFDNEQsVUFBTCxDQUFnQjdELENBQWhCLEVBQWtCQyxDQUFsQixDQUFKO0FBQUEsV0FKVix1SEFLYTtBQUFBLG1CQUFJLE1BQUksQ0FBQzZELFVBQUwsQ0FBZ0I5RCxDQUFoQixFQUFrQkMsQ0FBbEIsQ0FBSjtBQUFBLFdBTGIsbUhBT0MsTUFBSSxDQUFDOEQsYUFBTCxDQUFtQi9ELENBQW5CLEVBQXFCQyxDQUFyQixDQVBELGNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFETDtBQU5KOztBQUtBLGFBQUksSUFBSUEsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDLE1BQUksQ0FBQ0MsS0FBTCxDQUFXWixDQUExQixFQUE2QlcsQ0FBQyxFQUE5QixFQUFpQztBQUFBLGlCQUF6QkEsQ0FBeUI7QUFVaEM7O0FBQ0R5RCxXQUFHLENBQUMvQixJQUFKLENBQVNnQyxJQUFUO0FBaEJBOztBQUdKLFdBQUksSUFBSTNELENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLRSxLQUFMLENBQVdYLENBQXpCLEVBQTJCUyxDQUFDLEVBQTVCLEVBQStCO0FBQUEsY0FBdkJBLENBQXVCO0FBYzlCOztBQUVELDBCQUNJO0FBQUEsbUJBQ0MsS0FBS0UsS0FBTCxDQUFXSCxJQUFYLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbEIsZUFFQTtBQUFLLG1CQUFTLEVBQUVRLGdFQUFNLENBQUN5RCxLQUF2QjtBQUFBLGtDQUNDO0FBQU0scUJBQVMsRUFBRXpELGdFQUFNLENBQUMwRCxTQUF4QjtBQUFBLG9DQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGVBRUc7QUFBUSx5QkFBVyxFQUFFLEtBQUtDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZILGVBR0c7QUFBUSx5QkFBVyxFQUFFLEtBQUtDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhILGVBSUc7QUFBUSx5QkFBVyxFQUFFLEtBQUtBLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpILGVBS0c7QUFBUSx5QkFBVyxFQUFFLEtBQUtDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxILGVBTUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkgsZUFPRztBQUFRLHlCQUFXLEVBQUUsS0FBS0MsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEgsZUFRRztBQUFRLHVCQUFTLEVBQUU5RCxnRUFBTSxDQUFDK0QsVUFBMUI7QUFBc0MseUJBQVcsRUFBRSxLQUFLQSxVQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFXQTtBQUFLLHFCQUFTLEVBQUUvRCxnRUFBTSxDQUFDa0QsSUFBdkI7QUFBQSxzQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQW9CSDs7OztFQTlhNkJhLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS40NmM3YzNhYjFhMTU0YjNlNWIwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIEM6MTAsXHJcbiAgICAgICAgUjoxMCxcclxuICAgICAgICBzdGFydDp7eDoxLHk6NCwgcDogbnVsbH0sXHJcbiAgICAgICAgZW5kOnt4OjkseTo5LCBwOiBudWxsfSxcclxuICAgICAgICB2aXNpdGVkOltdLFxyXG4gICAgICAgIG5vZGU6W10sXHJcbiAgICAgICAgbmRpajpmYWxzZVxyXG4gICAgfVxyXG4gICAgZG93bj1mYWxzZTtcclxuICAgIHNoaWZ0c3RhcnQ9ZmFsc2U7XHJcbiAgICBzaGlmdGVuZD1mYWxzZTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQ9W11cclxuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnN0YXRlLlI7IGkrKykge1xyXG4gICAgICAgICAgICB2aXNpdGVkLnB1c2gobmV3IEFycmF5KHRoaXMuc3RhdGUuQykuZmlsbChmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbm9kZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitzdHlsZXMuZ3JpZCtcIiA+IGRpdlwiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkLFxyXG4gICAgICAgICAgICBub2RlOm5vZGVcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGRldGVybWluZUNsYXNzKGksail7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFydC54PT09aiYmdGhpcy5zdGF0ZS5zdGFydC55PT09aSlcclxuICAgICAgICByZXR1cm4gc3R5bGVzLnN0YXJ0O1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5lbmQueD09PWomJnRoaXMuc3RhdGUuZW5kLnk9PT1pKVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuZW5kO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc3R5bGVzLmJveDsgIFxyXG4gICAgfVxyXG4gICAgY2hlY2tTRShpLGope1xyXG4gICAgICAgIHJldHVybiAoaT09dGhpcy5zdGF0ZS5zdGFydC55JiZqPT10aGlzLnN0YXRlLnN0YXJ0LngpfHwoaT09dGhpcy5zdGF0ZS5lbmQueSYmaj09dGhpcy5zdGF0ZS5lbmQueCk7XHJcbiAgICB9XHJcbiAgICBtb3VzZURvd249KGksaik9PntcclxuICAgICAgICBpZih0aGlzLnN0YXRlLm5vZGUmJnRoaXMuc3RhdGUudmlzaXRlZCl7XHJcbiAgICBcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBpZih0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhcnQueD09aiYmdGhpcy5zdGF0ZS5zdGFydC55PT1pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZnRzdGFydD10cnVlOyAgIFxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmlubmVySFRNTD1cIjxkaXY+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmJveCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlmdGVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5lbmQpO1xyXG4gICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmlubmVySFRNTD1cIjxkaXY+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmJveCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRvd249dHJ1ZTtcclxuICAgICAgICBpZih2aXNpdGVkW2ldW2pdKXtcclxuICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09dHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlTGVhdmU9KGksaik9PntcclxuICAgICAgICBpZih0aGlzLmRvd249PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmRvd249ZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zaGlmdHN0YXJ0PT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5zaGlmdHN0YXJ0PWZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2hpZnRlbmQ9PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0ZW5kPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gbGVhdmluZyBub3chXCIpXHJcbiAgICB9XHJcbiAgICBtb3VzZUVudGVyPShpLGopPT57XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgaWYodGhpcy5zaGlmdHN0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGFydDp7XHJcbiAgICAgICAgICAgICAgICAgICAgeDpqLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6aSxcclxuICAgICAgICAgICAgICAgICAgICBwOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zdGFydCk7XHJcbiAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uaW5uZXJIVE1MPVwiPGRpdj5TPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zaGlmdGVuZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZW5kOntcclxuICAgICAgICAgICAgICAgICAgICB4OmosXHJcbiAgICAgICAgICAgICAgICAgICAgeTppXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuZW5kKTtcclxuICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5pbm5lckhUTUw9XCI8ZGl2PkU8L2Rpdj5cIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRvd24pe1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bihpLGopXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGRldGVybWluZVRleHQoaSxqKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnN0YXJ0Lng9PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PT1pKVxyXG4gICAgICAgIHJldHVybiA8ZGl2PlM8L2Rpdj47XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmVuZC54PT09aiYmdGhpcy5zdGF0ZS5lbmQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+RTwvZGl2PjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gICAgfVxyXG4gICAgc2xlZXA9KG1zKT0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICAgIH1cclxuICAgIGJmcz1hc3luYygpPT57XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XHJcbiAgICAgICAgbGV0IHEgPVtdO1xyXG4gICAgICAgIGxldCBjb3VudD0wLGksajtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDsgICAgXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBpZih2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XSl7XHJcbiAgICAgICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLndhbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHEucHVzaCh0aGlzLnN0YXRlLnN0YXJ0KTtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnN0YXRlLmVuZC54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMuc3RhdGUuZW5kLnk7XHJcbiAgICAgICAgbGV0IGVsZT17fSx4LHkscixjO1xyXG4gICAgICAgICAgICB3aGlsZSghcS5sZW5ndGg9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZSA9IHFbMF07XHJcbiAgICAgICAgICAgICAgICB4ID0gZWxlLng7XHJcbiAgICAgICAgICAgICAgICB5ID0gZWxlLnk7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkW3ldW3hdPXRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighKCh5PT10aGlzLnN0YXRlLnN0YXJ0LnkmJng9PXRoaXMuc3RhdGUuc3RhcnQueCl8fCh5PT10aGlzLnN0YXRlLmVuZC55JiZ4PT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqeSt4XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBxLnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICAgICAgaWYoZHg9PT14JiZkeT09PXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKGVsZSE9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW5zaWRlIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyooZWxlLnkpK2VsZS54XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlPWVsZS5wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDUwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICByPXJpW2ldK3k7XHJcbiAgICAgICAgICAgICAgICAgICAgYz1jaVtpXSt4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bnQ6XCIrY291bnQrKylcclxuICAgICAgICAgICAgICAgICAgICBpZihyPj0wJiZyPHRoaXMuc3RhdGUuUiYmYz49MCYmYzx0aGlzLnN0YXRlLkMmJiF2aXNpdGVkW3JdW2NdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcS5wdXNoKHt4OmMseTpyLHA6ZWxlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbcl1bY109dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISgocj09dGhpcy5zdGF0ZS5zdGFydC55JiZjPT10aGlzLnN0YXRlLnN0YXJ0LngpfHwocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqcitjXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGRmcz1hc3luYygpPT57XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xyXG4gICAgICAgIGxldCBxID1bXTtcclxuICAgICAgICBsZXQgY291bnQ9MCxpLGo7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7ICAgIFxyXG4gICAgICAgIGNvbnN0IHJpID0gWy0xLDEsMCwwXTtcclxuICAgICAgICBjb25zdCBjaSA9IFswLDAsLTEsMV07XHJcbiAgICAgICAgaWYodmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF0pe1xyXG4gICAgICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIW5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy53YWxsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBxLnB1c2godGhpcy5zdGF0ZS5zdGFydCk7XHJcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5zdGF0ZS5lbmQueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnN0YXRlLmVuZC55O1xyXG4gICAgICAgIGxldCBlbGU9e30seCx5LHIsYztcclxuICAgICAgICAgICAgd2hpbGUoIXEubGVuZ3RoPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGUgPSAgcS5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHggPSBlbGUueDtcclxuICAgICAgICAgICAgICAgIHkgPSBlbGUueTtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRbeV1beF09dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKCEoKHk9PXRoaXMuc3RhdGUuc3RhcnQueSYmeD09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHk9PXRoaXMuc3RhdGUuZW5kLnkmJng9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyp5K3hdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGR4PT09eCYmZHk9PT15KXtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZShlbGUhPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluc2lkZSFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqKGVsZS55KStlbGUueF0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZT1lbGUucDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihpPTA7aTw0O2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcj1yaVtpXSt5O1xyXG4gICAgICAgICAgICAgICAgICAgIGM9Y2lbaV0reDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50OlwiK2NvdW50KyspXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocj49MCYmcjx0aGlzLnN0YXRlLlImJmM+PTAmJmM8dGhpcy5zdGF0ZS5DJiYhdmlzaXRlZFtyXVtjXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHVzaCh7eDpjLHk6cixwOmVsZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW3JdW2NdPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEoKHI9PXRoaXMuc3RhdGUuc3RhcnQueSYmYz09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHI9PXRoaXMuc3RhdGUuZW5kLnkmJmM9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnIrY10uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDMwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBkaWprc3RyYT1hc3luYygpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5kaWo6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IG5vZGU9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdmlzaXRlZD0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdKXtcclxuICAgICAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMud2FsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF09dHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkXHJcbiAgICAgICAgfSkgIFxyXG4gICAgICAgIGxldCBpLGo7XHJcbiAgICAgICAgbGV0IHdlaWdodD1bXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICB3ZWlnaHQucHVzaCgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoIXZpc2l0ZWRbaV1bal0mJiF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0W2kqdGhpcy5zdGF0ZS5DK2pdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbaSp0aGlzLnN0YXRlLkMral0uaW5uZXJIVE1MPWA8ZGl2PiR7d2VpZ2h0W2kqdGhpcy5zdGF0ZS5DK2pdfTwvZGl2PmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnQ9MCxpaSxqaixpZCxudW0saztcclxuICAgICAgICBsZXQgbWFyayA9W107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgbWFyay5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGQgPSBbXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBkLnB1c2goMTBlNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBbXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBwYXJlbnQucHVzaChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZFt0aGlzLnN0YXRlLnN0YXJ0LnkqdGhpcy5zdGF0ZS5DK3RoaXMuc3RhdGUuc3RhcnQueF09MDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhleSwgbGlzdGVuXCIsdGhpcy5zdGF0ZS5zdGFydC55KnRoaXMuc3RhdGUuQyt0aGlzLnN0YXRlLnN0YXJ0LngpXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBsZXQgQyA9IHRoaXMuc3RhdGUuQyxSID0gdGhpcy5zdGF0ZS5SO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIGo9LTE7IG51bT0xMGU1O1xyXG4gICAgICAgICAgICBmb3IoaWQ9MDtpZDx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2lkKyspe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIGRcIixkW2lkXSlcclxuICAgICAgICAgICAgICAgIGlmKCFtYXJrW2lkXSYmZFtpZF08bnVtKXtcclxuICAgICAgICAgICAgICAgICAgICBqPWlkOyBudW0gPSBkW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJrW2pdPXRydWU7XHJcbiAgICAgICAgICAgIGxldCByID0gTWF0aC5mbG9vcihqL0MpO1xyXG4gICAgICAgICAgICBsZXQgYyA9IGotcipDO1xyXG4gICAgICAgICAgICBpZihyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KXtcclxuICAgICAgICAgICAgICAgIHdoaWxlKHBhcmVudFtqXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBqPSBwYXJlbnRbal07XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlW2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBKXCIsaik7XHJcbiAgICAgICAgICAgIGlmKGohPS0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vZGVbal0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRlZCk7XHJcbiAgICAgICAgICAgIGZvcihrPTA7azw0O2srKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGguZmxvb3Ioai9DKTtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gai1yKkM7XHJcbiAgICAgICAgICAgICAgICByID1yKyByaVtrXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGVcIilcclxuICAgICAgICAgICAgICAgIGMgPWMrIGNpW2tdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcipDK2M7XHJcbiAgICAgICAgICAgICAgICBpZihyPj0wJiZyPFImJmM+PTAmJmM8QyYmIXZpc2l0ZWRbcl1bY10pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBXID0gd2VpZ2h0W3IqQytjXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRbal0rVzxkW2luZGV4XSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZFtpbmRleF09ZFtqXStXO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbaW5kZXhdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRbaW5kZXhdPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMjApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5jaGVja1NFKE1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpLGktdGhpcy5zdGF0ZS5DKk1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpKSl7XHJcbiAgICAgICAgICAgICAgICBub2RlW2ldLmlubmVySFRNTD1gPGRpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKE1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmktdGhpcy5zdGF0ZS5DKk1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpPT10aGlzLnN0YXRlLnN0YXJ0Lngpe1xyXG4gICAgICAgICAgICAgICAgbm9kZVtpXS5pbm5lckhUTUw9YDxkaXY+UzwvZGl2PmBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBub2RlW2ldLmlubmVySFRNTD1gPGRpdj5FPC9kaXY+YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVXYWxscz0oKT0+e1xyXG4gICAgICAgIGxldCB2PVtdO1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3RhdGUuUjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHYucHVzaChuZXcgQXJyYXkodGhpcy5zdGF0ZS5DKS5maWxsKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTwgdGhpcy5zdGF0ZS5SOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGo9MDsgajwgdGhpcy5zdGF0ZS5DOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgICAgICAgICAgICAgIGlmKHJhbmQ9PT0xJiYhdGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZbaV1bal09dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNsZWFyQm9hcmQ9KCk9PntcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7XHJcbiAgICAgICAgbGV0IHtSLEN9PSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zdGF0ZS5SOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajwgdGhpcy5zdGF0ZS5DOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy53YWxsKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGluZylcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRlZClcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBsaXN0PVtdO1xyXG4gICAgICAgIGxldCBib3g9W107XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgbGlzdD1bXTtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dGhpcy5zdGF0ZS5DOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoXHJcbiAgICAgICAgICAgICAgICAgICAgKDxkaXYga2V5PXtqfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJveH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuZGV0ZXJtaW5lQ2xhc3MoaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCk9PnRoaXMubW91c2VEb3duKGksail9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKT0+dGhpcy5tb3VzZUxlYXZlKGksail9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKT0+dGhpcy5tb3VzZUVudGVyKGksailcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPnt0aGlzLmRldGVybWluZVRleHQoaSxqKX08L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm94LnB1c2gobGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm5kaWomJjxkaXY+RGlqa3N0cmE8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZFB9PlxyXG4gICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuYWxnb3JpdGhtfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+QWxnb3JpdGhtczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5iZnN9ID5SdW4gQnJlYWR0aCBGaXJzdCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZGZzfSA+UnVuIERlcHRoIEZpcnN0IFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5kZnN9ID5SdW4gQSogU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmRpamtzdHJhfSA+UnVuIGRpamtzdHJhIFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5PcHRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmdlbmVyYXRlV2FsbHN9ID5HZW5lcmF0ZSAgUmFuZG9tIFdhbGxzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyQm9hcmR9IG9uTW91c2VEb3duPXt0aGlzLmNsZWFyQm9hcmR9ID5DbGVhciBCb2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7Ym94fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9