(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();
var Oa = {
    exports: {}
},
    Sl = {},
    Da = {
        exports: {}
    },
    M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur = Symbol.for("react.element"),
    Sd = Symbol.for("react.portal"),
    Cd = Symbol.for("react.fragment"),
    Ed = Symbol.for("react.strict_mode"),
    Pd = Symbol.for("react.profiler"),
    Rd = Symbol.for("react.provider"),
    _d = Symbol.for("react.context"),
    Ld = Symbol.for("react.forward_ref"),
    Td = Symbol.for("react.suspense"),
    zd = Symbol.for("react.memo"),
    Md = Symbol.for("react.lazy"),
    ws = Symbol.iterator;

function Fd(e) {
    return e === null || typeof e != "object" ? null : (e = ws && e[ws] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ia = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
},
    $a = Object.assign,
    Aa = {};

function gn(e, t, n) {
    this.props = e, this.context = t, this.refs = Aa, this.updater = n || Ia
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
gn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ua() { }
Ua.prototype = gn.prototype;

function vi(e, t, n) {
    this.props = e, this.context = t, this.refs = Aa, this.updater = n || Ia
}
var xi = vi.prototype = new Ua;
xi.constructor = vi;
$a(xi, gn.prototype);
xi.isPureReactComponent = !0;
var ks = Array.isArray,
    Ba = Object.prototype.hasOwnProperty,
    wi = {
        current: null
    },
    Ha = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Va(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Ba.call(t, r) && !Ha.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: ur,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: wi.current
    }
}

function Od(e, t) {
    return {
        $$typeof: ur,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ki(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ur
}

function Dd(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var Ns = /\/+/g;

function bl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Dd("" + e.key) : t.toString(36)
}

function $r(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ur:
                case Sd:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + bl(i, 0) : r, ks(l) ? (n = "", e != null && (n = e.replace(Ns, "$&/") + "/"), $r(l, t, n, "", function (c) {
        return c
    })) : l != null && (ki(l) && (l = Od(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ns, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", ks(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + bl(o, a);
            i += $r(o, t, n, u, l)
        } else if (u = Fd(e), typeof u == "function")
        for (e = u.call(e), a = 0; !(o = e.next()).done;) o = o.value, u = r + bl(o, a++), i += $r(o, t, n, u, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function wr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return $r(e, r, "", "", function (o) {
        return t.call(n, o, l++)
    }), r
}

function Id(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var de = {
    current: null
},
    Ar = {
        transition: null
    },
    $d = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: Ar,
        ReactCurrentOwner: wi
    };

function Wa() {
    throw Error("act(...) is not supported in production builds of React.")
}
M.Children = {
    map: wr,
    forEach: function (e, t, n) {
        wr(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return wr(e, function () {
            t++
        }), t
    },
    toArray: function (e) {
        return wr(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!ki(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
M.Component = gn;
M.Fragment = Cd;
M.Profiler = Pd;
M.PureComponent = vi;
M.StrictMode = Ed;
M.Suspense = Td;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
M.act = Wa;
M.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = $a({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = wi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) Ba.call(t, u) && !Ha.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: ur,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
M.createContext = function (e) {
    return e = {
        $$typeof: _d,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Rd,
        _context: e
    }, e.Consumer = e
};
M.createElement = Va;
M.createFactory = function (e) {
    var t = Va.bind(null, e);
    return t.type = e, t
};
M.createRef = function () {
    return {
        current: null
    }
};
M.forwardRef = function (e) {
    return {
        $$typeof: Ld,
        render: e
    }
};
M.isValidElement = ki;
M.lazy = function (e) {
    return {
        $$typeof: Md,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Id
    }
};
M.memo = function (e, t) {
    return {
        $$typeof: zd,
        type: e,
        compare: t === void 0 ? null : t
    }
};
M.startTransition = function (e) {
    var t = Ar.transition;
    Ar.transition = {};
    try {
        e()
    } finally {
        Ar.transition = t
    }
};
M.unstable_act = Wa;
M.useCallback = function (e, t) {
    return de.current.useCallback(e, t)
};
M.useContext = function (e) {
    return de.current.useContext(e)
};
M.useDebugValue = function () { };
M.useDeferredValue = function (e) {
    return de.current.useDeferredValue(e)
};
M.useEffect = function (e, t) {
    return de.current.useEffect(e, t)
};
M.useId = function () {
    return de.current.useId()
};
M.useImperativeHandle = function (e, t, n) {
    return de.current.useImperativeHandle(e, t, n)
};
M.useInsertionEffect = function (e, t) {
    return de.current.useInsertionEffect(e, t)
};
M.useLayoutEffect = function (e, t) {
    return de.current.useLayoutEffect(e, t)
};
M.useMemo = function (e, t) {
    return de.current.useMemo(e, t)
};
M.useReducer = function (e, t, n) {
    return de.current.useReducer(e, t, n)
};
M.useRef = function (e) {
    return de.current.useRef(e)
};
M.useState = function (e) {
    return de.current.useState(e)
};
M.useSyncExternalStore = function (e, t, n) {
    return de.current.useSyncExternalStore(e, t, n)
};
M.useTransition = function () {
    return de.current.useTransition()
};
M.version = "18.3.1";
Da.exports = M;
var v = Da.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = v,
    Ud = Symbol.for("react.element"),
    Bd = Symbol.for("react.fragment"),
    Hd = Object.prototype.hasOwnProperty,
    Vd = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Wd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Qa(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Hd.call(t, r) && !Wd.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Ud,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Vd.current
    }
}
Sl.Fragment = Bd;
Sl.jsx = Qa;
Sl.jsxs = Qa;
Oa.exports = Sl;
var s = Oa.exports,
    Ka = {
        exports: {}
    },
    je = {},
    ba = {
        exports: {}
    },
    Ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(E, T) {
        var z = E.length;
        E.push(T);
        e: for (; 0 < z;) {
            var Y = z - 1 >>> 1,
                q = E[Y];
            if (0 < l(q, T)) E[Y] = T, E[z] = q, z = Y;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var T = E[0],
            z = E.pop();
        if (z !== T) {
            E[0] = z;
            e: for (var Y = 0, q = E.length, vr = q >>> 1; Y < vr;) {
                var Pt = 2 * (Y + 1) - 1,
                    Kl = E[Pt],
                    Rt = Pt + 1,
                    xr = E[Rt];
                if (0 > l(Kl, z)) Rt < q && 0 > l(xr, Kl) ? (E[Y] = xr, E[Rt] = z, Y = Rt) : (E[Y] = Kl, E[Pt] = z, Y = Pt);
                else if (Rt < q && 0 > l(xr, z)) E[Y] = xr, E[Rt] = z, Y = Rt;
                else break e
            }
        }
        return T
    }

    function l(E, T) {
        var z = E.sortIndex - T.sortIndex;
        return z !== 0 ? z : E.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function () {
            return i.now() - a
        }
    }
    var u = [],
        c = [],
        f = 1,
        h = null,
        g = 3,
        x = !1,
        y = !1,
        w = !1,
        j = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(E) {
        for (var T = n(c); T !== null;) {
            if (T.callback === null) r(c);
            else if (T.startTime <= E) r(c), T.sortIndex = T.expirationTime, t(u, T);
            else break;
            T = n(c)
        }
    }

    function k(E) {
        if (w = !1, m(E), !y)
            if (n(u) !== null) y = !0, Wl(S);
            else {
                var T = n(c);
                T !== null && Ql(k, T.startTime - E)
            }
    }

    function S(E, T) {
        y = !1, w && (w = !1, p(_), _ = -1), x = !0;
        var z = g;
        try {
            for (m(T), h = n(u); h !== null && (!(h.expirationTime > T) || E && !pe());) {
                var Y = h.callback;
                if (typeof Y == "function") {
                    h.callback = null, g = h.priorityLevel;
                    var q = Y(h.expirationTime <= T);
                    T = e.unstable_now(), typeof q == "function" ? h.callback = q : h === n(u) && r(u), m(T)
                } else r(u);
                h = n(u)
            }
            if (h !== null) var vr = !0;
            else {
                var Pt = n(c);
                Pt !== null && Ql(k, Pt.startTime - T), vr = !1
            }
            return vr
        } finally {
            h = null, g = z, x = !1
        }
    }
    var R = !1,
        P = null,
        _ = -1,
        F = 5,
        L = -1;

    function pe() {
        return !(e.unstable_now() - L < F)
    }

    function kn() {
        if (P !== null) {
            var E = e.unstable_now();
            L = E;
            var T = !0;
            try {
                T = P(!0, E)
            } finally {
                T ? Nn() : (R = !1, P = null)
            }
        } else R = !1
    }
    var Nn;
    if (typeof d == "function") Nn = function () {
        d(kn)
    };
    else if (typeof MessageChannel < "u") {
        var xs = new MessageChannel,
            jd = xs.port2;
        xs.port1.onmessage = kn, Nn = function () {
            jd.postMessage(null)
        }
    } else Nn = function () {
        j(kn, 0)
    };

    function Wl(E) {
        P = E, R || (R = !0, Nn())
    }

    function Ql(E, T) {
        _ = j(function () {
            E(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (E) {
        E.callback = null
    }, e.unstable_continueExecution = function () {
        y || x || (y = !0, Wl(S))
    }, e.unstable_forceFrameRate = function (E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return g
    }, e.unstable_getFirstCallbackNode = function () {
        return n(u)
    }, e.unstable_next = function (E) {
        switch (g) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = g
        }
        var z = g;
        g = T;
        try {
            return E()
        } finally {
            g = z
        }
    }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (E, T) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var z = g;
        g = E;
        try {
            return T()
        } finally {
            g = z
        }
    }, e.unstable_scheduleCallback = function (E, T, z) {
        var Y = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Y + z : Y) : z = Y, E) {
            case 1:
                var q = -1;
                break;
            case 2:
                q = 250;
                break;
            case 5:
                q = 1073741823;
                break;
            case 4:
                q = 1e4;
                break;
            default:
                q = 5e3
        }
        return q = z + q, E = {
            id: f++,
            callback: T,
            priorityLevel: E,
            startTime: z,
            expirationTime: q,
            sortIndex: -1
        }, z > Y ? (E.sortIndex = z, t(c, E), n(u) === null && E === n(c) && (w ? (p(_), _ = -1) : w = !0, Ql(k, z - Y))) : (E.sortIndex = q, t(u, E), y || x || (y = !0, Wl(S))), E
    }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function (E) {
        var T = g;
        return function () {
            var z = g;
            g = T;
            try {
                return E.apply(this, arguments)
            } finally {
                g = z
            }
        }
    }
})(Ya);
ba.exports = Ya;
var Qd = ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd = v,
    Ne = Qd;

function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ga = new Set,
    Qn = {};

function Bt(e, t) {
    un(e, t), un(e + "Capture", t)
}

function un(e, t) {
    for (Qn[e] = t, e = 0; e < t.length; e++) Ga.add(t[e])
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    No = Object.prototype.hasOwnProperty,
    bd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    js = {},
    Ss = {};

function Yd(e) {
    return No.call(Ss, e) ? !0 : No.call(js, e) ? !1 : bd.test(e) ? Ss[e] = !0 : (js[e] = !0, !1)
}

function Gd(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Xd(e, t, n, r) {
    if (t === null || typeof t > "u" || Gd(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function fe(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    le[e] = new fe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (e) {
    var t = e[0];
    le[t] = new fe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    le[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    le[e] = new fe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    le[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    le[e] = new fe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    le[e] = new fe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    le[e] = new fe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    le[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ni = /[\-:]([a-z])/g;

function ji(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Ni, ji);
    le[t] = new fe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Ni, ji);
    le[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ni, ji);
    le[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
le.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Si(e, t, n, r) {
    var l = le.hasOwnProperty(t) ? le[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Xd(t, n, l, r) && (n = null), r || l === null ? Yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rt = Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    kr = Symbol.for("react.element"),
    Wt = Symbol.for("react.portal"),
    Qt = Symbol.for("react.fragment"),
    Ci = Symbol.for("react.strict_mode"),
    jo = Symbol.for("react.profiler"),
    Xa = Symbol.for("react.provider"),
    Ja = Symbol.for("react.context"),
    Ei = Symbol.for("react.forward_ref"),
    So = Symbol.for("react.suspense"),
    Co = Symbol.for("react.suspense_list"),
    Pi = Symbol.for("react.memo"),
    it = Symbol.for("react.lazy"),
    Za = Symbol.for("react.offscreen"),
    Cs = Symbol.iterator;

function jn(e) {
    return e === null || typeof e != "object" ? null : (e = Cs && e[Cs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var K = Object.assign,
    Yl;

function zn(e) {
    if (Yl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Yl = t && t[1] || ""
    }
    return `
` + Yl + e
}
var Gl = !1;

function Xl(e, t) {
    if (!e || Gl) return "";
    Gl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }, Object.defineProperty(t.prototype, "props", {
                set: function () {
                    throw Error()
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (l[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--, a--, 0 > a || l[i] !== o[a]) {
                                var u = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Gl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? zn(e) : ""
}

function Jd(e) {
    switch (e.tag) {
        case 5:
            return zn(e.type);
        case 16:
            return zn("Lazy");
        case 13:
            return zn("Suspense");
        case 19:
            return zn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Xl(e.type, !1), e;
        case 11:
            return e = Xl(e.type.render, !1), e;
        case 1:
            return e = Xl(e.type, !0), e;
        default:
            return ""
    }
}

function Eo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Qt:
            return "Fragment";
        case Wt:
            return "Portal";
        case jo:
            return "Profiler";
        case Ci:
            return "StrictMode";
        case So:
            return "Suspense";
        case Co:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ja:
            return (e.displayName || "Context") + ".Consumer";
        case Xa:
            return (e._context.displayName || "Context") + ".Provider";
        case Ei:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Pi:
            return t = e.displayName || null, t !== null ? t : Eo(e.type) || "Memo";
        case it:
            t = e._payload, e = e._init;
            try {
                return Eo(e(t))
            } catch { }
    }
    return null
}

function Zd(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Eo(t);
        case 8:
            return t === Ci ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function kt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function qa(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function qd(e) {
    var t = qa(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return l.call(this)
            },
            set: function (i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (i) {
                r = "" + i
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Nr(e) {
    e._valueTracker || (e._valueTracker = qd(e))
}

function eu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = qa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function qr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Po(e, t) {
    var n = t.checked;
    return K({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Es(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = kt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function tu(e, t) {
    t = t.checked, t != null && Si(e, "checked", t, !1)
}

function Ro(e, t) {
    tu(e, t);
    var n = kt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? _o(e, t.type, n) : t.hasOwnProperty("defaultValue") && _o(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ps(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function _o(e, t, n) {
    (t !== "number" || qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Mn = Array.isArray;

function nn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function Lo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return K({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Rs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(N(92));
            if (Mn(n)) {
                if (1 < n.length) throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: kt(n)
    }
}

function nu(e, t) {
    var n = kt(t.value),
        r = kt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function _s(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ru(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function To(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ru(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var jr, lu = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (jr = jr || document.createElement("div"), jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Kn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
},
    ef = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function (e) {
    ef.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Dn[t] = Dn[e]
    })
});

function ou(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dn.hasOwnProperty(e) && Dn[e] ? ("" + t).trim() : t + "px"
}

function iu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = ou(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var tf = K({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function zo(e, t) {
    if (t) {
        if (tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(N(62))
    }
}

function Mo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Fo = null;

function Ri(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Oo = null,
    rn = null,
    ln = null;

function Ls(e) {
    if (e = fr(e)) {
        if (typeof Oo != "function") throw Error(N(280));
        var t = e.stateNode;
        t && (t = _l(t), Oo(e.stateNode, e.type, t))
    }
}

function su(e) {
    rn ? ln ? ln.push(e) : ln = [e] : rn = e
}

function au() {
    if (rn) {
        var e = rn,
            t = ln;
        if (ln = rn = null, Ls(e), t)
            for (e = 0; e < t.length; e++) Ls(t[e])
    }
}

function uu(e, t) {
    return e(t)
}

function cu() { }
var Jl = !1;

function du(e, t, n) {
    if (Jl) return e(t, n);
    Jl = !0;
    try {
        return uu(e, t, n)
    } finally {
        Jl = !1, (rn !== null || ln !== null) && (cu(), au())
    }
}

function bn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = _l(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(N(231, t, typeof n));
    return n
}
var Do = !1;
if (Ze) try {
    var Sn = {};
    Object.defineProperty(Sn, "passive", {
        get: function () {
            Do = !0
        }
    }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn)
} catch {
    Do = !1
}

function nf(e, t, n, r, l, o, i, a, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (f) {
        this.onError(f)
    }
}
var In = !1,
    el = null,
    tl = !1,
    Io = null,
    rf = {
        onError: function (e) {
            In = !0, el = e
        }
    };

function lf(e, t, n, r, l, o, i, a, u) {
    In = !1, el = null, nf.apply(rf, arguments)
}

function of(e, t, n, r, l, o, i, a, u) {
    if (lf.apply(this, arguments), In) {
        if (In) {
            var c = el;
            In = !1, el = null
        } else throw Error(N(198));
        tl || (tl = !0, Io = c)
    }
}

function Ht(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function fu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ts(e) {
    if (Ht(e) !== e) throw Error(N(188))
}

function sf(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ht(e), t === null) throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Ts(l), e;
                if (o === r) return Ts(l), t;
                o = o.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, a = l.child; a;) {
                if (a === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (a === r) {
                    i = !0, r = l, n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a;) {
                    if (a === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (a === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(N(189))
            }
        }
        if (n.alternate !== r) throw Error(N(190))
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t
}

function pu(e) {
    return e = sf(e), e !== null ? mu(e) : null
}

function mu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = mu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var hu = Ne.unstable_scheduleCallback,
    zs = Ne.unstable_cancelCallback,
    af = Ne.unstable_shouldYield,
    uf = Ne.unstable_requestPaint,
    G = Ne.unstable_now,
    cf = Ne.unstable_getCurrentPriorityLevel,
    _i = Ne.unstable_ImmediatePriority,
    gu = Ne.unstable_UserBlockingPriority,
    nl = Ne.unstable_NormalPriority,
    df = Ne.unstable_LowPriority,
    yu = Ne.unstable_IdlePriority,
    Cl = null,
    He = null;

function ff(e) {
    if (He && typeof He.onCommitFiberRoot == "function") try {
        He.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128)
    } catch { }
}
var Oe = Math.clz32 ? Math.clz32 : hf,
    pf = Math.log,
    mf = Math.LN2;

function hf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pf(e) / mf | 0) | 0
}
var Sr = 64,
    Cr = 4194304;

function Fn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function rl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~l;
        a !== 0 ? r = Fn(a) : (o &= i, o !== 0 && (r = Fn(o)))
    } else i = n & ~l, i !== 0 ? r = Fn(i) : o !== 0 && (r = Fn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function gf(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function yf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Oe(o),
            a = 1 << i,
            u = l[i];
        u === -1 ? (!(a & n) || a & r) && (l[i] = gf(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function $o(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function vu() {
    var e = Sr;
    return Sr <<= 1, !(Sr & 4194240) && (Sr = 64), e
}

function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function cr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n
}

function vf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Oe(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function Li(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Oe(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var I = 0;

function xu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var wu, Ti, ku, Nu, ju, Ao = !1,
    Er = [],
    ft = null,
    pt = null,
    mt = null,
    Yn = new Map,
    Gn = new Map,
    at = [],
    xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ms(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            ft = null;
            break;
        case "dragenter":
        case "dragleave":
            pt = null;
            break;
        case "mouseover":
        case "mouseout":
            mt = null;
            break;
        case "pointerover":
        case "pointerout":
            Yn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Gn.delete(t.pointerId)
    }
}

function Cn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = fr(t), t !== null && Ti(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function wf(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return ft = Cn(ft, e, t, n, r, l), !0;
        case "dragenter":
            return pt = Cn(pt, e, t, n, r, l), !0;
        case "mouseover":
            return mt = Cn(mt, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return Yn.set(o, Cn(Yn.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Gn.set(o, Cn(Gn.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Su(e) {
    var t = Tt(e.target);
    if (t !== null) {
        var n = Ht(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = fu(n), t !== null) {
                    e.blockedOn = t, ju(e.priority, function () {
                        ku(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ur(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Fo = r, n.target.dispatchEvent(r), Fo = null
        } else return t = fr(n), t !== null && Ti(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Fs(e, t, n) {
    Ur(e) && n.delete(t)
}

function kf() {
    Ao = !1, ft !== null && Ur(ft) && (ft = null), pt !== null && Ur(pt) && (pt = null), mt !== null && Ur(mt) && (mt = null), Yn.forEach(Fs), Gn.forEach(Fs)
}

function En(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ao || (Ao = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, kf)))
}

function Xn(e) {
    function t(l) {
        return En(l, e)
    }
    if (0 < Er.length) {
        En(Er[0], e);
        for (var n = 1; n < Er.length; n++) {
            var r = Er[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ft !== null && En(ft, e), pt !== null && En(pt, e), mt !== null && En(mt, e), Yn.forEach(t), Gn.forEach(t), n = 0; n < at.length; n++) r = at[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < at.length && (n = at[0], n.blockedOn === null);) Su(n), n.blockedOn === null && at.shift()
}
var on = rt.ReactCurrentBatchConfig,
    ll = !0;

function Nf(e, t, n, r) {
    var l = I,
        o = on.transition;
    on.transition = null;
    try {
        I = 1, zi(e, t, n, r)
    } finally {
        I = l, on.transition = o
    }
}

function jf(e, t, n, r) {
    var l = I,
        o = on.transition;
    on.transition = null;
    try {
        I = 4, zi(e, t, n, r)
    } finally {
        I = l, on.transition = o
    }
}

function zi(e, t, n, r) {
    if (ll) {
        var l = Uo(e, t, n, r);
        if (l === null) ao(e, t, r, ol, n), Ms(e, r);
        else if (wf(l, e, t, n, r)) r.stopPropagation();
        else if (Ms(e, r), t & 4 && -1 < xf.indexOf(e)) {
            for (; l !== null;) {
                var o = fr(l);
                if (o !== null && wu(o), o = Uo(e, t, n, r), o === null && ao(e, t, r, ol, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else ao(e, t, r, null, n)
    }
}
var ol = null;

function Uo(e, t, n, r) {
    if (ol = null, e = Ri(r), e = Tt(e), e !== null)
        if (t = Ht(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = fu(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
    return ol = e, null
}

function Cu(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (cf()) {
                case _i:
                    return 1;
                case gu:
                    return 4;
                case nl:
                case df:
                    return 16;
                case yu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var ct = null,
    Mi = null,
    Br = null;

function Eu() {
    if (Br) return Br;
    var e, t = Mi,
        n = t.length,
        r, l = "value" in ct ? ct.value : ct.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return Br = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Hr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Pr() {
    return !0
}

function Os() {
    return !1
}

function Se(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pr : Os, this.isPropagationStopped = Os, this
    }
    return K(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pr)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pr)
        },
        persist: function () { },
        isPersistent: Pr
    }), t
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
},
    Fi = Se(yn),
    dr = K({}, yn, {
        view: 0,
        detail: 0
    }),
    Sf = Se(dr),
    ql, eo, Pn, El = K({}, dr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Oi,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (ql = e.screenX - Pn.screenX, eo = e.screenY - Pn.screenY) : eo = ql = 0, Pn = e), ql)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : eo
        }
    }),
    Ds = Se(El),
    Cf = K({}, El, {
        dataTransfer: 0
    }),
    Ef = Se(Cf),
    Pf = K({}, dr, {
        relatedTarget: 0
    }),
    to = Se(Pf),
    Rf = K({}, yn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    _f = Se(Rf),
    Lf = K({}, yn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Tf = Se(Lf),
    zf = K({}, yn, {
        data: 0
    }),
    Is = Se(zf),
    Mf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Ff = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Of = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Df(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Of[e]) ? !!t[e] : !1
}

function Oi() {
    return Df
}
var If = K({}, dr, {
    key: function (e) {
        if (e.key) {
            var t = Mf[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Hr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ff[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Oi,
    charCode: function (e) {
        return e.type === "keypress" ? Hr(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Hr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}),
    $f = Se(If),
    Af = K({}, El, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    $s = Se(Af),
    Uf = K({}, dr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Oi
    }),
    Bf = Se(Uf),
    Hf = K({}, yn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Vf = Se(Hf),
    Wf = K({}, El, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Qf = Se(Wf),
    Kf = [9, 13, 27, 32],
    Di = Ze && "CompositionEvent" in window,
    $n = null;
Ze && "documentMode" in document && ($n = document.documentMode);
var bf = Ze && "TextEvent" in window && !$n,
    Pu = Ze && (!Di || $n && 8 < $n && 11 >= $n),
    As = " ",
    Us = !1;

function Ru(e, t) {
    switch (e) {
        case "keyup":
            return Kf.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function _u(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Kt = !1;

function Yf(e, t) {
    switch (e) {
        case "compositionend":
            return _u(t);
        case "keypress":
            return t.which !== 32 ? null : (Us = !0, As);
        case "textInput":
            return e = t.data, e === As && Us ? null : e;
        default:
            return null
    }
}

function Gf(e, t) {
    if (Kt) return e === "compositionend" || !Di && Ru(e, t) ? (e = Eu(), Br = Mi = ct = null, Kt = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Pu && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Xf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Bs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xf[e.type] : t === "textarea"
}

function Lu(e, t, n, r) {
    su(r), t = il(t, "onChange"), 0 < t.length && (n = new Fi("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var An = null,
    Jn = null;

function Jf(e) {
    Bu(e, 0)
}

function Pl(e) {
    var t = Gt(e);
    if (eu(t)) return e
}

function Zf(e, t) {
    if (e === "change") return t
}
var Tu = !1;
if (Ze) {
    var no;
    if (Ze) {
        var ro = "oninput" in document;
        if (!ro) {
            var Hs = document.createElement("div");
            Hs.setAttribute("oninput", "return;"), ro = typeof Hs.oninput == "function"
        }
        no = ro
    } else no = !1;
    Tu = no && (!document.documentMode || 9 < document.documentMode)
}

function Vs() {
    An && (An.detachEvent("onpropertychange", zu), Jn = An = null)
}

function zu(e) {
    if (e.propertyName === "value" && Pl(Jn)) {
        var t = [];
        Lu(t, Jn, e, Ri(e)), du(Jf, t)
    }
}

function qf(e, t, n) {
    e === "focusin" ? (Vs(), An = t, Jn = n, An.attachEvent("onpropertychange", zu)) : e === "focusout" && Vs()
}

function ep(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Pl(Jn)
}

function tp(e, t) {
    if (e === "click") return Pl(t)
}

function np(e, t) {
    if (e === "input" || e === "change") return Pl(t)
}

function rp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ie = typeof Object.is == "function" ? Object.is : rp;

function Zn(e, t) {
    if (Ie(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!No.call(t, l) || !Ie(e[l], t[l])) return !1
    }
    return !0
}

function Ws(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Qs(e, t) {
    var n = Ws(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ws(n)
    }
}

function Mu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Fu() {
    for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = qr(e.document)
    }
    return t
}

function Ii(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function lp(e) {
    var t = Fu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Mu(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ii(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Qs(n, o);
                var i = Qs(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var op = Ze && "documentMode" in document && 11 >= document.documentMode,
    bt = null,
    Bo = null,
    Un = null,
    Ho = !1;

function Ks(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho || bt == null || bt !== qr(r) || (r = bt, "selectionStart" in r && Ii(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Un && Zn(Un, r) || (Un = r, r = il(Bo, "onSelect"), 0 < r.length && (t = new Fi("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = bt)))
}

function Rr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Yt = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionend: Rr("Transition", "TransitionEnd")
},
    lo = {},
    Ou = {};
Ze && (Ou = document.createElement("div").style, "AnimationEvent" in window || (delete Yt.animationend.animation, delete Yt.animationiteration.animation, delete Yt.animationstart.animation), "TransitionEvent" in window || delete Yt.transitionend.transition);

function Rl(e) {
    if (lo[e]) return lo[e];
    if (!Yt[e]) return e;
    var t = Yt[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ou) return lo[e] = t[n];
    return e
}
var Du = Rl("animationend"),
    Iu = Rl("animationiteration"),
    $u = Rl("animationstart"),
    Au = Rl("transitionend"),
    Uu = new Map,
    bs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function jt(e, t) {
    Uu.set(e, t), Bt(t, [e])
}
for (var oo = 0; oo < bs.length; oo++) {
    var io = bs[oo],
        ip = io.toLowerCase(),
        sp = io[0].toUpperCase() + io.slice(1);
    jt(ip, "on" + sp)
}
jt(Du, "onAnimationEnd");
jt(Iu, "onAnimationIteration");
jt($u, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(Au, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
Bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var On = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    ap = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));

function Ys(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, of(r, t, void 0, e), e.currentTarget = null
}

function Bu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        u = a.instance,
                        c = a.currentTarget;
                    if (a = a.listener, u !== o && l.isPropagationStopped()) break e;
                    Ys(l, a, c), o = u
                } else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i], u = a.instance, c = a.currentTarget, a = a.listener, u !== o && l.isPropagationStopped()) break e;
                    Ys(l, a, c), o = u
                }
        }
    }
    if (tl) throw e = Io, tl = !1, Io = null, e
}

function U(e, t) {
    var n = t[bo];
    n === void 0 && (n = t[bo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Hu(t, e, 2, !1), n.add(r))
}

function so(e, t, n) {
    var r = 0;
    t && (r |= 4), Hu(n, e, r, t)
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);

function qn(e) {
    if (!e[_r]) {
        e[_r] = !0, Ga.forEach(function (n) {
            n !== "selectionchange" && (ap.has(n) || so(n, !1, e), so(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_r] || (t[_r] = !0, so("selectionchange", !1, t))
    }
}

function Hu(e, t, n, r) {
    switch (Cu(t)) {
        case 1:
            var l = Nf;
            break;
        case 4:
            l = jf;
            break;
        default:
            l = zi
    }
    n = l.bind(null, t, n, e), l = void 0, !Do || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function ao(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var u = i.tag;
                    if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    i = i.return
                }
            for (; a !== null;) {
                if (i = Tt(a), i === null) return;
                if (u = i.tag, u === 5 || u === 6) {
                    r = o = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    du(function () {
        var c = o,
            f = Ri(n),
            h = [];
        e: {
            var g = Uu.get(e);
            if (g !== void 0) {
                var x = Fi,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Hr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = $f;
                        break;
                    case "focusin":
                        y = "focus", x = to;
                        break;
                    case "focusout":
                        y = "blur", x = to;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = to;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = Ds;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = Ef;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = Bf;
                        break;
                    case Du:
                    case Iu:
                    case $u:
                        x = _f;
                        break;
                    case Au:
                        x = Vf;
                        break;
                    case "scroll":
                        x = Sf;
                        break;
                    case "wheel":
                        x = Qf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = Tf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = $s
                }
                var w = (t & 4) !== 0,
                    j = !w && e === "scroll",
                    p = w ? g !== null ? g + "Capture" : null : g;
                w = [];
                for (var d = c, m; d !== null;) {
                    m = d;
                    var k = m.stateNode;
                    if (m.tag === 5 && k !== null && (m = k, p !== null && (k = bn(d, p), k != null && w.push(er(d, k, m)))), j) break;
                    d = d.return
                }
                0 < w.length && (g = new x(g, y, null, n, f), h.push({
                    event: g,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", g && n !== Fo && (y = n.relatedTarget || n.fromElement) && (Tt(y) || y[qe])) break e;
                if ((x || g) && (g = f.window === f ? f : (g = f.ownerDocument) ? g.defaultView || g.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = c, y = y ? Tt(y) : null, y !== null && (j = Ht(y), y !== j || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = c), x !== y)) {
                    if (w = Ds, k = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = $s, k = "onPointerLeave", p = "onPointerEnter", d = "pointer"), j = x == null ? g : Gt(x), m = y == null ? g : Gt(y), g = new w(k, d + "leave", x, n, f), g.target = j, g.relatedTarget = m, k = null, Tt(f) === c && (w = new w(p, d + "enter", y, n, f), w.target = m, w.relatedTarget = j, k = w), j = k, x && y) t: {
                        for (w = x, p = y, d = 0, m = w; m; m = Vt(m)) d++;
                        for (m = 0, k = p; k; k = Vt(k)) m++;
                        for (; 0 < d - m;) w = Vt(w),
                            d--;
                        for (; 0 < m - d;) p = Vt(p),
                            m--;
                        for (; d--;) {
                            if (w === p || p !== null && w === p.alternate) break t;
                            w = Vt(w), p = Vt(p)
                        }
                        w = null
                    }
                    else w = null;
                    x !== null && Gs(h, g, x, w, !1), y !== null && j !== null && Gs(h, j, y, w, !0)
                }
            }
            e: {
                if (g = c ? Gt(c) : window, x = g.nodeName && g.nodeName.toLowerCase(), x === "select" || x === "input" && g.type === "file") var S = Zf;
                else if (Bs(g))
                    if (Tu) S = np;
                    else {
                        S = ep;
                        var R = qf
                    }
                else (x = g.nodeName) && x.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (S = tp);
                if (S && (S = S(e, c))) {
                    Lu(h, S, n, f);
                    break e
                }
                R && R(e, g, c),
                    e === "focusout" && (R = g._wrapperState) && R.controlled && g.type === "number" && _o(g, "number", g.value)
            }
            switch (R = c ? Gt(c) : window, e) {
                case "focusin":
                    (Bs(R) || R.contentEditable === "true") && (bt = R, Bo = c, Un = null);
                    break;
                case "focusout":
                    Un = Bo = bt = null;
                    break;
                case "mousedown":
                    Ho = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ho = !1, Ks(h, n, f);
                    break;
                case "selectionchange":
                    if (op) break;
                case "keydown":
                case "keyup":
                    Ks(h, n, f)
            }
            var P;
            if (Di) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else Kt ? Ru(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart"); _ && (Pu && n.locale !== "ko" && (Kt || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Kt && (P = Eu()) : (ct = f, Mi = "value" in ct ? ct.value : ct.textContent, Kt = !0)), R = il(c, _), 0 < R.length && (_ = new Is(_, e, null, n, f), h.push({
                event: _,
                listeners: R
            }), P ? _.data = P : (P = _u(n), P !== null && (_.data = P)))),
                (P = bf ? Yf(e, n) : Gf(e, n)) && (c = il(c, "onBeforeInput"), 0 < c.length && (f = new Is("onBeforeInput", "beforeinput", null, n, f), h.push({
                    event: f,
                    listeners: c
                }), f.data = P))
        }
        Bu(h, t)
    })
}

function er(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function il(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = bn(e, n), o != null && r.unshift(er(e, o, l)), o = bn(e, t), o != null && r.push(er(e, o, l))), e = e.return
    }
    return r
}

function Vt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Gs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            c = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && c !== null && (a = c, l ? (u = bn(n, o), u != null && i.unshift(er(n, u, a))) : l || (u = bn(n, o), u != null && i.push(er(n, u, a)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var up = /\r\n?/g,
    cp = /\u0000|\uFFFD/g;

function Xs(e) {
    return (typeof e == "string" ? e : "" + e).replace(up, `
`).replace(cp, "")
}

function Lr(e, t, n) {
    if (t = Xs(t), Xs(e) !== t && n) throw Error(N(425))
}

function sl() { }
var Vo = null,
    Wo = null;

function Qo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
    dp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Js = typeof Promise == "function" ? Promise : void 0,
    fp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Js < "u" ? function (e) {
        return Js.resolve(null).then(e).catch(pp)
    } : Ko;

function pp(e) {
    setTimeout(function () {
        throw e
    })
}

function uo(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Xn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Xn(t)
}

function ht(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Zs(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var vn = Math.random().toString(36).slice(2),
    Be = "__reactFiber$" + vn,
    tr = "__reactProps$" + vn,
    qe = "__reactContainer$" + vn,
    bo = "__reactEvents$" + vn,
    mp = "__reactListeners$" + vn,
    hp = "__reactHandles$" + vn;

function Tt(e) {
    var t = e[Be];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[qe] || n[Be]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Zs(e); e !== null;) {
                    if (n = e[Be]) return n;
                    e = Zs(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function fr(e) {
    return e = e[Be] || e[qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33))
}

function _l(e) {
    return e[tr] || null
}
var Yo = [],
    Xt = -1;

function St(e) {
    return {
        current: e
    }
}

function B(e) {
    0 > Xt || (e.current = Yo[Xt], Yo[Xt] = null, Xt--)
}

function $(e, t) {
    Xt++, Yo[Xt] = e.current, e.current = t
}
var Nt = {},
    ae = St(Nt),
    ge = St(!1),
    Dt = Nt;

function cn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Nt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function ye(e) {
    return e = e.childContextTypes, e != null
}

function al() {
    B(ge), B(ae)
}

function qs(e, t, n) {
    if (ae.current !== Nt) throw Error(N(168));
    $(ae, t), $(ge, n)
}

function Vu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(N(108, Zd(e) || "Unknown", l));
    return K({}, n, r)
}

function ul(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nt, Dt = ae.current, $(ae, e), $(ge, ge.current), !0
}

function ea(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n ? (e = Vu(e, t, Dt), r.__reactInternalMemoizedMergedChildContext = e, B(ge), B(ae), $(ae, e)) : B(ge), $(ge, n)
}
var be = null,
    Ll = !1,
    co = !1;

function Wu(e) {
    be === null ? be = [e] : be.push(e)
}

function gp(e) {
    Ll = !0, Wu(e)
}

function Ct() {
    if (!co && be !== null) {
        co = !0;
        var e = 0,
            t = I;
        try {
            var n = be;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            be = null, Ll = !1
        } catch (l) {
            throw be !== null && (be = be.slice(e + 1)), hu(_i, Ct), l
        } finally {
            I = t, co = !1
        }
    }
    return null
}
var Jt = [],
    Zt = 0,
    cl = null,
    dl = 0,
    Ce = [],
    Ee = 0,
    It = null,
    Ye = 1,
    Ge = "";

function _t(e, t) {
    Jt[Zt++] = dl, Jt[Zt++] = cl, cl = e, dl = t
}

function Qu(e, t, n) {
    Ce[Ee++] = Ye, Ce[Ee++] = Ge, Ce[Ee++] = It, It = e;
    var r = Ye;
    e = Ge;
    var l = 32 - Oe(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Oe(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ye = 1 << 32 - Oe(t) + l | n << l | r, Ge = o + e
    } else Ye = 1 << o | n << l | r, Ge = e
}

function $i(e) {
    e.return !== null && (_t(e, 1), Qu(e, 1, 0))
}

function Ai(e) {
    for (; e === cl;) cl = Jt[--Zt], Jt[Zt] = null, dl = Jt[--Zt], Jt[Zt] = null;
    for (; e === It;) It = Ce[--Ee], Ce[Ee] = null, Ge = Ce[--Ee], Ce[Ee] = null, Ye = Ce[--Ee], Ce[Ee] = null
}
var ke = null,
    we = null,
    H = !1,
    Fe = null;

function Ku(e, t) {
    var n = Pe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ta(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ke = e, we = ht(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ke = e, we = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = It !== null ? {
                id: Ye,
                overflow: Ge
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Pe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ke = e, we = null, !0) : !1;
        default:
            return !1
    }
}

function Go(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Xo(e) {
    if (H) {
        var t = we;
        if (t) {
            var n = t;
            if (!ta(e, t)) {
                if (Go(e)) throw Error(N(418));
                t = ht(n.nextSibling);
                var r = ke;
                t && ta(e, t) ? Ku(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, ke = e)
            }
        } else {
            if (Go(e)) throw Error(N(418));
            e.flags = e.flags & -4097 | 2, H = !1, ke = e
        }
    }
}

function na(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ke = e
}

function Tr(e) {
    if (e !== ke) return !1;
    if (!H) return na(e), H = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qo(e.type, e.memoizedProps)), t && (t = we)) {
        if (Go(e)) throw bu(), Error(N(418));
        for (; t;) Ku(e, t), t = ht(t.nextSibling)
    }
    if (na(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            we = ht(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            we = null
        }
    } else we = ke ? ht(e.stateNode.nextSibling) : null;
    return !0
}

function bu() {
    for (var e = we; e;) e = ht(e.nextSibling)
}

function dn() {
    we = ke = null, H = !1
}

function Ui(e) {
    Fe === null ? Fe = [e] : Fe.push(e)
}
var yp = rt.ReactCurrentBatchConfig;

function Rn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(N(309));
                var r = n.stateNode
            }
            if (!r) throw Error(N(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
                var a = l.refs;
                i === null ? delete a[o] : a[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(N(284));
        if (!n._owner) throw Error(N(290, e))
    }
    return e
}

function zr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ra(e) {
    var t = e._init;
    return t(e._payload)
}

function Yu(e) {
    function t(p, d) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [d], p.flags |= 16) : m.push(d)
        }
    }

    function n(p, d) {
        if (!e) return null;
        for (; d !== null;) t(p, d), d = d.sibling;
        return null
    }

    function r(p, d) {
        for (p = new Map; d !== null;) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
        return p
    }

    function l(p, d) {
        return p = xt(p, d), p.index = 0, p.sibling = null, p
    }

    function o(p, d, m) {
        return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < d ? (p.flags |= 2, d) : m) : (p.flags |= 2, d)) : (p.flags |= 1048576, d)
    }

    function i(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, d, m, k) {
        return d === null || d.tag !== 6 ? (d = vo(m, p.mode, k), d.return = p, d) : (d = l(d, m), d.return = p, d)
    }

    function u(p, d, m, k) {
        var S = m.type;
        return S === Qt ? f(p, d, m.props.children, k, m.key) : d !== null && (d.elementType === S || typeof S == "object" && S !== null && S.$$typeof === it && ra(S) === d.type) ? (k = l(d, m.props), k.ref = Rn(p, d, m), k.return = p, k) : (k = Gr(m.type, m.key, m.props, null, p.mode, k), k.ref = Rn(p, d, m), k.return = p, k)
    }

    function c(p, d, m, k) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = xo(m, p.mode, k), d.return = p, d) : (d = l(d, m.children || []), d.return = p, d)
    }

    function f(p, d, m, k, S) {
        return d === null || d.tag !== 7 ? (d = Ot(m, p.mode, k, S), d.return = p, d) : (d = l(d, m), d.return = p, d)
    }

    function h(p, d, m) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = vo("" + d, p.mode, m), d.return = p, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case kr:
                    return m = Gr(d.type, d.key, d.props, null, p.mode, m), m.ref = Rn(p, null, d), m.return = p, m;
                case Wt:
                    return d = xo(d, p.mode, m), d.return = p, d;
                case it:
                    var k = d._init;
                    return h(p, k(d._payload), m)
            }
            if (Mn(d) || jn(d)) return d = Ot(d, p.mode, m, null), d.return = p, d;
            zr(p, d)
        }
        return null
    }

    function g(p, d, m, k) {
        var S = d !== null ? d.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : a(p, d, "" + m, k);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case kr:
                    return m.key === S ? u(p, d, m, k) : null;
                case Wt:
                    return m.key === S ? c(p, d, m, k) : null;
                case it:
                    return S = m._init, g(p, d, S(m._payload), k)
            }
            if (Mn(m) || jn(m)) return S !== null ? null : f(p, d, m, k, null);
            zr(p, m)
        }
        return null
    }

    function x(p, d, m, k, S) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return p = p.get(m) || null, a(d, p, "" + k, S);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case kr:
                    return p = p.get(k.key === null ? m : k.key) || null, u(d, p, k, S);
                case Wt:
                    return p = p.get(k.key === null ? m : k.key) || null, c(d, p, k, S);
                case it:
                    var R = k._init;
                    return x(p, d, m, R(k._payload), S)
            }
            if (Mn(k) || jn(k)) return p = p.get(m) || null, f(d, p, k, S, null);
            zr(d, k)
        }
        return null
    }

    function y(p, d, m, k) {
        for (var S = null, R = null, P = d, _ = d = 0, F = null; P !== null && _ < m.length; _++) {
            P.index > _ ? (F = P, P = null) : F = P.sibling;
            var L = g(p, P, m[_], k);
            if (L === null) {
                P === null && (P = F);
                break
            }
            e && P && L.alternate === null && t(p, P), d = o(L, d, _), R === null ? S = L : R.sibling = L, R = L, P = F
        }
        if (_ === m.length) return n(p, P), H && _t(p, _), S;
        if (P === null) {
            for (; _ < m.length; _++) P = h(p, m[_], k), P !== null && (d = o(P, d, _), R === null ? S = P : R.sibling = P, R = P);
            return H && _t(p, _), S
        }
        for (P = r(p, P); _ < m.length; _++) F = x(P, p, _, m[_], k), F !== null && (e && F.alternate !== null && P.delete(F.key === null ? _ : F.key), d = o(F, d, _), R === null ? S = F : R.sibling = F, R = F);
        return e && P.forEach(function (pe) {
            return t(p, pe)
        }), H && _t(p, _), S
    }

    function w(p, d, m, k) {
        var S = jn(m);
        if (typeof S != "function") throw Error(N(150));
        if (m = S.call(m), m == null) throw Error(N(151));
        for (var R = S = null, P = d, _ = d = 0, F = null, L = m.next(); P !== null && !L.done; _++, L = m.next()) {
            P.index > _ ? (F = P, P = null) : F = P.sibling;
            var pe = g(p, P, L.value, k);
            if (pe === null) {
                P === null && (P = F);
                break
            }
            e && P && pe.alternate === null && t(p, P), d = o(pe, d, _), R === null ? S = pe : R.sibling = pe, R = pe, P = F
        }
        if (L.done) return n(p, P), H && _t(p, _), S;
        if (P === null) {
            for (; !L.done; _++, L = m.next()) L = h(p, L.value, k), L !== null && (d = o(L, d, _), R === null ? S = L : R.sibling = L, R = L);
            return H && _t(p, _), S
        }
        for (P = r(p, P); !L.done; _++, L = m.next()) L = x(P, p, _, L.value, k), L !== null && (e && L.alternate !== null && P.delete(L.key === null ? _ : L.key), d = o(L, d, _), R === null ? S = L : R.sibling = L, R = L);
        return e && P.forEach(function (kn) {
            return t(p, kn)
        }), H && _t(p, _), S
    }

    function j(p, d, m, k) {
        if (typeof m == "object" && m !== null && m.type === Qt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case kr:
                    e: {
                        for (var S = m.key, R = d; R !== null;) {
                            if (R.key === S) {
                                if (S = m.type, S === Qt) {
                                    if (R.tag === 7) {
                                        n(p, R.sibling), d = l(R, m.props.children), d.return = p, p = d;
                                        break e
                                    }
                                } else if (R.elementType === S || typeof S == "object" && S !== null && S.$$typeof === it && ra(S) === R.type) {
                                    n(p, R.sibling), d = l(R, m.props), d.ref = Rn(p, R, m), d.return = p, p = d;
                                    break e
                                }
                                n(p, R);
                                break
                            } else t(p, R);
                            R = R.sibling
                        }
                        m.type === Qt ? (d = Ot(m.props.children, p.mode, k, m.key), d.return = p, p = d) : (k = Gr(m.type, m.key, m.props, null, p.mode, k), k.ref = Rn(p, d, m), k.return = p, p = k)
                    }
                    return i(p);
                case Wt:
                    e: {
                        for (R = m.key; d !== null;) {
                            if (d.key === R)
                                if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                                    n(p, d.sibling), d = l(d, m.children || []), d.return = p, p = d;
                                    break e
                                } else {
                                    n(p, d);
                                    break
                                }
                            else t(p, d);
                            d = d.sibling
                        }
                        d = xo(m, p.mode, k),
                            d.return = p,
                            p = d
                    }
                    return i(p);
                case it:
                    return R = m._init, j(p, d, R(m._payload), k)
            }
            if (Mn(m)) return y(p, d, m, k);
            if (jn(m)) return w(p, d, m, k);
            zr(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, m), d.return = p, p = d) : (n(p, d), d = vo(m, p.mode, k), d.return = p, p = d), i(p)) : n(p, d)
    }
    return j
}
var fn = Yu(!0),
    Gu = Yu(!1),
    fl = St(null),
    pl = null,
    qt = null,
    Bi = null;

function Hi() {
    Bi = qt = pl = null
}

function Vi(e) {
    var t = fl.current;
    B(fl), e._currentValue = t
}

function Jo(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function sn(e, t) {
    pl = e, Bi = qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null)
}

function _e(e) {
    var t = e._currentValue;
    if (Bi !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, qt === null) {
            if (pl === null) throw Error(N(308));
            qt = e, pl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else qt = qt.next = e;
    return t
}
var zt = null;

function Wi(e) {
    zt === null ? zt = [e] : zt.push(e)
}

function Xu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Wi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r)
}

function et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var st = !1;

function Qi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Ju(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Xe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function gt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, O & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Wi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n)
}

function Vr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Li(e, n)
    }
}

function la(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ml(e, t, n, r) {
    var l = e.updateQueue;
    st = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            c = u.next;
        u.next = null, i === null ? o = c : i.next = c, i = u;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== i && (a === null ? f.firstBaseUpdate = c : a.next = c, f.lastBaseUpdate = u))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0, f = c = u = null, a = o;
        do {
            var g = a.lane,
                x = a.eventTime;
            if ((r & g) === g) {
                f !== null && (f = f.next = {
                    eventTime: x,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e,
                        w = a;
                    switch (g = t, x = n, w.tag) {
                        case 1:
                            if (y = w.payload, typeof y == "function") {
                                h = y.call(x, h, g);
                                break e
                            }
                            h = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = w.payload, g = typeof y == "function" ? y.call(x, h, g) : y, g == null) break e;
                            h = K({}, h, g);
                            break e;
                        case 2:
                            st = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [a] : g.push(a))
            } else x = {
                eventTime: x,
                lane: g,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, f === null ? (c = f = x, u = h) : f = f.next = x, i |= g;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                g = a, a = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null
            }
        } while (!0);
        if (f === null && (u = h), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        At |= i, e.lanes = i, e.memoizedState = h
    }
}

function oa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(N(191, l));
                l.call(r)
            }
        }
}
var pr = {},
    Ve = St(pr),
    nr = St(pr),
    rr = St(pr);

function Mt(e) {
    if (e === pr) throw Error(N(174));
    return e
}

function Ki(e, t) {
    switch ($(rr, t), $(nr, e), $(Ve, pr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = To(t, e)
    }
    B(Ve), $(Ve, t)
}

function pn() {
    B(Ve), B(nr), B(rr)
}

function Zu(e) {
    Mt(rr.current);
    var t = Mt(Ve.current),
        n = To(t, e.type);
    t !== n && ($(nr, e), $(Ve, n))
}

function bi(e) {
    nr.current === e && (B(Ve), B(nr))
}
var V = St(0);

function hl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var fo = [];

function Yi() {
    for (var e = 0; e < fo.length; e++) fo[e]._workInProgressVersionPrimary = null;
    fo.length = 0
}
var Wr = rt.ReactCurrentDispatcher,
    po = rt.ReactCurrentBatchConfig,
    $t = 0,
    W = null,
    J = null,
    ee = null,
    gl = !1,
    Bn = !1,
    lr = 0,
    vp = 0;

function oe() {
    throw Error(N(321))
}

function Gi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ie(e[n], t[n])) return !1;
    return !0
}

function Xi(e, t, n, r, l, o) {
    if ($t = o, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wr.current = e === null || e.memoizedState === null ? Np : jp, e = n(r, l), Bn) {
        o = 0;
        do {
            if (Bn = !1, lr = 0, 25 <= o) throw Error(N(301));
            o += 1, ee = J = null, t.updateQueue = null, Wr.current = Sp, e = n(r, l)
        } while (Bn)
    }
    if (Wr.current = yl, t = J !== null && J.next !== null, $t = 0, ee = J = W = null, gl = !1, t) throw Error(N(300));
    return e
}

function Ji() {
    var e = lr !== 0;
    return lr = 0, e
}

function Ue() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ee === null ? W.memoizedState = ee = e : ee = ee.next = e, ee
}

function Le() {
    if (J === null) {
        var e = W.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = J.next;
    var t = ee === null ? W.memoizedState : ee.next;
    if (t !== null) ee = t, J = e;
    else {
        if (e === null) throw Error(N(310));
        J = e, e = {
            memoizedState: J.memoizedState,
            baseState: J.baseState,
            baseQueue: J.baseQueue,
            queue: J.queue,
            next: null
        }, ee === null ? W.memoizedState = ee = e : ee = ee.next = e
    }
    return ee
}

function or(e, t) {
    return typeof t == "function" ? t(e) : t
}

function mo(e) {
    var t = Le(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = J,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var a = i = null,
            u = null,
            c = o;
        do {
            var f = c.lane;
            if (($t & f) === f) u !== null && (u = u.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: f,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (a = u = h, i = r) : u = u.next = h, W.lanes |= f, At |= f
            }
            c = c.next
        } while (c !== null && c !== o);
        u === null ? i = r : u.next = a, Ie(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, W.lanes |= o, At |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function ho(e) {
    var t = Le(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Ie(o, t.memoizedState) || (he = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function qu() { }

function ec(e, t) {
    var n = W,
        r = Le(),
        l = t(),
        o = !Ie(r.memoizedState, l);
    if (o && (r.memoizedState = l, he = !0), r = r.queue, Zi(rc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
        if (n.flags |= 2048, ir(9, nc.bind(null, n, r, l, t), void 0, null), te === null) throw Error(N(349));
        $t & 30 || tc(n, t, l)
    }
    return l
}

function tc(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = W.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, W.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function nc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, lc(t) && oc(e)
}

function rc(e, t, n) {
    return n(function () {
        lc(t) && oc(e)
    })
}

function lc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ie(e, n)
    } catch {
        return !0
    }
}

function oc(e) {
    var t = et(e, 1);
    t !== null && De(t, e, 1, -1)
}

function ia(e) {
    var t = Ue();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: or,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = kp.bind(null, W, e), [t.memoizedState, e]
}

function ir(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = W.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, W.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ic() {
    return Le().memoizedState
}

function Qr(e, t, n, r) {
    var l = Ue();
    W.flags |= e, l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r)
}

function Tl(e, t, n, r) {
    var l = Le();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (J !== null) {
        var i = J.memoizedState;
        if (o = i.destroy, r !== null && Gi(r, i.deps)) {
            l.memoizedState = ir(t, n, o, r);
            return
        }
    }
    W.flags |= e, l.memoizedState = ir(1 | t, n, o, r)
}

function sa(e, t) {
    return Qr(8390656, 8, e, t)
}

function Zi(e, t) {
    return Tl(2048, 8, e, t)
}

function sc(e, t) {
    return Tl(4, 2, e, t)
}

function ac(e, t) {
    return Tl(4, 4, e, t)
}

function uc(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function () {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function () {
            t.current = null
        }
}

function cc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Tl(4, 4, uc.bind(null, t, e), n)
}

function qi() { }

function dc(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function fc(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function pc(e, t, n) {
    return $t & 21 ? (Ie(n, t) || (n = vu(), W.lanes |= n, At |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n)
}

function xp(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = po.transition;
    po.transition = {};
    try {
        e(!1), t()
    } finally {
        I = n, po.transition = r
    }
}

function mc() {
    return Le().memoizedState
}

function wp(e, t, n) {
    var r = vt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, hc(e)) gc(t, n);
    else if (n = Xu(e, t, n, r), n !== null) {
        var l = ce();
        De(n, e, r, l), yc(n, t, r)
    }
}

function kp(e, t, n) {
    var r = vt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (hc(e)) gc(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                a = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = a, Ie(a, i)) {
                var u = t.interleaved;
                u === null ? (l.next = l, Wi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch { } finally { }
        n = Xu(e, t, l, r), n !== null && (l = ce(), De(n, e, r, l), yc(n, t, r))
    }
}

function hc(e) {
    var t = e.alternate;
    return e === W || t !== null && t === W
}

function gc(e, t) {
    Bn = gl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function yc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Li(e, n)
    }
}
var yl = {
    readContext: _e,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1
},
    Np = {
        readContext: _e,
        useCallback: function (e, t) {
            return Ue().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: _e,
        useEffect: sa,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null, Qr(4194308, 4, uc.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Qr(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Qr(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Ue();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function (e, t, n) {
            var r = Ue();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = wp.bind(null, W, e), [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = Ue();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ia,
        useDebugValue: qi,
        useDeferredValue: function (e) {
            return Ue().memoizedState = e
        },
        useTransition: function () {
            var e = ia(!1),
                t = e[0];
            return e = xp.bind(null, e[1]), Ue().memoizedState = e, [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = W,
                l = Ue();
            if (H) {
                if (n === void 0) throw Error(N(407));
                n = n()
            } else {
                if (n = t(), te === null) throw Error(N(349));
                $t & 30 || tc(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, sa(rc.bind(null, r, o, e), [e]), r.flags |= 2048, ir(9, nc.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function () {
            var e = Ue(),
                t = te.identifierPrefix;
            if (H) {
                var n = Ge,
                    r = Ye;
                n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = lr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = vp++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    jp = {
        readContext: _e,
        useCallback: dc,
        useContext: _e,
        useEffect: Zi,
        useImperativeHandle: cc,
        useInsertionEffect: sc,
        useLayoutEffect: ac,
        useMemo: fc,
        useReducer: mo,
        useRef: ic,
        useState: function () {
            return mo(or)
        },
        useDebugValue: qi,
        useDeferredValue: function (e) {
            var t = Le();
            return pc(t, J.memoizedState, e)
        },
        useTransition: function () {
            var e = mo(or)[0],
                t = Le().memoizedState;
            return [e, t]
        },
        useMutableSource: qu,
        useSyncExternalStore: ec,
        useId: mc,
        unstable_isNewReconciler: !1
    },
    Sp = {
        readContext: _e,
        useCallback: dc,
        useContext: _e,
        useEffect: Zi,
        useImperativeHandle: cc,
        useInsertionEffect: sc,
        useLayoutEffect: ac,
        useMemo: fc,
        useReducer: ho,
        useRef: ic,
        useState: function () {
            return ho(or)
        },
        useDebugValue: qi,
        useDeferredValue: function (e) {
            var t = Le();
            return J === null ? t.memoizedState = e : pc(t, J.memoizedState, e)
        },
        useTransition: function () {
            var e = ho(or)[0],
                t = Le().memoizedState;
            return [e, t]
        },
        useMutableSource: qu,
        useSyncExternalStore: ec,
        useId: mc,
        unstable_isNewReconciler: !1
    };

function ze(e, t) {
    if (e && e.defaultProps) {
        t = K({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Zo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var zl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Ht(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = vt(e),
            o = Xe(r, l);
        o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (De(t, e, l, r), Vr(t, e, l))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = vt(e),
            o = Xe(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (De(t, e, l, r), Vr(t, e, l))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ce(),
            r = vt(e),
            l = Xe(n, r);
        l.tag = 2, t != null && (l.callback = t), t = gt(e, l, r), t !== null && (De(t, e, r, n), Vr(t, e, r))
    }
};

function aa(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Zn(n, r) || !Zn(l, o) : !0
}

function vc(e, t, n) {
    var r = !1,
        l = Nt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = _e(o) : (l = ye(t) ? Dt : ae.current, r = t.contextTypes, o = (r = r != null) ? cn(e, l) : Nt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function ua(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zl.enqueueReplaceState(t, t.state, null)
}

function qo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Qi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = _e(o) : (o = ye(t) ? Dt : ae.current, l.context = cn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Zo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && zl.enqueueReplaceState(l, l.state, null), ml(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function mn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Jd(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function go(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function ei(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Cp = typeof WeakMap == "function" ? WeakMap : Map;

function xc(e, t, n) {
    n = Xe(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function () {
        xl || (xl = !0, ci = r), ei(e, t)
    }, n
}

function wc(e, t, n) {
    n = Xe(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function () {
            return r(l)
        }, n.callback = function () {
            ei(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        ei(e, t), typeof r != "function" && (yt === null ? yt = new Set([this]) : yt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function ca(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Cp;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Ap.bind(null, e, t, n), t.then(e, e))
}

function da(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function fa(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1), t.tag = 2, gt(n, t, 1))), n.lanes |= 1), e)
}
var Ep = rt.ReactCurrentOwner,
    he = !1;

function ue(e, t, n, r) {
    t.child = e === null ? Gu(t, null, n, r) : fn(t, e.child, n, r)
}

function pa(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return sn(t, l), r = Xi(e, t, n, r, o, l), n = Ji(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (H && n && $i(t), t.flags |= 1, ue(e, t, r, l), t.child)
}

function ma(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ss(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, kc(e, t, o, r, l)) : (e = Gr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Zn, n(i, r) && e.ref === t.ref) return tt(e, t, l)
    }
    return t.flags |= 1, e = xt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function kc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Zn(o, r) && e.ref === t.ref)
            if (he = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
            else return t.lanes = e.lanes, tt(e, t, l)
    }
    return ti(e, t, n, r, l)
}

function Nc(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $(tn, xe), xe |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, $(tn, xe), xe |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, $(tn, xe), xe |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(tn, xe), xe |= r;
    return ue(e, t, l, n), t.child
}

function jc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ti(e, t, n, r, l) {
    var o = ye(n) ? Dt : ae.current;
    return o = cn(t, o), sn(t, l), n = Xi(e, t, n, r, o, l), r = Ji(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (H && r && $i(t), t.flags |= 1, ue(e, t, n, l), t.child)
}

function ha(e, t, n, r, l) {
    if (ye(n)) {
        var o = !0;
        ul(t)
    } else o = !1;
    if (sn(t, l), t.stateNode === null) Kr(e, t), vc(t, n, r), qo(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var u = i.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = _e(c) : (c = ye(n) ? Dt : ae.current, c = cn(t, c));
        var f = n.getDerivedStateFromProps,
            h = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== c) && ua(t, i, r, c), st = !1;
        var g = t.memoizedState;
        i.state = g, ml(t, r, i, l), u = t.memoizedState, a !== r || g !== u || ge.current || st ? (typeof f == "function" && (Zo(t, n, f, r), u = t.memoizedState), (a = st || aa(t, n, a, r, g, u, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Ju(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : ze(t.type, a), i.props = c, h = t.pendingProps, g = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = _e(u) : (u = ye(n) ? Dt : ae.current, u = cn(t, u));
        var x = n.getDerivedStateFromProps;
        (f = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || g !== u) && ua(t, i, r, u), st = !1, g = t.memoizedState, i.state = g, ml(t, r, i, l);
        var y = t.memoizedState;
        a !== h || g !== y || ge.current || st ? (typeof x == "function" && (Zo(t, n, x, r), y = t.memoizedState), (c = st || aa(t, n, c, r, g, y, u) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ni(e, t, n, r, o, l)
}

function ni(e, t, n, r, l, o) {
    jc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ea(t, n, !1), tt(e, t, o);
    r = t.stateNode, Ep.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = fn(t, e.child, null, o), t.child = fn(t, null, a, o)) : ue(e, t, a, o), t.memoizedState = r.state, l && ea(t, n, !0), t.child
}

function Sc(e) {
    var t = e.stateNode;
    t.pendingContext ? qs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qs(e, t.context, !1), Ki(e, t.containerInfo)
}

function ga(e, t, n, r, l) {
    return dn(), Ui(l), t.flags |= 256, ue(e, t, n, r), t.child
}
var ri = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function li(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Cc(e, t, n) {
    var r = t.pendingProps,
        l = V.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(V, l & 1), e === null) return Xo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Ol(i, r, 0, null), e = Ot(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = li(n), t.memoizedState = ri, e) : es(t, i));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Pp(e, t, i, r, a, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = xt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = xt(a, o) : (o = Ot(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? li(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ri, r
    }
    return o = e.child, e = o.sibling, r = xt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function es(e, t) {
    return t = Ol({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Mr(e, t, n, r) {
    return r !== null && Ui(r), fn(t, e.child, null, n), e = es(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Pp(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = go(Error(N(422))), Mr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ol({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = Ot(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && fn(t, e.child, null, i), t.child.memoizedState = li(i), t.memoizedState = ri, o);
    if (!(t.mode & 1)) return Mr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(N(419)), r = go(o, r, void 0), Mr(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0, he || a) {
        if (r = te, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, et(e, l), De(r, e, l, -1))
        }
        return is(), r = go(Error(N(421))), Mr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Up.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = ht(l.nextSibling), ke = t, H = !0, Fe = null, e !== null && (Ce[Ee++] = Ye, Ce[Ee++] = Ge, Ce[Ee++] = It, Ye = e.id, Ge = e.overflow, It = t), t = es(t, r.children), t.flags |= 4096, t)
}

function ya(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Jo(e.return, t, n)
}

function yo(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function Ec(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (ue(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ya(e, n, t);
            else if (e.tag === 19) ya(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if ($(V, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && hl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), yo(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && hl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            yo(t, !0, n, null, o);
            break;
        case "together":
            yo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Kr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), At |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = xt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Rp(e, t, n) {
    switch (t.tag) {
        case 3:
            Sc(t), dn();
            break;
        case 5:
            Zu(t);
            break;
        case 1:
            ye(t.type) && ul(t);
            break;
        case 4:
            Ki(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            $(fl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? ($(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Cc(e, t, n) : ($(V, V.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
            $(V, V.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Ec(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(V, V.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Nc(e, t, n)
    }
    return tt(e, t, n)
}
var Pc, oi, Rc, _c;
Pc = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
oi = function () { };
Rc = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Mt(Ve.current);
        var o = null;
        switch (n) {
            case "input":
                l = Po(e, l), r = Po(e, r), o = [];
                break;
            case "select":
                l = K({}, l, {
                    value: void 0
                }), r = K({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = Lo(e, l), r = Lo(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sl)
        }
        zo(n, r);
        var i;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var a = l[c];
                    for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Qn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (a = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== a && (u != null || a != null))
                if (c === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                    } else n || (o || (o = []), o.push(c, n)), n = u;
                else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Qn.hasOwnProperty(c) ? (u != null && c === "onScroll" && U("scroll", e), o || a === u || (o = [])) : (o = o || []).push(c, u))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
_c = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function _n(e, t) {
    if (!H) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function _p(e, t, n) {
    var r = t.pendingProps;
    switch (Ai(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ie(t), null;
        case 1:
            return ye(t.type) && al(), ie(t), null;
        case 3:
            return r = t.stateNode, pn(), B(ge), B(ae), Yi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fe !== null && (pi(Fe), Fe = null))), oi(e, t), ie(t), null;
        case 5:
            bi(t);
            var l = Mt(rr.current);
            if (n = t.type, e !== null && t.stateNode != null) Rc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(N(166));
                    return ie(t), null
                }
                if (e = Mt(Ve.current), Tr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Be] = t, r[tr] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            U("cancel", r), U("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            U("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < On.length; l++) U(On[l], r);
                            break;
                        case "source":
                            U("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            U("error", r), U("load", r);
                            break;
                        case "details":
                            U("toggle", r);
                            break;
                        case "input":
                            Es(r, o), U("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, U("invalid", r);
                            break;
                        case "textarea":
                            Rs(r, o), U("invalid", r)
                    }
                    zo(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var a = o[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Lr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Lr(r.textContent, a, e), l = ["children", "" + a]) : Qn.hasOwnProperty(i) && a != null && i === "onScroll" && U("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Nr(r), Ps(r, o, !0);
                            break;
                        case "textarea":
                            Nr(r), _s(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = sl)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ru(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Be] = t, e[tr] = r, Pc(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Mo(n, r), n) {
                            case "dialog":
                                U("cancel", e), U("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                U("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < On.length; l++) U(On[l], e);
                                l = r;
                                break;
                            case "source":
                                U("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                U("error", e), U("load", e), l = r;
                                break;
                            case "details":
                                U("toggle", e), l = r;
                                break;
                            case "input":
                                Es(e, r), l = Po(e, r), U("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = K({}, r, {
                                    value: void 0
                                }), U("invalid", e);
                                break;
                            case "textarea":
                                Rs(e, r), l = Lo(e, r), U("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        zo(n, l),
                            a = l;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style" ? iu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && lu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Kn(e, u) : typeof u == "number" && Kn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qn.hasOwnProperty(o) ? u != null && o === "onScroll" && U("scroll", e) : u != null && Si(e, o, u, i))
                            }
                        switch (n) {
                            case "input":
                                Nr(e), Ps(e, r, !1);
                                break;
                            case "textarea":
                                Nr(e), _s(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + kt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? nn(e, !!r.multiple, o, !1) : r.defaultValue != null && nn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = sl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ie(t), null;
        case 6:
            if (e && t.stateNode != null) _c(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
                if (n = Mt(rr.current), Mt(Ve.current), Tr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (o = r.nodeValue !== n) && (e = ke, e !== null)) switch (e.tag) {
                        case 3:
                            Lr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Lr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r
            }
            return ie(t), null;
        case 13:
            if (B(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (H && we !== null && t.mode & 1 && !(t.flags & 128)) bu(), dn(), t.flags |= 98560, o = !1;
                else if (o = Tr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(N(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(N(317));
                        o[Be] = t
                    } else dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ie(t), o = !1
                } else Fe !== null && (pi(Fe), Fe = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? Z === 0 && (Z = 3) : is())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
        case 4:
            return pn(), oi(e, t), e === null && qn(t.stateNode.containerInfo), ie(t), null;
        case 10:
            return Vi(t.type._context), ie(t), null;
        case 17:
            return ye(t.type) && al(), ie(t), null;
        case 19:
            if (B(V), o = t.memoizedState, o === null) return ie(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) _n(o, !1);
                else {
                    if (Z !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = hl(e), i !== null) {
                                for (t.flags |= 128, _n(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return $(V, V.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && G() > hn && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = hl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !H) return ie(t), null
                    } else 2 * G() - o.renderingStartTime > hn && n !== 1073741824 && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = G(), t.sibling = null, n = V.current, $(V, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
        case 22:
        case 23:
            return os(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? xe & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}

function Lp(e, t) {
    switch (Ai(t), t.tag) {
        case 1:
            return ye(t.type) && al(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return pn(), B(ge), B(ae), Yi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return bi(t), null;
        case 13:
            if (B(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(N(340));
                dn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return B(V), null;
        case 4:
            return pn(), null;
        case 10:
            return Vi(t.type._context), null;
        case 22:
        case 23:
            return os(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Fr = !1,
    se = !1,
    Tp = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;

function en(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            b(e, t, r)
        } else n.current = null
}

function ii(e, t, n) {
    try {
        n()
    } catch (r) {
        b(e, t, r)
    }
}
var va = !1;

function zp(e, t) {
    if (Vo = ll, e = Fu(), Ii(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    a = -1,
                    u = -1,
                    c = 0,
                    f = 0,
                    h = e,
                    g = null;
                t: for (; ;) {
                    for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (a = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (x = h.firstChild) !== null;) g = h, h = x;
                    for (; ;) {
                        if (h === e) break t;
                        if (g === n && ++c === l && (a = i), g === o && ++f === r && (u = i), (x = h.nextSibling) !== null) break;
                        h = g, g = h.parentNode
                    }
                    h = x
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Wo = {
        focusedElem: e,
        selectionRange: n
    }, ll = !1, C = t; C !== null;)
        if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
        else
            for (; C !== null;) {
                t = C;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var w = y.memoizedProps,
                                    j = y.memoizedState,
                                    p = t.stateNode,
                                    d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ze(t.type, w), j);
                                p.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                    }
                } catch (k) {
                    b(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, C = e;
                    break
                }
                C = t.return
            }
    return y = va, va = !1, y
}

function Hn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && ii(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function Ml(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function si(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Lc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Lc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[tr], delete t[bo], delete t[mp], delete t[hp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Tc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function xa(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Tc(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (ai(e, t, n), e = e.sibling; e !== null;) ai(e, t, n), e = e.sibling
}

function ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ui(e, t, n), e = e.sibling; e !== null;) ui(e, t, n), e = e.sibling
}
var ne = null,
    Me = !1;

function lt(e, t, n) {
    for (n = n.child; n !== null;) zc(e, t, n), n = n.sibling
}

function zc(e, t, n) {
    if (He && typeof He.onCommitFiberUnmount == "function") try {
        He.onCommitFiberUnmount(Cl, n)
    } catch { }
    switch (n.tag) {
        case 5:
            se || en(n, t);
        case 6:
            var r = ne,
                l = Me;
            ne = null, lt(e, t, n), ne = r, Me = l, ne !== null && (Me ? (e = ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
            break;
        case 18:
            ne !== null && (Me ? (e = ne, n = n.stateNode, e.nodeType === 8 ? uo(e.parentNode, n) : e.nodeType === 1 && uo(e, n), Xn(e)) : uo(ne, n.stateNode));
            break;
        case 4:
            r = ne, l = Me, ne = n.stateNode.containerInfo, Me = !0, lt(e, t, n), ne = r, Me = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && ii(n, t, i), l = l.next
                } while (l !== r)
            }
            lt(e, t, n);
            break;
        case 1:
            if (!se && (en(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                b(n, t, a)
            }
            lt(e, t, n);
            break;
        case 21:
            lt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (se = (r = se) || n.memoizedState !== null, lt(e, t, n), se = r) : lt(e, t, n);
            break;
        default:
            lt(e, t, n)
    }
}

function wa(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Tp), t.forEach(function (r) {
            var l = Bp.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Te(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ne = a.stateNode, Me = !1;
                            break e;
                        case 3:
                            ne = a.stateNode.containerInfo, Me = !0;
                            break e;
                        case 4:
                            ne = a.stateNode.containerInfo, Me = !0;
                            break e
                    }
                    a = a.return
                }
                if (ne === null) throw Error(N(160));
                zc(o, i, l), ne = null, Me = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (c) {
                b(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Mc(t, e), t = t.sibling
}

function Mc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Te(t, e), Ae(e), r & 4) {
                try {
                    Hn(3, e, e.return), Ml(3, e)
                } catch (w) {
                    b(e, e.return, w)
                }
                try {
                    Hn(5, e, e.return)
                } catch (w) {
                    b(e, e.return, w)
                }
            }
            break;
        case 1:
            Te(t, e), Ae(e), r & 512 && n !== null && en(n, n.return);
            break;
        case 5:
            if (Te(t, e), Ae(e), r & 512 && n !== null && en(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Kn(l, "")
                } catch (w) {
                    b(e, e.return, w)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && tu(l, o), Mo(a, i);
                    var c = Mo(a, o);
                    for (i = 0; i < u.length; i += 2) {
                        var f = u[i],
                            h = u[i + 1];
                        f === "style" ? iu(l, h) : f === "dangerouslySetInnerHTML" ? lu(l, h) : f === "children" ? Kn(l, h) : Si(l, f, h, c)
                    }
                    switch (a) {
                        case "input":
                            Ro(l, o);
                            break;
                        case "textarea":
                            nu(l, o);
                            break;
                        case "select":
                            var g = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var x = o.value;
                            x != null ? nn(l, !!o.multiple, x, !1) : g !== !!o.multiple && (o.defaultValue != null ? nn(l, !!o.multiple, o.defaultValue, !0) : nn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[tr] = o
                } catch (w) {
                    b(e, e.return, w)
                }
            }
            break;
        case 6:
            if (Te(t, e), Ae(e), r & 4) {
                if (e.stateNode === null) throw Error(N(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (w) {
                    b(e, e.return, w)
                }
            }
            break;
        case 3:
            if (Te(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Xn(t.containerInfo)
            } catch (w) {
                b(e, e.return, w)
            }
            break;
        case 4:
            Te(t, e), Ae(e);
            break;
        case 13:
            Te(t, e), Ae(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (rs = G())), r & 4 && wa(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (se = (c = se) || f, Te(t, e), se = c) : Te(t, e), Ae(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !f && e.mode & 1)
                    for (C = e, f = e.child; f !== null;) {
                        for (h = C = f; C !== null;) {
                            switch (g = C, x = g.child, g.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hn(4, g, g.return);
                                    break;
                                case 1:
                                    en(g, g.return);
                                    var y = g.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = g, n = g.return;
                                        try {
                                            t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                        } catch (w) {
                                            b(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    en(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        Na(h);
                                        continue
                                    }
                            }
                            x !== null ? (x.return = g, C = x) : Na(h)
                        }
                        f = f.sibling
                    }
                e: for (f = null, h = e; ;) {
                    if (h.tag === 5) {
                        if (f === null) {
                            f = h;
                            try {
                                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = ou("display", i))
                            } catch (w) {
                                b(e, e.return, w)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (f === null) try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (w) {
                            b(e, e.return, w)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        f === h && (f = null), h = h.return
                    }
                    f === h && (f = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Te(t, e), Ae(e), r & 4 && wa(e);
            break;
        case 21:
            break;
        default:
            Te(t, e), Ae(e)
    }
}

function Ae(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Tc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Kn(l, ""), r.flags &= -33);
                    var o = xa(e);
                    ui(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = xa(e);
                    ai(e, a, i);
                    break;
                default:
                    throw Error(N(161))
            }
        }
        catch (u) {
            b(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Mp(e, t, n) {
    C = e, Fc(e)
}

function Fc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
        var l = C,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Fr;
            if (!i) {
                var a = l.alternate,
                    u = a !== null && a.memoizedState !== null || se;
                a = Fr;
                var c = se;
                if (Fr = i, (se = u) && !c)
                    for (C = l; C !== null;) i = C, u = i.child, i.tag === 22 && i.memoizedState !== null ? ja(l) : u !== null ? (u.return = i, C = u) : ja(l);
                for (; o !== null;) C = o, Fc(o), o = o.sibling;
                C = l, Fr = a, se = c
            }
            ka(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : ka(e)
    }
}

function ka(e) {
    for (; C !== null;) {
        var t = C;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        se || Ml(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !se)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && oa(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            oa(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var f = c.memoizedState;
                                if (f !== null) {
                                    var h = f.dehydrated;
                                    h !== null && Xn(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                }
                se || t.flags & 512 && si(t)
            } catch (g) {
                b(t, t.return, g)
            }
        }
        if (t === e) {
            C = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function Na(e) {
    for (; C !== null;) {
        var t = C;
        if (t === e) {
            C = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function ja(e) {
    for (; C !== null;) {
        var t = C;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ml(4, t)
                    } catch (u) {
                        b(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            b(t, l, u)
                        }
                    }
                    var o = t.return;
                    try {
                        si(t)
                    } catch (u) {
                        b(t, o, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        si(t)
                    } catch (u) {
                        b(t, i, u)
                    }
            }
        } catch (u) {
            b(t, t.return, u)
        }
        if (t === e) {
            C = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, C = a;
            break
        }
        C = t.return
    }
}
var Fp = Math.ceil,
    vl = rt.ReactCurrentDispatcher,
    ts = rt.ReactCurrentOwner,
    Re = rt.ReactCurrentBatchConfig,
    O = 0,
    te = null,
    X = null,
    re = 0,
    xe = 0,
    tn = St(0),
    Z = 0,
    sr = null,
    At = 0,
    Fl = 0,
    ns = 0,
    Vn = null,
    me = null,
    rs = 0,
    hn = 1 / 0,
    Ke = null,
    xl = !1,
    ci = null,
    yt = null,
    Or = !1,
    dt = null,
    wl = 0,
    Wn = 0,
    di = null,
    br = -1,
    Yr = 0;

function ce() {
    return O & 6 ? G() : br !== -1 ? br : br = G()
}

function vt(e) {
    return e.mode & 1 ? O & 2 && re !== 0 ? re & -re : yp.transition !== null ? (Yr === 0 && (Yr = vu()), Yr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cu(e.type)), e) : 1
}

function De(e, t, n, r) {
    if (50 < Wn) throw Wn = 0, di = null, Error(N(185));
    cr(e, n, r), (!(O & 2) || e !== te) && (e === te && (!(O & 2) && (Fl |= n), Z === 4 && ut(e, re)), ve(e, r), n === 1 && O === 0 && !(t.mode & 1) && (hn = G() + 500, Ll && Ct()))
}

function ve(e, t) {
    var n = e.callbackNode;
    yf(e, t);
    var r = rl(e, e === te ? re : 0);
    if (r === 0) n !== null && zs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && zs(n), t === 1) e.tag === 0 ? gp(Sa.bind(null, e)) : Wu(Sa.bind(null, e)), fp(function () {
            !(O & 6) && Ct()
        }), n = null;
        else {
            switch (xu(r)) {
                case 1:
                    n = _i;
                    break;
                case 4:
                    n = gu;
                    break;
                case 16:
                    n = nl;
                    break;
                case 536870912:
                    n = yu;
                    break;
                default:
                    n = nl
            }
            n = Hc(n, Oc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Oc(e, t) {
    if (br = -1, Yr = 0, O & 6) throw Error(N(327));
    var n = e.callbackNode;
    if (an() && e.callbackNode !== n) return null;
    var r = rl(e, e === te ? re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
    else {
        t = r;
        var l = O;
        O |= 2;
        var o = Ic();
        (te !== e || re !== t) && (Ke = null, hn = G() + 500, Ft(e, t));
        do try {
            Ip();
            break
        } catch (a) {
            Dc(e, a)
        }
        while (!0);
        Hi(), vl.current = o, O = l, X !== null ? t = 0 : (te = null, re = 0, t = Z)
    }
    if (t !== 0) {
        if (t === 2 && (l = $o(e), l !== 0 && (r = l, t = fi(e, l))), t === 1) throw n = sr, Ft(e, 0), ut(e, r), ve(e, G()), n;
        if (t === 6) ut(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !Op(l) && (t = kl(e, r), t === 2 && (o = $o(e), o !== 0 && (r = o, t = fi(e, o))), t === 1)) throw n = sr, Ft(e, 0), ut(e, r), ve(e, G()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    Lt(e, me, Ke);
                    break;
                case 3:
                    if (ut(e, r), (r & 130023424) === r && (t = rs + 500 - G(), 10 < t)) {
                        if (rl(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ce(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Ko(Lt.bind(null, e, me, Ke), t);
                        break
                    }
                    Lt(e, me, Ke);
                    break;
                case 4:
                    if (ut(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Oe(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Fp(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ko(Lt.bind(null, e, me, Ke), r);
                        break
                    }
                    Lt(e, me, Ke);
                    break;
                case 5:
                    Lt(e, me, Ke);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return ve(e, G()), e.callbackNode === n ? Oc.bind(null, e) : null
}

function fi(e, t) {
    var n = Vn;
    return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = kl(e, t), e !== 2 && (t = me, me = n, t !== null && pi(t)), e
}

function pi(e) {
    me === null ? me = e : me.push.apply(me, e)
}

function Op(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ie(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function ut(e, t) {
    for (t &= ~ns, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Oe(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Sa(e) {
    if (O & 6) throw Error(N(327));
    an();
    var t = rl(e, 0);
    if (!(t & 1)) return ve(e, G()), null;
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $o(e);
        r !== 0 && (t = r, n = fi(e, r))
    }
    if (n === 1) throw n = sr, Ft(e, 0), ut(e, t), ve(e, G()), n;
    if (n === 6) throw Error(N(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lt(e, me, Ke), ve(e, G()), null
}

function ls(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n, O === 0 && (hn = G() + 500, Ll && Ct())
    }
}

function Ut(e) {
    dt !== null && dt.tag === 0 && !(O & 6) && an();
    var t = O;
    O |= 1;
    var n = Re.transition,
        r = I;
    try {
        if (Re.transition = null, I = 1, e) return e()
    } finally {
        I = r, Re.transition = n, O = t, !(O & 6) && Ct()
    }
}

function os() {
    xe = tn.current, B(tn)
}

function Ft(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, dp(n)), X !== null)
        for (n = X.return; n !== null;) {
            var r = n;
            switch (Ai(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && al();
                    break;
                case 3:
                    pn(), B(ge), B(ae), Yi();
                    break;
                case 5:
                    bi(r);
                    break;
                case 4:
                    pn();
                    break;
                case 13:
                    B(V);
                    break;
                case 19:
                    B(V);
                    break;
                case 10:
                    Vi(r.type._context);
                    break;
                case 22:
                case 23:
                    os()
            }
            n = n.return
        }
    if (te = e, X = e = xt(e.current, null), re = xe = t, Z = 0, sr = null, ns = Fl = At = 0, me = Vn = null, zt !== null) {
        for (t = 0; t < zt.length; t++)
            if (n = zt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            }
        zt = null
    }
    return e
}

function Dc(e, t) {
    do {
        var n = X;
        try {
            if (Hi(), Wr.current = yl, gl) {
                for (var r = W.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                gl = !1
            }
            if ($t = 0, ee = J = W = null, Bn = !1, lr = 0, ts.current = null, n === null || n.return === null) {
                Z = 1, sr = t, X = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    a = n,
                    u = t;
                if (t = re, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u,
                        f = a,
                        h = f.tag;
                    if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var g = f.alternate;
                        g ? (f.updateQueue = g.updateQueue, f.memoizedState = g.memoizedState, f.lanes = g.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var x = da(i);
                    if (x !== null) {
                        x.flags &= -257, fa(x, i, a, o, t), x.mode & 1 && ca(o, c, t), t = x, u = c;
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(u), t.updateQueue = w
                        } else y.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ca(o, c, t), is();
                            break e
                        }
                        u = Error(N(426))
                    }
                } else if (H && a.mode & 1) {
                    var j = da(i);
                    if (j !== null) {
                        !(j.flags & 65536) && (j.flags |= 256), fa(j, i, a, o, t), Ui(mn(u, a));
                        break e
                    }
                }
                o = u = mn(u, a),
                    Z !== 4 && (Z = 2),
                    Vn === null ? Vn = [o] : Vn.push(o),
                    o = i; do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var p = xc(o, u, t);
                                la(o, p);
                                break e;
                            case 1:
                                a = u;
                                var d = o.type,
                                    m = o.stateNode;
                                if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (yt === null || !yt.has(m)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var k = wc(o, a, t);
                                    la(o, k);
                                    break e
                                }
                        }
                        o = o.return
                    } while (o !== null)
            }
            Ac(n)
        } catch (S) {
            t = S, X === n && n !== null && (X = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Ic() {
    var e = vl.current;
    return vl.current = yl, e === null ? yl : e
}

function is() {
    (Z === 0 || Z === 3 || Z === 2) && (Z = 4), te === null || !(At & 268435455) && !(Fl & 268435455) || ut(te, re)
}

function kl(e, t) {
    var n = O;
    O |= 2;
    var r = Ic();
    (te !== e || re !== t) && (Ke = null, Ft(e, t));
    do try {
        Dp();
        break
    } catch (l) {
        Dc(e, l)
    }
    while (!0);
    if (Hi(), O = n, vl.current = r, X !== null) throw Error(N(261));
    return te = null, re = 0, Z
}

function Dp() {
    for (; X !== null;) $c(X)
}

function Ip() {
    for (; X !== null && !af();) $c(X)
}

function $c(e) {
    var t = Bc(e.alternate, e, xe);
    e.memoizedProps = e.pendingProps, t === null ? Ac(e) : X = t, ts.current = null
}

function Ac(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Lp(n, t), n !== null) {
                n.flags &= 32767, X = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Z = 6, X = null;
                return
            }
        } else if (n = _p(n, t, xe), n !== null) {
            X = n;
            return
        }
        if (t = t.sibling, t !== null) {
            X = t;
            return
        }
        X = t = e
    } while (t !== null);
    Z === 0 && (Z = 5)
}

function Lt(e, t, n) {
    var r = I,
        l = Re.transition;
    try {
        Re.transition = null, I = 1, $p(e, t, n, r)
    } finally {
        Re.transition = l, I = r
    }
    return null
}

function $p(e, t, n, r) {
    do an(); while (dt !== null);
    if (O & 6) throw Error(N(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (vf(e, o), e === te && (X = te = null, re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Or || (Or = !0, Hc(nl, function () {
        return an(), null
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Re.transition, Re.transition = null;
        var i = I;
        I = 1;
        var a = O;
        O |= 4, ts.current = null, zp(e, n), Mc(n, e), lp(Wo), ll = !!Vo, Wo = Vo = null, e.current = n, Mp(n), uf(), O = a, I = i, Re.transition = o
    } else e.current = n;
    if (Or && (Or = !1, dt = e, wl = l), o = e.pendingLanes, o === 0 && (yt = null), ff(n.stateNode), ve(e, G()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (xl) throw xl = !1, e = ci, ci = null, e;
    return wl & 1 && e.tag !== 0 && an(), o = e.pendingLanes, o & 1 ? e === di ? Wn++ : (Wn = 0, di = e) : Wn = 0, Ct(), null
}

function an() {
    if (dt !== null) {
        var e = xu(wl),
            t = Re.transition,
            n = I;
        try {
            if (Re.transition = null, I = 16 > e ? 16 : e, dt === null) var r = !1;
            else {
                if (e = dt, dt = null, wl = 0, O & 6) throw Error(N(331));
                var l = O;
                for (O |= 4, C = e.current; C !== null;) {
                    var o = C,
                        i = o.child;
                    if (C.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var c = a[u];
                                for (C = c; C !== null;) {
                                    var f = C;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hn(8, f, o)
                                    }
                                    var h = f.child;
                                    if (h !== null) h.return = f, C = h;
                                    else
                                        for (; C !== null;) {
                                            f = C;
                                            var g = f.sibling,
                                                x = f.return;
                                            if (Lc(f), f === c) {
                                                C = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = x, C = g;
                                                break
                                            }
                                            C = x
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var j = w.sibling;
                                        w.sibling = null, w = j
                                    } while (w !== null)
                                }
                            }
                            C = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
                    else e: for (; C !== null;) {
                        if (o = C, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Hn(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, C = p;
                            break e
                        }
                        C = o.return
                    }
                }
                var d = e.current;
                for (C = d; C !== null;) {
                    i = C;
                    var m = i.child;
                    if (i.subtreeFlags & 2064 && m !== null) m.return = i, C = m;
                    else e: for (i = d; C !== null;) {
                        if (a = C, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ml(9, a)
                            }
                        } catch (S) {
                            b(a, a.return, S)
                        }
                        if (a === i) {
                            C = null;
                            break e
                        }
                        var k = a.sibling;
                        if (k !== null) {
                            k.return = a.return, C = k;
                            break e
                        }
                        C = a.return
                    }
                }
                if (O = l, Ct(), He && typeof He.onPostCommitFiberRoot == "function") try {
                    He.onPostCommitFiberRoot(Cl, e)
                } catch { }
                r = !0
            }
            return r
        } finally {
            I = n, Re.transition = t
        }
    }
    return !1
}

function Ca(e, t, n) {
    t = mn(n, t), t = xc(e, t, 1), e = gt(e, t, 1), t = ce(), e !== null && (cr(e, 1, t), ve(e, t))
}

function b(e, t, n) {
    if (e.tag === 3) Ca(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ca(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yt === null || !yt.has(r))) {
                    e = mn(n, e), e = wc(t, e, 1), t = gt(t, e, 1), e = ce(), t !== null && (cr(t, 1, e), ve(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Ap(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, te === e && (re & n) === n && (Z === 4 || Z === 3 && (re & 130023424) === re && 500 > G() - rs ? Ft(e, 0) : ns |= n), ve(e, t)
}

function Uc(e, t) {
    t === 0 && (e.mode & 1 ? (t = Cr, Cr <<= 1, !(Cr & 130023424) && (Cr = 4194304)) : t = 1);
    var n = ce();
    e = et(e, t), e !== null && (cr(e, t, n), ve(e, n))
}

function Up(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Uc(e, n)
}

function Bp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(N(314))
    }
    r !== null && r.delete(t), Uc(e, n)
}
var Bc;
Bc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ge.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, Rp(e, t, n);
            he = !!(e.flags & 131072)
        }
    else he = !1, H && t.flags & 1048576 && Qu(t, dl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Kr(e, t), e = t.pendingProps;
            var l = cn(t, ae.current);
            sn(t, n), l = Xi(null, t, r, e, l, n);
            var o = Ji();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r) ? (o = !0, ul(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Qi(t), l.updater = zl, t.stateNode = l, l._reactInternals = t, qo(t, r, e, n), t = ni(null, t, r, !0, o, n)) : (t.tag = 0, H && o && $i(t), ue(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Kr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Vp(r), e = ze(r, e), l) {
                    case 0:
                        t = ti(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ha(null, t, r, e, n);
                        break e;
                    case 11:
                        t = pa(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ma(null, t, r, ze(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), ti(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), ha(e, t, r, l, n);
        case 3:
            e: {
                if (Sc(t), e === null) throw Error(N(387)); r = t.pendingProps,
                    o = t.memoizedState,
                    l = o.element,
                    Ju(e, t),
                    ml(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = mn(Error(N(423)), t), t = ga(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                        l = mn(Error(N(424)), t), t = ga(e, t, r, n, l);
                        break e
                    } else
                        for (we = ht(t.stateNode.containerInfo.firstChild), ke = t, H = !0, Fe = null, n = Gu(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (dn(), r === l) {
                        t = tt(e, t, n);
                        break e
                    }
                    ue(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Zu(t), e === null && Xo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Qo(r, l) ? i = null : o !== null && Qo(r, o) && (t.flags |= 32), jc(e, t), ue(e, t, i, n), t.child;
        case 6:
            return e === null && Xo(t), null;
        case 13:
            return Cc(e, t, n);
        case 4:
            return Ki(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fn(t, null, r, n) : ue(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), pa(e, t, r, l, n);
        case 7:
            return ue(e, t, t.pendingProps, n), t.child;
        case 8:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(fl, r._currentValue), r._currentValue = i, o !== null)
                    if (Ie(o.value, i)) {
                        if (o.children === l.children && !ge.current) {
                            t = tt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                i = o.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = Xe(-1, n & -n), u.tag = 2;
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var f = c.pending;
                                                f === null ? u.next = u : (u.next = f.next, f.next = u), c.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Jo(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(N(341));
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Jo(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                ue(e, t, l.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, sn(t, n), l = _e(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = ze(r, t.pendingProps), l = ze(r.type, l), ma(e, t, r, l, n);
        case 15:
            return kc(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Kr(e, t), t.tag = 1, ye(r) ? (e = !0, ul(t)) : e = !1, sn(t, n), vc(t, r, l), qo(t, r, l, n), ni(null, t, r, !0, e, n);
        case 19:
            return Ec(e, t, n);
        case 22:
            return Nc(e, t, n)
    }
    throw Error(N(156, t.tag))
};

function Hc(e, t) {
    return hu(e, t)
}

function Hp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Pe(e, t, n, r) {
    return new Hp(e, t, n, r)
}

function ss(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Vp(e) {
    if (typeof e == "function") return ss(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ei) return 11;
        if (e === Pi) return 14
    }
    return 2
}

function xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Pe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Gr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") ss(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Qt:
            return Ot(n.children, l, o, t);
        case Ci:
            i = 8, l |= 8;
            break;
        case jo:
            return e = Pe(12, n, t, l | 2), e.elementType = jo, e.lanes = o, e;
        case So:
            return e = Pe(13, n, t, l), e.elementType = So, e.lanes = o, e;
        case Co:
            return e = Pe(19, n, t, l), e.elementType = Co, e.lanes = o, e;
        case Za:
            return Ol(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Xa:
                    i = 10;
                    break e;
                case Ja:
                    i = 9;
                    break e;
                case Ei:
                    i = 11;
                    break e;
                case Pi:
                    i = 14;
                    break e;
                case it:
                    i = 16, r = null;
                    break e
            }
            throw Error(N(130, e == null ? e : typeof e, ""))
    }
    return t = Pe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function Ot(e, t, n, r) {
    return e = Pe(7, e, r, t), e.lanes = n, e
}

function Ol(e, t, n, r) {
    return e = Pe(22, e, r, t), e.elementType = Za, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function vo(e, t, n) {
    return e = Pe(6, e, null, t), e.lanes = n, e
}

function xo(e, t, n) {
    return t = Pe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Wp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function as(e, t, n, r, l, o, i, a, u) {
    return e = new Wp(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Pe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Qi(o), e
}

function Qp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Wt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Vc(e) {
    if (!e) return Nt;
    e = e._reactInternals;
    e: {
        if (Ht(e) !== e || e.tag !== 1) throw Error(N(170));
        var t = e; do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ye(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ye(n)) return Vu(e, n, t)
    }
    return t
}

function Wc(e, t, n, r, l, o, i, a, u) {
    return e = as(n, r, !0, e, l, o, i, a, u), e.context = Vc(null), n = e.current, r = ce(), l = vt(n), o = Xe(r, l), o.callback = t ?? null, gt(n, o, l), e.current.lanes = l, cr(e, l, r), ve(e, r), e
}

function Dl(e, t, n, r) {
    var l = t.current,
        o = ce(),
        i = vt(l);
    return n = Vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xe(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gt(l, t, i), e !== null && (De(e, l, i, o), Vr(e, l, i)), i
}

function Nl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ea(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function us(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t)
}

function Kp() {
    return null
}
var Qc = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function cs(e) {
    this._internalRoot = e
}
Il.prototype.render = cs.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    Dl(e, t, null, null)
};
Il.prototype.unmount = cs.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ut(function () {
            Dl(null, e, null, null)
        }), t[qe] = null
    }
};

function Il(e) {
    this._internalRoot = e
}
Il.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Nu();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
        at.splice(n, 0, e), n === 0 && Su(e)
    }
};

function ds(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function $l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Pa() { }

function bp(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = Nl(i);
                o.call(c)
            }
        }
        var i = Wc(t, r, e, 0, null, !1, !1, "", Pa);
        return e._reactRootContainer = i, e[qe] = i.current, qn(e.nodeType === 8 ? e.parentNode : e), Ut(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = Nl(u);
            a.call(c)
        }
    }
    var u = as(e, 0, !1, null, null, !1, !1, "", Pa);
    return e._reactRootContainer = u, e[qe] = u.current, qn(e.nodeType === 8 ? e.parentNode : e), Ut(function () {
        Dl(t, u, n, r)
    }), u
}

function Al(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var a = l;
            l = function () {
                var u = Nl(i);
                a.call(u)
            }
        }
        Dl(t, i, e, l)
    } else i = bp(n, t, e, l, r);
    return Nl(i)
}
wu = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Fn(t.pendingLanes);
                n !== 0 && (Li(t, n | 1), ve(t, G()), !(O & 6) && (hn = G() + 500, Ct()))
            }
            break;
        case 13:
            Ut(function () {
                var r = et(e, 1);
                if (r !== null) {
                    var l = ce();
                    De(r, e, 1, l)
                }
            }), us(e, 1)
    }
};
Ti = function (e) {
    if (e.tag === 13) {
        var t = et(e, 134217728);
        if (t !== null) {
            var n = ce();
            De(t, e, 134217728, n)
        }
        us(e, 134217728)
    }
};
ku = function (e) {
    if (e.tag === 13) {
        var t = vt(e),
            n = et(e, t);
        if (n !== null) {
            var r = ce();
            De(n, e, t, r)
        }
        us(e, t)
    }
};
Nu = function () {
    return I
};
ju = function (e, t) {
    var n = I;
    try {
        return I = e, t()
    } finally {
        I = n
    }
};
Oo = function (e, t, n) {
    switch (t) {
        case "input":
            if (Ro(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = _l(r);
                        if (!l) throw Error(N(90));
                        eu(r), Ro(r, l)
                    }
                }
            }
            break;
        case "textarea":
            nu(e, n);
            break;
        case "select":
            t = n.value, t != null && nn(e, !!n.multiple, t, !1)
    }
};
uu = ls;
cu = Ut;
var Yp = {
    usingClientEntryPoint: !1,
    Events: [fr, Gt, _l, su, au, ls]
},
    Ln = {
        findFiberByHostInstance: Tt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Gp = {
        bundleType: Ln.bundleType,
        version: Ln.version,
        rendererPackageName: Ln.rendererPackageName,
        rendererConfig: Ln.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: rt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = pu(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Ln.findFiberByHostInstance || Kp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dr.isDisabled && Dr.supportsFiber) try {
        Cl = Dr.inject(Gp), He = Dr
    } catch { }
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yp;
je.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ds(t)) throw Error(N(200));
    return Qp(e, t, null, n)
};
je.createRoot = function (e, t) {
    if (!ds(e)) throw Error(N(299));
    var n = !1,
        r = "",
        l = Qc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = as(e, 1, !1, null, null, n, !1, r, l), e[qe] = t.current, qn(e.nodeType === 8 ? e.parentNode : e), new cs(t)
};
je.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
    return e = pu(t), e = e === null ? null : e.stateNode, e
};
je.flushSync = function (e) {
    return Ut(e)
};
je.hydrate = function (e, t, n) {
    if (!$l(t)) throw Error(N(200));
    return Al(null, e, t, !0, n)
};
je.hydrateRoot = function (e, t, n) {
    if (!ds(e)) throw Error(N(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = Qc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Wc(t, null, e, 1, n ?? null, l, !1, o, i), e[qe] = t.current, qn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Il(t)
};
je.render = function (e, t, n) {
    if (!$l(t)) throw Error(N(200));
    return Al(null, e, t, !1, n)
};
je.unmountComponentAtNode = function (e) {
    if (!$l(e)) throw Error(N(40));
    return e._reactRootContainer ? (Ut(function () {
        Al(null, null, e, !1, function () {
            e._reactRootContainer = null, e[qe] = null
        })
    }), !0) : !1
};
je.unstable_batchedUpdates = ls;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!$l(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return Al(e, t, n, !1, r)
};
je.version = "18.3.1-next-f1338f8080-20240426";

function Kc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)
    } catch (e) {
        console.error(e)
    }
}
Kc(), Ka.exports = je;
var Xp = Ka.exports,
    bc, Ra = Xp;
bc = Ra.createRoot, Ra.hydrateRoot;
/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var _a = "popstate";

function Jp(e = {}) {
    function t(r, l) {
        let {
            pathname: o,
            search: i,
            hash: a
        } = r.location;
        return mi("", {
            pathname: o,
            search: i,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : ar(l)
    }
    return qp(t, n, null, e)
}

function Q(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function $e(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}

function Zp() {
    return Math.random().toString(36).substring(2, 10)
}

function La(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function mi(e, t, n = null, r) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? xn(t) : t,
        state: n,
        key: t && t.key || r || Zp()
    }
}

function ar({
    pathname: e = "/",
    search: t = "",
    hash: n = ""
}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e
}

function xn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e)
    }
    return t
}

function qp(e, t, n, r = {}) {
    let {
        window: l = document.defaultView,
        v5Compat: o = !1
    } = r, i = l.history, a = "POP", u = null, c = f();
    c == null && (c = 0, i.replaceState({
        ...i.state,
        idx: c
    }, ""));

    function f() {
        return (i.state || {
            idx: null
        }).idx
    }

    function h() {
        a = "POP";
        let j = f(),
            p = j == null ? null : j - c;
        c = j, u && u({
            action: a,
            location: w.location,
            delta: p
        })
    }

    function g(j, p) {
        a = "PUSH";
        let d = mi(w.location, j, p);
        c = f() + 1;
        let m = La(d, c),
            k = w.createHref(d);
        try {
            i.pushState(m, "", k)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError") throw S;
            l.location.assign(k)
        }
        o && u && u({
            action: a,
            location: w.location,
            delta: 1
        })
    }

    function x(j, p) {
        a = "REPLACE";
        let d = mi(w.location, j, p);
        c = f();
        let m = La(d, c),
            k = w.createHref(d);
        i.replaceState(m, "", k), o && u && u({
            action: a,
            location: w.location,
            delta: 0
        })
    }

    function y(j) {
        return em(j)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(l, i)
        },
        listen(j) {
            if (u) throw new Error("A history only accepts one active listener");
            return l.addEventListener(_a, h), u = j, () => {
                l.removeEventListener(_a, h), u = null
            }
        },
        createHref(j) {
            return t(l, j)
        },
        createURL: y,
        encodeLocation(j) {
            let p = y(j);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: g,
        replace: x,
        go(j) {
            return i.go(j)
        }
    };
    return w
}

function em(e, t = !1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), Q(n, "No window.location.(origin|href) available to create URL");
    let r = typeof e == "string" ? e : ar(e);
    return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n)
}

function Yc(e, t, n = "/") {
    return tm(e, t, n, !1)
}

function tm(e, t, n, r) {
    let l = typeof t == "string" ? xn(t) : t,
        o = nt(l.pathname || "/", n);
    if (o == null) return null;
    let i = Gc(e);
    nm(i);
    let a = null;
    for (let u = 0; a == null && u < i.length; ++u) {
        let c = pm(o);
        a = dm(i[u], c, r)
    }
    return a
}

function Gc(e, t = [], n = [], r = "", l = !1) {
    let o = (i, a, u = l, c) => {
        let f = {
            relativePath: c === void 0 ? i.path || "" : c,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: a,
            route: i
        };
        if (f.relativePath.startsWith("/")) {
            if (!f.relativePath.startsWith(r) && u) return;
            Q(f.relativePath.startsWith(r), `Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), f.relativePath = f.relativePath.slice(r.length)
        }
        let h = Je([r, f.relativePath]),
            g = n.concat(f);
        i.children && i.children.length > 0 && (Q(i.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`), Gc(i.children, t, g, h, u)), !(i.path == null && !i.index) && t.push({
            path: h,
            score: um(h, i.index),
            routesMeta: g
        })
    };
    return e.forEach((i, a) => {
        var u;
        if (i.path === "" || !((u = i.path) != null && u.includes("?"))) o(i, a);
        else
            for (let c of Xc(i.path)) o(i, a, !0, c)
    }), t
}

function Xc(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [o, ""] : [o];
    let i = Xc(r.join("/")),
        a = [];
    return a.push(...i.map(u => u === "" ? o : [o, u].join("/"))), l && a.push(...i), a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function nm(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : cm(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
var rm = /^:[\w-]+$/,
    lm = 3,
    om = 2,
    im = 1,
    sm = 10,
    am = -2,
    Ta = e => e === "*";

function um(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Ta) && (r += am), t && (r += om), n.filter(l => !Ta(l)).reduce((l, o) => l + (rm.test(o) ? lm : o === "" ? im : sm), r)
}

function cm(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function dm(e, t, n = !1) {
    let {
        routesMeta: r
    } = e, l = {}, o = "/", i = [];
    for (let a = 0; a < r.length; ++a) {
        let u = r[a],
            c = a === r.length - 1,
            f = o === "/" ? t : t.slice(o.length) || "/",
            h = jl({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: c
            }, f),
            g = u.route;
        if (!h && c && n && !r[r.length - 1].route.index && (h = jl({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, f)), !h) return null;
        Object.assign(l, h.params), i.push({
            params: l,
            pathname: Je([o, h.pathname]),
            pathnameBase: ym(Je([o, h.pathnameBase])),
            route: g
        }), h.pathnameBase !== "/" && (o = Je([o, h.pathnameBase]))
    }
    return i
}

function jl(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = fm(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let o = l[0],
        i = o.replace(/(.)\/+$/, "$1"),
        a = l.slice(1);
    return {
        params: r.reduce((c, {
            paramName: f,
            isOptional: h
        }, g) => {
            if (f === "*") {
                let y = a[g] || "";
                i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[g];
            return h && !x ? c[f] = void 0 : c[f] = (x || "").replace(/%2F/g, "/"), c
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}

function fm(e, t = !1, n = !0) {
    $e(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, u) => (r.push({
            paramName: a,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function pm(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return $e(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e
    }
}

function nt(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function mm(e, t = "/") {
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? xn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : hm(n, t) : t,
        search: vm(r),
        hash: xm(l)
    }
}

function hm(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function wo(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function gm(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Jc(e) {
    let t = gm(e);
    return t.map((n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase)
}

function Zc(e, t, n, r = !1) {
    let l;
    typeof e == "string" ? l = xn(e) : (l = {
        ...e
    }, Q(!l.pathname || !l.pathname.includes("?"), wo("?", "pathname", "search", l)), Q(!l.pathname || !l.pathname.includes("#"), wo("#", "pathname", "hash", l)), Q(!l.search || !l.search.includes("#"), wo("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "",
        i = o ? "/" : l.pathname,
        a;
    if (i == null) a = n;
    else {
        let h = t.length - 1;
        if (!r && i.startsWith("..")) {
            let g = i.split("/");
            for (; g[0] === "..";) g.shift(), h -= 1;
            l.pathname = g.join("/")
        }
        a = h >= 0 ? t[h] : "/"
    }
    let u = mm(l, a),
        c = i && i !== "/" && i.endsWith("/"),
        f = (o || i === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || f) && (u.pathname += "/"), u
}
var Je = e => e.join("/").replace(/\/\/+/g, "/"),
    ym = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    vm = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    xm = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function wm(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
var qc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(qc);
var km = ["GET", ...qc];
new Set(km);
var wn = v.createContext(null);
wn.displayName = "DataRouter";
var Ul = v.createContext(null);
Ul.displayName = "DataRouterState";
v.createContext(!1);
var ed = v.createContext({
    isTransitioning: !1
});
ed.displayName = "ViewTransition";
var Nm = v.createContext(new Map);
Nm.displayName = "Fetchers";
var jm = v.createContext(null);
jm.displayName = "Await";
var We = v.createContext(null);
We.displayName = "Navigation";
var mr = v.createContext(null);
mr.displayName = "Location";
var Qe = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Qe.displayName = "Route";
var fs = v.createContext(null);
fs.displayName = "RouteError";

function Sm(e, {
    relative: t
} = {}) {
    Q(hr(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: n,
        navigator: r
    } = v.useContext(We), {
        hash: l,
        pathname: o,
        search: i
    } = yr(e, {
        relative: t
    }), a = o;
    return n !== "/" && (a = o === "/" ? n : Je([n, o])), r.createHref({
        pathname: a,
        search: i,
        hash: l
    })
}

function hr() {
    return v.useContext(mr) != null
}

function Et() {
    return Q(hr(), "useLocation() may be used only in the context of a <Router> component."), v.useContext(mr).location
}
var td = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function nd(e) {
    v.useContext(We).static || v.useLayoutEffect(e)
}

function gr() {
    let {
        isDataRoute: e
    } = v.useContext(Qe);
    return e ? $m() : Cm()
}

function Cm() {
    Q(hr(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = v.useContext(wn),
        {
            basename: t,
            navigator: n
        } = v.useContext(We),
        {
            matches: r
        } = v.useContext(Qe),
        {
            pathname: l
        } = Et(),
        o = JSON.stringify(Jc(r)),
        i = v.useRef(!1);
    return nd(() => {
        i.current = !0
    }), v.useCallback((u, c = {}) => {
        if ($e(i.current, td), !i.current) return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let f = Zc(u, JSON.parse(o), l, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Je([t, f.pathname])), (c.replace ? n.replace : n.push)(f, c.state, c)
    }, [t, n, o, l, e])
}
v.createContext(null);

function Em() {
    let {
        matches: e
    } = v.useContext(Qe), t = e[e.length - 1];
    return t ? t.params : {}
}

function yr(e, {
    relative: t
} = {}) {
    let {
        matches: n
    } = v.useContext(Qe), {
        pathname: r
    } = Et(), l = JSON.stringify(Jc(n));
    return v.useMemo(() => Zc(e, JSON.parse(l), r, t === "path"), [e, l, r, t])
}

function Pm(e, t) {
    return rd(e, t)
}

function rd(e, t, n, r, l) {
    var d;
    Q(hr(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: o
    } = v.useContext(We), {
        matches: i
    } = v.useContext(Qe), a = i[i.length - 1], u = a ? a.params : {}, c = a ? a.pathname : "/", f = a ? a.pathnameBase : "/", h = a && a.route; {
        let m = h && h.path || "";
        ld(c, !h || m.endsWith("*") || m.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m === "/" ? "*" : `${m}/*`}">.`)
    }
    let g = Et(),
        x;
    if (t) {
        let m = typeof t == "string" ? xn(t) : t;
        Q(f === "/" || ((d = m.pathname) == null ? void 0 : d.startsWith(f)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${m.pathname}" was given in the \`location\` prop.`), x = m
    } else x = g;
    let y = x.pathname || "/",
        w = y;
    if (f !== "/") {
        let m = f.replace(/^\//, "").split("/");
        w = "/" + y.replace(/^\//, "").split("/").slice(m.length).join("/")
    }
    let j = Yc(e, {
        pathname: w
    });
    $e(h || j != null, `No routes matched location "${x.pathname}${x.search}${x.hash}" `), $e(j == null || j[j.length - 1].route.element !== void 0 || j[j.length - 1].route.Component !== void 0 || j[j.length - 1].route.lazy !== void 0, `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let p = zm(j && j.map(m => Object.assign({}, m, {
        params: Object.assign({}, u, m.params),
        pathname: Je([f, o.encodeLocation ? o.encodeLocation(m.pathname).pathname : m.pathname]),
        pathnameBase: m.pathnameBase === "/" ? f : Je([f, o.encodeLocation ? o.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
    })), i, n, r, l);
    return t && p ? v.createElement(mr.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...x
            },
            navigationType: "POP"
        }
    }, p) : p
}

function Rm() {
    let e = Im(),
        t = wm(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        l = {
            padding: "0.5rem",
            backgroundColor: r
        },
        o = {
            padding: "2px 4px",
            backgroundColor: r
        },
        i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), i = v.createElement(v.Fragment, null, v.createElement("p", null, "💿 Hey developer 👋"), v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", v.createElement("code", {
        style: o
    }, "ErrorBoundary"), " or", " ", v.createElement("code", {
        style: o
    }, "errorElement"), " prop on your route.")), v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? v.createElement("pre", {
        style: l
    }, n) : null, i)
}
var _m = v.createElement(Rm, null),
    Lm = class extends v.Component {
        constructor(e) {
            super(e), this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: e.error !== void 0 ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation
            }
        }
        componentDidCatch(e, t) {
            this.props.unstable_onError ? this.props.unstable_onError(e, t) : console.error("React Router caught the following error during render", e)
        }
        render() {
            return this.state.error !== void 0 ? v.createElement(Qe.Provider, {
                value: this.props.routeContext
            }, v.createElement(fs.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function Tm({
    routeContext: e,
    match: t,
    children: n
}) {
    let r = v.useContext(wn);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), v.createElement(Qe.Provider, {
        value: e
    }, n)
}

function zm(e, t = [], n = null, r = null, l = null) {
    if (e == null) {
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let o = e,
        i = n == null ? void 0 : n.errors;
    if (i != null) {
        let c = o.findIndex(f => f.route.id && (i == null ? void 0 : i[f.route.id]) !== void 0);
        Q(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`), o = o.slice(0, Math.min(o.length, c + 1))
    }
    let a = !1,
        u = -1;
    if (n)
        for (let c = 0; c < o.length; c++) {
            let f = o[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
                let {
                    loaderData: h,
                    errors: g
                } = n, x = f.route.loader && !h.hasOwnProperty(f.route.id) && (!g || g[f.route.id] === void 0);
                if (f.route.lazy || x) {
                    a = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((c, f, h) => {
        let g, x = !1,
            y = null,
            w = null;
        n && (g = i && f.route.id ? i[f.route.id] : void 0, y = f.route.errorElement || _m, a && (u < 0 && h === 0 ? (ld("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), x = !0, w = null) : u === h && (x = !0, w = f.route.hydrateFallbackElement || null)));
        let j = t.concat(o.slice(0, h + 1)),
            p = () => {
                let d;
                return g ? d = y : x ? d = w : f.route.Component ? d = v.createElement(f.route.Component, null) : f.route.element ? d = f.route.element : d = c, v.createElement(Tm, {
                    match: f,
                    routeContext: {
                        outlet: c,
                        matches: j,
                        isDataRoute: n != null
                    },
                    children: d
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? v.createElement(Lm, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: g,
            children: p(),
            routeContext: {
                outlet: null,
                matches: j,
                isDataRoute: !0
            },
            unstable_onError: r
        }) : p()
    }, null)
}

function ps(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Mm(e) {
    let t = v.useContext(wn);
    return Q(t, ps(e)), t
}

function Fm(e) {
    let t = v.useContext(Ul);
    return Q(t, ps(e)), t
}

function Om(e) {
    let t = v.useContext(Qe);
    return Q(t, ps(e)), t
}

function ms(e) {
    let t = Om(e),
        n = t.matches[t.matches.length - 1];
    return Q(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id
}

function Dm() {
    return ms("useRouteId")
}

function Im() {
    var r;
    let e = v.useContext(fs),
        t = Fm("useRouteError"),
        n = ms("useRouteError");
    return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n]
}

function $m() {
    let {
        router: e
    } = Mm("useNavigate"), t = ms("useNavigate"), n = v.useRef(!1);
    return nd(() => {
        n.current = !0
    }), v.useCallback(async (l, o = {}) => {
        $e(n.current, td), n.current && (typeof l == "number" ? e.navigate(l) : await e.navigate(l, {
            fromRouteId: t,
            ...o
        }))
    }, [e, t])
}
var za = {};

function ld(e, t, n) {
    !t && !za[e] && (za[e] = !0, $e(!1, n))
}
v.memo(Am);

function Am({
    routes: e,
    future: t,
    state: n,
    unstable_onError: r
}) {
    return rd(e, void 0, n, r, t)
}

function ot(e) {
    Q(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function Um({
    basename: e = "/",
    children: t = null,
    location: n,
    navigationType: r = "POP",
    navigator: l,
    static: o = !1
}) {
    Q(!hr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let i = e.replace(/^\/*/, "/"),
        a = v.useMemo(() => ({
            basename: i,
            navigator: l,
            static: o,
            future: {}
        }), [i, l, o]);
    typeof n == "string" && (n = xn(n));
    let {
        pathname: u = "/",
        search: c = "",
        hash: f = "",
        state: h = null,
        key: g = "default"
    } = n, x = v.useMemo(() => {
        let y = nt(u, i);
        return y == null ? null : {
            location: {
                pathname: y,
                search: c,
                hash: f,
                state: h,
                key: g
            },
            navigationType: r
        }
    }, [i, u, c, f, h, g, r]);
    return $e(x != null, `<Router basename="${i}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`), x == null ? null : v.createElement(We.Provider, {
        value: a
    }, v.createElement(mr.Provider, {
        children: t,
        value: x
    }))
}

function Bm({
    children: e,
    location: t
}) {
    return Pm(hi(e), t)
}

function hi(e, t = []) {
    let n = [];
    return v.Children.forEach(e, (r, l) => {
        if (!v.isValidElement(r)) return;
        let o = [...t, l];
        if (r.type === v.Fragment) {
            n.push.apply(n, hi(r.props.children, o));
            return
        }
        Q(r.type === ot, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Q(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = hi(r.props.children, o)), n.push(i)
    }), n
}
var Xr = "get",
    Jr = "application/x-www-form-urlencoded";

function Bl(e) {
    return e != null && typeof e.tagName == "string"
}

function Hm(e) {
    return Bl(e) && e.tagName.toLowerCase() === "button"
}

function Vm(e) {
    return Bl(e) && e.tagName.toLowerCase() === "form"
}

function Wm(e) {
    return Bl(e) && e.tagName.toLowerCase() === "input"
}

function Qm(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Km(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Qm(e)
}

function gi(e = "") {
    return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(l => [n, l]) : [
            [n, r]
        ])
    }, []))
}

function bm(e, t) {
    let n = gi(e);
    return t && t.forEach((r, l) => {
        n.has(l) || t.getAll(l).forEach(o => {
            n.append(l, o)
        })
    }), n
}
var Ir = null;

function Ym() {
    if (Ir === null) try {
        new FormData(document.createElement("form"), 0), Ir = !1
    } catch {
        Ir = !0
    }
    return Ir
}
var Gm = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function ko(e) {
    return e != null && !Gm.has(e) ? ($e(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jr}"`), null) : e
}

function Xm(e, t) {
    let n, r, l, o, i;
    if (Vm(e)) {
        let a = e.getAttribute("action");
        r = a ? nt(a, t) : null, n = e.getAttribute("method") || Xr, l = ko(e.getAttribute("enctype")) || Jr, o = new FormData(e)
    } else if (Hm(e) || Wm(e) && (e.type === "submit" || e.type === "image")) {
        let a = e.form;
        if (a == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || a.getAttribute("action");
        if (r = u ? nt(u, t) : null, n = e.getAttribute("formmethod") || a.getAttribute("method") || Xr, l = ko(e.getAttribute("formenctype")) || ko(a.getAttribute("enctype")) || Jr, o = new FormData(a, e), !Ym()) {
            let {
                name: c,
                type: f,
                value: h
            } = e;
            if (f === "image") {
                let g = c ? `${c}.` : "";
                o.append(`${g}x`, "0"), o.append(`${g}y`, "0")
            } else c && o.append(c, h)
        }
    } else {
        if (Bl(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = Xr, r = null, l = Jr, i = e
    }
    return o && l === "text/plain" && (i = o, o = void 0), {
        action: r,
        method: n.toLowerCase(),
        encType: l,
        formData: o,
        body: i
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function hs(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Jm(e, t, n) {
    let r = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return r.pathname === "/" ? r.pathname = `_root.${n}` : t && nt(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.${n}` : r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`, r
}
async function Zm(e, t) {
    if (e.id in t) return t[e.id];
    try {
        let n = await
            import(e.module);
        return t[e.id] = n, n
    } catch (n) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => { })
    }
}

function qm(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function eh(e, t, n) {
    let r = await Promise.all(e.map(async l => {
        let o = t.routes[l.route.id];
        if (o) {
            let i = await Zm(o, n);
            return i.links ? i.links() : []
        }
        return []
    }));
    return lh(r.flat(1).filter(qm).filter(l => l.rel === "stylesheet" || l.rel === "preload").map(l => l.rel === "stylesheet" ? {
        ...l,
        rel: "prefetch",
        as: "style"
    } : {
        ...l,
        rel: "prefetch"
    }))
}

function Ma(e, t, n, r, l, o) {
    let i = (u, c) => n[c] ? u.route.id !== n[c].route.id : !0,
        a = (u, c) => {
            var f;
            return n[c].pathname !== u.pathname || ((f = n[c].route.path) == null ? void 0 : f.endsWith("*")) && n[c].params["*"] !== u.params["*"]
        };
    return o === "assets" ? t.filter((u, c) => i(u, c) || a(u, c)) : o === "data" ? t.filter((u, c) => {
        var h;
        let f = r.routes[u.route.id];
        if (!f || !f.hasLoader) return !1;
        if (i(u, c) || a(u, c)) return !0;
        if (u.route.shouldRevalidate) {
            let g = u.route.shouldRevalidate({
                currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
                currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
                nextUrl: new URL(e, window.origin),
                nextParams: u.params,
                defaultShouldRevalidate: !0
            });
            if (typeof g == "boolean") return g
        }
        return !0
    }) : []
}

function th(e, t, {
    includeHydrateFallback: n
} = {}) {
    return nh(e.map(r => {
        let l = t.routes[r.route.id];
        if (!l) return [];
        let o = [l.module];
        return l.clientActionModule && (o = o.concat(l.clientActionModule)), l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)), n && l.hydrateFallbackModule && (o = o.concat(l.hydrateFallbackModule)), l.imports && (o = o.concat(l.imports)), o
    }).flat(1))
}

function nh(e) {
    return [...new Set(e)]
}

function rh(e) {
    let t = {},
        n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t
}

function lh(e, t) {
    let n = new Set;
    return new Set(t), e.reduce((r, l) => {
        let o = JSON.stringify(rh(l));
        return n.has(o) || (n.add(o), r.push({
            key: o,
            link: l
        })), r
    }, [])
}

function od() {
    let e = v.useContext(wn);
    return hs(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
}

function oh() {
    let e = v.useContext(Ul);
    return hs(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
}
var gs = v.createContext(void 0);
gs.displayName = "FrameworkContext";

function id() {
    let e = v.useContext(gs);
    return hs(e, "You must render this element inside a <HydratedRouter> element"), e
}

function ih(e, t) {
    let n = v.useContext(gs),
        [r, l] = v.useState(!1),
        [o, i] = v.useState(!1),
        {
            onFocus: a,
            onBlur: u,
            onMouseEnter: c,
            onMouseLeave: f,
            onTouchStart: h
        } = t,
        g = v.useRef(null);
    v.useEffect(() => {
        if (e === "render" && i(!0), e === "viewport") {
            let w = p => {
                p.forEach(d => {
                    i(d.isIntersecting)
                })
            },
                j = new IntersectionObserver(w, {
                    threshold: .5
                });
            return g.current && j.observe(g.current), () => {
                j.disconnect()
            }
        }
    }, [e]), v.useEffect(() => {
        if (r) {
            let w = setTimeout(() => {
                i(!0)
            }, 100);
            return () => {
                clearTimeout(w)
            }
        }
    }, [r]);
    let x = () => {
        l(!0)
    },
        y = () => {
            l(!1), i(!1)
        };
    return n ? e !== "intent" ? [o, g, {}] : [o, g, {
        onFocus: Tn(a, x),
        onBlur: Tn(u, y),
        onMouseEnter: Tn(c, x),
        onMouseLeave: Tn(f, y),
        onTouchStart: Tn(h, x)
    }] : [!1, g, {}]
}

function Tn(e, t) {
    return n => {
        e && e(n), n.defaultPrevented || t(n)
    }
}

function sh({
    page: e,
    ...t
}) {
    let {
        router: n
    } = od(), r = v.useMemo(() => Yc(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? v.createElement(uh, {
        page: e,
        matches: r,
        ...t
    }) : null
}

function ah(e) {
    let {
        manifest: t,
        routeModules: n
    } = id(), [r, l] = v.useState([]);
    return v.useEffect(() => {
        let o = !1;
        return eh(e, t, n).then(i => {
            o || l(i)
        }), () => {
            o = !0
        }
    }, [e, t, n]), r
}

function uh({
    page: e,
    matches: t,
    ...n
}) {
    let r = Et(),
        {
            manifest: l,
            routeModules: o
        } = id(),
        {
            basename: i
        } = od(),
        {
            loaderData: a,
            matches: u
        } = oh(),
        c = v.useMemo(() => Ma(e, t, u, l, r, "data"), [e, t, u, l, r]),
        f = v.useMemo(() => Ma(e, t, u, l, r, "assets"), [e, t, u, l, r]),
        h = v.useMemo(() => {
            if (e === r.pathname + r.search + r.hash) return [];
            let y = new Set,
                w = !1;
            if (t.forEach(p => {
                var m;
                let d = l.routes[p.route.id];
                !d || !d.hasLoader || (!c.some(k => k.route.id === p.route.id) && p.route.id in a && ((m = o[p.route.id]) != null && m.shouldRevalidate) || d.hasClientLoader ? w = !0 : y.add(p.route.id))
            }), y.size === 0) return [];
            let j = Jm(e, i, "data");
            return w && y.size > 0 && j.searchParams.set("_routes", t.filter(p => y.has(p.route.id)).map(p => p.route.id).join(",")), [j.pathname + j.search]
        }, [i, a, r, l, c, t, e, o]),
        g = v.useMemo(() => th(f, l), [f, l]),
        x = ah(f);
    return v.createElement(v.Fragment, null, h.map(y => v.createElement("link", {
        key: y,
        rel: "prefetch",
        as: "fetch",
        href: y,
        ...n
    })), g.map(y => v.createElement("link", {
        key: y,
        rel: "modulepreload",
        href: y,
        ...n
    })), x.map(({
        key: y,
        link: w
    }) => v.createElement("link", {
        key: y,
        nonce: n.nonce,
        ...w
    })))
}

function ch(...e) {
    return t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        })
    }
}
var sd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    sd && (window.__reactRouterVersion = "7.8.2")
} catch { }

function dh({
    basename: e,
    children: t,
    window: n
}) {
    let r = v.useRef();
    r.current == null && (r.current = Jp({
        window: n,
        v5Compat: !0
    }));
    let l = r.current,
        [o, i] = v.useState({
            action: l.action,
            location: l.location
        }),
        a = v.useCallback(u => {
            v.startTransition(() => i(u))
        }, [i]);
    return v.useLayoutEffect(() => l.listen(a), [l, a]), v.createElement(Um, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: l
    })
}
var ad = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    D = v.forwardRef(function ({
        onClick: t,
        discover: n = "render",
        prefetch: r = "none",
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: c,
        preventScrollReset: f,
        viewTransition: h,
        ...g
    }, x) {
        let {
            basename: y
        } = v.useContext(We), w = typeof c == "string" && ad.test(c), j, p = !1;
        if (typeof c == "string" && w && (j = c, sd)) try {
            let F = new URL(window.location.href),
                L = c.startsWith("//") ? new URL(F.protocol + c) : new URL(c),
                pe = nt(L.pathname, y);
            L.origin === F.origin && pe != null ? c = pe + L.search + L.hash : p = !0
        } catch {
            $e(!1, `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let d = Sm(c, {
            relative: l
        }),
            [m, k, S] = ih(r, g),
            R = hh(c, {
                replace: i,
                state: a,
                target: u,
                preventScrollReset: f,
                relative: l,
                viewTransition: h
            });

        function P(F) {
            t && t(F), F.defaultPrevented || R(F)
        }
        let _ = v.createElement("a", {
            ...g,
            ...S,
            href: j || d,
            onClick: p || o ? t : P,
            ref: ch(x, k),
            target: u,
            "data-discover": !w && n === "render" ? "true" : void 0
        });
        return m && !w ? v.createElement(v.Fragment, null, _, v.createElement(sh, {
            page: d
        })) : _
    });
D.displayName = "Link";
var fh = v.forwardRef(function ({
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: l = !1,
    style: o,
    to: i,
    viewTransition: a,
    children: u,
    ...c
}, f) {
    let h = yr(i, {
        relative: c.relative
    }),
        g = Et(),
        x = v.useContext(Ul),
        {
            navigator: y,
            basename: w
        } = v.useContext(We),
        j = x != null && kh(h) && a === !0,
        p = y.encodeLocation ? y.encodeLocation(h).pathname : h.pathname,
        d = g.pathname,
        m = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    n || (d = d.toLowerCase(), m = m ? m.toLowerCase() : null, p = p.toLowerCase()), m && w && (m = nt(m, w) || m);
    const k = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let S = d === p || !l && d.startsWith(p) && d.charAt(k) === "/",
        R = m != null && (m === p || !l && m.startsWith(p) && m.charAt(p.length) === "/"),
        P = {
            isActive: S,
            isPending: R,
            isTransitioning: j
        },
        _ = S ? t : void 0,
        F;
    typeof r == "function" ? F = r(P) : F = [r, S ? "active" : null, R ? "pending" : null, j ? "transitioning" : null].filter(Boolean).join(" ");
    let L = typeof o == "function" ? o(P) : o;
    return v.createElement(D, {
        ...c,
        "aria-current": _,
        className: F,
        ref: f,
        style: L,
        to: i,
        viewTransition: a
    }, typeof u == "function" ? u(P) : u)
});
fh.displayName = "NavLink";
var ph = v.forwardRef(({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: l,
    state: o,
    method: i = Xr,
    action: a,
    onSubmit: u,
    relative: c,
    preventScrollReset: f,
    viewTransition: h,
    ...g
}, x) => {
    let y = xh(),
        w = wh(a, {
            relative: c
        }),
        j = i.toLowerCase() === "get" ? "get" : "post",
        p = typeof a == "string" && ad.test(a),
        d = m => {
            if (u && u(m), m.defaultPrevented) return;
            m.preventDefault();
            let k = m.nativeEvent.submitter,
                S = (k == null ? void 0 : k.getAttribute("formmethod")) || i;
            y(k || m.currentTarget, {
                fetcherKey: t,
                method: S,
                navigate: n,
                replace: l,
                state: o,
                relative: c,
                preventScrollReset: f,
                viewTransition: h
            })
        };
    return v.createElement("form", {
        ref: x,
        method: j,
        action: w,
        onSubmit: r ? u : d,
        ...g,
        "data-discover": !p && e === "render" ? "true" : void 0
    })
});
ph.displayName = "Form";

function mh(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function ud(e) {
    let t = v.useContext(wn);
    return Q(t, mh(e)), t
}

function hh(e, {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: l,
    relative: o,
    viewTransition: i
} = {}) {
    let a = gr(),
        u = Et(),
        c = yr(e, {
            relative: o
        });
    return v.useCallback(f => {
        if (Km(f, t)) {
            f.preventDefault();
            let h = n !== void 0 ? n : ar(u) === ar(c);
            a(e, {
                replace: h,
                state: r,
                preventScrollReset: l,
                relative: o,
                viewTransition: i
            })
        }
    }, [u, a, c, n, r, t, e, l, o, i])
}

function gh(e) {
    $e(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = v.useRef(gi(e)),
        n = v.useRef(!1),
        r = Et(),
        l = v.useMemo(() => bm(r.search, n.current ? null : t.current), [r.search]),
        o = gr(),
        i = v.useCallback((a, u) => {
            const c = gi(typeof a == "function" ? a(new URLSearchParams(l)) : a);
            n.current = !0, o("?" + c, u)
        }, [o, l]);
    return [l, i]
}
var yh = 0,
    vh = () => `__${String(++yh)}__`;

function xh() {
    let {
        router: e
    } = ud("useSubmit"), {
        basename: t
    } = v.useContext(We), n = Dm();
    return v.useCallback(async (r, l = {}) => {
        let {
            action: o,
            method: i,
            encType: a,
            formData: u,
            body: c
        } = Xm(r, t);
        if (l.navigate === !1) {
            let f = l.fetcherKey || vh();
            await e.fetch(f, n, l.action || o, {
                preventScrollReset: l.preventScrollReset,
                formData: u,
                body: c,
                formMethod: l.method || i,
                formEncType: l.encType || a,
                flushSync: l.flushSync
            })
        } else await e.navigate(l.action || o, {
            preventScrollReset: l.preventScrollReset,
            formData: u,
            body: c,
            formMethod: l.method || i,
            formEncType: l.encType || a,
            replace: l.replace,
            state: l.state,
            fromRouteId: n,
            flushSync: l.flushSync,
            viewTransition: l.viewTransition
        })
    }, [e, t, n])
}

function wh(e, {
    relative: t
} = {}) {
    let {
        basename: n
    } = v.useContext(We), r = v.useContext(Qe);
    Q(r, "useFormAction must be used inside a RouteContext");
    let [l] = r.matches.slice(-1), o = {
        ...yr(e || ".", {
            relative: t
        })
    }, i = Et();
    if (e == null) {
        o.search = i.search;
        let a = new URLSearchParams(o.search),
            u = a.getAll("index");
        if (u.some(f => f === "")) {
            a.delete("index"), u.filter(h => h).forEach(h => a.append("index", h));
            let f = a.toString();
            o.search = f ? `?${f}` : ""
        }
    }
    return (!e || e === ".") && l.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : Je([n, o.pathname])), ar(o)
}

function kh(e, {
    relative: t
} = {}) {
    let n = v.useContext(ed);
    Q(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: r
    } = ud("useViewTransitionState"), l = yr(e, {
        relative: t
    });
    if (!n.isTransitioning) return !1;
    let o = nt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        i = nt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return jl(l.pathname, i) != null || jl(l.pathname, o) != null
}
const cd = v.createContext(void 0),
    Hl = () => {
        const e = v.useContext(cd);
        if (!e) throw new Error("useCart must be used within a CartProvider");
        return e
    },
    Nh = ({
        children: e
    }) => {
        const [t, n] = v.useState([]), r = (f, h = 1) => {
            n(g => g.find(y => y.product.id === f.id) ? g.map(y => y.product.id === f.id ? {
                ...y,
                quantity: y.quantity + h
            } : y) : [...g, {
                product: f,
                quantity: h
            }])
        }, l = f => {
            n(h => h.filter(g => g.product.id !== f))
        }, c = {
            cartItems: t,
            addToCart: r,
            removeFromCart: l,
            updateQuantity: (f, h) => {
                if (h <= 0) {
                    l(f);
                    return
                }
                n(g => g.map(x => x.product.id === f ? {
                    ...x,
                    quantity: h
                } : x))
            },
            clearCart: () => {
                n([])
            },
            getTotalItems: () => t.reduce((f, h) => f + h.quantity, 0),
            getTotalPrice: () => t.reduce((f, h) => f + h.product.price * h.quantity, 0)
        };
        return s.jsx(cd.Provider, {
            value: c,
            children: e
        })
    },
    dd = v.createContext(void 0),
    ys = () => {
        const e = v.useContext(dd);
        if (!e) throw new Error("useAuth must be used within an AuthProvider");
        return e
    },
    jh = ({
        children: e
    }) => {
        const [t, n] = v.useState(!1), [r, l] = v.useState(null), u = {
            isAuthenticated: t,
            user: r,
            login: async (c, f) => (await new Promise(h => setTimeout(h, 1e3)), c && f.length >= 6 ? (n(!0), l({
                name: c.split("@")[0],
                email: c
            }), !0) : !1),
            signup: async (c, f, h) => (await new Promise(g => setTimeout(g, 1e3)), c && f && h.length >= 6 ? (n(!0), l({
                name: c,
                email: f
            }), !0) : !1),
            logout: () => {
                n(!1), l(null)
            }
        };
        return s.jsx(dd.Provider, {
            value: u,
            children: e
        })
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sh = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    A = (e, t) => {
        const n = v.forwardRef(({
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: i,
            className: a = "",
            children: u,
            ...c
        }, f) => v.createElement("svg", {
            ref: f,
            ...Sh,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? Number(o) * 24 / Number(l) : o,
            className: ["lucide", `lucide-${Ch(e)}`, a].join(" "),
            ...c
        }, [...t.map(([h, g]) => v.createElement(h, g)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = A("ArrowLeft", [
    ["path", {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
    }],
    ["path", {
        d: "M19 12H5",
        key: "x3x0zl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = A("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = A("Clock", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = A("EyeOff", [
    ["path", {
        d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
        key: "1jxqfv"
    }],
    ["path", {
        d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
        key: "9wicm4"
    }],
    ["path", {
        d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
        key: "1jreej"
    }],
    ["line", {
        x1: "2",
        x2: "22",
        y1: "2",
        y2: "22",
        key: "a6p6uj"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = A("Eye", [
    ["path", {
        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
        key: "rwhkz3"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = A("Filter", [
    ["polygon", {
        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
        key: "1yg77f"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = A("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = A("LogOut", [
    ["path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
    }],
    ["polyline", {
        points: "16 17 21 12 16 7",
        key: "1gabdz"
    }],
    ["line", {
        x1: "21",
        x2: "9",
        y1: "12",
        y2: "12",
        key: "1uyos4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = A("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lh = A("MapPin", [
    ["path", {
        d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
        key: "2oe9fu"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th = A("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = A("Minus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zh = A("Package", [
    ["path", {
        d: "m7.5 4.27 9 5.15",
        key: "1c824w"
    }],
    ["path", {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
        key: "hh9hay"
    }],
    ["path", {
        d: "m3.3 7 8.7 5 8.7-5",
        key: "g66t2b"
    }],
    ["path", {
        d: "M12 22V12",
        key: "d0xqtd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh = A("Phone", [
    ["path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = A("Plus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "M12 5v14",
        key: "s699le"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = A("Search", [
    ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }],
    ["path", {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = A("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = A("ShoppingBag", [
    ["path", {
        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
        key: "hou9p0"
    }],
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M16 10a4 4 0 0 1-8 0",
        key: "1ltviw"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = A("ShoppingCart", [
    ["circle", {
        cx: "8",
        cy: "21",
        r: "1",
        key: "jimo8o"
    }],
    ["circle", {
        cx: "19",
        cy: "21",
        r: "1",
        key: "13723u"
    }],
    ["path", {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = A("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oh = A("Trash2", [
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
        key: "4alrt4"
    }],
    ["path", {
        d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
        key: "v07s0e"
    }],
    ["line", {
        x1: "10",
        x2: "10",
        y1: "11",
        y2: "17",
        key: "1uufr5"
    }],
    ["line", {
        x1: "14",
        x2: "14",
        y1: "11",
        y2: "17",
        key: "xtxkd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dh = A("TrendingUp", [
    ["polyline", {
        points: "22 7 13.5 15.5 8.5 10.5 2 17",
        key: "126l90"
    }],
    ["polyline", {
        points: "16 7 22 7 22 13",
        key: "kwv8wd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = A("Truck", [
    ["path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53"
    }],
    ["path", {
        d: "M15 18H9",
        key: "1lyqi6"
    }],
    ["path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
    }],
    ["circle", {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn"
    }],
    ["circle", {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = A("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = A("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = A("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]),
    Ah = () => {
        const [e, t] = v.useState(!1), [n, r] = v.useState(""), {
            getTotalItems: l
        } = Hl(), {
            isAuthenticated: o,
            user: i,
            logout: a
        } = ys(), u = gr(), c = h => {
            h.preventDefault(), n.trim() && (u(`/products?search=${encodeURIComponent(n.trim())}`), r(""))
        }, f = () => {
            a(), u("/")
        };
        return s.jsxs("nav", {
            className: "bg-white shadow-lg sticky top-0 z-50",
            children: [s.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: s.jsxs("div", {
                    className: "flex justify-between items-center h-16",
                    children: [s.jsxs(D, {
                        to: "/",
                        className: "flex items-center space-x-2",
                        children: [s.jsx("div", {
                            className: "w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center",
                            children: s.jsx(wt, {
                                className: "w-5 h-5 text-white"
                            })
                        }), s.jsx("span", {
                            className: "text-xl font-bold text-gray-900",
                            children: "FreshMart"
                        })]
                    }), s.jsx("form", {
                        onSubmit: c,
                        className: "hidden md:flex flex-1 max-w-lg mx-8",
                        children: s.jsxs("div", {
                            className: "relative w-full",
                            children: [s.jsx("input", {
                                type: "text",
                                value: n,
                                onChange: h => r(h.target.value),
                                placeholder: "Search for groceries...",
                                className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            }), s.jsx(Fa, {
                                className: "absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "hidden md:flex items-center space-x-6",
                        children: [s.jsx(D, {
                            to: "/products",
                            className: "text-gray-700 hover:text-emerald-600 transition-colors",
                            children: "Products"
                        }), o ? s.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [s.jsxs("span", {
                                className: "text-gray-700",
                                children: ["Hi, ", i == null ? void 0 : i.name]
                            }), s.jsxs("button", {
                                onClick: f,
                                className: "text-gray-700 hover:text-emerald-600 transition-colors flex items-center space-x-1",
                                children: [s.jsx(_h, {
                                    className: "w-4 h-4"
                                }), s.jsx("span", {
                                    children: "Logout"
                                })]
                            })]
                        }) : s.jsxs(D, {
                            to: "/login",
                            className: "text-gray-700 hover:text-emerald-600 transition-colors flex items-center space-x-1",
                            children: [s.jsx(vd, {
                                className: "w-5 h-5"
                            }), s.jsx("span", {
                                children: "Login"
                            })]
                        }), s.jsxs(D, {
                            to: "/cart",
                            className: "relative text-gray-700 hover:text-emerald-600 transition-colors",
                            children: [s.jsx(wt, {
                                className: "w-6 h-6"
                            }), l() > 0 && s.jsx("span", {
                                className: "absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                children: l()
                            })]
                        })]
                    }), s.jsx("button", {
                        onClick: () => t(!e),
                        className: "md:hidden text-gray-700 hover:text-emerald-600",
                        children: e ? s.jsx(xd, {
                            className: "w-6 h-6"
                        }) : s.jsx(Th, {
                            className: "w-6 h-6"
                        })
                    })]
                })
            }), e && s.jsx("div", {
                className: "md:hidden bg-white border-t border-gray-200",
                children: s.jsxs("div", {
                    className: "px-4 py-4 space-y-4",
                    children: [s.jsx("form", {
                        onSubmit: c,
                        children: s.jsxs("div", {
                            className: "relative",
                            children: [s.jsx("input", {
                                type: "text",
                                value: n,
                                onChange: h => r(h.target.value),
                                placeholder: "Search for groceries...",
                                className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            }), s.jsx(Fa, {
                                className: "absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                            })]
                        })
                    }), s.jsx(D, {
                        to: "/products",
                        className: "block text-gray-700 hover:text-emerald-600 transition-colors",
                        onClick: () => t(!1),
                        children: "Products"
                    }), o ? s.jsxs("div", {
                        className: "space-y-2",
                        children: [s.jsxs("div", {
                            className: "text-gray-700",
                            children: ["Hi, ", i == null ? void 0 : i.name]
                        }), s.jsx("button", {
                            onClick: () => {
                                f(), t(!1)
                            },
                            className: "block text-gray-700 hover:text-emerald-600 transition-colors",
                            children: "Logout"
                        })]
                    }) : s.jsx(D, {
                        to: "/login",
                        className: "block text-gray-700 hover:text-emerald-600 transition-colors",
                        onClick: () => t(!1),
                        children: "Login"
                    }), s.jsxs(D, {
                        to: "/cart",
                        className: "flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors",
                        onClick: () => t(!1),
                        children: [s.jsx(wt, {
                            className: "w-5 h-5"
                        }), s.jsxs("span", {
                            children: ["Cart (", l(), ")"]
                        })]
                    })]
                })
            })]
        })
    },
    Uh = () => s.jsx("footer", {
        className: "bg-gray-900 text-white",
        children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                children: [s.jsxs("div", {
                    className: "space-y-4",
                    children: [s.jsxs(D, {
                        to: "/",
                        className: "flex items-center space-x-2",
                        children: [s.jsx("div", {
                            className: "w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center",
                            children: s.jsx(wt, {
                                className: "w-5 h-5 text-white"
                            })
                        }), s.jsx("span", {
                            className: "text-xl font-bold",
                            children: "FreshMart"
                        })]
                    }), s.jsx("p", {
                        className: "text-gray-400",
                        children: "Your trusted partner for fresh, quality groceries delivered right to your doorstep."
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Quick Links"
                    }), s.jsxs("div", {
                        className: "space-y-2",
                        children: [s.jsx(D, {
                            to: "/products",
                            className: "block text-gray-400 hover:text-white transition-colors",
                            children: "Products"
                        }), s.jsx(D, {
                            to: "/cart",
                            className: "block text-gray-400 hover:text-white transition-colors",
                            children: "Cart"
                        }), s.jsx(D, {
                            to: "/login",
                            className: "block text-gray-400 hover:text-white transition-colors",
                            children: "Account"
                        })]
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Categories"
                    }), s.jsxs("div", {
                        className: "space-y-2",
                        children: [s.jsx(D, {
                            to: "/products?category=fruits",
                            className: "block text-gray-400 hover:text-white transition-colors",
                            children: "Fresh Fruits"
                        }), s.jsx(D, {
                            to: "/products?category=vegetables",
                            className: "block text-gray-400 hover:text-white transition-colors",
                            children: "Vegetables"
                        }), s.jsx(D, {
                            to: "/products?category=dairy",
                            className: "block text-gray-400 hover:text-white transition-colors",
                            children: "Dairy & Eggs"
                        }), s.jsx(D, {
                            to: "/products?category=meat",
                            className: "block text-gray-400 hover:text-white transition-colors",
                            children: "Meat & Poultry"
                        })]
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Contact Us"
                    }), s.jsxs("div", {
                        className: "space-y-2",
                        children: [s.jsxs("div", {
                            className: "flex items-center space-x-2 text-gray-400",
                            children: [s.jsx(Mh, {
                                className: "w-4 h-4"
                            }), s.jsx("span", {
                                children: "1-800-FRESH-99"
                            })]
                        }), s.jsxs("div", {
                            className: "flex items-center space-x-2 text-gray-400",
                            children: [s.jsx(vs, {
                                className: "w-4 h-4"
                            }), s.jsx("span", {
                                children: "support@freshmart.com"
                            })]
                        }), s.jsxs("div", {
                            className: "flex items-center space-x-2 text-gray-400",
                            children: [s.jsx(Lh, {
                                className: "w-4 h-4"
                            }), s.jsx("span", {
                                children: "123 Fresh Ave, CA 90210"
                            })]
                        })]
                    })]
                })]
            }), s.jsx("div", {
                className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",
                children: s.jsx("p", {
                    children: "© 2025 FreshMart. All rights reserved."
                })
            })]
        })
    }),
    Bh = ({
        children: e
    }) => s.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [s.jsx(Ah, {}), s.jsx("main", {
            className: "flex-1",
            children: e
        }), s.jsx(Uh, {})]
    }),
    Hh = ({
        category: e
    }) => s.jsx(D, {
        to: `/products?category=${e.id}`,
        className: "group block",
        children: s.jsxs("div", {
            className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
            children: [s.jsxs("div", {
                className: "relative h-32 overflow-hidden",
                children: [s.jsx("img", {
                    src: e.image,
                    alt: e.name,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                }), s.jsx("div", {
                    className: "absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300"
                }), s.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: s.jsx("h3", {
                        className: "text-white text-lg font-bold text-center",
                        children: e.name
                    })
                })]
            }), s.jsx("div", {
                className: "p-4",
                children: s.jsx("p", {
                    className: "text-gray-600 text-sm text-center",
                    children: e.description
                })
            })]
        })
    }),
    wd = ({
        product: e
    }) => {
        const {
            addToCart: t
        } = Hl(), n = r => {
            r.preventDefault(), t(e)
        };
        return s.jsx(D, {
            to: `/product/${e.id}`,
            className: "group",
            children: s.jsxs("div", {
                className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                children: [s.jsxs("div", {
                    className: "relative",
                    children: [s.jsx("img", {
                        src: e.image,
                        alt: e.name,
                        className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    }), e.originalPrice && s.jsx("div", {
                        className: "absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold",
                        children: "Sale"
                    }), !e.inStock && s.jsx("div", {
                        className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                        children: s.jsx("span", {
                            className: "text-white font-semibold",
                            children: "Out of Stock"
                        })
                    })]
                }), s.jsxs("div", {
                    className: "p-4",
                    children: [s.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-2 line-clamp-2",
                        children: e.name
                    }), s.jsxs("div", {
                        className: "flex items-center space-x-1 mb-2",
                        children: [s.jsx(yd, {
                            className: "w-4 h-4 text-yellow-400 fill-current"
                        }), s.jsx("span", {
                            className: "text-sm text-gray-600",
                            children: e.rating
                        }), s.jsxs("span", {
                            className: "text-sm text-gray-400",
                            children: ["(", e.reviews, ")"]
                        })]
                    }), s.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [s.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [s.jsxs("span", {
                                className: "text-xl font-bold text-emerald-600",
                                children: ["$", e.price.toFixed(2)]
                            }), e.originalPrice && s.jsxs("span", {
                                className: "text-sm text-gray-500 line-through",
                                children: ["$", e.originalPrice.toFixed(2)]
                            })]
                        }), s.jsx("button", {
                            onClick: n,
                            disabled: !e.inStock,
                            className: `p-2 rounded-lg transition-colors ${e.inStock ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                            children: s.jsx(wt, {
                                className: "w-5 h-5"
                            })
                        })]
                    })]
                })]
            })
        })
    },
    kd = [{
        id: "fruits",
        name: "Fresh Fruits",
        image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Sweet and nutritious fresh fruits"
    }, {
        id: "vegetables",
        name: "Vegetables",
        image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Farm-fresh organic vegetables"
    }, {
        id: "dairy",
        name: "Dairy & Eggs",
        image: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Fresh dairy products and eggs"
    }, {
        id: "meat",
        name: "Meat & Poultry",
        image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Premium quality meat and poultry"
    }, {
        id: "seafood",
        name: "Fresh Seafood",
        image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Fresh, sustainable seafood"
    }, {
        id: "bakery",
        name: "Bakery",
        image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Fresh baked goods and pastries"
    }, {
        id: "beverages",
        name: "Beverages",
        image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Refreshing drinks and beverages"
    }, {
        id: "pantry",
        name: "Pantry Staples",
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Essential pantry items and dry goods"
    }],
    Vl = [{
        id: 1,
        name: "Fresh Organic Bananas",
        price: 2.99,
        originalPrice: 3.49,
        category: "fruits",
        image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Sweet, ripe organic bananas perfect for snacking or smoothies. Rich in potassium and natural energy.",
        inStock: !0,
        rating: 4.5,
        reviews: 127
    }, {
        id: 2,
        name: "Premium Ground Coffee",
        price: 12.99,
        originalPrice: 15.99,
        category: "beverages",
        image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Rich, aromatic coffee beans freshly ground for the perfect morning brew. Medium roast with chocolate notes.",
        inStock: !0,
        rating: 4.8,
        reviews: 89
    }, {
        id: 3,
        name: "Artisan Sourdough Bread",
        price: 4.99,
        originalPrice: null,
        category: "bakery",
        image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Handcrafted sourdough bread with a crispy crust and soft, tangy interior. Baked fresh daily.",
        inStock: !0,
        rating: 4.7,
        reviews: 56
    }, {
        id: 4,
        name: "Free-Range Eggs (12 count)",
        price: 5.49,
        originalPrice: null,
        category: "dairy",
        image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Farm-fresh eggs from free-range chickens. Perfect for breakfast, baking, or cooking.",
        inStock: !0,
        rating: 4.6,
        reviews: 203
    }, {
        id: 5,
        name: "Organic Baby Spinach",
        price: 3.99,
        originalPrice: null,
        category: "vegetables",
        image: "https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Tender organic baby spinach leaves, perfect for salads, smoothies, or cooking.",
        inStock: !0,
        rating: 4.4,
        reviews: 78
    }, {
        id: 6,
        name: "Grass-Fed Ground Beef",
        price: 8.99,
        originalPrice: 10.99,
        category: "meat",
        image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Premium grass-fed ground beef, 85% lean. Perfect for burgers, tacos, or pasta sauce.",
        inStock: !0,
        rating: 4.9,
        reviews: 145
    }, {
        id: 7,
        name: "Greek Yogurt (32oz)",
        price: 6.99,
        originalPrice: null,
        category: "dairy",
        image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Creamy, protein-rich Greek yogurt with live cultures. Great for breakfast or cooking.",
        inStock: !0,
        rating: 4.5,
        reviews: 92
    }, {
        id: 8,
        name: "Fresh Atlantic Salmon",
        price: 14.99,
        originalPrice: null,
        category: "seafood",
        image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Wild-caught Atlantic salmon fillet, rich in omega-3 fatty acids. Perfect for grilling or baking.",
        inStock: !1,
        rating: 4.8,
        reviews: 67
    }, {
        id: 9,
        name: "Heirloom Tomatoes",
        price: 5.99,
        originalPrice: null,
        category: "vegetables",
        image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Colorful heirloom tomatoes with exceptional flavor. Perfect for salads and cooking.",
        inStock: !0,
        rating: 4.6,
        reviews: 34
    }, {
        id: 10,
        name: "Artisan Cheese Selection",
        price: 16.99,
        originalPrice: 19.99,
        category: "dairy",
        image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Curated selection of premium artisan cheeses including aged cheddar, brie, and gouda.",
        inStock: !0,
        rating: 4.9,
        reviews: 156
    }, {
        id: 11,
        name: "Organic Avocados",
        price: 4.99,
        originalPrice: null,
        category: "fruits",
        image: "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Perfectly ripe organic avocados, rich in healthy fats and perfect for toast or salads.",
        inStock: !0,
        rating: 4.3,
        reviews: 89
    }, {
        id: 12,
        name: "Whole Wheat Pasta",
        price: 2.49,
        originalPrice: null,
        category: "pantry",
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Nutritious whole wheat pasta made from organic durum wheat. Perfect for healthy meals.",
        inStock: !0,
        rating: 4.2,
        reviews: 67
    }],
    Vh = () => {
        const e = kd,
            n = Vl.slice(0, 6);
        return s.jsxs("div", {
            className: "min-h-screen",
            children: [s.jsx("section", {
                className: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
                children: s.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                    children: s.jsxs("div", {
                        className: "text-center",
                        children: [s.jsxs("h1", {
                            className: "text-4xl md:text-6xl font-bold mb-6",
                            children: ["Fresh Groceries", s.jsx("br", {}), s.jsx("span", {
                                className: "text-emerald-200",
                                children: "Delivered Fast"
                            })]
                        }), s.jsx("p", {
                            className: "text-xl mb-8 text-emerald-100 max-w-2xl mx-auto",
                            children: "Get farm-fresh groceries delivered to your doorstep in as little as 30 minutes. Quality you can trust, convenience you'll love."
                        }), s.jsxs(D, {
                            to: "/products",
                            className: "inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",
                            children: [s.jsx("span", {
                                children: "Shop Now"
                            }), s.jsx(Zr, {
                                className: "w-5 h-5"
                            })]
                        })]
                    })
                })
            }), s.jsx("section", {
                className: "py-16 bg-gray-50",
                children: s.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: s.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: [s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: s.jsx(Ih, {
                                    className: "w-8 h-8 text-white"
                                })
                            }), s.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "Fast Delivery"
                            }), s.jsx("p", {
                                className: "text-gray-600",
                                children: "Get your groceries delivered in 30 minutes or less"
                            })]
                        }), s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: s.jsx(Fh, {
                                    className: "w-8 h-8 text-white"
                                })
                            }), s.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "Quality Guaranteed"
                            }), s.jsx("p", {
                                className: "text-gray-600",
                                children: "100% satisfaction guarantee on all products"
                            })]
                        }), s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: s.jsx(Ph, {
                                    className: "w-8 h-8 text-white"
                                })
                            }), s.jsx("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "24/7 Service"
                            }), s.jsx("p", {
                                className: "text-gray-600",
                                children: "Order anytime, we're always here for you"
                            })]
                        })]
                    })
                })
            }), s.jsx("section", {
                className: "py-16",
                children: s.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [s.jsxs("div", {
                        className: "text-center mb-12",
                        children: [s.jsx("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-4",
                            children: "Shop by Category"
                        }), s.jsx("p", {
                            className: "text-gray-600 max-w-2xl mx-auto",
                            children: "Discover fresh, quality products across all your favorite categories"
                        })]
                    }), s.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                        children: e.map(r => s.jsx(Hh, {
                            category: r
                        }, r.id))
                    })]
                })
            }), s.jsx("section", {
                className: "py-16 bg-gray-50",
                children: s.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [s.jsxs("div", {
                        className: "flex items-center justify-between mb-12",
                        children: [s.jsxs("div", {
                            children: [s.jsx("h2", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: "Featured Products"
                            }), s.jsx("p", {
                                className: "text-gray-600",
                                children: "Hand-picked favorites from our collection"
                            })]
                        }), s.jsxs(D, {
                            to: "/products",
                            className: "hidden md:flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold",
                            children: [s.jsx("span", {
                                children: "View All"
                            }), s.jsx(Zr, {
                                className: "w-5 h-5"
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: n.map(r => s.jsx(wd, {
                            product: r
                        }, r.id))
                    }), s.jsx("div", {
                        className: "text-center mt-8 md:hidden",
                        children: s.jsxs(D, {
                            to: "/products",
                            className: "inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold",
                            children: [s.jsx("span", {
                                children: "View All Products"
                            }), s.jsx(Zr, {
                                className: "w-5 h-5"
                            })]
                        })
                    })]
                })
            }), s.jsx("section", {
                className: "py-16 bg-emerald-600",
                children: s.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [s.jsx("h2", {
                        className: "text-3xl font-bold text-white mb-4",
                        children: "Stay Updated"
                    }), s.jsx("p", {
                        className: "text-emerald-100 mb-8 max-w-2xl mx-auto",
                        children: "Get the latest deals, new products, and fresh updates delivered to your inbox"
                    }), s.jsxs("div", {
                        className: "max-w-md mx-auto flex space-x-4",
                        children: [s.jsx("input", {
                            type: "email",
                            placeholder: "Enter your email",
                            className: "flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                        }), s.jsx("button", {
                            className: "bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",
                            children: "Subscribe"
                        })]
                    })]
                })
            })]
        })
    },
    Wh = () => {
        const [e] = gh(), [t, n] = v.useState(!1), [r, l] = v.useState(e.get("category") || ""), [o, i] = v.useState([0, 50]), [a, u] = v.useState("name"), c = Vl, f = kd, h = e.get("search") || "", g = v.useMemo(() => {
            let y = c;
            return h && (y = y.filter(w => w.name.toLowerCase().includes(h.toLowerCase()) || w.description.toLowerCase().includes(h.toLowerCase()))), r && (y = y.filter(w => w.category === r)), y = y.filter(w => w.price >= o[0] && w.price <= o[1]), y.sort((w, j) => {
                switch (a) {
                    case "price-low":
                        return w.price - j.price;
                    case "price-high":
                        return j.price - w.price;
                    case "rating":
                        return j.rating - w.rating;
                    case "name":
                    default:
                        return w.name.localeCompare(j.name)
                }
            }), y
        }, [c, h, r, o, a]), x = () => {
            l(""), i([0, 50]), u("name")
        };
        return s.jsx("div", {
            className: "min-h-screen bg-gray-50",
            children: s.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [s.jsxs("div", {
                    className: "mb-8",
                    children: [s.jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-2",
                        children: "Products"
                    }), h && s.jsxs("p", {
                        className: "text-gray-600",
                        children: ['Showing results for "', h, '" (', g.length, " products)"]
                    })]
                }), s.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-8",
                    children: [s.jsxs("div", {
                        className: "lg:w-64",
                        children: [s.jsxs("button", {
                            onClick: () => n(!t),
                            className: "lg:hidden w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4",
                            children: [s.jsx(Rh, {
                                className: "w-5 h-5"
                            }), s.jsx("span", {
                                children: "Filters"
                            })]
                        }), s.jsxs("div", {
                            className: `bg-white rounded-lg shadow-md p-6 space-y-6 ${t ? "block" : "hidden lg:block"}`,
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsx("h3", {
                                    className: "text-lg font-semibold",
                                    children: "Filters"
                                }), s.jsx("button", {
                                    onClick: x,
                                    className: "text-sm text-emerald-600 hover:text-emerald-700",
                                    children: "Clear All"
                                })]
                            }), s.jsxs("div", {
                                children: [s.jsx("h4", {
                                    className: "font-medium mb-3",
                                    children: "Categories"
                                }), s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [s.jsxs("label", {
                                        className: "flex items-center",
                                        children: [s.jsx("input", {
                                            type: "radio",
                                            name: "category",
                                            value: "",
                                            checked: r === "",
                                            onChange: y => l(y.target.value),
                                            className: "mr-2"
                                        }), s.jsx("span", {
                                            className: "text-sm",
                                            children: "All Categories"
                                        })]
                                    }), f.map(y => s.jsxs("label", {
                                        className: "flex items-center",
                                        children: [s.jsx("input", {
                                            type: "radio",
                                            name: "category",
                                            value: y.id,
                                            checked: r === y.id,
                                            onChange: w => l(w.target.value),
                                            className: "mr-2"
                                        }), s.jsx("span", {
                                            className: "text-sm",
                                            children: y.name
                                        })]
                                    }, y.id))]
                                })]
                            }), s.jsxs("div", {
                                children: [s.jsx("h4", {
                                    className: "font-medium mb-3",
                                    children: "Price Range"
                                }), s.jsxs("div", {
                                    className: "space-y-3",
                                    children: [s.jsxs("div", {
                                        className: "flex items-center space-x-2",
                                        children: [s.jsx("input", {
                                            type: "number",
                                            value: o[0],
                                            onChange: y => i([Number(y.target.value), o[1]]),
                                            className: "w-20 px-2 py-1 border border-gray-300 rounded text-sm",
                                            min: "0"
                                        }), s.jsx("span", {
                                            className: "text-sm text-gray-500",
                                            children: "to"
                                        }), s.jsx("input", {
                                            type: "number",
                                            value: o[1],
                                            onChange: y => i([o[0], Number(y.target.value)]),
                                            className: "w-20 px-2 py-1 border border-gray-300 rounded text-sm",
                                            min: "0"
                                        })]
                                    }), s.jsx("input", {
                                        type: "range",
                                        min: "0",
                                        max: "50",
                                        value: o[1],
                                        onChange: y => i([o[0], Number(y.target.value)]),
                                        className: "w-full"
                                    })]
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "flex-1",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsxs("p", {
                                className: "text-gray-600",
                                children: [g.length, " products found"]
                            }), s.jsxs("select", {
                                value: a,
                                onChange: y => u(y.target.value),
                                className: "border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                                children: [s.jsx("option", {
                                    value: "name",
                                    children: "Sort by Name"
                                }), s.jsx("option", {
                                    value: "price-low",
                                    children: "Price: Low to High"
                                }), s.jsx("option", {
                                    value: "price-high",
                                    children: "Price: High to Low"
                                }), s.jsx("option", {
                                    value: "rating",
                                    children: "Highest Rated"
                                })]
                            })]
                        }), g.length > 0 ? s.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                            children: g.map(y => s.jsx(wd, {
                                product: y
                            }, y.id))
                        }) : s.jsxs("div", {
                            className: "text-center py-12",
                            children: [s.jsx("div", {
                                className: "text-gray-400 mb-4",
                                children: s.jsx(xd, {
                                    className: "w-16 h-16 mx-auto"
                                })
                            }), s.jsx("h3", {
                                className: "text-xl font-semibold text-gray-900 mb-2",
                                children: "No products found"
                            }), s.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: "Try adjusting your filters or search terms"
                            }), s.jsx("button", {
                                onClick: x,
                                className: "bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors",
                                children: "Clear Filters"
                            })]
                        })]
                    })]
                })]
            })
        })
    },
    Qh = () => {
        const {
            id: e
        } = Em(), [t, n] = v.useState(1), {
            addToCart: r
        } = Hl(), o = Vl.find(c => c.id === Number(e));
        if (!o) return s.jsx("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: s.jsxs("div", {
                className: "text-center",
                children: [s.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Product Not Found"
                }), s.jsx(D, {
                    to: "/products",
                    className: "text-emerald-600 hover:text-emerald-700",
                    children: "Back to Products"
                })]
            })
        });
        const i = () => {
            r(o, t), n(1)
        },
            a = () => n(c => c + 1),
            u = () => n(c => Math.max(1, c - 1));
        return s.jsx("div", {
            className: "min-h-screen bg-gray-50",
            children: s.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [s.jsxs(D, {
                    to: "/products",
                    className: "inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8",
                    children: [s.jsx(Eh, {
                        className: "w-5 h-5"
                    }), s.jsx("span", {
                        children: "Back to Products"
                    })]
                }), s.jsx("div", {
                    className: "bg-white rounded-lg shadow-lg overflow-hidden",
                    children: s.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [s.jsxs("div", {
                            className: "relative",
                            children: [s.jsx("img", {
                                src: o.image,
                                alt: o.name,
                                className: "w-full h-96 lg:h-full object-cover"
                            }), o.originalPrice && s.jsx("div", {
                                className: "absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold",
                                children: "Sale"
                            }), !o.inStock && s.jsx("div", {
                                className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                                children: s.jsx("span", {
                                    className: "text-white text-xl font-semibold",
                                    children: "Out of Stock"
                                })
                            })]
                        }), s.jsxs("div", {
                            className: "p-8",
                            children: [s.jsx("h1", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: o.name
                            }), s.jsxs("div", {
                                className: "flex items-center space-x-2 mb-6",
                                children: [s.jsx("div", {
                                    className: "flex items-center",
                                    children: [...Array(5)].map((c, f) => s.jsx(yd, {
                                        className: `w-5 h-5 ${f < Math.floor(o.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`
                                    }, f))
                                }), s.jsx("span", {
                                    className: "text-lg font-medium",
                                    children: o.rating
                                }), s.jsxs("span", {
                                    className: "text-gray-500",
                                    children: ["(", o.reviews, " reviews)"]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-center space-x-3 mb-6",
                                children: [s.jsxs("span", {
                                    className: "text-3xl font-bold text-emerald-600",
                                    children: ["$", o.price.toFixed(2)]
                                }), o.originalPrice && s.jsxs("span", {
                                    className: "text-xl text-gray-500 line-through",
                                    children: ["$", o.originalPrice.toFixed(2)]
                                }), o.originalPrice && s.jsxs("span", {
                                    className: "bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold",
                                    children: ["Save $", (o.originalPrice - o.price).toFixed(2)]
                                })]
                            }), s.jsx("p", {
                                className: "text-gray-700 mb-8 leading-relaxed",
                                children: o.description
                            }), s.jsxs("div", {
                                className: "flex items-center space-x-4 mb-8",
                                children: [s.jsx("span", {
                                    className: "font-medium",
                                    children: "Quantity:"
                                }), s.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [s.jsx("button", {
                                        onClick: u,
                                        className: "w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors",
                                        children: s.jsx(md, {
                                            className: "w-4 h-4"
                                        })
                                    }), s.jsx("span", {
                                        className: "w-12 text-center font-semibold",
                                        children: t
                                    }), s.jsx("button", {
                                        onClick: a,
                                        className: "w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors",
                                        children: s.jsx(hd, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                })]
                            }), s.jsxs("button", {
                                onClick: i,
                                disabled: !o.inStock,
                                className: `w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-colors ${o.inStock ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                                children: [s.jsx(wt, {
                                    className: "w-5 h-5"
                                }), s.jsx("span", {
                                    children: o.inStock ? "Add to Cart" : "Out of Stock"
                                })]
                            }), s.jsxs("div", {
                                className: "mt-8 pt-8 border-t border-gray-200",
                                children: [s.jsx("h3", {
                                    className: "font-semibold mb-3",
                                    children: "Product Information"
                                }), s.jsxs("div", {
                                    className: "space-y-2 text-sm text-gray-600",
                                    children: [s.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [s.jsx("span", {
                                            children: "Category:"
                                        }), s.jsx("span", {
                                            className: "capitalize",
                                            children: o.category
                                        })]
                                    }), s.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [s.jsx("span", {
                                            children: "Availability:"
                                        }), s.jsx("span", {
                                            className: o.inStock ? "text-green-600" : "text-red-600",
                                            children: o.inStock ? "In Stock" : "Out of Stock"
                                        })]
                                    }), s.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [s.jsx("span", {
                                            children: "Reviews:"
                                        }), s.jsxs("span", {
                                            children: [o.reviews, " customer reviews"]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        })
    },
    Kh = () => {
        const {
            cartItems: e,
            updateQuantity: t,
            removeFromCart: n,
            getTotalPrice: r,
            clearCart: l
        } = Hl();
        return e.length === 0 ? s.jsx("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: s.jsxs("div", {
                className: "text-center",
                children: [s.jsx(gd, {
                    className: "w-24 h-24 text-gray-300 mx-auto mb-6"
                }), s.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Your cart is empty"
                }), s.jsx("p", {
                    className: "text-gray-600 mb-8",
                    children: "Start shopping to add items to your cart"
                }), s.jsxs(D, {
                    to: "/products",
                    className: "inline-flex items-center space-x-2 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors",
                    children: [s.jsx("span", {
                        children: "Continue Shopping"
                    }), s.jsx(Zr, {
                        className: "w-5 h-5"
                    })]
                })]
            })
        }) : s.jsx("div", {
            className: "min-h-screen bg-gray-50",
            children: s.jsxs("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [s.jsxs("div", {
                    className: "flex items-center justify-between mb-8",
                    children: [s.jsx("h1", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Shopping Cart"
                    }), s.jsx("button", {
                        onClick: l,
                        className: "text-red-600 hover:text-red-700 text-sm font-medium",
                        children: "Clear Cart"
                    })]
                }), s.jsxs("div", {
                    className: "bg-white rounded-lg shadow-lg",
                    children: [s.jsx("div", {
                        className: "divide-y divide-gray-200",
                        children: e.map(o => s.jsx("div", {
                            className: "p-6",
                            children: s.jsxs("div", {
                                className: "flex items-center space-x-4",
                                children: [s.jsx("img", {
                                    src: o.product.image,
                                    alt: o.product.name,
                                    className: "w-20 h-20 object-cover rounded-lg"
                                }), s.jsxs("div", {
                                    className: "flex-1",
                                    children: [s.jsx("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: o.product.name
                                    }), s.jsxs("p", {
                                        className: "text-gray-600",
                                        children: ["$", o.product.price.toFixed(2), " each"]
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [s.jsx("button", {
                                        onClick: () => t(o.product.id, o.quantity - 1),
                                        className: "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors",
                                        children: s.jsx(md, {
                                            className: "w-4 h-4"
                                        })
                                    }), s.jsx("span", {
                                        className: "w-8 text-center font-medium",
                                        children: o.quantity
                                    }), s.jsx("button", {
                                        onClick: () => t(o.product.id, o.quantity + 1),
                                        className: "w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors",
                                        children: s.jsx(hd, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                }), s.jsx("div", {
                                    className: "text-right",
                                    children: s.jsxs("p", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: ["$", (o.product.price * o.quantity).toFixed(2)]
                                    })
                                }), s.jsx("button", {
                                    onClick: () => n(o.product.id),
                                    className: "text-red-500 hover:text-red-700 transition-colors",
                                    children: s.jsx(Oh, {
                                        className: "w-5 h-5"
                                    })
                                })]
                            })
                        }, o.product.id))
                    }), s.jsxs("div", {
                        className: "border-t border-gray-200 p-6",
                        children: [s.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [s.jsx("span", {
                                className: "text-xl font-semibold text-gray-900",
                                children: "Total:"
                            }), s.jsxs("span", {
                                className: "text-2xl font-bold text-emerald-600",
                                children: ["$", r().toFixed(2)]
                            })]
                        }), s.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [s.jsx(D, {
                                to: "/products",
                                className: "flex-1 text-center bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors",
                                children: "Continue Shopping"
                            }), s.jsx("button", {
                                className: "flex-1 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors",
                                children: "Proceed to Checkout"
                            })]
                        })]
                    })]
                })]
            })
        })
    },
    Nd = () => s.jsx("div", {
        className: "flex items-center justify-center py-8",
        children: s.jsx("div", {
            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"
        })
    }),
    bh = () => {
        const [e, t] = v.useState(""), [n, r] = v.useState(""), [l, o] = v.useState(!1), [i, a] = v.useState(!1), [u, c] = v.useState(""), {
            login: f
        } = ys(), h = gr(), g = async x => {
            x.preventDefault(), c(""), a(!0);
            try {
                await f(e, n) ? h("/") : c("Invalid email or password. Please try again.")
            } catch {
                c("An error occurred. Please try again.")
            } finally {
                a(!1)
            }
        };
        return s.jsx("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
            children: s.jsxs("div", {
                className: "max-w-md w-full space-y-8",
                children: [s.jsxs("div", {
                    className: "text-center",
                    children: [s.jsxs(D, {
                        to: "/",
                        className: "flex items-center justify-center space-x-2 mb-6",
                        children: [s.jsx("div", {
                            className: "w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center",
                            children: s.jsx(wt, {
                                className: "w-6 h-6 text-white"
                            })
                        }), s.jsx("span", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "FreshMart"
                        })]
                    }), s.jsx("h2", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Welcome back"
                    }), s.jsx("p", {
                        className: "mt-2 text-gray-600",
                        children: "Sign in to your account"
                    })]
                }), s.jsx("form", {
                    onSubmit: g,
                    className: "mt-8 space-y-6",
                    children: s.jsxs("div", {
                        className: "bg-white p-8 rounded-lg shadow-md space-y-6",
                        children: [u && s.jsx("div", {
                            className: "bg-red-50 border border-red-200 rounded-lg p-4",
                            children: s.jsx("p", {
                                className: "text-red-600 text-sm",
                                children: u
                            })
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Email Address"
                            }), s.jsxs("div", {
                                className: "relative",
                                children: [s.jsx("input", {
                                    id: "email",
                                    type: "email",
                                    value: e,
                                    onChange: x => t(x.target.value),
                                    required: !0,
                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                                    placeholder: "Enter your email"
                                }), s.jsx(vs, {
                                    className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                })]
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Password"
                            }), s.jsxs("div", {
                                className: "relative",
                                children: [s.jsx("input", {
                                    id: "password",
                                    type: l ? "text" : "password",
                                    value: n,
                                    onChange: x => r(x.target.value),
                                    required: !0,
                                    className: "w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                                    placeholder: "Enter your password"
                                }), s.jsx(yi, {
                                    className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                }), s.jsx("button", {
                                    type: "button",
                                    onClick: () => o(!l),
                                    className: "absolute right-3 top-3.5 text-gray-400 hover:text-gray-600",
                                    children: l ? s.jsx(fd, {
                                        className: "w-5 h-5"
                                    }) : s.jsx(pd, {
                                        className: "w-5 h-5"
                                    })
                                })]
                            })]
                        }), s.jsx("button", {
                            type: "submit",
                            disabled: i,
                            className: "w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: i ? s.jsx(Nd, {}) : "Sign In"
                        })]
                    })
                }), s.jsx("div", {
                    className: "text-center",
                    children: s.jsxs("p", {
                        className: "text-gray-600",
                        children: ["Don't have an account?", " ", s.jsx(D, {
                            to: "/signup",
                            className: "text-emerald-600 hover:text-emerald-700 font-semibold",
                            children: "Sign up"
                        })]
                    })
                })]
            })
        })
    },
    Yh = () => {
        const [e, t] = v.useState(""), [n, r] = v.useState(""), [l, o] = v.useState(""), [i, a] = v.useState(""), [u, c] = v.useState(!1), [f, h] = v.useState(!1), [g, x] = v.useState(""), {
            signup: y
        } = ys(), w = gr(), j = async p => {
            if (p.preventDefault(), x(""), l !== i) {
                x("Passwords do not match");
                return
            }
            if (l.length < 6) {
                x("Password must be at least 6 characters long");
                return
            }
            h(!0);
            try {
                await y(e, n, l) ? w("/") : x("Failed to create account. Please try again.")
            } catch {
                x("An error occurred. Please try again.")
            } finally {
                h(!1)
            }
        };
        return s.jsx("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
            children: s.jsxs("div", {
                className: "max-w-md w-full space-y-8",
                children: [s.jsxs("div", {
                    className: "text-center",
                    children: [s.jsxs(D, {
                        to: "/",
                        className: "flex items-center justify-center space-x-2 mb-6",
                        children: [s.jsx("div", {
                            className: "w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center",
                            children: s.jsx(wt, {
                                className: "w-6 h-6 text-white"
                            })
                        }), s.jsx("span", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "FreshMart"
                        })]
                    }), s.jsx("h2", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Create your account"
                    }), s.jsx("p", {
                        className: "mt-2 text-gray-600",
                        children: "Join FreshMart and start shopping"
                    })]
                }), s.jsx("form", {
                    onSubmit: j,
                    className: "mt-8 space-y-6",
                    children: s.jsxs("div", {
                        className: "bg-white p-8 rounded-lg shadow-md space-y-6",
                        children: [g && s.jsx("div", {
                            className: "bg-red-50 border border-red-200 rounded-lg p-4",
                            children: s.jsx("p", {
                                className: "text-red-600 text-sm",
                                children: g
                            })
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Full Name"
                            }), s.jsxs("div", {
                                className: "relative",
                                children: [s.jsx("input", {
                                    id: "name",
                                    type: "text",
                                    value: e,
                                    onChange: p => t(p.target.value),
                                    required: !0,
                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                                    placeholder: "Enter your full name"
                                }), s.jsx(vd, {
                                    className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                })]
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Email Address"
                            }), s.jsxs("div", {
                                className: "relative",
                                children: [s.jsx("input", {
                                    id: "email",
                                    type: "email",
                                    value: n,
                                    onChange: p => r(p.target.value),
                                    required: !0,
                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                                    placeholder: "Enter your email"
                                }), s.jsx(vs, {
                                    className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                })]
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Password"
                            }), s.jsxs("div", {
                                className: "relative",
                                children: [s.jsx("input", {
                                    id: "password",
                                    type: u ? "text" : "password",
                                    value: l,
                                    onChange: p => o(p.target.value),
                                    required: !0,
                                    className: "w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                                    placeholder: "Create a password"
                                }), s.jsx(yi, {
                                    className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                }), s.jsx("button", {
                                    type: "button",
                                    onClick: () => c(!u),
                                    className: "absolute right-3 top-3.5 text-gray-400 hover:text-gray-600",
                                    children: u ? s.jsx(fd, {
                                        className: "w-5 h-5"
                                    }) : s.jsx(pd, {
                                        className: "w-5 h-5"
                                    })
                                })]
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("label", {
                                htmlFor: "confirmPassword",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Confirm Password"
                            }), s.jsxs("div", {
                                className: "relative",
                                children: [s.jsx("input", {
                                    id: "confirmPassword",
                                    type: u ? "text" : "password",
                                    value: i,
                                    onChange: p => a(p.target.value),
                                    required: !0,
                                    className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                                    placeholder: "Confirm your password"
                                }), s.jsx(yi, {
                                    className: "absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                })]
                            })]
                        }), s.jsx("button", {
                            type: "submit",
                            disabled: f,
                            className: "w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: f ? s.jsx(Nd, {}) : "Create Account"
                        })]
                    })
                }), s.jsx("div", {
                    className: "text-center",
                    children: s.jsxs("p", {
                        className: "text-gray-600",
                        children: ["Already have an account?", " ", s.jsx(D, {
                            to: "/login",
                            className: "text-emerald-600 hover:text-emerald-700 font-semibold",
                            children: "Sign in"
                        })]
                    })
                })]
            })
        })
    },
    Gh = [{
        id: 1,
        name: "John Doe",
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Anytown, CA 12345",
        joinDate: "2024-01-15",
        totalOrders: 12,
        status: "active"
    }, {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        phone: "+1 (555) 987-6543",
        address: "456 Oak Ave, Springfield, NY 67890",
        joinDate: "2023-11-08",
        totalOrders: 27,
        status: "active"
    }, {
        id: 3,
        name: "Mike Chen",
        email: "mike.chen@email.com",
        phone: "+1 (555) 456-7890",
        address: "789 Pine St, Portland, OR 97201",
        joinDate: "2024-02-22",
        totalOrders: 8,
        status: "inactive"
    }, {
        id: 4,
        name: "Emily Rodriguez",
        email: "emily.r@email.com",
        phone: "+1 (555) 321-9876",
        address: "321 Elm St, Austin, TX 78701",
        joinDate: "2023-09-14",
        totalOrders: 35,
        status: "active"
    }, {
        id: 5,
        name: "David Wilson",
        email: "david.wilson@email.com",
        phone: "+1 (555) 654-3210",
        address: "654 Maple Dr, Denver, CO 80201",
        joinDate: "2024-03-10",
        totalOrders: 5,
        status: "active"
    }],
    Xh = [{
        id: 1001,
        userId: 1,
        userName: "John Doe",
        items: [{
            productId: 1,
            productName: "Fresh Organic Bananas",
            quantity: 2,
            price: 2.99
        }, {
            productId: 3,
            productName: "Artisan Sourdough Bread",
            quantity: 1,
            price: 4.99
        }],
        total: 10.97,
        status: "delivered",
        orderDate: "2025-01-10",
        deliveryDate: "2025-01-11"
    }, {
        id: 1002,
        userId: 2,
        userName: "Sarah Johnson",
        items: [{
            productId: 6,
            productName: "Grass-Fed Ground Beef",
            quantity: 1,
            price: 8.99
        }, {
            productId: 4,
            productName: "Free-Range Eggs (12 count)",
            quantity: 2,
            price: 5.49
        }, {
            productId: 7,
            productName: "Greek Yogurt (32oz)",
            quantity: 1,
            price: 6.99
        }],
        total: 26.96,
        status: "processing",
        orderDate: "2025-01-12",
        deliveryDate: "2025-01-13"
    }, {
        id: 1003,
        userId: 4,
        userName: "Emily Rodriguez",
        items: [{
            productId: 5,
            productName: "Organic Baby Spinach",
            quantity: 3,
            price: 3.99
        }, {
            productId: 9,
            productName: "Heirloom Tomatoes",
            quantity: 1,
            price: 5.99
        }, {
            productId: 11,
            productName: "Organic Avocados",
            quantity: 2,
            price: 4.99
        }],
        total: 22.95,
        status: "shipped",
        orderDate: "2025-01-11",
        deliveryDate: "2025-01-12"
    }],
    Jh = () => {
        const [e, t] = v.useState("overview"), n = Gh, r = Vl, l = Xh, o = {
            totalUsers: n.length,
            activeUsers: n.filter(a => a.status === "active").length,
            totalProducts: r.length,
            inStockProducts: r.filter(a => a.inStock).length,
            totalOrders: l.length,
            totalRevenue: l.reduce((a, u) => a + u.total, 0)
        }, i = ({
            tab: a,
            children: u
        }) => s.jsx("button", {
            onClick: () => t(a),
            className: `px-4 py-2 rounded-lg font-medium transition-colors ${e === a ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
            children: u
        });
        return s.jsx("div", {
            className: "min-h-screen bg-gray-50",
            children: s.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [s.jsxs("div", {
                    className: "mb-8",
                    children: [s.jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-2",
                        children: "Admin Dashboard"
                    }), s.jsx("p", {
                        className: "text-gray-600",
                        children: "Manage your FreshMart store"
                    })]
                }), e === "overview" && s.jsx(s.Fragment, {
                    children: s.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                        children: [s.jsx("div", {
                            className: "bg-white p-6 rounded-lg shadow-md",
                            children: s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "text-gray-600 text-sm",
                                        children: "Total Users"
                                    }), s.jsx("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: o.totalUsers
                                    })]
                                }), s.jsx($h, {
                                    className: "w-8 h-8 text-blue-500"
                                })]
                            })
                        }), s.jsx("div", {
                            className: "bg-white p-6 rounded-lg shadow-md",
                            children: s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "text-gray-600 text-sm",
                                        children: "Products"
                                    }), s.jsx("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: o.totalProducts
                                    })]
                                }), s.jsx(zh, {
                                    className: "w-8 h-8 text-emerald-500"
                                })]
                            })
                        }), s.jsx("div", {
                            className: "bg-white p-6 rounded-lg shadow-md",
                            children: s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "text-gray-600 text-sm",
                                        children: "Total Orders"
                                    }), s.jsx("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: o.totalOrders
                                    })]
                                }), s.jsx(gd, {
                                    className: "w-8 h-8 text-orange-500"
                                })]
                            })
                        }), s.jsx("div", {
                            className: "bg-white p-6 rounded-lg shadow-md",
                            children: s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "text-gray-600 text-sm",
                                        children: "Revenue"
                                    }), s.jsxs("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: ["$", o.totalRevenue.toFixed(2)]
                                    })]
                                }), s.jsx(Dh, {
                                    className: "w-8 h-8 text-green-500"
                                })]
                            })
                        })]
                    })
                }), s.jsxs("div", {
                    className: "flex space-x-2 mb-8 overflow-x-auto",
                    children: [s.jsx(i, {
                        tab: "overview",
                        children: "Overview"
                    }), s.jsx(i, {
                        tab: "users",
                        children: "Users"
                    }), s.jsx(i, {
                        tab: "products",
                        children: "Products"
                    }), s.jsx(i, {
                        tab: "orders",
                        children: "Orders"
                    })]
                }), s.jsxs("div", {
                    className: "bg-white rounded-lg shadow-lg overflow-hidden",
                    children: [e === "users" && s.jsxs("div", {
                        className: "p-6",
                        children: [s.jsx("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "User Management"
                        }), s.jsx("div", {
                            className: "overflow-x-auto",
                            children: s.jsxs("table", {
                                className: "w-full",
                                children: [s.jsx("thead", {
                                    children: s.jsxs("tr", {
                                        className: "border-b border-gray-200",
                                        children: [s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Name"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Email"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Join Date"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Orders"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Status"
                                        })]
                                    })
                                }), s.jsx("tbody", {
                                    children: n.map(a => s.jsxs("tr", {
                                        className: "border-b border-gray-100 hover:bg-gray-50",
                                        children: [s.jsx("td", {
                                            className: "py-3 px-4 font-medium",
                                            children: a.name
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: a.email
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: a.joinDate
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: a.totalOrders
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: s.jsx("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-semibold ${a.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                                children: a.status
                                            })
                                        })]
                                    }, a.id))
                                })]
                            })
                        })]
                    }), e === "products" && s.jsxs("div", {
                        className: "p-6",
                        children: [s.jsx("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Product Management"
                        }), s.jsx("div", {
                            className: "overflow-x-auto",
                            children: s.jsxs("table", {
                                className: "w-full",
                                children: [s.jsx("thead", {
                                    children: s.jsxs("tr", {
                                        className: "border-b border-gray-200",
                                        children: [s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Product"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Category"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Price"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Rating"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Stock"
                                        })]
                                    })
                                }), s.jsx("tbody", {
                                    children: r.map(a => s.jsxs("tr", {
                                        className: "border-b border-gray-100 hover:bg-gray-50",
                                        children: [s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: s.jsxs("div", {
                                                className: "flex items-center space-x-3",
                                                children: [s.jsx("img", {
                                                    src: a.image,
                                                    alt: a.name,
                                                    className: "w-10 h-10 rounded object-cover"
                                                }), s.jsx("span", {
                                                    className: "font-medium",
                                                    children: a.name
                                                })]
                                            })
                                        }), s.jsx("td", {
                                            className: "py-3 px-4 capitalize",
                                            children: a.category
                                        }), s.jsxs("td", {
                                            className: "py-3 px-4 font-semibold",
                                            children: ["$", a.price.toFixed(2)]
                                        }), s.jsxs("td", {
                                            className: "py-3 px-4",
                                            children: [a.rating, " ⭐"]
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: s.jsx("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-semibold ${a.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                                children: a.inStock ? "In Stock" : "Out of Stock"
                                            })
                                        })]
                                    }, a.id))
                                })]
                            })
                        })]
                    }), e === "orders" && s.jsxs("div", {
                        className: "p-6",
                        children: [s.jsx("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Order Management"
                        }), s.jsx("div", {
                            className: "overflow-x-auto",
                            children: s.jsxs("table", {
                                className: "w-full",
                                children: [s.jsx("thead", {
                                    children: s.jsxs("tr", {
                                        className: "border-b border-gray-200",
                                        children: [s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Order ID"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Customer"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Items"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Total"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Status"
                                        }), s.jsx("th", {
                                            className: "text-left py-3 px-4",
                                            children: "Date"
                                        })]
                                    })
                                }), s.jsx("tbody", {
                                    children: l.map(a => s.jsxs("tr", {
                                        className: "border-b border-gray-100 hover:bg-gray-50",
                                        children: [s.jsxs("td", {
                                            className: "py-3 px-4 font-medium",
                                            children: ["#", a.id]
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: a.userName
                                        }), s.jsxs("td", {
                                            className: "py-3 px-4",
                                            children: [a.items.length, " items"]
                                        }), s.jsxs("td", {
                                            className: "py-3 px-4 font-semibold",
                                            children: ["$", a.total.toFixed(2)]
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: s.jsx("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-semibold ${a.status === "delivered" ? "bg-green-100 text-green-800" : a.status === "shipped" ? "bg-blue-100 text-blue-800" : a.status === "processing" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`,
                                                children: a.status
                                            })
                                        }), s.jsx("td", {
                                            className: "py-3 px-4",
                                            children: a.orderDate
                                        })]
                                    }, a.id))
                                })]
                            })
                        })]
                    })]
                })]
            })
        })
    };

function Zh() {
    return s.jsx(jh, {
        children: s.jsx(Nh, {
            children: s.jsx(dh, {
                children: s.jsx(Bh, {
                    children: s.jsxs(Bm, {
                        children: [s.jsx(ot, {
                            path: "/",
                            element: s.jsx(Vh, {})
                        }), s.jsx(ot, {
                            path: "/products",
                            element: s.jsx(Wh, {})
                        }), s.jsx(ot, {
                            path: "/product/:id",
                            element: s.jsx(Qh, {})
                        }), s.jsx(ot, {
                            path: "/cart",
                            element: s.jsx(Kh, {})
                        }), s.jsx(ot, {
                            path: "/login",
                            element: s.jsx(bh, {})
                        }), s.jsx(ot, {
                            path: "/signup",
                            element: s.jsx(Yh, {})
                        }), s.jsx(ot, {
                            path: "/admin",
                            element: s.jsx(Jh, {})
                        })]
                    })
                })
            })
        })
    })
}
bc(document.getElementById("root")).render(s.jsx(v.StrictMode, {
    children: s.jsx(Zh, {})
}));