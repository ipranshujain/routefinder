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
      var visited, node, i, j, weight, count, ii, jj, id, num, k, mark, d, parent, ri, ci, C, R, r, c, _r, _c, index, W;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // this.setState({
              //     ndij:true
              // })
              visited = _this.state.visited;
              visited[_this.state.start.y][_this.state.start.x] = true;

              _this.setState({
                visited: visited
              });

              node = _this.state.node;
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

            case 20:
              if (!(i < _this.state.R * _this.state.C)) {
                _context3.next = 60;
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
                _context3.next = 37;
                break;
              }

            case 28:
              if (!(parent[j] != null)) {
                _context3.next = 35;
                break;
              }

              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              j = parent[j];
              _context3.next = 33;
              return _this.sleep(50);

            case 33:
              _context3.next = 28;
              break;

            case 35:
              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.path);
              return _context3.abrupt("return");

            case 37:
              // console.log("I am J",j);
              if (j != -1) {
                node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
              }

              k = 0;

            case 39:
              if (!(k < 4)) {
                _context3.next = 57;
                break;
              }

              _r = Math.floor(j / C);
              _c = j - _r * C;
              _r = _r + ri[k]; // console.log("I am inside")

              _c = _c + ci[k];
              index = _r * C + _c;

              if (!(_r >= 0 && _r < R && _c >= 0 && _c < C)) {
                _context3.next = 54;
                break;
              }

              W = weight[_r * C + _c];
              console.log("index", index);

              if (!(d[j] + W < d[index])) {
                _context3.next = 54;
                break;
              }

              d[index] = d[j] + W;
              node[index].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
              parent[index] = j;
              _context3.next = 54;
              return _this.sleep(20);

            case 54:
              k++;
              _context3.next = 39;
              break;

            case 57:
              i++;
              _context3.next = 20;
              break;

            case 60:
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
        lineNumber: 115,
        columnNumber: 16
      }, this);else if (this.state.end.x === j && this.state.end.y === i) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 16
      }, this);else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
            lineNumber: 381,
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
            lineNumber: 396,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.bfs,
            children: "Run Breadth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run Depth First Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dfs,
            children: "Run A* Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.dijkstra,
            children: "Run dijkstra Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Options"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.generateWalls,
            children: "Generate  Random Walls"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onMouseDown: this.clearBoard,
            children: "Clear Board"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.grid,
          children: box
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 394,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJDIiwiUiIsInN0YXJ0IiwieCIsInkiLCJwIiwiZW5kIiwidmlzaXRlZCIsIm5vZGUiLCJuZGlqIiwiaSIsImoiLCJzdGF0ZSIsImNoZWNrU0UiLCJzaGlmdHN0YXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGVzIiwic2hpZnRlbmQiLCJkb3duIiwid2FsbCIsImFkZCIsInNldFN0YXRlIiwibW91c2VEb3duIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicSIsImNvdW50IiwicmkiLCJjaSIsImNvbnRhaW5zIiwidmlzaXRpbmciLCJwYXRoIiwicHVzaCIsImR4IiwiZHkiLCJlbGUiLCJsZW5ndGgiLCJzcGxpY2UiLCJzbGVlcCIsInIiLCJjIiwiY2xlYXIiLCJwb3AiLCJ3ZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbm5lckhUTUwiLCJtYXJrIiwiZCIsInBhcmVudCIsIm51bSIsImlkIiwiayIsImluZGV4IiwiVyIsInYiLCJBcnJheSIsImZpbGwiLCJyYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZCIsImJveCIsImxpc3QiLCJkZXRlcm1pbmVDbGFzcyIsIm1vdXNlTGVhdmUiLCJtb3VzZUVudGVyIiwiZGV0ZXJtaW5lVGV4dCIsImdyaWRQIiwiYWxnb3JpdGhtIiwiYmZzIiwiZGZzIiwiZGlqa3N0cmEiLCJnZW5lcmF0ZVdhbGxzIiwiY2xlYXJCb2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ0ZDLE9BQUMsRUFBQyxFQURBO0FBRUZDLE9BQUMsRUFBQyxFQUZBO0FBR0ZD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QUZILGVBR0c7QUFBUSx1QkFBVyxFQUFFLEtBQUtDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhILGVBSUc7QUFBUSx1QkFBVyxFQUFFLEtBQUtBLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpILGVBS0c7QUFBUSx1QkFBVyxFQUFFLEtBQUtDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxILGVBTUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkgsZUFPRztBQUFRLHVCQUFXLEVBQUUsS0FBS0MsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEgsZUFRRztBQUFRLHVCQUFXLEVBQUUsS0FBS0MsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBV0E7QUFBSyxtQkFBUyxFQUFFL0QsZ0VBQU0sQ0FBQ2tELElBQXZCO0FBQUEsb0JBQ0tDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWlCSDs7OztFQXZaNkJhLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS4zNmFjYmYzZDdjOGQxOGEzNjVkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIEM6MTAsXHJcbiAgICAgICAgUjoxMCxcclxuICAgICAgICBzdGFydDp7eDoxLHk6NCwgcDogbnVsbH0sXHJcbiAgICAgICAgZW5kOnt4OjkseTo5LCBwOiBudWxsfSxcclxuICAgICAgICB2aXNpdGVkOltdLFxyXG4gICAgICAgIG5vZGU6W10sXHJcbiAgICAgICAgbmRpajpmYWxzZVxyXG4gICAgfVxyXG4gICAgZG93bj1mYWxzZTtcclxuICAgIHNoaWZ0c3RhcnQ9ZmFsc2U7XHJcbiAgICBzaGlmdGVuZD1mYWxzZTtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWQ9W11cclxuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnN0YXRlLlI7IGkrKykge1xyXG4gICAgICAgICAgICB2aXNpdGVkLnB1c2gobmV3IEFycmF5KHRoaXMuc3RhdGUuQykuZmlsbChmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbm9kZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitzdHlsZXMuZ3JpZCtcIiA+IGRpdlwiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2aXNpdGVkLFxyXG4gICAgICAgICAgICBub2RlOm5vZGVcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGRldGVybWluZUNsYXNzKGksail7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFydC54PT09aiYmdGhpcy5zdGF0ZS5zdGFydC55PT09aSlcclxuICAgICAgICByZXR1cm4gc3R5bGVzLnN0YXJ0O1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5lbmQueD09PWomJnRoaXMuc3RhdGUuZW5kLnk9PT1pKVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuZW5kO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc3R5bGVzLmJveDsgIFxyXG4gICAgfVxyXG4gICAgY2hlY2tTRShpLGope1xyXG4gICAgICAgIHJldHVybiAoaT09dGhpcy5zdGF0ZS5zdGFydC55JiZqPT10aGlzLnN0YXRlLnN0YXJ0LngpfHwoaT09dGhpcy5zdGF0ZS5lbmQueSYmaj09dGhpcy5zdGF0ZS5lbmQueCk7XHJcbiAgICB9XHJcbiAgICBtb3VzZURvd249KGksaik9PntcclxuICAgICAgICBpZih0aGlzLnN0YXRlLm5vZGUmJnRoaXMuc3RhdGUudmlzaXRlZCl7XHJcbiAgICBcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBpZih0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhcnQueD09aiYmdGhpcy5zdGF0ZS5zdGFydC55PT1pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZnRzdGFydD10cnVlOyAgIFxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmJveCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlmdGVuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5lbmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kb3duPXRydWU7XHJcbiAgICAgICAgaWYodmlzaXRlZFtpXVtqXSl7XHJcbiAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICB2aXNpdGVkW2ldW2pdPXRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZUxlYXZlPShpLGopPT57XHJcbiAgICAgICAgaWYodGhpcy5kb3duPT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5kb3duPWZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2hpZnRzdGFydD09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZnRzdGFydD1mYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnNoaWZ0ZW5kPT10cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5zaGlmdGVuZD1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIGxlYXZpbmcgbm93IVwiKVxyXG4gICAgfVxyXG4gICAgbW91c2VFbnRlcj0oaSxqKT0+e1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGlmKHRoaXMuc2hpZnRzdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHg6aixcclxuICAgICAgICAgICAgICAgICAgICB5OmksXHJcbiAgICAgICAgICAgICAgICAgICAgcDpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuc3RhcnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc2hpZnRlbmQpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVuZDp7XHJcbiAgICAgICAgICAgICAgICAgICAgeDpqLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6aVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmVuZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZG93bil7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duKGksailcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZGV0ZXJtaW5lVGV4dChpLGope1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhcnQueD09PWomJnRoaXMuc3RhdGUuc3RhcnQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+UzwvZGl2PjtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuZW5kLng9PT1qJiZ0aGlzLnN0YXRlLmVuZC55PT09aSlcclxuICAgICAgICByZXR1cm4gPGRpdj5FPC9kaXY+O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcbiAgICBzbGVlcD0obXMpPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgICAgfVxyXG4gICAgYmZzPWFzeW5jKCk9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcclxuICAgICAgICBsZXQgcSA9W107XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaSxqO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkOyAgICBcclxuICAgICAgICBjb25zdCByaSA9IFstMSwxLDAsMF07XHJcbiAgICAgICAgY29uc3QgY2kgPSBbMCwwLC0xLDFdO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdKXtcclxuICAgICAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMud2FsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcS5wdXNoKHRoaXMuc3RhdGUuc3RhcnQpO1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMuc3RhdGUuZW5kLng7XHJcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5zdGF0ZS5lbmQueTtcclxuICAgICAgICBsZXQgZWxlPXt9LHgseSxyLGM7XHJcbiAgICAgICAgICAgIHdoaWxlKCFxLmxlbmd0aD09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlID0gcVswXTtcclxuICAgICAgICAgICAgICAgIHggPSBlbGUueDtcclxuICAgICAgICAgICAgICAgIHkgPSBlbGUueTtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRbeV1beF09dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKCEoKHk9PXRoaXMuc3RhdGUuc3RhcnQueSYmeD09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHk9PXRoaXMuc3RhdGUuZW5kLnkmJng9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyp5K3hdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHEuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgICAgICBpZihkeD09PXgmJmR5PT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoZWxlIT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGUhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKihlbGUueSkrZWxlLnhdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGU9ZWxlLnA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IoaT0wO2k8NDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHI9cmlbaV0reTtcclxuICAgICAgICAgICAgICAgICAgICBjPWNpW2ldK3g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VudDpcIitjb3VudCsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHI+PTAmJnI8dGhpcy5zdGF0ZS5SJiZjPj0wJiZjPHRoaXMuc3RhdGUuQyYmIXZpc2l0ZWRbcl1bY10pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxLnB1c2goe3g6Yyx5OnIscDplbGV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtyXVtjXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighKChyPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmM9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQypyK2NdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgZGZzPWFzeW5jKCk9PntcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XHJcbiAgICAgICAgbGV0IHEgPVtdO1xyXG4gICAgICAgIGxldCBjb3VudD0wLGksajtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDsgICAgXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBpZih2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XSl7XHJcbiAgICAgICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLndhbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHEucHVzaCh0aGlzLnN0YXRlLnN0YXJ0KTtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnN0YXRlLmVuZC54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMuc3RhdGUuZW5kLnk7XHJcbiAgICAgICAgbGV0IGVsZT17fSx4LHkscixjO1xyXG4gICAgICAgICAgICB3aGlsZSghcS5sZW5ndGg9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZSA9ICBxLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgeCA9IGVsZS54O1xyXG4gICAgICAgICAgICAgICAgeSA9IGVsZS55O1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFt5XVt4XT10cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYoISgoeT09dGhpcy5zdGF0ZS5zdGFydC55JiZ4PT10aGlzLnN0YXRlLnN0YXJ0LngpfHwoeT09dGhpcy5zdGF0ZS5lbmQueSYmeD09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnkreF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZHg9PT14JiZkeT09PXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKGVsZSE9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW5zaWRlIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyooZWxlLnkpK2VsZS54XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlPWVsZS5wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDUwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICByPXJpW2ldK3k7XHJcbiAgICAgICAgICAgICAgICAgICAgYz1jaVtpXSt4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bnQ6XCIrY291bnQrKylcclxuICAgICAgICAgICAgICAgICAgICBpZihyPj0wJiZyPHRoaXMuc3RhdGUuUiYmYz49MCYmYzx0aGlzLnN0YXRlLkMmJiF2aXNpdGVkW3JdW2NdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcS5wdXNoKHt4OmMseTpyLHA6ZWxlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbcl1bY109dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISgocj09dGhpcy5zdGF0ZS5zdGFydC55JiZjPT10aGlzLnN0YXRlLnN0YXJ0LngpfHwocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqcitjXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGRpamtzdHJhPWFzeW5jKCk9PntcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgbmRpajp0cnVlXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdmlzaXRlZD0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdPXRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZFxyXG4gICAgICAgIH0pICBcclxuICAgICAgICBsZXQgbm9kZT0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGxldCBpLGo7XHJcbiAgICAgICAgbGV0IHdlaWdodD1bXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICB3ZWlnaHQucHVzaCgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoIXZpc2l0ZWRbaV1bal0mJiF0aGlzLmNoZWNrU0UoaSxqKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0W2kqdGhpcy5zdGF0ZS5DK2pdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbaSp0aGlzLnN0YXRlLkMral0uaW5uZXJIVE1MPWA8ZGl2PiR7d2VpZ2h0W2kqdGhpcy5zdGF0ZS5DK2pdfTwvZGl2PmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnQ9MCxpaSxqaixpZCxudW0saztcclxuICAgICAgICBsZXQgbWFyayA9W107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgbWFyay5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGQgPSBbXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBkLnB1c2goMTBlNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBbXTtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBwYXJlbnQucHVzaChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZFt0aGlzLnN0YXRlLnN0YXJ0LnkqdGhpcy5zdGF0ZS5DK3RoaXMuc3RhdGUuc3RhcnQueF09MDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhleSwgbGlzdGVuXCIsdGhpcy5zdGF0ZS5zdGFydC55KnRoaXMuc3RhdGUuQyt0aGlzLnN0YXRlLnN0YXJ0LngpXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBsZXQgQyA9IHRoaXMuc3RhdGUuQyxSID0gdGhpcy5zdGF0ZS5SO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIGo9LTE7IG51bT0xMGU1O1xyXG4gICAgICAgICAgICBmb3IoaWQ9MDtpZDx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2lkKyspe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIGRcIixkW2lkXSlcclxuICAgICAgICAgICAgICAgIGlmKCFtYXJrW2lkXSYmZFtpZF08bnVtKXtcclxuICAgICAgICAgICAgICAgICAgICBqPWlkOyBudW0gPSBkW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJrW2pdPXRydWU7XHJcbiAgICAgICAgICAgIGxldCByID0gTWF0aC5mbG9vcihqL0MpO1xyXG4gICAgICAgICAgICBsZXQgYyA9IGotcipDO1xyXG4gICAgICAgICAgICBpZihyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KXtcclxuICAgICAgICAgICAgICAgIHdoaWxlKHBhcmVudFtqXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBqPSBwYXJlbnRbal07XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlW2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gSlwiLGopO1xyXG4gICAgICAgICAgICBpZihqIT0tMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBub2RlW2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihrPTA7azw0O2srKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IE1hdGguZmxvb3Ioai9DKTtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gai1yKkM7XHJcbiAgICAgICAgICAgICAgICByID1yKyByaVtrXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGVcIilcclxuICAgICAgICAgICAgICAgIGMgPWMrIGNpW2tdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcipDK2M7XHJcbiAgICAgICAgICAgICAgICBpZihyPj0wJiZyPFImJmM+PTAmJmM8Qyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFcgPSB3ZWlnaHRbcipDK2NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIixpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZFtqXStXPGRbaW5kZXhdKXtcclxuICAgICAgICAgICAgICAgICAgICBkW2luZGV4XT1kW2pdK1c7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtpbmRleF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFtpbmRleF09IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgyMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgY2xlYXIoKXtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tTRShNYXRoLmZsb29yKGkvdGhpcy5zdGF0ZS5DKSxpLXRoaXMuc3RhdGUuQypNYXRoLmZsb29yKGkvdGhpcy5zdGF0ZS5DKSkpe1xyXG4gICAgICAgICAgICAgICAgbm9kZVtpXS5pbm5lckhUTUw9YDxkaXY+PC9kaXY+YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVXYWxscz0oKT0+e1xyXG4gICAgICAgIGxldCB2PVtdO1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3RhdGUuUjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHYucHVzaChuZXcgQXJyYXkodGhpcy5zdGF0ZS5DKS5maWxsKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTwgdGhpcy5zdGF0ZS5SOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGo9MDsgajwgdGhpcy5zdGF0ZS5DOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcclxuICAgICAgICAgICAgICAgIGlmKHJhbmQ9PT0xJiYhdGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZbaV1bal09dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaXRlZDp2XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNsZWFyQm9hcmQ9KCk9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDtcclxuICAgICAgICBsZXQge1IsQ309IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnN0YXRlLlI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPCB0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dmlzaXRlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgbGlzdD1bXTtcclxuICAgICAgICBsZXQgYm94PVtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgIGxpc3Q9W107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRoaXMuc3RhdGUuQzsgaisrKXtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaFxyXG4gICAgICAgICAgICAgICAgICAgICg8ZGl2IGtleT17an1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ib3h9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmRldGVybWluZUNsYXNzKGksail9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpPT50aGlzLm1vdXNlRG93bihpLGopfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCk9PnRoaXMubW91c2VMZWF2ZShpLGopfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCk9PnRoaXMubW91c2VFbnRlcihpLGopXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID57dGhpcy5kZXRlcm1pbmVUZXh0KGksail9PC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJveC5wdXNoKGxpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRQfT5cclxuICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmFsZ29yaXRobX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkFsZ29yaXRobXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuYmZzfSA+UnVuIEJyZWFkdGggRmlyc3QgU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmRmc30gPlJ1biBEZXB0aCBGaXJzdCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZGZzfSA+UnVuIEEqIFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5kaWprc3RyYX0gPlJ1biBkaWprc3RyYSBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+T3B0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5nZW5lcmF0ZVdhbGxzfSA+R2VuZXJhdGUgIFJhbmRvbSBXYWxsczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5jbGVhckJvYXJkfSA+Q2xlYXIgQm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgICAge2JveH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9