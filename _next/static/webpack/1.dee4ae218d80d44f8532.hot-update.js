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
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.clearBoard,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJDIiwiUiIsInN0YXJ0IiwieCIsInkiLCJwIiwiZW5kIiwidmlzaXRlZCIsIm5vZGUiLCJuZGlqIiwiaSIsImoiLCJzdGF0ZSIsImNoZWNrU0UiLCJzaGlmdHN0YXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGVzIiwic2hpZnRlbmQiLCJkb3duIiwid2FsbCIsImFkZCIsInNldFN0YXRlIiwibW91c2VEb3duIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicSIsImNvdW50IiwicmkiLCJjaSIsImNvbnRhaW5zIiwidmlzaXRpbmciLCJwYXRoIiwicHVzaCIsImR4IiwiZHkiLCJlbGUiLCJsZW5ndGgiLCJzcGxpY2UiLCJzbGVlcCIsInIiLCJjIiwiY2xlYXIiLCJwb3AiLCJ3ZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbm5lckhUTUwiLCJtYXJrIiwiZCIsInBhcmVudCIsIm51bSIsImlkIiwiayIsImluZGV4IiwiVyIsInYiLCJBcnJheSIsImZpbGwiLCJyYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZCIsImJveCIsImxpc3QiLCJkZXRlcm1pbmVDbGFzcyIsIm1vdXNlTGVhdmUiLCJtb3VzZUVudGVyIiwiZGV0ZXJtaW5lVGV4dCIsImdyaWRQIiwiYWxnb3JpdGhtIiwiYmZzIiwiZGZzIiwiZGlqa3N0cmEiLCJnZW5lcmF0ZVdhbGxzIiwiY2xlYXJCb2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ0ZDLE9BQUMsRUFBQyxFQURBO0FBRUZDLE9BQUMsRUFBQyxFQUZBO0FBR0ZD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QUUvRCxnRUFBTSxDQUFDa0QsSUFBdkI7QUFBQSxvQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBaUJIOzs7O0VBM2E2QmEsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmRlZTRhZTIxOGQ4MGQ0NGY4NTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgQzoxMCxcclxuICAgICAgICBSOjEwLFxyXG4gICAgICAgIHN0YXJ0Ont4OjEseTo0LCBwOiBudWxsfSxcclxuICAgICAgICBlbmQ6e3g6OSx5OjksIHA6IG51bGx9LFxyXG4gICAgICAgIHZpc2l0ZWQ6W10sXHJcbiAgICAgICAgbm9kZTpbXSxcclxuICAgICAgICBuZGlqOmZhbHNlXHJcbiAgICB9XHJcbiAgICBkb3duPWZhbHNlO1xyXG4gICAgc2hpZnRzdGFydD1mYWxzZTtcclxuICAgIHNoaWZ0ZW5kPWZhbHNlO1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBsZXQgdmlzaXRlZD1bXVxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3RhdGUuUjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQucHVzaChuZXcgQXJyYXkodGhpcy5zdGF0ZS5DKS5maWxsKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBub2RlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3N0eWxlcy5ncmlkK1wiID4gZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWQsXHJcbiAgICAgICAgICAgIG5vZGU6bm9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZGV0ZXJtaW5lQ2xhc3MoaSxqKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnN0YXJ0Lng9PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PT1pKVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuc3RhcnQ7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmVuZC54PT09aiYmdGhpcy5zdGF0ZS5lbmQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5lbmQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuYm94OyAgXHJcbiAgICB9XHJcbiAgICBjaGVja1NFKGksail7XHJcbiAgICAgICAgcmV0dXJuIChpPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmo9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChpPT10aGlzLnN0YXRlLmVuZC55JiZqPT10aGlzLnN0YXRlLmVuZC54KTtcclxuICAgIH1cclxuICAgIG1vdXNlRG93bj0oaSxqKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubm9kZSYmdGhpcy5zdGF0ZS52aXNpdGVkKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFydC54PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PWkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlmdHN0YXJ0PXRydWU7ICAgXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uaW5uZXJIVE1MPVwiPGRpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuYm94KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWZ0ZW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmVuZCk7XHJcbiAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uaW5uZXJIVE1MPVwiPGRpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuYm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZG93bj10cnVlO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbaV1bal0pe1xyXG4gICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT10cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VMZWF2ZT0oaSxqKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuZG93bj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bj1mYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnNoaWZ0c3RhcnQ9PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0c3RhcnQ9ZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zaGlmdGVuZD09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZnRlbmQ9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBsZWF2aW5nIG5vdyFcIilcclxuICAgIH1cclxuICAgIG1vdXNlRW50ZXI9KGksaik9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBpZih0aGlzLnNoaWZ0c3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OntcclxuICAgICAgICAgICAgICAgICAgICB4OmosXHJcbiAgICAgICAgICAgICAgICAgICAgeTppLFxyXG4gICAgICAgICAgICAgICAgICAgIHA6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnN0YXJ0KTtcclxuICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5pbm5lckhUTUw9XCI8ZGl2PlM8L2Rpdj5cIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNoaWZ0ZW5kKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbmQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHg6aixcclxuICAgICAgICAgICAgICAgICAgICB5OmlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5lbmQpO1xyXG4gICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmlubmVySFRNTD1cIjxkaXY+RTwvZGl2PlwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZG93bil7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duKGksailcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZGV0ZXJtaW5lVGV4dChpLGope1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhcnQueD09PWomJnRoaXMuc3RhdGUuc3RhcnQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+UzwvZGl2PjtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuZW5kLng9PT1qJiZ0aGlzLnN0YXRlLmVuZC55PT09aSlcclxuICAgICAgICByZXR1cm4gPGRpdj5FPC9kaXY+O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcbiAgICBzbGVlcD0obXMpPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgICAgfVxyXG4gICAgYmZzPWFzeW5jKCk9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcclxuICAgICAgICBsZXQgcSA9W107XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaSxqO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkOyAgICBcclxuICAgICAgICBjb25zdCByaSA9IFstMSwxLDAsMF07XHJcbiAgICAgICAgY29uc3QgY2kgPSBbMCwwLC0xLDFdO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdKXtcclxuICAgICAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMud2FsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcS5wdXNoKHRoaXMuc3RhdGUuc3RhcnQpO1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMuc3RhdGUuZW5kLng7XHJcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5zdGF0ZS5lbmQueTtcclxuICAgICAgICBsZXQgZWxlPXt9LHgseSxyLGM7XHJcbiAgICAgICAgICAgIHdoaWxlKCFxLmxlbmd0aD09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlID0gcVswXTtcclxuICAgICAgICAgICAgICAgIHggPSBlbGUueDtcclxuICAgICAgICAgICAgICAgIHkgPSBlbGUueTtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRbeV1beF09dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKCEoKHk9PXRoaXMuc3RhdGUuc3RhcnQueSYmeD09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHk9PXRoaXMuc3RhdGUuZW5kLnkmJng9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyp5K3hdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHEuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgICAgICBpZihkeD09PXgmJmR5PT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoZWxlIT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGUhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKihlbGUueSkrZWxlLnhdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGU9ZWxlLnA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IoaT0wO2k8NDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHI9cmlbaV0reTtcclxuICAgICAgICAgICAgICAgICAgICBjPWNpW2ldK3g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VudDpcIitjb3VudCsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHI+PTAmJnI8dGhpcy5zdGF0ZS5SJiZjPj0wJiZjPHRoaXMuc3RhdGUuQyYmIXZpc2l0ZWRbcl1bY10pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxLnB1c2goe3g6Yyx5OnIscDplbGV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtyXVtjXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighKChyPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmM9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQypyK2NdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgZGZzPWFzeW5jKCk9PntcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XHJcbiAgICAgICAgbGV0IHEgPVtdO1xyXG4gICAgICAgIGxldCBjb3VudD0wLGksajtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDsgICAgXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBpZih2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XSl7XHJcbiAgICAgICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLndhbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHEucHVzaCh0aGlzLnN0YXRlLnN0YXJ0KTtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnN0YXRlLmVuZC54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMuc3RhdGUuZW5kLnk7XHJcbiAgICAgICAgbGV0IGVsZT17fSx4LHkscixjO1xyXG4gICAgICAgICAgICB3aGlsZSghcS5sZW5ndGg9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZSA9ICBxLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgeCA9IGVsZS54O1xyXG4gICAgICAgICAgICAgICAgeSA9IGVsZS55O1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFt5XVt4XT10cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYoISgoeT09dGhpcy5zdGF0ZS5zdGFydC55JiZ4PT10aGlzLnN0YXRlLnN0YXJ0LngpfHwoeT09dGhpcy5zdGF0ZS5lbmQueSYmeD09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnkreF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZHg9PT14JiZkeT09PXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKGVsZSE9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW5zaWRlIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyooZWxlLnkpK2VsZS54XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlPWVsZS5wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDUwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICByPXJpW2ldK3k7XHJcbiAgICAgICAgICAgICAgICAgICAgYz1jaVtpXSt4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bnQ6XCIrY291bnQrKylcclxuICAgICAgICAgICAgICAgICAgICBpZihyPj0wJiZyPHRoaXMuc3RhdGUuUiYmYz49MCYmYzx0aGlzLnN0YXRlLkMmJiF2aXNpdGVkW3JdW2NdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcS5wdXNoKHt4OmMseTpyLHA6ZWxlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbcl1bY109dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISgocj09dGhpcy5zdGF0ZS5zdGFydC55JiZjPT10aGlzLnN0YXRlLnN0YXJ0LngpfHwocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqcitjXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGRpamtzdHJhPWFzeW5jKCk9PntcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgbmRpajp0cnVlXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICBsZXQgbm9kZT0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2aXNpdGVkPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7XHJcbiAgICAgICAgaWYodmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF0pe1xyXG4gICAgICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIW5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy53YWxsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XT10cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICB9KSAgXHJcbiAgICAgICAgbGV0IGksajtcclxuICAgICAgICBsZXQgd2VpZ2h0PVtdO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIHdlaWdodC5wdXNoKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICBpZighdmlzaXRlZFtpXVtqXSYmIXRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRbaSp0aGlzLnN0YXRlLkMral0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjArMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtpKnRoaXMuc3RhdGUuQytqXS5pbm5lckhUTUw9YDxkaXY+JHt3ZWlnaHRbaSp0aGlzLnN0YXRlLkMral19PC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb3VudD0wLGlpLGpqLGlkLG51bSxrO1xyXG4gICAgICAgIGxldCBtYXJrID1bXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBtYXJrLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZCA9IFtdO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIGQucHVzaCgxMGU1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IFtdO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIHBhcmVudC5wdXNoKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkW3RoaXMuc3RhdGUuc3RhcnQueSp0aGlzLnN0YXRlLkMrdGhpcy5zdGF0ZS5zdGFydC54XT0wO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGV5LCBsaXN0ZW5cIix0aGlzLnN0YXRlLnN0YXJ0LnkqdGhpcy5zdGF0ZS5DK3RoaXMuc3RhdGUuc3RhcnQueClcclxuICAgICAgICBjb25zdCByaSA9IFstMSwxLDAsMF07XHJcbiAgICAgICAgY29uc3QgY2kgPSBbMCwwLC0xLDFdO1xyXG4gICAgICAgIGxldCBDID0gdGhpcy5zdGF0ZS5DLFIgPSB0aGlzLnN0YXRlLlI7XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgaj0tMTsgbnVtPTEwZTU7XHJcbiAgICAgICAgICAgIGZvcihpZD0wO2lkPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aWQrKyl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gZFwiLGRbaWRdKVxyXG4gICAgICAgICAgICAgICAgaWYoIW1hcmtbaWRdJiZkW2lkXTxudW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGo9aWQ7IG51bSA9IGRbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcmtbal09dHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHIgPSBNYXRoLmZsb29yKGovQyk7XHJcbiAgICAgICAgICAgIGxldCBjID0gai1yKkM7XHJcbiAgICAgICAgICAgIGlmKHI9PXRoaXMuc3RhdGUuZW5kLnkmJmM9PXRoaXMuc3RhdGUuZW5kLngpe1xyXG4gICAgICAgICAgICAgICAgd2hpbGUocGFyZW50W2pdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGo9IHBhcmVudFtqXTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGVbal0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIEpcIixqKTtcclxuICAgICAgICAgICAgaWYoaiE9LTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGVkKTtcclxuICAgICAgICAgICAgZm9yKGs9MDtrPDQ7aysrKXtcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5mbG9vcihqL0MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBqLXIqQztcclxuICAgICAgICAgICAgICAgIHIgPXIrIHJpW2tdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIGluc2lkZVwiKVxyXG4gICAgICAgICAgICAgICAgYyA9YysgY2lba107XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByKkMrYztcclxuICAgICAgICAgICAgICAgIGlmKHI+PTAmJnI8UiYmYz49MCYmYzxDJiYhdmlzaXRlZFtyXVtjXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFcgPSB3ZWlnaHRbcipDK2NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIixpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZFtqXStXPGRbaW5kZXhdKXtcclxuICAgICAgICAgICAgICAgICAgICBkW2luZGV4XT1kW2pdK1c7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtpbmRleF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFtpbmRleF09IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgyMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuICAgIGNsZWFyKCl7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrU0UoTWF0aC5mbG9vcihpL3RoaXMuc3RhdGUuQyksaS10aGlzLnN0YXRlLkMqTWF0aC5mbG9vcihpL3RoaXMuc3RhdGUuQykpKXtcclxuICAgICAgICAgICAgICAgIG5vZGVbaV0uaW5uZXJIVE1MPWA8ZGl2PjwvZGl2PmBcclxuICAgICAgICAgICAgfWVsc2UgaWYoTWF0aC5mbG9vcihpL3RoaXMuc3RhdGUuQyk9PXRoaXMuc3RhdGUuc3RhcnQueSYmaS10aGlzLnN0YXRlLkMqTWF0aC5mbG9vcihpL3RoaXMuc3RhdGUuQyk9PXRoaXMuc3RhdGUuc3RhcnQueCl7XHJcbiAgICAgICAgICAgICAgICBub2RlW2ldLmlubmVySFRNTD1gPGRpdj5TPC9kaXY+YFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG5vZGVbaV0uaW5uZXJIVE1MPWA8ZGl2PkU8L2Rpdj5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVdhbGxzPSgpPT57XHJcbiAgICAgICAgbGV0IHY9W107XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zdGF0ZS5SOyBpKyspIHtcclxuICAgICAgICAgICAgdi5wdXNoKG5ldyBBcnJheSh0aGlzLnN0YXRlLkMpLmZpbGwoZmFsc2UpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGk9MDtpPCB0aGlzLnN0YXRlLlI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqPCB0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxyXG4gICAgICAgICAgICAgICAgaWYocmFuZD09PTEmJiF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdltpXVtqXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xlYXJCb2FyZD0oKT0+e1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBsZXQge1IsQ309IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnN0YXRlLlI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPCB0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGxpc3Q9W107XHJcbiAgICAgICAgbGV0IGJveD1bXTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICBsaXN0PVtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2hcclxuICAgICAgICAgICAgICAgICAgICAoPGRpdiBrZXk9e2p9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYm94fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5kZXRlcm1pbmVDbGFzcyhpLGopfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKT0+dGhpcy5tb3VzZURvd24oaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpPT50aGlzLm1vdXNlTGVhdmUoaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT50aGlzLm1vdXNlRW50ZXIoaSxqKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+e3RoaXMuZGV0ZXJtaW5lVGV4dChpLGopfTwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib3gucHVzaChsaXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkUH0+XHJcbiAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5hbGdvcml0aG19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5BbGdvcml0aG1zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmJmc30gPlJ1biBCcmVhZHRoIEZpcnN0IFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5kZnN9ID5SdW4gRGVwdGggRmlyc3QgU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmRmc30gPlJ1biBBKiBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZGlqa3N0cmF9ID5SdW4gZGlqa3N0cmEgU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk9wdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZ2VuZXJhdGVXYWxsc30gPkdlbmVyYXRlICBSYW5kb20gV2FsbHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJCb2FyZH1vbk1vdXNlRG93bj17dGhpcy5jbGVhckJvYXJkfSA+Q2xlYXIgQm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgICAge2JveH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9