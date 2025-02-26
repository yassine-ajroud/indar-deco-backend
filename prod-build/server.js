/*! For license information please see server.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
      232: (__unused_webpack_module, exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Supplier = __webpack_require__(5619);
        (exports.createSupplier = (function () {
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(req, res) {
              var supplier;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (_context.prev = 0),
                          (supplier = new Supplier(req.body)),
                          (_context.next = 4),
                          supplier.save()
                        );
                      case 4:
                        res.status(201).json(supplier), (_context.next = 10);
                        break;
                      case 7:
                        (_context.prev = 7),
                          (_context.t0 = _context.catch(0)),
                          res
                            .status(500)
                            .json({ error: "Failed to create the supplier." });
                      case 10:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[0, 7]],
              );
            }),
          );
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()),
          (exports.getAllSuppliers = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var supplier;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (_context2.next = 3),
                            Supplier.find()
                          );
                        case 3:
                          (supplier = _context2.sent),
                            res.status(200).json(supplier),
                            (_context2.next = 10);
                          break;
                        case 7:
                          (_context2.prev = 7),
                            (_context2.t0 = _context2.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to fetch supplier." });
                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()),
          (exports.getSupplierById = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var supplier;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            Supplier.findById(req.params.id)
                          );
                        case 3:
                          if ((supplier = _context3.sent)) {
                            _context3.next = 6;
                            break;
                          }
                          return _context3.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "supplier not found." }),
                          );
                        case 6:
                          res.status(200).json(supplier), (_context3.next = 12);
                          break;
                        case 9:
                          (_context3.prev = 9),
                            (_context3.t0 = _context3.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to fetch the supplier." });
                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })()),
          (exports.updateSupplier = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var supplier;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (_context4.next = 3),
                            Supplier.findByIdAndUpdate(req.params.id, req.body)
                          );
                        case 3:
                          if ((supplier = _context4.sent)) {
                            _context4.next = 6;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "supplier not found." }),
                          );
                        case 6:
                          res.status(200).json(supplier), (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to update the supplier.",
                              });
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })()),
          (exports.deleteSupplier = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (_context5.next = 3),
                            Supplier.findByIdAndDelete(req.params.id)
                          );
                        case 3:
                          if (_context5.sent) {
                            _context5.next = 6;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "supplier not found." }),
                          );
                        case 6:
                          res
                            .status(200)
                            .json({
                              message: "supplier deleted successfully.",
                            }),
                            (_context5.next = 12);
                          break;
                        case 9:
                          (_context5.prev = 9),
                            (_context5.t0 = _context5.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to delete the supplier.",
                              });
                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })());
      },
      250: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var User = __webpack_require__(5596),
          bycrypt = __webpack_require__(4729),
          jwt = __webpack_require__(829),
          moment = __webpack_require__(4716),
          nodemailer = __webpack_require__(1572),
          OTP = __webpack_require__(1198),
          register = (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (_context.next = 2),
                          User.countDocuments(
                            { email: req.body.email },
                            { limit: 1 },
                          )
                        );
                      case 2:
                        0 == _context.sent
                          ? bycrypt.hash(
                              req.body.password,
                              10,
                              function (err, hashedPass) {
                                err && res.status(500).json({ error: err }),
                                  new User({
                                    firstName: req.body.firstName,
                                    lastName: req.body.lastName,
                                    email: req.body.email,
                                    address: req.body.address,
                                    phone: req.body.phone,
                                    imageUrl: req.body.imageUrl,
                                    password: hashedPass,
                                    OAuth: req.body.OAuth,
                                    gender: req.body.gender,
                                    birthDate: req.body.birthDate,
                                    role: req.body.role || "user",
                                  })
                                    .save()
                                    .then(function (user) {
                                      res
                                        .status(201)
                                        .json({
                                          message: "user Added Successfully",
                                          uId: user.id,
                                        });
                                    })
                                    .catch(function (error) {
                                      res
                                        .status(500)
                                        .json({ message: "error occured" });
                                    });
                              },
                            )
                          : res
                              .status(403)
                              .json({ message: "user already exist" });
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                }, _callee);
              }),
            );
            return function register(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
          forgetPassword = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var emaill, destination, random;
                return _regeneratorRuntime().wrap(function _callee4$(
                  _context4,
                ) {
                  for (;;)
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        return (
                          (emaill = req.body.email),
                          (destination = req.body.destination),
                          (random = Math.floor(1e3 + 9e3 * Math.random())),
                          (_context4.next = 5),
                          User.findOne({ email: emaill }).then(
                            (function () {
                              var _ref3 = _asyncToGenerator(
                                _regeneratorRuntime().mark(
                                  function _callee3(user) {
                                    var details, date, otp;
                                    return _regeneratorRuntime().wrap(
                                      function _callee3$(_context3) {
                                        for (;;)
                                          switch (
                                            (_context3.prev = _context3.next)
                                          ) {
                                            case 0:
                                              if (!user) {
                                                _context3.next = 12;
                                                break;
                                              }
                                              return (
                                                (details = {
                                                  from: "ajroudyassine06@gmail.com",
                                                  to: destination,
                                                  subject:
                                                    "Please reset your password",
                                                  text: "We heard that you lost your application password.\n Sorry about that! But don’t worry!\n You can use the following CODE to reset your password : \n  ".concat(
                                                    random,
                                                  ),
                                                }),
                                                nodemailer
                                                  .createTransport({
                                                    service: "gmail",
                                                    auth: {
                                                      user: "ajroudyassine06@gmail.com",
                                                      pass: "zyrm prxq djon ugan",
                                                    },
                                                  })
                                                  .sendMail(
                                                    details,
                                                    function (err) {
                                                      err &&
                                                        console
                                                          .status(500)
                                                          .log(
                                                            "it has an error",
                                                            err,
                                                          );
                                                    },
                                                  ),
                                                (date = new Date(
                                                  Date.now(),
                                                )).setMinutes(
                                                  date.getMinutes() + 15,
                                                ),
                                                (otp = new OTP({
                                                  email: emaill,
                                                  otp: random,
                                                  expiry_date: date,
                                                })),
                                                (_context3.next = 9),
                                                OTP.findOne({
                                                  email: emaill,
                                                }).then(
                                                  (function () {
                                                    var _ref4 =
                                                      _asyncToGenerator(
                                                        _regeneratorRuntime().mark(
                                                          function _callee2(
                                                            oldOTP,
                                                          ) {
                                                            return _regeneratorRuntime().wrap(
                                                              function _callee2$(
                                                                _context2,
                                                              ) {
                                                                for (;;)
                                                                  switch (
                                                                    (_context2.prev =
                                                                      _context2.next)
                                                                  ) {
                                                                    case 0:
                                                                      if (
                                                                        oldOTP
                                                                      ) {
                                                                        _context2.next = 5;
                                                                        break;
                                                                      }
                                                                      return (
                                                                        (_context2.next = 3),
                                                                        otp.save()
                                                                      );
                                                                    case 3:
                                                                      _context2.next = 9;
                                                                      break;
                                                                    case 5:
                                                                      return (
                                                                        (oldOTP.expiry_date =
                                                                          otp.expiry_date),
                                                                        (oldOTP.otp =
                                                                          otp.otp),
                                                                        (_context2.next = 9),
                                                                        OTP.findByIdAndUpdate(
                                                                          oldOTP.id,
                                                                          oldOTP,
                                                                        )
                                                                      );
                                                                    case 9:
                                                                    case "end":
                                                                      return _context2.stop();
                                                                  }
                                                              },
                                                              _callee2,
                                                            );
                                                          },
                                                        ),
                                                      );
                                                    return function (_x6) {
                                                      return _ref4.apply(
                                                        this,
                                                        arguments,
                                                      );
                                                    };
                                                  })(),
                                                )
                                              );
                                            case 9:
                                              res.json({
                                                message:
                                                  "send email  suuccessful ",
                                              }),
                                                (_context3.next = 13);
                                              break;
                                            case 12:
                                              res
                                                .status(404)
                                                .json({
                                                  message: "no email found",
                                                });
                                            case 13:
                                            case "end":
                                              return _context3.stop();
                                          }
                                      },
                                      _callee3,
                                    );
                                  },
                                ),
                              );
                              return function (_x5) {
                                return _ref3.apply(this, arguments);
                              };
                            })(),
                          )
                        );
                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                }, _callee4);
              }),
            );
            return function forgetPassword(_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
          profilgetById = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee6(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee6$(_context6) {
                    for (;;)
                      switch ((_context6.prev = _context6.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context6.prev = 1),
                            (_context6.next = 4),
                            User.findOne({ _id: id }, { password: 0 }).then(
                              (function () {
                                var _ref6 = _asyncToGenerator(
                                  _regeneratorRuntime().mark(
                                    function _callee5(user) {
                                      return _regeneratorRuntime().wrap(
                                        function _callee5$(_context5) {
                                          for (;;)
                                            switch (
                                              (_context5.prev = _context5.next)
                                            ) {
                                              case 0:
                                                user
                                                  ? res
                                                      .status(200)
                                                      .json({
                                                        message:
                                                          "get user successful  ",
                                                        user,
                                                      })
                                                  : res
                                                      .status(404)
                                                      .json({
                                                        message:
                                                          "no user found",
                                                      });
                                              case 1:
                                              case "end":
                                                return _context5.stop();
                                            }
                                        },
                                        _callee5,
                                      );
                                    },
                                  ),
                                );
                                return function (_x9) {
                                  return _ref6.apply(this, arguments);
                                };
                              })(),
                            )
                          );
                        case 4:
                          _context6.next = 9;
                          break;
                        case 6:
                          (_context6.prev = 6),
                            (_context6.t0 = _context6.catch(1)),
                            res.status(404).json({ message: "no user found" });
                        case 9:
                        case "end":
                          return _context6.stop();
                      }
                  },
                  _callee6,
                  null,
                  [[1, 6]],
                );
              }),
            );
            return function profilgetById(_x7, _x8) {
              return _ref5.apply(this, arguments);
            };
          })(),
          Resetpassword = (function () {
            var _ref7 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee9(req, res) {
                var passwordd, emaill;
                return _regeneratorRuntime().wrap(function _callee9$(
                  _context9,
                ) {
                  for (;;)
                    switch ((_context9.prev = _context9.next)) {
                      case 0:
                        (passwordd = req.body.password),
                          (emaill = req.body.email),
                          bycrypt.hash(
                            passwordd,
                            10,
                            (function () {
                              var _ref8 = _asyncToGenerator(
                                _regeneratorRuntime().mark(
                                  function _callee8(err, hashedPass) {
                                    return _regeneratorRuntime().wrap(
                                      function _callee8$(_context8) {
                                        for (;;)
                                          switch (
                                            (_context8.prev = _context8.next)
                                          ) {
                                            case 0:
                                              if (!err) {
                                                _context8.next = 2;
                                                break;
                                              }
                                              return _context8.abrupt(
                                                "return",
                                                res
                                                  .status(500)
                                                  .json({ message: err }),
                                              );
                                            case 2:
                                              return (
                                                (_context8.next = 4),
                                                User.findOne({
                                                  email: emaill,
                                                }).then(
                                                  (function () {
                                                    var _ref9 =
                                                      _asyncToGenerator(
                                                        _regeneratorRuntime().mark(
                                                          function _callee7(
                                                            user,
                                                          ) {
                                                            return _regeneratorRuntime().wrap(
                                                              function _callee7$(
                                                                _context7,
                                                              ) {
                                                                for (;;)
                                                                  switch (
                                                                    (_context7.prev =
                                                                      _context7.next)
                                                                  ) {
                                                                    case 0:
                                                                      if (
                                                                        !user
                                                                      ) {
                                                                        _context7.next = 6;
                                                                        break;
                                                                      }
                                                                      return (
                                                                        (_context7.next = 3),
                                                                        User.findByIdAndUpdate(
                                                                          user.id,
                                                                          {
                                                                            password:
                                                                              hashedPass,
                                                                          },
                                                                        )
                                                                      );
                                                                    case 3:
                                                                      res.json({
                                                                        message:
                                                                          "password updated suuccessful",
                                                                      }),
                                                                        (_context7.next = 7);
                                                                      break;
                                                                    case 6:
                                                                      return _context7.abrupt(
                                                                        "return",
                                                                        res
                                                                          .status(
                                                                            404,
                                                                          )
                                                                          .json(
                                                                            {
                                                                              message:
                                                                                "no user  found",
                                                                            },
                                                                          ),
                                                                      );
                                                                    case 7:
                                                                    case "end":
                                                                      return _context7.stop();
                                                                  }
                                                              },
                                                              _callee7,
                                                            );
                                                          },
                                                        ),
                                                      );
                                                    return function (_x14) {
                                                      return _ref9.apply(
                                                        this,
                                                        arguments,
                                                      );
                                                    };
                                                  })(),
                                                )
                                              );
                                            case 4:
                                            case "end":
                                              return _context8.stop();
                                          }
                                      },
                                      _callee8,
                                    );
                                  },
                                ),
                              );
                              return function (_x12, _x13) {
                                return _ref8.apply(this, arguments);
                              };
                            })(),
                          );
                      case 3:
                      case "end":
                        return _context9.stop();
                    }
                }, _callee9);
              }),
            );
            return function Resetpassword(_x10, _x11) {
              return _ref7.apply(this, arguments);
            };
          })(),
          UpdateProfil = (function () {
            var _ref10 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee10(req, res) {
                var usernamee,
                  lastnamee,
                  id,
                  emaill,
                  phone,
                  address,
                  image,
                  gender,
                  birthDate,
                  userr;
                return _regeneratorRuntime().wrap(
                  function _callee10$(_context10) {
                    for (;;)
                      switch ((_context10.prev = _context10.next)) {
                        case 0:
                          return (
                            (usernamee = req.body.firstName),
                            (lastnamee = req.body.lastName),
                            (id = req.body.id),
                            (emaill = req.body.email),
                            (phone = req.body.phone),
                            (address = req.body.address),
                            (image = req.body.imageUrl),
                            (gender = req.body.gender),
                            (birthDate = req.body.birthDate),
                            (_context10.prev = 9),
                            (_context10.next = 12),
                            User.findByIdAndUpdate(id, {
                              firstName: usernamee,
                              lastName: lastnamee,
                              email: emaill,
                              phone,
                              address,
                              imageUrl: image,
                              gender,
                              birthDate,
                            })
                          );
                        case 12:
                          (userr = _context10.sent),
                            res
                              .status(200)
                              .json({
                                message: "profil updated suuccessful",
                                userr,
                              }),
                            (_context10.next = 19);
                          break;
                        case 16:
                          (_context10.prev = 16),
                            (_context10.t0 = _context10.catch(9)),
                            res
                              .status(500)
                              .json({ message: "profil no update" });
                        case 19:
                        case "end":
                          return _context10.stop();
                      }
                  },
                  _callee10,
                  null,
                  [[9, 16]],
                );
              }),
            );
            return function UpdateProfil(_x15, _x16) {
              return _ref10.apply(this, arguments);
            };
          })();
        process.env.STRIPE_PUBLISHABLE_KEY,
          process.env.STRIPE_SECRET_KEY,
          process.env.STRIPE_WEBHOOK_SECRET;
        Pay = (function () {
          var _ref11 = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee11(req, res) {
              var body, response, data;
              return _regeneratorRuntime().wrap(function _callee11$(
                _context11,
              ) {
                for (;;)
                  switch ((_context11.prev = _context11.next)) {
                    case 0:
                      return (
                        (body = {
                          receiverWalletId: "6398f7a008ec811bcda49054",
                          amount: req.body.prix,
                          token: "TND",
                          type: "immediate",
                          description: "payment description",
                          lifespan: 10,
                          feesIncluded: !0,
                          firstName: req.body.first_name,
                          lastName: req.body.last_name,
                          phoneNumber: "27840303",
                          email: req.body.email,
                          orderId: "1234657",
                          webhook: "http://197.134.249.98:9090/payment/webhook",
                          silentWebhook: !0,
                          successUrl:
                            "https://dev.konnect.network/gateway/payment-success",
                          failUrl:
                            "https://dev.konnect.network/gateway/payment-failure",
                          checkoutForm: !0,
                          acceptedPaymentMethods: [
                            "wallet",
                            "bank_card",
                            "e-DINAR",
                          ],
                        }),
                        (_context11.next = 3),
                        fetch(
                          "https://api.preprod.konnect.network/api/v2/payments/init-payment",
                          {
                            method: "post",
                            body: JSON.stringify(body),
                            headers: {
                              "Content-Type": "application/json",
                              "x-api-key":
                                "6398f7a008ec811bcda49053:9v1o3O7FjyG1KbjfVFw0D",
                            },
                          },
                        )
                      );
                    case 3:
                      return (
                        (response = _context11.sent),
                        (_context11.next = 6),
                        response.json()
                      );
                    case 6:
                      (data = _context11.sent),
                        console.log(data),
                        res
                          .status(200)
                          .json({ message: "payment avec succeés", data });
                    case 9:
                    case "end":
                      return _context11.stop();
                  }
              }, _callee11);
            }),
          );
          return function Pay(_x17, _x18) {
            return _ref11.apply(this, arguments);
          };
        })();
        var updatepassword = (function () {
            var _ref12 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee16(req, res) {
                var oldpasswordd, newpasswordd, newrecovery, id;
                return _regeneratorRuntime().wrap(function _callee16$(
                  _context16,
                ) {
                  for (;;)
                    switch ((_context16.prev = _context16.next)) {
                      case 0:
                        return (
                          (oldpasswordd = req.body.oldPassword),
                          (newpasswordd = req.body.newPassword),
                          (newrecovery = req.body.newRecovery),
                          (id = req.body.id),
                          (_context16.next = 6),
                          User.findOne({ _id: id }).then(
                            (function () {
                              var _ref13 = _asyncToGenerator(
                                _regeneratorRuntime().mark(
                                  function _callee15(user) {
                                    return _regeneratorRuntime().wrap(
                                      function _callee15$(_context15) {
                                        for (;;)
                                          switch (
                                            (_context15.prev = _context15.next)
                                          ) {
                                            case 0:
                                              if (!user) {
                                                _context15.next = 4;
                                                break;
                                              }
                                              bycrypt.compare(
                                                oldpasswordd,
                                                user.password,
                                                (function () {
                                                  var _ref14 =
                                                    _asyncToGenerator(
                                                      _regeneratorRuntime().mark(
                                                        function _callee14(
                                                          err,
                                                          result,
                                                        ) {
                                                          return _regeneratorRuntime().wrap(
                                                            function _callee14$(
                                                              _context14,
                                                            ) {
                                                              for (;;)
                                                                switch (
                                                                  (_context14.prev =
                                                                    _context14.next)
                                                                ) {
                                                                  case 0:
                                                                    if (!err) {
                                                                      _context14.next = 2;
                                                                      break;
                                                                    }
                                                                    return _context14.abrupt(
                                                                      "return",
                                                                      res
                                                                        .status(
                                                                          500,
                                                                        )
                                                                        .json({
                                                                          message:
                                                                            err,
                                                                        }),
                                                                    );
                                                                  case 2:
                                                                    if (
                                                                      !result
                                                                    ) {
                                                                      _context14.next = 6;
                                                                      break;
                                                                    }
                                                                    bycrypt.hash(
                                                                      newpasswordd,
                                                                      10,
                                                                      (function () {
                                                                        var _ref15 =
                                                                          _asyncToGenerator(
                                                                            _regeneratorRuntime().mark(
                                                                              function _callee13(
                                                                                err,
                                                                                newhashedPass,
                                                                              ) {
                                                                                return _regeneratorRuntime().wrap(
                                                                                  function _callee13$(
                                                                                    _context13,
                                                                                  ) {
                                                                                    for (;;)
                                                                                      switch (
                                                                                        (_context13.prev =
                                                                                          _context13.next)
                                                                                      ) {
                                                                                        case 0:
                                                                                          if (
                                                                                            !err
                                                                                          ) {
                                                                                            _context13.next = 2;
                                                                                            break;
                                                                                          }
                                                                                          return _context13.abrupt(
                                                                                            "return",
                                                                                            res
                                                                                              .status(
                                                                                                500,
                                                                                              )
                                                                                              .json(
                                                                                                {
                                                                                                  message:
                                                                                                    err,
                                                                                                },
                                                                                              ),
                                                                                          );
                                                                                        case 2:
                                                                                          return (
                                                                                            (_context13.next = 4),
                                                                                            User.findOne(
                                                                                              {
                                                                                                _id: id,
                                                                                              },
                                                                                            ).then(
                                                                                              (function () {
                                                                                                var _ref16 =
                                                                                                  _asyncToGenerator(
                                                                                                    _regeneratorRuntime().mark(
                                                                                                      function _callee12(
                                                                                                        user,
                                                                                                      ) {
                                                                                                        return _regeneratorRuntime().wrap(
                                                                                                          function _callee12$(
                                                                                                            _context12,
                                                                                                          ) {
                                                                                                            for (;;)
                                                                                                              switch (
                                                                                                                (_context12.prev =
                                                                                                                  _context12.next)
                                                                                                              ) {
                                                                                                                case 0:
                                                                                                                  if (
                                                                                                                    !user
                                                                                                                  ) {
                                                                                                                    _context12.next = 6;
                                                                                                                    break;
                                                                                                                  }
                                                                                                                  return (
                                                                                                                    (_context12.next = 3),
                                                                                                                    User.findByIdAndUpdate(
                                                                                                                      user.id,
                                                                                                                      {
                                                                                                                        password:
                                                                                                                          newhashedPass,
                                                                                                                        recoveryEmail:
                                                                                                                          newrecovery,
                                                                                                                      },
                                                                                                                    )
                                                                                                                  );
                                                                                                                case 3:
                                                                                                                  res.json(
                                                                                                                    {
                                                                                                                      message:
                                                                                                                        "password updated suuccessful",
                                                                                                                    },
                                                                                                                  ),
                                                                                                                    (_context12.next = 7);
                                                                                                                  break;
                                                                                                                case 6:
                                                                                                                  return _context12.abrupt(
                                                                                                                    "return",
                                                                                                                    res
                                                                                                                      .status(
                                                                                                                        404,
                                                                                                                      )
                                                                                                                      .json(
                                                                                                                        {
                                                                                                                          message:
                                                                                                                            "no user  found",
                                                                                                                        },
                                                                                                                      ),
                                                                                                                  );
                                                                                                                case 7:
                                                                                                                case "end":
                                                                                                                  return _context12.stop();
                                                                                                              }
                                                                                                          },
                                                                                                          _callee12,
                                                                                                        );
                                                                                                      },
                                                                                                    ),
                                                                                                  );
                                                                                                return function (
                                                                                                  _x26,
                                                                                                ) {
                                                                                                  return _ref16.apply(
                                                                                                    this,
                                                                                                    arguments,
                                                                                                  );
                                                                                                };
                                                                                              })(),
                                                                                            )
                                                                                          );
                                                                                        case 4:
                                                                                        case "end":
                                                                                          return _context13.stop();
                                                                                      }
                                                                                  },
                                                                                  _callee13,
                                                                                );
                                                                              },
                                                                            ),
                                                                          );
                                                                        return function (
                                                                          _x24,
                                                                          _x25,
                                                                        ) {
                                                                          return _ref15.apply(
                                                                            this,
                                                                            arguments,
                                                                          );
                                                                        };
                                                                      })(),
                                                                    ),
                                                                      (_context14.next = 7);
                                                                    break;
                                                                  case 6:
                                                                    return _context14.abrupt(
                                                                      "return",
                                                                      res
                                                                        .status(
                                                                          202,
                                                                        )
                                                                        .json({
                                                                          message:
                                                                            "wrong password",
                                                                        }),
                                                                    );
                                                                  case 7:
                                                                  case "end":
                                                                    return _context14.stop();
                                                                }
                                                            },
                                                            _callee14,
                                                          );
                                                        },
                                                      ),
                                                    );
                                                  return function (_x22, _x23) {
                                                    return _ref14.apply(
                                                      this,
                                                      arguments,
                                                    );
                                                  };
                                                })(),
                                              ),
                                                (_context15.next = 5);
                                              break;
                                            case 4:
                                              return _context15.abrupt(
                                                "return",
                                                res
                                                  .status(404)
                                                  .json({
                                                    message: "no user  found",
                                                  }),
                                              );
                                            case 5:
                                            case "end":
                                              return _context15.stop();
                                          }
                                      },
                                      _callee15,
                                    );
                                  },
                                ),
                              );
                              return function (_x21) {
                                return _ref13.apply(this, arguments);
                              };
                            })(),
                          )
                        );
                      case 6:
                      case "end":
                        return _context16.stop();
                    }
                }, _callee16);
              }),
            );
            return function updatepassword(_x19, _x20) {
              return _ref12.apply(this, arguments);
            };
          })(),
          banUser = (function () {
            var _ref17 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee17(req, res, next) {
                var id, banned;
                return _regeneratorRuntime().wrap(
                  function _callee17$(_context17) {
                    for (;;)
                      switch ((_context17.prev = _context17.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (banned = req.body.ban),
                            (_context17.prev = 2),
                            (_context17.next = 5),
                            User.findByIdAndUpdate(id, { ban: banned })
                          );
                        case 5:
                          _context17.sent,
                            res
                              .status(200)
                              .json({
                                message: "user ".concat(
                                  banned ? "banned" : "unbanned",
                                  " ",
                                ),
                              }),
                            (_context17.next = 12);
                          break;
                        case 9:
                          (_context17.prev = 9),
                            (_context17.t0 = _context17.catch(2)),
                            res
                              .status(500)
                              .json({ message: _context17.t0.message });
                        case 12:
                        case "end":
                          return _context17.stop();
                      }
                  },
                  _callee17,
                  null,
                  [[2, 9]],
                );
              }),
            );
            return function banUser(_x27, _x28, _x29) {
              return _ref17.apply(this, arguments);
            };
          })(),
          getAllUsers = (function () {
            var _ref18 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee18(req, res, next) {
                var users;
                return _regeneratorRuntime().wrap(
                  function _callee18$(_context18) {
                    for (;;)
                      switch ((_context18.prev = _context18.next)) {
                        case 0:
                          return (
                            (_context18.prev = 0),
                            (_context18.next = 3),
                            User.find({}, { password: 0 })
                          );
                        case 3:
                          (users = _context18.sent),
                            res.status(200).json(users),
                            (_context18.next = 10);
                          break;
                        case 7:
                          (_context18.prev = 7),
                            (_context18.t0 = _context18.catch(0)),
                            res
                              .status(500)
                              .json({
                                message: "Error occurred while fetching users",
                              });
                        case 10:
                        case "end":
                          return _context18.stop();
                      }
                  },
                  _callee18,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function getAllUsers(_x30, _x31, _x32) {
              return _ref18.apply(this, arguments);
            };
          })(),
          deleteUser = (function () {
            var _ref19 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee19(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee19$(_context19) {
                    for (;;)
                      switch ((_context19.prev = _context19.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context19.prev = 1),
                            (_context19.next = 4),
                            User.findByIdAndDelete(id)
                          );
                        case 4:
                          if (_context19.sent) {
                            _context19.next = 9;
                            break;
                          }
                          return _context19.abrupt(
                            "return",
                            res.status(404).json({ message: "User not found" }),
                          );
                        case 9:
                          res
                            .status(200)
                            .json({ message: "User deleted successfully" });
                        case 10:
                          _context19.next = 15;
                          break;
                        case 12:
                          (_context19.prev = 12),
                            (_context19.t0 = _context19.catch(1)),
                            res
                              .status(500)
                              .json({
                                message: "Error occurred while deleting user",
                              });
                        case 15:
                        case "end":
                          return _context19.stop();
                      }
                  },
                  _callee19,
                  null,
                  [[1, 12]],
                );
              }),
            );
            return function deleteUser(_x33, _x34) {
              return _ref19.apply(this, arguments);
            };
          })(),
          getAllUserEmails = (function () {
            var _ref20 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee20(req, res, next) {
                var emaill, user;
                return _regeneratorRuntime().wrap(
                  function _callee20$(_context20) {
                    for (;;)
                      switch ((_context20.prev = _context20.next)) {
                        case 0:
                          return (
                            (emaill = req.body.email),
                            console.log(emaill),
                            (_context20.prev = 2),
                            (_context20.next = 5),
                            User.findOne(
                              { email: emaill, OAuth: null },
                              { recoveryEmail: 1 },
                            )
                          );
                        case 5:
                          (user = _context20.sent),
                            res.status(200).json(user),
                            (_context20.next = 12);
                          break;
                        case 9:
                          (_context20.prev = 9),
                            (_context20.t0 = _context20.catch(2)),
                            res
                              .status(500)
                              .json({
                                message: "Error occurred while fetching user",
                              });
                        case 12:
                        case "end":
                          return _context20.stop();
                      }
                  },
                  _callee20,
                  null,
                  [[2, 9]],
                );
              }),
            );
            return function getAllUserEmails(_x35, _x36, _x37) {
              return _ref20.apply(this, arguments);
            };
          })();
        module.exports = {
          register,
          login: function login(req, res) {
            var email = req.body.email,
              password = req.body.password;
            User.findOne({ email }).then(function (user) {
              user
                ? bycrypt.compare(
                    password,
                    user.password,
                    function (err, result) {
                      if ((err && res.json({ error: err }), user.ban))
                        return res.status(401).json({ message: "user banned" });
                      if (result) {
                        var token = jwt.sign(
                            { email: user.email },
                            "secretValue",
                            { expiresIn: "15m" },
                          ),
                          _refreshtoken = jwt.sign(
                            { name: user.firstName },
                            "refreshtokensecret",
                            { expiresIn: "7d" },
                          ),
                          expirationDate = new Date();
                        expirationDate.setMinutes(
                          expirationDate.getMinutes() + 15,
                        ),
                          res
                            .status(200)
                            .json({
                              message: "login successful",
                              token,
                              refreshtoken: _refreshtoken,
                              tokenExpiration: moment(expirationDate).format(
                                "YYYY-MM-DD HH:mm:ss",
                              ),
                              Uid: user._id,
                            });
                      } else
                        res
                          .status(202)
                          .json({ message: "password does not match!" });
                    },
                  )
                : res.status(404).json({ message: "no user found" });
            });
          },
          forgetPassword,
          Pay,
          getAllUserEmails,
          profilgetById,
          UpdateProfil,
          Resetpassword,
          VerifCode: function VerifCode(req, res, next) {
            var codee = req.body.otp,
              emaill = req.body.email;
            OTP.findOne({ $and: [{ otp: codee }, { email: emaill }] }).then(
              function (otp) {
                if (!otp)
                  return res.status(404).json({ message: "no code found " });
                var date = new Date(Date.now());
                if (
                  (date.setMinutes(date.getMinutes() + 0),
                  otp.expiry_date < date)
                )
                  return res.status(400).json({ message: "expired code" });
                res.json({ message: "code suuccessful" });
              },
            );
          },
          refreshtoken: function refreshtoken(req, res, next) {
            var refreshtoken = req.body.refreshtoken,
              uid = req.body.uid;
            jwt.verify(
              refreshtoken,
              "refreshtokensecret",
              function (err, decode) {
                if (err) res.status(400).json({ err });
                else {
                  var token = jwt.sign({ email: decode.email }, "secretValue", {
                      expiresIn: "15m",
                    }),
                    _refreshtoken2 = req.body.refreshtoken,
                    expirationDate = new Date();
                  expirationDate.setMinutes(expirationDate.getMinutes() + 15),
                    res
                      .status(200)
                      .json({
                        message: "Token refreshed",
                        token,
                        refreshtoken: _refreshtoken2,
                        tokenExpiration: moment(expirationDate).format(
                          "YYYY-MM-DD HH:mm:ss",
                        ),
                        Uid: uid,
                      });
                }
              },
            );
          },
          banUser,
          getAllUsers,
          deleteUser,
          updatepassword,
        };
      },
      620: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var SubCategory = __webpack_require__(9905),
          createSubCategory = (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var newSubCategory, savedSubCategory;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (newSubCategory = new SubCategory(req.body)),
                            (_context.prev = 1),
                            (_context.next = 4),
                            newSubCategory.save()
                          );
                        case 4:
                          (savedSubCategory = _context.sent),
                            res.status(201).json(savedSubCategory),
                            (_context.next = 11);
                          break;
                        case 8:
                          (_context.prev = 8),
                            (_context.t0 = _context.catch(1)),
                            res.status(500).json(_context.t0);
                        case 11:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 8]],
                );
              }),
            );
            return function createSubCategory(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
          getSubCategoryById = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var subcategory;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (_context2.next = 3),
                            SubCategory.findById(req.params.id)
                          );
                        case 3:
                          if ((subcategory = _context2.sent)) {
                            _context2.next = 6;
                            break;
                          }
                          return _context2.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "subcategory not found." }),
                          );
                        case 6:
                          res.status(200).json(subcategory),
                            (_context2.next = 12);
                          break;
                        case 9:
                          (_context2.prev = 9),
                            (_context2.t0 = _context2.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to fetch the subcategory.",
                              });
                        case 12:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function getSubCategoryById(_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
          getAllSubCategories = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var subcategories;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            SubCategory.find({})
                          );
                        case 3:
                          (subcategories = _context3.sent),
                            res.status(200).json(subcategories),
                            (_context3.next = 10);
                          break;
                        case 7:
                          (_context3.prev = 7),
                            (_context3.t0 = _context3.catch(0)),
                            res
                              .status(500)
                              .json({
                                message:
                                  "Error occurred while fetching subcategories",
                              });
                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function getAllSubCategories(_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })(),
          updateSubCategory = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var subcategory;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (_context4.next = 3),
                            SubCategory.findByIdAndUpdate(
                              req.params.id,
                              req.body,
                              { new: !0 },
                            )
                          );
                        case 3:
                          if ((subcategory = _context4.sent)) {
                            _context4.next = 6;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "subcategory not found." }),
                          );
                        case 6:
                          res.status(200).json(subcategory),
                            (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to update the subcategory.",
                              });
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function updateSubCategory(_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })(),
          deleteSubCategory = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (_context5.next = 3),
                            SubCategory.findOneAndDelete({ _id: req.params.id })
                          );
                        case 3:
                          if (_context5.sent) {
                            _context5.next = 6;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "subcategory not found." }),
                          );
                        case 6:
                          res
                            .status(200)
                            .json({
                              message: "subcategory deleted successfully.",
                            }),
                            (_context5.next = 12);
                          break;
                        case 9:
                          (_context5.prev = 9),
                            (_context5.t0 = _context5.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to delete the subcategory.",
                              });
                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function deleteSubCategory(_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })();
        module.exports = {
          createSubCategory,
          getSubCategoryById,
          updateSubCategory,
          deleteSubCategory,
          getAllSubCategories,
        };
      },
      818: (module) => {
        "use strict";
        module.exports = require("dotenv");
      },
      822: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          promotionSchema = new mongoose.Schema({
            product: { type: String, required: !0 },
            discountPercentage: { type: Number, required: !0 },
            newPrice: { type: Number, required: !0 },
            startDate: { type: String, required: !0 },
            endDate: { type: String, required: !0 },
            image: { type: String, required: !0 },
            text: { type: String, required: !0 },
          });
        module.exports = mongoose.model("Promotion", promotionSchema);
      },
      829: (module) => {
        "use strict";
        module.exports = require("jsonwebtoken");
      },
      864: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          productSchema = new mongoose.Schema(
            {
              name: { type: String, required: !0 },
              reference: { type: String, required: !0 },
              description: { type: String, required: !0 },
              price: { type: Number, required: !0 },
              category: { type: String, required: !0 },
              dimensions: {
                height: { type: Number },
                width: { type: Number },
                length: { type: Number },
                radius: { type: Number },
              },
              subCategory: { type: String, required: !0 },
              image: { type: String, required: !0 },
              supplier: { type: String, required: !0 },
              materials: { type: String, required: !0 },
              promotion: { type: Boolean, default: !1 },
              sales: { type: Number, default: 0 },
              rate: { type: Number, default: 0 },
            },
            { timestamps: !0 },
          );
        module.exports = mongoose.model("Product", productSchema);
      },
      1177: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        var router = __webpack_require__(7252).Router(),
          User = __webpack_require__(5596),
          AuthController = __webpack_require__(250),
          authenticate = __webpack_require__(1872),
          multer = __webpack_require__(8461);
        __webpack_require__(818).config(),
          router.post("/register", AuthController.register),
          router.post("/login", AuthController.login),
          router.post("/forgetPassword", AuthController.forgetPassword),
          router.post("/VerifCode", AuthController.VerifCode),
          router.post("/Resetpassword", AuthController.Resetpassword),
          router.post(
            "/updatepassword",
            authenticate,
            AuthController.updatepassword,
          ),
          router.get("/users/byId", AuthController.profilgetById),
          router.put(
            "/UpdateProfil",
            authenticate,
            AuthController.UpdateProfil,
          ),
          router.post("/refreshtoken", AuthController.refreshtoken),
          router.put("/users/ban", authenticate, AuthController.banUser),
          router.get("/users", authenticate, AuthController.getAllUsers),
          router.delete(
            "/users/delete",
            authenticate,
            AuthController.deleteUser,
          ),
          router.get("/users/email", AuthController.getAllUserEmails),
          (filename = "");
        var mystorage = multer.diskStorage({
            destination: "./uploads/images",
            filename: (function (_filename) {
              function filename(_x, _x2, _x3) {
                return _filename.apply(this, arguments);
              }
              return (
                (filename.toString = function () {
                  return _filename.toString();
                }),
                filename
              );
            })(function (req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (filename = f1);
            }),
          }),
          upload = multer({ storage: mystorage });
        router.post(
          "/updateImage",
          upload.any("image"),
          (function () {
            var _ref = (function _asyncToGenerator(n) {
              return function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = n.apply(t, e);
                  function _next(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                  }
                  function _throw(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                  }
                  _next(void 0);
                });
              };
            })(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context.prev = 1),
                            (_context.next = 4),
                            User.findByIdAndUpdate(id, {
                              imageUrl:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/images/" +
                                filename,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image updated " }),
                            (_context.next = 10);
                          break;
                        case 7:
                          (_context.prev = 7),
                            (_context.t0 = _context.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context.t0.message });
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x4, _x5) {
              return _ref.apply(this, arguments);
            };
          })(),
        ),
          (module.exports = router);
      },
      1198: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          OTPSchema = new (0, mongoose.Schema)(
            {
              email: { required: !0, type: String },
              otp: { type: String, required: !0 },
              expiry_date: { type: Date, required: !0 },
            },
            { timestamps: !0 },
          ),
          OTP = mongoose.model("OTP", OTPSchema);
        module.exports = OTP;
      },
      1242: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          reclamationSchema = new (0, mongoose.Schema)(
            {
              user: { type: String, required: !0 },
              address: { type: String, required: !0 },
              sales: [{ type: String, required: !0 }],
              completed: { type: Boolean, default: !1 },
              verified: { type: Boolean, default: !1 },
              reference: { type: String, required: !0 },
              price: { type: Number, required: !0 },
            },
            { timestamps: !0 },
          ),
          Reclamation = mongoose.model("Reclamation", reclamationSchema);
        module.exports = Reclamation;
      },
      1372: (module, __unused_webpack_exports, __webpack_require__) => {
        var router = __webpack_require__(7252).Router(),
          reclamationController = __webpack_require__(5591),
          authenticate = __webpack_require__(1872);
        router.post(
          "/reclamations",
          authenticate,
          reclamationController.createReclamation,
        ),
          router.get(
            "/reclamations/all/:id",
            authenticate,
            reclamationController.getAllReclamations,
          ),
          router.get(
            "/reclamations/:id",
            authenticate,
            reclamationController.getReclamationById,
          ),
          router.put(
            "/reclamations/:id",
            authenticate,
            reclamationController.updateReclamation,
          ),
          router.delete(
            "/reclamations/:id",
            authenticate,
            reclamationController.deleteReclamation,
          ),
          (module.exports = router);
      },
      1572: (module) => {
        "use strict";
        module.exports = require("nodemailer");
      },
      1667: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          product3DSchema = new mongoose.Schema({
            prodId: { type: String, required: !0 },
            image3D: { type: String, required: !0 },
            imageCouleurs: { type: String, required: !0 },
            quantity: { type: Number, required: !0 },
          });
        module.exports = mongoose.model("Product3D", product3DSchema);
      },
      1707: (module, __unused_webpack_exports, __webpack_require__) => {
        var router = __webpack_require__(7252).Router(),
          NotificationController = __webpack_require__(7091),
          authenticate = __webpack_require__(1872);
        router.post(
          "/notifications/create",
          authenticate,
          NotificationController.createNotification,
        ),
          router.get(
            "/notifications/get/:id",
            authenticate,
            NotificationController.getNotificationById,
          ),
          router.get(
            "/notifications/get/user/:id",
            authenticate,
            NotificationController.getNotificationByUserId,
          ),
          router.put(
            "/notifications/update",
            authenticate,
            NotificationController.updateNotification,
          ),
          router.delete(
            "/notifications/delete/:id",
            authenticate,
            NotificationController.deleteNotification,
          ),
          (module.exports = router);
      },
      1872: (module, __unused_webpack_exports, __webpack_require__) => {
        var jwt = __webpack_require__(829);
        module.exports = function authenticate(req, res, next) {
          try {
            var token = req.headers.authorization.split(" ")[1],
              decode = jwt.verify(token, "secretValue");
            (req.user = decode), next();
          } catch (error) {
            "TokenExpiredError" == error.name
              ? res.status(401).json({ message: "Token Expired !" })
              : res.json({ message: "Authentication Failed !" });
          }
        };
      },
      1889: (module, __unused_webpack_exports, __webpack_require__) => {
        var router = __webpack_require__(7252).Router(),
          CartController = __webpack_require__(2682),
          authenticate = __webpack_require__(1872);
        router.post("/cart/add", CartController.createCart),
          router.get("/cart/get", authenticate, CartController.getCartById),
          router.put("/cart/update", authenticate, CartController.updateCart),
          router.delete(
            "/cart/delete",
            authenticate,
            CartController.deleteCart,
          ),
          (module.exports = router);
      },
      2096: (module) => {
        "use strict";
        module.exports = require("morgan");
      },
      2160: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          ListSchema = new mongoose.Schema(
            {
              userId: { type: mongoose.ObjectId, ref: "User", required: !0 },
              products: [{ type: String }],
            },
            { timestamps: !0 },
          );
        module.exports = mongoose.model("wishlsit", ListSchema);
      },
      2379: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          CategorytSchema = new mongoose.Schema(
            { title: { type: String, required: !0 }, image: { type: String } },
            { timestamps: !0 },
          );
        module.exports = mongoose.model("Category", CategorytSchema);
      },
      2469: (__unused_webpack_module, exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function _defineProperty(e, r, t) {
          return (
            (r = (function _toPropertyKey(t) {
              var i = (function _toPrimitive(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var i = e.call(t, r || "default");
                  if ("object" != _typeof(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === r ? String : Number)(t);
              })(t, "string");
              return "symbol" == _typeof(i) ? i : i + "";
            })(r)) in e
              ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = t),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var SimpleReview = __webpack_require__(5594),
          Product = __webpack_require__(864);
        function getRateAVG(_x) {
          return _getRateAVG.apply(this, arguments);
        }
        function _getRateAVG() {
          return (_getRateAVG = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee7(prodid) {
              var simpleReviews;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                for (;;)
                  switch ((_context7.prev = _context7.next)) {
                    case 0:
                      return (
                        (sum = 0),
                        (_context7.next = 3),
                        SimpleReview.find({ product: prodid })
                      );
                    case 3:
                      return (
                        (simpleReviews = _context7.sent),
                        (arr = Array.from(simpleReviews)),
                        arr.forEach(function (element) {
                          sum += parseInt(element.rating);
                        }),
                        _context7.abrupt(
                          "return",
                          arr.length > 0
                            ? (sum / arr.length).toFixed(1)
                            : "0.0",
                        )
                      );
                    case 7:
                    case "end":
                      return _context7.stop();
                  }
              }, _callee7);
            }),
          )).apply(this, arguments);
        }
        (exports.createSimpleReview = (function () {
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(req, res) {
              var _req$body, user, product, rating, newSimpleReview;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (_context.prev = 0),
                          (_req$body = req.body),
                          (user = _req$body.user),
                          (product = _req$body.product),
                          (rating = _req$body.rating),
                          (newSimpleReview = new SimpleReview({
                            user,
                            product,
                            rating,
                          })),
                          (_context.next = 5),
                          newSimpleReview.save()
                        );
                      case 5:
                        return (
                          (_context.t0 = Product),
                          (_context.t1 = product),
                          (_context.next = 9),
                          getRateAVG(product)
                        );
                      case 9:
                        return (
                          (_context.t2 = _context.sent),
                          (_context.t3 = { rate: _context.t2 }),
                          (_context.next = 13),
                          _context.t0.findByIdAndUpdate.call(
                            _context.t0,
                            _context.t1,
                            _context.t3,
                          )
                        );
                      case 13:
                        res
                          .status(201)
                          .json({
                            message: "Avis simple créé avec succès",
                            review: newSimpleReview,
                          }),
                          (_context.next = 19);
                        break;
                      case 16:
                        (_context.prev = 16),
                          (_context.t4 = _context.catch(0)),
                          res
                            .status(500)
                            .json(
                              _defineProperty(
                                {
                                  error:
                                    "Erreur lors de la création de l'avis simple",
                                },
                                "error",
                                _context.t4.message,
                              ),
                            );
                      case 19:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[0, 16]],
              );
            }),
          );
          return function (_x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })()),
          (exports.getAllSimpleReviews = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var productId, simpleReviews, prod;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (productId = req.params.productId),
                            (_context2.next = 4),
                            SimpleReview.find({ product: productId })
                          );
                        case 4:
                          return (
                            (simpleReviews = _context2.sent),
                            (arr = Array.from(simpleReviews)),
                            (oneStar = 0),
                            (twoStars = 0),
                            (threeStars = 0),
                            (fourStars = 0),
                            (fiveStars = 0),
                            (sum = 0),
                            arr.forEach(function (element) {
                              (sum += element.rating),
                                1 == element.rating
                                  ? oneStar++
                                  : 2 == element.rating
                                    ? twoStars++
                                    : 3 == element.rating
                                      ? threeStars++
                                      : 4 == element.rating
                                        ? fourStars++
                                        : 5 == element.rating && fiveStars++;
                            }),
                            (_context2.next = 15),
                            Product.findById(productId)
                          );
                        case 15:
                          (prod = _context2.sent),
                            (avg = prod.rate),
                            res
                              .status(200)
                              .json({
                                oneStar,
                                twoStars,
                                threeStars,
                                fourStars,
                                fiveStars,
                                simpleReviews,
                                number: arr.length,
                                avg,
                              }),
                            (_context2.next = 23);
                          break;
                        case 20:
                          (_context2.prev = 20),
                            (_context2.t0 = _context2.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la récupération des avis simples",
                                  },
                                  "error",
                                  _context2.t0.message,
                                ),
                              );
                        case 23:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 20]],
                );
              }),
            );
            return function (_x4, _x5) {
              return _ref2.apply(this, arguments);
            };
          })()),
          (exports.getSimpleReviewById = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var simpleReview;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            SimpleReview.findById(req.params.id)
                          );
                        case 3:
                          if ((simpleReview = _context3.sent)) {
                            _context3.next = 6;
                            break;
                          }
                          return _context3.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Avis simple non trouvé." }),
                          );
                        case 6:
                          res.status(200).json(simpleReview),
                            (_context3.next = 12);
                          break;
                        case 9:
                          (_context3.prev = 9),
                            (_context3.t0 = _context3.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la récupération de l'avis simple",
                                  },
                                  "error",
                                  _context3.t0.message,
                                ),
                              );
                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x6, _x7) {
              return _ref3.apply(this, arguments);
            };
          })()),
          (exports.updateSimpleReview = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var simpleReview;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (_context4.next = 3),
                            SimpleReview.findByIdAndUpdate(
                              req.params.id,
                              req.body,
                              { new: !0 },
                            )
                          );
                        case 3:
                          if ((simpleReview = _context4.sent)) {
                            _context4.next = 6;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Avis simple non trouvé." }),
                          );
                        case 6:
                          return (
                            (_context4.t0 = Product),
                            (_context4.t1 = simpleReview.product),
                            (_context4.next = 10),
                            getRateAVG(simpleReview.product)
                          );
                        case 10:
                          return (
                            (_context4.t2 = _context4.sent),
                            (_context4.t3 = { rate: _context4.t2 }),
                            (_context4.next = 14),
                            _context4.t0.findByIdAndUpdate.call(
                              _context4.t0,
                              _context4.t1,
                              _context4.t3,
                            )
                          );
                        case 14:
                          res.status(200).json(simpleReview),
                            (_context4.next = 20);
                          break;
                        case 17:
                          (_context4.prev = 17),
                            (_context4.t4 = _context4.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la mise à jour de l'avis simple",
                                  },
                                  "error",
                                  _context4.t4.message,
                                ),
                              );
                        case 20:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 17]],
                );
              }),
            );
            return function (_x8, _x9) {
              return _ref4.apply(this, arguments);
            };
          })()),
          (exports.deleteSimpleReview = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                var simpleReview;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (_context5.next = 3),
                            SimpleReview.findByIdAndDelete(req.params.id)
                          );
                        case 3:
                          if ((simpleReview = _context5.sent)) {
                            _context5.next = 6;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Avis simple non trouvé." }),
                          );
                        case 6:
                          return (
                            (_context5.t0 = Product),
                            (_context5.t1 = simpleReview.product),
                            (_context5.next = 10),
                            getRateAVG(simpleReview.product)
                          );
                        case 10:
                          return (
                            (_context5.t2 = _context5.sent),
                            (_context5.t3 = { rate: _context5.t2 }),
                            (_context5.next = 14),
                            _context5.t0.findByIdAndUpdate.call(
                              _context5.t0,
                              _context5.t1,
                              _context5.t3,
                            )
                          );
                        case 14:
                          res
                            .status(200)
                            .json({
                              message: "Avis simple supprimé avec succès.",
                            }),
                            (_context5.next = 20);
                          break;
                        case 17:
                          (_context5.prev = 17),
                            (_context5.t4 = _context5.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la suppression de l'avis simple",
                                  },
                                  "error",
                                  _context5.t4.message,
                                ),
                              );
                        case 20:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 17]],
                );
              }),
            );
            return function (_x10, _x11) {
              return _ref5.apply(this, arguments);
            };
          })()),
          (exports.getSimpleReviewAverage = (function () {
            var _ref6 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee6(req, res) {
                var productId, simpleReviews;
                return _regeneratorRuntime().wrap(
                  function _callee6$(_context6) {
                    for (;;)
                      switch ((_context6.prev = _context6.next)) {
                        case 0:
                          return (
                            (_context6.prev = 0),
                            (sum = 0),
                            (productId = req.params.productId),
                            (_context6.next = 5),
                            SimpleReview.find({ product: productId })
                          );
                        case 5:
                          (simpleReviews = _context6.sent),
                            (arr = Array.from(simpleReviews)),
                            arr.forEach(function (element) {
                              sum += parseInt(element.rating);
                            }),
                            res
                              .status(200)
                              .json(
                                arr.length > 0
                                  ? (sum / arr.length).toFixed(1)
                                  : "0.0",
                              ),
                            (_context6.next = 14);
                          break;
                        case 11:
                          (_context6.prev = 11),
                            (_context6.t0 = _context6.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la récupération des avis simples",
                                  },
                                  "error",
                                  _context6.t0.message,
                                ),
                              );
                        case 14:
                        case "end":
                          return _context6.stop();
                      }
                  },
                  _callee6,
                  null,
                  [[0, 11]],
                );
              }),
            );
            return function (_x12, _x13) {
              return _ref6.apply(this, arguments);
            };
          })());
      },
      2555: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          saleSchema = new mongoose.Schema({
            productId: { type: String, required: !0 },
            fournisseurId: { type: String, required: !0 },
            UserId: { type: String, required: !0 },
            modelId: { type: String, required: !0 },
            quantity: { type: Number, required: !0 },
            timestamp: { type: Date, default: Date.now },
            status: [
              {
                index: { type: Number },
                status: { type: Number },
                date: { type: String, default: null },
              },
            ],
            price: { type: Number, required: !0 },
          });
        module.exports = mongoose.model("Sale", saleSchema);
      },
      2682: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Cart = __webpack_require__(5533),
          createCart = (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var newCart, savedCart;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (newCart = new Cart(req.body)),
                            (_context.prev = 1),
                            (_context.next = 4),
                            newCart.save()
                          );
                        case 4:
                          (savedCart = _context.sent),
                            res.status(201).json(savedCart),
                            (_context.next = 11);
                          break;
                        case 8:
                          (_context.prev = 8),
                            (_context.t0 = _context.catch(1)),
                            res.status(500).json(_context.t0);
                        case 11:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 8]],
                );
              }),
            );
            return function createCart(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
          getCartById = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var uid;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (uid = req.body.userId),
                            (_context3.prev = 1),
                            (_context3.next = 4),
                            Cart.findOne({ userId: uid }).then(
                              (function () {
                                var _ref3 = _asyncToGenerator(
                                  _regeneratorRuntime().mark(
                                    function _callee2(cart) {
                                      return _regeneratorRuntime().wrap(
                                        function _callee2$(_context2) {
                                          for (;;)
                                            switch (
                                              (_context2.prev = _context2.next)
                                            ) {
                                              case 0:
                                                cart
                                                  ? res.status(200).json(cart)
                                                  : res
                                                      .status(404)
                                                      .json({
                                                        msg: "cart not found",
                                                      });
                                              case 1:
                                              case "end":
                                                return _context2.stop();
                                            }
                                        },
                                        _callee2,
                                      );
                                    },
                                  ),
                                );
                                return function (_x5) {
                                  return _ref3.apply(this, arguments);
                                };
                              })(),
                            )
                          );
                        case 4:
                          _context3.next = 9;
                          break;
                        case 6:
                          (_context3.prev = 6),
                            (_context3.t0 = _context3.catch(1)),
                            res.status(500).json(_context3.t0);
                        case 9:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[1, 6]],
                );
              }),
            );
            return function getCartById(_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
          updateCart = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var id, sales, updatedCart;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (sales = req.body.sales),
                            (_context4.prev = 2),
                            (_context4.next = 5),
                            Cart.findByIdAndUpdate(id, { sales }, { new: !0 })
                          );
                        case 5:
                          (updatedCart = _context4.sent),
                            res.status(200).json(updatedCart),
                            (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(2)),
                            res.status(500).json(_context4.t0);
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[2, 9]],
                );
              }),
            );
            return function updateCart(_x6, _x7) {
              return _ref4.apply(this, arguments);
            };
          })(),
          deleteCart = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context5.prev = 1),
                            (_context5.next = 4),
                            Cart.findByIdAndDelete(id)
                          );
                        case 4:
                          if (_context5.sent) {
                            _context5.next = 9;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res.status(404).json({ message: "cart not found" }),
                          );
                        case 9:
                          res
                            .status(200)
                            .json({ message: "cart deleted successfully" });
                        case 10:
                          _context5.next = 15;
                          break;
                        case 12:
                          (_context5.prev = 12),
                            (_context5.t0 = _context5.catch(1)),
                            res
                              .status(500)
                              .json({
                                message: "Error occurred while deleting cart",
                              });
                        case 15:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[1, 12]],
                );
              }),
            );
            return function deleteCart(_x8, _x9) {
              return _ref5.apply(this, arguments);
            };
          })();
        module.exports = { createCart, getCartById, updateCart, deleteCart };
      },
      2819: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var WishList = __webpack_require__(2160),
          createWishList = (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var newWishList, savedWishList;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (newWishList = new WishList(req.body)),
                            (_context.prev = 1),
                            (_context.next = 4),
                            newWishList.save()
                          );
                        case 4:
                          (savedWishList = _context.sent),
                            res.status(201).json(savedWishList),
                            (_context.next = 11);
                          break;
                        case 8:
                          (_context.prev = 8),
                            (_context.t0 = _context.catch(1)),
                            res.status(500).json(_context.t0);
                        case 11:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 8]],
                );
              }),
            );
            return function createWishList(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
          getWishListById = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var uid;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (uid = req.body.userId),
                            (_context3.prev = 1),
                            (_context3.next = 4),
                            WishList.findOne({ userId: uid }).then(
                              (function () {
                                var _ref3 = _asyncToGenerator(
                                  _regeneratorRuntime().mark(
                                    function _callee2(wishlist) {
                                      return _regeneratorRuntime().wrap(
                                        function _callee2$(_context2) {
                                          for (;;)
                                            switch (
                                              (_context2.prev = _context2.next)
                                            ) {
                                              case 0:
                                                wishlist
                                                  ? res
                                                      .status(200)
                                                      .json(wishlist)
                                                  : res
                                                      .status(404)
                                                      .json({
                                                        msg: "wishlist not found",
                                                      });
                                              case 1:
                                              case "end":
                                                return _context2.stop();
                                            }
                                        },
                                        _callee2,
                                      );
                                    },
                                  ),
                                );
                                return function (_x5) {
                                  return _ref3.apply(this, arguments);
                                };
                              })(),
                            )
                          );
                        case 4:
                          _context3.next = 9;
                          break;
                        case 6:
                          (_context3.prev = 6),
                            (_context3.t0 = _context3.catch(1)),
                            res.status(500).json(_context3.t0);
                        case 9:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[1, 6]],
                );
              }),
            );
            return function getWishListById(_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
          updateWishList = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var id, products, updatedWishList;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (products = req.body.products),
                            (_context4.prev = 2),
                            (_context4.next = 5),
                            WishList.findByIdAndUpdate(
                              id,
                              { products },
                              { new: !0 },
                            )
                          );
                        case 5:
                          (updatedWishList = _context4.sent),
                            res.status(200).json(updatedWishList),
                            (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(2)),
                            res.status(500).json(_context4.t0);
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[2, 9]],
                );
              }),
            );
            return function updateWishList(_x6, _x7) {
              return _ref4.apply(this, arguments);
            };
          })(),
          deleteWishList = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context5.prev = 1),
                            (_context5.next = 4),
                            WishList.findByIdAndDelete(id)
                          );
                        case 4:
                          if (_context5.sent) {
                            _context5.next = 9;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ message: "wishlist not found" }),
                          );
                        case 9:
                          res
                            .status(200)
                            .json({ message: "wishlist deleted successfully" });
                        case 10:
                          _context5.next = 15;
                          break;
                        case 12:
                          (_context5.prev = 12),
                            (_context5.t0 = _context5.catch(1)),
                            res
                              .status(500)
                              .json({
                                message:
                                  "Error occurred while deleting wishlist",
                              });
                        case 15:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[1, 12]],
                );
              }),
            );
            return function deleteWishList(_x8, _x9) {
              return _ref5.apply(this, arguments);
            };
          })();
        module.exports = {
          createWishList,
          getWishListById,
          updateWishList,
          deleteWishList,
        };
      },
      3003: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        var router = __webpack_require__(7252).Router(),
          Review = __webpack_require__(7967),
          multer = __webpack_require__(8461);
        __webpack_require__(818).config();
        var ReviewController = __webpack_require__(7500),
          authenticate = __webpack_require__(1872);
        router.post(
          "/products/:productId/reviews",
          authenticate,
          ReviewController.addComment,
        ),
          router.get(
            "/products/:productId/reviews",
            authenticate,
            ReviewController.getAllComments,
          ),
          router.put(
            "/reviews/:reviewId",
            authenticate,
            ReviewController.updateComment,
          ),
          router.delete(
            "/reviews/:reviewId",
            authenticate,
            ReviewController.deleteComment,
          ),
          (filename = "");
        var mystorage = multer.diskStorage({
            destination: "./uploads/reviews",
            filename: (function (_filename) {
              function filename(_x, _x2, _x3) {
                return _filename.apply(this, arguments);
              }
              return (
                (filename.toString = function () {
                  return _filename.toString();
                }),
                filename
              );
            })(function (req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (filename = f1);
            }),
          }),
          upload = multer({ storage: mystorage });
        router.put(
          "/updateReviewimage",
          upload.any("image"),
          (function () {
            var _ref = (function _asyncToGenerator(n) {
              return function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = n.apply(t, e);
                  function _next(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                  }
                  function _throw(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                  }
                  _next(void 0);
                });
              };
            })(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context.prev = 1),
                            (_context.next = 4),
                            Review.findByIdAndUpdate(id, {
                              image:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/reviews/" +
                                filename,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image updated " }),
                            (_context.next = 10);
                          break;
                        case 7:
                          (_context.prev = 7),
                            (_context.t0 = _context.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context.t0.message });
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x4, _x5) {
              return _ref.apply(this, arguments);
            };
          })(),
        ),
          (module.exports = router);
      },
      3093: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        var router = __webpack_require__(7252).Router(),
          Supplier = __webpack_require__(5619);
        __webpack_require__(818).config();
        var supplierController = __webpack_require__(232),
          authenticate = __webpack_require__(1872),
          multer = __webpack_require__(8461);
        router.post("/supplier", supplierController.createSupplier),
          router.get(
            "/supplier",
            authenticate,
            supplierController.getAllSuppliers,
          ),
          router.get(
            "/supplier/:id",
            authenticate,
            supplierController.getSupplierById,
          ),
          router.put(
            "/supplier/:id",
            authenticate,
            supplierController.updateSupplier,
          ),
          router.delete(
            "/supplier/:id",
            authenticate,
            supplierController.deleteSupplier,
          ),
          (filename = "");
        var mystorage = multer.diskStorage({
            destination: "./uploads/suppliers",
            filename: (function (_filename) {
              function filename(_x, _x2, _x3) {
                return _filename.apply(this, arguments);
              }
              return (
                (filename.toString = function () {
                  return _filename.toString();
                }),
                filename
              );
            })(function (req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (filename = f1);
            }),
          }),
          upload = multer({ storage: mystorage });
        router.put(
          "/updatesupplierimage",
          upload.any("image"),
          (function () {
            var _ref = (function _asyncToGenerator(n) {
              return function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = n.apply(t, e);
                  function _next(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                  }
                  function _throw(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                  }
                  _next(void 0);
                });
              };
            })(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context.prev = 1),
                            (_context.next = 4),
                            Supplier.findByIdAndUpdate(id, {
                              image:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/suppliers/" +
                                filename,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image updated " }),
                            (_context.next = 10);
                          break;
                        case 7:
                          (_context.prev = 7),
                            (_context.t0 = _context.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context.t0.message });
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x4, _x5) {
              return _ref.apply(this, arguments);
            };
          })(),
        ),
          (module.exports = router);
      },
      3268: (module) => {
        "use strict";
        module.exports = require("body-parser");
      },
      3421: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        var router = __webpack_require__(7252).Router(),
          multer = __webpack_require__(8461);
        __webpack_require__(818).config();
        var SubCategoryController = __webpack_require__(620),
          authenticate = __webpack_require__(1872);
        router.post(
          "/subcategory/add",
          authenticate,
          SubCategoryController.createSubCategory,
        ),
          router.get(
            "/subcategory/:id",
            SubCategoryController.getSubCategoryById,
          ),
          router.get("/subcategory", SubCategoryController.getAllSubCategories),
          router.put(
            "/subcategory/:id",
            authenticate,
            SubCategoryController.updateSubCategory,
          ),
          router.delete(
            "/subcategory/:id",
            authenticate,
            SubCategoryController.deleteSubCategory,
          ),
          (filename = "");
        var mystorage = multer.diskStorage({
            destination: "./uploads/subcategory_image",
            filename: (function (_filename) {
              function filename(_x, _x2, _x3) {
                return _filename.apply(this, arguments);
              }
              return (
                (filename.toString = function () {
                  return _filename.toString();
                }),
                filename
              );
            })(function (req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (filename = f1);
            }),
          }),
          upload = multer({ storage: mystorage });
        router.put(
          "/updatesubcategoryimage",
          upload.any("image"),
          (function () {
            var _ref = (function _asyncToGenerator(n) {
              return function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = n.apply(t, e);
                  function _next(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                  }
                  function _throw(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                  }
                  _next(void 0);
                });
              };
            })(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context.prev = 1),
                            (_context.next = 4),
                            SubCategory.findByIdAndUpdate(id, {
                              image:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/subcategory_image/" +
                                filename,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image updated " }),
                            (_context.next = 10);
                          break;
                        case 7:
                          (_context.prev = 7),
                            (_context.t0 = _context.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context.t0.message });
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x4, _x5) {
              return _ref.apply(this, arguments);
            };
          })(),
        ),
          (module.exports = router);
      },
      4716: (module) => {
        "use strict";
        module.exports = require("moment");
      },
      4729: (module) => {
        "use strict";
        module.exports = require("bcryptjs");
      },
      4804: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var router = __webpack_require__(7252).Router(),
          Product = __webpack_require__(864),
          Product3D = __webpack_require__(1667),
          multer = __webpack_require__(8461);
        __webpack_require__(818).config();
        var productController = __webpack_require__(9013),
          authenticate = __webpack_require__(1872);
        router.post("/products", authenticate, productController.createProduct),
          router.get(
            "/products",
            authenticate,
            productController.getAllProducts,
          ),
          router.get(
            "/products/sorted",
            authenticate,
            productController.getSortedProducts,
          ),
          router.get(
            "/products/:id",
            authenticate,
            productController.getProductById,
          ),
          router.put(
            "/products/:id",
            authenticate,
            productController.updateProduct,
          ),
          router.delete(
            "/products/:id",
            authenticate,
            productController.deleteProduct,
          ),
          router.get(
            "/products/category/:category",
            authenticate,
            productController.getProductsByCategory,
          ),
          router.get(
            "/products/category/:category/subcategory/:subCategory",
            authenticate,
            productController.getProductsByCategoryAndSubcategory,
          ),
          router.post(
            "/3Dproducts",
            authenticate,
            productController.create3DProduct,
          ),
          router.get(
            "/3Dproducts/:id",
            authenticate,
            productController.get3DProductById,
          ),
          router.get(
            "/3Dproducts/all/:id",
            authenticate,
            productController.getAll3DProducts,
          ),
          (colorname = "");
        var mystorage1 = multer.diskStorage({
            destination: "./uploads/color_images",
            filename: function filename(req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (colorname = f1);
            },
          }),
          upload1 = multer({ storage: mystorage1 });
        router.put(
          "/uploadcolorimage",
          upload1.any("image"),
          (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context.prev = 1),
                            (_context.next = 4),
                            Product3D.findByIdAndUpdate(id, {
                              imageCouleurs:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/color_images/" +
                                colorname,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image added " }),
                            (_context.next = 10);
                          break;
                        case 7:
                          (_context.prev = 7),
                            (_context.t0 = _context.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context.t0.message });
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
        ),
          (colorfile = "");
        var mystorage2 = multer.diskStorage({
            destination: "./uploads/color_file",
            filename: function filename(req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (colorname = f1);
            },
          }),
          upload2 = multer({ storage: mystorage2 });
        router.put(
          "/uploadcolorfile",
          upload2.any("file"),
          (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context2.prev = 1),
                            (_context2.next = 4),
                            Product3D.findByIdAndUpdate(id, {
                              image3D:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/color_images/" +
                                colorfile,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "file added " }),
                            (_context2.next = 10);
                          break;
                        case 7:
                          (_context2.prev = 7),
                            (_context2.t0 = _context2.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context2.t0.message });
                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
        ),
          (filename = "");
        var mystorage = multer.diskStorage({
            destination: "./uploads/product_images",
            filename: (function (_filename) {
              function filename(_x5, _x6, _x7) {
                return _filename.apply(this, arguments);
              }
              return (
                (filename.toString = function () {
                  return _filename.toString();
                }),
                filename
              );
            })(function (req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (filename = f1);
            }),
          }),
          upload = multer({ storage: mystorage });
        router.put(
          "/uploadprodcutsimage",
          upload.any("image"),
          (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context3.prev = 1),
                            (_context3.next = 4),
                            Product.findByIdAndUpdate(id, {
                              image:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/product_images/" +
                                filename,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image added " }),
                            (_context3.next = 10);
                          break;
                        case 7:
                          (_context3.prev = 7),
                            (_context3.t0 = _context3.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context3.t0.message });
                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x8, _x9) {
              return _ref3.apply(this, arguments);
            };
          })(),
        ),
          (module.exports = router);
      },
      5422: (module, __unused_webpack_exports, __webpack_require__) => {
        var router = __webpack_require__(7252).Router(),
          authenticate = __webpack_require__(1872),
          simpleReviewController = __webpack_require__(2469);
        router.post(
          "/ratings",
          authenticate,
          simpleReviewController.createSimpleReview,
        ),
          router.get(
            "/products/:productId/ratings",
            authenticate,
            simpleReviewController.getAllSimpleReviews,
          ),
          router.get(
            "/ratings/:id",
            authenticate,
            simpleReviewController.getSimpleReviewById,
          ),
          router.get(
            "/ratings/:productId/average",
            simpleReviewController.getSimpleReviewAverage,
          ),
          router.put(
            "/ratings/:id",
            authenticate,
            simpleReviewController.updateSimpleReview,
          ),
          router.delete(
            "/ratings/:id",
            authenticate,
            simpleReviewController.deleteSimpleReview,
          ),
          (module.exports = router);
      },
      5479: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Promotion = __webpack_require__(822),
          Product = __webpack_require__(864),
          createPromotion = (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var newPromotion, savedPromotion;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (_context.prev = 0),
                            (newPromotion = new Promotion(req.body)),
                            (_context.next = 4),
                            newPromotion.save()
                          );
                        case 4:
                          return (
                            (savedPromotion = _context.sent),
                            (_context.next = 7),
                            Product.findByIdAndUpdate(newPromotion.product, {
                              promotion: !0,
                            })
                          );
                        case 7:
                          res.status(201).json(savedPromotion),
                            (_context.next = 13);
                          break;
                        case 10:
                          (_context.prev = 10),
                            (_context.t0 = _context.catch(0)),
                            next(_context.t0);
                        case 13:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[0, 10]],
                );
              }),
            );
            return function createPromotion(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
          getAllPromotions = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var promotions;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (_context2.next = 3),
                            Promotion.find()
                          );
                        case 3:
                          (promotions = _context2.sent),
                            res.status(200).json(promotions),
                            (_context2.next = 10);
                          break;
                        case 7:
                          (_context2.prev = 7),
                            (_context2.t0 = _context2.catch(0)),
                            next(_context2.t0);
                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function getAllPromotions(_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
          getPromotionById = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var promotions;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            Promotion.findById(req.params.id)
                          );
                        case 3:
                          (promotions = _context3.sent),
                            res.status(200).json(promotions),
                            (_context3.next = 10);
                          break;
                        case 7:
                          (_context3.prev = 7),
                            (_context3.t0 = _context3.catch(0)),
                            next(_context3.t0);
                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function getPromotionById(_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })(),
          updatePromotion = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var promotionId, updatedPromotion;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (promotionId = req.params.id),
                            (_context4.next = 4),
                            Promotion.findByIdAndUpdate(promotionId, req.body)
                          );
                        case 4:
                          if ((updatedPromotion = _context4.sent)) {
                            _context4.next = 7;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ message: "Promotion not found" }),
                          );
                        case 7:
                          res.status(200).json(updatedPromotion),
                            (_context4.next = 13);
                          break;
                        case 10:
                          (_context4.prev = 10),
                            (_context4.t0 = _context4.catch(0)),
                            next(_context4.t0);
                        case 13:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 10]],
                );
              }),
            );
            return function updatePromotion(_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })(),
          deletePromotion = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                var promotionId, deletedPromotion;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (promotionId = req.params.id),
                            (_context5.next = 4),
                            Promotion.findByIdAndDelete(promotionId)
                          );
                        case 4:
                          if ((deletedPromotion = _context5.sent)) {
                            _context5.next = 9;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ message: "Promotion not found" }),
                          );
                        case 9:
                          return (
                            (_context5.next = 11),
                            Product.findByIdAndUpdate(
                              deletedPromotion.product,
                              { promotion: !1 },
                            )
                          );
                        case 11:
                          return _context5.abrupt(
                            "return",
                            res
                              .status(200)
                              .json({ message: "Promotion deleted" }),
                          );
                        case 12:
                          res.status(204).json(), (_context5.next = 18);
                          break;
                        case 15:
                          (_context5.prev = 15),
                            (_context5.t0 = _context5.catch(0)),
                            next(_context5.t0);
                        case 18:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 15]],
                );
              }),
            );
            return function deletePromotion(_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })();
        module.exports = {
          createPromotion,
          getAllPromotions,
          updatePromotion,
          deletePromotion,
          getPromotionById,
        };
      },
      5533: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          CartSchema = new mongoose.Schema(
            {
              userId: { type: String, required: !0 },
              sales: [{ type: String, required: !0 }],
            },
            { timestamps: !0 },
          );
        module.exports = mongoose.model("Cart", CartSchema);
      },
      5591: (__unused_webpack_module, exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function _defineProperty(e, r, t) {
          return (
            (r = (function _toPropertyKey(t) {
              var i = (function _toPrimitive(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var i = e.call(t, r || "default");
                  if ("object" != _typeof(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === r ? String : Number)(t);
              })(t, "string");
              return "symbol" == _typeof(i) ? i : i + "";
            })(r)) in e
              ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = t),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Reclamation = __webpack_require__(1242);
        (exports.createReclamation = (function () {
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(req, res) {
              var _req$body,
                user,
                sales,
                reference,
                price,
                address,
                newReclamation;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (_context.prev = 0),
                          (_req$body = req.body),
                          (user = _req$body.user),
                          (sales = _req$body.sales),
                          (reference = _req$body.reference),
                          (price = _req$body.price),
                          (address = _req$body.address),
                          (newReclamation = new Reclamation({
                            user,
                            sales,
                            reference,
                            address,
                            price,
                          })),
                          (_context.next = 5),
                          newReclamation.save()
                        );
                      case 5:
                        res
                          .status(201)
                          .json({
                            message: "Réclamation créée avec succès",
                            reclamation: newReclamation,
                          }),
                          (_context.next = 11);
                        break;
                      case 8:
                        (_context.prev = 8),
                          (_context.t0 = _context.catch(0)),
                          res
                            .status(500)
                            .json(
                              _defineProperty(
                                {
                                  error:
                                    "Erreur lors de la création de la réclamation",
                                },
                                "error",
                                _context.t0.message,
                              ),
                            );
                      case 11:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[0, 8]],
              );
            }),
          );
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()),
          (exports.getAllReclamations = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var usr, reclamations;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (usr = req.params.id),
                            (_context2.next = 4),
                            Reclamation.find({ user: usr })
                          );
                        case 4:
                          (reclamations = _context2.sent),
                            res.status(200).json(reclamations),
                            (_context2.next = 11);
                          break;
                        case 8:
                          (_context2.prev = 8),
                            (_context2.t0 = _context2.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la récupération des réclamations",
                                  },
                                  "error",
                                  _context2.t0.message,
                                ),
                              );
                        case 11:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 8]],
                );
              }),
            );
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()),
          (exports.getReclamationById = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var reclamation;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            Reclamation.findById(req.params.id)
                          );
                        case 3:
                          if ((reclamation = _context3.sent)) {
                            _context3.next = 6;
                            break;
                          }
                          return _context3.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Réclamation non trouvée." }),
                          );
                        case 6:
                          res.status(200).json(reclamation),
                            (_context3.next = 12);
                          break;
                        case 9:
                          (_context3.prev = 9),
                            (_context3.t0 = _context3.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la récupération de la réclamation",
                                  },
                                  "error",
                                  _context3.t0.message,
                                ),
                              );
                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })()),
          (exports.updateReclamation = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var reclamation;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (_context4.next = 3),
                            Reclamation.findByIdAndUpdate(
                              req.params.id,
                              req.body,
                              { new: !0 },
                            )
                          );
                        case 3:
                          if ((reclamation = _context4.sent)) {
                            _context4.next = 6;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Réclamation non trouvée." }),
                          );
                        case 6:
                          res.status(200).json(reclamation),
                            (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la mise à jour de la réclamation",
                                  },
                                  "error",
                                  _context4.t0.message,
                                ),
                              );
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })()),
          (exports.deleteReclamation = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (_context5.next = 3),
                            Reclamation.findByIdAndRemove(req.params.id)
                          );
                        case 3:
                          if (_context5.sent) {
                            _context5.next = 6;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Réclamation non trouvée." }),
                          );
                        case 6:
                          res
                            .status(200)
                            .json({
                              message: "Réclamation supprimée avec succès.",
                            }),
                            (_context5.next = 12);
                          break;
                        case 9:
                          (_context5.prev = 9),
                            (_context5.t0 = _context5.catch(0)),
                            res
                              .status(500)
                              .json(
                                _defineProperty(
                                  {
                                    error:
                                      "Erreur lors de la suppression de la réclamation",
                                  },
                                  "error",
                                  _context5.t0.message,
                                ),
                              );
                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })());
      },
      5594: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          RatingSchema = new (0, mongoose.Schema)(
            {
              user: { type: String, required: !0 },
              product: { type: String, required: !0 },
              rating: { type: Number, required: !0 },
            },
            { timestamps: !0 },
          ),
          Rating = mongoose.model("Rating", RatingSchema);
        module.exports = Rating;
      },
      5596: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          userSchema = new (0, mongoose.Schema)(
            {
              firstName: { required: !0, type: String },
              lastName: { type: String, required: !0 },
              imageUrl: { type: String },
              email: { type: String, required: !0 },
              recoveryEmail: { type: String },
              OAuth: { type: String },
              address: { type: String },
              phone: { type: String },
              password: { type: String, required: !0 },
              ban: { type: Boolean, default: !1 },
              role: {
                type: String,
                enum: ["user", "vendor", "admin"],
                default: "user",
              },
              gender: {
                type: String,
                enum: ["male", "female", ""],
                default: "",
              },
              birthDate: { type: String },
            },
            { timestamps: !0 },
          ),
          user = mongoose.model("User", userSchema);
        module.exports = user;
      },
      5604: (module, __unused_webpack_exports, __webpack_require__) => {
        var router = __webpack_require__(7252).Router(),
          WishListController = __webpack_require__(2819),
          authenticate = __webpack_require__(1872);
        router.post("/wishlist/add", WishListController.createWishList),
          router.get(
            "/wishlist/get",
            authenticate,
            WishListController.getWishListById,
          ),
          router.put(
            "/wishlist/update",
            authenticate,
            WishListController.updateWishList,
          ),
          router.delete(
            "/wishlist/delete",
            authenticate,
            WishListController.deleteWishList,
          ),
          (module.exports = router);
      },
      5619: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          supplierSchema = new mongoose.Schema({
            name: { type: String, required: !0 },
            address: { type: String, required: !0 },
            phone: { type: String, required: !0 },
            marque: { type: String, required: !0 },
            rib: { type: String, required: !0 },
            image: { type: String, default: null },
            email: { type: String, default: null },
            webSite: { type: String, default: null },
            userId: { type: String, default: null },
          }),
          Supplier = mongoose.model("Supplier", supplierSchema);
        module.exports = Supplier;
      },
      5727: (module, __unused_webpack_exports, __webpack_require__) => {
        var router = __webpack_require__(7252).Router(),
          saleController = __webpack_require__(7062),
          authenticate = __webpack_require__(1872);
        router.post("/sales/create", authenticate, saleController.recordSale),
          router.get(
            "/sales/:userId",
            authenticate,
            saleController.getAllSales,
          ),
          router.get(
            "/sales/one/:id",
            authenticate,
            saleController.getSaleById,
          ),
          router.put("/sales/one/:id", authenticate, saleController.updateSale),
          router.delete(
            "/sales/one/:id",
            authenticate,
            saleController.deleteSale,
          ),
          (module.exports = router);
      },
      6037: (module) => {
        "use strict";
        module.exports = require("mongoose");
      },
      6151: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        var router = __webpack_require__(7252).Router(),
          Category = __webpack_require__(2379),
          multer = __webpack_require__(8461);
        __webpack_require__(818).config();
        var CategoryController = __webpack_require__(7288),
          authenticate = __webpack_require__(1872);
        router.post(
          "/category/add",
          authenticate,
          CategoryController.createCategory,
        ),
          router.get("/category/:id", CategoryController.getCategoryById),
          router.get("/category", CategoryController.getAllCategories),
          router.put(
            "/category/:id",
            authenticate,
            CategoryController.updateCategory,
          ),
          router.delete(
            "/category/:id",
            authenticate,
            CategoryController.deleteCategory,
          ),
          (filename = "");
        var mystorage = multer.diskStorage({
            destination: "./uploads/category_image",
            filename: (function (_filename) {
              function filename(_x, _x2, _x3) {
                return _filename.apply(this, arguments);
              }
              return (
                (filename.toString = function () {
                  return _filename.toString();
                }),
                filename
              );
            })(function (req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (filename = f1);
            }),
          }),
          upload = multer({ storage: mystorage });
        router.put(
          "/updatecategoryimage",
          upload.any("image"),
          (function () {
            var _ref = (function _asyncToGenerator(n) {
              return function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = n.apply(t, e);
                  function _next(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                  }
                  function _throw(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                  }
                  _next(void 0);
                });
              };
            })(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context.prev = 1),
                            (_context.next = 4),
                            Category.findByIdAndUpdate(id, {
                              image:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/category_image/" +
                                filename,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image updated " }),
                            (_context.next = 10);
                          break;
                        case 7:
                          (_context.prev = 7),
                            (_context.t0 = _context.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context.t0.message });
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x4, _x5) {
              return _ref.apply(this, arguments);
            };
          })(),
        ),
          (module.exports = router);
      },
      6800: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          NotificationSchema = new mongoose.Schema(
            {
              userId: { type: String, required: !0 },
              senderId: { type: String, required: !0 },
              seen: { type: Boolean, required: !0, default: !1 },
              content: { type: String, required: !0 },
            },
            { timestamps: !0 },
          );
        module.exports = mongoose.model("Notification", NotificationSchema);
      },
      7062: (__unused_webpack_module, exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Sale = __webpack_require__(2555);
        (exports.recordSale = (function () {
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(req, res) {
              var _req$body,
                productId,
                fournisseurId,
                UserId,
                quantity,
                price,
                modelId,
                sale;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (_context.prev = 0),
                          (_req$body = req.body),
                          (productId = _req$body.productId),
                          (fournisseurId = _req$body.fournisseurId),
                          (UserId = _req$body.UserId),
                          (quantity = _req$body.quantity),
                          (price = _req$body.price),
                          (modelId = _req$body.modelId),
                          (sale = new Sale({
                            productId,
                            fournisseurId,
                            UserId,
                            quantity,
                            modelId,
                            price,
                            status: [
                              {
                                index: 0,
                                status: 1,
                                date: new Date().toISOString().slice(0, 10),
                              },
                              { index: 1, status: 2, date: null },
                              { index: 2, status: 3, date: null },
                              { index: 3, status: 4, date: null },
                            ],
                          })),
                          (_context.next = 5),
                          sale.save()
                        );
                      case 5:
                        res.status(201).json({ message: "success sale", sale }),
                          (_context.next = 11);
                        break;
                      case 8:
                        (_context.prev = 8),
                          (_context.t0 = _context.catch(0)),
                          res
                            .status(500)
                            .json({ message: _context.t0.message });
                      case 11:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[0, 8]],
              );
            }),
          );
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()),
          (exports.getAllSales = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var userId, sales;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (userId = req.params.userId),
                            (_context2.next = 4),
                            Sale.find({ UserId: userId })
                          );
                        case 4:
                          (sales = _context2.sent),
                            res.status(201).json(sales),
                            (_context2.next = 11);
                          break;
                        case 8:
                          (_context2.prev = 8),
                            (_context2.t0 = _context2.catch(0)),
                            res
                              .status(500)
                              .json({ message: _context2.t0.message });
                        case 11:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 8]],
                );
              }),
            );
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()),
          (exports.getSaleById = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var sale;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            Sale.findById(req.params.id)
                          );
                        case 3:
                          if ((sale = _context3.sent)) {
                            _context3.next = 6;
                            break;
                          }
                          return _context3.abrupt(
                            "return",
                            res.status(404).json({ error: "Sale not found." }),
                          );
                        case 6:
                          res.status(200).json(sale), (_context3.next = 12);
                          break;
                        case 9:
                          (_context3.prev = 9),
                            (_context3.t0 = _context3.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to record the sale." });
                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })()),
          (exports.deleteSale = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var sale;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (_context4.next = 3),
                            Sale.findByIdAndDelete(req.params.id)
                          );
                        case 3:
                          if ((sale = _context4.sent)) {
                            _context4.next = 6;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res.status(404).json({ error: "Sale not found." }),
                          );
                        case 6:
                          res.status(200).json(sale), (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to record the sale." });
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })()),
          (exports.updateSale = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                var sale;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (_context5.next = 3),
                            Sale.findByIdAndUpdate(req.params.id, req.body, {
                              new: !0,
                            })
                          );
                        case 3:
                          (sale = _context5.sent),
                            res.status(200).json(sale),
                            (_context5.next = 10);
                          break;
                        case 7:
                          (_context5.prev = 7),
                            (_context5.t0 = _context5.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to update the sale." });
                        case 10:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })());
      },
      7091: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Notification = __webpack_require__(6800),
          createNotification = (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var newNotification, savedNotification;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (newNotification = new Notification(req.body)),
                            (_context.prev = 1),
                            (_context.next = 4),
                            newNotification.save()
                          );
                        case 4:
                          (savedNotification = _context.sent),
                            res.status(201).json(savedNotification),
                            (_context.next = 11);
                          break;
                        case 8:
                          (_context.prev = 8),
                            (_context.t0 = _context.catch(1)),
                            res.status(500).json(_context.t0);
                        case 11:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 8]],
                );
              }),
            );
            return function createNotification(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
          getNotificationById = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (id = req.params.id),
                            (_context3.prev = 1),
                            (_context3.next = 4),
                            Notification.findById(id).then(
                              (function () {
                                var _ref3 = _asyncToGenerator(
                                  _regeneratorRuntime().mark(
                                    function _callee2(notif) {
                                      return _regeneratorRuntime().wrap(
                                        function _callee2$(_context2) {
                                          for (;;)
                                            switch (
                                              (_context2.prev = _context2.next)
                                            ) {
                                              case 0:
                                                notif
                                                  ? res.status(200).json(notif)
                                                  : res
                                                      .status(404)
                                                      .json({
                                                        msg: "Notification not found",
                                                      });
                                              case 1:
                                              case "end":
                                                return _context2.stop();
                                            }
                                        },
                                        _callee2,
                                      );
                                    },
                                  ),
                                );
                                return function (_x5) {
                                  return _ref3.apply(this, arguments);
                                };
                              })(),
                            )
                          );
                        case 4:
                          _context3.next = 9;
                          break;
                        case 6:
                          (_context3.prev = 6),
                            (_context3.t0 = _context3.catch(1)),
                            res.status(500).json(_context3.t0);
                        case 9:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[1, 6]],
                );
              }),
            );
            return function getNotificationById(_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
          getNotificationByUserId = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var id;
                return _regeneratorRuntime().wrap(function _callee4$(
                  _context4,
                ) {
                  for (;;)
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        (id = req.params.id),
                          Notification.find({ userId: id })
                            .then(function (notif) {
                              res.json(notif);
                            })
                            .catch(function (error) {
                              res
                                .status(500)
                                .json({
                                  message:
                                    "Erreur lors de la récupération des notif",
                                  error,
                                });
                            });
                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                }, _callee4);
              }),
            );
            return function getNotificationByUserId(_x6, _x7) {
              return _ref4.apply(this, arguments);
            };
          })(),
          updateNotification = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                var id, seen, updatedNotif;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (seen = req.body.seen),
                            (_context5.prev = 2),
                            (_context5.next = 5),
                            Notification.findByIdAndUpdate(
                              id,
                              { seen },
                              { new: !0 },
                            )
                          );
                        case 5:
                          (updatedNotif = _context5.sent),
                            res.status(200).json(updatedNotif),
                            (_context5.next = 12);
                          break;
                        case 9:
                          (_context5.prev = 9),
                            (_context5.t0 = _context5.catch(2)),
                            res.status(500).json(_context5.t0);
                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[2, 9]],
                );
              }),
            );
            return function updateNotification(_x8, _x9) {
              return _ref5.apply(this, arguments);
            };
          })(),
          deleteNotification = (function () {
            var _ref6 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee6(req, res) {
                var id, notifications;
                return _regeneratorRuntime().wrap(
                  function _callee6$(_context6) {
                    for (;;)
                      switch ((_context6.prev = _context6.next)) {
                        case 0:
                          return (
                            (id = req.params.id),
                            (_context6.prev = 1),
                            (_context6.next = 4),
                            Notification.findByIdAndDelete(id)
                          );
                        case 4:
                          if ((notifications = _context6.sent)) {
                            _context6.next = 9;
                            break;
                          }
                          return _context6.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ message: "notifications not found" }),
                          );
                        case 9:
                          res
                            .status(200)
                            .json({
                              message: "notifications deleted successfully",
                              notifications,
                            });
                        case 10:
                          _context6.next = 15;
                          break;
                        case 12:
                          (_context6.prev = 12),
                            (_context6.t0 = _context6.catch(1)),
                            res
                              .status(500)
                              .json({
                                message:
                                  "Error occurred while deleting notifications",
                              });
                        case 15:
                        case "end":
                          return _context6.stop();
                      }
                  },
                  _callee6,
                  null,
                  [[1, 12]],
                );
              }),
            );
            return function deleteNotification(_x10, _x11) {
              return _ref6.apply(this, arguments);
            };
          })();
        module.exports = {
          createNotification,
          getNotificationById,
          getNotificationByUserId,
          updateNotification,
          deleteNotification,
        };
      },
      7146: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        var router = __webpack_require__(7252).Router(),
          Promotion = __webpack_require__(822),
          multer = __webpack_require__(8461);
        __webpack_require__(818).config();
        var PromotionController = __webpack_require__(5479),
          authenticate = __webpack_require__(1872);
        router.post(
          "/promotions",
          authenticate,
          PromotionController.createPromotion,
        ),
          router.get(
            "/promotions",
            authenticate,
            PromotionController.getAllPromotions,
          ),
          router.get(
            "/promotions/:id",
            authenticate,
            PromotionController.getPromotionById,
          ),
          router.put(
            "/promotions/:id",
            authenticate,
            PromotionController.updatePromotion,
          ),
          router.delete(
            "/promotions/:id",
            authenticate,
            PromotionController.deletePromotion,
          ),
          (filename = "");
        var mystorage = multer.diskStorage({
            destination: "./uploads/promotions",
            filename: (function (_filename) {
              function filename(_x, _x2, _x3) {
                return _filename.apply(this, arguments);
              }
              return (
                (filename.toString = function () {
                  return _filename.toString();
                }),
                filename
              );
            })(function (req, file, redirect) {
              var f1 = Date.now() + "." + file.mimetype.split("/")[1];
              redirect(null, f1), (filename = f1);
            }),
          }),
          upload = multer({ storage: mystorage });
        router.put(
          "/updatepromotionimage",
          upload.any("image"),
          (function () {
            var _ref = (function _asyncToGenerator(n) {
              return function () {
                var t = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = n.apply(t, e);
                  function _next(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                  }
                  function _throw(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                  }
                  _next(void 0);
                });
              };
            })(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var id;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (id = req.body.id),
                            (_context.prev = 1),
                            (_context.next = 4),
                            Promotion.findByIdAndUpdate(id, {
                              image:
                                "http://" +
                                process.env.IP_ADDRESS +
                                ":" +
                                process.env.PORT +
                                "/uploads/promotions/" +
                                filename,
                            })
                          );
                        case 4:
                          res.status(200).json({ message: "image updated " }),
                            (_context.next = 10);
                          break;
                        case 7:
                          (_context.prev = 7),
                            (_context.t0 = _context.catch(1)),
                            res
                              .status(500)
                              .json({ message: _context.t0.message });
                        case 10:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 7]],
                );
              }),
            );
            return function (_x4, _x5) {
              return _ref.apply(this, arguments);
            };
          })(),
        ),
          (module.exports = router);
      },
      7252: (module) => {
        "use strict";
        module.exports = require("express");
      },
      7288: (module, __unused_webpack_exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Category = __webpack_require__(2379),
          createCategory = (function () {
            var _ref = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee(req, res) {
                var newCategory, savedCategory;
                return _regeneratorRuntime().wrap(
                  function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return (
                            (newCategory = new Category(req.body)),
                            (_context.prev = 1),
                            (_context.next = 4),
                            newCategory.save()
                          );
                        case 4:
                          (savedCategory = _context.sent),
                            res.status(201).json(savedCategory),
                            (_context.next = 11);
                          break;
                        case 8:
                          (_context.prev = 8),
                            (_context.t0 = _context.catch(1)),
                            res.status(500).json(_context.t0);
                        case 11:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee,
                  null,
                  [[1, 8]],
                );
              }),
            );
            return function createCategory(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })(),
          getCategoryById = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var category;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (_context2.next = 3),
                            Category.findById(req.params.id)
                          );
                        case 3:
                          if ((category = _context2.sent)) {
                            _context2.next = 6;
                            break;
                          }
                          return _context2.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "category not found." }),
                          );
                        case 6:
                          res.status(200).json(category), (_context2.next = 12);
                          break;
                        case 9:
                          (_context2.prev = 9),
                            (_context2.t0 = _context2.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to fetch the category." });
                        case 12:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function getCategoryById(_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })(),
          getAllCategories = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var categories;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            Category.find({})
                          );
                        case 3:
                          (categories = _context3.sent),
                            res.status(200).json(categories),
                            (_context3.next = 10);
                          break;
                        case 7:
                          (_context3.prev = 7),
                            (_context3.t0 = _context3.catch(0)),
                            res
                              .status(500)
                              .json({
                                message:
                                  "Error occurred while fetching categories",
                              });
                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function getAllCategories(_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })(),
          updateCategory = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var category;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (_context4.next = 3),
                            Category.findByIdAndUpdate(
                              req.params.id,
                              req.body,
                              { new: !0 },
                            )
                          );
                        case 3:
                          if ((category = _context4.sent)) {
                            _context4.next = 6;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "category not found." }),
                          );
                        case 6:
                          res.status(200).json(category), (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to update the category.",
                              });
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function updateCategory(_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })(),
          deleteCategory = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (_context5.next = 3),
                            Category.findOneAndDelete({ _id: req.params.id })
                          );
                        case 3:
                          if (_context5.sent) {
                            _context5.next = 6;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "category not found." }),
                          );
                        case 6:
                          res
                            .status(200)
                            .json({
                              message: "category deleted successfully.",
                            }),
                            (_context5.next = 12);
                          break;
                        case 9:
                          (_context5.prev = 9),
                            (_context5.t0 = _context5.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to delete the category.",
                              });
                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function deleteCategory(_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })();
        module.exports = {
          createCategory,
          getCategoryById,
          updateCategory,
          deleteCategory,
          getAllCategories,
        };
      },
      7500: (__unused_webpack_module, exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Review = __webpack_require__(7967);
        (exports.addComment = (function () {
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(req, res) {
              var productId, _req$body, user, comment;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                for (;;)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (productId = req.params.productId),
                        (_req$body = req.body),
                        (user = _req$body.user),
                        (comment = _req$body.comment),
                        _req$body.image,
                        new Review({
                          user,
                          product: productId,
                          comment,
                          image: "",
                        })
                          .save()
                          .then(function (review) {
                            res.json({
                              message: "Avis ajouté avec succès",
                              review,
                            });
                          })
                          .catch(function (error) {
                            res
                              .status(500)
                              .json({
                                message: "Erreur lors de l'ajout de l'avis",
                                error,
                              });
                          });
                    case 4:
                    case "end":
                      return _context.stop();
                  }
              }, _callee);
            }),
          );
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()),
          (exports.getAllComments = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var productId;
                return _regeneratorRuntime().wrap(function _callee2$(
                  _context2,
                ) {
                  for (;;)
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        (productId = req.params.productId),
                          Review.find({ product: productId })
                            .populate("user", "Firstname Lastname")
                            .exec()
                            .then(function (reviews) {
                              res.json(reviews);
                            })
                            .catch(function (error) {
                              res
                                .status(500)
                                .json({
                                  message:
                                    "Erreur lors de la récupération des avis",
                                  error,
                                });
                            });
                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                }, _callee2);
              }),
            );
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()),
          (exports.updateComment = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var reviewId, _req$body2, comment, image;
                return _regeneratorRuntime().wrap(function _callee3$(
                  _context3,
                ) {
                  for (;;)
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        (reviewId = req.params.reviewId),
                          (_req$body2 = req.body),
                          (comment = _req$body2.comment),
                          (image = _req$body2.image),
                          Review.findByIdAndUpdate(
                            reviewId,
                            { comment, image },
                            { new: !0 },
                          )
                            .exec()
                            .then(function (updatedReview) {
                              res.json({
                                message: "Rating added",
                                review: updatedReview,
                              });
                            })
                            .catch(function (error) {
                              res
                                .status(500)
                                .json({
                                  message:
                                    "Erreur lors de la mise à jour de l'avis",
                                  error,
                                });
                            });
                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                }, _callee3);
              }),
            );
            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })()),
          (exports.deleteComment = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var reviewId;
                return _regeneratorRuntime().wrap(function _callee4$(
                  _context4,
                ) {
                  for (;;)
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        (reviewId = req.params.reviewId),
                          Review.findByIdAndDelete(reviewId)
                            .exec()
                            .then(function () {
                              res.json({ message: "Rating deleted" });
                            })
                            .catch(function (error) {
                              res
                                .status(500)
                                .json({
                                  message:
                                    "Erreur lors de la suppression de l'avis",
                                  error,
                                });
                            });
                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                }, _callee4);
              }),
            );
            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })());
      },
      7967: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          reviewSchema = new (0, mongoose.Schema)(
            {
              user: { type: String, required: !0 },
              product: { type: String, required: !0 },
              comment: { type: String, required: !0 },
              image: { type: String, required: !1 },
            },
            { timestamps: !0 },
          );
        module.exports = mongoose.model("Review", reviewSchema);
      },
      8461: (module) => {
        "use strict";
        module.exports = require("multer");
      },
      8577: (module) => {
        "use strict";
        module.exports = require("cors");
      },
      9013: (__unused_webpack_module, exports, __webpack_require__) => {
        function _typeof(o) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          _regeneratorRuntime = function _regeneratorRuntime() {
            return e;
          };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      },
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      },
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg,
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction",
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(n, t, e, r, o, a, c) {
          try {
            var i = n[a](c),
              u = i.value;
          } catch (n) {
            return void e(n);
          }
          i.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _asyncToGenerator(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, o) {
              var a = n.apply(t, e);
              function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
              }
              function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
              }
              _next(void 0);
            });
          };
        }
        var Product = __webpack_require__(864),
          Product3D = __webpack_require__(1667);
        (exports.createProduct = (function () {
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(req, res) {
              var newProduct;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return (
                          (_context.prev = 0),
                          (newProduct = new Product(req.body)),
                          (_context.next = 4),
                          newProduct.save()
                        );
                      case 4:
                        res.status(201).json(newProduct), (_context.next = 10);
                        break;
                      case 7:
                        (_context.prev = 7),
                          (_context.t0 = _context.catch(0)),
                          res
                            .status(500)
                            .json({
                              error:
                                "Failed to create the product." + _context.t0,
                            });
                      case 10:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[0, 7]],
              );
            }),
          );
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()),
          (exports.getAllProducts = (function () {
            var _ref2 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2(req, res) {
                var products;
                return _regeneratorRuntime().wrap(
                  function _callee2$(_context2) {
                    for (;;)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          return (
                            (_context2.prev = 0),
                            (_context2.next = 3),
                            Product.find().sort({ createdAt: -1 })
                          );
                        case 3:
                          (products = _context2.sent),
                            res.status(200).json(products),
                            (_context2.next = 10);
                          break;
                        case 7:
                          (_context2.prev = 7),
                            (_context2.t0 = _context2.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to fetch products." });
                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()),
          (exports.getSortedProducts = (function () {
            var _ref3 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3(req, res) {
                var products;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context3) {
                    for (;;)
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          return (
                            (_context3.prev = 0),
                            (_context3.next = 3),
                            Product.find().sort({ sales: -1 })
                          );
                        case 3:
                          (products = _context3.sent),
                            res.status(200).json(products),
                            (_context3.next = 10);
                          break;
                        case 7:
                          (_context3.prev = 7),
                            (_context3.t0 = _context3.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to fetch products." });
                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                  },
                  _callee3,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })()),
          (exports.getProductById = (function () {
            var _ref4 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4(req, res) {
                var product;
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context4) {
                    for (;;)
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          return (
                            (_context4.prev = 0),
                            (_context4.next = 3),
                            Product.findById(req.params.id)
                          );
                        case 3:
                          if ((product = _context4.sent)) {
                            _context4.next = 6;
                            break;
                          }
                          return _context4.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Product not found." }),
                          );
                        case 6:
                          res.status(200).json(product), (_context4.next = 12);
                          break;
                        case 9:
                          (_context4.prev = 9),
                            (_context4.t0 = _context4.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to fetch the product." });
                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                  },
                  _callee4,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })()),
          (exports.updateProduct = (function () {
            var _ref5 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5(req, res) {
                var product;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context5) {
                    for (;;)
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          return (
                            (_context5.prev = 0),
                            (_context5.next = 3),
                            Product.findByIdAndUpdate(req.params.id, req.body, {
                              new: !0,
                            })
                          );
                        case 3:
                          if ((product = _context5.sent)) {
                            _context5.next = 6;
                            break;
                          }
                          return _context5.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Product not found." }),
                          );
                        case 6:
                          res.status(200).json(product), (_context5.next = 12);
                          break;
                        case 9:
                          (_context5.prev = 9),
                            (_context5.t0 = _context5.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to update the product." });
                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })()),
          (exports.deleteProduct = (function () {
            var _ref6 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee6(req, res) {
                return _regeneratorRuntime().wrap(
                  function _callee6$(_context6) {
                    for (;;)
                      switch ((_context6.prev = _context6.next)) {
                        case 0:
                          return (
                            (_context6.prev = 0),
                            (_context6.next = 3),
                            Product.findOneAndDelete({ _id: req.params.id })
                          );
                        case 3:
                          if (_context6.sent) {
                            _context6.next = 6;
                            break;
                          }
                          return _context6.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "Product not found." }),
                          );
                        case 6:
                          res
                            .status(200)
                            .json({ message: "Product deleted successfully." }),
                            (_context6.next = 12);
                          break;
                        case 9:
                          (_context6.prev = 9),
                            (_context6.t0 = _context6.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to delete the product." });
                        case 12:
                        case "end":
                          return _context6.stop();
                      }
                  },
                  _callee6,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x11, _x12) {
              return _ref6.apply(this, arguments);
            };
          })()),
          (exports.getProductsByCategory = (function () {
            var _ref7 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee7(req, res) {
                var category, products;
                return _regeneratorRuntime().wrap(
                  function _callee7$(_context7) {
                    for (;;)
                      switch ((_context7.prev = _context7.next)) {
                        case 0:
                          return (
                            (_context7.prev = 0),
                            (category = req.params.category),
                            (_context7.next = 4),
                            Product.find({ category })
                          );
                        case 4:
                          (products = _context7.sent),
                            res.status(200).json(products),
                            (_context7.next = 11);
                          break;
                        case 8:
                          (_context7.prev = 8),
                            (_context7.t0 = _context7.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to fetch products by category.",
                              });
                        case 11:
                        case "end":
                          return _context7.stop();
                      }
                  },
                  _callee7,
                  null,
                  [[0, 8]],
                );
              }),
            );
            return function (_x13, _x14) {
              return _ref7.apply(this, arguments);
            };
          })()),
          (exports.getProductsByCategoryAndSubcategory = (function () {
            var _ref8 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee8(req, res) {
                var _req$params, category, subCategory, products;
                return _regeneratorRuntime().wrap(
                  function _callee8$(_context8) {
                    for (;;)
                      switch ((_context8.prev = _context8.next)) {
                        case 0:
                          return (
                            (_context8.prev = 0),
                            (_req$params = req.params),
                            (category = _req$params.category),
                            (subCategory = _req$params.subCategory),
                            (_context8.next = 4),
                            Product.find({ category, subCategory })
                          );
                        case 4:
                          if (0 !== (products = _context8.sent).length) {
                            _context8.next = 7;
                            break;
                          }
                          return _context8.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({
                                error:
                                  "No products found for this category and subcategory.",
                              }),
                          );
                        case 7:
                          res.status(200).json(products), (_context8.next = 13);
                          break;
                        case 10:
                          (_context8.prev = 10),
                            (_context8.t0 = _context8.catch(0)),
                            res
                              .status(500)
                              .json({
                                error:
                                  "Failed to fetch products by category and subcategory.",
                              });
                        case 13:
                        case "end":
                          return _context8.stop();
                      }
                  },
                  _callee8,
                  null,
                  [[0, 10]],
                );
              }),
            );
            return function (_x15, _x16) {
              return _ref8.apply(this, arguments);
            };
          })()),
          (exports.create3DProduct = (function () {
            var _ref9 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee9(req, res) {
                var newProduct;
                return _regeneratorRuntime().wrap(
                  function _callee9$(_context9) {
                    for (;;)
                      switch ((_context9.prev = _context9.next)) {
                        case 0:
                          return (
                            (_context9.prev = 0),
                            (newProduct = new Product3D(req.body)),
                            (_context9.next = 4),
                            newProduct.save()
                          );
                        case 4:
                          res.status(201).json(newProduct),
                            (_context9.next = 10);
                          break;
                        case 7:
                          (_context9.prev = 7),
                            (_context9.t0 = _context9.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to create the 3D product.",
                              });
                        case 10:
                        case "end":
                          return _context9.stop();
                      }
                  },
                  _callee9,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function (_x17, _x18) {
              return _ref9.apply(this, arguments);
            };
          })()),
          (exports.get3DProductById = (function () {
            var _ref10 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee10(req, res) {
                var product;
                return _regeneratorRuntime().wrap(
                  function _callee10$(_context10) {
                    for (;;)
                      switch ((_context10.prev = _context10.next)) {
                        case 0:
                          return (
                            (_context10.prev = 0),
                            (_context10.next = 3),
                            Product3D.findById(req.params.id)
                          );
                        case 3:
                          if ((product = _context10.sent)) {
                            _context10.next = 6;
                            break;
                          }
                          return _context10.abrupt(
                            "return",
                            res
                              .status(404)
                              .json({ error: "3D Product not found." }),
                          );
                        case 6:
                          res.status(200).json(product), (_context10.next = 12);
                          break;
                        case 9:
                          (_context10.prev = 9),
                            (_context10.t0 = _context10.catch(0)),
                            res
                              .status(500)
                              .json({
                                error: "Failed to fetch the 3D product.",
                              });
                        case 12:
                        case "end":
                          return _context10.stop();
                      }
                  },
                  _callee10,
                  null,
                  [[0, 9]],
                );
              }),
            );
            return function (_x19, _x20) {
              return _ref10.apply(this, arguments);
            };
          })()),
          (exports.getAll3DProducts = (function () {
            var _ref11 = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee11(req, res) {
                var prd;
                return _regeneratorRuntime().wrap(
                  function _callee11$(_context11) {
                    for (;;)
                      switch ((_context11.prev = _context11.next)) {
                        case 0:
                          return (
                            (_context11.prev = 0),
                            (_context11.next = 3),
                            Product3D.find({ prodId: req.params.id })
                          );
                        case 3:
                          (prd = _context11.sent),
                            res.status(200).json(prd),
                            (_context11.next = 10);
                          break;
                        case 7:
                          (_context11.prev = 7),
                            (_context11.t0 = _context11.catch(0)),
                            res
                              .status(500)
                              .json({ error: "Failed to fetch 3D products." });
                        case 10:
                        case "end":
                          return _context11.stop();
                      }
                  },
                  _callee11,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function (_x21, _x22) {
              return _ref11.apply(this, arguments);
            };
          })());
      },
      9905: (module, __unused_webpack_exports, __webpack_require__) => {
        var mongoose = __webpack_require__(6037),
          SubCategorytSchema = new mongoose.Schema(
            { title: { type: String, required: !0 } },
            { timestamps: !0 },
          );
        module.exports = mongoose.model("SubCategory", SubCategorytSchema);
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = (__webpack_module_cache__[moduleId] = { exports: {} });
    return (
      __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__,
      ),
      module.exports
    );
  }
  var express = __webpack_require__(7252),
    mongoose = __webpack_require__(6037),
    morgan = __webpack_require__(2096),
    bodyParser = __webpack_require__(3268),
    cors = __webpack_require__(8577);
  __webpack_require__(818).config();
  var app = express();
  (process.env.PORT && process.env.DB_HOST) ||
    (console.error(
      "❌ ERREUR: Les variables d'environnement ne sont pas chargées correctement.",
    ),
    process.exit(1)),
    app.use(morgan("dev")),
    app.use(bodyParser.urlencoded({ extended: !0 })),
    app.use(bodyParser.json()),
    app.use(cors({ origin: "*" }));
  [
    "uploads/images",
    "uploads/product_images",
    "uploads/color_images",
    "uploads/color_files",
    "uploads/suppliers",
    "uploads/reviews",
    "uploads/category_image",
    "uploads/subcategory_image",
  ].forEach(function (path) {
    return app.use("/".concat(path), express.static(path));
  }),
    mongoose
      .connect(
        "mongodb://"
          .concat(process.env.DB_HOST, ":")
          .concat(process.env.DB_PORT, "/indar-deco"),
      )
      .then(function () {
        return console.log("✅ DB Connected");
      })
      .catch(function (err) {
        console.error("❌ ERREUR: Impossible de se connecter à MongoDB", err),
          process.exit(1);
      });
  var AuthRoute = __webpack_require__(1177),
    cartRoute = __webpack_require__(1889),
    listRoute = __webpack_require__(5604),
    prodRoute = __webpack_require__(4804),
    RatingRoutes = __webpack_require__(5422),
    CategoryRoutes = __webpack_require__(6151),
    SubCategoryRoutes = __webpack_require__(3421),
    SupplierRoutes = __webpack_require__(3093),
    PromotionRoutes = __webpack_require__(7146),
    ReviewRoute = __webpack_require__(3003),
    SalesRoutes = __webpack_require__(5727),
    RecRoutes = __webpack_require__(1372),
    NotifRoutes = __webpack_require__(1707);
  app.use("/api", AuthRoute),
    app.use("/api", cartRoute),
    app.use("/api", listRoute),
    app.use("/api", prodRoute),
    app.use("/api", RatingRoutes),
    app.use("/api", CategoryRoutes),
    app.use("/api", SubCategoryRoutes),
    app.use("/api", SupplierRoutes),
    app.use("/api", PromotionRoutes),
    app.use("/api", ReviewRoute),
    app.use("/api", SalesRoutes),
    app.use("/api", RecRoutes),
    app.use("/api", NotifRoutes),
    app.listen(process.env.PORT, function () {
      console.log(
        "🚀 Serveur en cours d'exécution sur le port ".concat(process.env.PORT),
      );
    });
})();
