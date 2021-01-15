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
      var node, visited, i, j, weight, child, count, ii, jj, id, num, k, mark, d, parent, ri, ci, C, R, r, c, _r, _c, index, W;

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
                    child = node[i * _this.state.C + j].childNodes;
                    child[0].appendChild(document.createTextNode("".concat(weight[i * _this.state.C + j])));
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
                _context3.next = 64;
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
                _context3.next = 40;
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

              _this.setState({
                ndij: false
              });

              return _context3.abrupt("return");

            case 40:
              if (!(j != -1)) {
                _context3.next = 61;
                break;
              }

              node[j].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visited);
              k = 0;

            case 43:
              if (!(k < 4)) {
                _context3.next = 61;
                break;
              }

              _r = Math.floor(j / C);
              _c = j - _r * C;
              _r = _r + ri[k]; // console.log("I am inside")

              _c = _c + ci[k];
              index = _r * C + _c;

              if (!(_r >= 0 && _r < R && _c >= 0 && _c < C && !visited[_r][_c])) {
                _context3.next = 58;
                break;
              }

              W = weight[_r * C + _c];
              console.log("index", index);

              if (!(d[j] + W < d[index])) {
                _context3.next = 58;
                break;
              }

              d[index] = d[j] + W;
              node[index].classList.add(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.visiting);
              parent[index] = j;
              _context3.next = 58;
              return _this.sleep(20);

            case 58:
              k++;
              _context3.next = 43;
              break;

            case 61:
              i++;
              _context3.next = 22;
              break;

            case 64:
              _this.setState({
                ndij: false
              });

            case 65:
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
          var child = node[i * _this.state.C + j].childNodes;

          if (_this.checkSE(i, j)) {
            child[0].innerHTML = "";
          }

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
        if (!this.checkSE(Math.floor(i / this.state.C), i - this.state.C * Math.floor(i / this.state.C))) {// node[i].innerHTML=`<div></div>`
        } else if (Math.floor(i / this.state.C) == this.state.start.y && i - this.state.C * Math.floor(i / this.state.C) == this.state.start.x) {// node[i].innerHTML=`<div>S</div>`
        } else {// node[i].innerHTML=`<div>E</div>` 
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
            lineNumber: 411,
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.gridP,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.grid,
            children: box
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 13
          }, this), this.state.ndij && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.notice,
            children: "To keep things simple weights are randomly assigned to each cell and then according to assigned weight the algorithm will find the shortest path."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 31
          }, this) || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.algorithm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Algorithms"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 432,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.bfs,
              children: "Run Breadth First Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.dfs,
              children: "Run Depth First Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.dfs,
              children: "Run A* Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.dijkstra,
              children: "Run dijkstra Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 437,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onMouseDown: this.generateWalls,
              children: "Generate  Random Walls"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.clearBoard,
              onMouseDown: this.clearBoard,
              children: "Clear Board"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 424,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJDIiwiUiIsInN0YXJ0IiwieCIsInkiLCJwIiwiZW5kIiwidmlzaXRlZCIsIm5vZGUiLCJuZGlqIiwiaSIsImoiLCJzdGF0ZSIsImNoZWNrU0UiLCJzaGlmdHN0YXJ0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGVzIiwic2hpZnRlbmQiLCJkb3duIiwid2FsbCIsImFkZCIsInNldFN0YXRlIiwibW91c2VEb3duIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicSIsImNvdW50IiwicmkiLCJjaSIsImNvbnRhaW5zIiwidmlzaXRpbmciLCJwYXRoIiwicHVzaCIsImR4IiwiZHkiLCJlbGUiLCJsZW5ndGgiLCJzcGxpY2UiLCJzbGVlcCIsInIiLCJjIiwiY2xlYXIiLCJwb3AiLCJ3ZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGlsZCIsImNoaWxkTm9kZXMiLCJhcHBlbmRDaGlsZCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJtYXJrIiwiZCIsInBhcmVudCIsIm51bSIsImlkIiwiayIsImluZGV4IiwiVyIsInYiLCJBcnJheSIsImZpbGwiLCJyYW5kIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvckFsbCIsImdyaWQiLCJib3giLCJsaXN0IiwiZGV0ZXJtaW5lQ2xhc3MiLCJtb3VzZUxlYXZlIiwibW91c2VFbnRlciIsImRldGVybWluZVRleHQiLCJncmlkUCIsIm5vdGljZSIsImFsZ29yaXRobSIsImJmcyIsImRmcyIsImRpamtzdHJhIiwiZ2VuZXJhdGVXYWxscyIsImNsZWFyQm9hcmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUNxQkEsSTs7Ozs7Ozs7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QUF4QjtBQUFBLG9DQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURHLGVBRUg7QUFBUSx5QkFBVyxFQUFFLEtBQUtDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZHLGVBR0g7QUFBUSx5QkFBVyxFQUFFLEtBQUtDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhHLGVBSUg7QUFBUSx5QkFBVyxFQUFFLEtBQUtBLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpHLGVBS0g7QUFBUSx5QkFBVyxFQUFFLEtBQUtDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxHLGVBTUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkcsZUFPSDtBQUFRLHlCQUFXLEVBQUUsS0FBS0MsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEcsZUFRSDtBQUFRLHVCQUFTLEVBQUVuRSxnRUFBTSxDQUFDb0UsVUFBMUI7QUFBc0MseUJBQVcsRUFBRSxLQUFLQSxVQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBd0JIOzs7O0VBNWI2QkMsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjc3NGEzODgxODBlYmIyMzUxODFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgQzoxMCxcclxuICAgICAgICBSOjEwLFxyXG4gICAgICAgIHN0YXJ0Ont4OjEseTo0LCBwOiBudWxsfSxcclxuICAgICAgICBlbmQ6e3g6OSx5OjksIHA6IG51bGx9LFxyXG4gICAgICAgIHZpc2l0ZWQ6W10sXHJcbiAgICAgICAgbm9kZTpbXSxcclxuICAgICAgICBuZGlqOmZhbHNlXHJcbiAgICB9XHJcbiAgICBkb3duPWZhbHNlO1xyXG4gICAgc2hpZnRzdGFydD1mYWxzZTtcclxuICAgIHNoaWZ0ZW5kPWZhbHNlO1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBsZXQgdmlzaXRlZD1bXVxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3RhdGUuUjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQucHVzaChuZXcgQXJyYXkodGhpcy5zdGF0ZS5DKS5maWxsKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBub2RlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3N0eWxlcy5ncmlkK1wiID4gZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWQsXHJcbiAgICAgICAgICAgIG5vZGU6bm9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZGV0ZXJtaW5lQ2xhc3MoaSxqKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnN0YXJ0Lng9PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PT1pKVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuc3RhcnQ7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmVuZC54PT09aiYmdGhpcy5zdGF0ZS5lbmQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5lbmQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuYm94OyAgXHJcbiAgICB9XHJcbiAgICBjaGVja1NFKGksail7XHJcbiAgICAgICAgcmV0dXJuIChpPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmo9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChpPT10aGlzLnN0YXRlLmVuZC55JiZqPT10aGlzLnN0YXRlLmVuZC54KTtcclxuICAgIH1cclxuICAgIG1vdXNlRG93bj0oaSxqKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubm9kZSYmdGhpcy5zdGF0ZS52aXNpdGVkKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFydC54PT1qJiZ0aGlzLnN0YXRlLnN0YXJ0Lnk9PWkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlmdHN0YXJ0PXRydWU7ICAgXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uaW5uZXJIVE1MPVwiPGRpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuYm94KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWZ0ZW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmVuZCk7XHJcbiAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uaW5uZXJIVE1MPVwiPGRpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgIC8vIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmFkZChzdHlsZXMuYm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZG93bj10cnVlO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbaV1bal0pe1xyXG4gICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLndhbGwpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT10cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW91c2VMZWF2ZT0oaSxqKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuZG93bj09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bj1mYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnNoaWZ0c3RhcnQ9PXRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0c3RhcnQ9ZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zaGlmdGVuZD09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZnRlbmQ9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBsZWF2aW5nIG5vdyFcIilcclxuICAgIH1cclxuICAgIG1vdXNlRW50ZXI9KGksaik9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBpZih0aGlzLnNoaWZ0c3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OntcclxuICAgICAgICAgICAgICAgICAgICB4OmosXHJcbiAgICAgICAgICAgICAgICAgICAgeTppLFxyXG4gICAgICAgICAgICAgICAgICAgIHA6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnN0YXJ0KTtcclxuICAgICAgICAgICAgLy8gbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5pbm5lckhUTUw9XCI8ZGl2PlM8L2Rpdj5cIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNoaWZ0ZW5kKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbmQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHg6aixcclxuICAgICAgICAgICAgICAgICAgICB5OmlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5lbmQpO1xyXG4gICAgICAgICAgICAvLyBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmlubmVySFRNTD1cIjxkaXY+RTwvZGl2PlwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZG93bil7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duKGksailcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZGV0ZXJtaW5lVGV4dChpLGope1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhcnQueD09PWomJnRoaXMuc3RhdGUuc3RhcnQueT09PWkpXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+UzwvZGl2PjtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuZW5kLng9PT1qJiZ0aGlzLnN0YXRlLmVuZC55PT09aSlcclxuICAgICAgICByZXR1cm4gPGRpdj5FPC9kaXY+O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcbiAgICBzbGVlcD0obXMpPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgICAgfVxyXG4gICAgYmZzPWFzeW5jKCk9PntcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcclxuICAgICAgICBsZXQgcSA9W107XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaSxqO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkOyAgICBcclxuICAgICAgICBjb25zdCByaSA9IFstMSwxLDAsMF07XHJcbiAgICAgICAgY29uc3QgY2kgPSBbMCwwLC0xLDFdO1xyXG4gICAgICAgIGlmKHZpc2l0ZWRbdGhpcy5zdGF0ZS5zdGFydC55XVt0aGlzLnN0YXRlLnN0YXJ0LnhdKXtcclxuICAgICAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGo9MDtqPHRoaXMuc3RhdGUuQztqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMud2FsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdGVkW2ldW2pdPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucGF0aClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcS5wdXNoKHRoaXMuc3RhdGUuc3RhcnQpO1xyXG4gICAgICAgIGxldCBkeCA9IHRoaXMuc3RhdGUuZW5kLng7XHJcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5zdGF0ZS5lbmQueTtcclxuICAgICAgICBsZXQgZWxlPXt9LHgseSxyLGM7XHJcbiAgICAgICAgICAgIHdoaWxlKCFxLmxlbmd0aD09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlID0gcVswXTtcclxuICAgICAgICAgICAgICAgIHggPSBlbGUueDtcclxuICAgICAgICAgICAgICAgIHkgPSBlbGUueTtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRbeV1beF09dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKCEoKHk9PXRoaXMuc3RhdGUuc3RhcnQueSYmeD09dGhpcy5zdGF0ZS5zdGFydC54KXx8KHk9PXRoaXMuc3RhdGUuZW5kLnkmJng9PXRoaXMuc3RhdGUuZW5kLngpKSlcclxuICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyp5K3hdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHEuc3BsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgICAgICBpZihkeD09PXgmJmR5PT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoZWxlIT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbnNpZGUhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKihlbGUueSkrZWxlLnhdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGU9ZWxlLnA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IoaT0wO2k8NDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHI9cmlbaV0reTtcclxuICAgICAgICAgICAgICAgICAgICBjPWNpW2ldK3g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VudDpcIitjb3VudCsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHI+PTAmJnI8dGhpcy5zdGF0ZS5SJiZjPj0wJiZjPHRoaXMuc3RhdGUuQyYmIXZpc2l0ZWRbcl1bY10pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxLnB1c2goe3g6Yyx5OnIscDplbGV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtyXVtjXT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighKChyPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmM9PXRoaXMuc3RhdGUuc3RhcnQueCl8fChyPT10aGlzLnN0YXRlLmVuZC55JiZjPT10aGlzLnN0YXRlLmVuZC54KSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQypyK2NdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnZpc2l0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgZGZzPWFzeW5jKCk9PntcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnN0YXRlLm5vZGU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XHJcbiAgICAgICAgbGV0IHEgPVtdO1xyXG4gICAgICAgIGxldCBjb3VudD0wLGksajtcclxuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuc3RhdGUudmlzaXRlZDsgICAgXHJcbiAgICAgICAgY29uc3QgcmkgPSBbLTEsMSwwLDBdO1xyXG4gICAgICAgIGNvbnN0IGNpID0gWzAsMCwtMSwxXTtcclxuICAgICAgICBpZih2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XSl7XHJcbiAgICAgICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlI7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqPTA7ajx0aGlzLnN0YXRlLkM7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLndhbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHEucHVzaCh0aGlzLnN0YXRlLnN0YXJ0KTtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnN0YXRlLmVuZC54O1xyXG4gICAgICAgIGxldCBkeSA9IHRoaXMuc3RhdGUuZW5kLnk7XHJcbiAgICAgICAgbGV0IGVsZT17fSx4LHkscixjO1xyXG4gICAgICAgICAgICB3aGlsZSghcS5sZW5ndGg9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZSA9ICBxLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgeCA9IGVsZS54O1xyXG4gICAgICAgICAgICAgICAgeSA9IGVsZS55O1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFt5XVt4XT10cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYoISgoeT09dGhpcy5zdGF0ZS5zdGFydC55JiZ4PT10aGlzLnN0YXRlLnN0YXJ0LngpfHwoeT09dGhpcy5zdGF0ZS5lbmQueSYmeD09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKnkreF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZHg9PT14JiZkeT09PXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKGVsZSE9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW5zaWRlIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyooZWxlLnkpK2VsZS54XS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlPWVsZS5wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDUwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICByPXJpW2ldK3k7XHJcbiAgICAgICAgICAgICAgICAgICAgYz1jaVtpXSt4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bnQ6XCIrY291bnQrKylcclxuICAgICAgICAgICAgICAgICAgICBpZihyPj0wJiZyPHRoaXMuc3RhdGUuUiYmYz49MCYmYzx0aGlzLnN0YXRlLkMmJiF2aXNpdGVkW3JdW2NdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcS5wdXNoKHt4OmMseTpyLHA6ZWxlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbcl1bY109dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISgocj09dGhpcy5zdGF0ZS5zdGFydC55JiZjPT10aGlzLnN0YXRlLnN0YXJ0LngpfHwocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqcitjXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGRpamtzdHJhPWFzeW5jKCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbmRpajp0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgbm9kZT0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2aXNpdGVkPSB0aGlzLnN0YXRlLnZpc2l0ZWQ7XHJcbiAgICAgICAgaWYodmlzaXRlZFt0aGlzLnN0YXRlLnN0YXJ0LnldW3RoaXMuc3RhdGUuc3RhcnQueF0pe1xyXG4gICAgICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SO2krKyl7XHJcbiAgICAgICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIW5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy53YWxsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRbaV1bal09ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy52aXNpdGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5wYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpdGVkW3RoaXMuc3RhdGUuc3RhcnQueV1bdGhpcy5zdGF0ZS5zdGFydC54XT10cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICB9KSAgXHJcbiAgICAgICAgbGV0IGksajtcclxuICAgICAgICBsZXQgd2VpZ2h0PVtdO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIHdlaWdodC5wdXNoKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICBmb3Ioaj0wO2o8dGhpcy5zdGF0ZS5DO2orKyl7XHJcbiAgICAgICAgICAgICAgICBpZighdmlzaXRlZFtpXVtqXSYmIXRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRbaSp0aGlzLnN0YXRlLkMral0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjArMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkPW5vZGVbaSp0aGlzLnN0YXRlLkMral0uY2hpbGROb2RlcztcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt3ZWlnaHRbaSp0aGlzLnN0YXRlLkMral19YCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50PTAsaWksamosaWQsbnVtLGs7XHJcbiAgICAgICAgbGV0IG1hcmsgPVtdO1xyXG4gICAgICAgIGZvcihpPTA7aTx0aGlzLnN0YXRlLlIqdGhpcy5zdGF0ZS5DO2krKyl7XHJcbiAgICAgICAgICAgIG1hcmsucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkID0gW107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgZC5wdXNoKDEwZTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyZW50ID0gW107XHJcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMuc3RhdGUuUip0aGlzLnN0YXRlLkM7aSsrKXtcclxuICAgICAgICAgICAgcGFyZW50LnB1c2gobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRbdGhpcy5zdGF0ZS5zdGFydC55KnRoaXMuc3RhdGUuQyt0aGlzLnN0YXRlLnN0YXJ0LnhdPTA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZXksIGxpc3RlblwiLHRoaXMuc3RhdGUuc3RhcnQueSp0aGlzLnN0YXRlLkMrdGhpcy5zdGF0ZS5zdGFydC54KVxyXG4gICAgICAgIGNvbnN0IHJpID0gWy0xLDEsMCwwXTtcclxuICAgICAgICBjb25zdCBjaSA9IFswLDAsLTEsMV07XHJcbiAgICAgICAgbGV0IEMgPSB0aGlzLnN0YXRlLkMsUiA9IHRoaXMuc3RhdGUuUjtcclxuICAgICAgICBmb3IoaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBqPS0xOyBudW09MTBlNTtcclxuICAgICAgICAgICAgZm9yKGlkPTA7aWQ8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpZCsrKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBkXCIsZFtpZF0pXHJcbiAgICAgICAgICAgICAgICBpZighbWFya1tpZF0mJmRbaWRdPG51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaj1pZDsgbnVtID0gZFtpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFya1tqXT10cnVlO1xyXG4gICAgICAgICAgICBsZXQgciA9IE1hdGguZmxvb3Ioai9DKTtcclxuICAgICAgICAgICAgbGV0IGMgPSBqLXIqQztcclxuICAgICAgICAgICAgaWYocj09dGhpcy5zdGF0ZS5lbmQueSYmYz09dGhpcy5zdGF0ZS5lbmQueCl7XHJcbiAgICAgICAgICAgICAgICB3aGlsZShwYXJlbnRbal0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbal0uY2xhc3NMaXN0LmFkZChzdHlsZXMucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaj0gcGFyZW50W2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wYXRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5kaWo6ZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIEpcIixqKTtcclxuICAgICAgICAgICAgaWYoaiE9LTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbm9kZVtqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy52aXNpdGVkKTtcclxuICAgICAgICAgICAgZm9yKGs9MDtrPDQ7aysrKXtcclxuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5mbG9vcihqL0MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBqLXIqQztcclxuICAgICAgICAgICAgICAgIHIgPXIrIHJpW2tdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJIGFtIGluc2lkZVwiKVxyXG4gICAgICAgICAgICAgICAgYyA9YysgY2lba107XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByKkMrYztcclxuICAgICAgICAgICAgICAgIGlmKHI+PTAmJnI8UiYmYz49MCYmYzxDJiYhdmlzaXRlZFtyXVtjXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFcgPSB3ZWlnaHRbcipDK2NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIixpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZFtqXStXPGRbaW5kZXhdKXtcclxuICAgICAgICAgICAgICAgICAgICBkW2luZGV4XT1kW2pdK1c7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtpbmRleF0uY2xhc3NMaXN0LmFkZChzdHlsZXMudmlzaXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFtpbmRleF09IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgyMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbmRpajpmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zdGF0ZS5SKnRoaXMuc3RhdGUuQztpKyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5jaGVja1NFKE1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpLGktdGhpcy5zdGF0ZS5DKk1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpKSl7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlW2ldLmlubmVySFRNTD1gPGRpdj48L2Rpdj5gXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKE1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpPT10aGlzLnN0YXRlLnN0YXJ0LnkmJmktdGhpcy5zdGF0ZS5DKk1hdGguZmxvb3IoaS90aGlzLnN0YXRlLkMpPT10aGlzLnN0YXRlLnN0YXJ0Lngpe1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZVtpXS5pbm5lckhUTUw9YDxkaXY+UzwvZGl2PmBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlW2ldLmlubmVySFRNTD1gPGRpdj5FPC9kaXY+YCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbmVyYXRlV2FsbHM9KCk9PntcclxuICAgICAgICBsZXQgdj1bXTtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc3RhdGUubm9kZTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnN0YXRlLlI7IGkrKykge1xyXG4gICAgICAgICAgICB2LnB1c2gobmV3IEFycmF5KHRoaXMuc3RhdGUuQykuZmlsbChmYWxzZSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8IHRoaXMuc3RhdGUuUjsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqPTA7IGo8IHRoaXMuc3RhdGUuQzsgaisrKXtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXHJcbiAgICAgICAgICAgICAgICBpZihyYW5kPT09MSYmIXRoaXMuY2hlY2tTRShpLGopKXtcclxuICAgICAgICAgICAgICAgICAgICB2W2ldW2pdPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVt0aGlzLnN0YXRlLkMqaStqXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy53YWxsKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQ6dlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjbGVhckJvYXJkPSgpPT57XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zdGF0ZS5ub2RlO1xyXG4gICAgICAgIGxldCB2aXNpdGVkID0gdGhpcy5zdGF0ZS52aXNpdGVkO1xyXG4gICAgICAgIGxldCB7UixDfT0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUjsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8IHRoaXMuc3RhdGUuQzsgaisrKXtcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMud2FsbClcclxuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5zdGF0ZS5DKmkral0uY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMudmlzaXRpbmcpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnZpc2l0ZWQpXHJcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuc3RhdGUuQyppK2pdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnBhdGgpXHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQ9bm9kZVtpKnRoaXMuc3RhdGUuQytqXS5jaGlsZE5vZGVzO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja1NFKGksaikpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkWzBdLmlubmVySFRNTD1gYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlzaXRlZFtpXVtqXT1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpdGVkOnZpc2l0ZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGxpc3Q9W107XHJcbiAgICAgICAgbGV0IGJveD1bXTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc3RhdGUuUjtpKyspe1xyXG4gICAgICAgICAgICBsaXN0PVtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLnN0YXRlLkM7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2hcclxuICAgICAgICAgICAgICAgICAgICAoPGRpdiBrZXk9e2p9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYm94fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5kZXRlcm1pbmVDbGFzcyhpLGopfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKT0+dGhpcy5tb3VzZURvd24oaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpPT50aGlzLm1vdXNlTGVhdmUoaSxqKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT50aGlzLm1vdXNlRW50ZXIoaSxqKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+e3RoaXMuZGV0ZXJtaW5lVGV4dChpLGopfTwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib3gucHVzaChsaXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkUH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7Ym94fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubmRpaiYmPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpY2V9PlRvIGtlZXAgdGhpbmdzIHNpbXBsZSB3ZWlnaHRzIGFyZSByYW5kb21seSBhc3NpZ25lZCB0byBlYWNoIGNlbGwgYW5kIHRoZW4gYWNjb3JkaW5nIHRvIGFzc2lnbmVkIHdlaWdodCB0aGUgYWxnb3JpdGhtIHdpbGwgZmluZCB0aGUgc2hvcnRlc3QgcGF0aC48L2Rpdj5cclxuICAgICAgICAgICAgfHwgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuYWxnb3JpdGhtfT5cclxuICAgICAgICAgICAgPGRpdj5BbGdvcml0aG1zPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuYmZzfSA+UnVuIEJyZWFkdGggRmlyc3QgU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZGZzfSA+UnVuIERlcHRoIEZpcnN0IFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLmRmc30gPlJ1biBBKiBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy5kaWprc3RyYX0gPlJ1biBkaWprc3RyYSBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5PcHRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e3RoaXMuZ2VuZXJhdGVXYWxsc30gPkdlbmVyYXRlICBSYW5kb20gV2FsbHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckJvYXJkfSBvbk1vdXNlRG93bj17dGhpcy5jbGVhckJvYXJkfSA+Q2xlYXIgQm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==