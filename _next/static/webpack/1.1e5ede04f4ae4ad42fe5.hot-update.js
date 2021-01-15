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
        for (var _j = 0; _j < _this.state.C; _j++) {
          node[_this.state.C * i + _j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wall);

          node[_this.state.C * i + _j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);

          node[_this.state.C * i + _j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);

          node[_this.state.C * i + _j].classList.remove(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);

          visited[i][_j] = false;
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
        } else if (i == this.state.start.y && j == this.state.start.x) {
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

        var _loop2 = function _loop2(_j2) {
          var _jsxDEV2;

          list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", (_jsxDEV2 = {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.box
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "className", _this2.determineClass(i, _j2)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "onMouseDown", function onMouseDown() {
            return _this2.mouseDown(i, _j2);
          }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "onMouseUp", function onMouseUp() {
            return _this2.mouseLeave(i, _j2);
          }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "onMouseEnter", function onMouseEnter() {
            return _this2.mouseEnter(i, _j2);
          }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_jsxDEV2, "children", _this2.determineText(i, _j2)), _jsxDEV2), _j2, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 22
          }, _this2));
        };

        for (var _j2 = 0; _j2 < _this2.state.C; _j2++) {
          _loop2(_j2);
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
            lineNumber: 416,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.bfs,
            children: "Run Breadth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run Depth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 418,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run A* Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dijkstra,
            children: "Run dijkstra Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Options"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.generateWalls,
            children: "Generate  Random Walls"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.clearBoard,
            children: "Clear Board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.grid,
          children: box
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJDIiwiUiIsInN0YXJ0IiwieCIsInkiLCJwIiwiZW5kIiwidmlzaXRlZCIsIm5vZGUiLCJuZGlqIiwiaSIsImoiLCJzdGF0ZSIsImNoZWNrU0UiLCJzaGlmdHN0YXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGVzIiwic2hpZnRlbmQiLCJkb3duIiwid2FsbCIsImFkZCIsInNldFN0YXRlIiwibW91c2VEb3duIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicSIsImNvdW50IiwicmkiLCJjaSIsImNvbnRhaW5zIiwidmlzaXRpbmciLCJwYXRoIiwicHVzaCIsImR4IiwiZHkiLCJlbGUiLCJsZW5ndGgiLCJzcGxpY2UiLCJzbGVlcCIsInIiLCJjIiwiY2xlYXIiLCJwb3AiLCJ3ZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbm5lckhUTUwiLCJtYXJrIiwiZCIsInBhcmVudCIsIm51bSIsImlkIiwiayIsImluZGV4IiwiVyIsInYiLCJBcnJheSIsImZpbGwiLCJyYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZCIsImJveCIsImxpc3QiLCJkZXRlcm1pbmVDbGFzcyIsIm1vdXNlTGVhdmUiLCJtb3VzZUVudGVyIiwiZGV0ZXJtaW5lVGV4dCIsImdyaWRQIiwiYWxnb3JpdGhtIiwiYmZzIiwiZGZzIiwiZGlqa3N0cmEiLCJnZW5lcmF0ZVdhbGxzIiwiY2xlYXJCb2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ0ZDLE9BQUMsRUFBQyxFQURBO0FBRUZDLE9BQUMsRUFBQyxFQUZBO0FBR0ZD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ZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRlPXtcclxuICAgICAgICBDOjEwLFxyXG4gICAgICAgIFI6MTAsXHJcbiAgICAgICAgc3RhcnQ6e3g6MSx5OjQsIHA6IG51bGx9LFxyXG4gICAgICAgIGVuZDp7eDo5LHk6OSwgcDogbnVsbH0sXHJcbiAgICAgICAgdmlzaXRlZDpbXSxcclxuICAgICAgICBub2RlOltdLFxyXG4gICAgICAgIG5kaWo6ZmFsc2VcclxuICAgIH1cclxuICAgIGRvd249ZmFsc2U7XHJcbiAgICBzaGlmdHN0YXJ0PWZhbHNlO1xyXG4gICAgc2hpZnRlbmQ9ZmFsc2U7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGxldCB2aXNpdGVkPVtdXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zdGF0ZS5SOyBpKyspIHtcclxuICAgICAgICAgICAgdmlzaXRlZC5wdXNoKG5ldyBBcnJheSh0aGlzLnN0YXRlLkMpLmZpbGwoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5vZGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrc3R5bGVzLmdyaWQrXCIgPiBkaXZcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZCxcclxuICAgICAgICAgICAgbm9kZTpub2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBkZXRlcm1pbmVDbGFzcyhpLGope1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhcnQueD09PWomJnRoaXMuc3RhdGUuc3RhcnQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5zdGFydDtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuZW5kLng9PT1qJiZ0aGlzLnN0YXRlLmVuZC55PT09aSlcclxuICAgICAgICByZXR1cm4gc3R5bGVzLmVuZDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5ib3g7ICBcclxuICAgIH1cclxuICAgIGNoZWNrU0UoaSxqKXtcclxuICAgICAgICByZXR1cm4gKGk9PXRoaXMuc3RhdGUuc3RhcnQueSYmaj09dGhpcy5zdGF0ZS5zdGFydC54KXx8KGk9PXRoaXMuc3RhdGUuZW5kLnkmJmo9PXRoaXMuc3RhdGUuZW5kLngpO1xyXG4gICAgfVxyXG4gICAgbW91c2VEb3duPShpLGopPT57XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5ub2RlJiZ0aGlzLnN0YXRlLnZpc2l0ZWQpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnN0YXJ0Lng9PWomJnRoaXMuc3RhdGUuc3RhcnQueT09aSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWZ0c3RhcnQ9dHJ1ZTsgICBcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5pbm5lckhUTUw9XCI8ZGl2PjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ib3gpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZnRlbmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuZW5kKTtcclxuICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5pbm5lckhUTUw9XCI8ZGl2PjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kb3duPXRydWU7XHJcbiAgICAgICAgaWYodmlzaXRlZFtpXVtqXSl7XHJcbiAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICB2aXNpdGVkW2ldW2pdPXRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZUxlYXZlPShpLGopPT57XHJcbiAgICAgICAgaWYodGhpcy5kb3duPT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5kb3duPWZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2hpZnRzdGFydD09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZnRzdGFydD1mYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnNoaWZ0ZW5kPT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5zaGlmdGVuZD1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIGxlYXZpbmcgbm93IVwiKVxyXG4gICAgfVxyXG4gICAgbW91c2VFbnRlcj0oaSxqKT0+e1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGlmKHRoaXMuc2hpZnRzdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHg6aixcclxuICAgICAgICAgICAgICAgICAgICB5OmksXHJcbiAgICAgICAgICAgICAgICAgICAgcDpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc3RhcnQpO1xyXG4gICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmlubmVySFRNTD1cIjxkaXY+UzwvZGl2PlwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc2hpZnRlbmQpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVuZDp7XHJcbiAgICAgICAgICAgICAgICAgICAgeDpqLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6aVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmVuZCk7XHJcbiAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uaW5uZXJIVE1MPVwiPGRpdj5FPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kb3duKXtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24oaSxqKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBkZXRlcm1pbmVUZXh0KGksail7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFydC54PT09aiYmdGhpcy5zdGF0ZS5zdGFydC55PT09aSlcclxuICAgICAgICByZXR1cm4gPGRpdj5TPC9kaXY+O1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5lbmQueD09PWomJnRoaXMuc3RhdGUuZW5kLnk9PT1pKVxyXG4gICAgICAgIHJldHVybiA8ZGl2PkU8L2Rpdj47XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcclxuICAgIH1cclxuICAgIHNsZWVwPShtcyk9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgICB9XHJcbiAgICBiZnM9YXN5bmMoKT0+e1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xyXG4gICAgICAgIGxldCBxID1bXTtcclxuICAgICAgICBsZXQgY291bnQ9MCxpLGo7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7ICAgIFxyXG4gICAgICAgIGNvbnN0IHJpID0gWy0xLDEsMCwwXTtcclxuICAgICAgICBjb25zdCBjaSA9IFswLDAsLTEsMV07XHJcbiAgICAgICAgaWYodmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF0pe1xyXG4gICAgICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIW5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy53YWxsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBxLnB1c2godGhpcy5zdGF0ZS5zdGFydCk7XHJcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5zdGF0ZS5lbmQueDtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnN0YXRlLmVuZC55O1xyXG4gICAgICAgIGxldCBlbGU9e30seCx5LHIsYztcclxuICAgICAgICAgICAgd2hpbGUoIXEubGVuZ3RoPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGUgPSBxWzBdO1xyXG4gICAgICAgICAgICAgICAgeCA9IGVsZS54O1xyXG4gICAgICAgICAgICAgICAgeSA9IGVsZS55O1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFt5XVt4XT10cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYoISgoeT09dGhpcy5zdGF0ZS5zdGFydC55JiZ4PT10aGlzLnN0YXRlLnN0YXJ0LngpfHwoeT09dGhpcy5zdGF0ZS5lbmQueSYmeD09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnkreF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcS5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgICAgIGlmKGR4PT09eCYmZHk9PT15KXtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZShlbGUhPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluc2lkZSFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqKGVsZS55KStlbGUueF0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZT1lbGUucDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihpPTA7aTw0O2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcj1yaVtpXSt5O1xyXG4gICAgICAgICAgICAgICAgICAgIGM9Y2lbaV0reDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50OlwiK2NvdW50KyspXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocj49MCYmcjx0aGlzLnN0YXRlLlImJmM+PTAmJmM8dGhpcy5zdGF0ZS5DJiYhdmlzaXRlZFtyXVtjXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHVzaCh7eDpjLHk6cixwOmVsZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW3JdW2NdPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEoKHI9PXRoaXMuc3RhdGUuc3RhcnQueSYmYz09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHI9PXRoaXMuc3RhdGUuZW5kLnkmJmM9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnIrY10uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDMwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBkZnM9YXN5bmMoKT0+e1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcclxuICAgICAgICBsZXQgcSA9W107XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaSxqO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkOyAgICBcclxuICAgICAgICBjb25zdCByaSA9IFstMSwxLDAsMF07XHJcbiAgICAgICAgY29uc3QgY2kgPSBbMCwwLC0xLDFdO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdKXtcclxuICAgICAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMud2FsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcS5wdXNoKHRoaXMuc3RhdGUuc3RhcnQpO1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMuc3RhdGUuZW5kLng7XHJcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5zdGF0ZS5lbmQueTtcclxuICAgICAgICBsZXQgZWxlPXt9LHgseSxyLGM7XHJcbiAgICAgICAgICAgIHdoaWxlKCFxLmxlbmd0aD09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlID0gIHEucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB4ID0gZWxlLng7XHJcbiAgICAgICAgICAgICAgICB5ID0gZWxlLnk7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkW3ldW3hdPXRydWU7XHJcbiAgICAgICAgICAgICAgICBpZighKCh5PT10aGlzLnN0YXRlLnN0YXJ0LnkmJng9PXRoaXMuc3RhdGUuc3RhcnQueCl8fCh5PT10aGlzLnN0YXRlLmVuZC55JiZ4PT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqeSt4XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihkeD09PXgmJmR5PT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoZWxlIT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGUhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKihlbGUueSkrZWxlLnhdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGU9ZWxlLnA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IoaT0wO2k8NDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHI9cmlbaV0reTtcclxuICAgICAgICAgICAgICAgICAgICBjPWNpW2ldK3g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VudDpcIitjb3VudCsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHI+PTAmJnI8dGhpcy5zdGF0ZS5SJiZjPj0wJiZjPHRoaXMuc3RhdGUuQyYmIXZpc2l0ZWRbcl1bY10pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxLnB1c2goe3g6Yyx5OnIscDplbGV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtyXVtjXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighKChyPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmM9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQypyK2NdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgZGlqa3N0cmE9YXN5bmMoKT0+e1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICBuZGlqOnRydWVcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGxldCBub2RlPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZpc2l0ZWQ9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBpZih2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XSl7XHJcbiAgICAgICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLndhbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdPXRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZFxyXG4gICAgICAgIH0pICBcclxuICAgICAgICBsZXQgaSxqO1xyXG4gICAgICAgIGxldCB3ZWlnaHQ9W107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgd2VpZ2h0LnB1c2goLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgIGlmKCF2aXNpdGVkW2ldW2pdJiYhdGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodFtpKnRoaXMuc3RhdGUuQytqXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMCsxKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW2kqdGhpcy5zdGF0ZS5DK2pdLmlubmVySFRNTD1gPGRpdj4ke3dlaWdodFtpKnRoaXMuc3RhdGUuQytqXX08L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaWksamosaWQsbnVtLGs7XHJcbiAgICAgICAgbGV0IG1hcmsgPVtdO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIG1hcmsucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkID0gW107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgZC5wdXNoKDEwZTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyZW50ID0gW107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgcGFyZW50LnB1c2gobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRbdGhpcy5zdGF0ZS5zdGFydC55KnRoaXMuc3RhdGUuQyt0aGlzLnN0YXRlLnN0YXJ0LnhdPTA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZXksIGxpc3RlblwiLHRoaXMuc3RhdGUuc3RhcnQueSp0aGlzLnN0YXRlLkMrdGhpcy5zdGF0ZS5zdGFydC54KVxyXG4gICAgICAgIGNvbnN0IHJpID0gWy0xLDEsMCwwXTtcclxuICAgICAgICBjb25zdCBjaSA9IFswLDAsLTEsMV07XHJcbiAgICAgICAgbGV0IEMgPSB0aGlzLnN0YXRlLkMsUiA9IHRoaXMuc3RhdGUuUjtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBqPS0xOyBudW09MTBlNTtcclxuICAgICAgICAgICAgZm9yKGlkPTA7aWQ8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpZCsrKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBkXCIsZFtpZF0pXHJcbiAgICAgICAgICAgICAgICBpZighbWFya1tpZF0mJmRbaWRdPG51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaj1pZDsgbnVtID0gZFtpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFya1tqXT10cnVlO1xyXG4gICAgICAgICAgICBsZXQgciA9IE1hdGguZmxvb3Ioai9DKTtcclxuICAgICAgICAgICAgbGV0IGMgPSBqLXIqQztcclxuICAgICAgICAgICAgaWYocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCl7XHJcbiAgICAgICAgICAgICAgICB3aGlsZShwYXJlbnRbal0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbal0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaj0gcGFyZW50W2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gSlwiLGopO1xyXG4gICAgICAgICAgICBpZihqIT0tMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBub2RlW2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG4gICAgICAgICAgICBmb3Ioaz0wO2s8NDtrKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKGovQyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGotcipDO1xyXG4gICAgICAgICAgICAgICAgciA9cisgcmlba107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gaW5zaWRlXCIpXHJcbiAgICAgICAgICAgICAgICBjID1jKyBjaVtrXTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHIqQytjO1xyXG4gICAgICAgICAgICAgICAgaWYocj49MCYmcjxSJiZjPj0wJiZjPEMmJiF2aXNpdGVkW3JdW2NdKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgVyA9IHdlaWdodFtyKkMrY107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFwiLGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkW2pdK1c8ZFtpbmRleF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGRbaW5kZXhdPWRbal0rVztcclxuICAgICAgICAgICAgICAgICAgICBub2RlW2luZGV4XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50W2luZGV4XT0gajtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDIwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgY2xlYXIoKXtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tTRShNYXRoLmZsb29yKGkvdGhpcy5zdGF0ZS5DKSxpLXRoaXMuc3RhdGUuQypNYXRoLmZsb29yKGkvdGhpcy5zdGF0ZS5DKSkpe1xyXG4gICAgICAgICAgICAgICAgbm9kZVtpXS5pbm5lckhUTUw9YDxkaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICB9ZWxzZSBpZihpPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmo9PXRoaXMuc3RhdGUuc3RhcnQueCl7XHJcbiAgICAgICAgICAgICAgICBub2RlW2ldLmlubmVySFRNTD1gPGRpdj5TPC9kaXY+YFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG5vZGVbaV0uaW5uZXJIVE1MPWA8ZGl2PkU8L2Rpdj5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVdhbGxzPSgpPT57XHJcbiAgICAgICAgbGV0IHY9W107XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zdGF0ZS5SOyBpKyspIHtcclxuICAgICAgICAgICAgdi5wdXNoKG5ldyBBcnJheSh0aGlzLnN0YXRlLkMpLmZpbGwoZmFsc2UpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGk9MDtpPCB0aGlzLnN0YXRlLlI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqPCB0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxyXG4gICAgICAgICAgICAgICAgaWYocmFuZD09PTEmJiF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdltpXVtqXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xlYXJCb2FyZD0oKT0+e1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBsZXQge1IsQ309IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnN0YXRlLlI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPCB0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGxpc3Q9W107XHJcbiAgICAgICAgbGV0IGJveD1bXTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICBsaXN0PVtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2hcclxuICAgICAgICAgICAgICAgICAgICAoPGRpdiBrZXk9e2p9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYm94fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5kZXRlcm1pbmVDbGFzcyhpLGopfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKT0+dGhpcy5tb3VzZURvd24oaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpPT50aGlzLm1vdXNlTGVhdmUoaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT50aGlzLm1vdXNlRW50ZXIoaSxqKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+e3RoaXMuZGV0ZXJtaW5lVGV4dChpLGopfTwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib3gucHVzaChsaXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkUH0+XHJcbiAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5hbGdvcml0aG19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5BbGdvcml0aG1zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmJmc30gPlJ1biBCcmVhZHRoIEZpcnN0IFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5kZnN9ID5SdW4gRGVwdGggRmlyc3QgU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmRmc30gPlJ1biBBKiBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZGlqa3N0cmF9ID5SdW4gZGlqa3N0cmEgU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk9wdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZ2VuZXJhdGVXYWxsc30gPkdlbmVyYXRlICBSYW5kb20gV2FsbHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuY2xlYXJCb2FyZH0gPkNsZWFyIEJvYXJkPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgICAgIHtib3h9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==