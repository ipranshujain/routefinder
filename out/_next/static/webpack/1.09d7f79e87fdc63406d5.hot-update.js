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
            node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.start); // node[this.state.C*i+j].classList.add(styles.box);
          } else {
            _this.shiftend = true;
            node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.end); // node[this.state.C*i+j].classList.add(styles.box);
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

        node[_this.state.C * i + j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.start);
        node[_this.state.C * i + j].classList.innerHTML("<div>E</div>");
        return;
      }

      if (_this.shiftend) {
        _this.setState({
          end: {
            x: j,
            y: i
          }
        });

        node[_this.state.C * i + j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.end);
        node[_this.state.C * i + j].classList.innerHTML("<div>E</div>");
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
              // this.setState({
              //     ndij:true
              // })
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

            case 21:
              if (!(i < _this.state.R * _this.state.C)) {
                _context3.next = 62;
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
                _context3.next = 38;
                break;
              }

            case 29:
              if (!(parent[j] != null)) {
                _context3.next = 36;
                break;
              }

              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              j = parent[j];
              _context3.next = 34;
              return _this.sleep(50);

            case 34:
              _context3.next = 29;
              break;

            case 36:
              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              return _context3.abrupt("return");

            case 38:
              if (!(j != -1)) {
                _context3.next = 59;
                break;
              }

              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
              k = 0;

            case 41:
              if (!(k < 4)) {
                _context3.next = 59;
                break;
              }

              _r = Math.floor(j / C);
              _c = j - _r * C;
              _r = _r + ri[k]; // console.log("I am inside")

              _c = _c + ci[k];
              index = _r * C + _c;

              if (!(_r >= 0 && _r < R && _c >= 0 && _c < C && !visited[_r][_c])) {
                _context3.next = 56;
                break;
              }

              W = weight[_r * C + _c];
              console.log("index", index);

              if (!(d[j] + W < d[index])) {
                _context3.next = 56;
                break;
              }

              d[index] = d[j] + W;
              node[index].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
              parent[index] = j;
              _context3.next = 56;
              return _this.sleep(20);

            case 56:
              k++;
              _context3.next = 41;
              break;

            case 59:
              i++;
              _context3.next = 21;
              break;

            case 62:
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
        lineNumber: 116,
        columnNumber: 16
      }, this);else if (this.state.end.x === j && this.state.end.y === i) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 16
      }, this);else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
            lineNumber: 393,
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
        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.gridP,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.algorithm,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Algorithms"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.bfs,
            children: "Run Breadth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run Depth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run A* Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dijkstra,
            children: "Run dijkstra Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Options"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.generateWalls,
            children: "Generate  Random Walls"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.clearBoard,
            children: "Clear Board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.grid,
          children: box
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 406,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJDIiwiUiIsInN0YXJ0IiwieCIsInkiLCJwIiwiZW5kIiwidmlzaXRlZCIsIm5vZGUiLCJuZGlqIiwiaSIsImoiLCJzdGF0ZSIsImNoZWNrU0UiLCJzaGlmdHN0YXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGVzIiwic2hpZnRlbmQiLCJkb3duIiwid2FsbCIsImFkZCIsInNldFN0YXRlIiwiaW5uZXJIVE1MIiwibW91c2VEb3duIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicSIsImNvdW50IiwicmkiLCJjaSIsImNvbnRhaW5zIiwidmlzaXRpbmciLCJwYXRoIiwicHVzaCIsImR4IiwiZHkiLCJlbGUiLCJsZW5ndGgiLCJzcGxpY2UiLCJzbGVlcCIsInIiLCJjIiwiY2xlYXIiLCJwb3AiLCJ3ZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtYXJrIiwiZCIsInBhcmVudCIsIm51bSIsImlkIiwiayIsImluZGV4IiwiVyIsInYiLCJBcnJheSIsImZpbGwiLCJyYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZCIsImJveCIsImxpc3QiLCJkZXRlcm1pbmVDbGFzcyIsIm1vdXNlTGVhdmUiLCJtb3VzZUVudGVyIiwiZGV0ZXJtaW5lVGV4dCIsImdyaWRQIiwiYWxnb3JpdGhtIiwiYmZzIiwiZGZzIiwiZGlqa3N0cmEiLCJnZW5lcmF0ZVdhbGxzIiwiY2xlYXJCb2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ0ZDLE9BQUMsRUFBQyxFQURBO0FBRUZDLE9BQUMsRUFBQyxFQUZBO0FBR0ZD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QSxjQUF2QkEsQ0FBdUI7QUFjOUI7O0FBRUQsMEJBQ0k7QUFBSyxpQkFBUyxFQUFFTyxnRUFBTSxDQUFDeUQsS0FBdkI7QUFBQSxnQ0FDQztBQUFNLG1CQUFTLEVBQUV6RCxnRUFBTSxDQUFDMEQsU0FBeEI7QUFBQSxrQ0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESCxlQUVHO0FBQVEsdUJBQVcsRUFBRSxLQUFLQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSCxlQUdHO0FBQVEsdUJBQVcsRUFBRSxLQUFLQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISCxlQUlHO0FBQVEsdUJBQVcsRUFBRSxLQUFLQSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSCxlQUtHO0FBQVEsdUJBQVcsRUFBRSxLQUFLQyxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSCxlQU1HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5ILGVBT0c7QUFBUSx1QkFBVyxFQUFFLEtBQUtDLGFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBILGVBUUc7QUFBUSx1QkFBVyxFQUFFLEtBQUtDLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQVdBO0FBQUssbUJBQVMsRUFBRS9ELGdFQUFNLENBQUNrRCxJQUF2QjtBQUFBLG9CQUNLQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFpQkg7Ozs7RUFuYTZCYSw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuMDlkN2Y3OWU4N2ZkYzYzNDA2ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRlPXtcclxuICAgICAgICBDOjEwLFxyXG4gICAgICAgIFI6MTAsXHJcbiAgICAgICAgc3RhcnQ6e3g6MSx5OjQsIHA6IG51bGx9LFxyXG4gICAgICAgIGVuZDp7eDo5LHk6OSwgcDogbnVsbH0sXHJcbiAgICAgICAgdmlzaXRlZDpbXSxcclxuICAgICAgICBub2RlOltdLFxyXG4gICAgICAgIG5kaWo6ZmFsc2VcclxuICAgIH1cclxuICAgIGRvd249ZmFsc2U7XHJcbiAgICBzaGlmdHN0YXJ0PWZhbHNlO1xyXG4gICAgc2hpZnRlbmQ9ZmFsc2U7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGxldCB2aXNpdGVkPVtdXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zdGF0ZS5SOyBpKyspIHtcclxuICAgICAgICAgICAgdmlzaXRlZC5wdXNoKG5ldyBBcnJheSh0aGlzLnN0YXRlLkMpLmZpbGwoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5vZGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrc3R5bGVzLmdyaWQrXCIgPiBkaXZcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZCxcclxuICAgICAgICAgICAgbm9kZTpub2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBkZXRlcm1pbmVDbGFzcyhpLGope1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhcnQueD09PWomJnRoaXMuc3RhdGUuc3RhcnQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5zdGFydDtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuZW5kLng9PT1qJiZ0aGlzLnN0YXRlLmVuZC55PT09aSlcclxuICAgICAgICByZXR1cm4gc3R5bGVzLmVuZDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5ib3g7ICBcclxuICAgIH1cclxuICAgIGNoZWNrU0UoaSxqKXtcclxuICAgICAgICByZXR1cm4gKGk9PXRoaXMuc3RhdGUuc3RhcnQueSYmaj09dGhpcy5zdGF0ZS5zdGFydC54KXx8KGk9PXRoaXMuc3RhdGUuZW5kLnkmJmo9PXRoaXMuc3RhdGUuZW5kLngpO1xyXG4gICAgfVxyXG4gICAgbW91c2VEb3duPShpLGopPT57XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5ub2RlJiZ0aGlzLnN0YXRlLnZpc2l0ZWQpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnN0YXJ0Lng9PWomJnRoaXMuc3RhdGUuc3RhcnQueT09aSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWZ0c3RhcnQ9dHJ1ZTsgICBcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ib3gpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZnRlbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuZW5kKTtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuYm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZG93bj10cnVlO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbaV1bal0pe1xyXG4gICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT10cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VMZWF2ZT0oaSxqKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuZG93bj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bj1mYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnNoaWZ0c3RhcnQ9PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0c3RhcnQ9ZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zaGlmdGVuZD09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZnRlbmQ9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBsZWF2aW5nIG5vdyFcIilcclxuICAgIH1cclxuICAgIG1vdXNlRW50ZXI9KGksaik9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBpZih0aGlzLnNoaWZ0c3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OntcclxuICAgICAgICAgICAgICAgICAgICB4OmosXHJcbiAgICAgICAgICAgICAgICAgICAgeTppLFxyXG4gICAgICAgICAgICAgICAgICAgIHA6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnN0YXJ0KTtcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuaW5uZXJIVE1MKFwiPGRpdj5FPC9kaXY+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc2hpZnRlbmQpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVuZDp7XHJcbiAgICAgICAgICAgICAgICAgICAgeDpqLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6aVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmVuZCk7XHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmlubmVySFRNTChcIjxkaXY+RTwvZGl2PlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRvd24pe1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93bihpLGopXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGRldGVybWluZVRleHQoaSxqKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnN0YXJ0Lng9PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PT1pKVxyXG4gICAgICAgIHJldHVybiA8ZGl2PlM8L2Rpdj47XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmVuZC54PT09aiYmdGhpcy5zdGF0ZS5lbmQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+RTwvZGl2PjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gICAgfVxyXG4gICAgc2xlZXA9KG1zKT0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICAgIH1cclxuICAgIGJmcz1hc3luYygpPT57XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XHJcbiAgICAgICAgbGV0IHEgPVtdO1xyXG4gICAgICAgIGxldCBjb3VudD0wLGksajtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDsgICAgXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBpZih2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XSl7XHJcbiAgICAgICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLndhbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHEucHVzaCh0aGlzLnN0YXRlLnN0YXJ0KTtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnN0YXRlLmVuZC54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMuc3RhdGUuZW5kLnk7XHJcbiAgICAgICAgbGV0IGVsZT17fSx4LHkscixjO1xyXG4gICAgICAgICAgICB3aGlsZSghcS5sZW5ndGg9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZSA9IHFbMF07XHJcbiAgICAgICAgICAgICAgICB4ID0gZWxlLng7XHJcbiAgICAgICAgICAgICAgICB5ID0gZWxlLnk7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkW3ldW3hdPXRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighKCh5PT10aGlzLnN0YXRlLnN0YXJ0LnkmJng9PXRoaXMuc3RhdGUuc3RhcnQueCl8fCh5PT10aGlzLnN0YXRlLmVuZC55JiZ4PT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqeSt4XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBxLnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICAgICAgaWYoZHg9PT14JiZkeT09PXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKGVsZSE9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW5zaWRlIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyooZWxlLnkpK2VsZS54XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlPWVsZS5wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDUwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICByPXJpW2ldK3k7XHJcbiAgICAgICAgICAgICAgICAgICAgYz1jaVtpXSt4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bnQ6XCIrY291bnQrKylcclxuICAgICAgICAgICAgICAgICAgICBpZihyPj0wJiZyPHRoaXMuc3RhdGUuUiYmYz49MCYmYzx0aGlzLnN0YXRlLkMmJiF2aXNpdGVkW3JdW2NdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcS5wdXNoKHt4OmMseTpyLHA6ZWxlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbcl1bY109dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISgocj09dGhpcy5zdGF0ZS5zdGFydC55JiZjPT10aGlzLnN0YXRlLnN0YXJ0LngpfHwocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqcitjXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGRmcz1hc3luYygpPT57XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xyXG4gICAgICAgIGxldCBxID1bXTtcclxuICAgICAgICBsZXQgY291bnQ9MCxpLGo7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7ICAgIFxyXG4gICAgICAgIGNvbnN0IHJpID0gWy0xLDEsMCwwXTtcclxuICAgICAgICBjb25zdCBjaSA9IFswLDAsLTEsMV07XHJcbiAgICAgICAgaWYodmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF0pe1xyXG4gICAgICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIW5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy53YWxsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBxLnB1c2godGhpcy5zdGF0ZS5zdGFydCk7XHJcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5zdGF0ZS5lbmQueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnN0YXRlLmVuZC55O1xyXG4gICAgICAgIGxldCBlbGU9e30seCx5LHIsYztcclxuICAgICAgICAgICAgd2hpbGUoIXEubGVuZ3RoPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGUgPSAgcS5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHggPSBlbGUueDtcclxuICAgICAgICAgICAgICAgIHkgPSBlbGUueTtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRbeV1beF09dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKCEoKHk9PXRoaXMuc3RhdGUuc3RhcnQueSYmeD09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHk9PXRoaXMuc3RhdGUuZW5kLnkmJng9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyp5K3hdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGR4PT09eCYmZHk9PT15KXtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZShlbGUhPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluc2lkZSFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqKGVsZS55KStlbGUueF0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZT1lbGUucDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihpPTA7aTw0O2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcj1yaVtpXSt5O1xyXG4gICAgICAgICAgICAgICAgICAgIGM9Y2lbaV0reDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50OlwiK2NvdW50KyspXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocj49MCYmcjx0aGlzLnN0YXRlLlImJmM+PTAmJmM8dGhpcy5zdGF0ZS5DJiYhdmlzaXRlZFtyXVtjXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHVzaCh7eDpjLHk6cixwOmVsZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW3JdW2NdPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEoKHI9PXRoaXMuc3RhdGUuc3RhcnQueSYmYz09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHI9PXRoaXMuc3RhdGUuZW5kLnkmJmM9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnIrY10uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDMwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBkaWprc3RyYT1hc3luYygpPT57XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgIG5kaWo6dHJ1ZVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgbGV0IG5vZGU9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdmlzaXRlZD0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdKXtcclxuICAgICAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMud2FsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF09dHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkXHJcbiAgICAgICAgfSkgIFxyXG4gICAgICAgIGxldCBpLGo7XHJcbiAgICAgICAgbGV0IHdlaWdodD1bXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICB3ZWlnaHQucHVzaCgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoIXZpc2l0ZWRbaV1bal0mJiF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0W2kqdGhpcy5zdGF0ZS5DK2pdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbaSp0aGlzLnN0YXRlLkMral0uaW5uZXJIVE1MPWA8ZGl2PiR7d2VpZ2h0W2kqdGhpcy5zdGF0ZS5DK2pdfTwvZGl2PmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnQ9MCxpaSxqaixpZCxudW0saztcclxuICAgICAgICBsZXQgbWFyayA9W107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgbWFyay5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGQgPSBbXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBkLnB1c2goMTBlNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBbXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBwYXJlbnQucHVzaChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZFt0aGlzLnN0YXRlLnN0YXJ0LnkqdGhpcy5zdGF0ZS5DK3RoaXMuc3RhdGUuc3RhcnQueF09MDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhleSwgbGlzdGVuXCIsdGhpcy5zdGF0ZS5zdGFydC55KnRoaXMuc3RhdGUuQyt0aGlzLnN0YXRlLnN0YXJ0LngpXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBsZXQgQyA9IHRoaXMuc3RhdGUuQyxSID0gdGhpcy5zdGF0ZS5SO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIGo9LTE7IG51bT0xMGU1O1xyXG4gICAgICAgICAgICBmb3IoaWQ9MDtpZDx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2lkKyspe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIGRcIixkW2lkXSlcclxuICAgICAgICAgICAgICAgIGlmKCFtYXJrW2lkXSYmZFtpZF08bnVtKXtcclxuICAgICAgICAgICAgICAgICAgICBqPWlkOyBudW0gPSBkW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJrW2pdPXRydWU7XHJcbiAgICAgICAgICAgIGxldCByID0gTWF0aC5mbG9vcihqL0MpO1xyXG4gICAgICAgICAgICBsZXQgYyA9IGotcipDO1xyXG4gICAgICAgICAgICBpZihyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KXtcclxuICAgICAgICAgICAgICAgIHdoaWxlKHBhcmVudFtqXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBqPSBwYXJlbnRbal07XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlW2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBKXCIsaik7XHJcbiAgICAgICAgICAgIGlmKGohPS0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5vZGVbal0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRlZCk7XHJcbiAgICAgICAgICAgIGZvcihrPTA7azw0O2srKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGguZmxvb3Ioai9DKTtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gai1yKkM7XHJcbiAgICAgICAgICAgICAgICByID1yKyByaVtrXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGVcIilcclxuICAgICAgICAgICAgICAgIGMgPWMrIGNpW2tdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcipDK2M7XHJcbiAgICAgICAgICAgICAgICBpZihyPj0wJiZyPFImJmM+PTAmJmM8QyYmIXZpc2l0ZWRbcl1bY10pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBXID0gd2VpZ2h0W3IqQytjXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRbal0rVzxkW2luZGV4XSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZFtpbmRleF09ZFtqXStXO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbaW5kZXhdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRbaW5kZXhdPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMjApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5jaGVja1NFKE1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpLGktdGhpcy5zdGF0ZS5DKk1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpKSl7XHJcbiAgICAgICAgICAgICAgICBub2RlW2ldLmlubmVySFRNTD1gPGRpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVdhbGxzPSgpPT57XHJcbiAgICAgICAgbGV0IHY9W107XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zdGF0ZS5SOyBpKyspIHtcclxuICAgICAgICAgICAgdi5wdXNoKG5ldyBBcnJheSh0aGlzLnN0YXRlLkMpLmZpbGwoZmFsc2UpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGk9MDtpPCB0aGlzLnN0YXRlLlI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqPCB0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxyXG4gICAgICAgICAgICAgICAgaWYocmFuZD09PTEmJiF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdltpXVtqXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xlYXJCb2FyZD0oKT0+e1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIGxldCB7UixDfT0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUjsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8IHRoaXMuc3RhdGUuQzsgaisrKXtcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMud2FsbClcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBsaXN0PVtdO1xyXG4gICAgICAgIGxldCBib3g9W107XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgbGlzdD1bXTtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dGhpcy5zdGF0ZS5DOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoXHJcbiAgICAgICAgICAgICAgICAgICAgKDxkaXYga2V5PXtqfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJveH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuZGV0ZXJtaW5lQ2xhc3MoaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCk9PnRoaXMubW91c2VEb3duKGksail9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKT0+dGhpcy5tb3VzZUxlYXZlKGksail9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKT0+dGhpcy5tb3VzZUVudGVyKGksailcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPnt0aGlzLmRldGVybWluZVRleHQoaSxqKX08L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm94LnB1c2gobGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZFB9PlxyXG4gICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuYWxnb3JpdGhtfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+QWxnb3JpdGhtczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5iZnN9ID5SdW4gQnJlYWR0aCBGaXJzdCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZGZzfSA+UnVuIERlcHRoIEZpcnN0IFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5kZnN9ID5SdW4gQSogU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmRpamtzdHJhfSA+UnVuIGRpamtzdHJhIFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5PcHRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmdlbmVyYXRlV2FsbHN9ID5HZW5lcmF0ZSAgUmFuZG9tIFdhbGxzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmNsZWFyQm9hcmR9ID5DbGVhciBCb2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7Ym94fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=