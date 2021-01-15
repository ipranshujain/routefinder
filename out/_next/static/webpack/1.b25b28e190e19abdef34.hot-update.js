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
            node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.start);
            node[_this.state.C * i + j].classList.innerHTML("<div></div>"); // node[this.state.C*i+j].classList.add(styles.box);
          } else {
            _this.shiftend = true;
            node[_this.state.C * i + j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.end);
            node[_this.state.C * i + j].classList.innerHTML("<div></div>"); // node[this.state.C*i+j].classList.add(styles.box);
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
            lineNumber: 395,
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
            lineNumber: 410,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.bfs,
            children: "Run Breadth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run Depth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run A* Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dijkstra,
            children: "Run dijkstra Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Options"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.generateWalls,
            children: "Generate  Random Walls"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.clearBoard,
            children: "Clear Board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.grid,
          children: box
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 408,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJDIiwiUiIsInN0YXJ0IiwieCIsInkiLCJwIiwiZW5kIiwidmlzaXRlZCIsIm5vZGUiLCJuZGlqIiwiaSIsImoiLCJzdGF0ZSIsImNoZWNrU0UiLCJzaGlmdHN0YXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGVzIiwiaW5uZXJIVE1MIiwic2hpZnRlbmQiLCJkb3duIiwid2FsbCIsImFkZCIsInNldFN0YXRlIiwibW91c2VEb3duIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicSIsImNvdW50IiwicmkiLCJjaSIsImNvbnRhaW5zIiwidmlzaXRpbmciLCJwYXRoIiwicHVzaCIsImR4IiwiZHkiLCJlbGUiLCJsZW5ndGgiLCJzcGxpY2UiLCJzbGVlcCIsInIiLCJjIiwiY2xlYXIiLCJwb3AiLCJ3ZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtYXJrIiwiZCIsInBhcmVudCIsIm51bSIsImlkIiwiayIsImluZGV4IiwiVyIsInYiLCJBcnJheSIsImZpbGwiLCJyYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZCIsImJveCIsImxpc3QiLCJkZXRlcm1pbmVDbGFzcyIsIm1vdXNlTGVhdmUiLCJtb3VzZUVudGVyIiwiZGV0ZXJtaW5lVGV4dCIsImdyaWRQIiwiYWxnb3JpdGhtIiwiYmZzIiwiZGZzIiwiZGlqa3N0cmEiLCJnZW5lcmF0ZVdhbGxzIiwiY2xlYXJCb2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ0ZDLE9BQUMsRUFBQyxFQURBO0FBRUZDLE9BQUMsRUFBQyxFQUZBO0FBR0ZD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SUFBdkI7QUFBQSxvQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBaUJIOzs7O0VBcmE2QmEsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmIyNWIyOGUxOTBlMTlhYmRlZjM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgQzoxMCxcclxuICAgICAgICBSOjEwLFxyXG4gICAgICAgIHN0YXJ0Ont4OjEseTo0LCBwOiBudWxsfSxcclxuICAgICAgICBlbmQ6e3g6OSx5OjksIHA6IG51bGx9LFxyXG4gICAgICAgIHZpc2l0ZWQ6W10sXHJcbiAgICAgICAgbm9kZTpbXSxcclxuICAgICAgICBuZGlqOmZhbHNlXHJcbiAgICB9XHJcbiAgICBkb3duPWZhbHNlO1xyXG4gICAgc2hpZnRzdGFydD1mYWxzZTtcclxuICAgIHNoaWZ0ZW5kPWZhbHNlO1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBsZXQgdmlzaXRlZD1bXVxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3RhdGUuUjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQucHVzaChuZXcgQXJyYXkodGhpcy5zdGF0ZS5DKS5maWxsKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBub2RlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3N0eWxlcy5ncmlkK1wiID4gZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWQsXHJcbiAgICAgICAgICAgIG5vZGU6bm9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZGV0ZXJtaW5lQ2xhc3MoaSxqKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnN0YXJ0Lng9PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PT1pKVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuc3RhcnQ7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmVuZC54PT09aiYmdGhpcy5zdGF0ZS5lbmQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5lbmQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuYm94OyAgXHJcbiAgICB9XHJcbiAgICBjaGVja1NFKGksail7XHJcbiAgICAgICAgcmV0dXJuIChpPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmo9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChpPT10aGlzLnN0YXRlLmVuZC55JiZqPT10aGlzLnN0YXRlLmVuZC54KTtcclxuICAgIH1cclxuICAgIG1vdXNlRG93bj0oaSxqKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubm9kZSYmdGhpcy5zdGF0ZS52aXNpdGVkKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFydC54PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PWkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlmdHN0YXJ0PXRydWU7ICAgXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmlubmVySFRNTChcIjxkaXY+PC9kaXY+XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ib3gpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZnRlbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuZW5kKTtcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuaW5uZXJIVE1MKFwiPGRpdj48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmJveCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRvd249dHJ1ZTtcclxuICAgICAgICBpZih2aXNpdGVkW2ldW2pdKXtcclxuICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09dHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlTGVhdmU9KGksaik9PntcclxuICAgICAgICBpZih0aGlzLmRvd249PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmRvd249ZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zaGlmdHN0YXJ0PT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5zaGlmdHN0YXJ0PWZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2hpZnRlbmQ9PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0ZW5kPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gbGVhdmluZyBub3chXCIpXHJcbiAgICB9XHJcbiAgICBtb3VzZUVudGVyPShpLGopPT57XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgaWYodGhpcy5zaGlmdHN0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGFydDp7XHJcbiAgICAgICAgICAgICAgICAgICAgeDpqLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6aSxcclxuICAgICAgICAgICAgICAgICAgICBwOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zdGFydCk7XHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmlubmVySFRNTChcIjxkaXY+RTwvZGl2PlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNoaWZ0ZW5kKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbmQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHg6aixcclxuICAgICAgICAgICAgICAgICAgICB5OmlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5lbmQpO1xyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5pbm5lckhUTUwoXCI8ZGl2PkU8L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kb3duKXtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24oaSxqKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBkZXRlcm1pbmVUZXh0KGksail7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFydC54PT09aiYmdGhpcy5zdGF0ZS5zdGFydC55PT09aSlcclxuICAgICAgICByZXR1cm4gPGRpdj5TPC9kaXY+O1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5lbmQueD09PWomJnRoaXMuc3RhdGUuZW5kLnk9PT1pKVxyXG4gICAgICAgIHJldHVybiA8ZGl2PkU8L2Rpdj47XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcclxuICAgIH1cclxuICAgIHNsZWVwPShtcyk9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgICB9XHJcbiAgICBiZnM9YXN5bmMoKT0+e1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xyXG4gICAgICAgIGxldCBxID1bXTtcclxuICAgICAgICBsZXQgY291bnQ9MCxpLGo7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7ICAgIFxyXG4gICAgICAgIGNvbnN0IHJpID0gWy0xLDEsMCwwXTtcclxuICAgICAgICBjb25zdCBjaSA9IFswLDAsLTEsMV07XHJcbiAgICAgICAgaWYodmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF0pe1xyXG4gICAgICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIW5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy53YWxsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBxLnB1c2godGhpcy5zdGF0ZS5zdGFydCk7XHJcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5zdGF0ZS5lbmQueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnN0YXRlLmVuZC55O1xyXG4gICAgICAgIGxldCBlbGU9e30seCx5LHIsYztcclxuICAgICAgICAgICAgd2hpbGUoIXEubGVuZ3RoPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGUgPSBxWzBdO1xyXG4gICAgICAgICAgICAgICAgeCA9IGVsZS54O1xyXG4gICAgICAgICAgICAgICAgeSA9IGVsZS55O1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFt5XVt4XT10cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYoISgoeT09dGhpcy5zdGF0ZS5zdGFydC55JiZ4PT10aGlzLnN0YXRlLnN0YXJ0LngpfHwoeT09dGhpcy5zdGF0ZS5lbmQueSYmeD09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnkreF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcS5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgICAgIGlmKGR4PT09eCYmZHk9PT15KXtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZShlbGUhPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluc2lkZSFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqKGVsZS55KStlbGUueF0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZT1lbGUucDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihpPTA7aTw0O2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcj1yaVtpXSt5O1xyXG4gICAgICAgICAgICAgICAgICAgIGM9Y2lbaV0reDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50OlwiK2NvdW50KyspXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocj49MCYmcjx0aGlzLnN0YXRlLlImJmM+PTAmJmM8dGhpcy5zdGF0ZS5DJiYhdmlzaXRlZFtyXVtjXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHVzaCh7eDpjLHk6cixwOmVsZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW3JdW2NdPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEoKHI9PXRoaXMuc3RhdGUuc3RhcnQueSYmYz09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHI9PXRoaXMuc3RhdGUuZW5kLnkmJmM9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnIrY10uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDMwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBkZnM9YXN5bmMoKT0+e1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcclxuICAgICAgICBsZXQgcSA9W107XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaSxqO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkOyAgICBcclxuICAgICAgICBjb25zdCByaSA9IFstMSwxLDAsMF07XHJcbiAgICAgICAgY29uc3QgY2kgPSBbMCwwLC0xLDFdO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdKXtcclxuICAgICAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMud2FsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcS5wdXNoKHRoaXMuc3RhdGUuc3RhcnQpO1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMuc3RhdGUuZW5kLng7XHJcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5zdGF0ZS5lbmQueTtcclxuICAgICAgICBsZXQgZWxlPXt9LHgseSxyLGM7XHJcbiAgICAgICAgICAgIHdoaWxlKCFxLmxlbmd0aD09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlID0gIHEucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB4ID0gZWxlLng7XHJcbiAgICAgICAgICAgICAgICB5ID0gZWxlLnk7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkW3ldW3hdPXRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighKCh5PT10aGlzLnN0YXRlLnN0YXJ0LnkmJng9PXRoaXMuc3RhdGUuc3RhcnQueCl8fCh5PT10aGlzLnN0YXRlLmVuZC55JiZ4PT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqeSt4XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihkeD09PXgmJmR5PT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoZWxlIT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGUhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKihlbGUueSkrZWxlLnhdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGU9ZWxlLnA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IoaT0wO2k8NDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHI9cmlbaV0reTtcclxuICAgICAgICAgICAgICAgICAgICBjPWNpW2ldK3g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VudDpcIitjb3VudCsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHI+PTAmJnI8dGhpcy5zdGF0ZS5SJiZjPj0wJiZjPHRoaXMuc3RhdGUuQyYmIXZpc2l0ZWRbcl1bY10pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxLnB1c2goe3g6Yyx5OnIscDplbGV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtyXVtjXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighKChyPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmM9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQypyK2NdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgZGlqa3N0cmE9YXN5bmMoKT0+e1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICBuZGlqOnRydWVcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGxldCBub2RlPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZpc2l0ZWQ9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBpZih2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XSl7XHJcbiAgICAgICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLndhbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdPXRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZFxyXG4gICAgICAgIH0pICBcclxuICAgICAgICBsZXQgaSxqO1xyXG4gICAgICAgIGxldCB3ZWlnaHQ9W107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgd2VpZ2h0LnB1c2goLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgIGlmKCF2aXNpdGVkW2ldW2pdJiYhdGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodFtpKnRoaXMuc3RhdGUuQytqXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMCsxKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW2kqdGhpcy5zdGF0ZS5DK2pdLmlubmVySFRNTD1gPGRpdj4ke3dlaWdodFtpKnRoaXMuc3RhdGUuQytqXX08L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaWksamosaWQsbnVtLGs7XHJcbiAgICAgICAgbGV0IG1hcmsgPVtdO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIG1hcmsucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkID0gW107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgZC5wdXNoKDEwZTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyZW50ID0gW107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgcGFyZW50LnB1c2gobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRbdGhpcy5zdGF0ZS5zdGFydC55KnRoaXMuc3RhdGUuQyt0aGlzLnN0YXRlLnN0YXJ0LnhdPTA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZXksIGxpc3RlblwiLHRoaXMuc3RhdGUuc3RhcnQueSp0aGlzLnN0YXRlLkMrdGhpcy5zdGF0ZS5zdGFydC54KVxyXG4gICAgICAgIGNvbnN0IHJpID0gWy0xLDEsMCwwXTtcclxuICAgICAgICBjb25zdCBjaSA9IFswLDAsLTEsMV07XHJcbiAgICAgICAgbGV0IEMgPSB0aGlzLnN0YXRlLkMsUiA9IHRoaXMuc3RhdGUuUjtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBqPS0xOyBudW09MTBlNTtcclxuICAgICAgICAgICAgZm9yKGlkPTA7aWQ8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpZCsrKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBkXCIsZFtpZF0pXHJcbiAgICAgICAgICAgICAgICBpZighbWFya1tpZF0mJmRbaWRdPG51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaj1pZDsgbnVtID0gZFtpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFya1tqXT10cnVlO1xyXG4gICAgICAgICAgICBsZXQgciA9IE1hdGguZmxvb3Ioai9DKTtcclxuICAgICAgICAgICAgbGV0IGMgPSBqLXIqQztcclxuICAgICAgICAgICAgaWYocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCl7XHJcbiAgICAgICAgICAgICAgICB3aGlsZShwYXJlbnRbal0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbal0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaj0gcGFyZW50W2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gSlwiLGopO1xyXG4gICAgICAgICAgICBpZihqIT0tMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBub2RlW2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG4gICAgICAgICAgICBmb3Ioaz0wO2s8NDtrKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKGovQyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGotcipDO1xyXG4gICAgICAgICAgICAgICAgciA9cisgcmlba107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gaW5zaWRlXCIpXHJcbiAgICAgICAgICAgICAgICBjID1jKyBjaVtrXTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHIqQytjO1xyXG4gICAgICAgICAgICAgICAgaWYocj49MCYmcjxSJiZjPj0wJiZjPEMmJiF2aXNpdGVkW3JdW2NdKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgVyA9IHdlaWdodFtyKkMrY107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFwiLGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkW2pdK1c8ZFtpbmRleF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGRbaW5kZXhdPWRbal0rVztcclxuICAgICAgICAgICAgICAgICAgICBub2RlW2luZGV4XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50W2luZGV4XT0gajtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDIwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgY2xlYXIoKXtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tTRShNYXRoLmZsb29yKGkvdGhpcy5zdGF0ZS5DKSxpLXRoaXMuc3RhdGUuQypNYXRoLmZsb29yKGkvdGhpcy5zdGF0ZS5DKSkpe1xyXG4gICAgICAgICAgICAgICAgbm9kZVtpXS5pbm5lckhUTUw9YDxkaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVXYWxscz0oKT0+e1xyXG4gICAgICAgIGxldCB2PVtdO1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3RhdGUuUjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHYucHVzaChuZXcgQXJyYXkodGhpcy5zdGF0ZS5DKS5maWxsKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTwgdGhpcy5zdGF0ZS5SOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGo9MDsgajwgdGhpcy5zdGF0ZS5DOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgICAgICAgICAgICAgIGlmKHJhbmQ9PT0xJiYhdGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZbaV1bal09dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNsZWFyQm9hcmQ9KCk9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBsZXQge1IsQ309IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnN0YXRlLlI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPCB0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgbGlzdD1bXTtcclxuICAgICAgICBsZXQgYm94PVtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgIGxpc3Q9W107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRoaXMuc3RhdGUuQzsgaisrKXtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaFxyXG4gICAgICAgICAgICAgICAgICAgICg8ZGl2IGtleT17an1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ib3h9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmRldGVybWluZUNsYXNzKGksail9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpPT50aGlzLm1vdXNlRG93bihpLGopfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCk9PnRoaXMubW91c2VMZWF2ZShpLGopfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCk9PnRoaXMubW91c2VFbnRlcihpLGopXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID57dGhpcy5kZXRlcm1pbmVUZXh0KGksail9PC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJveC5wdXNoKGxpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRQfT5cclxuICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmFsZ29yaXRobX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkFsZ29yaXRobXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuYmZzfSA+UnVuIEJyZWFkdGggRmlyc3QgU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmRmc30gPlJ1biBEZXB0aCBGaXJzdCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZGZzfSA+UnVuIEEqIFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5kaWprc3RyYX0gPlJ1biBkaWprc3RyYSBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+T3B0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5nZW5lcmF0ZVdhbGxzfSA+R2VuZXJhdGUgIFJhbmRvbSBXYWxsczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5jbGVhckJvYXJkfSA+Q2xlYXIgQm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgICAge2JveH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9