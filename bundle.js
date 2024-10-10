!function () {
    "use strict";

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
    }

    function e(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function n(t) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(o), !0).forEach((function (e) {
                r(t, e, o[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }))
        }
        return t
    }

    function r(e, n, r) {
        return (n = function (e) {
            var n = function (e, n) {
                if ("object" !== t(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(e, "string");
                    if ("object" !== t(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === t(n) ? n : String(n)
        }(n)) in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = r, e
    }

    function o(t, e) {
        if (null != t) if ("string" == typeof t || "number" == typeof t) e.push(t.toString()); else if (Array.isArray(t)) for (var n = 0; n < t.length; n++) o(t[n], e); else e.push(t)
    }

    function i(t, e) {
        for (var r = [], i = arguments.length, c = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++) c[u - 2] = arguments[u];
        return o(c, r), "function" == typeof t ? t(n(n({}, e), {}, {children: r})) : {tag: t, props: e, children: r}
    }

    function c() {
    }

    function u() {
        var t = new Date;
        return t.setHours(0, 0, 0, 0, 0), t
    }

    var a = ["#eee", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];

    function l(t) {
        return t.count ? t.count > 3 ? a[4] : t.count > 2 ? a[3] : t.count > 1 ? a[2] : a[1] : a[0]
    }

    function f(t) {
        return t > 9 ? "".concat(t) : "0".concat(t)
    }

    function s(t) {
        var e = t.getFullYear(), n = t.getMonth() + 1, r = t.getDate();
        return "".concat(e, "-").concat(f(n), "-").concat(f(r))
    }

    function p(t) {
        var e = t.values, n = t.size, r = t.space, o = t.padX, c = t.padY, u = t.colorFun, a = t.onClick, l = t.onHover;
        return i("g", null, e.map((function (t, e) {
            var f = n + 2 * r, p = o + e * f + r, y = c + r;
            return i("g", null, t.map((function (t) {
                return i("rect", {
                    class: "cg-day",
                    x: p,
                    y: t.day * f + y,
                    width: n,
                    height: n,
                    fill: u(t),
                    "data-count": t.count,
                    "data-date": s(t.date),
                    onClick: function () {
                        return a(t)
                    },
                    onMouseOver: function () {
                        return l(t)
                    }
                })
            })))
        })))
    }

    var y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function b(t) {
        var e = t.styles, n = t.values, r = t.size, o = t.space, c = t.padX, u = t.padY, a = r + 2 * o, l = 2 * a,
            f = [];
        return n.forEach((function (t, e) {
            t.forEach((function (t, n) {
                if (0 === n && 0 === t.day) {
                    var r = t.date.getMonth(), i = e * a + c + o, u = f.slice(-1).pop();
                    (!u || r !== u.month && i - u.x > l) && f.push({month: r, x: i})
                }
            }))
        })), i("g", null, f.map((function (t, n) {
            return i("text", {key: n, x: t.x, y: u / 2, style: e.text}, y[t.month])
        })))
    }

    function v(t) {
        var e = t.styles, n = t.size, r = t.space, o = t.padX, c = t.padY, u = n + 2 * r, a = u / 2;
        return i("g", null, [{v: "Mon", y: c + 1 * u + a}, {v: "Wed", y: c + 3 * u + a}, {
            v: "Fri",
            y: c + 5 * u + a
        }].map((function (t, n) {
            return i("text", {key: n, x: o / 2, y: t.y, style: e.text2}, t.v)
        })))
    }

    function d(t) {
        return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, d(t)
    }

    function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function h(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? m(Object(n), !0).forEach((function (e) {
                g(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function g(t, e, n) {
        return (e = function (t) {
            var e = function (t, e) {
                if ("object" !== d(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== d(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === d(e) ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function O(t) {
        for (var e, n, r, o, a, f = t.data, y = void 0 === f ? [] : f, d = t.onClick, m = void 0 === d ? c : d, g = t.colorFun, O = void 0 === g ? l : g, w = t.startDate, j = void 0 === w ? ((e = u()).setFullYear(e.getFullYear() - 1), e) : w, S = t.endDate, P = void 0 === S ? u() : S, D = t.size, E = void 0 === D ? 12 : D, k = t.space, x = void 0 === k ? 1 : k, C = t.padX, F = void 0 === C ? 20 : C, M = t.padY, Y = void 0 === M ? 20 : M, A = t.styleOptions, T = void 0 === A ? {} : A, z = t.onHover, B = void 0 === z ? c : z, H = [], I = (n = j, r = P, o = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()), a = Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()), Math.floor((a - o) / 864e5)), L = y.reduce((function (t, e) {
            return t[e.date] = e.count, t
        }), {}), N = 0, X = 0; X <= I; X += 1) {
            var J = new Date(j);
            J.setDate(J.getDate() + X);
            var R = J.getDay(), U = L[s(J)] || 0;
            (0 === R && 0 !== X || 0 === X) && (H.push([]), N += 1), H[N - 1].push({count: U, date: J, day: R})
        }
        var q = E + 2 * x, W = N * q + 2 * F, G = 7 * q + Y + 10, K = "0 0 ".concat(W, " ").concat(G),
            Q = function (t) {
                var e = t.textColor, n = void 0 === e ? "#959494" : e, r = t.fontSize, o = void 0 === r ? "13px" : r,
                    i = t.fontFamily, c = {
                        // fill: n,
                        "font-size": o,
                        // "font-family": void 0 === i ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' : i,
                        "dominant-baseline": "central"
                    };
                return {text: c, text2: h(h({}, c), {}, {"text-anchor": "middle"})}
            }(T), V = {styles: Q, values: H, size: E, space: x, colorFun: O, padX: F, padY: Y, onClick: m, onHover: B};
        return i("svg", {width: W, height: G, viewBox: K}, i("rect", {
            x: 0,
            y: 0,
            width: W,
            height: G,
            fill: "#fff"
        }), i(p, V), i(b, V), i(v, V))
    }

    function w(t) {
        return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, w(t)
    }

    var j = document;

    function S(t, e) {
        var n = t.tag, r = t.props, o = t.children, i = j.createElementNS("http://www.w3.org/2000/svg", n);
        return r && function (t, e) {
            Object.keys(e).forEach((function (n) {
                var r = e[n];
                "style" === n && "object" === w(r) ? Object.keys(r).forEach((function (e) {
                    t.style[e] = r[e]
                })) : "onClick" === n ? "function" == typeof r && t.addEventListener("click", r) : "onMouseOver" === n ? "function" == typeof r && t.addEventListener("mouseover", r) : t.setAttribute(n, r)
            }))
        }(i, r), o.forEach((function (t) {
            i.appendChild("string" == typeof t ? j.createTextNode(t) : S(t, e))
        })), i
    }

    function P(t) {
        return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, P(t)
    }

    function D() {
        return D = Object.assign ? Object.assign.bind() : function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, D.apply(this, arguments)
    }

    function E(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function k(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? E(Object(n), !0).forEach((function (e) {
                x(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function x(t, e, n) {
        return (e = M(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function C(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function F(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, M(r.key), r)
        }
    }

    function M(t) {
        var e = function (t, e) {
            if ("object" !== P(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== P(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" === P(e) ? e : String(e)
    }

    var Y = function () {
        function t(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            C(this, t), this.dom = "string" == typeof e ? document.querySelector(e) : e, this.data = n, this.options = r, this.render()
        }

        var e, n;
        return e = t, (n = [{
            key: "setData", value: function (t) {
                this.data = t, this.render()
            }
        }, {
            key: "setOptions", value: function (t) {
                this.options = k(k({}, this.options), t), this.render()
            }
        }, {
            key: "render", value: function () {
                var t = this.data, e = this.options;
                this.tree && this.dom.removeChild(this.tree), this.tree = S(i(O, D({data: t}, e))), this.dom.appendChild(this.tree)
            }
        }]) && F(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }();

    function A(t) {
        return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, A(t)
    }

    function T(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (void 0, o = function (t, e) {
                if ("object" !== A(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, "string");
                    if ("object" !== A(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(r.key), "symbol" === A(o) ? o : String(o)), r)
        }
        var o
    }

    String.prototype.format || (String.prototype.format = function () {
        var t = arguments;
        return this.replace(/{(\d+)}/g, (function (e, n) {
            return void 0 !== t[n] ? t[n] : e
        }))
    }), new (function () {
        function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.options = e
        }

        var e, n;
        return e = t, (n = [{
            key: "tooltipInit", value: function () {
                for (var t = this, e = document.querySelector(this.options.tooptipId), n = document.getElementsByClassName("cg-day"), r = function (n) {
                    var r = (n = n || window.event).target || n.srcElement, o = r.getBoundingClientRect(),
                        i = r.getAttribute("data-count"), c = r.getAttribute("data-date");
                    e.style.display = "block", e.style.cursor = "pointer", e.textContent = t.options.tooltipFormat.format(c, i);
                    var u = e.getBoundingClientRect().width;
                    e.style.left = "".concat(o.left - u / 2 + 6, "px"), e.style.top = "".concat(o.top - 35, "px")
                }, o = function (t) {
                    t = t || window.event, e.style.display = "none"
                }, i = 0; i < n.length; i++) document.body.addEventListener ? (n[i].addEventListener("mouseover", r, !1), n[i].addEventListener("mouseout", o, !1)) : (n[i].attachEvent("onmouseover", r), n[i].attachEvent("onmouseout", o))
            }
        }, {
            key: "draw", value: function () {
                new Y(this.options.graphId, this.options.graphData, this.options.option), this.tooltipInit(this.options)
            }
        }]) && T(e.prototype, n), Object.defineProperty(e, "prototype", {writable: !1}), t
    }())(graphOption).draw();
    // console.log(graphOption);
}();