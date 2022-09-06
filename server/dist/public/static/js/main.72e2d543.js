"use strict";
/*! For license information please see main.72e2d543.js.LICENSE.txt */
!function () { var e = { 110: function (e, n, t) {
        "use strict";
        var r = t(309), a = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, l = {};
        function s(e) { return r.isMemo(e) ? o : l[e.$$typeof] || a; }
        l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, l[r.Memo] = o;
        var u = Object.defineProperty, c = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, h = Object.prototype;
        e.exports = function e(n, t, r) { if ("string" !== typeof t) {
            if (h) {
                var a = p(t);
                a && a !== h && e(n, a, r);
            }
            var o = c(t);
            d && (o = o.concat(d(t)));
            for (var l = s(n), m = s(t), v = 0; v < o.length; ++v) {
                var g = o[v];
                if (!i[g] && (!r || !r[g]) && (!m || !m[g]) && (!l || !l[g])) {
                    var y = f(t, g);
                    try {
                        u(n, g, y);
                    }
                    catch (b) { }
                }
            }
        } return n; };
    }, 746: function (e, n) {
        "use strict";
        var t = "function" === typeof Symbol && Symbol.for, r = t ? Symbol.for("react.element") : 60103, a = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, l = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, d = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, b = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
        function x(e) { if ("object" === typeof e && null !== e) {
            var n = e.$$typeof;
            switch (n) {
                case r: switch (e = e.type) {
                    case c:
                    case d:
                    case i:
                    case l:
                    case o:
                    case p: return e;
                    default: switch (e = e && e.$$typeof) {
                        case u:
                        case f:
                        case v:
                        case m:
                        case s: return e;
                        default: return n;
                    }
                }
                case a: return n;
            }
        } }
        function S(e) { return x(e) === d; }
        n.AsyncMode = c, n.ConcurrentMode = d, n.ContextConsumer = u, n.ContextProvider = s, n.Element = r, n.ForwardRef = f, n.Fragment = i, n.Lazy = v, n.Memo = m, n.Portal = a, n.Profiler = l, n.StrictMode = o, n.Suspense = p, n.isAsyncMode = function (e) { return S(e) || x(e) === c; }, n.isConcurrentMode = S, n.isContextConsumer = function (e) { return x(e) === u; }, n.isContextProvider = function (e) { return x(e) === s; }, n.isElement = function (e) { return "object" === typeof e && null !== e && e.$$typeof === r; }, n.isForwardRef = function (e) { return x(e) === f; }, n.isFragment = function (e) { return x(e) === i; }, n.isLazy = function (e) { return x(e) === v; }, n.isMemo = function (e) { return x(e) === m; }, n.isPortal = function (e) { return x(e) === a; }, n.isProfiler = function (e) { return x(e) === l; }, n.isStrictMode = function (e) { return x(e) === o; }, n.isSuspense = function (e) { return x(e) === p; }, n.isValidElementType = function (e) { return "string" === typeof e || "function" === typeof e || e === i || e === d || e === l || e === o || e === p || e === h || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === s || e.$$typeof === u || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === g); }, n.typeOf = x;
    }, 309: function (e, n, t) {
        "use strict";
        e.exports = t(746);
    }, 463: function (e, n, t) {
        "use strict";
        var r = t(791), a = t(296);
        function i(e) { for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
            n += "&args[]=" + encodeURIComponent(arguments[t]); return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
        var o = new Set, l = {};
        function s(e, n) { u(e, n), u(e + "Capture", n); }
        function u(e, n) { for (l[e] = n, e = 0; e < n.length; e++)
            o.add(n[e]); }
        var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), d = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {};
        function m(e, n, t, r, a, i, o) { this.acceptsBooleans = 2 === n || 3 === n || 4 === n, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o; }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var n = e[0]; v[n] = new m(n, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); }));
        var g = /[\-:]([a-z])/g;
        function y(e) { return e[1].toUpperCase(); }
        function b(e, n, t, r) { var a = v.hasOwnProperty(n) ? v[n] : null; (null !== a ? 0 !== a.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (function (e, n, t, r) { if (null === n || "undefined" === typeof n || function (e, n, t, r) { if (null !== t && 0 === t.type)
            return !1; switch (typeof n) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, n, t, r))
            return !0; if (r)
            return !1; if (null !== t)
            switch (t.type) {
                case 3: return !n;
                case 4: return !1 === n;
                case 5: return isNaN(n);
                case 6: return isNaN(n) || 1 > n;
            } return !1; }(n, t, a, r) && (t = null), r || null === a ? function (e) { return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1)); }(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = null === t ? 3 !== a.type && "" : t : (n = a.attributeName, r = a.attributeNamespace, null === t ? e.removeAttribute(n) : (t = 3 === (a = a.type) || 4 === a && !0 === t ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t)))); }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var n = e.replace(g, y); v[n] = new m(n, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var n = e.replace(g, y); v[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var n = e.replace(g, y); v[n] = new m(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); }));
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = Symbol.for("react.element"), S = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), _ = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var D = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
        var j = Symbol.iterator;
        function N(e) { return null === e || "object" !== typeof e ? null : "function" === typeof (e = j && e[j] || e["@@iterator"]) ? e : null; }
        var z, M = Object.assign;
        function R(e) { if (void 0 === z)
            try {
                throw Error();
            }
            catch (t) {
                var n = t.stack.trim().match(/\n( *(at )?)/);
                z = n && n[1] || "";
            } return "\n" + z + e; }
        var F = !1;
        function B(e, n) { if (!e || F)
            return ""; F = !0; var t = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (n)
                if (n = function () { throw Error(); }, Object.defineProperty(n.prototype, "props", { set: function () { throw Error(); } }), "object" === typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(n, []);
                    }
                    catch (u) {
                        var r = u;
                    }
                    Reflect.construct(e, [], n);
                }
                else {
                    try {
                        n.call();
                    }
                    catch (u) {
                        r = u;
                    }
                    e.call(n.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (u) {
                    r = u;
                }
                e();
            }
        }
        catch (u) {
            if (u && r && "string" === typeof u.stack) {
                for (var a = u.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l];)
                    l--;
                for (; 1 <= o && 0 <= l; o--, l--)
                    if (a[o] !== i[l]) {
                        if (1 !== o || 1 !== l)
                            do {
                                if (o--, 0 > --l || a[o] !== i[l]) {
                                    var s = "\n" + a[o].replace(" at new ", " at ");
                                    return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                                }
                            } while (1 <= o && 0 <= l);
                        break;
                    }
            }
        }
        finally {
            F = !1, Error.prepareStackTrace = t;
        } return (e = e ? e.displayName || e.name : "") ? R(e) : ""; }
        function $(e) { switch (e.tag) {
            case 5: return R(e.type);
            case 16: return R("Lazy");
            case 13: return R("Suspense");
            case 19: return R("SuspenseList");
            case 0:
            case 2:
            case 15: return e = B(e.type, !1);
            case 11: return e = B(e.type.render, !1);
            case 1: return e = B(e.type, !0);
            default: return "";
        } }
        function U(e) { if (null == e)
            return null; if ("function" === typeof e)
            return e.displayName || e.name || null; if ("string" === typeof e)
            return e; switch (e) {
            case k: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case E: return "StrictMode";
            case O: return "Suspense";
            case P: return "SuspenseList";
        } if ("object" === typeof e)
            switch (e.$$typeof) {
                case _: return (e.displayName || "Context") + ".Consumer";
                case T: return (e._context.displayName || "Context") + ".Provider";
                case A:
                    var n = e.render;
                    return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case L: return null !== (n = e.displayName || null) ? n : U(e.type) || "Memo";
                case I:
                    n = e._payload, e = e._init;
                    try {
                        return U(e(n));
                    }
                    catch (t) { }
            } return null; }
        function H(e) { var n = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (n.displayName || "Context") + ".Consumer";
            case 10: return (n._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = n.render).displayName || e.name || "", n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return n;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return U(n);
            case 8: return n === E ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" === typeof n)
                    return n.displayName || n.name || null;
                if ("string" === typeof n)
                    return n;
        } return null; }
        function W(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } }
        function V(e) { var n = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n); }
        function G(e) { e._valueTracker || (e._valueTracker = function (e) { var n = V(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n]; if (!e.hasOwnProperty(n) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
            var a = t.get, i = t.set;
            return Object.defineProperty(e, n, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, i.call(this, e); } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[n]; } };
        } }(e)); }
        function q(e) { if (!e)
            return !1; var n = e._valueTracker; if (!n)
            return !0; var t = n.getValue(), r = ""; return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== t && (n.setValue(e), !0); }
        function Y(e) { if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (n) {
            return e.body;
        } }
        function K(e, n) { var t = n.checked; return M({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != t ? t : e._wrapperState.initialChecked }); }
        function Q(e, n) { var t = null == n.defaultValue ? "" : n.defaultValue, r = null != n.checked ? n.checked : n.defaultChecked; t = W(null != n.value ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value }; }
        function X(e, n) { null != (n = n.checked) && b(e, "checked", n, !1); }
        function J(e, n) { X(e, n); var t = W(n.value), r = n.type; if (null != t)
            "number" === r ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); n.hasOwnProperty("value") ? ee(e, n.type, t) : n.hasOwnProperty("defaultValue") && ee(e, n.type, W(n.defaultValue)), null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked); }
        function Z(e, n, t) { if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== n.value && null !== n.value))
                return;
            n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
        } "" !== (t = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== t && (e.name = t); }
        function ee(e, n, t) { "number" === n && Y(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t)); }
        var ne = Array.isArray;
        function te(e, n, t, r) { if (e = e.options, n) {
            n = {};
            for (var a = 0; a < t.length; a++)
                n["$" + t[a]] = !0;
            for (t = 0; t < e.length; t++)
                a = n.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && r && (e[t].defaultSelected = !0);
        }
        else {
            for (t = "" + W(t), n = null, a = 0; a < e.length; a++) {
                if (e[a].value === t)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== n || e[a].disabled || (n = e[a]);
            }
            null !== n && (n.selected = !0);
        } }
        function re(e, n) { if (null != n.dangerouslySetInnerHTML)
            throw Error(i(91)); return M({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
        function ae(e, n) { var t = n.value; if (null == t) {
            if (t = n.children, n = n.defaultValue, null != t) {
                if (null != n)
                    throw Error(i(92));
                if (ne(t)) {
                    if (1 < t.length)
                        throw Error(i(93));
                    t = t[0];
                }
                n = t;
            }
            null == n && (n = ""), t = n;
        } e._wrapperState = { initialValue: W(t) }; }
        function ie(e, n) { var t = W(n.value), r = W(n.defaultValue); null != t && ((t = "" + t) !== e.value && (e.value = t), null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)), null != r && (e.defaultValue = "" + r); }
        function oe(e) { var n = e.textContent; n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n); }
        function le(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } }
        function se(e, n) { return null == e || "http://www.w3.org/1999/xhtml" === e ? le(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e; }
        var ue, ce, de = (ce = function (e, n) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = n;
        else {
            for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ue.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; n.firstChild;)
                e.appendChild(n.firstChild);
        } }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, n, t, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, n); })); } : ce);
        function fe(e, n) { if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
                return void (t.nodeValue = n);
        } e.textContent = n; }
        var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, he = ["Webkit", "ms", "Moz", "O"];
        function me(e, n, t) { return null == n || "boolean" === typeof n || "" === n ? "" : t || "number" !== typeof n || 0 === n || pe.hasOwnProperty(e) && pe[e] ? ("" + n).trim() : n + "px"; }
        function ve(e, n) { for (var t in e = e.style, n)
            if (n.hasOwnProperty(t)) {
                var r = 0 === t.indexOf("--"), a = me(t, n[t], r);
                "float" === t && (t = "cssFloat"), r ? e.setProperty(t, a) : e[t] = a;
            } }
        Object.keys(pe).forEach((function (e) { he.forEach((function (n) { n = n + e.charAt(0).toUpperCase() + e.substring(1), pe[n] = pe[e]; })); }));
        var ge = M({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function ye(e, n) { if (n) {
            if (ge[e] && (null != n.children || null != n.dangerouslySetInnerHTML))
                throw Error(i(137, e));
            if (null != n.dangerouslySetInnerHTML) {
                if (null != n.children)
                    throw Error(i(60));
                if ("object" !== typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML))
                    throw Error(i(61));
            }
            if (null != n.style && "object" !== typeof n.style)
                throw Error(i(62));
        } }
        function be(e, n) { if (-1 === e.indexOf("-"))
            return "string" === typeof n.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } }
        var we = null;
        function xe(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; }
        var Se = null, ke = null, Ee = null;
        function Ce(e) { if (e = ba(e)) {
            if ("function" !== typeof Se)
                throw Error(i(280));
            var n = e.stateNode;
            n && (n = xa(n), Se(e.stateNode, e.type, n));
        } }
        function Te(e) { ke ? Ee ? Ee.push(e) : Ee = [e] : ke = e; }
        function _e() { if (ke) {
            var e = ke, n = Ee;
            if (Ee = ke = null, Ce(e), n)
                for (e = 0; e < n.length; e++)
                    Ce(n[e]);
        } }
        function Ae(e, n) { return e(n); }
        function Oe() { }
        var Pe = !1;
        function Le(e, n, t) { if (Pe)
            return e(n, t); Pe = !0; try {
            return Ae(e, n, t);
        }
        finally {
            Pe = !1, (null !== ke || null !== Ee) && (Oe(), _e());
        } }
        function Ie(e, n) { var t = e.stateNode; if (null === t)
            return null; var r = xa(t); if (null === r)
            return null; t = r[n]; e: switch (n) {
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
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (t && "function" !== typeof t)
            throw Error(i(231, n, typeof t)); return t; }
        var De = !1;
        if (c)
            try {
                var je = {};
                Object.defineProperty(je, "passive", { get: function () { De = !0; } }), window.addEventListener("test", je, je), window.removeEventListener("test", je, je);
            }
            catch (ce) {
                De = !1;
            }
        function Ne(e, n, t, r, a, i, o, l, s) { var u = Array.prototype.slice.call(arguments, 3); try {
            n.apply(t, u);
        }
        catch (c) {
            this.onError(c);
        } }
        var ze = !1, Me = null, Re = !1, Fe = null, Be = { onError: function (e) { ze = !0, Me = e; } };
        function $e(e, n, t, r, a, i, o, l, s) { ze = !1, Me = null, Ne.apply(Be, arguments); }
        function Ue(e) { var n = e, t = e; if (e.alternate)
            for (; n.return;)
                n = n.return;
        else {
            e = n;
            do {
                0 !== (4098 & (n = e).flags) && (t = n.return), e = n.return;
            } while (e);
        } return 3 === n.tag ? t : null; }
        function He(e) { if (13 === e.tag) {
            var n = e.memoizedState;
            if (null === n && (null !== (e = e.alternate) && (n = e.memoizedState)), null !== n)
                return n.dehydrated;
        } return null; }
        function We(e) { if (Ue(e) !== e)
            throw Error(i(188)); }
        function Ve(e) { return null !== (e = function (e) { var n = e.alternate; if (!n) {
            if (null === (n = Ue(e)))
                throw Error(i(188));
            return n !== e ? null : e;
        } for (var t = e, r = n;;) {
            var a = t.return;
            if (null === a)
                break;
            var o = a.alternate;
            if (null === o) {
                if (null !== (r = a.return)) {
                    t = r;
                    continue;
                }
                break;
            }
            if (a.child === o.child) {
                for (o = a.child; o;) {
                    if (o === t)
                        return We(a), e;
                    if (o === r)
                        return We(a), n;
                    o = o.sibling;
                }
                throw Error(i(188));
            }
            if (t.return !== r.return)
                t = a, r = o;
            else {
                for (var l = !1, s = a.child; s;) {
                    if (s === t) {
                        l = !0, t = a, r = o;
                        break;
                    }
                    if (s === r) {
                        l = !0, r = a, t = o;
                        break;
                    }
                    s = s.sibling;
                }
                if (!l) {
                    for (s = o.child; s;) {
                        if (s === t) {
                            l = !0, t = o, r = a;
                            break;
                        }
                        if (s === r) {
                            l = !0, r = o, t = a;
                            break;
                        }
                        s = s.sibling;
                    }
                    if (!l)
                        throw Error(i(189));
                }
            }
            if (t.alternate !== r)
                throw Error(i(190));
        } if (3 !== t.tag)
            throw Error(i(188)); return t.stateNode.current === t ? e : n; }(e)) ? Ge(e) : null; }
        function Ge(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var n = Ge(e);
            if (null !== n)
                return n;
            e = e.sibling;
        } return null; }
        var qe = a.unstable_scheduleCallback, Ye = a.unstable_cancelCallback, Ke = a.unstable_shouldYield, Qe = a.unstable_requestPaint, Xe = a.unstable_now, Je = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, en = a.unstable_UserBlockingPriority, nn = a.unstable_NormalPriority, tn = a.unstable_LowPriority, rn = a.unstable_IdlePriority, an = null, on = null;
        var ln = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (sn(e) / un | 0) | 0; }, sn = Math.log, un = Math.LN2;
        var cn = 64, dn = 4194304;
        function fn(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
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
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } }
        function pn(e, n) { var t = e.pendingLanes; if (0 === t)
            return 0; var r = 0, a = e.suspendedLanes, i = e.pingedLanes, o = 268435455 & t; if (0 !== o) {
            var l = o & ~a;
            0 !== l ? r = fn(l) : 0 !== (i &= o) && (r = fn(i));
        }
        else
            0 !== (o = t & ~a) ? r = fn(o) : 0 !== i && (r = fn(i)); if (0 === r)
            return 0; if (0 !== n && n !== r && 0 === (n & a) && ((a = r & -r) >= (i = n & -n) || 16 === a && 0 !== (4194240 & i)))
            return n; if (0 !== (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes))
            for (e = e.entanglements, n &= r; 0 < n;)
                a = 1 << (t = 31 - ln(n)), r |= e[t], n &= ~a; return r; }
        function hn(e, n) { switch (e) {
            case 1:
            case 2:
            case 4: return n + 250;
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
            case 2097152: return n + 5e3;
            default: return -1;
        } }
        function mn(e) { return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; }
        function vn() { var e = cn; return 0 === (4194240 & (cn <<= 1)) && (cn = 64), e; }
        function gn(e) { for (var n = [], t = 0; 31 > t; t++)
            n.push(e); return n; }
        function yn(e, n, t) { e.pendingLanes |= n, 536870912 !== n && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[n = 31 - ln(n)] = t; }
        function bn(e, n) { var t = e.entangledLanes |= n; for (e = e.entanglements; t;) {
            var r = 31 - ln(t), a = 1 << r;
            a & n | e[r] & n && (e[r] |= n), t &= ~a;
        } }
        var wn = 0;
        function xn(e) { return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1; }
        var Sn, kn, En, Cn, Tn, _n = !1, An = [], On = null, Pn = null, Ln = null, In = new Map, Dn = new Map, jn = [], Nn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function zn(e, n) { switch (e) {
            case "focusin":
            case "focusout":
                On = null;
                break;
            case "dragenter":
            case "dragleave":
                Pn = null;
                break;
            case "mouseover":
            case "mouseout":
                Ln = null;
                break;
            case "pointerover":
            case "pointerout":
                In.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": Dn.delete(n.pointerId);
        } }
        function Mn(e, n, t, r, a, i) { return null === e || e.nativeEvent !== i ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, null !== n && (null !== (n = ba(n)) && kn(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, null !== a && -1 === n.indexOf(a) && n.push(a), e); }
        function Rn(e) { var n = ya(e.target); if (null !== n) {
            var t = Ue(n);
            if (null !== t)
                if (13 === (n = t.tag)) {
                    if (null !== (n = He(t)))
                        return e.blockedOn = n, void Tn(e.priority, (function () { En(t); }));
                }
                else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null);
        } e.blockedOn = null; }
        function Fn(e) { if (null !== e.blockedOn)
            return !1; for (var n = e.targetContainers; 0 < n.length;) {
            var t = Qn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t)
                return null !== (n = ba(t)) && kn(n), e.blockedOn = t, !1;
            var r = new (t = e.nativeEvent).constructor(t.type, t);
            we = r, t.target.dispatchEvent(r), we = null, n.shift();
        } return !0; }
        function Bn(e, n, t) { Fn(e) && t.delete(n); }
        function $n() { _n = !1, null !== On && Fn(On) && (On = null), null !== Pn && Fn(Pn) && (Pn = null), null !== Ln && Fn(Ln) && (Ln = null), In.forEach(Bn), Dn.forEach(Bn); }
        function Un(e, n) { e.blockedOn === n && (e.blockedOn = null, _n || (_n = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, $n))); }
        function Hn(e) { function n(n) { return Un(n, e); } if (0 < An.length) {
            Un(An[0], e);
            for (var t = 1; t < An.length; t++) {
                var r = An[t];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== On && Un(On, e), null !== Pn && Un(Pn, e), null !== Ln && Un(Ln, e), In.forEach(n), Dn.forEach(n), t = 0; t < jn.length; t++)
            (r = jn[t]).blockedOn === e && (r.blockedOn = null); for (; 0 < jn.length && null === (t = jn[0]).blockedOn;)
            Rn(t), null === t.blockedOn && jn.shift(); }
        var Wn = w.ReactCurrentBatchConfig, Vn = !0;
        function Gn(e, n, t, r) { var a = wn, i = Wn.transition; Wn.transition = null; try {
            wn = 1, Yn(e, n, t, r);
        }
        finally {
            wn = a, Wn.transition = i;
        } }
        function qn(e, n, t, r) { var a = wn, i = Wn.transition; Wn.transition = null; try {
            wn = 4, Yn(e, n, t, r);
        }
        finally {
            wn = a, Wn.transition = i;
        } }
        function Yn(e, n, t, r) { if (Vn) {
            var a = Qn(e, n, t, r);
            if (null === a)
                Wr(e, n, r, Kn, t), zn(e, r);
            else if (function (e, n, t, r, a) { switch (n) {
                case "focusin": return On = Mn(On, e, n, t, r, a), !0;
                case "dragenter": return Pn = Mn(Pn, e, n, t, r, a), !0;
                case "mouseover": return Ln = Mn(Ln, e, n, t, r, a), !0;
                case "pointerover":
                    var i = a.pointerId;
                    return In.set(i, Mn(In.get(i) || null, e, n, t, r, a)), !0;
                case "gotpointercapture": return i = a.pointerId, Dn.set(i, Mn(Dn.get(i) || null, e, n, t, r, a)), !0;
            } return !1; }(a, e, n, t, r))
                r.stopPropagation();
            else if (zn(e, r), 4 & n && -1 < Nn.indexOf(e)) {
                for (; null !== a;) {
                    var i = ba(a);
                    if (null !== i && Sn(i), null === (i = Qn(e, n, t, r)) && Wr(e, n, r, Kn, t), i === a)
                        break;
                    a = i;
                }
                null !== a && r.stopPropagation();
            }
            else
                Wr(e, n, r, null, t);
        } }
        var Kn = null;
        function Qn(e, n, t, r) { if (Kn = null, null !== (e = ya(e = xe(r))))
            if (null === (n = Ue(e)))
                e = null;
            else if (13 === (t = n.tag)) {
                if (null !== (e = He(n)))
                    return e;
                e = null;
            }
            else if (3 === t) {
                if (n.stateNode.current.memoizedState.isDehydrated)
                    return 3 === n.tag ? n.stateNode.containerInfo : null;
                e = null;
            }
            else
                n !== e && (e = null); return Kn = e, null; }
        function Xn(e) { switch (e) {
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
            case "selectstart": return 1;
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
            case "pointerleave": return 4;
            case "message": switch (Je()) {
                case Ze: return 1;
                case en: return 4;
                case nn:
                case tn: return 16;
                case rn: return 536870912;
                default: return 16;
            }
            default: return 16;
        } }
        var Jn = null, Zn = null, et = null;
        function nt() { if (et)
            return et; var e, n, t = Zn, r = t.length, a = "value" in Jn ? Jn.value : Jn.textContent, i = a.length; for (e = 0; e < r && t[e] === a[e]; e++)
            ; var o = r - e; for (n = 1; n <= o && t[r - n] === a[i - n]; n++)
            ; return et = a.slice(e, 1 < n ? 1 - n : void 0); }
        function tt(e) { var n = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : e = n, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; }
        function rt() { return !0; }
        function at() { return !1; }
        function it(e) { function n(n, t, r, a, i) { for (var o in this._reactName = n, this._targetInst = r, this.type = t, this.nativeEvent = a, this.target = i, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(a) : a[o]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? rt : at, this.isPropagationStopped = at, this; } return M(n.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = rt); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = rt); }, persist: function () { }, isPersistent: rt }), n; }
        var ot, lt, st, ut = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, ct = it(ut), dt = M({}, ut, { view: 0, detail: 0 }), ft = it(dt), pt = M({}, dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ct, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== st && (st && "mousemove" === e.type ? (ot = e.screenX - st.screenX, lt = e.screenY - st.screenY) : lt = ot = 0, st = e), ot); }, movementY: function (e) { return "movementY" in e ? e.movementY : lt; } }), ht = it(pt), mt = it(M({}, pt, { dataTransfer: 0 })), vt = it(M({}, dt, { relatedTarget: 0 })), gt = it(M({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yt = M({}, ut, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), bt = it(yt), wt = it(M({}, ut, { data: 0 })), xt = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, St = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, kt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function Et(e) { var n = this.nativeEvent; return n.getModifierState ? n.getModifierState(e) : !!(e = kt[e]) && !!n[e]; }
        function Ct() { return Et; }
        var Tt = M({}, dt, { key: function (e) { if (e.key) {
                var n = xt[e.key] || e.key;
                if ("Unidentified" !== n)
                    return n;
            } return "keypress" === e.type ? 13 === (e = tt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? St[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ct, charCode: function (e) { return "keypress" === e.type ? tt(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), _t = it(Tt), At = it(M({}, pt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Ot = it(M({}, dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ct })), Pt = it(M({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Lt = M({}, pt, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), It = it(Lt), Dt = [9, 13, 27, 32], jt = c && "CompositionEvent" in window, Nt = null;
        c && "documentMode" in document && (Nt = document.documentMode);
        var zt = c && "TextEvent" in window && !Nt, Mt = c && (!jt || Nt && 8 < Nt && 11 >= Nt), Rt = String.fromCharCode(32), Ft = !1;
        function Bt(e, n) { switch (e) {
            case "keyup": return -1 !== Dt.indexOf(n.keyCode);
            case "keydown": return 229 !== n.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } }
        function $t(e) { return "object" === typeof (e = e.detail) && "data" in e ? e.data : null; }
        var Ut = !1;
        var Ht = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function Wt(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === n ? !!Ht[e.type] : "textarea" === n; }
        function Vt(e, n, t, r) { Te(r), 0 < (n = Gr(n, "onChange")).length && (t = new ct("onChange", "change", null, t, r), e.push({ event: t, listeners: n })); }
        var Gt = null, qt = null;
        function Yt(e) { Rr(e, 0); }
        function Kt(e) { if (q(wa(e)))
            return e; }
        function Qt(e, n) { if ("change" === e)
            return n; }
        var Xt = !1;
        if (c) {
            var Jt;
            if (c) {
                var Zt = "oninput" in document;
                if (!Zt) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Zt = "function" === typeof er.oninput;
                }
                Jt = Zt;
            }
            else
                Jt = !1;
            Xt = Jt && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() { Gt && (Gt.detachEvent("onpropertychange", tr), qt = Gt = null); }
        function tr(e) { if ("value" === e.propertyName && Kt(qt)) {
            var n = [];
            Vt(n, qt, e, xe(e)), Le(Yt, n);
        } }
        function rr(e, n, t) { "focusin" === e ? (nr(), qt = t, (Gt = n).attachEvent("onpropertychange", tr)) : "focusout" === e && nr(); }
        function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kt(qt); }
        function ir(e, n) { if ("click" === e)
            return Kt(n); }
        function or(e, n) { if ("input" === e || "change" === e)
            return Kt(n); }
        var lr = "function" === typeof Object.is ? Object.is : function (e, n) { return e === n && (0 !== e || 1 / e === 1 / n) || e !== e && n !== n; };
        function sr(e, n) { if (lr(e, n))
            return !0; if ("object" !== typeof e || null === e || "object" !== typeof n || null === n)
            return !1; var t = Object.keys(e), r = Object.keys(n); if (t.length !== r.length)
            return !1; for (r = 0; r < t.length; r++) {
            var a = t[r];
            if (!d.call(n, a) || !lr(e[a], n[a]))
                return !1;
        } return !0; }
        function ur(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; }
        function cr(e, n) { var t, r = ur(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (t = e + r.textContent.length, e <= n && t >= n)
                    return { node: r, offset: n - e };
                e = t;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = ur(r);
        } }
        function dr(e, n) { return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? dr(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n)))); }
        function fr() { for (var e = window, n = Y(); n instanceof e.HTMLIFrameElement;) {
            try {
                var t = "string" === typeof n.contentWindow.location.href;
            }
            catch (r) {
                t = !1;
            }
            if (!t)
                break;
            n = Y((e = n.contentWindow).document);
        } return n; }
        function pr(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return n && ("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === n || "true" === e.contentEditable); }
        function hr(e) { var n = fr(), t = e.focusedElem, r = e.selectionRange; if (n !== t && t && t.ownerDocument && dr(t.ownerDocument.documentElement, t)) {
            if (null !== r && pr(t))
                if (n = r.start, void 0 === (e = r.end) && (e = n), "selectionStart" in t)
                    t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
                else if ((e = (n = t.ownerDocument || document) && n.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = t.textContent.length, i = Math.min(r.start, a);
                    r = void 0 === r.end ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = cr(t, i);
                    var o = cr(t, r);
                    a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((n = n.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
                }
            for (n = [], e = t; e = e.parentNode;)
                1 === e.nodeType && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" === typeof t.focus && t.focus(), t = 0; t < n.length; t++)
                (e = n[t]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } }
        var mr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, yr = null, br = !1;
        function wr(e, n, t) { var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument; br || null == vr || vr !== Y(r) || ("selectionStart" in (r = vr) && pr(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && sr(yr, r) || (yr = r, 0 < (r = Gr(gr, "onSelect")).length && (n = new ct("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = vr))); }
        function xr(e, n) { var t = {}; return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t; }
        var Sr = { animationend: xr("Animation", "AnimationEnd"), animationiteration: xr("Animation", "AnimationIteration"), animationstart: xr("Animation", "AnimationStart"), transitionend: xr("Transition", "TransitionEnd") }, kr = {}, Er = {};
        function Cr(e) { if (kr[e])
            return kr[e]; if (!Sr[e])
            return e; var n, t = Sr[e]; for (n in t)
            if (t.hasOwnProperty(n) && n in Er)
                return kr[e] = t[n]; return e; }
        c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Tr = Cr("animationend"), _r = Cr("animationiteration"), Ar = Cr("animationstart"), Or = Cr("transitionend"), Pr = new Map, Lr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function Ir(e, n) { Pr.set(e, n), s(n, [e]); }
        for (var Dr = 0; Dr < Lr.length; Dr++) {
            var jr = Lr[Dr];
            Ir(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)));
        }
        Ir(Tr, "onAnimationEnd"), Ir(_r, "onAnimationIteration"), Ir(Ar, "onAnimationStart"), Ir("dblclick", "onDoubleClick"), Ir("focusin", "onFocus"), Ir("focusout", "onBlur"), Ir(Or, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
        function Mr(e, n, t) { var r = e.type || "unknown-event"; e.currentTarget = t, function (e, n, t, r, a, o, l, s, u) { if ($e.apply(this, arguments), ze) {
            if (!ze)
                throw Error(i(198));
            var c = Me;
            ze = !1, Me = null, Re || (Re = !0, Fe = c);
        } }(r, n, void 0, e), e.currentTarget = null; }
        function Rr(e, n) { n = 0 !== (4 & n); for (var t = 0; t < e.length; t++) {
            var r = e[t], a = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (n)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var l = r[o], s = l.instance, u = l.currentTarget;
                        if (l = l.listener, s !== i && a.isPropagationStopped())
                            break e;
                        Mr(a, l, u), i = s;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (s = (l = r[o]).instance, u = l.currentTarget, l = l.listener, s !== i && a.isPropagationStopped())
                            break e;
                        Mr(a, l, u), i = s;
                    }
            }
        } if (Re)
            throw e = Fe, Re = !1, Fe = null, e; }
        function Fr(e, n) { var t = n[ma]; void 0 === t && (t = n[ma] = new Set); var r = e + "__bubble"; t.has(r) || (Hr(n, e, 2, !1), t.add(r)); }
        function Br(e, n, t) { var r = 0; n && (r |= 4), Hr(t, e, r, n); }
        var $r = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) { if (!e[$r]) {
            e[$r] = !0, o.forEach((function (n) { "selectionchange" !== n && (zr.has(n) || Br(n, !1, e), Br(n, !0, e)); }));
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[$r] || (n[$r] = !0, Br("selectionchange", !1, n));
        } }
        function Hr(e, n, t, r) { switch (Xn(n)) {
            case 1:
                var a = Gn;
                break;
            case 4:
                a = qn;
                break;
            default: a = Yn;
        } t = a.bind(null, n, t, e), a = void 0, !De || "touchstart" !== n && "touchmove" !== n && "wheel" !== n || (a = !0), r ? void 0 !== a ? e.addEventListener(n, t, { capture: !0, passive: a }) : e.addEventListener(n, t, !0) : void 0 !== a ? e.addEventListener(n, t, { passive: a }) : e.addEventListener(n, t, !1); }
        function Wr(e, n, t, r, a) { var i = r; if (0 === (1 & n) && 0 === (2 & n) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var l = r.stateNode.containerInfo;
                    if (l === a || 8 === l.nodeType && l.parentNode === a)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var s = o.tag;
                            if ((3 === s || 4 === s) && ((s = o.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a))
                                return;
                            o = o.return;
                        }
                    for (; null !== l;) {
                        if (null === (o = ya(l)))
                            return;
                        if (5 === (s = o.tag) || 6 === s) {
                            r = i = o;
                            continue e;
                        }
                        l = l.parentNode;
                    }
                }
                r = r.return;
            } Le((function () { var r = i, a = xe(t), o = []; e: {
            var l = Pr.get(e);
            if (void 0 !== l) {
                var s = ct, u = e;
                switch (e) {
                    case "keypress": if (0 === tt(t))
                        break e;
                    case "keydown":
                    case "keyup":
                        s = _t;
                        break;
                    case "focusin":
                        u = "focus", s = vt;
                        break;
                    case "focusout":
                        u = "blur", s = vt;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        s = vt;
                        break;
                    case "click": if (2 === t.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        s = ht;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        s = mt;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        s = Ot;
                        break;
                    case Tr:
                    case _r:
                    case Ar:
                        s = gt;
                        break;
                    case Or:
                        s = Pt;
                        break;
                    case "scroll":
                        s = ft;
                        break;
                    case "wheel":
                        s = It;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        s = bt;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": s = At;
                }
                var c = 0 !== (4 & n), d = !c && "scroll" === e, f = c ? null !== l ? l + "Capture" : null : l;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = Ie(h, f)) && c.push(Vr(h, m, p)))), d)
                        break;
                    h = h.return;
                }
                0 < c.length && (l = new s(l, u, null, t, a), o.push({ event: l, listeners: c }));
            }
        } if (0 === (7 & n)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || t === we || !(u = t.relatedTarget || t.fromElement) || !ya(u) && !u[ha]) && (s || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (u = (u = t.relatedTarget || t.toElement) ? ya(u) : null) && (u !== (d = Ue(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = r), s !== u)) {
                if (c = ht, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = At, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == s ? l : wa(s), p = null == u ? l : wa(u), (l = new c(m, h + "leave", s, t, a)).target = d, l.relatedTarget = p, m = null, ya(a) === r && ((c = new c(f, h + "enter", u, t, a)).target = p, c.relatedTarget = d, m = c), d = m, s && u)
                    e: {
                        for (f = u, h = 0, p = c = s; p; p = qr(p))
                            h++;
                        for (p = 0, m = f; m; m = qr(m))
                            p++;
                        for (; 0 < h - p;)
                            c = qr(c), h--;
                        for (; 0 < p - h;)
                            f = qr(f), p--;
                        for (; h--;) {
                            if (c === f || null !== f && c === f.alternate)
                                break e;
                            c = qr(c), f = qr(f);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== s && Yr(o, l, s, c, !1), null !== u && null !== d && Yr(o, d, u, c, !0);
            }
            if ("select" === (s = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type)
                var v = Qt;
            else if (Wt(l))
                if (Xt)
                    v = or;
                else {
                    v = ar;
                    var g = rr;
                }
            else
                (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = ir);
            switch (v && (v = v(e, r)) ? Vt(o, v, t, a) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)), g = r ? wa(r) : window, e) {
                case "focusin":
                    (Wt(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                    break;
                case "focusout":
                    yr = gr = vr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1, wr(o, t, a);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": wr(o, t, a);
            }
            var y;
            if (jt)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                Ut ? Bt(e, t) && (b = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (b = "onCompositionStart");
            b && (Mt && "ko" !== t.locale && (Ut || "onCompositionStart" !== b ? "onCompositionEnd" === b && Ut && (y = nt()) : (Zn = "value" in (Jn = a) ? Jn.value : Jn.textContent, Ut = !0)), 0 < (g = Gr(r, b)).length && (b = new wt(b, e, null, t, a), o.push({ event: b, listeners: g }), y ? b.data = y : null !== (y = $t(t)) && (b.data = y))), (y = zt ? function (e, n) { switch (e) {
                case "compositionend": return $t(n);
                case "keypress": return 32 !== n.which ? null : (Ft = !0, Rt);
                case "textInput": return (e = n.data) === Rt && Ft ? null : e;
                default: return null;
            } }(e, t) : function (e, n) { if (Ut)
                return "compositionend" === e || !jt && Bt(e, n) ? (e = nt(), et = Zn = Jn = null, Ut = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                        if (n.char && 1 < n.char.length)
                            return n.char;
                        if (n.which)
                            return String.fromCharCode(n.which);
                    }
                    return null;
                case "compositionend": return Mt && "ko" !== n.locale ? null : n.data;
            } }(e, t)) && (0 < (r = Gr(r, "onBeforeInput")).length && (a = new wt("onBeforeInput", "beforeinput", null, t, a), o.push({ event: a, listeners: r }), a.data = y));
        } Rr(o, n); })); }
        function Vr(e, n, t) { return { instance: e, listener: n, currentTarget: t }; }
        function Gr(e, n) { for (var t = n + "Capture", r = []; null !== e;) {
            var a = e, i = a.stateNode;
            5 === a.tag && null !== i && (a = i, null != (i = Ie(e, t)) && r.unshift(Vr(e, i, a)), null != (i = Ie(e, n)) && r.push(Vr(e, i, a))), e = e.return;
        } return r; }
        function qr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; }
        function Yr(e, n, t, r, a) { for (var i = n._reactName, o = []; null !== t && t !== r;) {
            var l = t, s = l.alternate, u = l.stateNode;
            if (null !== s && s === r)
                break;
            5 === l.tag && null !== u && (l = u, a ? null != (s = Ie(t, i)) && o.unshift(Vr(t, s, l)) : a || null != (s = Ie(t, i)) && o.push(Vr(t, s, l))), t = t.return;
        } 0 !== o.length && e.push({ event: n, listeners: o }); }
        var Kr = /\r\n?/g, Qr = /\u0000|\uFFFD/g;
        function Xr(e) { return ("string" === typeof e ? e : "" + e).replace(Kr, "\n").replace(Qr, ""); }
        function Jr(e, n, t) { if (n = Xr(n), Xr(e) !== n && t)
            throw Error(i(425)); }
        function Zr() { }
        var ea = null, na = null;
        function ta(e, n) { return "textarea" === e || "noscript" === e || "string" === typeof n.children || "number" === typeof n.children || "object" === typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html; }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0, aa = "function" === typeof clearTimeout ? clearTimeout : void 0, ia = "function" === typeof Promise ? Promise : void 0, oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function (e) { return ia.resolve(null).then(e).catch(la); } : ra;
        function la(e) { setTimeout((function () { throw e; })); }
        function sa(e, n) { var t = n, r = 0; do {
            var a = t.nextSibling;
            if (e.removeChild(t), a && 8 === a.nodeType)
                if ("/$" === (t = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void Hn(n);
                    r--;
                }
                else
                    "$" !== t && "$?" !== t && "$!" !== t || r++;
            t = a;
        } while (t); Hn(n); }
        function ua(e) { for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n)
                break;
            if (8 === n) {
                if ("$" === (n = e.data) || "$!" === n || "$?" === n)
                    break;
                if ("/$" === n)
                    return null;
            }
        } return e; }
        function ca(e) { e = e.previousSibling; for (var n = 0; e;) {
            if (8 === e.nodeType) {
                var t = e.data;
                if ("$" === t || "$!" === t || "$?" === t) {
                    if (0 === n)
                        return e;
                    n--;
                }
                else
                    "/$" === t && n++;
            }
            e = e.previousSibling;
        } return null; }
        var da = Math.random().toString(36).slice(2), fa = "__reactFiber$" + da, pa = "__reactProps$" + da, ha = "__reactContainer$" + da, ma = "__reactEvents$" + da, va = "__reactListeners$" + da, ga = "__reactHandles$" + da;
        function ya(e) { var n = e[fa]; if (n)
            return n; for (var t = e.parentNode; t;) {
            if (n = t[ha] || t[fa]) {
                if (t = n.alternate, null !== n.child || null !== t && null !== t.child)
                    for (e = ca(e); null !== e;) {
                        if (t = e[fa])
                            return t;
                        e = ca(e);
                    }
                return n;
            }
            t = (e = t).parentNode;
        } return null; }
        function ba(e) { return !(e = e[fa] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; }
        function wa(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(i(33)); }
        function xa(e) { return e[pa] || null; }
        var Sa = [], ka = -1;
        function Ea(e) { return { current: e }; }
        function Ca(e) { 0 > ka || (e.current = Sa[ka], Sa[ka] = null, ka--); }
        function Ta(e, n) { ka++, Sa[ka] = e.current, e.current = n; }
        var _a = {}, Aa = Ea(_a), Oa = Ea(!1), Pa = _a;
        function La(e, n) { var t = e.type.contextTypes; if (!t)
            return _a; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
            return r.__reactInternalMemoizedMaskedChildContext; var a, i = {}; for (a in t)
            i[a] = n[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = i), i; }
        function Ia(e) { return null !== (e = e.childContextTypes) && void 0 !== e; }
        function Da() { Ca(Oa), Ca(Aa); }
        function ja(e, n, t) { if (Aa.current !== _a)
            throw Error(i(168)); Ta(Aa, n), Ta(Oa, t); }
        function Na(e, n, t) { var r = e.stateNode; if (n = n.childContextTypes, "function" !== typeof r.getChildContext)
            return t; for (var a in r = r.getChildContext())
            if (!(a in n))
                throw Error(i(108, H(e) || "Unknown", a)); return M({}, t, r); }
        function za(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _a, Pa = Aa.current, Ta(Aa, e), Ta(Oa, Oa.current), !0; }
        function Ma(e, n, t) { var r = e.stateNode; if (!r)
            throw Error(i(169)); t ? (e = Na(e, n, Pa), r.__reactInternalMemoizedMergedChildContext = e, Ca(Oa), Ca(Aa), Ta(Aa, e)) : Ca(Oa), Ta(Oa, t); }
        var Ra = null, Fa = !1, Ba = !1;
        function $a(e) { null === Ra ? Ra = [e] : Ra.push(e); }
        function Ua() { if (!Ba && null !== Ra) {
            Ba = !0;
            var e = 0, n = wn;
            try {
                var t = Ra;
                for (wn = 1; e < t.length; e++) {
                    var r = t[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                Ra = null, Fa = !1;
            }
            catch (a) {
                throw null !== Ra && (Ra = Ra.slice(e + 1)), qe(Ze, Ua), a;
            }
            finally {
                wn = n, Ba = !1;
            }
        } return null; }
        var Ha = [], Wa = 0, Va = null, Ga = 0, qa = [], Ya = 0, Ka = null, Qa = 1, Xa = "";
        function Ja(e, n) { Ha[Wa++] = Ga, Ha[Wa++] = Va, Va = e, Ga = n; }
        function Za(e, n, t) { qa[Ya++] = Qa, qa[Ya++] = Xa, qa[Ya++] = Ka, Ka = e; var r = Qa; e = Xa; var a = 32 - ln(r) - 1; r &= ~(1 << a), t += 1; var i = 32 - ln(n) + a; if (30 < i) {
            var o = a - a % 5;
            i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Qa = 1 << 32 - ln(n) + a | t << a | r, Xa = i + e;
        }
        else
            Qa = 1 << i | t << a | r, Xa = e; }
        function ei(e) { null !== e.return && (Ja(e, 1), Za(e, 1, 0)); }
        function ni(e) { for (; e === Va;)
            Va = Ha[--Wa], Ha[Wa] = null, Ga = Ha[--Wa], Ha[Wa] = null; for (; e === Ka;)
            Ka = qa[--Ya], qa[Ya] = null, Xa = qa[--Ya], qa[Ya] = null, Qa = qa[--Ya], qa[Ya] = null; }
        var ti = null, ri = null, ai = !1, ii = null;
        function oi(e, n) { var t = Lu(5, null, null, 0); t.elementType = "DELETED", t.stateNode = n, t.return = e, null === (n = e.deletions) ? (e.deletions = [t], e.flags |= 16) : n.push(t); }
        function li(e, n) { switch (e.tag) {
            case 5:
                var t = e.type;
                return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && (e.stateNode = n, ti = e, ri = ua(n.firstChild), !0);
            case 6: return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && (e.stateNode = n, ti = e, ri = null, !0);
            case 13: return null !== (n = 8 !== n.nodeType ? null : n) && (t = null !== Ka ? { id: Qa, overflow: Xa } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, (t = Lu(18, null, null, 0)).stateNode = n, t.return = e, e.child = t, ti = e, ri = null, !0);
            default: return !1;
        } }
        function si(e) { return 0 !== (1 & e.mode) && 0 === (128 & e.flags); }
        function ui(e) { if (ai) {
            var n = ri;
            if (n) {
                var t = n;
                if (!li(e, n)) {
                    if (si(e))
                        throw Error(i(418));
                    n = ua(t.nextSibling);
                    var r = ti;
                    n && li(e, n) ? oi(r, t) : (e.flags = -4097 & e.flags | 2, ai = !1, ti = e);
                }
            }
            else {
                if (si(e))
                    throw Error(i(418));
                e.flags = -4097 & e.flags | 2, ai = !1, ti = e;
            }
        } }
        function ci(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; ti = e; }
        function di(e) { if (e !== ti)
            return !1; if (!ai)
            return ci(e), ai = !0, !1; var n; if ((n = 3 !== e.tag) && !(n = 5 !== e.tag) && (n = "head" !== (n = e.type) && "body" !== n && !ta(e.type, e.memoizedProps)), n && (n = ri)) {
            if (si(e))
                throw fi(), Error(i(418));
            for (; n;)
                oi(e, n), n = ua(n.nextSibling);
        } if (ci(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(i(317));
            e: {
                for (e = e.nextSibling, n = 0; e;) {
                    if (8 === e.nodeType) {
                        var t = e.data;
                        if ("/$" === t) {
                            if (0 === n) {
                                ri = ua(e.nextSibling);
                                break e;
                            }
                            n--;
                        }
                        else
                            "$" !== t && "$!" !== t && "$?" !== t || n++;
                    }
                    e = e.nextSibling;
                }
                ri = null;
            }
        }
        else
            ri = ti ? ua(e.stateNode.nextSibling) : null; return !0; }
        function fi() { for (var e = ri; e;)
            e = ua(e.nextSibling); }
        function pi() { ri = ti = null, ai = !1; }
        function hi(e) { null === ii ? ii = [e] : ii.push(e); }
        var mi = w.ReactCurrentBatchConfig;
        function vi(e, n) { if (e && e.defaultProps) {
            for (var t in n = M({}, n), e = e.defaultProps)
                void 0 === n[t] && (n[t] = e[t]);
            return n;
        } return n; }
        var gi = Ea(null), yi = null, bi = null, wi = null;
        function xi() { wi = bi = yi = null; }
        function Si(e) { var n = gi.current; Ca(gi), e._currentValue = n; }
        function ki(e, n, t) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & n) !== n ? (e.childLanes |= n, null !== r && (r.childLanes |= n)) : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
                break;
            e = e.return;
        } }
        function Ei(e, n) { yi = e, wi = bi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & n) && (wl = !0), e.firstContext = null); }
        function Ci(e) { var n = e._currentValue; if (wi !== e)
            if (e = { context: e, memoizedValue: n, next: null }, null === bi) {
                if (null === yi)
                    throw Error(i(308));
                bi = e, yi.dependencies = { lanes: 0, firstContext: e };
            }
            else
                bi = bi.next = e; return n; }
        var Ti = null;
        function _i(e) { null === Ti ? Ti = [e] : Ti.push(e); }
        function Ai(e, n, t, r) { var a = n.interleaved; return null === a ? (t.next = t, _i(n)) : (t.next = a.next, a.next = t), n.interleaved = t, Oi(e, r); }
        function Oi(e, n) { e.lanes |= n; var t = e.alternate; for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e;)
            e.childLanes |= n, null !== (t = e.alternate) && (t.childLanes |= n), t = e, e = e.return; return 3 === t.tag ? t.stateNode : null; }
        var Pi = !1;
        function Li(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
        function Ii(e, n) { e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
        function Di(e, n) { return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null }; }
        function ji(e, n, t) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 !== (2 & As)) {
            var a = r.pending;
            return null === a ? n.next = n : (n.next = a.next, a.next = n), r.pending = n, Oi(e, t);
        } return null === (a = r.interleaved) ? (n.next = n, _i(r)) : (n.next = a.next, a.next = n), r.interleaved = n, Oi(e, t); }
        function Ni(e, n, t) { if (null !== (n = n.updateQueue) && (n = n.shared, 0 !== (4194240 & t))) {
            var r = n.lanes;
            t |= r &= e.pendingLanes, n.lanes = t, bn(e, t);
        } }
        function zi(e, n) { var t = e.updateQueue, r = e.alternate; if (null !== r && t === (r = r.updateQueue)) {
            var a = null, i = null;
            if (null !== (t = t.firstBaseUpdate)) {
                do {
                    var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
                    null === i ? a = i = o : i = i.next = o, t = t.next;
                } while (null !== t);
                null === i ? a = i = n : i = i.next = n;
            }
            else
                a = i = n;
            return t = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, void (e.updateQueue = t);
        } null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n; }
        function Mi(e, n, t, r) { var a = e.updateQueue; Pi = !1; var i = a.firstBaseUpdate, o = a.lastBaseUpdate, l = a.shared.pending; if (null !== l) {
            a.shared.pending = null;
            var s = l, u = s.next;
            s.next = null, null === o ? i = u : o.next = u, o = s;
            var c = e.alternate;
            null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== o && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s));
        } if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = s = null, l = i;;) {
                var f = l.lane, p = l.eventTime;
                if ((r & f) === f) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                    e: {
                        var h = e, m = l;
                        switch (f = n, p = t, m.tag) {
                            case 1:
                                if ("function" === typeof (h = m.payload)) {
                                    d = h.call(p, d, f);
                                    break e;
                                }
                                d = h;
                                break e;
                            case 3: h.flags = -65537 & h.flags | 128;
                            case 0:
                                if (null === (f = "function" === typeof (h = m.payload) ? h.call(p, d, f) : h) || void 0 === f)
                                    break e;
                                d = M({}, d, f);
                                break e;
                            case 2: Pi = !0;
                        }
                    }
                    null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [l] : f.push(l));
                }
                else
                    p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, null === c ? (u = c = p, s = d) : c = c.next = p, o |= f;
                if (null === (l = l.next)) {
                    if (null === (l = a.shared.pending))
                        break;
                    l = (f = l).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
                }
            }
            if (null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null !== (n = a.shared.interleaved)) {
                a = n;
                do {
                    o |= a.lane, a = a.next;
                } while (a !== n);
            }
            else
                null === i && (a.shared.lanes = 0);
            zs |= o, e.lanes = o, e.memoizedState = d;
        } }
        function Ri(e, n, t) { if (e = n.effects, n.effects = null, null !== e)
            for (n = 0; n < e.length; n++) {
                var r = e[n], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = t, "function" !== typeof a)
                        throw Error(i(191, a));
                    a.call(r);
                }
            } }
        var Fi = (new r.Component).refs;
        function Bi(e, n, t, r) { t = null === (t = t(r, n = e.memoizedState)) || void 0 === t ? n : M({}, n, t), e.memoizedState = t, 0 === e.lanes && (e.updateQueue.baseState = t); }
        var $i = { isMounted: function (e) { return !!(e = e._reactInternals) && Ue(e) === e; }, enqueueSetState: function (e, n, t) { e = e._reactInternals; var r = eu(), a = nu(e), i = Di(r, a); i.payload = n, void 0 !== t && null !== t && (i.callback = t), null !== (n = ji(e, i, a)) && (tu(n, e, a, r), Ni(n, e, a)); }, enqueueReplaceState: function (e, n, t) { e = e._reactInternals; var r = eu(), a = nu(e), i = Di(r, a); i.tag = 1, i.payload = n, void 0 !== t && null !== t && (i.callback = t), null !== (n = ji(e, i, a)) && (tu(n, e, a, r), Ni(n, e, a)); }, enqueueForceUpdate: function (e, n) { e = e._reactInternals; var t = eu(), r = nu(e), a = Di(t, r); a.tag = 2, void 0 !== n && null !== n && (a.callback = n), null !== (n = ji(e, a, r)) && (tu(n, e, r, t), Ni(n, e, r)); } };
        function Ui(e, n, t, r, a, i, o) { return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !n.prototype || !n.prototype.isPureReactComponent || (!sr(t, r) || !sr(a, i)); }
        function Hi(e, n, t) { var r = !1, a = _a, i = n.contextType; return "object" === typeof i && null !== i ? i = Ci(i) : (a = Ia(n) ? Pa : Aa.current, i = (r = null !== (r = n.contextTypes) && void 0 !== r) ? La(e, a) : _a), n = new n(t, i), e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null, n.updater = $i, e.stateNode = n, n._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), n; }
        function Wi(e, n, t, r) { e = n.state, "function" === typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r), "function" === typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && $i.enqueueReplaceState(n, n.state, null); }
        function Vi(e, n, t, r) { var a = e.stateNode; a.props = t, a.state = e.memoizedState, a.refs = Fi, Li(e); var i = n.contextType; "object" === typeof i && null !== i ? a.context = Ci(i) : (i = Ia(n) ? Pa : Aa.current, a.context = La(e, i)), a.state = e.memoizedState, "function" === typeof (i = n.getDerivedStateFromProps) && (Bi(e, n, i, t), a.state = e.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (n = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), n !== a.state && $i.enqueueReplaceState(a, a.state, null), Mi(e, t, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308); }
        function Gi(e, n, t) { if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (t._owner) {
                if (t = t._owner) {
                    if (1 !== t.tag)
                        throw Error(i(309));
                    var r = t.stateNode;
                }
                if (!r)
                    throw Error(i(147, e));
                var a = r, o = "" + e;
                return null !== n && null !== n.ref && "function" === typeof n.ref && n.ref._stringRef === o ? n.ref : (n = function (e) { var n = a.refs; n === Fi && (n = a.refs = {}), null === e ? delete n[o] : n[o] = e; }, n._stringRef = o, n);
            }
            if ("string" !== typeof e)
                throw Error(i(284));
            if (!t._owner)
                throw Error(i(290, e));
        } return e; }
        function qi(e, n) { throw e = Object.prototype.toString.call(n), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)); }
        function Yi(e) { return (0, e._init)(e._payload); }
        function Ki(e) { function n(n, t) { if (e) {
            var r = n.deletions;
            null === r ? (n.deletions = [t], n.flags |= 16) : r.push(t);
        } } function t(t, r) { if (!e)
            return null; for (; null !== r;)
            n(t, r), r = r.sibling; return null; } function r(e, n) { for (e = new Map; null !== n;)
            null !== n.key ? e.set(n.key, n) : e.set(n.index, n), n = n.sibling; return e; } function a(e, n) { return (e = Du(e, n)).index = 0, e.sibling = null, e; } function o(n, t, r) { return n.index = r, e ? null !== (r = n.alternate) ? (r = r.index) < t ? (n.flags |= 2, t) : r : (n.flags |= 2, t) : (n.flags |= 1048576, t); } function l(n) { return e && null === n.alternate && (n.flags |= 2), n; } function s(e, n, t, r) { return null === n || 6 !== n.tag ? ((n = Mu(t, e.mode, r)).return = e, n) : ((n = a(n, t)).return = e, n); } function u(e, n, t, r) { var i = t.type; return i === k ? d(e, n, t.props.children, r, t.key) : null !== n && (n.elementType === i || "object" === typeof i && null !== i && i.$$typeof === I && Yi(i) === n.type) ? ((r = a(n, t.props)).ref = Gi(e, n, t), r.return = e, r) : ((r = ju(t.type, t.key, t.props, null, e.mode, r)).ref = Gi(e, n, t), r.return = e, r); } function c(e, n, t, r) { return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation ? ((n = Ru(t, e.mode, r)).return = e, n) : ((n = a(n, t.children || [])).return = e, n); } function d(e, n, t, r, i) { return null === n || 7 !== n.tag ? ((n = Nu(t, e.mode, r, i)).return = e, n) : ((n = a(n, t)).return = e, n); } function f(e, n, t) { if ("string" === typeof n && "" !== n || "number" === typeof n)
            return (n = Mu("" + n, e.mode, t)).return = e, n; if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
                case x: return (t = ju(n.type, n.key, n.props, null, e.mode, t)).ref = Gi(e, null, n), t.return = e, t;
                case S: return (n = Ru(n, e.mode, t)).return = e, n;
                case I: return f(e, (0, n._init)(n._payload), t);
            }
            if (ne(n) || N(n))
                return (n = Nu(n, e.mode, t, null)).return = e, n;
            qi(e, n);
        } return null; } function p(e, n, t, r) { var a = null !== n ? n.key : null; if ("string" === typeof t && "" !== t || "number" === typeof t)
            return null !== a ? null : s(e, n, "" + t, r); if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
                case x: return t.key === a ? u(e, n, t, r) : null;
                case S: return t.key === a ? c(e, n, t, r) : null;
                case I: return p(e, n, (a = t._init)(t._payload), r);
            }
            if (ne(t) || N(t))
                return null !== a ? null : d(e, n, t, r, null);
            qi(e, t);
        } return null; } function h(e, n, t, r, a) { if ("string" === typeof r && "" !== r || "number" === typeof r)
            return s(n, e = e.get(t) || null, "" + r, a); if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
                case x: return u(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                case S: return c(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                case I: return h(e, n, t, (0, r._init)(r._payload), a);
            }
            if (ne(r) || N(r))
                return d(n, e = e.get(t) || null, r, a, null);
            qi(n, r);
        } return null; } function m(a, i, l, s) { for (var u = null, c = null, d = i, m = i = 0, v = null; null !== d && m < l.length; m++) {
            d.index > m ? (v = d, d = null) : v = d.sibling;
            var g = p(a, d, l[m], s);
            if (null === g) {
                null === d && (d = v);
                break;
            }
            e && d && null === g.alternate && n(a, d), i = o(g, i, m), null === c ? u = g : c.sibling = g, c = g, d = v;
        } if (m === l.length)
            return t(a, d), ai && Ja(a, m), u; if (null === d) {
            for (; m < l.length; m++)
                null !== (d = f(a, l[m], s)) && (i = o(d, i, m), null === c ? u = d : c.sibling = d, c = d);
            return ai && Ja(a, m), u;
        } for (d = r(a, d); m < l.length; m++)
            null !== (v = h(d, a, m, l[m], s)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), i = o(v, i, m), null === c ? u = v : c.sibling = v, c = v); return e && d.forEach((function (e) { return n(a, e); })), ai && Ja(a, m), u; } function v(a, l, s, u) { var c = N(s); if ("function" !== typeof c)
            throw Error(i(150)); if (null == (s = c.call(s)))
            throw Error(i(151)); for (var d = c = null, m = l, v = l = 0, g = null, y = s.next(); null !== m && !y.done; v++, y = s.next()) {
            m.index > v ? (g = m, m = null) : g = m.sibling;
            var b = p(a, m, y.value, u);
            if (null === b) {
                null === m && (m = g);
                break;
            }
            e && m && null === b.alternate && n(a, m), l = o(b, l, v), null === d ? c = b : d.sibling = b, d = b, m = g;
        } if (y.done)
            return t(a, m), ai && Ja(a, v), c; if (null === m) {
            for (; !y.done; v++, y = s.next())
                null !== (y = f(a, y.value, u)) && (l = o(y, l, v), null === d ? c = y : d.sibling = y, d = y);
            return ai && Ja(a, v), c;
        } for (m = r(a, m); !y.done; v++, y = s.next())
            null !== (y = h(m, a, v, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), l = o(y, l, v), null === d ? c = y : d.sibling = y, d = y); return e && m.forEach((function (e) { return n(a, e); })), ai && Ja(a, v), c; } return function e(r, i, o, s) { if ("object" === typeof o && null !== o && o.type === k && null === o.key && (o = o.props.children), "object" === typeof o && null !== o) {
            switch (o.$$typeof) {
                case x:
                    e: {
                        for (var u = o.key, c = i; null !== c;) {
                            if (c.key === u) {
                                if ((u = o.type) === k) {
                                    if (7 === c.tag) {
                                        t(r, c.sibling), (i = a(c, o.props.children)).return = r, r = i;
                                        break e;
                                    }
                                }
                                else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === I && Yi(u) === c.type) {
                                    t(r, c.sibling), (i = a(c, o.props)).ref = Gi(r, c, o), i.return = r, r = i;
                                    break e;
                                }
                                t(r, c);
                                break;
                            }
                            n(r, c), c = c.sibling;
                        }
                        o.type === k ? ((i = Nu(o.props.children, r.mode, s, o.key)).return = r, r = i) : ((s = ju(o.type, o.key, o.props, null, r.mode, s)).ref = Gi(r, i, o), s.return = r, r = s);
                    }
                    return l(r);
                case S:
                    e: {
                        for (c = o.key; null !== i;) {
                            if (i.key === c) {
                                if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                    t(r, i.sibling), (i = a(i, o.children || [])).return = r, r = i;
                                    break e;
                                }
                                t(r, i);
                                break;
                            }
                            n(r, i), i = i.sibling;
                        }
                        (i = Ru(o, r.mode, s)).return = r, r = i;
                    }
                    return l(r);
                case I: return e(r, i, (c = o._init)(o._payload), s);
            }
            if (ne(o))
                return m(r, i, o, s);
            if (N(o))
                return v(r, i, o, s);
            qi(r, o);
        } return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o, null !== i && 6 === i.tag ? (t(r, i.sibling), (i = a(i, o)).return = r, r = i) : (t(r, i), (i = Mu(o, r.mode, s)).return = r, r = i), l(r)) : t(r, i); }; }
        var Qi = Ki(!0), Xi = Ki(!1), Ji = {}, Zi = Ea(Ji), eo = Ea(Ji), no = Ea(Ji);
        function to(e) { if (e === Ji)
            throw Error(i(174)); return e; }
        function ro(e, n) { switch (Ta(no, n), Ta(eo, e), Ta(Zi, Ji), e = n.nodeType) {
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : se(null, "");
                break;
            default: n = se(n = (e = 8 === e ? n.parentNode : n).namespaceURI || null, e = e.tagName);
        } Ca(Zi), Ta(Zi, n); }
        function ao() { Ca(Zi), Ca(eo), Ca(no); }
        function io(e) { to(no.current); var n = to(Zi.current), t = se(n, e.type); n !== t && (Ta(eo, e), Ta(Zi, t)); }
        function oo(e) { eo.current === e && (Ca(Zi), Ca(eo)); }
        var lo = Ea(0);
        function so(e) { for (var n = e; null !== n;) {
            if (13 === n.tag) {
                var t = n.memoizedState;
                if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data))
                    return n;
            }
            else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
                if (0 !== (128 & n.flags))
                    return n;
            }
            else if (null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === e)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === e)
                    return null;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } return null; }
        var uo = [];
        function co() { for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null; uo.length = 0; }
        var fo = w.ReactCurrentDispatcher, po = w.ReactCurrentBatchConfig, ho = 0, mo = null, vo = null, go = null, yo = !1, bo = !1, wo = 0, xo = 0;
        function So() { throw Error(i(321)); }
        function ko(e, n) { if (null === n)
            return !1; for (var t = 0; t < n.length && t < e.length; t++)
            if (!lr(e[t], n[t]))
                return !1; return !0; }
        function Eo(e, n, t, r, a, o) { if (ho = o, mo = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, fo.current = null === e || null === e.memoizedState ? ll : sl, e = t(r, a), bo) {
            o = 0;
            do {
                if (bo = !1, wo = 0, 25 <= o)
                    throw Error(i(301));
                o += 1, go = vo = null, n.updateQueue = null, fo.current = ul, e = t(r, a);
            } while (bo);
        } if (fo.current = ol, n = null !== vo && null !== vo.next, ho = 0, go = vo = mo = null, yo = !1, n)
            throw Error(i(300)); return e; }
        function Co() { var e = 0 !== wo; return wo = 0, e; }
        function To() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === go ? mo.memoizedState = go = e : go = go.next = e, go; }
        function _o() { if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = vo.next; var n = null === go ? mo.memoizedState : go.next; if (null !== n)
            go = n, vo = e;
        else {
            if (null === e)
                throw Error(i(310));
            e = { memoizedState: (vo = e).memoizedState, baseState: vo.baseState, baseQueue: vo.baseQueue, queue: vo.queue, next: null }, null === go ? mo.memoizedState = go = e : go = go.next = e;
        } return go; }
        function Ao(e, n) { return "function" === typeof n ? n(e) : n; }
        function Oo(e) { var n = _o(), t = n.queue; if (null === t)
            throw Error(i(311)); t.lastRenderedReducer = e; var r = vo, a = r.baseQueue, o = t.pending; if (null !== o) {
            if (null !== a) {
                var l = a.next;
                a.next = o.next, o.next = l;
            }
            r.baseQueue = a = o, t.pending = null;
        } if (null !== a) {
            o = a.next, r = r.baseState;
            var s = l = null, u = null, c = o;
            do {
                var d = c.lane;
                if ((ho & d) === d)
                    null !== u && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var f = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === u ? (s = u = f, l = r) : u = u.next = f, mo.lanes |= d, zs |= d;
                }
                c = c.next;
            } while (null !== c && c !== o);
            null === u ? l = r : u.next = s, lr(r, n.memoizedState) || (wl = !0), n.memoizedState = r, n.baseState = l, n.baseQueue = u, t.lastRenderedState = r;
        } if (null !== (e = t.interleaved)) {
            a = e;
            do {
                o = a.lane, mo.lanes |= o, zs |= o, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (t.lanes = 0); return [n.memoizedState, t.dispatch]; }
        function Po(e) { var n = _o(), t = n.queue; if (null === t)
            throw Error(i(311)); t.lastRenderedReducer = e; var r = t.dispatch, a = t.pending, o = n.memoizedState; if (null !== a) {
            t.pending = null;
            var l = a = a.next;
            do {
                o = e(o, l.action), l = l.next;
            } while (l !== a);
            lr(o, n.memoizedState) || (wl = !0), n.memoizedState = o, null === n.baseQueue && (n.baseState = o), t.lastRenderedState = o;
        } return [o, r]; }
        function Lo() { }
        function Io(e, n) { var t = mo, r = _o(), a = n(), o = !lr(r.memoizedState, a); if (o && (r.memoizedState = a, wl = !0), r = r.queue, Wo(No.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || null !== go && 1 & go.memoizedState.tag) {
            if (t.flags |= 2048, Fo(9, jo.bind(null, t, r, a, n), void 0, null), null === Os)
                throw Error(i(349));
            0 !== (30 & ho) || Do(t, n, a);
        } return a; }
        function Do(e, n, t) { e.flags |= 16384, e = { getSnapshot: n, value: t }, null === (n = mo.updateQueue) ? (n = { lastEffect: null, stores: null }, mo.updateQueue = n, n.stores = [e]) : null === (t = n.stores) ? n.stores = [e] : t.push(e); }
        function jo(e, n, t, r) { n.value = t, n.getSnapshot = r, zo(n) && Mo(e); }
        function No(e, n, t) { return t((function () { zo(n) && Mo(e); })); }
        function zo(e) { var n = e.getSnapshot; e = e.value; try {
            var t = n();
            return !lr(e, t);
        }
        catch (r) {
            return !0;
        } }
        function Mo(e) { var n = Oi(e, 1); null !== n && tu(n, e, 1, -1); }
        function Ro(e) { var n = To(); return "function" === typeof e && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ao, lastRenderedState: e }, n.queue = e, e = e.dispatch = tl.bind(null, mo, e), [n.memoizedState, e]; }
        function Fo(e, n, t, r) { return e = { tag: e, create: n, destroy: t, deps: r, next: null }, null === (n = mo.updateQueue) ? (n = { lastEffect: null, stores: null }, mo.updateQueue = n, n.lastEffect = e.next = e) : null === (t = n.lastEffect) ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e), e; }
        function Bo() { return _o().memoizedState; }
        function $o(e, n, t, r) { var a = To(); mo.flags |= e, a.memoizedState = Fo(1 | n, t, void 0, void 0 === r ? null : r); }
        function Uo(e, n, t, r) { var a = _o(); r = void 0 === r ? null : r; var i = void 0; if (null !== vo) {
            var o = vo.memoizedState;
            if (i = o.destroy, null !== r && ko(r, o.deps))
                return void (a.memoizedState = Fo(n, t, i, r));
        } mo.flags |= e, a.memoizedState = Fo(1 | n, t, i, r); }
        function Ho(e, n) { return $o(8390656, 8, e, n); }
        function Wo(e, n) { return Uo(2048, 8, e, n); }
        function Vo(e, n) { return Uo(4, 2, e, n); }
        function Go(e, n) { return Uo(4, 4, e, n); }
        function qo(e, n) { return "function" === typeof n ? (e = e(), n(e), function () { n(null); }) : null !== n && void 0 !== n ? (e = e(), n.current = e, function () { n.current = null; }) : void 0; }
        function Yo(e, n, t) { return t = null !== t && void 0 !== t ? t.concat([e]) : null, Uo(4, 4, qo.bind(null, n, e), t); }
        function Ko() { }
        function Qo(e, n) { var t = _o(); n = void 0 === n ? null : n; var r = t.memoizedState; return null !== r && null !== n && ko(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e); }
        function Xo(e, n) { var t = _o(); n = void 0 === n ? null : n; var r = t.memoizedState; return null !== r && null !== n && ko(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e); }
        function Jo(e, n, t) { return 0 === (21 & ho) ? (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = t) : (lr(t, n) || (t = vn(), mo.lanes |= t, zs |= t, e.baseState = !0), n); }
        function Zo(e, n) { var t = wn; wn = 0 !== t && 4 > t ? t : 4, e(!0); var r = po.transition; po.transition = {}; try {
            e(!1), n();
        }
        finally {
            wn = t, po.transition = r;
        } }
        function el() { return _o().memoizedState; }
        function nl(e, n, t) { var r = nu(e); if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, rl(e))
            al(n, t);
        else if (null !== (t = Ai(e, n, t, r))) {
            tu(t, e, r, eu()), il(t, n, r);
        } }
        function tl(e, n, t) { var r = nu(e), a = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }; if (rl(e))
            al(n, a);
        else {
            var i = e.alternate;
            if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = n.lastRenderedReducer))
                try {
                    var o = n.lastRenderedState, l = i(o, t);
                    if (a.hasEagerState = !0, a.eagerState = l, lr(l, o)) {
                        var s = n.interleaved;
                        return null === s ? (a.next = a, _i(n)) : (a.next = s.next, s.next = a), void (n.interleaved = a);
                    }
                }
                catch (u) { }
            null !== (t = Ai(e, n, a, r)) && (tu(t, e, r, a = eu()), il(t, n, r));
        } }
        function rl(e) { var n = e.alternate; return e === mo || null !== n && n === mo; }
        function al(e, n) { bo = yo = !0; var t = e.pending; null === t ? n.next = n : (n.next = t.next, t.next = n), e.pending = n; }
        function il(e, n, t) { if (0 !== (4194240 & t)) {
            var r = n.lanes;
            t |= r &= e.pendingLanes, n.lanes = t, bn(e, t);
        } }
        var ol = { readContext: Ci, useCallback: So, useContext: So, useEffect: So, useImperativeHandle: So, useInsertionEffect: So, useLayoutEffect: So, useMemo: So, useReducer: So, useRef: So, useState: So, useDebugValue: So, useDeferredValue: So, useTransition: So, useMutableSource: So, useSyncExternalStore: So, useId: So, unstable_isNewReconciler: !1 }, ll = { readContext: Ci, useCallback: function (e, n) { return To().memoizedState = [e, void 0 === n ? null : n], e; }, useContext: Ci, useEffect: Ho, useImperativeHandle: function (e, n, t) { return t = null !== t && void 0 !== t ? t.concat([e]) : null, $o(4194308, 4, qo.bind(null, n, e), t); }, useLayoutEffect: function (e, n) { return $o(4194308, 4, e, n); }, useInsertionEffect: function (e, n) { return $o(4, 2, e, n); }, useMemo: function (e, n) { var t = To(); return n = void 0 === n ? null : n, e = e(), t.memoizedState = [e, n], e; }, useReducer: function (e, n, t) { var r = To(); return n = void 0 !== t ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = nl.bind(null, mo, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, To().memoizedState = e; }, useState: Ro, useDebugValue: Ko, useDeferredValue: function (e) { return To().memoizedState = e; }, useTransition: function () { var e = Ro(!1), n = e[0]; return e = Zo.bind(null, e[1]), To().memoizedState = e, [n, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, n, t) { var r = mo, a = To(); if (ai) {
                if (void 0 === t)
                    throw Error(i(407));
                t = t();
            }
            else {
                if (t = n(), null === Os)
                    throw Error(i(349));
                0 !== (30 & ho) || Do(r, n, t);
            } a.memoizedState = t; var o = { value: t, getSnapshot: n }; return a.queue = o, Ho(No.bind(null, r, o, e), [e]), r.flags |= 2048, Fo(9, jo.bind(null, r, o, t, n), void 0, null), t; }, useId: function () { var e = To(), n = Os.identifierPrefix; if (ai) {
                var t = Xa;
                n = ":" + n + "R" + (t = (Qa & ~(1 << 32 - ln(Qa) - 1)).toString(32) + t), 0 < (t = wo++) && (n += "H" + t.toString(32)), n += ":";
            }
            else
                n = ":" + n + "r" + (t = xo++).toString(32) + ":"; return e.memoizedState = n; }, unstable_isNewReconciler: !1 }, sl = { readContext: Ci, useCallback: Qo, useContext: Ci, useEffect: Wo, useImperativeHandle: Yo, useInsertionEffect: Vo, useLayoutEffect: Go, useMemo: Xo, useReducer: Oo, useRef: Bo, useState: function () { return Oo(Ao); }, useDebugValue: Ko, useDeferredValue: function (e) { return Jo(_o(), vo.memoizedState, e); }, useTransition: function () { return [Oo(Ao)[0], _o().memoizedState]; }, useMutableSource: Lo, useSyncExternalStore: Io, useId: el, unstable_isNewReconciler: !1 }, ul = { readContext: Ci, useCallback: Qo, useContext: Ci, useEffect: Wo, useImperativeHandle: Yo, useInsertionEffect: Vo, useLayoutEffect: Go, useMemo: Xo, useReducer: Po, useRef: Bo, useState: function () { return Po(Ao); }, useDebugValue: Ko, useDeferredValue: function (e) { var n = _o(); return null === vo ? n.memoizedState = e : Jo(n, vo.memoizedState, e); }, useTransition: function () { return [Po(Ao)[0], _o().memoizedState]; }, useMutableSource: Lo, useSyncExternalStore: Io, useId: el, unstable_isNewReconciler: !1 };
        function cl(e, n) { try {
            var t = "", r = n;
            do {
                t += $(r), r = r.return;
            } while (r);
            var a = t;
        }
        catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
        } return { value: e, source: n, stack: a, digest: null }; }
        function dl(e, n, t) { return { value: e, source: null, stack: null != t ? t : null, digest: null != n ? n : null }; }
        function fl(e, n) { try {
            console.error(n.value);
        }
        catch (t) {
            setTimeout((function () { throw t; }));
        } }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, n, t) { (t = Di(-1, t)).tag = 3, t.payload = { element: null }; var r = n.value; return t.callback = function () { Ws || (Ws = !0, Vs = r), fl(0, n); }, t; }
        function ml(e, n, t) { (t = Di(-1, t)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" === typeof r) {
            var a = n.value;
            t.payload = function () { return r(a); }, t.callback = function () { fl(0, n); };
        } var i = e.stateNode; return null !== i && "function" === typeof i.componentDidCatch && (t.callback = function () { fl(0, n), "function" !== typeof r && (null === Gs ? Gs = new Set([this]) : Gs.add(this)); var e = n.stack; this.componentDidCatch(n.value, { componentStack: null !== e ? e : "" }); }), t; }
        function vl(e, n, t) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pl;
            var a = new Set;
            r.set(n, a);
        }
        else
            void 0 === (a = r.get(n)) && (a = new Set, r.set(n, a)); a.has(t) || (a.add(t), e = Cu.bind(null, e, n, t), n.then(e, e)); }
        function gl(e) { do {
            var n;
            if ((n = 13 === e.tag) && (n = null === (n = e.memoizedState) || null !== n.dehydrated), n)
                return e;
            e = e.return;
        } while (null !== e); return null; }
        function yl(e, n, t, r, a) { return 0 === (1 & e.mode) ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, 1 === t.tag && (null === t.alternate ? t.tag = 17 : ((n = Di(-1, 1)).tag = 2, ji(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e); }
        var bl = w.ReactCurrentOwner, wl = !1;
        function xl(e, n, t, r) { n.child = null === e ? Xi(n, null, t, r) : Qi(n, e.child, t, r); }
        function Sl(e, n, t, r, a) { t = t.render; var i = n.ref; return Ei(n, a), r = Eo(e, n, t, r, i, a), t = Co(), null === e || wl ? (ai && t && ei(n), n.flags |= 1, xl(e, n, r, a), n.child) : (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Wl(e, n, a)); }
        function kl(e, n, t, r, a) { if (null === e) {
            var i = t.type;
            return "function" !== typeof i || Iu(i) || void 0 !== i.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = ju(t.type, null, r, n, n.mode, a)).ref = n.ref, e.return = n, n.child = e) : (n.tag = 15, n.type = i, El(e, n, i, r, a));
        } if (i = e.child, 0 === (e.lanes & a)) {
            var o = i.memoizedProps;
            if ((t = null !== (t = t.compare) ? t : sr)(o, r) && e.ref === n.ref)
                return Wl(e, n, a);
        } return n.flags |= 1, (e = Du(i, r)).ref = n.ref, e.return = n, n.child = e; }
        function El(e, n, t, r, a) { if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === n.ref) {
                if (wl = !1, n.pendingProps = r = i, 0 === (e.lanes & a))
                    return n.lanes = e.lanes, Wl(e, n, a);
                0 !== (131072 & e.flags) && (wl = !0);
            }
        } return _l(e, n, t, r, a); }
        function Cl(e, n, t) { var r = n.pendingProps, a = r.children, i = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (0 === (1 & n.mode))
                n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ta(Ds, Is), Is |= t;
            else {
                if (0 === (1073741824 & t))
                    return e = null !== i ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Ta(Ds, Is), Is |= e, null;
                n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== i ? i.baseLanes : t, Ta(Ds, Is), Is |= r;
            }
        else
            null !== i ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, Ta(Ds, Is), Is |= r; return xl(e, n, a, t), n.child; }
        function Tl(e, n) { var t = n.ref; (null === e && null !== t || null !== e && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152); }
        function _l(e, n, t, r, a) { var i = Ia(t) ? Pa : Aa.current; return i = La(n, i), Ei(n, a), t = Eo(e, n, t, r, i, a), r = Co(), null === e || wl ? (ai && r && ei(n), n.flags |= 1, xl(e, n, t, a), n.child) : (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Wl(e, n, a)); }
        function Al(e, n, t, r, a) { if (Ia(t)) {
            var i = !0;
            za(n);
        }
        else
            i = !1; if (Ei(n, a), null === n.stateNode)
            Hl(e, n), Hi(n, t, r), Vi(n, t, r, a), r = !0;
        else if (null === e) {
            var o = n.stateNode, l = n.memoizedProps;
            o.props = l;
            var s = o.context, u = t.contextType;
            "object" === typeof u && null !== u ? u = Ci(u) : u = La(n, u = Ia(t) ? Pa : Aa.current);
            var c = t.getDerivedStateFromProps, d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
            d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== r || s !== u) && Wi(n, o, r, u), Pi = !1;
            var f = n.memoizedState;
            o.state = f, Mi(n, r, o, a), s = n.memoizedState, l !== r || f !== s || Oa.current || Pi ? ("function" === typeof c && (Bi(n, t, c, r), s = n.memoizedState), (l = Pi || Ui(n, t, l, r, f, s, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (n.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = u, r = l) : ("function" === typeof o.componentDidMount && (n.flags |= 4194308), r = !1);
        }
        else {
            o = n.stateNode, Ii(e, n), l = n.memoizedProps, u = n.type === n.elementType ? l : vi(n.type, l), o.props = u, d = n.pendingProps, f = o.context, "object" === typeof (s = t.contextType) && null !== s ? s = Ci(s) : s = La(n, s = Ia(t) ? Pa : Aa.current);
            var p = t.getDerivedStateFromProps;
            (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== d || f !== s) && Wi(n, o, r, s), Pi = !1, f = n.memoizedState, o.state = f, Mi(n, r, o, a);
            var h = n.memoizedState;
            l !== d || f !== h || Oa.current || Pi ? ("function" === typeof p && (Bi(n, t, p, r), h = n.memoizedState), (u = Pi || Ui(n, t, u, r, f, h, s) || !1) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, h, s), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, s)), "function" === typeof o.componentDidUpdate && (n.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (n.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = h), o.props = r, o.state = h, o.context = s, r = u) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 1024), r = !1);
        } return Ol(e, n, t, r, i, a); }
        function Ol(e, n, t, r, a, i) { Tl(e, n); var o = 0 !== (128 & n.flags); if (!r && !o)
            return a && Ma(n, t, !1), Wl(e, n, i); r = n.stateNode, bl.current = n; var l = o && "function" !== typeof t.getDerivedStateFromError ? null : r.render(); return n.flags |= 1, null !== e && o ? (n.child = Qi(n, e.child, null, i), n.child = Qi(n, null, l, i)) : xl(e, n, l, i), n.memoizedState = r.state, a && Ma(n, t, !0), n.child; }
        function Pl(e) { var n = e.stateNode; n.pendingContext ? ja(0, n.pendingContext, n.pendingContext !== n.context) : n.context && ja(0, n.context, !1), ro(e, n.containerInfo); }
        function Ll(e, n, t, r, a) { return pi(), hi(a), n.flags |= 256, xl(e, n, t, r), n.child; }
        var Il, Dl, jl, Nl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zl(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
        function Ml(e, n, t) { var r, a = n.pendingProps, o = lo.current, l = !1, s = 0 !== (128 & n.flags); if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (l = !0, n.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Ta(lo, 1 & o), null === e)
            return ui(n), null !== (e = n.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & n.mode) ? n.lanes = 1 : "$!" === e.data ? n.lanes = 8 : n.lanes = 1073741824, null) : (s = a.children, e = a.fallback, l ? (a = n.mode, l = n.child, s = { mode: "hidden", children: s }, 0 === (1 & a) && null !== l ? (l.childLanes = 0, l.pendingProps = s) : l = zu(s, a, 0, null), e = Nu(e, a, t, null), l.return = n, e.return = n, l.sibling = e, n.child = l, n.child.memoizedState = zl(t), n.memoizedState = Nl, e) : Rl(n, s)); if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return function (e, n, t, r, a, o, l) { if (t)
                return 256 & n.flags ? (n.flags &= -257, Fl(e, n, l, r = dl(Error(i(422))))) : null !== n.memoizedState ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, a = n.mode, r = zu({ mode: "visible", children: r.children }, a, 0, null), (o = Nu(o, a, l, null)).flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, 0 !== (1 & n.mode) && Qi(n, e.child, null, l), n.child.memoizedState = zl(l), n.memoizedState = Nl, o); if (0 === (1 & n.mode))
                return Fl(e, n, l, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var s = r.dgst;
                return r = s, Fl(e, n, l, r = dl(o = Error(i(419)), r, void 0));
            } if (s = 0 !== (l & e.childLanes), wl || s) {
                if (null !== (r = Os)) {
                    switch (l & -l) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
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
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default: a = 0;
                    }
                    0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Oi(e, a), tu(r, e, a, -1));
                }
                return mu(), Fl(e, n, l, r = dl(Error(i(421))));
            } return "$?" === a.data ? (n.flags |= 128, n.child = e.child, n = _u.bind(null, e), a._reactRetry = n, null) : (e = o.treeContext, ri = ua(a.nextSibling), ti = n, ai = !0, ii = null, null !== e && (qa[Ya++] = Qa, qa[Ya++] = Xa, qa[Ya++] = Ka, Qa = e.id, Xa = e.overflow, Ka = n), (n = Rl(n, r.children)).flags |= 4096, n); }(e, n, s, a, r, o, t); if (l) {
            l = a.fallback, s = n.mode, r = (o = e.child).sibling;
            var u = { mode: "hidden", children: a.children };
            return 0 === (1 & s) && n.child !== o ? ((a = n.child).childLanes = 0, a.pendingProps = u, n.deletions = null) : (a = Du(o, u)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? l = Du(r, l) : (l = Nu(l, s, t, null)).flags |= 2, l.return = n, a.return = n, a.sibling = l, n.child = a, a = l, l = n.child, s = null === (s = e.child.memoizedState) ? zl(t) : { baseLanes: s.baseLanes | t, cachePool: null, transitions: s.transitions }, l.memoizedState = s, l.childLanes = e.childLanes & ~t, n.memoizedState = Nl, a;
        } return e = (l = e.child).sibling, a = Du(l, { mode: "visible", children: a.children }), 0 === (1 & n.mode) && (a.lanes = t), a.return = n, a.sibling = null, null !== e && (null === (t = n.deletions) ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = a, n.memoizedState = null, a; }
        function Rl(e, n) { return (n = zu({ mode: "visible", children: n }, e.mode, 0, null)).return = e, e.child = n; }
        function Fl(e, n, t, r) { return null !== r && hi(r), Qi(n, e.child, null, t), (e = Rl(n, n.pendingProps.children)).flags |= 2, n.memoizedState = null, e; }
        function Bl(e, n, t) { e.lanes |= n; var r = e.alternate; null !== r && (r.lanes |= n), ki(e.return, n, t); }
        function $l(e, n, t, r, a) { var i = e.memoizedState; null === i ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: a } : (i.isBackwards = n, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = a); }
        function Ul(e, n, t) { var r = n.pendingProps, a = r.revealOrder, i = r.tail; if (xl(e, n, r.children, t), 0 !== (2 & (r = lo.current)))
            r = 1 & r | 2, n.flags |= 128;
        else {
            if (null !== e && 0 !== (128 & e.flags))
                e: for (e = n.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Bl(e, t, n);
                    else if (19 === e.tag)
                        Bl(e, t, n);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === n)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === n)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (Ta(lo, r), 0 === (1 & n.mode))
            n.memoizedState = null;
        else
            switch (a) {
                case "forwards":
                    for (t = n.child, a = null; null !== t;)
                        null !== (e = t.alternate) && null === so(e) && (a = t), t = t.sibling;
                    null === (t = a) ? (a = n.child, n.child = null) : (a = t.sibling, t.sibling = null), $l(n, !1, a, t, i);
                    break;
                case "backwards":
                    for (t = null, a = n.child, n.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === so(e)) {
                            n.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = t, t = a, a = e;
                    }
                    $l(n, !0, t, null, i);
                    break;
                case "together":
                    $l(n, !1, null, null, void 0);
                    break;
                default: n.memoizedState = null;
            } return n.child; }
        function Hl(e, n) { 0 === (1 & n.mode) && null !== e && (e.alternate = null, n.alternate = null, n.flags |= 2); }
        function Wl(e, n, t) { if (null !== e && (n.dependencies = e.dependencies), zs |= n.lanes, 0 === (t & n.childLanes))
            return null; if (null !== e && n.child !== e.child)
            throw Error(i(153)); if (null !== n.child) {
            for (t = Du(e = n.child, e.pendingProps), n.child = t, t.return = n; null !== e.sibling;)
                e = e.sibling, (t = t.sibling = Du(e, e.pendingProps)).return = n;
            t.sibling = null;
        } return n.child; }
        function Vl(e, n) { if (!ai)
            switch (e.tailMode) {
                case "hidden":
                    n = e.tail;
                    for (var t = null; null !== n;)
                        null !== n.alternate && (t = n), n = n.sibling;
                    null === t ? e.tail = null : t.sibling = null;
                    break;
                case "collapsed":
                    t = e.tail;
                    for (var r = null; null !== t;)
                        null !== t.alternate && (r = t), t = t.sibling;
                    null === r ? n || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } }
        function Gl(e) { var n = null !== e.alternate && e.alternate.child === e.child, t = 0, r = 0; if (n)
            for (var a = e.child; null !== a;)
                t |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                t |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = t, n; }
        function ql(e, n, t) { var r = n.pendingProps; switch (ni(n), n.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return Gl(n), null;
            case 1:
            case 17: return Ia(n.type) && Da(), Gl(n), null;
            case 3: return r = n.stateNode, ao(), Ca(Oa), Ca(Aa), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (di(n) ? n.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & n.flags) || (n.flags |= 1024, null !== ii && (ou(ii), ii = null))), Gl(n), null;
            case 5:
                oo(n);
                var a = to(no.current);
                if (t = n.type, null !== e && null != n.stateNode)
                    Dl(e, n, t, r), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === n.stateNode)
                            throw Error(i(166));
                        return Gl(n), null;
                    }
                    if (e = to(Zi.current), di(n)) {
                        r = n.stateNode, t = n.type;
                        var o = n.memoizedProps;
                        switch (r[fa] = n, r[pa] = o, e = 0 !== (1 & n.mode), t) {
                            case "dialog":
                                Fr("cancel", r), Fr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Fr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Nr.length; a++)
                                    Fr(Nr[a], r);
                                break;
                            case "source":
                                Fr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Fr("error", r), Fr("load", r);
                                break;
                            case "details":
                                Fr("toggle", r);
                                break;
                            case "input":
                                Q(r, o), Fr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!o.multiple }, Fr("invalid", r);
                                break;
                            case "textarea": ae(r, o), Fr("invalid", r);
                        }
                        for (var s in ye(t, o), a = null, o)
                            if (o.hasOwnProperty(s)) {
                                var u = o[s];
                                "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, u, e), a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, u, e), a = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && Fr("scroll", r);
                            }
                        switch (t) {
                            case "input":
                                G(r), Z(r, o, !0);
                                break;
                            case "textarea":
                                G(r), oe(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" === typeof o.onClick && (r.onclick = Zr);
                        }
                        r = a, n.updateQueue = r, null !== r && (n.flags |= 4);
                    }
                    else {
                        s = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(t)), "http://www.w3.org/1999/xhtml" === e ? "script" === t ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(t, { is: r.is }) : (e = s.createElement(t), "select" === t && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, t), e[fa] = n, e[pa] = r, Il(e, n), n.stateNode = e;
                        e: {
                            switch (s = be(t, r), t) {
                                case "dialog":
                                    Fr("cancel", e), Fr("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Fr("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Nr.length; a++)
                                        Fr(Nr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Fr("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Fr("error", e), Fr("load", e), a = r;
                                    break;
                                case "details":
                                    Fr("toggle", e), a = r;
                                    break;
                                case "input":
                                    Q(e, r), a = K(e, r), Fr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = M({}, r, { value: void 0 }), Fr("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), Fr("invalid", e);
                            }
                            for (o in ye(t, a), u = a)
                                if (u.hasOwnProperty(o)) {
                                    var c = u[o];
                                    "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" === typeof c ? ("textarea" !== t || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (l.hasOwnProperty(o) ? null != c && "onScroll" === o && Fr("scroll", e) : null != c && b(e, o, c, s));
                                }
                            switch (t) {
                                case "input":
                                    G(e), Z(e, r, !1);
                                    break;
                                case "textarea":
                                    G(e), oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + W(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (o = r.value) ? te(e, !!r.multiple, o, !1) : null != r.defaultValue && te(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" === typeof a.onClick && (e.onclick = Zr);
                            }
                            switch (t) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (n.flags |= 4);
                    }
                    null !== n.ref && (n.flags |= 512, n.flags |= 2097152);
                }
                return Gl(n), null;
            case 6:
                if (e && null != n.stateNode)
                    jl(0, n, e.memoizedProps, r);
                else {
                    if ("string" !== typeof r && null === n.stateNode)
                        throw Error(i(166));
                    if (t = to(no.current), to(Zi.current), di(n)) {
                        if (r = n.stateNode, t = n.memoizedProps, r[fa] = n, (o = r.nodeValue !== t) && null !== (e = ti))
                            switch (e.tag) {
                                case 3:
                                    Jr(r.nodeValue, t, 0 !== (1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, t, 0 !== (1 & e.mode));
                            }
                        o && (n.flags |= 4);
                    }
                    else
                        (r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[fa] = n, n.stateNode = r;
                }
                return Gl(n), null;
            case 13:
                if (Ca(lo), r = n.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (ai && null !== ri && 0 !== (1 & n.mode) && 0 === (128 & n.flags))
                        fi(), pi(), n.flags |= 98560, o = !1;
                    else if (o = di(n), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!o)
                                throw Error(i(318));
                            if (!(o = null !== (o = n.memoizedState) ? o.dehydrated : null))
                                throw Error(i(317));
                            o[fa] = n;
                        }
                        else
                            pi(), 0 === (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
                        Gl(n), o = !1;
                    }
                    else
                        null !== ii && (ou(ii), ii = null), o = !0;
                    if (!o)
                        return 65536 & n.flags ? n : null;
                }
                return 0 !== (128 & n.flags) ? (n.lanes = t, n) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (n.child.flags |= 8192, 0 !== (1 & n.mode) && (null === e || 0 !== (1 & lo.current) ? 0 === js && (js = 3) : mu())), null !== n.updateQueue && (n.flags |= 4), Gl(n), null);
            case 4: return ao(), null === e && Ur(n.stateNode.containerInfo), Gl(n), null;
            case 10: return Si(n.type._context), Gl(n), null;
            case 19:
                if (Ca(lo), null === (o = n.memoizedState))
                    return Gl(n), null;
                if (r = 0 !== (128 & n.flags), null === (s = o.rendering))
                    if (r)
                        Vl(o, !1);
                    else {
                        if (0 !== js || null !== e && 0 !== (128 & e.flags))
                            for (e = n.child; null !== e;) {
                                if (null !== (s = so(e))) {
                                    for (n.flags |= 128, Vl(o, !1), null !== (r = s.updateQueue) && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; null !== t;)
                                        e = r, (o = t).flags &= 14680066, null === (s = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                                    return Ta(lo, 1 & lo.current | 2), n.child;
                                }
                                e = e.sibling;
                            }
                        null !== o.tail && Xe() > Us && (n.flags |= 128, r = !0, Vl(o, !1), n.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = so(s))) {
                            if (n.flags |= 128, r = !0, null !== (t = e.updateQueue) && (n.updateQueue = t, n.flags |= 4), Vl(o, !0), null === o.tail && "hidden" === o.tailMode && !s.alternate && !ai)
                                return Gl(n), null;
                        }
                        else
                            2 * Xe() - o.renderingStartTime > Us && 1073741824 !== t && (n.flags |= 128, r = !0, Vl(o, !1), n.lanes = 4194304);
                    o.isBackwards ? (s.sibling = n.child, n.child = s) : (null !== (t = o.last) ? t.sibling = s : n.child = s, o.last = s);
                }
                return null !== o.tail ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Xe(), n.sibling = null, t = lo.current, Ta(lo, r ? 1 & t | 2 : 1 & t), n) : (Gl(n), null);
            case 22:
            case 23: return du(), r = null !== n.memoizedState, null !== e && null !== e.memoizedState !== r && (n.flags |= 8192), r && 0 !== (1 & n.mode) ? 0 !== (1073741824 & Is) && (Gl(n), 6 & n.subtreeFlags && (n.flags |= 8192)) : Gl(n), null;
            case 24:
            case 25: return null;
        } throw Error(i(156, n.tag)); }
        function Yl(e, n) { switch (ni(n), n.tag) {
            case 1: return Ia(n.type) && Da(), 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
            case 3: return ao(), Ca(Oa), Ca(Aa), co(), 0 !== (65536 & (e = n.flags)) && 0 === (128 & e) ? (n.flags = -65537 & e | 128, n) : null;
            case 5: return oo(n), null;
            case 13:
                if (Ca(lo), null !== (e = n.memoizedState) && null !== e.dehydrated) {
                    if (null === n.alternate)
                        throw Error(i(340));
                    pi();
                }
                return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
            case 19: return Ca(lo), null;
            case 4: return ao(), null;
            case 10: return Si(n.type._context), null;
            case 22:
            case 23: return du(), null;
            default: return null;
        } }
        Il = function (e, n) { for (var t = n.child; null !== t;) {
            if (5 === t.tag || 6 === t.tag)
                e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === n)
                    return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } }, Dl = function (e, n, t, r) { var a = e.memoizedProps; if (a !== r) {
            e = n.stateNode, to(Zi.current);
            var i, o = null;
            switch (t) {
                case "input":
                    a = K(e, a), r = K(e, r), o = [];
                    break;
                case "select":
                    a = M({}, a, { value: void 0 }), r = M({}, r, { value: void 0 }), o = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), o = [];
                    break;
                default: "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Zr);
            }
            for (c in ye(t, r), t = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var s = a[c];
                        for (i in s)
                            s.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
            for (c in r) {
                var u = r[c];
                if (s = null != a ? a[c] : void 0, r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                    if ("style" === c)
                        if (s) {
                            for (i in s)
                                !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
                            for (i in u)
                                u.hasOwnProperty(i) && s[i] !== u[i] && (t || (t = {}), t[i] = u[i]);
                        }
                        else
                            t || (o || (o = []), o.push(c, t)), t = u;
                    else
                        "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (o = o || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (o = o || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && Fr("scroll", e), o || s === u || (o = [])) : (o = o || []).push(c, u));
            }
            t && (o = o || []).push("style", t);
            var c = o;
            (n.updateQueue = c) && (n.flags |= 4);
        } }, jl = function (e, n, t, r) { t !== r && (n.flags |= 4); };
        var Kl = !1, Ql = !1, Xl = "function" === typeof WeakSet ? WeakSet : Set, Jl = null;
        function Zl(e, n) { var t = e.ref; if (null !== t)
            if ("function" === typeof t)
                try {
                    t(null);
                }
                catch (r) {
                    Eu(e, n, r);
                }
            else
                t.current = null; }
        function es(e, n, t) { try {
            t();
        }
        catch (r) {
            Eu(e, n, r);
        } }
        var ns = !1;
        function ts(e, n, t) { var r = n.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var i = a.destroy;
                    a.destroy = void 0, void 0 !== i && es(n, t, i);
                }
                a = a.next;
            } while (a !== r);
        } }
        function rs(e, n) { if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var t = n = n.next;
            do {
                if ((t.tag & e) === e) {
                    var r = t.create;
                    t.destroy = r();
                }
                t = t.next;
            } while (t !== n);
        } }
        function as(e) { var n = e.ref; if (null !== n) {
            var t = e.stateNode;
            e.tag, e = t, "function" === typeof n ? n(e) : n.current = e;
        } }
        function is(e) { var n = e.alternate; null !== n && (e.alternate = null, is(n)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (n = e.stateNode) && (delete n[fa], delete n[pa], delete n[ma], delete n[va], delete n[ga])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
        function os(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; }
        function ls(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || os(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } }
        function ss(e, n, t) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, n ? 8 === t.nodeType ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e), null !== (t = t._reactRootContainer) && void 0 !== t || null !== n.onclick || (n.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (ss(e, n, t), e = e.sibling; null !== e;)
                ss(e, n, t), e = e.sibling; }
        function us(e, n, t) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (us(e, n, t), e = e.sibling; null !== e;)
                us(e, n, t), e = e.sibling; }
        var cs = null, ds = !1;
        function fs(e, n, t) { for (t = t.child; null !== t;)
            ps(e, n, t), t = t.sibling; }
        function ps(e, n, t) { if (on && "function" === typeof on.onCommitFiberUnmount)
            try {
                on.onCommitFiberUnmount(an, t);
            }
            catch (l) { } switch (t.tag) {
            case 5: Ql || Zl(t, n);
            case 6:
                var r = cs, a = ds;
                cs = null, fs(e, n, t), ds = a, null !== (cs = r) && (ds ? (e = cs, t = t.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t)) : cs.removeChild(t.stateNode));
                break;
            case 18:
                null !== cs && (ds ? (e = cs, t = t.stateNode, 8 === e.nodeType ? sa(e.parentNode, t) : 1 === e.nodeType && sa(e, t), Hn(e)) : sa(cs, t.stateNode));
                break;
            case 4:
                r = cs, a = ds, cs = t.stateNode.containerInfo, ds = !0, fs(e, n, t), cs = r, ds = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ql && (null !== (r = t.updateQueue) && null !== (r = r.lastEffect))) {
                    a = r = r.next;
                    do {
                        var i = a, o = i.destroy;
                        i = i.tag, void 0 !== o && (0 !== (2 & i) || 0 !== (4 & i)) && es(t, n, o), a = a.next;
                    } while (a !== r);
                }
                fs(e, n, t);
                break;
            case 1:
                if (!Ql && (Zl(t, n), "function" === typeof (r = t.stateNode).componentWillUnmount))
                    try {
                        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
                    }
                    catch (l) {
                        Eu(t, n, l);
                    }
                fs(e, n, t);
                break;
            case 21:
                fs(e, n, t);
                break;
            case 22:
                1 & t.mode ? (Ql = (r = Ql) || null !== t.memoizedState, fs(e, n, t), Ql = r) : fs(e, n, t);
                break;
            default: fs(e, n, t);
        } }
        function hs(e) { var n = e.updateQueue; if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new Xl), n.forEach((function (n) { var r = Au.bind(null, e, n); t.has(n) || (t.add(n), n.then(r, r)); }));
        } }
        function ms(e, n) { var t = n.deletions; if (null !== t)
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                try {
                    var o = e, l = n, s = l;
                    e: for (; null !== s;) {
                        switch (s.tag) {
                            case 5:
                                cs = s.stateNode, ds = !1;
                                break e;
                            case 3:
                            case 4:
                                cs = s.stateNode.containerInfo, ds = !0;
                                break e;
                        }
                        s = s.return;
                    }
                    if (null === cs)
                        throw Error(i(160));
                    ps(o, l, a), cs = null, ds = !1;
                    var u = a.alternate;
                    null !== u && (u.return = null), a.return = null;
                }
                catch (c) {
                    Eu(a, n, c);
                }
            } if (12854 & n.subtreeFlags)
            for (n = n.child; null !== n;)
                vs(n, e), n = n.sibling; }
        function vs(e, n) { var t = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (ms(n, e), gs(e), 4 & r) {
                    try {
                        ts(3, e, e.return), rs(3, e);
                    }
                    catch (v) {
                        Eu(e, e.return, v);
                    }
                    try {
                        ts(5, e, e.return);
                    }
                    catch (v) {
                        Eu(e, e.return, v);
                    }
                }
                break;
            case 1:
                ms(n, e), gs(e), 512 & r && null !== t && Zl(t, t.return);
                break;
            case 5:
                if (ms(n, e), gs(e), 512 & r && null !== t && Zl(t, t.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        fe(a, "");
                    }
                    catch (v) {
                        Eu(e, e.return, v);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var o = e.memoizedProps, l = null !== t ? t.memoizedProps : o, s = e.type, u = e.updateQueue;
                    if (e.updateQueue = null, null !== u)
                        try {
                            "input" === s && "radio" === o.type && null != o.name && X(a, o), be(s, l);
                            var c = be(s, o);
                            for (l = 0; l < u.length; l += 2) {
                                var d = u[l], f = u[l + 1];
                                "style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c);
                            }
                            switch (s) {
                                case "input":
                                    J(a, o);
                                    break;
                                case "textarea":
                                    ie(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var h = o.value;
                                    null != h ? te(a, !!o.multiple, h, !1) : p !== !!o.multiple && (null != o.defaultValue ? te(a, !!o.multiple, o.defaultValue, !0) : te(a, !!o.multiple, o.multiple ? [] : "", !1));
                            }
                            a[pa] = o;
                        }
                        catch (v) {
                            Eu(e, e.return, v);
                        }
                }
                break;
            case 6:
                if (ms(n, e), gs(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(i(162));
                    a = e.stateNode, o = e.memoizedProps;
                    try {
                        a.nodeValue = o;
                    }
                    catch (v) {
                        Eu(e, e.return, v);
                    }
                }
                break;
            case 3:
                if (ms(n, e), gs(e), 4 & r && null !== t && t.memoizedState.isDehydrated)
                    try {
                        Hn(n.containerInfo);
                    }
                    catch (v) {
                        Eu(e, e.return, v);
                    }
                break;
            case 4:
            default:
                ms(n, e), gs(e);
                break;
            case 13:
                ms(n, e), gs(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || ($s = Xe())), 4 & r && hs(e);
                break;
            case 22:
                if (d = null !== t && null !== t.memoizedState, 1 & e.mode ? (Ql = (c = Ql) || d, ms(n, e), Ql = c) : ms(n, e), gs(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                        for (Jl = e, d = e.child; null !== d;) {
                            for (f = Jl = d; null !== Jl;) {
                                switch (h = (p = Jl).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ts(4, p, p.return);
                                        break;
                                    case 1:
                                        Zl(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" === typeof m.componentWillUnmount) {
                                            r = p, t = p.return;
                                            try {
                                                n = r, m.props = n.memoizedProps, m.state = n.memoizedState, m.componentWillUnmount();
                                            }
                                            catch (v) {
                                                Eu(r, t, v);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Zl(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        xs(f);
                                        continue;
                                    }
                                }
                                null !== h ? (h.return = p, Jl = h) : xs(f);
                            }
                            d = d.sibling;
                        }
                    e: for (d = null, f = e;;) {
                        if (5 === f.tag) {
                            if (null === d) {
                                d = f;
                                try {
                                    a = f.stateNode, c ? "function" === typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (s = f.stateNode, l = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, s.style.display = me("display", l));
                                }
                                catch (v) {
                                    Eu(e, e.return, v);
                                }
                            }
                        }
                        else if (6 === f.tag) {
                            if (null === d)
                                try {
                                    f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                                }
                                catch (v) {
                                    Eu(e, e.return, v);
                                }
                        }
                        else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === e)
                            break e;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === e)
                                break e;
                            d === f && (d = null), f = f.return;
                        }
                        d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
                    }
                }
                break;
            case 19: ms(n, e), gs(e), 4 & r && hs(e);
            case 21:
        } }
        function gs(e) { var n = e.flags; if (2 & n) {
            try {
                e: {
                    for (var t = e.return; null !== t;) {
                        if (os(t)) {
                            var r = t;
                            break e;
                        }
                        t = t.return;
                    }
                    throw Error(i(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (fe(a, ""), r.flags &= -33), us(e, ls(e), a);
                        break;
                    case 3:
                    case 4:
                        var o = r.stateNode.containerInfo;
                        ss(e, ls(e), o);
                        break;
                    default: throw Error(i(161));
                }
            }
            catch (l) {
                Eu(e, e.return, l);
            }
            e.flags &= -3;
        } 4096 & n && (e.flags &= -4097); }
        function ys(e, n, t) { Jl = e, bs(e, n, t); }
        function bs(e, n, t) { for (var r = 0 !== (1 & e.mode); null !== Jl;) {
            var a = Jl, i = a.child;
            if (22 === a.tag && r) {
                var o = null !== a.memoizedState || Kl;
                if (!o) {
                    var l = a.alternate, s = null !== l && null !== l.memoizedState || Ql;
                    l = Kl;
                    var u = Ql;
                    if (Kl = o, (Ql = s) && !u)
                        for (Jl = a; null !== Jl;)
                            s = (o = Jl).child, 22 === o.tag && null !== o.memoizedState ? Ss(a) : null !== s ? (s.return = o, Jl = s) : Ss(a);
                    for (; null !== i;)
                        Jl = i, bs(i, n, t), i = i.sibling;
                    Jl = a, Kl = l, Ql = u;
                }
                ws(e);
            }
            else
                0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a, Jl = i) : ws(e);
        } }
        function ws(e) { for (; null !== Jl;) {
            var n = Jl;
            if (0 !== (8772 & n.flags)) {
                var t = n.alternate;
                try {
                    if (0 !== (8772 & n.flags))
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ql || rs(5, n);
                                break;
                            case 1:
                                var r = n.stateNode;
                                if (4 & n.flags && !Ql)
                                    if (null === t)
                                        r.componentDidMount();
                                    else {
                                        var a = n.elementType === n.type ? t.memoizedProps : vi(n.type, t.memoizedProps);
                                        r.componentDidUpdate(a, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var o = n.updateQueue;
                                null !== o && Ri(n, o, r);
                                break;
                            case 3:
                                var l = n.updateQueue;
                                if (null !== l) {
                                    if (t = null, null !== n.child)
                                        switch (n.child.tag) {
                                            case 5:
                                            case 1: t = n.child.stateNode;
                                        }
                                    Ri(n, l, t);
                                }
                                break;
                            case 5:
                                var s = n.stateNode;
                                if (null === t && 4 & n.flags) {
                                    t = s;
                                    var u = n.memoizedProps;
                                    switch (n.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && t.focus();
                                            break;
                                        case "img": u.src && (t.src = u.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === n.memoizedState) {
                                    var c = n.alternate;
                                    if (null !== c) {
                                        var d = c.memoizedState;
                                        if (null !== d) {
                                            var f = d.dehydrated;
                                            null !== f && Hn(f);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(i(163));
                        }
                    Ql || 512 & n.flags && as(n);
                }
                catch (p) {
                    Eu(n, n.return, p);
                }
            }
            if (n === e) {
                Jl = null;
                break;
            }
            if (null !== (t = n.sibling)) {
                t.return = n.return, Jl = t;
                break;
            }
            Jl = n.return;
        } }
        function xs(e) { for (; null !== Jl;) {
            var n = Jl;
            if (n === e) {
                Jl = null;
                break;
            }
            var t = n.sibling;
            if (null !== t) {
                t.return = n.return, Jl = t;
                break;
            }
            Jl = n.return;
        } }
        function Ss(e) { for (; null !== Jl;) {
            var n = Jl;
            try {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var t = n.return;
                        try {
                            rs(4, n);
                        }
                        catch (s) {
                            Eu(n, t, s);
                        }
                        break;
                    case 1:
                        var r = n.stateNode;
                        if ("function" === typeof r.componentDidMount) {
                            var a = n.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (s) {
                                Eu(n, a, s);
                            }
                        }
                        var i = n.return;
                        try {
                            as(n);
                        }
                        catch (s) {
                            Eu(n, i, s);
                        }
                        break;
                    case 5:
                        var o = n.return;
                        try {
                            as(n);
                        }
                        catch (s) {
                            Eu(n, o, s);
                        }
                }
            }
            catch (s) {
                Eu(n, n.return, s);
            }
            if (n === e) {
                Jl = null;
                break;
            }
            var l = n.sibling;
            if (null !== l) {
                l.return = n.return, Jl = l;
                break;
            }
            Jl = n.return;
        } }
        var ks, Es = Math.ceil, Cs = w.ReactCurrentDispatcher, Ts = w.ReactCurrentOwner, _s = w.ReactCurrentBatchConfig, As = 0, Os = null, Ps = null, Ls = 0, Is = 0, Ds = Ea(0), js = 0, Ns = null, zs = 0, Ms = 0, Rs = 0, Fs = null, Bs = null, $s = 0, Us = 1 / 0, Hs = null, Ws = !1, Vs = null, Gs = null, qs = !1, Ys = null, Ks = 0, Qs = 0, Xs = null, Js = -1, Zs = 0;
        function eu() { return 0 !== (6 & As) ? Xe() : -1 !== Js ? Js : Js = Xe(); }
        function nu(e) { return 0 === (1 & e.mode) ? 1 : 0 !== (2 & As) && 0 !== Ls ? Ls & -Ls : null !== mi.transition ? (0 === Zs && (Zs = vn()), Zs) : 0 !== (e = wn) ? e : e = void 0 === (e = window.event) ? 16 : Xn(e.type); }
        function tu(e, n, t, r) { if (50 < Qs)
            throw Qs = 0, Xs = null, Error(i(185)); yn(e, t, r), 0 !== (2 & As) && e === Os || (e === Os && (0 === (2 & As) && (Ms |= t), 4 === js && lu(e, Ls)), ru(e, r), 1 === t && 0 === As && 0 === (1 & n.mode) && (Us = Xe() + 500, Fa && Ua())); }
        function ru(e, n) { var t = e.callbackNode; !function (e, n) { for (var t = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
            var o = 31 - ln(i), l = 1 << o, s = a[o];
            -1 === s ? 0 !== (l & t) && 0 === (l & r) || (a[o] = hn(l, n)) : s <= n && (e.expiredLanes |= l), i &= ~l;
        } }(e, n); var r = pn(e, e === Os ? Ls : 0); if (0 === r)
            null !== t && Ye(t), e.callbackNode = null, e.callbackPriority = 0;
        else if (n = r & -r, e.callbackPriority !== n) {
            if (null != t && Ye(t), 1 === n)
                0 === e.tag ? function (e) { Fa = !0, $a(e); }(su.bind(null, e)) : $a(su.bind(null, e)), oa((function () { 0 === (6 & As) && Ua(); })), t = null;
            else {
                switch (xn(r)) {
                    case 1:
                        t = Ze;
                        break;
                    case 4:
                        t = en;
                        break;
                    case 16:
                    default:
                        t = nn;
                        break;
                    case 536870912: t = rn;
                }
                t = Ou(t, au.bind(null, e));
            }
            e.callbackPriority = n, e.callbackNode = t;
        } }
        function au(e, n) { if (Js = -1, Zs = 0, 0 !== (6 & As))
            throw Error(i(327)); var t = e.callbackNode; if (Su() && e.callbackNode !== t)
            return null; var r = pn(e, e === Os ? Ls : 0); if (0 === r)
            return null; if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n)
            n = vu(e, r);
        else {
            n = r;
            var a = As;
            As |= 2;
            var o = hu();
            for (Os === e && Ls === n || (Hs = null, Us = Xe() + 500, fu(e, n));;)
                try {
                    yu();
                    break;
                }
                catch (s) {
                    pu(e, s);
                }
            xi(), Cs.current = o, As = a, null !== Ps ? n = 0 : (Os = null, Ls = 0, n = js);
        } if (0 !== n) {
            if (2 === n && (0 !== (a = mn(e)) && (r = a, n = iu(e, a))), 1 === n)
                throw t = Ns, fu(e, 0), lu(e, r), ru(e, Xe()), t;
            if (6 === n)
                lu(e, r);
            else {
                if (a = e.current.alternate, 0 === (30 & r) && !function (e) { for (var n = e;;) {
                    if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                            for (var r = 0; r < t.length; r++) {
                                var a = t[r], i = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!lr(i(), a))
                                        return !1;
                                }
                                catch (l) {
                                    return !1;
                                }
                            }
                    }
                    if (t = n.child, 16384 & n.subtreeFlags && null !== t)
                        t.return = n, n = t;
                    else {
                        if (n === e)
                            break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e)
                                return !0;
                            n = n.return;
                        }
                        n.sibling.return = n.return, n = n.sibling;
                    }
                } return !0; }(a) && (2 === (n = vu(e, r)) && (0 !== (o = mn(e)) && (r = o, n = iu(e, o))), 1 === n))
                    throw t = Ns, fu(e, 0), lu(e, r), ru(e, Xe()), t;
                switch (e.finishedWork = a, e.finishedLanes = r, n) {
                    case 0:
                    case 1: throw Error(i(345));
                    case 2:
                    case 5:
                        xu(e, Bs, Hs);
                        break;
                    case 3:
                        if (lu(e, r), (130023424 & r) === r && 10 < (n = $s + 500 - Xe())) {
                            if (0 !== pn(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                eu(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = ra(xu.bind(null, e, Bs, Hs), n);
                            break;
                        }
                        xu(e, Bs, Hs);
                        break;
                    case 4:
                        if (lu(e, r), (4194240 & r) === r)
                            break;
                        for (n = e.eventTimes, a = -1; 0 < r;) {
                            var l = 31 - ln(r);
                            o = 1 << l, (l = n[l]) > a && (a = l), r &= ~o;
                        }
                        if (r = a, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Es(r / 1960)) - r)) {
                            e.timeoutHandle = ra(xu.bind(null, e, Bs, Hs), r);
                            break;
                        }
                        xu(e, Bs, Hs);
                        break;
                    default: throw Error(i(329));
                }
            }
        } return ru(e, Xe()), e.callbackNode === t ? au.bind(null, e) : null; }
        function iu(e, n) { var t = Fs; return e.current.memoizedState.isDehydrated && (fu(e, n).flags |= 256), 2 !== (e = vu(e, n)) && (n = Bs, Bs = t, null !== n && ou(n)), e; }
        function ou(e) { null === Bs ? Bs = e : Bs.push.apply(Bs, e); }
        function lu(e, n) { for (n &= ~Rs, n &= ~Ms, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
            var t = 31 - ln(n), r = 1 << t;
            e[t] = -1, n &= ~r;
        } }
        function su(e) { if (0 !== (6 & As))
            throw Error(i(327)); Su(); var n = pn(e, 0); if (0 === (1 & n))
            return ru(e, Xe()), null; var t = vu(e, n); if (0 !== e.tag && 2 === t) {
            var r = mn(e);
            0 !== r && (n = r, t = iu(e, r));
        } if (1 === t)
            throw t = Ns, fu(e, 0), lu(e, n), ru(e, Xe()), t; if (6 === t)
            throw Error(i(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = n, xu(e, Bs, Hs), ru(e, Xe()), null; }
        function uu(e, n) { var t = As; As |= 1; try {
            return e(n);
        }
        finally {
            0 === (As = t) && (Us = Xe() + 500, Fa && Ua());
        } }
        function cu(e) { null !== Ys && 0 === Ys.tag && 0 === (6 & As) && Su(); var n = As; As |= 1; var t = _s.transition, r = wn; try {
            if (_s.transition = null, wn = 1, e)
                return e();
        }
        finally {
            wn = r, _s.transition = t, 0 === (6 & (As = n)) && Ua();
        } }
        function du() { Is = Ds.current, Ca(Ds); }
        function fu(e, n) { e.finishedWork = null, e.finishedLanes = 0; var t = e.timeoutHandle; if (-1 !== t && (e.timeoutHandle = -1, aa(t)), null !== Ps)
            for (t = Ps.return; null !== t;) {
                var r = t;
                switch (ni(r), r.tag) {
                    case 1:
                        null !== (r = r.type.childContextTypes) && void 0 !== r && Da();
                        break;
                    case 3:
                        ao(), Ca(Oa), Ca(Aa), co();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        ao();
                        break;
                    case 13:
                    case 19:
                        Ca(lo);
                        break;
                    case 10:
                        Si(r.type._context);
                        break;
                    case 22:
                    case 23: du();
                }
                t = t.return;
            } if (Os = e, Ps = e = Du(e.current, null), Ls = Is = n, js = 0, Ns = null, Rs = Ms = zs = 0, Bs = Fs = null, null !== Ti) {
            for (n = 0; n < Ti.length; n++)
                if (null !== (r = (t = Ti[n]).interleaved)) {
                    t.interleaved = null;
                    var a = r.next, i = t.pending;
                    if (null !== i) {
                        var o = i.next;
                        i.next = a, r.next = o;
                    }
                    t.pending = r;
                }
            Ti = null;
        } return e; }
        function pu(e, n) { for (;;) {
            var t = Ps;
            try {
                if (xi(), fo.current = ol, yo) {
                    for (var r = mo.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    yo = !1;
                }
                if (ho = 0, go = vo = mo = null, bo = !1, wo = 0, Ts.current = null, null === t || null === t.return) {
                    js = 1, Ns = n, Ps = null;
                    break;
                }
                e: {
                    var o = e, l = t.return, s = t, u = n;
                    if (n = Ls, s.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                        var c = u, d = s, f = d.tag;
                        if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                            var p = d.alternate;
                            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var h = gl(l);
                        if (null !== h) {
                            h.flags &= -257, yl(h, l, s, 0, n), 1 & h.mode && vl(o, c, n), u = c;
                            var m = (n = h).updateQueue;
                            if (null === m) {
                                var v = new Set;
                                v.add(u), n.updateQueue = v;
                            }
                            else
                                m.add(u);
                            break e;
                        }
                        if (0 === (1 & n)) {
                            vl(o, c, n), mu();
                            break e;
                        }
                        u = Error(i(426));
                    }
                    else if (ai && 1 & s.mode) {
                        var g = gl(l);
                        if (null !== g) {
                            0 === (65536 & g.flags) && (g.flags |= 256), yl(g, l, s, 0, n), hi(cl(u, s));
                            break e;
                        }
                    }
                    o = u = cl(u, s), 4 !== js && (js = 2), null === Fs ? Fs = [o] : Fs.push(o), o = l;
                    do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, n &= -n, o.lanes |= n, zi(o, hl(0, u, n));
                                break e;
                            case 1:
                                s = u;
                                var y = o.type, b = o.stateNode;
                                if (0 === (128 & o.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Gs || !Gs.has(b)))) {
                                    o.flags |= 65536, n &= -n, o.lanes |= n, zi(o, ml(o, s, n));
                                    break e;
                                }
                        }
                        o = o.return;
                    } while (null !== o);
                }
                wu(t);
            }
            catch (w) {
                n = w, Ps === t && null !== t && (Ps = t = t.return);
                continue;
            }
            break;
        } }
        function hu() { var e = Cs.current; return Cs.current = ol, null === e ? ol : e; }
        function mu() { 0 !== js && 3 !== js && 2 !== js || (js = 4), null === Os || 0 === (268435455 & zs) && 0 === (268435455 & Ms) || lu(Os, Ls); }
        function vu(e, n) { var t = As; As |= 2; var r = hu(); for (Os === e && Ls === n || (Hs = null, fu(e, n));;)
            try {
                gu();
                break;
            }
            catch (a) {
                pu(e, a);
            } if (xi(), As = t, Cs.current = r, null !== Ps)
            throw Error(i(261)); return Os = null, Ls = 0, js; }
        function gu() { for (; null !== Ps;)
            bu(Ps); }
        function yu() { for (; null !== Ps && !Ke();)
            bu(Ps); }
        function bu(e) { var n = ks(e.alternate, e, Is); e.memoizedProps = e.pendingProps, null === n ? wu(e) : Ps = n, Ts.current = null; }
        function wu(e) { var n = e; do {
            var t = n.alternate;
            if (e = n.return, 0 === (32768 & n.flags)) {
                if (null !== (t = ql(t, n, Is)))
                    return void (Ps = t);
            }
            else {
                if (null !== (t = Yl(t, n)))
                    return t.flags &= 32767, void (Ps = t);
                if (null === e)
                    return js = 6, void (Ps = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            if (null !== (n = n.sibling))
                return void (Ps = n);
            Ps = n = e;
        } while (null !== n); 0 === js && (js = 5); }
        function xu(e, n, t) { var r = wn, a = _s.transition; try {
            _s.transition = null, wn = 1, function (e, n, t, r) { do {
                Su();
            } while (null !== Ys); if (0 !== (6 & As))
                throw Error(i(327)); t = e.finishedWork; var a = e.finishedLanes; if (null === t)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
                throw Error(i(177)); e.callbackNode = null, e.callbackPriority = 0; var o = t.lanes | t.childLanes; if (function (e, n) { var t = e.pendingLanes & ~n; e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < t;) {
                var a = 31 - ln(t), i = 1 << a;
                n[a] = 0, r[a] = -1, e[a] = -1, t &= ~i;
            } }(e, o), e === Os && (Ps = Os = null, Ls = 0), 0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags) || qs || (qs = !0, Ou(nn, (function () { return Su(), null; }))), o = 0 !== (15990 & t.flags), 0 !== (15990 & t.subtreeFlags) || o) {
                o = _s.transition, _s.transition = null;
                var l = wn;
                wn = 1;
                var s = As;
                As |= 4, Ts.current = null, function (e, n) { if (ea = Vn, pr(e = fr())) {
                    if ("selectionStart" in e)
                        var t = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                t = r.anchorNode;
                                var a = r.anchorOffset, o = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    t.nodeType, o.nodeType;
                                }
                                catch (x) {
                                    t = null;
                                    break e;
                                }
                                var l = 0, s = -1, u = -1, c = 0, d = 0, f = e, p = null;
                                n: for (;;) {
                                    for (var h; f !== t || 0 !== a && 3 !== f.nodeType || (s = l + a), f !== o || 0 !== r && 3 !== f.nodeType || (u = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (h = f.firstChild);)
                                        p = f, f = h;
                                    for (;;) {
                                        if (f === e)
                                            break n;
                                        if (p === t && ++c === a && (s = l), p === o && ++d === r && (u = l), null !== (h = f.nextSibling))
                                            break;
                                        p = (f = p).parentNode;
                                    }
                                    f = h;
                                }
                                t = -1 === s || -1 === u ? null : { start: s, end: u };
                            }
                            else
                                t = null;
                        }
                    t = t || { start: 0, end: 0 };
                }
                else
                    t = null; for (na = { focusedElem: e, selectionRange: t }, Vn = !1, Jl = n; null !== Jl;)
                    if (e = (n = Jl).child, 0 !== (1028 & n.subtreeFlags) && null !== e)
                        e.return = n, Jl = e;
                    else
                        for (; null !== Jl;) {
                            n = Jl;
                            try {
                                var m = n.alternate;
                                if (0 !== (1024 & n.flags))
                                    switch (n.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== m) {
                                                var v = m.memoizedProps, g = m.memoizedState, y = n.stateNode, b = y.getSnapshotBeforeUpdate(n.elementType === n.type ? v : vi(n.type, v), g);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = n.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(i(163));
                                    }
                            }
                            catch (x) {
                                Eu(n, n.return, x);
                            }
                            if (null !== (e = n.sibling)) {
                                e.return = n.return, Jl = e;
                                break;
                            }
                            Jl = n.return;
                        } m = ns, ns = !1; }(e, t), vs(t, e), hr(na), Vn = !!ea, na = ea = null, e.current = t, ys(t, e, a), Qe(), As = s, wn = l, _s.transition = o;
            }
            else
                e.current = t; if (qs && (qs = !1, Ys = e, Ks = a), 0 === (o = e.pendingLanes) && (Gs = null), function (e) { if (on && "function" === typeof on.onCommitFiberRoot)
                try {
                    on.onCommitFiberRoot(an, e, void 0, 128 === (128 & e.current.flags));
                }
                catch (n) { } }(t.stateNode), ru(e, Xe()), null !== n)
                for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                    r((a = n[t]).value, { componentStack: a.stack, digest: a.digest }); if (Ws)
                throw Ws = !1, e = Vs, Vs = null, e; 0 !== (1 & Ks) && 0 !== e.tag && Su(), 0 !== (1 & (o = e.pendingLanes)) ? e === Xs ? Qs++ : (Qs = 0, Xs = e) : Qs = 0, Ua(); }(e, n, t, r);
        }
        finally {
            _s.transition = a, wn = r;
        } return null; }
        function Su() { if (null !== Ys) {
            var e = xn(Ks), n = _s.transition, t = wn;
            try {
                if (_s.transition = null, wn = 16 > e ? 16 : e, null === Ys)
                    var r = !1;
                else {
                    if (e = Ys, Ys = null, Ks = 0, 0 !== (6 & As))
                        throw Error(i(331));
                    var a = As;
                    for (As |= 4, Jl = e.current; null !== Jl;) {
                        var o = Jl, l = o.child;
                        if (0 !== (16 & Jl.flags)) {
                            var s = o.deletions;
                            if (null !== s) {
                                for (var u = 0; u < s.length; u++) {
                                    var c = s[u];
                                    for (Jl = c; null !== Jl;) {
                                        var d = Jl;
                                        switch (d.tag) {
                                            case 0:
                                            case 11:
                                            case 15: ts(8, d, o);
                                        }
                                        var f = d.child;
                                        if (null !== f)
                                            f.return = d, Jl = f;
                                        else
                                            for (; null !== Jl;) {
                                                var p = (d = Jl).sibling, h = d.return;
                                                if (is(d), d === c) {
                                                    Jl = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = h, Jl = p;
                                                    break;
                                                }
                                                Jl = h;
                                            }
                                    }
                                }
                                var m = o.alternate;
                                if (null !== m) {
                                    var v = m.child;
                                    if (null !== v) {
                                        m.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Jl = o;
                            }
                        }
                        if (0 !== (2064 & o.subtreeFlags) && null !== l)
                            l.return = o, Jl = l;
                        else
                            e: for (; null !== Jl;) {
                                if (0 !== (2048 & (o = Jl).flags))
                                    switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15: ts(9, o, o.return);
                                    }
                                var y = o.sibling;
                                if (null !== y) {
                                    y.return = o.return, Jl = y;
                                    break e;
                                }
                                Jl = o.return;
                            }
                    }
                    var b = e.current;
                    for (Jl = b; null !== Jl;) {
                        var w = (l = Jl).child;
                        if (0 !== (2064 & l.subtreeFlags) && null !== w)
                            w.return = l, Jl = w;
                        else
                            e: for (l = b; null !== Jl;) {
                                if (0 !== (2048 & (s = Jl).flags))
                                    try {
                                        switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15: rs(9, s);
                                        }
                                    }
                                    catch (S) {
                                        Eu(s, s.return, S);
                                    }
                                if (s === l) {
                                    Jl = null;
                                    break e;
                                }
                                var x = s.sibling;
                                if (null !== x) {
                                    x.return = s.return, Jl = x;
                                    break e;
                                }
                                Jl = s.return;
                            }
                    }
                    if (As = a, Ua(), on && "function" === typeof on.onPostCommitFiberRoot)
                        try {
                            on.onPostCommitFiberRoot(an, e);
                        }
                        catch (S) { }
                    r = !0;
                }
                return r;
            }
            finally {
                wn = t, _s.transition = n;
            }
        } return !1; }
        function ku(e, n, t) { e = ji(e, n = hl(0, n = cl(t, n), 1), 1), n = eu(), null !== e && (yn(e, 1, n), ru(e, n)); }
        function Eu(e, n, t) { if (3 === e.tag)
            ku(e, e, t);
        else
            for (; null !== n;) {
                if (3 === n.tag) {
                    ku(n, e, t);
                    break;
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Gs || !Gs.has(r))) {
                        n = ji(n, e = ml(n, e = cl(t, e), 1), 1), e = eu(), null !== n && (yn(n, 1, e), ru(n, e));
                        break;
                    }
                }
                n = n.return;
            } }
        function Cu(e, n, t) { var r = e.pingCache; null !== r && r.delete(n), n = eu(), e.pingedLanes |= e.suspendedLanes & t, Os === e && (Ls & t) === t && (4 === js || 3 === js && (130023424 & Ls) === Ls && 500 > Xe() - $s ? fu(e, 0) : Rs |= t), ru(e, n); }
        function Tu(e, n) { 0 === n && (0 === (1 & e.mode) ? n = 1 : (n = dn, 0 === (130023424 & (dn <<= 1)) && (dn = 4194304))); var t = eu(); null !== (e = Oi(e, n)) && (yn(e, n, t), ru(e, t)); }
        function _u(e) { var n = e.memoizedState, t = 0; null !== n && (t = n.retryLane), Tu(e, t); }
        function Au(e, n) { var t = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (t = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(i(314));
        } null !== r && r.delete(n), Tu(e, t); }
        function Ou(e, n) { return qe(e, n); }
        function Pu(e, n, t, r) { this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
        function Lu(e, n, t, r) { return new Pu(e, n, t, r); }
        function Iu(e) { return !(!(e = e.prototype) || !e.isReactComponent); }
        function Du(e, n) { var t = e.alternate; return null === t ? ((t = Lu(e.tag, n, e.key, e.mode)).elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = 14680064 & e.flags, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t; }
        function ju(e, n, t, r, a, o) { var l = 2; if (r = e, "function" === typeof e)
            Iu(e) && (l = 1);
        else if ("string" === typeof e)
            l = 5;
        else
            e: switch (e) {
                case k: return Nu(t.children, a, o, n);
                case E:
                    l = 8, a |= 8;
                    break;
                case C: return (e = Lu(12, t, n, 2 | a)).elementType = C, e.lanes = o, e;
                case O: return (e = Lu(13, t, n, a)).elementType = O, e.lanes = o, e;
                case P: return (e = Lu(19, t, n, a)).elementType = P, e.lanes = o, e;
                case D: return zu(t, a, o, n);
                default:
                    if ("object" === typeof e && null !== e)
                        switch (e.$$typeof) {
                            case T:
                                l = 10;
                                break e;
                            case _:
                                l = 9;
                                break e;
                            case A:
                                l = 11;
                                break e;
                            case L:
                                l = 14;
                                break e;
                            case I:
                                l = 16, r = null;
                                break e;
                        }
                    throw Error(i(130, null == e ? e : typeof e, ""));
            } return (n = Lu(l, t, n, a)).elementType = e, n.type = r, n.lanes = o, n; }
        function Nu(e, n, t, r) { return (e = Lu(7, e, r, n)).lanes = t, e; }
        function zu(e, n, t, r) { return (e = Lu(22, e, r, n)).elementType = D, e.lanes = t, e.stateNode = { isHidden: !1 }, e; }
        function Mu(e, n, t) { return (e = Lu(6, e, null, n)).lanes = t, e; }
        function Ru(e, n, t) { return (n = Lu(4, null !== e.children ? e.children : [], e.key, n)).lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n; }
        function Fu(e, n, t, r, a) { this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gn(0), this.expirationTimes = gn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gn(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; }
        function Bu(e, n, t, r, a, i, o, l, s) { return e = new Fu(e, n, t, l, s), 1 === n ? (n = 1, !0 === i && (n |= 8)) : n = 0, i = Lu(3, null, null, n), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Li(i), e; }
        function $u(e, n, t) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: n, implementation: t }; }
        function Uu(e) { if (!e)
            return _a; e: {
            if (Ue(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(i(170));
            var n = e;
            do {
                switch (n.tag) {
                    case 3:
                        n = n.stateNode.context;
                        break e;
                    case 1: if (Ia(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                n = n.return;
            } while (null !== n);
            throw Error(i(171));
        } if (1 === e.tag) {
            var t = e.type;
            if (Ia(t))
                return Na(e, t, n);
        } return n; }
        function Hu(e, n, t, r, a, i, o, l, s) { return (e = Bu(t, r, !0, e, 0, i, 0, l, s)).context = Uu(null), t = e.current, (i = Di(r = eu(), a = nu(t))).callback = void 0 !== n && null !== n ? n : null, ji(t, i, a), e.current.lanes = a, yn(e, a, r), ru(e, r), e; }
        function Wu(e, n, t, r) { var a = n.current, i = eu(), o = nu(a); return t = Uu(t), null === n.context ? n.context = t : n.pendingContext = t, (n = Di(i, o)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (n.callback = r), null !== (e = ji(a, n, o)) && (tu(e, a, o, i), Ni(e, a, o)), o; }
        function Vu(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; }
        function Gu(e, n) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
        } }
        function qu(e, n) { Gu(e, n), (e = e.alternate) && Gu(e, n); }
        ks = function (e, n, t) { if (null !== e)
            if (e.memoizedProps !== n.pendingProps || Oa.current)
                wl = !0;
            else {
                if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                    return wl = !1, function (e, n, t) { switch (n.tag) {
                        case 3:
                            Pl(n), pi();
                            break;
                        case 5:
                            io(n);
                            break;
                        case 1:
                            Ia(n.type) && za(n);
                            break;
                        case 4:
                            ro(n, n.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = n.type._context, a = n.memoizedProps.value;
                            Ta(gi, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = n.memoizedState))
                                return null !== r.dehydrated ? (Ta(lo, 1 & lo.current), n.flags |= 128, null) : 0 !== (t & n.child.childLanes) ? Ml(e, n, t) : (Ta(lo, 1 & lo.current), null !== (e = Wl(e, n, t)) ? e.sibling : null);
                            Ta(lo, 1 & lo.current);
                            break;
                        case 19:
                            if (r = 0 !== (t & n.childLanes), 0 !== (128 & e.flags)) {
                                if (r)
                                    return Ul(e, n, t);
                                n.flags |= 128;
                            }
                            if (null !== (a = n.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ta(lo, lo.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return n.lanes = 0, Cl(e, n, t);
                    } return Wl(e, n, t); }(e, n, t);
                wl = 0 !== (131072 & e.flags);
            }
        else
            wl = !1, ai && 0 !== (1048576 & n.flags) && Za(n, Ga, n.index); switch (n.lanes = 0, n.tag) {
            case 2:
                var r = n.type;
                Hl(e, n), e = n.pendingProps;
                var a = La(n, Aa.current);
                Ei(n, t), a = Eo(null, n, r, e, a, t);
                var o = Co();
                return n.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Ia(r) ? (o = !0, za(n)) : o = !1, n.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Li(n), a.updater = $i, n.stateNode = a, a._reactInternals = n, Vi(n, r, e, t), n = Ol(null, n, r, !0, o, t)) : (n.tag = 0, ai && o && ei(n), xl(null, n, a, t), n = n.child), n;
            case 16:
                r = n.elementType;
                e: {
                    switch (Hl(e, n), e = n.pendingProps, r = (a = r._init)(r._payload), n.type = r, a = n.tag = function (e) { if ("function" === typeof e)
                        return Iu(e) ? 1 : 0; if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === A)
                            return 11;
                        if (e === L)
                            return 14;
                    } return 2; }(r), e = vi(r, e), a) {
                        case 0:
                            n = _l(null, n, r, e, t);
                            break e;
                        case 1:
                            n = Al(null, n, r, e, t);
                            break e;
                        case 11:
                            n = Sl(null, n, r, e, t);
                            break e;
                        case 14:
                            n = kl(null, n, r, vi(r.type, e), t);
                            break e;
                    }
                    throw Error(i(306, r, ""));
                }
                return n;
            case 0: return r = n.type, a = n.pendingProps, _l(e, n, r, a = n.elementType === r ? a : vi(r, a), t);
            case 1: return r = n.type, a = n.pendingProps, Al(e, n, r, a = n.elementType === r ? a : vi(r, a), t);
            case 3:
                e: {
                    if (Pl(n), null === e)
                        throw Error(i(387));
                    r = n.pendingProps, a = (o = n.memoizedState).element, Ii(e, n), Mi(n, r, null, t);
                    var l = n.memoizedState;
                    if (r = l.element, o.isDehydrated) {
                        if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, 256 & n.flags) {
                            n = Ll(e, n, r, t, a = cl(Error(i(423)), n));
                            break e;
                        }
                        if (r !== a) {
                            n = Ll(e, n, r, t, a = cl(Error(i(424)), n));
                            break e;
                        }
                        for (ri = ua(n.stateNode.containerInfo.firstChild), ti = n, ai = !0, ii = null, t = Xi(n, null, r, t), n.child = t; t;)
                            t.flags = -3 & t.flags | 4096, t = t.sibling;
                    }
                    else {
                        if (pi(), r === a) {
                            n = Wl(e, n, t);
                            break e;
                        }
                        xl(e, n, r, t);
                    }
                    n = n.child;
                }
                return n;
            case 5: return io(n), null === e && ui(n), r = n.type, a = n.pendingProps, o = null !== e ? e.memoizedProps : null, l = a.children, ta(r, a) ? l = null : null !== o && ta(r, o) && (n.flags |= 32), Tl(e, n), xl(e, n, l, t), n.child;
            case 6: return null === e && ui(n), null;
            case 13: return Ml(e, n, t);
            case 4: return ro(n, n.stateNode.containerInfo), r = n.pendingProps, null === e ? n.child = Qi(n, null, r, t) : xl(e, n, r, t), n.child;
            case 11: return r = n.type, a = n.pendingProps, Sl(e, n, r, a = n.elementType === r ? a : vi(r, a), t);
            case 7: return xl(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12: return xl(e, n, n.pendingProps.children, t), n.child;
            case 10:
                e: {
                    if (r = n.type._context, a = n.pendingProps, o = n.memoizedProps, l = a.value, Ta(gi, r._currentValue), r._currentValue = l, null !== o)
                        if (lr(o.value, l)) {
                            if (o.children === a.children && !Oa.current) {
                                n = Wl(e, n, t);
                                break e;
                            }
                        }
                        else
                            for (null !== (o = n.child) && (o.return = n); null !== o;) {
                                var s = o.dependencies;
                                if (null !== s) {
                                    l = o.child;
                                    for (var u = s.firstContext; null !== u;) {
                                        if (u.context === r) {
                                            if (1 === o.tag) {
                                                (u = Di(-1, t & -t)).tag = 2;
                                                var c = o.updateQueue;
                                                if (null !== c) {
                                                    var d = (c = c.shared).pending;
                                                    null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u;
                                                }
                                            }
                                            o.lanes |= t, null !== (u = o.alternate) && (u.lanes |= t), ki(o.return, t, n), s.lanes |= t;
                                            break;
                                        }
                                        u = u.next;
                                    }
                                }
                                else if (10 === o.tag)
                                    l = o.type === n.type ? null : o.child;
                                else if (18 === o.tag) {
                                    if (null === (l = o.return))
                                        throw Error(i(341));
                                    l.lanes |= t, null !== (s = l.alternate) && (s.lanes |= t), ki(l, t, n), l = o.sibling;
                                }
                                else
                                    l = o.child;
                                if (null !== l)
                                    l.return = o;
                                else
                                    for (l = o; null !== l;) {
                                        if (l === n) {
                                            l = null;
                                            break;
                                        }
                                        if (null !== (o = l.sibling)) {
                                            o.return = l.return, l = o;
                                            break;
                                        }
                                        l = l.return;
                                    }
                                o = l;
                            }
                    xl(e, n, a.children, t), n = n.child;
                }
                return n;
            case 9: return a = n.type, r = n.pendingProps.children, Ei(n, t), r = r(a = Ci(a)), n.flags |= 1, xl(e, n, r, t), n.child;
            case 14: return a = vi(r = n.type, n.pendingProps), kl(e, n, r, a = vi(r.type, a), t);
            case 15: return El(e, n, n.type, n.pendingProps, t);
            case 17: return r = n.type, a = n.pendingProps, a = n.elementType === r ? a : vi(r, a), Hl(e, n), n.tag = 1, Ia(r) ? (e = !0, za(n)) : e = !1, Ei(n, t), Hi(n, r, a), Vi(n, r, a, t), Ol(null, n, r, !0, e, t);
            case 19: return Ul(e, n, t);
            case 22: return Cl(e, n, t);
        } throw Error(i(156, n.tag)); };
        var Yu = "function" === typeof reportError ? reportError : function (e) { console.error(e); };
        function Ku(e) { this._internalRoot = e; }
        function Qu(e) { this._internalRoot = e; }
        function Xu(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); }
        function Ju(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); }
        function Zu() { }
        function ec(e, n, t, r, a) { var i = t._reactRootContainer; if (i) {
            var o = i;
            if ("function" === typeof a) {
                var l = a;
                a = function () { var e = Vu(o); l.call(e); };
            }
            Wu(n, o, e, a);
        }
        else
            o = function (e, n, t, r, a) { if (a) {
                if ("function" === typeof r) {
                    var i = r;
                    r = function () { var e = Vu(o); i.call(e); };
                }
                var o = Hu(n, r, e, 0, null, !1, 0, "", Zu);
                return e._reactRootContainer = o, e[ha] = o.current, Ur(8 === e.nodeType ? e.parentNode : e), cu(), o;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" === typeof r) {
                var l = r;
                r = function () { var e = Vu(s); l.call(e); };
            } var s = Bu(e, 0, !1, null, 0, !1, 0, "", Zu); return e._reactRootContainer = s, e[ha] = s.current, Ur(8 === e.nodeType ? e.parentNode : e), cu((function () { Wu(n, s, t, r); })), s; }(t, n, e, a, r); return Vu(o); }
        Qu.prototype.render = Ku.prototype.render = function (e) { var n = this._internalRoot; if (null === n)
            throw Error(i(409)); Wu(e, n, null, null); }, Qu.prototype.unmount = Ku.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var n = e.containerInfo;
            cu((function () { Wu(null, e, null, null); })), n[ha] = null;
        } }, Qu.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var n = Cn();
            e = { blockedOn: null, target: e, priority: n };
            for (var t = 0; t < jn.length && 0 !== n && n < jn[t].priority; t++)
                ;
            jn.splice(t, 0, e), 0 === t && Rn(e);
        } }, Sn = function (e) { switch (e.tag) {
            case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                    var t = fn(n.pendingLanes);
                    0 !== t && (bn(n, 1 | t), ru(n, Xe()), 0 === (6 & As) && (Us = Xe() + 500, Ua()));
                }
                break;
            case 13: cu((function () { var n = Oi(e, 1); if (null !== n) {
                var t = eu();
                tu(n, e, 1, t);
            } })), qu(e, 1);
        } }, kn = function (e) { if (13 === e.tag) {
            var n = Oi(e, 134217728);
            if (null !== n)
                tu(n, e, 134217728, eu());
            qu(e, 134217728);
        } }, En = function (e) { if (13 === e.tag) {
            var n = nu(e), t = Oi(e, n);
            if (null !== t)
                tu(t, e, n, eu());
            qu(e, n);
        } }, Cn = function () { return wn; }, Tn = function (e, n) { var t = wn; try {
            return wn = e, n();
        }
        finally {
            wn = t;
        } }, Se = function (e, n, t) { switch (n) {
            case "input":
                if (J(e, t), n = t.name, "radio" === t.type && null != n) {
                    for (t = e; t.parentNode;)
                        t = t.parentNode;
                    for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (r !== e && r.form === e.form) {
                            var a = xa(r);
                            if (!a)
                                throw Error(i(90));
                            q(r), J(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                ie(e, t);
                break;
            case "select": null != (n = t.value) && te(e, !!t.multiple, n, !1);
        } }, Ae = uu, Oe = cu;
        var nc = { usingClientEntryPoint: !1, Events: [ba, wa, xa, Te, _e, uu] }, tc = { findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: tc.bundleType, version: tc.version, rendererPackageName: tc.rendererPackageName, rendererConfig: tc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = Ve(e)) ? null : e.stateNode; }, findFiberByHostInstance: tc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber)
                try {
                    an = ac.inject(rc), on = ac;
                }
                catch (ce) { }
        }
        n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc, n.createPortal = function (e, n) { var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Xu(n))
            throw Error(i(200)); return $u(e, n, null, t); }, n.createRoot = function (e, n) { if (!Xu(e))
            throw Error(i(299)); var t = !1, r = "", a = Yu; return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (t = !0), void 0 !== n.identifierPrefix && (r = n.identifierPrefix), void 0 !== n.onRecoverableError && (a = n.onRecoverableError)), n = Bu(e, 1, !1, null, 0, t, 0, r, a), e[ha] = n.current, Ur(8 === e.nodeType ? e.parentNode : e), new Ku(n); }, n.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var n = e._reactInternals; if (void 0 === n) {
            if ("function" === typeof e.render)
                throw Error(i(188));
            throw e = Object.keys(e).join(","), Error(i(268, e));
        } return e = null === (e = Ve(n)) ? null : e.stateNode; }, n.flushSync = function (e) { return cu(e); }, n.hydrate = function (e, n, t) { if (!Ju(n))
            throw Error(i(200)); return ec(null, e, n, !0, t); }, n.hydrateRoot = function (e, n, t) { if (!Xu(e))
            throw Error(i(405)); var r = null != t && t.hydratedSources || null, a = !1, o = "", l = Yu; if (null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (a = !0), void 0 !== t.identifierPrefix && (o = t.identifierPrefix), void 0 !== t.onRecoverableError && (l = t.onRecoverableError)), n = Hu(n, null, e, 1, null != t ? t : null, a, 0, o, l), e[ha] = n.current, Ur(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (t = r[e])._getVersion)(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a); return new Qu(n); }, n.render = function (e, n, t) { if (!Ju(n))
            throw Error(i(200)); return ec(null, e, n, !1, t); }, n.unmountComponentAtNode = function (e) { if (!Ju(e))
            throw Error(i(40)); return !!e._reactRootContainer && (cu((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[ha] = null; })); })), !0); }, n.unstable_batchedUpdates = uu, n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) { if (!Ju(t))
            throw Error(i(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(i(38)); return ec(e, n, t, !1, r); }, n.version = "18.2.0-next-9e3b772b8-20220608";
    }, 250: function (e, n, t) {
        "use strict";
        var r = t(164);
        n.createRoot = r.createRoot, n.hydrateRoot = r.hydrateRoot;
    }, 164: function (e, n, t) {
        "use strict";
        !function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (n) {
                console.error(n);
            } }(), e.exports = t(463);
    }, 372: function (e, n) {
        "use strict";
        var t, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen");
        function g(e) { if ("object" === typeof e && null !== e) {
            var n = e.$$typeof;
            switch (n) {
                case r: switch (e = e.type) {
                    case i:
                    case l:
                    case o:
                    case f:
                    case p: return e;
                    default: switch (e = e && e.$$typeof) {
                        case c:
                        case u:
                        case d:
                        case m:
                        case h:
                        case s: return e;
                        default: return n;
                    }
                }
                case a: return n;
            }
        } }
        t = Symbol.for("react.module.reference"), n.isValidElementType = function (e) { return "string" === typeof e || "function" === typeof e || e === i || e === l || e === o || e === f || e === p || e === v || "object" === typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === s || e.$$typeof === u || e.$$typeof === d || e.$$typeof === t || void 0 !== e.getModuleId); }, n.typeOf = g;
    }, 441: function (e, n, t) {
        "use strict";
        e.exports = t(372);
    }, 374: function (e, n, t) {
        "use strict";
        var r = t(791), a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, n, t) { var r, i = {}, u = null, c = null; for (r in void 0 !== t && (u = "" + t), void 0 !== n.key && (u = "" + n.key), void 0 !== n.ref && (c = n.ref), n)
            o.call(n, r) && !s.hasOwnProperty(r) && (i[r] = n[r]); if (e && e.defaultProps)
            for (r in n = e.defaultProps)
                void 0 === i[r] && (i[r] = n[r]); return { $$typeof: a, type: e, key: u, ref: c, props: i, _owner: l.current }; }
        n.jsx = u, n.jsxs = u;
    }, 117: function (e, n) {
        "use strict";
        var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator;
        var h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, v = {};
        function g(e, n, t) { this.props = e, this.context = n, this.refs = v, this.updater = t || h; }
        function y() { }
        function b(e, n, t) { this.props = e, this.context = n, this.refs = v, this.updater = t || h; }
        g.prototype.isReactComponent = {}, g.prototype.setState = function (e, n) { if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, n, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = g.prototype;
        var w = b.prototype = new y;
        w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0;
        var x = Array.isArray, S = Object.prototype.hasOwnProperty, k = { current: null }, E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, n, r) { var a, i = {}, o = null, l = null; if (null != n)
            for (a in void 0 !== n.ref && (l = n.ref), void 0 !== n.key && (o = "" + n.key), n)
                S.call(n, a) && !E.hasOwnProperty(a) && (i[a] = n[a]); var s = arguments.length - 2; if (1 === s)
            i.children = r;
        else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            i.children = u;
        } if (e && e.defaultProps)
            for (a in s = e.defaultProps)
                void 0 === i[a] && (i[a] = s[a]); return { $$typeof: t, type: e, key: o, ref: l, props: i, _owner: k.current }; }
        function T(e) { return "object" === typeof e && null !== e && e.$$typeof === t; }
        var _ = /\/+/g;
        function A(e, n) { return "object" === typeof e && null !== e && null != e.key ? function (e) { var n = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return n[e]; })); }("" + e.key) : n.toString(36); }
        function O(e, n, a, i, o) { var l = typeof e; "undefined" !== l && "boolean" !== l || (e = null); var s = !1; if (null === e)
            s = !0;
        else
            switch (l) {
                case "string":
                case "number":
                    s = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case t:
                    case r: s = !0;
                }
            } if (s)
            return o = o(s = e), e = "" === i ? "." + A(s, 0) : i, x(o) ? (a = "", null != e && (a = e.replace(_, "$&/") + "/"), O(o, n, a, "", (function (e) { return e; }))) : null != o && (T(o) && (o = function (e, n) { return { $$typeof: t, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner }; }(o, a + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(_, "$&/") + "/") + e)), n.push(o)), 1; if (s = 0, i = "" === i ? "." : i + ":", x(e))
            for (var u = 0; u < e.length; u++) {
                var c = i + A(l = e[u], u);
                s += O(l, n, a, c, o);
            }
        else if (c = function (e) { return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" === typeof c)
            for (e = c.call(e), u = 0; !(l = e.next()).done;)
                s += O(l = l.value, n, a, c = i + A(l, u++), o);
        else if ("object" === l)
            throw n = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."); return s; }
        function P(e, n, t) { if (null == e)
            return e; var r = [], a = 0; return O(e, r, "", "", (function (e) { return n.call(t, e, a++); })), r; }
        function L(e) { if (-1 === e._status) {
            var n = e._result;
            (n = n()).then((function (n) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = n); }), (function (n) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = n); })), -1 === e._status && (e._status = 0, e._result = n);
        } if (1 === e._status)
            return e._result.default; throw e._result; }
        var I = { current: null }, D = { transition: null }, j = { ReactCurrentDispatcher: I, ReactCurrentBatchConfig: D, ReactCurrentOwner: k };
        n.Children = { map: P, forEach: function (e, n, t) { P(e, (function () { n.apply(this, arguments); }), t); }, count: function (e) { var n = 0; return P(e, (function () { n++; })), n; }, toArray: function (e) { return P(e, (function (e) { return e; })) || []; }, only: function (e) { if (!T(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, n.Component = g, n.Fragment = a, n.Profiler = o, n.PureComponent = b, n.StrictMode = i, n.Suspense = c, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, n.cloneElement = function (e, n, r) { if (null === e || void 0 === e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = m({}, e.props), i = e.key, o = e.ref, l = e._owner; if (null != n) {
            if (void 0 !== n.ref && (o = n.ref, l = k.current), void 0 !== n.key && (i = "" + n.key), e.type && e.type.defaultProps)
                var s = e.type.defaultProps;
            for (u in n)
                S.call(n, u) && !E.hasOwnProperty(u) && (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u]);
        } var u = arguments.length - 2; if (1 === u)
            a.children = r;
        else if (1 < u) {
            s = Array(u);
            for (var c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            a.children = s;
        } return { $$typeof: t, type: e.type, key: i, ref: o, props: a, _owner: l }; }, n.createContext = function (e) { return (e = { $$typeof: s, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: l, _context: e }, e.Consumer = e; }, n.createElement = C, n.createFactory = function (e) { var n = C.bind(null, e); return n.type = e, n; }, n.createRef = function () { return { current: null }; }, n.forwardRef = function (e) { return { $$typeof: u, render: e }; }, n.isValidElement = T, n.lazy = function (e) { return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: L }; }, n.memo = function (e, n) { return { $$typeof: d, type: e, compare: void 0 === n ? null : n }; }, n.startTransition = function (e) { var n = D.transition; D.transition = {}; try {
            e();
        }
        finally {
            D.transition = n;
        } }, n.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, n.useCallback = function (e, n) { return I.current.useCallback(e, n); }, n.useContext = function (e) { return I.current.useContext(e); }, n.useDebugValue = function () { }, n.useDeferredValue = function (e) { return I.current.useDeferredValue(e); }, n.useEffect = function (e, n) { return I.current.useEffect(e, n); }, n.useId = function () { return I.current.useId(); }, n.useImperativeHandle = function (e, n, t) { return I.current.useImperativeHandle(e, n, t); }, n.useInsertionEffect = function (e, n) { return I.current.useInsertionEffect(e, n); }, n.useLayoutEffect = function (e, n) { return I.current.useLayoutEffect(e, n); }, n.useMemo = function (e, n) { return I.current.useMemo(e, n); }, n.useReducer = function (e, n, t) { return I.current.useReducer(e, n, t); }, n.useRef = function (e) { return I.current.useRef(e); }, n.useState = function (e) { return I.current.useState(e); }, n.useSyncExternalStore = function (e, n, t) { return I.current.useSyncExternalStore(e, n, t); }, n.useTransition = function () { return I.current.useTransition(); }, n.version = "18.2.0";
    }, 791: function (e, n, t) {
        "use strict";
        e.exports = t(117);
    }, 184: function (e, n, t) {
        "use strict";
        e.exports = t(374);
    }, 813: function (e, n) {
        "use strict";
        function t(e, n) { var t = e.length; e.push(n); e: for (; 0 < t;) {
            var r = t - 1 >>> 1, a = e[r];
            if (!(0 < i(a, n)))
                break e;
            e[r] = n, e[t] = a, t = r;
        } }
        function r(e) { return 0 === e.length ? null : e[0]; }
        function a(e) { if (0 === e.length)
            return null; var n = e[0], t = e.pop(); if (t !== n) {
            e[0] = t;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var l = 2 * (r + 1) - 1, s = e[l], u = l + 1, c = e[u];
                if (0 > i(s, t))
                    u < a && 0 > i(c, s) ? (e[r] = c, e[u] = t, r = u) : (e[r] = s, e[l] = t, r = l);
                else {
                    if (!(u < a && 0 > i(c, t)))
                        break e;
                    e[r] = c, e[u] = t, r = u;
                }
            }
        } return n; }
        function i(e, n) { var t = e.sortIndex - n.sortIndex; return 0 !== t ? t : e.id - n.id; }
        if ("object" === typeof performance && "function" === typeof performance.now) {
            var o = performance;
            n.unstable_now = function () { return o.now(); };
        }
        else {
            var l = Date, s = l.now();
            n.unstable_now = function () { return l.now() - s; };
        }
        var u = [], c = [], d = 1, f = null, p = 3, h = !1, m = !1, v = !1, g = "function" === typeof setTimeout ? setTimeout : null, y = "function" === typeof clearTimeout ? clearTimeout : null, b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) { for (var n = r(c); null !== n;) {
            if (null === n.callback)
                a(c);
            else {
                if (!(n.startTime <= e))
                    break;
                a(c), n.sortIndex = n.expirationTime, t(u, n);
            }
            n = r(c);
        } }
        function x(e) { if (v = !1, w(e), !m)
            if (null !== r(u))
                m = !0, D(S);
            else {
                var n = r(c);
                null !== n && j(x, n.startTime - e);
            } }
        function S(e, t) { m = !1, v && (v = !1, y(T), T = -1), h = !0; var i = p; try {
            for (w(t), f = r(u); null !== f && (!(f.expirationTime > t) || e && !O());) {
                var o = f.callback;
                if ("function" === typeof o) {
                    f.callback = null, p = f.priorityLevel;
                    var l = o(f.expirationTime <= t);
                    t = n.unstable_now(), "function" === typeof l ? f.callback = l : f === r(u) && a(u), w(t);
                }
                else
                    a(u);
                f = r(u);
            }
            if (null !== f)
                var s = !0;
            else {
                var d = r(c);
                null !== d && j(x, d.startTime - t), s = !1;
            }
            return s;
        }
        finally {
            f = null, p = i, h = !1;
        } }
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k, E = !1, C = null, T = -1, _ = 5, A = -1;
        function O() { return !(n.unstable_now() - A < _); }
        function P() { if (null !== C) {
            var e = n.unstable_now();
            A = e;
            var t = !0;
            try {
                t = C(!0, e);
            }
            finally {
                t ? k() : (E = !1, C = null);
            }
        }
        else
            E = !1; }
        if ("function" === typeof b)
            k = function () { b(P); };
        else if ("undefined" !== typeof MessageChannel) {
            var L = new MessageChannel, I = L.port2;
            L.port1.onmessage = P, k = function () { I.postMessage(null); };
        }
        else
            k = function () { g(P, 0); };
        function D(e) { C = e, E || (E = !0, k()); }
        function j(e, t) { T = g((function () { e(n.unstable_now()); }), t); }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function (e) { e.callback = null; }, n.unstable_continueExecution = function () { m || h || (m = !0, D(S)); }, n.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e ? Math.floor(1e3 / e) : 5; }, n.unstable_getCurrentPriorityLevel = function () { return p; }, n.unstable_getFirstCallbackNode = function () { return r(u); }, n.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default: n = p;
        } var t = p; p = n; try {
            return e();
        }
        finally {
            p = t;
        } }, n.unstable_pauseExecution = function () { }, n.unstable_requestPaint = function () { }, n.unstable_runWithPriority = function (e, n) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var t = p; p = e; try {
            return n();
        }
        finally {
            p = t;
        } }, n.unstable_scheduleCallback = function (e, a, i) { var o = n.unstable_now(); switch ("object" === typeof i && null !== i ? i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o : i = o, e) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 1e4;
                break;
            default: l = 5e3;
        } return e = { id: d++, callback: a, priorityLevel: e, startTime: i, expirationTime: l = i + l, sortIndex: -1 }, i > o ? (e.sortIndex = i, t(c, e), null === r(u) && e === r(c) && (v ? (y(T), T = -1) : v = !0, j(x, i - o))) : (e.sortIndex = l, t(u, e), m || h || (m = !0, D(S))), e; }, n.unstable_shouldYield = O, n.unstable_wrapCallback = function (e) { var n = p; return function () { var t = p; p = n; try {
            return e.apply(this, arguments);
        }
        finally {
            p = t;
        } }; };
    }, 296: function (e, n, t) {
        "use strict";
        e.exports = t(813);
    }, 613: function (e) { e.exports = function (e, n, t, r) { var a = t ? t.call(r, e, n) : void 0; if (void 0 !== a)
        return !!a; if (e === n)
        return !0; if ("object" !== typeof e || !e || "object" !== typeof n || !n)
        return !1; var i = Object.keys(e), o = Object.keys(n); if (i.length !== o.length)
        return !1; for (var l = Object.prototype.hasOwnProperty.bind(n), s = 0; s < i.length; s++) {
        var u = i[s];
        if (!l(u))
            return !1;
        var c = e[u], d = n[u];
        if (!1 === (a = t ? t.call(r, c, d, u) : void 0) || void 0 === a && c !== d)
            return !1;
    } return !0; }; }, 561: function (e, n, t) {
        "use strict";
        var r = t(791);
        var a = "function" === typeof Object.is ? Object.is : function (e, n) { return e === n && (0 !== e || 1 / e === 1 / n) || e !== e && n !== n; }, i = r.useState, o = r.useEffect, l = r.useLayoutEffect, s = r.useDebugValue;
        function u(e) { var n = e.getSnapshot; e = e.value; try {
            var t = n();
            return !a(e, t);
        }
        catch (r) {
            return !0;
        } }
        var c = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function (e, n) { return n(); } : function (e, n) { var t = n(), r = i({ inst: { value: t, getSnapshot: n } }), a = r[0].inst, c = r[1]; return l((function () { a.value = t, a.getSnapshot = n, u(a) && c({ inst: a }); }), [e, t, n]), o((function () { return u(a) && c({ inst: a }), e((function () { u(a) && c({ inst: a }); })); }), [e]), s(t), t; };
        n.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
    }, 595: function (e, n, t) {
        "use strict";
        var r = t(791), a = t(248);
        var i = "function" === typeof Object.is ? Object.is : function (e, n) { return e === n && (0 !== e || 1 / e === 1 / n) || e !== e && n !== n; }, o = a.useSyncExternalStore, l = r.useRef, s = r.useEffect, u = r.useMemo, c = r.useDebugValue;
        n.useSyncExternalStoreWithSelector = function (e, n, t, r, a) { var d = l(null); if (null === d.current) {
            var f = { hasValue: !1, value: null };
            d.current = f;
        }
        else
            f = d.current; d = u((function () { function e(e) { if (!s) {
            if (s = !0, o = e, e = r(e), void 0 !== a && f.hasValue) {
                var n = f.value;
                if (a(n, e))
                    return l = n;
            }
            return l = e;
        } if (n = l, i(o, e))
            return n; var t = r(e); return void 0 !== a && a(n, t) ? n : (o = e, l = t); } var o, l, s = !1, u = void 0 === t ? null : t; return [function () { return e(n()); }, null === u ? void 0 : function () { return e(u()); }]; }), [n, t, r, a]); var p = o(e, d[0], d[1]); return s((function () { f.hasValue = !0, f.value = p; }), [p]), c(p), p; };
    }, 248: function (e, n, t) {
        "use strict";
        e.exports = t(561);
    }, 327: function (e, n, t) {
        "use strict";
        e.exports = t(595);
    } }, n = {}; function t(r) { var a = n[r]; if (void 0 !== a)
    return a.exports; var i = n[r] = { exports: {} }; return e[r](i, i.exports, t), i.exports; } t.n = function (e) { var n = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return t.d(n, { a: n }), n; }, t.d = function (e, n) { for (var r in n)
    t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }); }, t.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n); }, function () {
    "use strict";
    var e, n = t(791), r = t(250);
    function a(e, n) { (null == n || n > e.length) && (n = e.length); for (var t = 0, r = new Array(n); t < n; t++)
        r[t] = e[t]; return r; }
    function i(e, n) { if (e) {
        if ("string" === typeof e)
            return a(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, n) : void 0;
    } }
    function o(e, n) { return function (e) { if (Array.isArray(e))
        return e; }(e) || function (e, n) { var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != t) {
        var r, a, i = [], o = !0, l = !1;
        try {
            for (t = t.call(e); !(o = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); o = !0)
                ;
        }
        catch (s) {
            l = !0, a = s;
        }
        finally {
            try {
                o || null == t.return || t.return();
            }
            finally {
                if (l)
                    throw a;
            }
        }
        return i;
    } }(e, n) || i(e, n) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    function l() { return l = Object.assign ? Object.assign.bind() : function (e) { for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    } return e; }, l.apply(this, arguments); }
    !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(e || (e = {}));
    var s = function (e) { return e; };
    var u = "beforeunload", c = "popstate";
    function d(e) { e.preventDefault(), e.returnValue = ""; }
    function f() { var e = []; return { get length() { return e.length; }, push: function (n) { return e.push(n), function () { e = e.filter((function (e) { return e !== n; })); }; }, call: function (n) { e.forEach((function (e) { return e && e(n); })); } }; }
    function p() { return Math.random().toString(36).substr(2, 8); }
    function h(e) { var n = e.pathname, t = void 0 === n ? "/" : n, r = e.search, a = void 0 === r ? "" : r, i = e.hash, o = void 0 === i ? "" : i; return a && "?" !== a && (t += "?" === a.charAt(0) ? a : "?" + a), o && "#" !== o && (t += "#" === o.charAt(0) ? o : "#" + o), t; }
    function m(e) { var n = {}; if (e) {
        var t = e.indexOf("#");
        t >= 0 && (n.hash = e.substr(t), e = e.substr(0, t));
        var r = e.indexOf("?");
        r >= 0 && (n.search = e.substr(r), e = e.substr(0, r)), e && (n.pathname = e);
    } return n; }
    var v = (0, n.createContext)(null);
    var g = (0, n.createContext)(null);
    var y = (0, n.createContext)({ outlet: null, matches: [] });
    function b(e, n) { if (!e)
        throw new Error(n); }
    function w(e, n, t) { void 0 === t && (t = "/"); var r = A(("string" === typeof n ? m(n) : n).pathname || "/", t); if (null == r)
        return null; var a = x(e); !function (e) { e.sort((function (e, n) { return e.score !== n.score ? n.score - e.score : function (e, n) { var t = e.length === n.length && e.slice(0, -1).every((function (e, t) { return e === n[t]; })); return t ? e[e.length - 1] - n[n.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), n.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(a); for (var i = null, o = 0; null == i && o < a.length; ++o)
        i = C(a[o], r); return i; }
    function x(e, n, t, r) { return void 0 === n && (n = []), void 0 === t && (t = []), void 0 === r && (r = ""), e.forEach((function (e, a) { var i = { relativePath: e.path || "", caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; i.relativePath.startsWith("/") && (i.relativePath.startsWith(r) || b(!1), i.relativePath = i.relativePath.slice(r.length)); var o = O([r, i.relativePath]), l = t.concat(i); e.children && e.children.length > 0 && (!0 === e.index && b(!1), x(e.children, n, l, o)), (null != e.path || e.index) && n.push({ path: o, score: E(o, e.index), routesMeta: l }); })), n; }
    var S = /^:\w+$/, k = function (e) { return "*" === e; };
    function E(e, n) { var t = e.split("/"), r = t.length; return t.some(k) && (r += -2), n && (r += 2), t.filter((function (e) { return !k(e); })).reduce((function (e, n) { return e + (S.test(n) ? 3 : "" === n ? 1 : 10); }), r); }
    function C(e, n) { for (var t = e.routesMeta, r = {}, a = "/", i = [], o = 0; o < t.length; ++o) {
        var l = t[o], s = o === t.length - 1, u = "/" === a ? n : n.slice(a.length) || "/", c = T({ path: l.relativePath, caseSensitive: l.caseSensitive, end: s }, u);
        if (!c)
            return null;
        Object.assign(r, c.params);
        var d = l.route;
        i.push({ params: r, pathname: O([a, c.pathname]), pathnameBase: P(O([a, c.pathnameBase])), route: d }), "/" !== c.pathnameBase && (a = O([a, c.pathnameBase]));
    } return i; }
    function T(e, n) { "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var t = function (e, n, t) { void 0 === n && (n = !1); void 0 === t && (t = !0); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (function (e, n) { return r.push(n), "([^\\/]+)"; })); e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a += t ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"; return [new RegExp(a, n ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), r = o(t, 2), a = r[0], i = r[1], l = n.match(a); if (!l)
        return null; var s = l[0], u = s.replace(/(.)\/+$/, "$1"), c = l.slice(1), d = i.reduce((function (e, n, t) { if ("*" === n) {
        var r = c[t] || "";
        u = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1");
    } return e[n] = function (e, n) { try {
        return decodeURIComponent(e);
    }
    catch (t) {
        return e;
    } }(c[t] || ""), e; }), {}); return { params: d, pathname: s, pathnameBase: u, pattern: e }; }
    function _(e, n, t) { var r, a = "string" === typeof e ? m(e) : e, i = "" === e || "" === a.pathname ? "/" : a.pathname; if (null == i)
        r = t;
    else {
        var o = n.length - 1;
        if (i.startsWith("..")) {
            for (var l = i.split("/"); ".." === l[0];)
                l.shift(), o -= 1;
            a.pathname = l.join("/");
        }
        r = o >= 0 ? n[o] : "/";
    } var s = function (e, n) { void 0 === n && (n = "/"); var t = "string" === typeof e ? m(e) : e, r = t.pathname, a = t.search, i = void 0 === a ? "" : a, o = t.hash, l = void 0 === o ? "" : o, s = r ? r.startsWith("/") ? r : function (e, n) { var t = n.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? t.length > 1 && t.pop() : "." !== e && t.push(e); })), t.length > 1 ? t.join("/") : "/"; }(r, n) : n; return { pathname: s, search: L(i), hash: I(l) }; }(a, r); return i && "/" !== i && i.endsWith("/") && !s.pathname.endsWith("/") && (s.pathname += "/"), s; }
    function A(e, n) { if ("/" === n)
        return e; if (!e.toLowerCase().startsWith(n.toLowerCase()))
        return null; var t = e.charAt(n.length); return t && "/" !== t ? null : e.slice(n.length) || "/"; }
    var O = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, P = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, L = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, I = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; };
    function D(e) { j() || b(!1); var t = (0, n.useContext)(v), r = t.basename, a = t.navigator, i = F(e), o = i.hash, l = i.pathname, s = i.search, u = l; if ("/" !== r) {
        var c = function (e) { return "" === e || "" === e.pathname ? "/" : "string" === typeof e ? m(e).pathname : e.pathname; }(e), d = null != c && c.endsWith("/");
        u = "/" === l ? r + (d ? "/" : "") : O([r, l]);
    } return a.createHref({ pathname: u, search: s, hash: o }); }
    function j() { return null != (0, n.useContext)(g); }
    function N() { return j() || b(!1), (0, n.useContext)(g).location; }
    function z() { j() || b(!1); var e = (0, n.useContext)(v), t = e.basename, r = e.navigator, a = (0, n.useContext)(y).matches, i = N().pathname, o = JSON.stringify(a.map((function (e) { return e.pathnameBase; }))), l = (0, n.useRef)(!1); return (0, n.useEffect)((function () { l.current = !0; })), (0, n.useCallback)((function (e, n) { if (void 0 === n && (n = {}), l.current)
        if ("number" !== typeof e) {
            var a = _(e, JSON.parse(o), i);
            "/" !== t && (a.pathname = O([t, a.pathname])), (n.replace ? r.replace : r.push)(a, n.state);
        }
        else
            r.go(e); }), [t, r, o, i]); }
    var M = (0, n.createContext)(null);
    function R() { var e = (0, n.useContext)(y).matches, t = e[e.length - 1]; return t ? t.params : {}; }
    function F(e) { var t = (0, n.useContext)(y).matches, r = N().pathname, a = JSON.stringify(t.map((function (e) { return e.pathnameBase; }))); return (0, n.useMemo)((function () { return _(e, JSON.parse(a), r); }), [e, a, r]); }
    function B(e, t) { return void 0 === t && (t = []), null == e ? null : e.reduceRight((function (r, a, i) { return (0, n.createElement)(y.Provider, { children: void 0 !== a.route.element ? a.route.element : r, value: { outlet: r, matches: t.concat(e.slice(0, i + 1)) } }); }), null); }
    function $(e) { return function (e) { var t = (0, n.useContext)(y).outlet; return t ? (0, n.createElement)(M.Provider, { value: e }, t) : t; }(e.context); }
    function U(e) { b(!1); }
    function H(t) { var r = t.basename, a = void 0 === r ? "/" : r, i = t.children, o = void 0 === i ? null : i, l = t.location, s = t.navigationType, u = void 0 === s ? e.Pop : s, c = t.navigator, d = t.static, f = void 0 !== d && d; j() && b(!1); var p = P(a), h = (0, n.useMemo)((function () { return { basename: p, navigator: c, static: f }; }), [p, c, f]); "string" === typeof l && (l = m(l)); var y = l, w = y.pathname, x = void 0 === w ? "/" : w, S = y.search, k = void 0 === S ? "" : S, E = y.hash, C = void 0 === E ? "" : E, T = y.state, _ = void 0 === T ? null : T, O = y.key, L = void 0 === O ? "default" : O, I = (0, n.useMemo)((function () { var e = A(x, p); return null == e ? null : { pathname: e, search: k, hash: C, state: _, key: L }; }), [p, x, k, C, _, L]); return null == I ? null : (0, n.createElement)(v.Provider, { value: h }, (0, n.createElement)(g.Provider, { children: o, value: { location: I, navigationType: u } })); }
    function W(e) { var t = e.children, r = e.location; return function (e, t) { j() || b(!1); var r, a = (0, n.useContext)(y).matches, i = a[a.length - 1], o = i ? i.params : {}, l = (i && i.pathname, i ? i.pathnameBase : "/"), s = (i && i.route, N()); if (t) {
        var u, c = "string" === typeof t ? m(t) : t;
        "/" === l || (null == (u = c.pathname) ? void 0 : u.startsWith(l)) || b(!1), r = c;
    }
    else
        r = s; var d = r.pathname || "/", f = w(e, { pathname: "/" === l ? d : d.slice(l.length) || "/" }); return B(f && f.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, o, e.params), pathname: O([l, e.pathname]), pathnameBase: "/" === e.pathnameBase ? l : O([l, e.pathnameBase]) }); })), a); }(V(t), r); }
    function V(e) { var t = []; return n.Children.forEach(e, (function (e) { if ((0, n.isValidElement)(e))
        if (e.type !== n.Fragment) {
            e.type !== U && b(!1);
            var r = { caseSensitive: e.props.caseSensitive, element: e.props.element, index: e.props.index, path: e.props.path };
            e.props.children && (r.children = V(e.props.children)), t.push(r);
        }
        else
            t.push.apply(t, V(e.props.children)); })), t; }
    function G() { return G = Object.assign || function (e) { for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    } return e; }, G.apply(this, arguments); }
    function q(e, n) { if (null == e)
        return {}; var t, r, a = {}, i = Object.keys(e); for (r = 0; r < i.length; r++)
        t = i[r], n.indexOf(t) >= 0 || (a[t] = e[t]); return a; }
    var Y = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
    function K(t) { var r = t.basename, a = t.children, i = t.window, v = (0, n.useRef)(); null == v.current && (v.current = function (n) { void 0 === n && (n = {}); var t = n.window, r = void 0 === t ? document.defaultView : t, a = r.history; function i() { var e = r.location, n = e.pathname, t = e.search, i = e.hash, o = a.state || {}; return [o.idx, s({ pathname: n, search: t, hash: i, state: o.usr || null, key: o.key || "default" })]; } var o = null; r.addEventListener(c, (function () { if (o)
        x.call(o), o = null;
    else {
        var n = e.Pop, t = i(), r = t[0], a = t[1];
        if (x.length) {
            if (null != r) {
                var l = y - r;
                l && (o = { action: n, location: a, retry: function () { _(-1 * l); } }, _(l));
            }
        }
        else
            T(n);
    } })); var v = e.Pop, g = i(), y = g[0], b = g[1], w = f(), x = f(); function S(e) { return "string" === typeof e ? e : h(e); } function k(e, n) { return void 0 === n && (n = null), s(l({ pathname: b.pathname, hash: "", search: "" }, "string" === typeof e ? m(e) : e, { state: n, key: p() })); } function E(e, n) { return [{ usr: e.state, key: e.key, idx: n }, S(e)]; } function C(e, n, t) { return !x.length || (x.call({ action: e, location: n, retry: t }), !1); } function T(e) { v = e; var n = i(); y = n[0], b = n[1], w.call({ action: v, location: b }); } function _(e) { a.go(e); } null == y && (y = 0, a.replaceState(l({}, a.state, { idx: y }), "")); var A = { get action() { return v; }, get location() { return b; }, createHref: S, push: function n(t, i) { var o = e.Push, l = k(t, i); if (C(o, l, (function () { n(t, i); }))) {
            var s = E(l, y + 1), u = s[0], c = s[1];
            try {
                a.pushState(u, "", c);
            }
            catch (d) {
                r.location.assign(c);
            }
            T(o);
        } }, replace: function n(t, r) { var i = e.Replace, o = k(t, r); if (C(i, o, (function () { n(t, r); }))) {
            var l = E(o, y), s = l[0], u = l[1];
            a.replaceState(s, "", u), T(i);
        } }, go: _, back: function () { _(-1); }, forward: function () { _(1); }, listen: function (e) { return w.push(e); }, block: function (e) { var n = x.push(e); return 1 === x.length && r.addEventListener(u, d), function () { n(), x.length || r.removeEventListener(u, d); }; } }; return A; }({ window: i })); var g = v.current, y = o((0, n.useState)({ action: g.action, location: g.location }), 2), b = y[0], w = y[1]; return (0, n.useLayoutEffect)((function () { return g.listen(w); }), [g]), (0, n.createElement)(H, { basename: r, children: a, location: b.location, navigationType: b.action, navigator: g }); }
    var Q = (0, n.forwardRef)((function (e, t) { var r = e.onClick, a = e.reloadDocument, i = e.replace, o = void 0 !== i && i, l = e.state, s = e.target, u = e.to, c = q(e, Y), d = D(u), f = function (e, t) { var r = void 0 === t ? {} : t, a = r.target, i = r.replace, o = r.state, l = z(), s = N(), u = F(e); return (0, n.useCallback)((function (n) { if (0 === n.button && (!a || "_self" === a) && !function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(n)) {
        n.preventDefault();
        var t = !!i || h(s) === h(u);
        l(e, { replace: t, state: o });
    } }), [s, l, u, i, o, a, e]); }(u, { replace: o, state: l, target: s }); return (0, n.createElement)("a", G({}, c, { href: d, onClick: function (e) { r && r(e), e.defaultPrevented || a || f(e); }, ref: t, target: s })); }));
    var X = t(248), J = t(327), Z = t(164);
    var ee = function (e) { e(); }, ne = function () { return ee; }, te = n.createContext(null);
    function re() { return (0, n.useContext)(te); }
    var ae = function () { throw new Error("uSES not initialized!"); }, ie = ae, oe = function (e, n) { return e === n; };
    function le() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te, t = e === te ? re : function () { return (0, n.useContext)(e); }; return function (e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe; var a = t(), i = a.store, o = a.subscription, l = a.getServerState, s = ie(o.addNestedSub, i.getState, l || i.getState, e, r); return (0, n.useDebugValue)(s), s; }; }
    var se = le(), ue = t(110), ce = t.n(ue), de = t(441);
    var fe = { notify: function () { }, get: function () { return []; } };
    function pe(e, n) { var t, r = fe; function a() { o.onStateChange && o.onStateChange(); } function i() { t || (t = n ? n.addNestedSub(a) : e.subscribe(a), r = function () { var e = ne(), n = null, t = null; return { clear: function () { n = null, t = null; }, notify: function () { e((function () { for (var e = n; e;)
            e.callback(), e = e.next; })); }, get: function () { for (var e = [], t = n; t;)
            e.push(t), t = t.next; return e; }, subscribe: function (e) { var r = !0, a = t = { callback: e, next: null, prev: t }; return a.prev ? a.prev.next = a : n = a, function () { r && null !== n && (r = !1, a.next ? a.next.prev = a.prev : t = a.prev, a.prev ? a.prev.next = a.next : n = a.next); }; } }; }()); } var o = { addNestedSub: function (e) { return i(), r.subscribe(e); }, notifyNestedSubs: function () { r.notify(); }, handleChangeWrapper: a, isSubscribed: function () { return Boolean(t); }, trySubscribe: i, tryUnsubscribe: function () { t && (t(), t = void 0, r.clear(), r = fe); }, getListeners: function () { return r; } }; return o; }
    var he = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement) ? n.useLayoutEffect : n.useEffect;
    var me = function (e) { var t = e.store, r = e.context, a = e.children, i = e.serverState, o = (0, n.useMemo)((function () { var e = pe(t); return { store: t, subscription: e, getServerState: i ? function () { return i; } : void 0 }; }), [t, i]), l = (0, n.useMemo)((function () { return t.getState(); }), [t]); he((function () { var e = o.subscription; return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), l !== t.getState() && e.notifyNestedSubs(), function () { e.tryUnsubscribe(), e.onStateChange = void 0; }; }), [o, l]); var s = r || te; return n.createElement(s.Provider, { value: o }, a); };
    function ve() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te, t = e === te ? re : function () { return (0, n.useContext)(e); }; return function () { return t().store; }; }
    var ge = ve();
    function ye() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te, n = e === te ? ge : ve(e); return function () { return n().dispatch; }; }
    var be, we, xe = ye();
    function Se(e, n) { return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })); }
    be = J.useSyncExternalStoreWithSelector, ie = be, function (e) { e; }(X.useSyncExternalStore), we = Z.unstable_batchedUpdates, ee = we;
    var ke = t(613), Ee = t.n(ke);
    var Ce = function (e) { function n(e, r, s, u, f) { for (var p, h, m, v, w, S = 0, k = 0, E = 0, C = 0, T = 0, I = 0, j = m = p = 0, z = 0, M = 0, R = 0, F = 0, B = s.length, $ = B - 1, U = "", H = "", W = "", V = ""; z < B;) {
        if (h = s.charCodeAt(z), z === $ && 0 !== k + C + E + S && (0 !== k && (h = 47 === k ? 10 : 47), C = E = S = 0, B++, $++), 0 === k + C + E + S) {
            if (z === $ && (0 < M && (U = U.replace(d, "")), 0 < U.trim().length)) {
                switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10: break;
                    default: U += s.charAt(z);
                }
                h = 59;
            }
            switch (h) {
                case 123:
                    for (p = (U = U.trim()).charCodeAt(0), m = 1, F = ++z; z < B;) {
                        switch (h = s.charCodeAt(z)) {
                            case 123:
                                m++;
                                break;
                            case 125:
                                m--;
                                break;
                            case 47:
                                switch (h = s.charCodeAt(z + 1)) {
                                    case 42:
                                    case 47: e: {
                                        for (j = z + 1; j < $; ++j)
                                            switch (s.charCodeAt(j)) {
                                                case 47:
                                                    if (42 === h && 42 === s.charCodeAt(j - 1) && z + 2 !== j) {
                                                        z = j + 1;
                                                        break e;
                                                    }
                                                    break;
                                                case 10: if (47 === h) {
                                                    z = j + 1;
                                                    break e;
                                                }
                                            }
                                        z = j;
                                    }
                                }
                                break;
                            case 91: h++;
                            case 40: h++;
                            case 34:
                            case 39: for (; z++ < $ && s.charCodeAt(z) !== h;)
                                ;
                        }
                        if (0 === m)
                            break;
                        z++;
                    }
                    if (m = s.substring(F, z), 0 === p && (p = (U = U.replace(c, "").trim()).charCodeAt(0)), 64 === p) {
                        switch (0 < M && (U = U.replace(d, "")), h = U.charCodeAt(1)) {
                            case 100:
                            case 109:
                            case 115:
                            case 45:
                                M = r;
                                break;
                            default: M = L;
                        }
                        if (F = (m = n(r, M, m, h, f + 1)).length, 0 < D && (w = l(3, m, M = t(L, U, R), r, A, _, F, h, f, u), U = M.join(""), void 0 !== w && 0 === (F = (m = w.trim()).length) && (h = 0, m = "")), 0 < F)
                            switch (h) {
                                case 115: U = U.replace(x, o);
                                case 100:
                                case 109:
                                case 45:
                                    m = U + "{" + m + "}";
                                    break;
                                case 107:
                                    m = (U = U.replace(g, "$1 $2")) + "{" + m + "}", m = 1 === P || 2 === P && i("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                    break;
                                default: m = U + m, 112 === u && (H += m, m = "");
                            }
                        else
                            m = "";
                    }
                    else
                        m = n(r, t(r, U, R), m, u, f + 1);
                    W += m, m = R = M = j = p = 0, U = "", h = s.charCodeAt(++z);
                    break;
                case 125:
                case 59:
                    if (1 < (F = (U = (0 < M ? U.replace(d, "") : U).trim()).length))
                        switch (0 === j && (p = U.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (F = (U = U.replace(" ", ":")).length), 0 < D && void 0 !== (w = l(1, U, r, e, A, _, H.length, u, f, u)) && 0 === (F = (U = w.trim()).length) && (U = "\0\0"), p = U.charCodeAt(0), h = U.charCodeAt(1), p) {
                            case 0: break;
                            case 64: if (105 === h || 99 === h) {
                                V += U + s.charAt(z);
                                break;
                            }
                            default: 58 !== U.charCodeAt(F - 1) && (H += a(U, p, h, U.charCodeAt(2)));
                        }
                    R = M = j = p = 0, U = "", h = s.charCodeAt(++z);
            }
        }
        switch (h) {
            case 13:
            case 10:
                47 === k ? k = 0 : 0 === 1 + p && 107 !== u && 0 < U.length && (M = 1, U += "\0"), 0 < D * N && l(0, U, r, e, A, _, H.length, u, f, u), _ = 1, A++;
                break;
            case 59:
            case 125: if (0 === k + C + E + S) {
                _++;
                break;
            }
            default:
                switch (_++, v = s.charAt(z), h) {
                    case 9:
                    case 32:
                        if (0 === C + S + k)
                            switch (T) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    v = "";
                                    break;
                                default: 32 !== h && (v = " ");
                            }
                        break;
                    case 0:
                        v = "\\0";
                        break;
                    case 12:
                        v = "\\f";
                        break;
                    case 11:
                        v = "\\v";
                        break;
                    case 38:
                        0 === C + k + S && (M = R = 1, v = "\f" + v);
                        break;
                    case 108:
                        if (0 === C + k + S + O && 0 < j)
                            switch (z - j) {
                                case 2: 112 === T && 58 === s.charCodeAt(z - 3) && (O = T);
                                case 8: 111 === I && (O = I);
                            }
                        break;
                    case 58:
                        0 === C + k + S && (j = z);
                        break;
                    case 44:
                        0 === k + E + C + S && (M = 1, v += "\r");
                        break;
                    case 34:
                    case 39:
                        0 === k && (C = C === h ? 0 : 0 === C ? h : C);
                        break;
                    case 91:
                        0 === C + k + E && S++;
                        break;
                    case 93:
                        0 === C + k + E && S--;
                        break;
                    case 41:
                        0 === C + k + S && E--;
                        break;
                    case 40:
                        if (0 === C + k + S) {
                            if (0 === p)
                                if (2 * T + 3 * I === 533)
                                    ;
                                else
                                    p = 1;
                            E++;
                        }
                        break;
                    case 64:
                        0 === k + E + C + S + j + m && (m = 1);
                        break;
                    case 42:
                    case 47: if (!(0 < C + S + E))
                        switch (k) {
                            case 0:
                                switch (2 * h + 3 * s.charCodeAt(z + 1)) {
                                    case 235:
                                        k = 47;
                                        break;
                                    case 220: F = z, k = 42;
                                }
                                break;
                            case 42: 47 === h && 42 === T && F + 2 !== z && (33 === s.charCodeAt(F + 2) && (H += s.substring(F, z + 1)), v = "", k = 0);
                        }
                }
                0 === k && (U += v);
        }
        I = T, T = h, z++;
    } if (0 < (F = H.length)) {
        if (M = r, 0 < D && (void 0 !== (w = l(2, H, M, e, A, _, F, u, f, u)) && 0 === (H = w).length))
            return V + H + W;
        if (H = M.join(",") + "{" + H + "}", 0 !== P * O) {
            switch (2 !== P || i(H, 2) || (O = 0), O) {
                case 111:
                    H = H.replace(b, ":-moz-$1") + H;
                    break;
                case 112: H = H.replace(y, "::-webkit-input-$1") + H.replace(y, "::-moz-$1") + H.replace(y, ":-ms-input-$1") + H;
            }
            O = 0;
        }
    } return V + H + W; } function t(e, n, t) { var a = n.trim().split(m); n = a; var i = a.length, o = e.length; switch (o) {
        case 0:
        case 1:
            var l = 0;
            for (e = 0 === o ? "" : e[0] + " "; l < i; ++l)
                n[l] = r(e, n[l], t).trim();
            break;
        default:
            var s = l = 0;
            for (n = []; l < i; ++l)
                for (var u = 0; u < o; ++u)
                    n[s++] = r(e[u] + " ", a[l], t).trim();
    } return n; } function r(e, n, t) { var r = n.charCodeAt(0); switch (33 > r && (r = (n = n.trim()).charCodeAt(0)), r) {
        case 38: return n.replace(v, "$1" + e.trim());
        case 58: return e.trim() + n.replace(v, "$1" + e.trim());
        default: if (0 < 1 * t && 0 < n.indexOf("\f"))
            return n.replace(v, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim());
    } return e + n; } function a(e, n, t, r) { var o = e + ";", l = 2 * n + 3 * t + 4 * r; if (944 === l) {
        e = o.indexOf(":", 9) + 1;
        var s = o.substring(e, o.length - 1).trim();
        return s = o.substring(0, e).trim() + s + ";", 1 === P || 2 === P && i(s, 1) ? "-webkit-" + s + s : s;
    } if (0 === P || 2 === P && !i(o, 1))
        return o; switch (l) {
        case 1015: return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
        case 951: return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
        case 963: return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
        case 1009: if (100 !== o.charCodeAt(4))
            break;
        case 969:
        case 942: return "-webkit-" + o + o;
        case 978: return "-webkit-" + o + "-moz-" + o + o;
        case 1019:
        case 983: return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
        case 883:
            if (45 === o.charCodeAt(8))
                return "-webkit-" + o + o;
            if (0 < o.indexOf("image-set(", 11))
                return o.replace(T, "$1-webkit-$2") + o;
            break;
        case 932:
            if (45 === o.charCodeAt(4))
                switch (o.charCodeAt(5)) {
                    case 103: return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
                    case 115: return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
                    case 98: return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o;
                }
            return "-webkit-" + o + "-ms-" + o + o;
        case 964: return "-webkit-" + o + "-ms-flex-" + o + o;
        case 1023:
            if (99 !== o.charCodeAt(8))
                break;
            return "-webkit-box-pack" + (s = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + o + "-ms-flex-pack" + s + o;
        case 1005: return p.test(o) ? o.replace(f, ":-webkit-") + o.replace(f, ":-moz-") + o : o;
        case 1e3:
            switch (n = (s = o.substring(13).trim()).indexOf("-") + 1, s.charCodeAt(0) + s.charCodeAt(n)) {
                case 226:
                    s = o.replace(w, "tb");
                    break;
                case 232:
                    s = o.replace(w, "tb-rl");
                    break;
                case 220:
                    s = o.replace(w, "lr");
                    break;
                default: return o;
            }
            return "-webkit-" + o + "-ms-" + s + o;
        case 1017: if (-1 === o.indexOf("sticky", 9))
            break;
        case 975:
            switch (n = (o = e).length - 10, l = (s = (33 === o.charCodeAt(n) ? o.substring(0, n) : o).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | s.charCodeAt(7))) {
                case 203: if (111 > s.charCodeAt(8))
                    break;
                case 115:
                    o = o.replace(s, "-webkit-" + s) + ";" + o;
                    break;
                case 207:
                case 102: o = o.replace(s, "-webkit-" + (102 < l ? "inline-" : "") + "box") + ";" + o.replace(s, "-webkit-" + s) + ";" + o.replace(s, "-ms-" + s + "box") + ";" + o;
            }
            return o + ";";
        case 938:
            if (45 === o.charCodeAt(5))
                switch (o.charCodeAt(6)) {
                    case 105: return s = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + s + "-ms-flex-" + s + o;
                    case 115: return "-webkit-" + o + "-ms-flex-item-" + o.replace(k, "") + o;
                    default: return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(k, "") + o;
                }
            break;
        case 973:
        case 989: if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4))
            break;
        case 931:
        case 953:
            if (!0 === C.test(e))
                return 115 === (s = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? a(e.replace("stretch", "fill-available"), n, t, r).replace(":fill-available", ":stretch") : o.replace(s, "-webkit-" + s) + o.replace(s, "-moz-" + s.replace("fill-", "")) + o;
            break;
        case 962: if (o = "-webkit-" + o + (102 === o.charCodeAt(5) ? "-ms-" + o : "") + o, 211 === t + r && 105 === o.charCodeAt(13) && 0 < o.indexOf("transform", 10))
            return o.substring(0, o.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + o;
    } return o; } function i(e, n) { var t = e.indexOf(1 === n ? ":" : "{"), r = e.substring(0, 3 !== n ? t : 10); return t = e.substring(t + 1, e.length - 1), j(2 !== n ? r : r.replace(E, "$1"), t, n); } function o(e, n) { var t = a(n, n.charCodeAt(0), n.charCodeAt(1), n.charCodeAt(2)); return t !== n + ";" ? t.replace(S, " or ($1)").substring(4) : "(" + n + ")"; } function l(e, n, t, r, a, i, o, l, s, c) { for (var d, f = 0, p = n; f < D; ++f)
        switch (d = I[f].call(u, e, p, t, r, a, i, o, l, s, c)) {
            case void 0:
            case !1:
            case !0:
            case null: break;
            default: p = d;
        } if (p !== n)
        return p; } function s(e) { return void 0 !== (e = e.prefix) && (j = null, e ? "function" !== typeof e ? P = 1 : (P = 2, j = e) : P = 0), s; } function u(e, t) { var r = e; if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < D) {
        var a = l(-1, t, r, r, A, _, 0, 0, 0, 0);
        void 0 !== a && "string" === typeof a && (t = a);
    } var i = n(L, r, t, 0, 0); return 0 < D && (void 0 !== (a = l(-2, i, r, r, A, _, i.length, 0, 0, 0)) && (i = a)), "", O = 0, _ = A = 1, i; } var c = /^\0+/g, d = /[\0\r\f]/g, f = /: */g, p = /zoo|gra/, h = /([,: ])(transform)/g, m = /,\r+?/g, v = /([\t\r\n ])*\f?&/g, g = /@(k\w+)\s*(\S*)\s*/, y = /::(place)/g, b = /:(read-only)/g, w = /[svh]\w+-[tblr]{2}/, x = /\(\s*(.*)\s*\)/g, S = /([\s\S]*?);/g, k = /-self|flex-/g, E = /[^]*?(:[rp][el]a[\w-]+)[^]*/, C = /stretch|:\s*\w+\-(?:conte|avail)/, T = /([^-])(image-set\()/, _ = 1, A = 1, O = 0, P = 1, L = [], I = [], D = 0, j = null, N = 0; return u.use = function e(n) { switch (n) {
        case void 0:
        case null:
            D = I.length = 0;
            break;
        default: if ("function" === typeof n)
            I[D++] = n;
        else if ("object" === typeof n)
            for (var t = 0, r = n.length; t < r; ++t)
                e(n[t]);
        else
            N = 0 | !!n;
    } return e; }, u.set = s, void 0 !== e && s(e), u; }, Te = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
    var _e = function (e) { var n = Object.create(null); return function (t) { return void 0 === n[t] && (n[t] = e(t)), n[t]; }; }, Ae = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Oe = _e((function (e) { return Ae.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91; })), Pe = Oe;
    function Le() { return (Le = Object.assign || function (e) { for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    } return e; }).apply(this, arguments); }
    var Ie = function (e, n) { for (var t = [e[0]], r = 0, a = n.length; r < a; r += 1)
        t.push(n[r], e[r + 1]); return t; }, De = function (e) { return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, de.typeOf)(e); }, je = Object.freeze([]), Ne = Object.freeze({});
    function ze(e) { return "function" == typeof e; }
    function Me(e) { return e.displayName || e.name || "Component"; }
    function Re(e) { return e && "string" == typeof e.styledComponentId; }
    var Fe = "undefined" != typeof process && ({ NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.REACT_APP_SC_ATTR || { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.SC_ATTR) || "data-styled", Be = "undefined" != typeof window && "HTMLElement" in window, $e = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.REACT_APP_SC_DISABLE_SPEEDY && "" !== { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.REACT_APP_SC_DISABLE_SPEEDY && { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.SC_DISABLE_SPEEDY && "" !== { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.SC_DISABLE_SPEEDY && ("false" !== { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.SC_DISABLE_SPEEDY && { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.SC_DISABLE_SPEEDY)), Ue = {};
    function He(e) { for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        t[r - 1] = arguments[r]; throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")); }
    var We = function () { function e(e) { this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e; } var n = e.prototype; return n.indexOfGroup = function (e) { for (var n = 0, t = 0; t < e; t++)
        n += this.groupSizes[t]; return n; }, n.insertRules = function (e, n) { if (e >= this.groupSizes.length) {
        for (var t = this.groupSizes, r = t.length, a = r; e >= a;)
            (a <<= 1) < 0 && He(16, "" + e);
        this.groupSizes = new Uint32Array(a), this.groupSizes.set(t), this.length = a;
        for (var i = r; i < a; i++)
            this.groupSizes[i] = 0;
    } for (var o = this.indexOfGroup(e + 1), l = 0, s = n.length; l < s; l++)
        this.tag.insertRule(o, n[l]) && (this.groupSizes[e]++, o++); }, n.clearGroup = function (e) { if (e < this.length) {
        var n = this.groupSizes[e], t = this.indexOfGroup(e), r = t + n;
        this.groupSizes[e] = 0;
        for (var a = t; a < r; a++)
            this.tag.deleteRule(t);
    } }, n.getGroup = function (e) { var n = ""; if (e >= this.length || 0 === this.groupSizes[e])
        return n; for (var t = this.groupSizes[e], r = this.indexOfGroup(e), a = r + t, i = r; i < a; i++)
        n += this.tag.getRule(i) + "/*!sc*/\n"; return n; }, e; }(), Ve = new Map, Ge = new Map, qe = 1, Ye = function (e) { if (Ve.has(e))
        return Ve.get(e); for (; Ge.has(qe);)
        qe++; var n = qe++; return Ve.set(e, n), Ge.set(n, e), n; }, Ke = function (e) { return Ge.get(e); }, Qe = function (e, n) { n >= qe && (qe = n + 1), Ve.set(e, n), Ge.set(n, e); }, Xe = "style[" + Fe + '][data-styled-version="5.3.5"]', Je = new RegExp("^" + Fe + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ze = function (e, n, t) { for (var r, a = t.split(","), i = 0, o = a.length; i < o; i++)
        (r = a[i]) && e.registerName(n, r); }, en = function (e, n) { for (var t = (n.textContent || "").split("/*!sc*/\n"), r = [], a = 0, i = t.length; a < i; a++) {
        var o = t[a].trim();
        if (o) {
            var l = o.match(Je);
            if (l) {
                var s = 0 | parseInt(l[1], 10), u = l[2];
                0 !== s && (Qe(u, s), Ze(e, u, l[3]), e.getTag().insertRules(s, r)), r.length = 0;
            }
            else
                r.push(o);
        }
    } }, nn = function () { return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null; }, tn = function (e) { var n = document.head, t = e || n, r = document.createElement("style"), a = function (e) { for (var n = e.childNodes, t = n.length; t >= 0; t--) {
        var r = n[t];
        if (r && 1 === r.nodeType && r.hasAttribute(Fe))
            return r;
    } }(t), i = void 0 !== a ? a.nextSibling : null; r.setAttribute(Fe, "active"), r.setAttribute("data-styled-version", "5.3.5"); var o = nn(); return o && r.setAttribute("nonce", o), t.insertBefore(r, i), r; }, rn = function () { function e(e) { var n = this.element = tn(e); n.appendChild(document.createTextNode("")), this.sheet = function (e) { if (e.sheet)
        return e.sheet; for (var n = document.styleSheets, t = 0, r = n.length; t < r; t++) {
        var a = n[t];
        if (a.ownerNode === e)
            return a;
    } He(17); }(n), this.length = 0; } var n = e.prototype; return n.insertRule = function (e, n) { try {
        return this.sheet.insertRule(n, e), this.length++, !0;
    }
    catch (e) {
        return !1;
    } }, n.deleteRule = function (e) { this.sheet.deleteRule(e), this.length--; }, n.getRule = function (e) { var n = this.sheet.cssRules[e]; return void 0 !== n && "string" == typeof n.cssText ? n.cssText : ""; }, e; }(), an = function () { function e(e) { var n = this.element = tn(e); this.nodes = n.childNodes, this.length = 0; } var n = e.prototype; return n.insertRule = function (e, n) { if (e <= this.length && e >= 0) {
        var t = document.createTextNode(n), r = this.nodes[e];
        return this.element.insertBefore(t, r || null), this.length++, !0;
    } return !1; }, n.deleteRule = function (e) { this.element.removeChild(this.nodes[e]), this.length--; }, n.getRule = function (e) { return e < this.length ? this.nodes[e].textContent : ""; }, e; }(), on = function () { function e(e) { this.rules = [], this.length = 0; } var n = e.prototype; return n.insertRule = function (e, n) { return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0); }, n.deleteRule = function (e) { this.rules.splice(e, 1), this.length--; }, n.getRule = function (e) { return e < this.length ? this.rules[e] : ""; }, e; }(), ln = Be, sn = { isServer: !Be, useCSSOMInjection: !$e }, un = function () { function e(e, n, t) { void 0 === e && (e = Ne), void 0 === n && (n = {}), this.options = Le({}, sn, {}, e), this.gs = n, this.names = new Map(t), this.server = !!e.isServer, !this.server && Be && ln && (ln = !1, function (e) { for (var n = document.querySelectorAll(Xe), t = 0, r = n.length; t < r; t++) {
        var a = n[t];
        a && "active" !== a.getAttribute(Fe) && (en(e, a), a.parentNode && a.parentNode.removeChild(a));
    } }(this)); } e.registerId = function (e) { return Ye(e); }; var n = e.prototype; return n.reconstructWithOptions = function (n, t) { return void 0 === t && (t = !0), new e(Le({}, this.options, {}, n), this.gs, t && this.names || void 0); }, n.allocateGSInstance = function (e) { return this.gs[e] = (this.gs[e] || 0) + 1; }, n.getTag = function () { return this.tag || (this.tag = (t = (n = this.options).isServer, r = n.useCSSOMInjection, a = n.target, e = t ? new on(a) : r ? new rn(a) : new an(a), new We(e))); var e, n, t, r, a; }, n.hasNameForId = function (e, n) { return this.names.has(e) && this.names.get(e).has(n); }, n.registerName = function (e, n) { if (Ye(e), this.names.has(e))
        this.names.get(e).add(n);
    else {
        var t = new Set;
        t.add(n), this.names.set(e, t);
    } }, n.insertRules = function (e, n, t) { this.registerName(e, n), this.getTag().insertRules(Ye(e), t); }, n.clearNames = function (e) { this.names.has(e) && this.names.get(e).clear(); }, n.clearRules = function (e) { this.getTag().clearGroup(Ye(e)), this.clearNames(e); }, n.clearTag = function () { this.tag = void 0; }, n.toString = function () { return function (e) { for (var n = e.getTag(), t = n.length, r = "", a = 0; a < t; a++) {
        var i = Ke(a);
        if (void 0 !== i) {
            var o = e.names.get(i), l = n.getGroup(a);
            if (o && l && o.size) {
                var s = Fe + ".g" + a + '[id="' + i + '"]', u = "";
                void 0 !== o && o.forEach((function (e) { e.length > 0 && (u += e + ","); })), r += "" + l + s + '{content:"' + u + '"}/*!sc*/\n';
            }
        }
    } return r; }(this); }, e; }(), cn = /(a)(d)/gi, dn = function (e) { return String.fromCharCode(e + (e > 25 ? 39 : 97)); };
    function fn(e) { var n, t = ""; for (n = Math.abs(e); n > 52; n = n / 52 | 0)
        t = dn(n % 52) + t; return (dn(n % 52) + t).replace(cn, "$1-$2"); }
    var pn = function (e, n) { for (var t = n.length; t;)
        e = 33 * e ^ n.charCodeAt(--t); return e; }, hn = function (e) { return pn(5381, e); };
    function mn(e) { for (var n = 0; n < e.length; n += 1) {
        var t = e[n];
        if (ze(t) && !Re(t))
            return !1;
    } return !0; }
    var vn = hn("5.3.5"), gn = function () { function e(e, n, t) { this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === t || t.isStatic) && mn(e), this.componentId = n, this.baseHash = pn(vn, n), this.baseStyle = t, un.registerId(n); } return e.prototype.generateAndInjectStyles = function (e, n, t) { var r = this.componentId, a = []; if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(e, n, t)), this.isStatic && !t.hash)
        if (this.staticRulesId && n.hasNameForId(r, this.staticRulesId))
            a.push(this.staticRulesId);
        else {
            var i = Nn(this.rules, e, n, t).join(""), o = fn(pn(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(r, o)) {
                var l = t(i, "." + o, void 0, r);
                n.insertRules(r, o, l);
            }
            a.push(o), this.staticRulesId = o;
        }
    else {
        for (var s = this.rules.length, u = pn(this.baseHash, t.hash), c = "", d = 0; d < s; d++) {
            var f = this.rules[d];
            if ("string" == typeof f)
                c += f;
            else if (f) {
                var p = Nn(f, e, n, t), h = Array.isArray(p) ? p.join("") : p;
                u = pn(u, h + d), c += h;
            }
        }
        if (c) {
            var m = fn(u >>> 0);
            if (!n.hasNameForId(r, m)) {
                var v = t(c, "." + m, void 0, r);
                n.insertRules(r, m, v);
            }
            a.push(m);
        }
    } return a.join(" "); }, e; }(), yn = /^\s*\/\/.*$/gm, bn = [":", "[", ".", "#"];
    function wn(e) { var n, t, r, a, i = void 0 === e ? Ne : e, o = i.options, l = void 0 === o ? Ne : o, s = i.plugins, u = void 0 === s ? je : s, c = new Ce(l), d = [], f = function (e) { function n(n) { if (n)
        try {
            e(n + "}");
        }
        catch (e) { } } return function (t, r, a, i, o, l, s, u, c, d) { switch (t) {
        case 1:
            if (0 === c && 64 === r.charCodeAt(0))
                return e(r + ";"), "";
            break;
        case 2:
            if (0 === u)
                return r + "/*|*/";
            break;
        case 3: switch (u) {
            case 102:
            case 112: return e(a[0] + r), "";
            default: return r + (0 === d ? "/*|*/" : "");
        }
        case -2: r.split("/*|*/}").forEach(n);
    } }; }((function (e) { d.push(e); })), p = function (e, r, i) { return 0 === r && -1 !== bn.indexOf(i[t.length]) || i.match(a) ? e : "." + n; }; function h(e, i, o, l) { void 0 === l && (l = "&"); var s = e.replace(yn, ""), u = i && o ? o + " " + i + " { " + s + " }" : s; return n = l, t = i, r = new RegExp("\\" + t + "\\b", "g"), a = new RegExp("(\\" + t + "\\b){2,}"), c(o || !i ? "" : i, u); } return c.use([].concat(u, [function (e, n, a) { 2 === e && a.length && a[0].lastIndexOf(t) > 0 && (a[0] = a[0].replace(r, p)); }, f, function (e) { if (-2 === e) {
            var n = d;
            return d = [], n;
        } }])), h.hash = u.length ? u.reduce((function (e, n) { return n.name || He(15), pn(e, n.name); }), 5381).toString() : "", h; }
    var xn = n.createContext(), Sn = (xn.Consumer, n.createContext()), kn = (Sn.Consumer, new un), En = wn();
    function Cn() { return (0, n.useContext)(xn) || kn; }
    function Tn() { return (0, n.useContext)(Sn) || En; }
    function _n(e) { var t = (0, n.useState)(e.stylisPlugins), r = t[0], a = t[1], i = Cn(), o = (0, n.useMemo)((function () { var n = i; return e.sheet ? n = e.sheet : e.target && (n = n.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (n = n.reconstructWithOptions({ useCSSOMInjection: !1 })), n; }), [e.disableCSSOMInjection, e.sheet, e.target]), l = (0, n.useMemo)((function () { return wn({ options: { prefix: !e.disableVendorPrefixes }, plugins: r }); }), [e.disableVendorPrefixes, r]); return (0, n.useEffect)((function () { Ee()(r, e.stylisPlugins) || a(e.stylisPlugins); }), [e.stylisPlugins]), n.createElement(xn.Provider, { value: o }, n.createElement(Sn.Provider, { value: l }, e.children)); }
    var An = function () { function e(e, n) { var t = this; this.inject = function (e, n) { void 0 === n && (n = En); var r = t.name + n.hash; e.hasNameForId(t.id, r) || e.insertRules(t.id, r, n(t.rules, r, "@keyframes")); }, this.toString = function () { return He(12, String(t.name)); }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = n; } return e.prototype.getName = function (e) { return void 0 === e && (e = En), this.name + e.hash; }, e; }(), On = /([A-Z])/, Pn = /([A-Z])/g, Ln = /^ms-/, In = function (e) { return "-" + e.toLowerCase(); };
    function Dn(e) { return On.test(e) ? e.replace(Pn, In).replace(Ln, "-ms-") : e; }
    var jn = function (e) { return null == e || !1 === e || "" === e; };
    function Nn(e, n, t, r) { if (Array.isArray(e)) {
        for (var a, i = [], o = 0, l = e.length; o < l; o += 1)
            "" !== (a = Nn(e[o], n, t, r)) && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
        return i;
    } return jn(e) ? "" : Re(e) ? "." + e.styledComponentId : ze(e) ? "function" != typeof (s = e) || s.prototype && s.prototype.isReactComponent || !n ? e : Nn(e(n), n, t, r) : e instanceof An ? t ? (e.inject(t, r), e.getName(r)) : e : De(e) ? function e(n, t) { var r, a, i = []; for (var o in n)
        n.hasOwnProperty(o) && !jn(n[o]) && (Array.isArray(n[o]) && n[o].isCss || ze(n[o]) ? i.push(Dn(o) + ":", n[o], ";") : De(n[o]) ? i.push.apply(i, e(n[o], o)) : i.push(Dn(o) + ": " + (r = o, (null == (a = n[o]) || "boolean" == typeof a || "" === a ? "" : "number" != typeof a || 0 === a || r in Te ? String(a).trim() : a + "px") + ";"))); return t ? [t + " {"].concat(i, ["}"]) : i; }(e) : e.toString(); var s; }
    var zn = function (e) { return Array.isArray(e) && (e.isCss = !0), e; };
    function Mn(e) { for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        t[r - 1] = arguments[r]; return ze(e) || De(e) ? zn(Nn(Ie(je, [e].concat(t)))) : 0 === t.length && 1 === e.length && "string" == typeof e[0] ? e : zn(Nn(Ie(e, t))); }
    new Set;
    var Rn = function (e, n, t) { return void 0 === t && (t = Ne), e.theme !== t.theme && e.theme || n || t.theme; }, Fn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bn = /(^-|-$)/g;
    function $n(e) { return e.replace(Fn, "-").replace(Bn, ""); }
    var Un = function (e) { return fn(hn(e) >>> 0); };
    function Hn(e) { return "string" == typeof e && !0; }
    var Wn = function (e) { return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e); }, Vn = function (e) { return "__proto__" !== e && "constructor" !== e && "prototype" !== e; };
    function Gn(e, n, t) { var r = e[t]; Wn(n) && Wn(r) ? qn(r, n) : e[t] = n; }
    function qn(e) { for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        t[r - 1] = arguments[r]; for (var a = 0, i = t; a < i.length; a++) {
        var o = i[a];
        if (Wn(o))
            for (var l in o)
                Vn(l) && Gn(e, o[l], l);
    } return e; }
    var Yn = n.createContext();
    Yn.Consumer;
    function Kn(e) { var t = (0, n.useContext)(Yn), r = (0, n.useMemo)((function () { return function (e, n) { return e ? ze(e) ? e(n) : Array.isArray(e) || "object" != typeof e ? He(8) : n ? Le({}, n, {}, e) : e : He(14); }(e.theme, t); }), [e.theme, t]); return e.children ? n.createElement(Yn.Provider, { value: r }, e.children) : null; }
    var Qn = {};
    function Xn(e, t, r) { var a = Re(e), i = !Hn(e), o = t.attrs, l = void 0 === o ? je : o, s = t.componentId, u = void 0 === s ? function (e, n) { var t = "string" != typeof e ? "sc" : $n(e); Qn[t] = (Qn[t] || 0) + 1; var r = t + "-" + Un("5.3.5" + t + Qn[t]); return n ? n + "-" + r : r; }(t.displayName, t.parentComponentId) : s, c = t.displayName, d = void 0 === c ? function (e) { return Hn(e) ? "styled." + e : "Styled(" + Me(e) + ")"; }(e) : c, f = t.displayName && t.componentId ? $n(t.displayName) + "-" + t.componentId : t.componentId || u, p = a && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, h = t.shouldForwardProp; a && e.shouldForwardProp && (h = t.shouldForwardProp ? function (n, r, a) { return e.shouldForwardProp(n, r, a) && t.shouldForwardProp(n, r, a); } : e.shouldForwardProp); var m, v = new gn(r, f, a ? e.componentStyle : void 0), g = v.isStatic && 0 === l.length, y = function (e, t) { return function (e, t, r, a) { var i = e.attrs, o = e.componentStyle, l = e.defaultProps, s = e.foldedComponentIds, u = e.shouldForwardProp, c = e.styledComponentId, d = e.target, f = function (e, n, t) { void 0 === e && (e = Ne); var r = Le({}, n, { theme: e }), a = {}; return t.forEach((function (e) { var n, t, i, o = e; for (n in ze(o) && (o = o(r)), o)
        r[n] = a[n] = "className" === n ? (t = a[n], i = o[n], t && i ? t + " " + i : t || i) : o[n]; })), [r, a]; }(Rn(t, (0, n.useContext)(Yn), l) || Ne, t, i), p = f[0], h = f[1], m = function (e, n, t, r) { var a = Cn(), i = Tn(); return n ? e.generateAndInjectStyles(Ne, a, i) : e.generateAndInjectStyles(t, a, i); }(o, a, p), v = r, g = h.$as || t.$as || h.as || t.as || d, y = Hn(g), b = h !== t ? Le({}, t, {}, h) : t, w = {}; for (var x in b)
        "$" !== x[0] && "as" !== x && ("forwardedAs" === x ? w.as = b[x] : (u ? u(x, Pe, g) : !y || Pe(x)) && (w[x] = b[x])); return t.style && h.style !== t.style && (w.style = Le({}, t.style, {}, h.style)), w.className = Array.prototype.concat(s, c, m !== c ? m : null, t.className, h.className).filter(Boolean).join(" "), w.ref = v, (0, n.createElement)(g, w); }(m, e, t, g); }; return y.displayName = d, (m = n.forwardRef(y)).attrs = p, m.componentStyle = v, m.displayName = d, m.shouldForwardProp = h, m.foldedComponentIds = a ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : je, m.styledComponentId = f, m.target = a ? e.target : e, m.withComponent = function (e) { var n = t.componentId, a = function (e, n) { if (null == e)
        return {}; var t, r, a = {}, i = Object.keys(e); for (r = 0; r < i.length; r++)
        t = i[r], n.indexOf(t) >= 0 || (a[t] = e[t]); return a; }(t, ["componentId"]), i = n && n + "-" + (Hn(e) ? e : $n(Me(e))); return Xn(e, Le({}, a, { attrs: p, componentId: i }), r); }, Object.defineProperty(m, "defaultProps", { get: function () { return this._foldedDefaultProps; }, set: function (n) { this._foldedDefaultProps = a ? qn({}, e.defaultProps, n) : n; } }), m.toString = function () { return "." + m.styledComponentId; }, i && ce()(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), m; }
    var Jn = function (e) { return function e(n, t, r) { if (void 0 === r && (r = Ne), !(0, de.isValidElementType)(t))
        return He(1, String(t)); var a = function () { return n(t, r, Mn.apply(void 0, arguments)); }; return a.withConfig = function (a) { return e(n, t, Le({}, r, {}, a)); }, a.attrs = function (a) { return e(n, t, Le({}, r, { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) })); }, a; }(Xn, e); };
    ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function (e) { Jn[e] = Jn(e); }));
    var Zn = function () { function e(e, n) { this.rules = e, this.componentId = n, this.isStatic = mn(e), un.registerId(this.componentId + 1); } var n = e.prototype; return n.createStyles = function (e, n, t, r) { var a = r(Nn(this.rules, n, t, r).join(""), ""), i = this.componentId + e; t.insertRules(i, i, a); }, n.removeStyles = function (e, n) { n.clearRules(this.componentId + e); }, n.renderStyles = function (e, n, t, r) { e > 2 && un.registerId(this.componentId + e), this.removeStyles(e, t), this.createStyles(e, n, t, r); }, e; }();
    function et(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        r[a - 1] = arguments[a]; var i = Mn.apply(void 0, [e].concat(r)), o = "sc-global-" + Un(JSON.stringify(i)), l = new Zn(i, o); function s(e) { var t = Cn(), r = Tn(), a = (0, n.useContext)(Yn), i = (0, n.useRef)(t.allocateGSInstance(o)).current; return t.server && u(i, e, t, a, r), (0, n.useLayoutEffect)((function () { if (!t.server)
        return u(i, e, t, a, r), function () { return l.removeStyles(i, t); }; }), [i, e, t, a, r]), null; } function u(e, n, t, r, a) { if (l.isStatic)
        l.renderStyles(e, Ue, t, a);
    else {
        var i = Le({}, n, { theme: Rn(n, r, s.defaultProps) });
        l.renderStyles(e, i, t, a);
    } } return n.memo(s); }
    !function () { function e() { var e = this; this._emitSheetCSS = function () { var n = e.instance.toString(); if (!n)
        return ""; var t = nn(); return "<style " + [t && 'nonce="' + t + '"', Fe + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") + ">" + n + "</style>"; }, this.getStyleTags = function () { return e.sealed ? He(2) : e._emitSheetCSS(); }, this.getStyleElement = function () { var t; if (e.sealed)
        return He(2); var r = ((t = {})[Fe] = "", t["data-styled-version"] = "5.3.5", t.dangerouslySetInnerHTML = { __html: e.instance.toString() }, t), a = nn(); return a && (r.nonce = a), [n.createElement("style", Le({}, r, { key: "sc-0-0" }))]; }, this.seal = function () { e.sealed = !0; }, this.instance = new un({ isServer: !0 }), this.sealed = !1; } var t = e.prototype; t.collectStyles = function (e) { return this.sealed ? He(2) : n.createElement(_n, { sheet: this.instance }, e); }, t.interleaveWithNodeStream = function (e) { return He(3); }; }();
    var nt, tt, rt = Jn, at = et(nt || (nt = Se(['\n  html {\n    height: 100%;\n    min-height: 100%;\n  }\n\n  body {\n    height: 100%;\n    font: 100%/1.2 "Poppins", sans-serif;\n  }\n\n  div#root {\n    height: 100%;\n    width: 100%;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    font-family: inherit;\n  }\n\n  button {\n    padding: 0;\n    border: none;\n    background: none;\n    cursor: pointer;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n']))), it = et(tt || (tt = Se(['\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n'])));
    function ot(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e; }
    function lt(e, n) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function (n) { return Object.getOwnPropertyDescriptor(e, n).enumerable; }))), t.push.apply(t, r);
    } return t; }
    function st(e) { for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? lt(Object(t), !0).forEach((function (n) { ot(e, n, t[n]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : lt(Object(t)).forEach((function (n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n)); }));
    } return e; }
    function ut(e) { return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "; }
    var ct = "function" === typeof Symbol && Symbol.observable || "@@observable", dt = function () { return Math.random().toString(36).substring(7).split("").join("."); }, ft = { INIT: "@@redux/INIT" + dt(), REPLACE: "@@redux/REPLACE" + dt(), PROBE_UNKNOWN_ACTION: function () { return "@@redux/PROBE_UNKNOWN_ACTION" + dt(); } };
    function pt(e) { if ("object" !== typeof e || null === e)
        return !1; for (var n = e; null !== Object.getPrototypeOf(n);)
        n = Object.getPrototypeOf(n); return Object.getPrototypeOf(e) === n; }
    function ht(e, n, t) { var r; if ("function" === typeof n && "function" === typeof t || "function" === typeof t && "function" === typeof arguments[3])
        throw new Error(ut(0)); if ("function" === typeof n && "undefined" === typeof t && (t = n, n = void 0), "undefined" !== typeof t) {
        if ("function" !== typeof t)
            throw new Error(ut(1));
        return t(ht)(e, n);
    } if ("function" !== typeof e)
        throw new Error(ut(2)); var a = e, i = n, o = [], l = o, s = !1; function u() { l === o && (l = o.slice()); } function c() { if (s)
        throw new Error(ut(3)); return i; } function d(e) { if ("function" !== typeof e)
        throw new Error(ut(4)); if (s)
        throw new Error(ut(5)); var n = !0; return u(), l.push(e), function () { if (n) {
        if (s)
            throw new Error(ut(6));
        n = !1, u();
        var t = l.indexOf(e);
        l.splice(t, 1), o = null;
    } }; } function f(e) { if (!pt(e))
        throw new Error(ut(7)); if ("undefined" === typeof e.type)
        throw new Error(ut(8)); if (s)
        throw new Error(ut(9)); try {
        s = !0, i = a(i, e);
    }
    finally {
        s = !1;
    } for (var n = o = l, t = 0; t < n.length; t++) {
        (0, n[t])();
    } return e; } function p(e) { if ("function" !== typeof e)
        throw new Error(ut(10)); a = e, f({ type: ft.REPLACE }); } function h() { var e, n = d; return (e = { subscribe: function (e) { if ("object" !== typeof e || null === e)
            throw new Error(ut(11)); function t() { e.next && e.next(c()); } return t(), { unsubscribe: n(t) }; } })[ct] = function () { return this; }, e; } return f({ type: ft.INIT }), (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: p })[ct] = h, r; }
    function mt() { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
        n[t] = arguments[t]; return 0 === n.length ? function (e) { return e; } : 1 === n.length ? n[0] : n.reduce((function (e, n) { return function () { return e(n.apply(void 0, arguments)); }; })); }
    function vt(e) { return function (n) { var t = n.dispatch, r = n.getState; return function (n) { return function (a) { return "function" === typeof a ? a(t, r, e) : n(a); }; }; }; }
    var gt = vt();
    gt.withExtraArgument = vt;
    var yt = gt, bt = { stores: [], isLoading: !1, error: null };
    var wt = { LOAD_DATA_START: "FEATURED_STORES/LOAD_DATA_START", LOAD_DATA_SUCCESS: "FEATURED_STORES/LOAD_DATA_SUCCESS", LOAD_DATA_FAIL: "FEATURED_STORES/LOAD_DATA_FAIL" };
    function xt(e) { return xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, xt(e); }
    function St() { St = function () { return e; }; var e = {}, n = Object.prototype, t = n.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {}, a = r.iterator || "@@iterator", i = r.asyncIterator || "@@asyncIterator", o = r.toStringTag || "@@toStringTag"; function l(e, n, t) { return Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }), e[n]; } try {
        l({}, "");
    }
    catch (T) {
        l = function (e, n, t) { return e[n] = t; };
    } function s(e, n, t, r) { var a = n && n.prototype instanceof d ? n : d, i = Object.create(a.prototype), o = new k(r || []); return i._invoke = function (e, n, t) { var r = "suspendedStart"; return function (a, i) { if ("executing" === r)
        throw new Error("Generator is already running"); if ("completed" === r) {
        if ("throw" === a)
            throw i;
        return C();
    } for (t.method = a, t.arg = i;;) {
        var o = t.delegate;
        if (o) {
            var l = w(o, t);
            if (l) {
                if (l === c)
                    continue;
                return l;
            }
        }
        if ("next" === t.method)
            t.sent = t._sent = t.arg;
        else if ("throw" === t.method) {
            if ("suspendedStart" === r)
                throw r = "completed", t.arg;
            t.dispatchException(t.arg);
        }
        else
            "return" === t.method && t.abrupt("return", t.arg);
        r = "executing";
        var s = u(e, n, t);
        if ("normal" === s.type) {
            if (r = t.done ? "completed" : "suspendedYield", s.arg === c)
                continue;
            return { value: s.arg, done: t.done };
        }
        "throw" === s.type && (r = "completed", t.method = "throw", t.arg = s.arg);
    } }; }(e, t, o), i; } function u(e, n, t) { try {
        return { type: "normal", arg: e.call(n, t) };
    }
    catch (T) {
        return { type: "throw", arg: T };
    } } e.wrap = s; var c = {}; function d() { } function f() { } function p() { } var h = {}; l(h, a, (function () { return this; })); var m = Object.getPrototypeOf, v = m && m(m(E([]))); v && v !== n && t.call(v, a) && (h = v); var g = p.prototype = d.prototype = Object.create(h); function y(e) { ["next", "throw", "return"].forEach((function (n) { l(e, n, (function (e) { return this._invoke(n, e); })); })); } function b(e, n) { function r(a, i, o, l) { var s = u(e[a], e, i); if ("throw" !== s.type) {
        var c = s.arg, d = c.value;
        return d && "object" == xt(d) && t.call(d, "__await") ? n.resolve(d.__await).then((function (e) { r("next", e, o, l); }), (function (e) { r("throw", e, o, l); })) : n.resolve(d).then((function (e) { c.value = e, o(c); }), (function (e) { return r("throw", e, o, l); }));
    } l(s.arg); } var a; this._invoke = function (e, t) { function i() { return new n((function (n, a) { r(e, t, n, a); })); } return a = a ? a.then(i, i) : i(); }; } function w(e, n) { var t = e.iterator[n.method]; if (void 0 === t) {
        if (n.delegate = null, "throw" === n.method) {
            if (e.iterator.return && (n.method = "return", n.arg = void 0, w(e, n), "throw" === n.method))
                return c;
            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return c;
    } var r = u(t, e.iterator, n.arg); if ("throw" === r.type)
        return n.method = "throw", n.arg = r.arg, n.delegate = null, c; var a = r.arg; return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, c) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, c); } function x(e) { var n = { tryLoc: e[0] }; 1 in e && (n.catchLoc = e[1]), 2 in e && (n.finallyLoc = e[2], n.afterLoc = e[3]), this.tryEntries.push(n); } function S(e) { var n = e.completion || {}; n.type = "normal", delete n.arg, e.completion = n; } function k(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(x, this), this.reset(!0); } function E(e) { if (e) {
        var n = e[a];
        if (n)
            return n.call(e);
        if ("function" == typeof e.next)
            return e;
        if (!isNaN(e.length)) {
            var r = -1, i = function n() { for (; ++r < e.length;)
                if (t.call(e, r))
                    return n.value = e[r], n.done = !1, n; return n.value = void 0, n.done = !0, n; };
            return i.next = i;
        }
    } return { next: C }; } function C() { return { value: void 0, done: !0 }; } return f.prototype = p, l(g, "constructor", p), l(p, "constructor", f), f.displayName = l(p, o, "GeneratorFunction"), e.isGeneratorFunction = function (e) { var n = "function" == typeof e && e.constructor; return !!n && (n === f || "GeneratorFunction" === (n.displayName || n.name)); }, e.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, l(e, o, "GeneratorFunction")), e.prototype = Object.create(g), e; }, e.awrap = function (e) { return { __await: e }; }, y(b.prototype), l(b.prototype, i, (function () { return this; })), e.AsyncIterator = b, e.async = function (n, t, r, a, i) { void 0 === i && (i = Promise); var o = new b(s(n, t, r, a), i); return e.isGeneratorFunction(t) ? o : o.next().then((function (e) { return e.done ? e.value : o.next(); })); }, y(g), l(g, o, "Generator"), l(g, a, (function () { return this; })), l(g, "toString", (function () { return "[object Generator]"; })), e.keys = function (e) { var n = []; for (var t in e)
        n.push(t); return n.reverse(), function t() { for (; n.length;) {
        var r = n.pop();
        if (r in e)
            return t.value = r, t.done = !1, t;
    } return t.done = !0, t; }; }, e.values = E, k.prototype = { constructor: k, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
            for (var n in this)
                "t" === n.charAt(0) && t.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0); }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type)
            throw e.arg; return this.rval; }, dispatchException: function (e) { if (this.done)
            throw e; var n = this; function r(t, r) { return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = void 0), !!r; } for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a], o = i.completion;
            if ("root" === i.tryLoc)
                return r("end");
            if (i.tryLoc <= this.prev) {
                var l = t.call(i, "catchLoc"), s = t.call(i, "finallyLoc");
                if (l && s) {
                    if (this.prev < i.catchLoc)
                        return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc)
                        return r(i.finallyLoc);
                }
                else if (l) {
                    if (this.prev < i.catchLoc)
                        return r(i.catchLoc, !0);
                }
                else {
                    if (!s)
                        throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc)
                        return r(i.finallyLoc);
                }
            }
        } }, abrupt: function (e, n) { for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var a = this.tryEntries[r];
            if (a.tryLoc <= this.prev && t.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                var i = a;
                break;
            }
        } i && ("break" === e || "continue" === e) && i.tryLoc <= n && n <= i.finallyLoc && (i = null); var o = i ? i.completion : {}; return o.type = e, o.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, c) : this.complete(o); }, complete: function (e, n) { if ("throw" === e.type)
            throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && n && (this.next = n), c; }, finish: function (e) { for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var t = this.tryEntries[n];
            if (t.finallyLoc === e)
                return this.complete(t.completion, t.afterLoc), S(t), c;
        } }, catch: function (e) { for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var t = this.tryEntries[n];
            if (t.tryLoc === e) {
                var r = t.completion;
                if ("throw" === r.type) {
                    var a = r.arg;
                    S(t);
                }
                return a;
            }
        } throw new Error("illegal catch attempt"); }, delegateYield: function (e, n, t) { return this.delegate = { iterator: E(e), resultName: n, nextLoc: t }, "next" === this.method && (this.arg = void 0), c; } }, e; }
    function kt(e, n, t, r, a, i, o) { try {
        var l = e[i](o), s = l.value;
    }
    catch (u) {
        return void t(u);
    } l.done ? n(s) : Promise.resolve(s).then(r, a); }
    function Et(e) { return function () { var n = this, t = arguments; return new Promise((function (r, a) { var i = e.apply(n, t); function o(e) { kt(i, r, a, o, l, "next", e); } function l(e) { kt(i, r, a, o, l, "throw", e); } o(void 0); })); }; }
    var Ct = "https://cupomcupomcupomcupom.herokuapp.com/api", Tt = { method: "GET" };
    function _t(e) { return At.apply(this, arguments); }
    function At() { return At = Et(St().mark((function e(n) { var t, r, a, i, l, s = arguments; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return t = s.length > 1 && void 0 !== s[1] ? s[1] : {}, r = s.length > 2 && void 0 !== s[2] ? s[2] : Tt, a = Object.entries(t).map((function (e) { var n = o(e, 2), t = n[0], r = n[1]; return "".concat(t, "=").concat(r); })).join("&"), i = a ? "".concat(Ct).concat(n, "?").concat(a) : "".concat(Ct).concat(n), console.log(i), e.next = 7, fetch(i, r);
            case 7: return l = e.sent, e.next = 10, l.json();
            case 10: return e.abrupt("return", e.sent);
            case 11:
            case "end": return e.stop();
        } }), e); }))), At.apply(this, arguments); }
    function Ot(e, n) { return { type: e, payload: n }; }
    function Pt(e) { return Array.apply(null, Array(e)); }
    function Lt() { return Lt = Et(St().mark((function e(n, t) { var r, a, i, o; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return e.next = 2, navigator.permissions.query({ name: "clipboard-write" });
            case 2:
                if (r = e.sent, a = r.state, !navigator.clipboard || "denied" === a) {
                    e.next = 16;
                    break;
                }
                return e.prev = 5, i = navigator.clipboard, e.next = 9, i.writeText(n);
            case 9: return t && t(), e.abrupt("return");
            case 13: e.prev = 13, e.t0 = e.catch(5), console.error(e.t0);
            case 16: (o = document.createElement("input")).value = n, document.body.appendChild(o), o.select(), document.execCommand("copy") && t && t(), document.body.removeChild(o);
            case 23:
            case "end": return e.stop();
        } }), e, null, [[5, 13]]); }))), Lt.apply(this, arguments); }
    function It() { return Dt.apply(this, arguments); }
    function Dt() { return Dt = Et(St().mark((function e() { var n, t; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return "/stores/featured", e.next = 3, _t("/stores/featured");
            case 3: return n = e.sent, t = n.data, e.abrupt("return", t);
            case 6:
            case "end": return e.stop();
        } }), e); }))), Dt.apply(this, arguments); }
    function jt() { return Ot(wt.LOAD_DATA_START); }
    function Nt(e) { return Ot(wt.LOAD_DATA_SUCCESS, e); }
    function zt(e) { return Ot(wt.LOAD_DATA_FAIL, e); }
    function Mt(e) { return Rt.apply(this, arguments); }
    function Rt() { return (Rt = Et(St().mark((function e(n) { var t; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return n(jt()), e.prev = 1, e.next = 4, It();
            case 4:
                t = e.sent, n(Nt(t)), e.next = 11;
                break;
            case 8: e.prev = 8, e.t0 = e.catch(1), n(zt(e.t0));
            case 11:
            case "end": return e.stop();
        } }), e, null, [[1, 8]]); })))).apply(this, arguments); }
    var Ft = "NOT_FOUND";
    var Bt = function (e, n) { return e === n; };
    function $t(e, n) { var t = "object" === typeof n ? n : { equalityCheck: n }, r = t.equalityCheck, a = void 0 === r ? Bt : r, i = t.maxSize, o = void 0 === i ? 1 : i, l = t.resultEqualityCheck, s = function (e) { return function (n, t) { if (null === n || null === t || n.length !== t.length)
        return !1; for (var r = n.length, a = 0; a < r; a++)
        if (!e(n[a], t[a]))
            return !1; return !0; }; }(a), u = 1 === o ? function (e) { var n; return { get: function (t) { return n && e(n.key, t) ? n.value : Ft; }, put: function (e, t) { n = { key: e, value: t }; }, getEntries: function () { return n ? [n] : []; }, clear: function () { n = void 0; } }; }(s) : function (e, n) { var t = []; function r(e) { var r = t.findIndex((function (t) { return n(e, t.key); })); if (r > -1) {
        var a = t[r];
        return r > 0 && (t.splice(r, 1), t.unshift(a)), a.value;
    } return Ft; } return { get: r, put: function (n, a) { r(n) === Ft && (t.unshift({ key: n, value: a }), t.length > e && t.pop()); }, getEntries: function () { return t; }, clear: function () { t = []; } }; }(o, s); function c() { var n = u.get(arguments); if (n === Ft) {
        if (n = e.apply(null, arguments), l) {
            var t = u.getEntries(), r = t.find((function (e) { return l(e.value, n); }));
            r && (n = r.value);
        }
        u.put(arguments, n);
    } return n; } return c.clearCache = function () { return u.clear(); }, c; }
    function Ut(e) { var n = Array.isArray(e[0]) ? e[0] : e; if (!n.every((function (e) { return "function" === typeof e; }))) {
        var t = n.map((function (e) { return "function" === typeof e ? "function " + (e.name || "unnamed") + "()" : typeof e; })).join(", ");
        throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + t + "]");
    } return n; }
    function Ht(e) { for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        t[r - 1] = arguments[r]; var a = function () { for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a]; var i, o = 0, l = { memoizeOptions: void 0 }, s = r.pop(); if ("object" === typeof s && (l = s, s = r.pop()), "function" !== typeof s)
        throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof s + "]"); var u = l, c = u.memoizeOptions, d = void 0 === c ? t : c, f = Array.isArray(d) ? d : [d], p = Ut(r), h = e.apply(void 0, [function () { return o++, s.apply(null, arguments); }].concat(f)), m = e((function () { for (var e = [], n = p.length, t = 0; t < n; t++)
        e.push(p[t].apply(null, arguments)); return i = h.apply(null, e); })); return Object.assign(m, { resultFunc: s, memoizedResultFunc: h, dependencies: p, lastResult: function () { return i; }, recomputations: function () { return o; }, resetRecomputations: function () { return o = 0; } }), m; }; return a; }
    var Wt = Ht($t), Vt = function (e) { return e.featuredStores; }, Gt = (Wt(Vt, (function (e) { return e.stores; })), Wt(Vt, (function (e) { return e.isLoading; })), Wt(Vt, (function (e) { return e.error; })), { coupons: [], isLoading: !1, error: null });
    var qt = function () { var e = Et(St().mark((function e() { var n, t; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return "/coupons/featured", e.next = 3, _t("/coupons/featured");
            case 3: return n = e.sent, t = n.data, e.abrupt("return", t);
            case 6:
            case "end": return e.stop();
        } }), e); }))); return function () { return e.apply(this, arguments); }; }();
    function Yt() { return Ot(er.LOAD_DATA_START); }
    function Kt(e) { return Ot(er.LOAD_DATA_SUCCESS, e); }
    function Qt(e) { return Ot(er.LOAD_DATA_FAIL, e); }
    function Xt(e) { return Jt.apply(this, arguments); }
    function Jt() { return (Jt = Et(St().mark((function e(n) { var t; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return n(Yt()), e.prev = 1, e.next = 4, qt();
            case 4:
                t = e.sent, n(Kt(t)), e.next = 11;
                break;
            case 8: e.prev = 8, e.t0 = e.catch(1), n(Qt(e.t0));
            case 11:
            case "end": return e.stop();
        } }), e, null, [[1, 8]]); })))).apply(this, arguments); }
    var Zt = function (e) { return e.featuredCoupons; }, er = (Wt(Zt, (function (e) { return e.coupons; })), Wt(Zt, (function (e) { return e.isLoading; })), Wt(Zt, (function (e) { return e.error; })), { LOAD_DATA_START: "FEATURED_COUPONS/LOAD_DATA_START", LOAD_DATA_SUCCESS: "FEATURED_COUPONS/LOAD_DATA_SUCCESS", LOAD_DATA_FAIL: "FEATURED_COUPONS/LOAD_DATA_FAIL" }), nr = { query: { filters: { store: !1, category: !1, keyword: !1 }, searchTerm: "" }, coupons: [], isLoading: !1, error: !1 };
    var tr = function () { var e = Et(St().mark((function e(n) { var t, r, a, i, l, s; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return t = n.searchTerm, r = n.filters, "/coupons/search", a = Object.entries(r).filter((function (e) { var n = o(e, 2); n[0]; return n[1]; })).map((function (e) { return o(e, 1)[0]; })).join(","), i = { searchTerm: t, searchFilters: a }, e.next = 6, _t("/coupons/search", i);
            case 6: return l = e.sent, s = l.data, e.abrupt("return", s);
            case 9:
            case "end": return e.stop();
        } }), e); }))); return function (n) { return e.apply(this, arguments); }; }();
    function rr(e) { return Ot(sr.UPDATE_QUERY, e); }
    function ar(e) { return Ot(sr.LOAD_DATA_SUCCESS, e); }
    function ir(e) { return function () { var n = Et(St().mark((function n(t) { var r; return St().wrap((function (n) { for (;;)
        switch (n.prev = n.next) {
            case 0: return t(Ot(sr.LOAD_DATA_START)), n.prev = 1, n.next = 4, tr(e);
            case 4:
                r = n.sent, t(ar(r)), n.next = 11;
                break;
            case 8: n.prev = 8, n.t0 = n.catch(1), t((a = n.t0, Ot(sr.LOAD_DATA_FAIL, a)));
            case 11:
            case "end": return n.stop();
        } var a; }), n, null, [[1, 8]]); }))); return function (e) { return n.apply(this, arguments); }; }(); }
    var or = function (e) { return e.searchedCoupons; }, lr = Wt(or, (function (e) { return e.query; })), sr = (Wt(or, (function (e) { return e.coupons; })), Wt(or, (function (e) { return e.isLoading; })), Wt(or, (function (e) { return e.error; })), { UPDATE_QUERY: "SEARCHED_COUPONS/UPDATE_QUERY", LOAD_DATA_START: "SEARCHED_COUPONS/LOAD_DATA_START", LOAD_DATA_SUCCESS: "SEARCHED_COUPONS/LOAD_DATA_SUCCESS", LOAD_DATA_FAIL: "SEARCHED_COUPONS/LOAD_DATA_FAIL" }), ur = { coupons: [], pagination: {}, isLoading: !1, error: null };
    var cr = function () { var e = Et(St().mark((function e(n) { var t, r, a, i; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return "/coupons/paginated", t = { page: n }, e.next = 4, _t("/coupons/paginated", t);
            case 4: return r = e.sent, a = r.data, i = r.pagination, e.abrupt("return", { data: a, pagination: i });
            case 8:
            case "end": return e.stop();
        } }), e); }))); return function (n) { return e.apply(this, arguments); }; }();
    function dr(e) { return Ot(pr.LOAD_DATA_SUCCESS, e); }
    var fr = function (e) { return e.paginatedCoupons; }, pr = (Wt(fr, (function (e) { return e.coupons; })), Wt(fr, (function (e) { return e.pagination; })), Wt(fr, (function (e) { return e.isLoading; })), Wt(fr, (function (e) { return e.error; })), { LOAD_DATA_START: "PAGINATED_COUPONS/LOAD_DATA_START", LOAD_DATA_SUCCESS: "PAGINATED_COUPONS/LOAD_DATA_SUCCESS", LOAD_DATA_FAIL: "PAGINATED_COUPONS/LOAD_DATA_FAIL" }), hr = { stores: [], pagination: {}, isLoading: !1, error: null };
    var mr = function () { var e = Et(St().mark((function e(n) { var t, r, a, i; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return "/stores/paginated", t = { page: n }, e.next = 4, _t("/stores/paginated", t);
            case 4: return r = e.sent, a = r.data, i = r.pagination, e.abrupt("return", { data: a, pagination: i });
            case 8:
            case "end": return e.stop();
        } }), e); }))); return function (n) { return e.apply(this, arguments); }; }();
    function vr(e) { return Ot(yr.LOAD_DATA_SUCCESS, e); }
    var gr = function (e) { return e.paginatedStores; }, yr = (Wt(gr, (function (e) { return e.stores; })), Wt(gr, (function (e) { return e.pagination; })), Wt(gr, (function (e) { return e.isLoading; })), Wt(gr, (function (e) { return e.error; })), { LOAD_DATA_START: "PAGINATED_STORES/LOAD_DATA_START", LOAD_DATA_SUCCESS: "PAGINATED_STORES/LOAD_DATA_SUCCESS", LOAD_DATA_FAIL: "PAGINATED_STORES/LOAD_DATA_FAIL" }), br = { stores: [], isLoading: !1, error: !1 };
    var wr = function () { var e = Et(St().mark((function e(n) { var t, r; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return "/stores/search", e.next = 3, _t("/stores/search", { searchTerm: n });
            case 3: return t = e.sent, r = t.data, e.abrupt("return", r);
            case 6:
            case "end": return e.stop();
        } }), e); }))); return function (n) { return e.apply(this, arguments); }; }();
    function xr(e) { return Ot(kr.LOAD_DATA_SUCCESS, e); }
    var Sr = function (e) { return e.searchedStores; }, kr = (Wt(Sr, (function (e) { return e.stores; })), Wt(Sr, (function (e) { return e.isLoading; })), Wt(Sr, (function (e) { return e.error; })), { LOAD_DATA_START: "SEARCHED_STORES/LOAD_DATA_START", LOAD_DATA_SUCCESS: "SEARCHED_STORES/LOAD_DATA_SUCCESS", LOAD_DATA_FAIL: "SEARCHED_STORES/LOAD_DATA_FAIL" }), Er = { categories: [], isLoading: !1, error: null };
    var Cr = function () { var e = Et(St().mark((function e() { var n, t; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return "/coupons/categories", e.next = 3, _t("/coupons/categories");
            case 3: return n = e.sent, t = n.data, e.abrupt("return", t);
            case 6:
            case "end": return e.stop();
        } }), e); }))); return function () { return e.apply(this, arguments); }; }();
    function Tr() { return Ot(Ir.LOAD_DATA_START); }
    function _r(e) { return Ot(Ir.LOAD_DATA_SUCCESS, e); }
    function Ar(e) { return Ot(Ir.LOAD_DATA_FAIL, e); }
    function Or(e) { return Pr.apply(this, arguments); }
    function Pr() { return (Pr = Et(St().mark((function e(n) { var t; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return n(Tr()), e.prev = 1, e.next = 4, Cr();
            case 4:
                t = e.sent, n(_r(t)), e.next = 11;
                break;
            case 8: e.prev = 8, e.t0 = e.catch(1), n(Ar(e.t0));
            case 11:
            case "end": return e.stop();
        } }), e, null, [[1, 8]]); })))).apply(this, arguments); }
    var Lr = function (e) { return e.categories; }, Ir = (Wt(Lr, (function (e) { return e.categories; })), Wt(Lr, (function (e) { return e.isLoading; })), Wt(Lr, (function (e) { return e.error; })), { LOAD_DATA_START: "CATEGORIES/LOAD_DATA_START", LOAD_DATA_SUCCESS: "CATEGORIES/LOAD_DATA_SUCCESS", LOAD_DATA_FAIL: "CATEGORIES/LOAD_DATA_FAIL" }), Dr = { showModal: !1, success: !0, message: "", isLoading: !1 };
    var jr = function () { var e = Et(St().mark((function e(n) { var t, r, a; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return "/newsletter/subscribe", t = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: n }) }, e.next = 4, _t("/newsletter/subscribe", {}, t);
            case 4: return r = e.sent, a = r.requestInfo, e.abrupt("return", a);
            case 7:
            case "end": return e.stop();
        } }), e); }))); return function (n) { return e.apply(this, arguments); }; }();
    function Nr(e) { return Ot(Rr.SUBSCRIBE_SUCCESS, e); }
    function zr(e) { return function () { var n = Et(St().mark((function n(t) { var r; return St().wrap((function (n) { for (;;)
        switch (n.prev = n.next) {
            case 0: return t(Ot(Rr.SUBSCRIBE_START)), n.prev = 1, n.next = 4, jr(e);
            case 4:
                r = n.sent, t(Nr(r)), n.next = 11;
                break;
            case 8: n.prev = 8, n.t0 = n.catch(1), t((a = n.t0.message, Ot(Rr.SUBSCRIBE_FAIL, a)));
            case 11:
            case "end": return n.stop();
        } var a; }), n, null, [[1, 8]]); }))); return function (e) { return n.apply(this, arguments); }; }(); }
    var Mr = function (e) { return e.newsletter; }, Rr = (Wt(Mr, (function (e) { return e.newsletter; })), Wt(Mr, (function (e) { return e.showModal; })), Wt(Mr, (function (e) { return e.success; })), Wt(Mr, (function (e) { return e.message; })), Wt(Mr, (function (e) { return e.isLoading; })), { CHANGE_MODAL_STATE: "NEWSLETTER/CHANGE_MODAL_STATE", SUBSCRIBE_START: "NEWSLETTER/SUBSCRIBE_START", SUBSCRIBE_SUCCESS: "NEWSLETTER/SUBSCRIBE_SUCCESS", SUBSCRIBE_FAIL: "NEWSLETTER/SUBSCRIBE_FAIL" }), Fr = function (e) { for (var n = Object.keys(e), t = {}, r = 0; r < n.length; r++) {
        var a = n[r];
        0, "function" === typeof e[a] && (t[a] = e[a]);
    } var i, o = Object.keys(t); try {
        !function (e) { Object.keys(e).forEach((function (n) { var t = e[n]; if ("undefined" === typeof t(void 0, { type: ft.INIT }))
            throw new Error(ut(12)); if ("undefined" === typeof t(void 0, { type: ft.PROBE_UNKNOWN_ACTION() }))
            throw new Error(ut(13)); })); }(t);
    }
    catch (l) {
        i = l;
    } return function (e, n) { if (void 0 === e && (e = {}), i)
        throw i; for (var r = !1, a = {}, l = 0; l < o.length; l++) {
        var s = o[l], u = t[s], c = e[s], d = u(c, n);
        if ("undefined" === typeof d) {
            n && n.type;
            throw new Error(ut(14));
        }
        a[s] = d, r = r || d !== c;
    } return (r = r || o.length !== Object.keys(e).length) ? a : e; }; }({ featuredStores: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case wt.LOAD_DATA_START: return st(st({}, e), {}, { isLoading: !0 });
            case wt.LOAD_DATA_SUCCESS: return st(st({}, e), {}, { error: null, stores: r, isLoading: !1 });
            case wt.LOAD_DATA_FAIL: return st(st({}, e), {}, { error: r, isLoading: !1 });
            default: return e;
        } }, featuredCoupons: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gt, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case er.LOAD_DATA_START: return st(st({}, e), {}, { isLoading: !0 });
            case er.LOAD_DATA_SUCCESS: return st(st({}, e), {}, { error: null, coupons: r, isLoading: !1 });
            case er.LOAD_DATA_FAIL: return st(st({}, e), {}, { error: r, isLoading: !1 });
            default: return e;
        } }, searchedStores: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : br, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case kr.LOAD_DATA_START: return st(st({}, e), {}, { isLoading: !0 });
            case kr.LOAD_DATA_SUCCESS: return { stores: r, error: null, isLoading: !1 };
            case kr.LOAD_DATA_FAIL: return st(st({}, e), {}, { error: r, isLoading: !1 });
            default: return e;
        } }, searchedCoupons: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nr, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case sr.UPDATE_QUERY: return st(st({}, e), {}, { query: r });
            case sr.LOAD_DATA_START: return st(st({}, e), {}, { isLoading: !0 });
            case sr.LOAD_DATA_SUCCESS: return st(st({}, e), {}, { coupons: r, error: null, isLoading: !1 });
            case sr.LOAD_DATA_FAIL: return st(st({}, e), {}, { error: r, isLoading: !1 });
            default: return e;
        } }, paginatedStores: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hr, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case yr.LOAD_DATA_START: return st(st({}, e), {}, { isLoading: !0 });
            case yr.LOAD_DATA_SUCCESS: return st(st(st({}, e), {}, { error: null }, r), {}, { isLoading: !1 });
            case yr.LOAD_DATA_FAIL: return st(st({}, e), {}, { error: r, isLoading: !1 });
            default: return e;
        } }, paginatedCoupons: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ur, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case pr.LOAD_DATA_START: return st(st({}, e), {}, { isLoading: !0 });
            case pr.LOAD_DATA_SUCCESS: return st(st(st({}, e), {}, { error: null }, r), {}, { isLoading: !1 });
            case pr.LOAD_DATA_FAIL: return st(st({}, e), {}, { error: r, isLoading: !1 });
            default: return e;
        } }, categories: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Er, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case Ir.LOAD_DATA_START: return st(st({}, e), {}, { isLoading: !0 });
            case Ir.LOAD_DATA_SUCCESS: return st(st({}, e), {}, { error: null, categories: r, isLoading: !1 });
            case Ir.LOAD_DATA_FAIL: return st(st({}, e), {}, { error: r, isLoading: !1 });
            default: return e;
        } }, newsletter: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dr, n = arguments.length > 1 ? arguments[1] : void 0, t = n.type, r = n.payload; switch (t) {
            case Rr.CHANGE_MODAL_STATE: return st(st({}, e), {}, { showModal: r });
            case Rr.SUBSCRIBE_START: return st(st({}, e), {}, { isLoading: !0 });
            case Rr.SUBSCRIBE_SUCCESS: return st(st(st({}, e), {}, { showModal: !0 }, r), {}, { isLoading: !1 });
            case Rr.SUBSCRIBE_FAIL: return st(st({}, e), {}, { showModal: !0, success: !1, message: r, isLoading: !1 });
            default: return e;
        } } }), Br = mt(function () { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
        n[t] = arguments[t]; return function (e) { return function () { var t = e.apply(void 0, arguments), r = function () { throw new Error(ut(15)); }, a = { getState: t.getState, dispatch: function () { return r.apply(void 0, arguments); } }, i = n.map((function (e) { return e(a); })); return r = mt.apply(void 0, i)(t.dispatch), st(st({}, t), {}, { dispatch: r }); }; }; }.apply(void 0, [yt])), $r = ht(Fr, Br), Ur = t(184), Hr = { primary_I: "#0a62d0", primary_II: "#4682b4", secondary_I: "#191718", secondary_II: "#000", neutral_I: "#344648", neutral_II: "#f9f7f0", alert_I: "#23c552", detail_I: "#fff", detail_II: "#ff3131", primaryFontFamily: '"Nunito", sans-serif', secondaryFontFamily: '"Poppins", sans-serif' };
    var Wr = function (e) { var n = e.children; return (0, Ur.jsx)(Kn, { theme: Hr, children: n }); };
    var Vr = function () { var e = o((0, n.useState)(window.innerWidth), 2), t = e[0], r = e[1]; return (0, n.useEffect)((function () { return window.addEventListener("resize", (function () { return r(window.innerWidth); })), window.removeEventListener("resize", (function () { return r(window.innerWidth); })); })), t; };
    var Gr = function (e) { var t = o((0, n.useState)(0), 2), r = t[0], a = t[1], i = Vr(); return (0, n.useEffect)((function () { var n = null === e || void 0 === e ? void 0 : e.getBoundingClientRect().x; n > 0 && a(n); }), [i, e]), r; };
    var qr = function (e, t) { var r = function (n) { e && (e.current.contains(n.target) || t(!1)); }; (0, n.useEffect)((function () { return window.addEventListener("click", (function (e) { return r(e); })), window.removeEventListener("click", (function (e) { return r(e); })); }), []); };
    var Yr = function () { var e = o((0, n.useState)(!1), 2), t = e[0], r = e[1], a = function () { r(window.scrollY > window.innerHeight + 200); }; return (0, n.useEffect)((function () { return window.addEventListener("scroll", (function () { a(); })), window.removeEventListener("scroll", (function () { a(); })); }), []), t; };
    var Kr = function (e) { var t = o((0, n.useState)(!1), 2), r = t[0], a = t[1], i = (0, n.useRef)(), l = N().pathname; return qr(i, a), (0, Ur.jsxs)(ma, { children: [(0, Ur.jsx)(va, { children: (0, Ur.jsxs)(ga, { children: [(0, Ur.jsxs)(ya, { children: [(0, Ur.jsxs)(xa, { children: [(0, Ur.jsx)(wa, { children: "CUPOM!" }), " ", (0, Ur.jsx)(wa, { children: "CUPOM!" })] }), (0, Ur.jsxs)(xa, { children: [(0, Ur.jsx)(wa, { children: "CUPOM!" }), " ", (0, Ur.jsx)(wa, { children: "CUPOM!" })] })] }), (0, Ur.jsx)(ba, { children: "Compre tudo que desejar por um precinho especial." })] }) }), (0, Ur.jsxs)(Sa, { ref: i, children: [(0, Ur.jsx)(_a, { menuOpen: r, onClick: function () { a(!r); } }), (0, Ur.jsxs)(ka, { menuOpen: r, children: [(0, Ur.jsx)(Ea, { active: "/" === l, children: (0, Ur.jsx)(Q, { to: "/", children: "Inicio" }) }), (0, Ur.jsx)(Ea, { active: l.startsWith("/coupons"), children: (0, Ur.jsx)(Q, { to: "/coupons", children: "Coupons" }) }), (0, Ur.jsx)(Ea, { active: l.startsWith("/stores"), children: (0, Ur.jsx)(Q, { to: "/stores", children: "Lojas" }) })] })] })] }); };
    function Qr(e, n) { if (null == e)
        return {}; var t, r, a = function (e, n) { if (null == e)
        return {}; var t, r, a = {}, i = Object.keys(e); for (r = 0; r < i.length; r++)
        t = i[r], n.indexOf(t) >= 0 || (a[t] = e[t]); return a; }(e, n); if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
    } return a; }
    var Xr, Jr, Zr, ea, na, ta, ra, aa, ia, oa, la, sa, ua, ca, da, fa, pa, ha = ["menuOpen"], ma = rt.header(Xr || (Xr = Se(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))), va = rt.div(Jr || (Jr = Se(["\n  position: relative;\n  width: 100%;\n  padding: 24px 16px;\n  background-color: ", ";\n  overflow: hidden;\n\n  @media screen and (min-width: 425px) {\n    background-image: url(../../assets/images/header-bg.png);\n    background-size: 40%;\n    background-position: 5% center;\n    background-repeat: no-repeat;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 32px 16px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    background-size: 30%;\n  }\n"])), (function (e) { return e.theme.primary_II; })), ga = rt.div(Zr || (Zr = Se(["\n  position: relative;\n  max-width: 280px;\n  margin: 0 auto;\n  text-align: center;\n  color: ", ";\n  z-index: 3;\n\n  @media screen and (min-width: 425px) {\n    padding: 24px 12px;\n    margin: 0 0 0 auto;\n    text-align: right;\n    color: ", ";\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 400px;\n\n    text-align: right;\n  }\n\n  @media screen and (min-width: 1024px) {\n    max-width: 600px;\n  }\n"])), (function (e) { return e.theme.neutral_I; }), (function (e) { return e.theme.neutral_I; })), ya = rt.h1(ea || (ea = Se(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-family: ", ";\n  font-weight: 700;\n  font-size: 2rem;\n\n  @media screen and (min-width: 425px) {\n    font-size: 1.75rem;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 2.25rem;\n  }\n"])), (function (e) { return e.theme.primaryFontFamily; })), ba = rt.p(na || (na = Se(["\n  margin-top: 16px;\n  font-weight: 700;\n  font-family: ", ";\n  color: ", ";\n\n  @media screen and (min-width: 768px) {\n    font-size: 1.2rem;\n  }\n"])), (function (e) { return e.theme.secondaryFontFamily; }), (function (e) { return e.theme.neutral_II; })), wa = rt.span(ta || (ta = Se(["\n  position: relative;\n  color: ", ";\n"])), (function (e) { return e.theme.neutral_II; })), xa = rt.span(ra || (ra = Se(["\n  &:nth-of-type(1) {\n    ", " {\n      &:nth-child(1) {\n        color: ", ";\n\n        @media screen and (max-width: 424.999px) {\n          top: -600px;\n          animation: slide-in-top 2s forwards;\n\n          @keyframes slide-in-top {\n            to {\n              top: 0;\n            }\n          }\n        }\n      }\n\n      &:nth-child(2) {\n        @media screen and (max-width: 424.999px) {\n          right: -120%;\n          animation: slide-in-right 2s forwards;\n\n          @keyframes slide-in-right {\n            to {\n              right: 0;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  &:nth-of-type(2) {\n    ", " {\n      &:nth-child(1) {\n        @media screen and (max-width: 424.999px) {\n          left: -120%;\n          animation: slide-in-left 2s forwards;\n\n          @keyframes slide-in-left {\n            to {\n              left: 0;\n            }\n          }\n        }\n      }\n\n      &:nth-child(2) {\n        color: ", ";\n\n        @media screen and (max-width: 424.999px) {\n          bottom: -600px;\n          animation: slide-in-bottom 2s forwards;\n\n          @keyframes slide-in-bottom {\n            to {\n              bottom: 0;\n            }\n          }\n        }\n      }\n    }\n  }\n"])), wa, (function (e) { return e.theme.neutral_I; }), wa, (function (e) { return e.theme.neutral_I; })), Sa = rt.nav(aa || (aa = Se(["\n  width: 100%;\n  padding: 12px;\n  background-color: ", ";\n  z-index: 999;\n\n  @media screen and (min-width: 768px) {\n    padding: 20px;\n  }\n"])), (function (e) { return e.theme.secondary_I; })), ka = rt.ul(ia || (ia = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 190px;\n  padding: 0 30px;\n  margin: 0 auto;\n  height: ", ";\n  overflow: hidden;\n  transition: height 300ms ease;\n\n  @media screen and (min-width: 640px) {\n    flex-direction: row;\n    height: auto;\n    width: 100%;\n    overflow: visible;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 2rem;\n  }\n"])), (function (e) { return e.menuOpen ? "186px" : "0"; })), Ea = rt.li(oa || (oa = Se(["\n  position: relative;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-weight: 700;\n  font-family: ", ";\n  font-size: 1.1rem;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: 6px;\n  transition: all 300ms ease;\n\n  @media screen and (min-width: 640px) {\n    width: auto;\n  }\n\n  &:hover {\n    right: 5px;\n    bottom: 5px;\n    box-shadow: 5px 5px 0 0\n      ", ";\n  }\n\n  a {\n    display: block;\n    padding: 8px 12px;\n    width: 100%;\n    text-align: center;\n\n    @media screen and (min-width: 768px) {\n      padding: 12px 16px;\n    }\n  }\n"])), (function (e) { return e.theme.secondaryFontFamily; }), (function (e) { return e.theme.neutral_II; }), (function (e) { var n = e.theme; return e.active ? n.primary_II : n.neutral_II; }), (function (e) { var n = e.theme; return e.active ? n.primary_II : n.neutral_II; })), Ca = rt.div(la || (la = Se(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  transform-origin: center;\n  width: 40px;\n  height: 6px;\n  border-radius: 40px;\n  background-color: ", ";\n  transition: all 200ms ease;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 40px;\n    height: 8px;\n    border: 2px solid ", ";\n    border-radius: 40px;\n    background-color: ", ";\n    transition: all 500ms ease;\n  }\n\n  &::before {\n    transform: translateY(-14px);\n  }\n\n  &::after {\n    transform: translateY(12px);\n  }\n"])), (function (e) { return e.theme.primary_II; }), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.neutral_II; })), Ta = rt.div(sa || (sa = Se(["\n  position: relative;\n  width: 40px;\n  height: 40px;\n\n  ", "\n"])), (function (e) { return e.menuOpen && Mn(ua || (ua = Se(["\n      ", " {\n        background-color: ", ";\n\n        &::before {\n          transform: translateY(0) rotate(45deg);\n        }\n\n        &::after {\n          transform: translateY(0) rotate(-45deg);\n        }\n      }\n    "])), Ca, (function (e) { return e.theme.secondary_I; })); })), _a = rt((function (e) { var n = e.menuOpen, t = Qr(e, ha); return (0, Ur.jsx)("button", st(st({ type: "button" }, t), {}, { children: (0, Ur.jsx)(Ta, { menuOpen: n, children: (0, Ur.jsx)(Ca, {}) }) })); }))(ca || (ca = Se(["\n  display: block;\n  margin: 0 auto;\n  cursor: pointer;\n\n  @media screen and (min-width: 640px) {\n    display: none;\n  }\n"]))), Aa = rt.footer(da || (da = Se(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  width: 100%;\n  padding: 32px 20px;\n  color: ", ";\n  background-color: ", ";\n\n  @media screen and (min-width: 768px) {\n    padding: 48px 32px;\n    gap: 80px;\n  }\n"])), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.secondary_I; })), Oa = rt.div(fa || (fa = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 80px;\n  }\n"]))), Pa = rt.p(pa || (pa = Se(["\n  text-align: center;\n  opacity: 0.8;\n"]))), La = ["children", "title"];
    var Ia, Da, ja = function (e) { var n = e.children, t = e.title, r = Qr(e, La); return (0, Ur.jsxs)(Na, st(st({}, r), {}, { children: [(0, Ur.jsx)(za, { children: t }), n] })); }, Na = rt.article(Ia || (Ia = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 500px;\n  font-family: ", ";\n\n  @media screen and (min-width: 768px) {\n    width: auto;\n  }\n"])), (function (e) { return e.theme.secondaryFontFamily; })), za = rt.h3(Da || (Da = Se(["\n  margin-bottom: 12px;\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-align: center;\n"]))), Ma = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21; return crypto.getRandomValues(new Uint8Array(e)).reduce((function (e, n) { return e += (n &= 63) < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n > 62 ? "-" : "_"; }), ""); };
    var Ra, Fa, Ba, $a, Ua = function (e) { var n = e.list, t = e.horizontal, r = n.map((function (e) { var n = e.linkType, t = e.labelType, r = e.to, a = e.label; return "inner" === n && "normal" === t ? (0, Ur.jsx)(Wa, { children: (0, Ur.jsx)(Q, { to: r, children: a }) }, Ma()) : "normal" === t ? (0, Ur.jsx)(Wa, { children: (0, Ur.jsx)("a", { href: r, children: a }) }, Ma()) : "icon" === t ? (0, Ur.jsx)(Va, { children: (0, Ur.jsx)("a", { href: r, children: a }) }, Ma()) : null; })); return (0, Ur.jsx)(Ha, { horizontal: t, children: r }); }, Ha = rt.ul(Ra || (Ra = Se(["\n  ", "\n\n  text-align: center;\n"])), (function (e) { return e.horizontal && Mn(Fa || (Fa = Se(["\n      display: flex;\n      gap: 16px;\n    "]))); })), Wa = rt.li(Ba || (Ba = Se(["\n  color: ", ";\n  opacity: 0.8;\n  transition: opacity 300ms ease;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:not(:first-of-type) {\n    margin-top: 6px;\n  }\n"])), (function (e) { return e.theme.neutral_II; })), Va = rt.li($a || ($a = Se(["\n  a {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 42px;\n    height: 42px;\n    margin: 0 auto;\n    text-indent: -9999px;\n    border-radius: 50%;\n    background-color: ", ";\n    background-image: url(", ");\n    background-size: 570%;\n    background-position: 0 0;\n    background-repeat: no-repeat;\n    box-shadow: 0 0 0 0 ", ";\n    transition: all 300ms ease;\n\n    &:hover {\n      top: -3px;\n      left: -3px;\n      box-shadow: 3px 3px 0 0 ", ";\n    }\n  }\n\n  &:nth-child(1) a {\n    background-position: -10px -8px;\n  }\n\n  &:nth-child(2) a {\n    background-position: -8px -61px;\n  }\n\n  &:nth-child(3) a {\n    background-position: -69px -5px;\n  }\n"])), (function (e) { return e.theme.secondary_II; }), "../../assets/images/icons.svg", (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.neutral_II; })), Ga = ["show", "message", "clickHandler"];
    var qa, Ya, Ka = function (e) { var t = e.show, r = e.message, a = e.clickHandler, i = Qr(e, Ga), o = (0, n.useRef)(), l = (0, n.useRef)(); return (0, n.useEffect)((function () { l && l.current.focus(); }), [t, l]), qr(o, a), (0, Ur.jsx)(si, st(st({}, i), {}, { show: t, children: (0, Ur.jsxs)(ui, { titleLevel: "h4", title: "Mensagem", innerRef: o, children: [(0, Ur.jsx)(ci, { children: r }), (0, Ur.jsx)(di, { onClick: a, innerRef: l, children: "ok" })] }) })); }, Qa = rt.section(qa || (qa = Se(["\n  width: 100%;\n"]))), Xa = rt.h2(Ya || (Ya = Se(["\n  position: relative;\n  width: auto;\n  padding-bottom: 12px;\n  margin-bottom: 32px;\n  font-family: ", ";\n  font-weight: 700;\n  font-size: 1.4rem;\n  color: ", ";\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 48px;\n    font-size: 1.75rem;\n  }\n\n  &::after {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    display: block;\n    content: ' ';\n    width: 80px;\n    transform: translateX(-50%);\n    border-bottom: 6px solid ", ";\n  }\n"])), (function (e) { return e.theme.primaryFontFamily; }), (function (e) { return e.theme.neutral_I; }), (function (e) { return e.theme.primary_I; })), Ja = ["children", "title", "titleLevel", "innerRef"];
    var Za = function (e) { var n = e.children, t = e.title, r = e.titleLevel, a = e.innerRef, i = Qr(e, Ja); return (0, Ur.jsxs)(Qa, st(st({}, i), {}, { ref: a, children: [(0, Ur.jsx)(Xa, { as: r || "h2", children: t }), n] })); }, ei = ["children", "innerRef", "type"];
    var ni, ti, ri, ai, ii, oi = function (e) { var n = e.children, t = e.innerRef, r = e.type, a = void 0 === r ? "button" : r, i = Qr(e, ei); return (0, Ur.jsx)(li, st(st({ type: a }, i), {}, { ref: t, children: n })); }, li = rt.button(ni || (ni = Se(["\n  position: relative;\n  top: 0;\n  left: 0;\n  padding: 12px 16px;\n  font-family: inherit;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  color: ", ";\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background-color: ", ";\n  box-shadow: 0 0 0 0 ", ";\n  cursor: pointer;\n  transition: all 300ms ease;\n\n  &:hover {\n    top: -3px;\n    left: -3px;\n    box-shadow: 3px 3px 0 0 ", ";\n  }\n"])), (function (e) { var n = e.theme; return e.selected ? n.primary_II : n.neutral_II; }), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.detail_II; }), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.secondary_II; })), si = rt.div(ti || (ti = Se(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  display: ", ";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: hsla(0, 0%, 100%, 20%);\n  backdrop-filter: blur(2px);\n  z-index: 9999;\n"])), (function (e) { return e.show ? "flex" : "none"; })), ui = rt(Za)(ri || (ri = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  max-width: 600px;\n  padding: 20px 16px;\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    45deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(10, 98, 208, 1) 75%\n  );\n\n  & > *:first-child {\n    color: ", ";\n\n    &::after {\n      border-color: ", ";\n    }\n  }\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.detail_II; })), ci = rt.p(ai || (ai = Se(["\n  width: 80%;\n  font-size: 1.2rem;\n  text-align: center;\n  color: ", ";\n\n  @media screen and (min-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])), (function (e) { return e.theme.neutral_II; })), di = rt(oi)(ii || (ii = Se(["\n  width: 50%;\n  max-width: 200px;\n  margin-top: 32px;\n  text-transform: uppercase;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 48px;\n  }\n"]))), fi = { "User tried to subscribe with an e-mail already in use": "E-mail j\xe1 cadastrado anteriormente.", "User sent invalid e-mail address": "E-mail n\xe3o \xe9 valido.", "Server failed to subscribe user. Please try again": "N\xe3o foi poss\xedvel cadastrar e-mail. Por favor, tente novamente.", "Failed to fetch": "N\xe3o \xe9 poss\xedvel cadastrar no momento. Verifique sua conex\xe3o com a internet.", "User subscribed to newsletter successfully": "E-mail cadastrado em nossa newsletter! Aguarde as novidades..." };
    var pi = function () { var e = se(Mr), n = e.showModal, t = e.message, r = e.isLoading, a = xe(), i = function () { var e = Et(St().mark((function e(n) { var t, r, i, l; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: n.preventDefault(), t = Array.from(n.target).filter((function (e) { return "INPUT" === e.nodeName; })), r = o(t, 1), i = r[0], l = i.value, a(zr(l));
            case 4:
            case "end": return e.stop();
        } }), e); }))); return function (n) { return e.apply(this, arguments); }; }(); return (0, Ur.jsxs)(ja, { title: "Newsletter", children: [(0, Ur.jsx)(Ri, { children: "Assine nossa newsletter e fique informado sobre os melhores cupons e ofertas dispon\xedveis!" }), (0, Ur.jsx)(Fi, { noValidate: !0, type: "email", fieldLabel: "email@exemplo.com", buttonLabel: "assinar", onSubmit: i, clearAfterSubmit: !0, isLoading: r }), (0, Ur.jsx)(Ka, { clickHandler: function () { var e; a((e = !1, Ot(Rr.CHANGE_MODAL_STATE, e))); }, show: n, message: fi[t] })] }); }, hi = ["children", "type", "fieldLabel", "buttonLabel", "darkBorder", "onSubmit", "clearAfterSubmit", "insideRef", "isLoading"];
    var mi = function (e) { var t = e.children, r = e.type, a = e.fieldLabel, i = e.buttonLabel, l = e.darkBorder, s = e.onSubmit, u = e.clearAfterSubmit, c = e.insideRef, d = e.isLoading, f = Qr(e, hi), p = o((0, n.useState)(""), 2), h = p[0], m = p[1]; return (0, Ur.jsxs)(ji, st(st({}, f), {}, { ref: c, onSubmit: function (e) { s(e), u && m(""); }, children: [(0, Ur.jsxs)(Ni, { darkBorder: l, children: [(0, Ur.jsx)("input", { darkBorder: l, type: r, value: h, placeholder: a, onChange: function (e) { var n = e.target.value; m(n); } }), (0, Ur.jsx)(zi, { darkBorder: l, type: "submit", children: d ? (0, Ur.jsx)(Mi, { mini: !0 }) : i })] }), t] })); }, vi = ["fullpage", "mini"];
    var gi, yi, bi, wi, xi, Si, ki, Ei, Ci, Ti, _i, Ai = function (e) { var n = e.fullpage, t = e.mini, r = Qr(e, vi); return n && t && (n = !1), (0, Ur.jsx)(Ii, st(st({ fullpage: n, mini: t }, r), {}, { children: (0, Ur.jsx)(Di, { mini: t, children: "loading content" }) })); }, Oi = Mn(gi || (gi = Se(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 9999;\n"]))), Pi = Mn(yi || (yi = Se(["\n  height: 100%;\n"]))), Li = Mn(bi || (bi = Se(["\n  width: 25px;\n  height: 25px;\n  border-width: 6px;\n  border-left-width: 6px;\n\n  @media screen and (min-width: 768px) {\n    width: 30px;\n    height: 30px;\n  }\n"]))), Ii = rt.div(wi || (wi = Se(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 30vh;\n  background-color: ", ";\n  overflow: hidden;\n\n  ", "\n  ", "\n"])), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.fullpage && Oi; }), (function (e) { return e.mini && Pi; })), Di = rt.p(xi || (xi = Se(["\n  width: 40px;\n  height: 40px;\n  text-indent: -9999px;\n  border: 10px solid ", ";\n  border-left: 10px solid transparent;\n  border-radius: 50%;\n  animation-name: spin;\n  animation-duration: 1.2s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n\n  @media screen and (min-width: 768px) {\n    width: 60px;\n    height: 60px;\n  }\n\n  ", "\n\n  @keyframes spin {\n    from {\n      transform: rotate(0);\n      border-color: ", ";\n      border-left-color: transparent;\n    }\n\n    50% {\n      border-color: ", ";\n      border-left-color: transparent;\n    }\n\n    to {\n      transform: rotate(360deg);\n      border-color: ", ";\n      border-left-color: transparent;\n    }\n  }\n"])), (function (e) { return e.theme.primary_I; }), (function (e) { return e.mini && Li; }), (function (e) { return e.theme.primary_I; }), (function (e) { return e.theme.primary_II; }), (function (e) { return e.theme.primary_I; })), ji = rt.form(Si || (Si = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  font-family: ", ";\n"])), (function (e) { return e.theme.secondaryFontFamily; })), Ni = rt.div(ki || (ki = Se(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  max-width: 500px;\n  border: 3px solid\n    ", ";\n  border-radius: 6px;\n  background-color: ", ";\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    width: 80%;\n    max-width: 680px;\n    padding: 4px 0;\n  }\n\n  input {\n    flex: 1 1 auto;\n    width: 100%;\n    height: 3rem;\n    padding: 0 124px 0 24px;\n    border: 1px solid blue;\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 600;\n    color: ", ";\n    border: none;\n    background-color: transparent;\n    outline: none;\n\n    @media screen and (min-width: 768px) {\n      font-size: 1.1rem;\n    }\n\n    &::placeholder {\n      font-size: 0.75rem;\n\n      @media screen and (min-width: 768px) {\n        font-size: 1.1rem;\n      }\n    }\n  }\n"])), (function (e) { var n = e.theme; return e.darkBorder ? n.secondary_II : n.neutral_II; }), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.secondary_I; })), zi = rt.button(Ei || (Ei = Se(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  flex: 0 0 100px;\n  width: 100px;\n  height: 100%;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 600;\n  color: ", ";\n  background-color: ", ";\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 1.1rem;\n  }\n"])), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.primary_II; }), (function (e) { return e.theme.secondary_I; })), Mi = rt(Ai)(Ci || (Ci = Se(["\n  background-color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.secondary_I; })), Ri = rt.p(Ti || (Ti = Se(["\n  margin-bottom: 12px;\n  text-align: center;\n  opacity: 0.8;\n"]))), Fi = rt(mi)(_i || (_i = Se(["\n  & > *:first-child {\n    width: 100%;\n    max-width: none;\n\n    @media screen and (min-width: 768px) {\n      width: 100%;\n      max-width: none;\n    }\n  }\n"])));
    var Bi = function () { return (0, Ur.jsxs)(Aa, { children: [(0, Ur.jsxs)(Oa, { children: [(0, Ur.jsx)(ja, { title: "Termos", children: (0, Ur.jsx)(Ua, { list: $i }) }), (0, Ur.jsx)(ja, { title: "D\xfavidas", children: (0, Ur.jsx)(Ua, { list: Ui }) }), (0, Ur.jsx)(ja, { title: "Sobre", children: (0, Ur.jsx)(Pa, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper auctor neque vitae. Proin fermentum leo vel orci porta non pulvinar." }) })] }), (0, Ur.jsxs)(Oa, { children: [(0, Ur.jsx)(ja, { title: "Redes Sociais", children: (0, Ur.jsx)(Ua, { list: Hi, horizontal: !0 }) }), (0, Ur.jsx)(pi, {})] })] }); }, $i = [{ label: "Termos de Uso", labelType: "normal", to: "#", linkType: "inner" }, { label: "Politica de Privacidade", labelType: "normal", to: "#", linkType: "inner" }], Ui = [{ label: "Como usar", labelType: "normal", to: "#", linkType: "inner" }, { label: "Perguntas frequentes", labelType: "normal", to: "#", linkType: "inner" }, { label: "Entre em contato", labelType: "normal", to: "#", linkType: "inner" }], Hi = [{ label: "Facebook", labelType: "icon", to: "#", linkType: "outer" }, { label: "Instagram", labelType: "icon", to: "#", linkType: "outer" }, { label: "Twitter", labelType: "icon", to: "#", linkType: "outer" }];
    var Wi, Vi, Gi = function (e) { var t = Yr(), r = R(); return (0, n.useEffect)((function () { window.scroll({ top: 0 }); }), [r]), (0, Ur.jsxs)(n.Fragment, { children: [(0, Ur.jsx)(Kr, {}), (0, Ur.jsx)(Yi, { show: t, onClick: function () { window.scrollTo({ top: 0, behavior: "smooth" }); } }), (0, Ur.jsx)(qi, { children: (0, Ur.jsx)($, {}) }), (0, Ur.jsx)(Bi, {})] }); }, qi = rt.main(Wi || (Wi = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n  width: 100%;\n  padding: 32px 16px;\n  background-color: ", ";\n  background-color: #f6f4e8;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  @media screen and (min-width: 768px) {\n    padding: 32px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding: 48px 32px;\n    gap: 48px;\n  }\n"])), (function (e) { return e.theme.neutral_II; })), Yi = rt(oi)(Vi || (Vi = Se(["\n  position: fixed;\n  top: auto;\n  left: auto;\n  right: 30px;\n  bottom: 20px;\n  display: ", ";\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 0 3px 1px;\n  color: ", ";\n  animation: pulse 2s infinite;\n  z-index: 9999;\n\n  @keyframes pulse {\n    0% {\n      box-shadow: 0 0 3px 1px;\n    }\n\n    70% {\n      box-shadow: 0 0 10px 5px;\n    }\n\n    100% {\n      box-shadow: 0 0 3px 1px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    right: 80px;\n    bottom: 40px;\n    width: 50px;\n    height: 50px;\n  }\n\n  &:hover {\n    top: auto;\n    left: auto;\n    box-shadow: 0 0 5px 2px;\n    transform: scale(1.1);\n  }\n\n  &::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    content: '';\n    display: block;\n    border: 8px solid transparent;\n    border-bottom-color: ", ";\n\n    @media screen and (min-width: 768px) {\n      border-width: 10px;\n    }\n  }\n\n  &::after {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translateX(-50%);\n    content: '';\n    display: block;\n    width: 6px;\n    height: 16px;\n    background-color: ", ";\n\n    @media screen and (min-width: 768px) {\n      bottom: 10px;\n      height: 20px;\n    }\n  }\n"])), (function (e) { return e.show ? "block" : "none"; }), (function (e) { return e.theme.primary_I; }), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.neutral_II; }));
    function Ki(e) { return function (e) { if (Array.isArray(e))
        return a(e); }(e) || function (e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e); }(e) || i(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    function Qi(e, n) { if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function"); }
    function Xi(e, n) { for (var t = 0; t < n.length; t++) {
        var r = n[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } }
    function Ji(e, n, t) { return n && Xi(e.prototype, n), t && Xi(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
    function Zi(e) { return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object; }
    function eo() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; Object.keys(n).forEach((function (t) { "undefined" === typeof e[t] ? e[t] = n[t] : Zi(n[t]) && Zi(e[t]) && Object.keys(n[t]).length > 0 && eo(e[t], n[t]); })); }
    var no = { body: {}, addEventListener: function () { }, removeEventListener: function () { }, activeElement: { blur: function () { }, nodeName: "" }, querySelector: function () { return null; }, querySelectorAll: function () { return []; }, getElementById: function () { return null; }, createEvent: function () { return { initEvent: function () { } }; }, createElement: function () { return { children: [], childNodes: [], style: {}, setAttribute: function () { }, getElementsByTagName: function () { return []; } }; }, createElementNS: function () { return {}; }, importNode: function () { return null; }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
    function to() { var e = "undefined" !== typeof document ? document : {}; return eo(e, no), e; }
    var ro = { document: no, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState: function () { }, pushState: function () { }, go: function () { }, back: function () { } }, CustomEvent: function () { return this; }, addEventListener: function () { }, removeEventListener: function () { }, getComputedStyle: function () { return { getPropertyValue: function () { return ""; } }; }, Image: function () { }, Date: function () { }, screen: {}, setTimeout: function () { }, clearTimeout: function () { }, matchMedia: function () { return {}; }, requestAnimationFrame: function (e) { return "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0); }, cancelAnimationFrame: function (e) { "undefined" !== typeof setTimeout && clearTimeout(e); } };
    function ao() { var e = "undefined" !== typeof window ? window : {}; return eo(e, ro), e; }
    function io(e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
    function oo(e, n) { if (n && ("object" === xt(n) || "function" === typeof n))
        return n; if (void 0 !== n)
        throw new TypeError("Derived constructors may only return object or undefined"); return io(e); }
    function lo(e, n) { return lo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, n) { return e.__proto__ = n, e; }, lo(e, n); }
    function so(e) { return so = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) { return e.__proto__ || Object.getPrototypeOf(e); }, so(e); }
    function uo() { if ("undefined" === typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" === typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }
    function co(e, n, t) { return co = uo() ? Reflect.construct.bind() : function (e, n, t) { var r = [null]; r.push.apply(r, n); var a = new (Function.bind.apply(e, r)); return t && lo(a, t.prototype), a; }, co.apply(null, arguments); }
    function fo(e) { var n = "function" === typeof Map ? new Map : void 0; return fo = function (e) { if (null === e || !function (e) { return -1 !== Function.toString.call(e).indexOf("[native code]"); }(e))
        return e; if ("function" !== typeof e)
        throw new TypeError("Super expression must either be null or a function"); if ("undefined" !== typeof n) {
        if (n.has(e))
            return n.get(e);
        n.set(e, t);
    } function t() { return co(e, arguments, so(this).constructor); } return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), lo(t, e); }, fo(e); }
    var po = function (e) { !function (e, n) { if ("function" !== typeof n && null !== n)
        throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && lo(e, n); }(t, e); var n = function (e) { var n = uo(); return function () { var t, r = so(e); if (n) {
        var a = so(this).constructor;
        t = Reflect.construct(r, arguments, a);
    }
    else
        t = r.apply(this, arguments); return oo(this, t); }; }(t); function t(e) { var r; return Qi(this, t), "number" === typeof e ? r = n.call(this, e) : function (e) { var n = e.__proto__; Object.defineProperty(e, "__proto__", { get: function () { return n; }, set: function (e) { n.__proto__ = e; } }); }(io(r = n.call.apply(n, [this].concat(Ki(e || []))))), oo(r); } return Ji(t); }(fo(Array));
    function ho() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = []; return e.forEach((function (e) { Array.isArray(e) ? n.push.apply(n, Ki(ho(e))) : n.push(e); })), n; }
    function mo(e, n) { return Array.prototype.filter.call(e, n); }
    function vo(e, n) { var t = ao(), r = to(), a = []; if (!n && e instanceof po)
        return e; if (!e)
        return new po(a); if ("string" === typeof e) {
        var i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            var o = "div";
            0 === i.indexOf("<li") && (o = "ul"), 0 === i.indexOf("<tr") && (o = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (o = "tr"), 0 === i.indexOf("<tbody") && (o = "table"), 0 === i.indexOf("<option") && (o = "select");
            var l = r.createElement(o);
            l.innerHTML = i;
            for (var s = 0; s < l.childNodes.length; s += 1)
                a.push(l.childNodes[s]);
        }
        else
            a = function (e, n) { if ("string" !== typeof e)
                return [e]; for (var t = [], r = n.querySelectorAll(e), a = 0; a < r.length; a += 1)
                t.push(r[a]); return t; }(e.trim(), n || r);
    }
    else if (e.nodeType || e === t || e === r)
        a.push(e);
    else if (Array.isArray(e)) {
        if (e instanceof po)
            return e;
        a = e;
    } return new po(function (e) { for (var n = [], t = 0; t < e.length; t += 1)
        -1 === n.indexOf(e[t]) && n.push(e[t]); return n; }(a)); }
    vo.fn = po.prototype;
    var go = "resize scroll".split(" ");
    function yo(e) { return function () { for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
        t[r] = arguments[r]; if ("undefined" === typeof t[0]) {
        for (var a = 0; a < this.length; a += 1)
            go.indexOf(e) < 0 && (e in this[a] ? this[a][e]() : vo(this[a]).trigger(e));
        return this;
    } return this.on.apply(this, [e].concat(t)); }; }
    yo("click"), yo("blur"), yo("focus"), yo("focusin"), yo("focusout"), yo("keyup"), yo("keydown"), yo("keypress"), yo("submit"), yo("change"), yo("mousedown"), yo("mousemove"), yo("mouseup"), yo("mouseenter"), yo("mouseleave"), yo("mouseout"), yo("mouseover"), yo("touchstart"), yo("touchend"), yo("touchmove"), yo("resize"), yo("scroll");
    var bo = { addClass: function () { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t]; var r = ho(n.map((function (e) { return e.split(" "); }))); return this.forEach((function (e) { var n; (n = e.classList).add.apply(n, Ki(r)); })), this; }, removeClass: function () { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t]; var r = ho(n.map((function (e) { return e.split(" "); }))); return this.forEach((function (e) { var n; (n = e.classList).remove.apply(n, Ki(r)); })), this; }, hasClass: function () { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t]; var r = ho(n.map((function (e) { return e.split(" "); }))); return mo(this, (function (e) { return r.filter((function (n) { return e.classList.contains(n); })).length > 0; })).length > 0; }, toggleClass: function () { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t]; var r = ho(n.map((function (e) { return e.split(" "); }))); this.forEach((function (e) { r.forEach((function (n) { e.classList.toggle(n); })); })); }, attr: function (e, n) { if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0; for (var t = 0; t < this.length; t += 1)
            if (2 === arguments.length)
                this[t].setAttribute(e, n);
            else
                for (var r in e)
                    this[t][r] = e[r], this[t].setAttribute(r, e[r]); return this; }, removeAttr: function (e) { for (var n = 0; n < this.length; n += 1)
            this[n].removeAttribute(e); return this; }, transform: function (e) { for (var n = 0; n < this.length; n += 1)
            this[n].style.transform = e; return this; }, transition: function (e) { for (var n = 0; n < this.length; n += 1)
            this[n].style.transitionDuration = "string" !== typeof e ? "".concat(e, "ms") : e; return this; }, on: function () { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t]; var r = n[0], a = n[1], i = n[2], o = n[3]; function l(e) { var n = e.target; if (n) {
            var t = e.target.dom7EventData || [];
            if (t.indexOf(e) < 0 && t.unshift(e), vo(n).is(a))
                i.apply(n, t);
            else
                for (var r = vo(n).parents(), o = 0; o < r.length; o += 1)
                    vo(r[o]).is(a) && i.apply(r[o], t);
        } } function s(e) { var n = e && e.target && e.target.dom7EventData || []; n.indexOf(e) < 0 && n.unshift(e), i.apply(this, n); } "function" === typeof n[1] && (r = n[0], i = n[1], o = n[2], a = void 0), o || (o = !1); for (var u, c = r.split(" "), d = 0; d < this.length; d += 1) {
            var f = this[d];
            if (a)
                for (u = 0; u < c.length; u += 1) {
                    var p = c[u];
                    f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []), f.dom7LiveListeners[p].push({ listener: i, proxyListener: l }), f.addEventListener(p, l, o);
                }
            else
                for (u = 0; u < c.length; u += 1) {
                    var h = c[u];
                    f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[h] || (f.dom7Listeners[h] = []), f.dom7Listeners[h].push({ listener: i, proxyListener: s }), f.addEventListener(h, s, o);
                }
        } return this; }, off: function () { for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t]; var r = n[0], a = n[1], i = n[2], o = n[3]; "function" === typeof n[1] && (r = n[0], i = n[1], o = n[2], a = void 0), o || (o = !1); for (var l = r.split(" "), s = 0; s < l.length; s += 1)
            for (var u = l[s], c = 0; c < this.length; c += 1) {
                var d = this[c], f = void 0;
                if (!a && d.dom7Listeners ? f = d.dom7Listeners[u] : a && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]), f && f.length)
                    for (var p = f.length - 1; p >= 0; p -= 1) {
                        var h = f[p];
                        i && h.listener === i || i && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === i ? (d.removeEventListener(u, h.proxyListener, o), f.splice(p, 1)) : i || (d.removeEventListener(u, h.proxyListener, o), f.splice(p, 1));
                    }
            } return this; }, trigger: function () { for (var e = ao(), n = arguments.length, t = new Array(n), r = 0; r < n; r++)
            t[r] = arguments[r]; for (var a = t[0].split(" "), i = t[1], o = 0; o < a.length; o += 1)
            for (var l = a[o], s = 0; s < this.length; s += 1) {
                var u = this[s];
                if (e.CustomEvent) {
                    var c = new e.CustomEvent(l, { detail: i, bubbles: !0, cancelable: !0 });
                    u.dom7EventData = t.filter((function (e, n) { return n > 0; })), u.dispatchEvent(c), u.dom7EventData = [], delete u.dom7EventData;
                }
            } return this; }, transitionEnd: function (e) { var n = this; return e && n.on("transitionend", (function t(r) { r.target === this && (e.call(this, r), n.off("transitionend", t)); })), this; }, outerWidth: function (e) { if (this.length > 0) {
            if (e) {
                var n = this.styles();
                return this[0].offsetWidth + parseFloat(n.getPropertyValue("margin-right")) + parseFloat(n.getPropertyValue("margin-left"));
            }
            return this[0].offsetWidth;
        } return null; }, outerHeight: function (e) { if (this.length > 0) {
            if (e) {
                var n = this.styles();
                return this[0].offsetHeight + parseFloat(n.getPropertyValue("margin-top")) + parseFloat(n.getPropertyValue("margin-bottom"));
            }
            return this[0].offsetHeight;
        } return null; }, styles: function () { var e = ao(); return this[0] ? e.getComputedStyle(this[0], null) : {}; }, offset: function () { if (this.length > 0) {
            var e = ao(), n = to(), t = this[0], r = t.getBoundingClientRect(), a = n.body, i = t.clientTop || a.clientTop || 0, o = t.clientLeft || a.clientLeft || 0, l = t === e ? e.scrollY : t.scrollTop, s = t === e ? e.scrollX : t.scrollLeft;
            return { top: r.top + l - i, left: r.left + s - o };
        } return null; }, css: function (e, n) { var t, r = ao(); if (1 === arguments.length) {
            if ("string" !== typeof e) {
                for (t = 0; t < this.length; t += 1)
                    for (var a in e)
                        this[t].style[a] = e[a];
                return this;
            }
            if (this[0])
                return r.getComputedStyle(this[0], null).getPropertyValue(e);
        } if (2 === arguments.length && "string" === typeof e) {
            for (t = 0; t < this.length; t += 1)
                this[t].style[e] = n;
            return this;
        } return this; }, each: function (e) { return e ? (this.forEach((function (n, t) { e.apply(n, [n, t]); })), this) : this; }, html: function (e) { if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null; for (var n = 0; n < this.length; n += 1)
            this[n].innerHTML = e; return this; }, text: function (e) { if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null; for (var n = 0; n < this.length; n += 1)
            this[n].textContent = e; return this; }, is: function (e) { var n, t, r = ao(), a = to(), i = this[0]; if (!i || "undefined" === typeof e)
            return !1; if ("string" === typeof e) {
            if (i.matches)
                return i.matches(e);
            if (i.webkitMatchesSelector)
                return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector)
                return i.msMatchesSelector(e);
            for (n = vo(e), t = 0; t < n.length; t += 1)
                if (n[t] === i)
                    return !0;
            return !1;
        } if (e === a)
            return i === a; if (e === r)
            return i === r; if (e.nodeType || e instanceof po) {
            for (n = e.nodeType ? [e] : e, t = 0; t < n.length; t += 1)
                if (n[t] === i)
                    return !0;
            return !1;
        } return !1; }, index: function () { var e, n = this[0]; if (n) {
            for (e = 0; null !== (n = n.previousSibling);)
                1 === n.nodeType && (e += 1);
            return e;
        } }, eq: function (e) { if ("undefined" === typeof e)
            return this; var n = this.length; if (e > n - 1)
            return vo([]); if (e < 0) {
            var t = n + e;
            return vo(t < 0 ? [] : [this[t]]);
        } return vo([this[e]]); }, append: function () { for (var e, n = to(), t = 0; t < arguments.length; t += 1) {
            e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            for (var r = 0; r < this.length; r += 1)
                if ("string" === typeof e) {
                    var a = n.createElement("div");
                    for (a.innerHTML = e; a.firstChild;)
                        this[r].appendChild(a.firstChild);
                }
                else if (e instanceof po)
                    for (var i = 0; i < e.length; i += 1)
                        this[r].appendChild(e[i]);
                else
                    this[r].appendChild(e);
        } return this; }, prepend: function (e) { var n, t, r = to(); for (n = 0; n < this.length; n += 1)
            if ("string" === typeof e) {
                var a = r.createElement("div");
                for (a.innerHTML = e, t = a.childNodes.length - 1; t >= 0; t -= 1)
                    this[n].insertBefore(a.childNodes[t], this[n].childNodes[0]);
            }
            else if (e instanceof po)
                for (t = 0; t < e.length; t += 1)
                    this[n].insertBefore(e[t], this[n].childNodes[0]);
            else
                this[n].insertBefore(e, this[n].childNodes[0]); return this; }, next: function (e) { return this.length > 0 ? e ? this[0].nextElementSibling && vo(this[0].nextElementSibling).is(e) ? vo([this[0].nextElementSibling]) : vo([]) : this[0].nextElementSibling ? vo([this[0].nextElementSibling]) : vo([]) : vo([]); }, nextAll: function (e) { var n = [], t = this[0]; if (!t)
            return vo([]); for (; t.nextElementSibling;) {
            var r = t.nextElementSibling;
            e ? vo(r).is(e) && n.push(r) : n.push(r), t = r;
        } return vo(n); }, prev: function (e) { if (this.length > 0) {
            var n = this[0];
            return e ? n.previousElementSibling && vo(n.previousElementSibling).is(e) ? vo([n.previousElementSibling]) : vo([]) : n.previousElementSibling ? vo([n.previousElementSibling]) : vo([]);
        } return vo([]); }, prevAll: function (e) { var n = [], t = this[0]; if (!t)
            return vo([]); for (; t.previousElementSibling;) {
            var r = t.previousElementSibling;
            e ? vo(r).is(e) && n.push(r) : n.push(r), t = r;
        } return vo(n); }, parent: function (e) { for (var n = [], t = 0; t < this.length; t += 1)
            null !== this[t].parentNode && (e ? vo(this[t].parentNode).is(e) && n.push(this[t].parentNode) : n.push(this[t].parentNode)); return vo(n); }, parents: function (e) { for (var n = [], t = 0; t < this.length; t += 1)
            for (var r = this[t].parentNode; r;)
                e ? vo(r).is(e) && n.push(r) : n.push(r), r = r.parentNode; return vo(n); }, closest: function (e) { var n = this; return "undefined" === typeof e ? vo([]) : (n.is(e) || (n = n.parents(e).eq(0)), n); }, find: function (e) { for (var n = [], t = 0; t < this.length; t += 1)
            for (var r = this[t].querySelectorAll(e), a = 0; a < r.length; a += 1)
                n.push(r[a]); return vo(n); }, children: function (e) { for (var n = [], t = 0; t < this.length; t += 1)
            for (var r = this[t].children, a = 0; a < r.length; a += 1)
                e && !vo(r[a]).is(e) || n.push(r[a]); return vo(n); }, filter: function (e) { return vo(mo(this, e)); }, remove: function () { for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this; } };
    Object.keys(bo).forEach((function (e) { Object.defineProperty(vo.fn, e, { value: bo[e], writable: !0 }); }));
    var wo, xo, So, ko = vo;
    function Eo(e, n) { return void 0 === n && (n = 0), setTimeout(e, n); }
    function Co() { return Date.now(); }
    function To(e, n) { void 0 === n && (n = "x"); var t, r, a, i = ao(), o = function (e) { var n, t = ao(); return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n; }(e); return i.WebKitCSSMatrix ? ((r = o.transform || o.webkitTransform).split(",").length > 6 && (r = r.split(", ").map((function (e) { return e.replace(",", "."); })).join(", ")), a = new i.WebKitCSSMatrix("none" === r ? "" : r)) : t = (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === n && (r = i.WebKitCSSMatrix ? a.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === n && (r = i.WebKitCSSMatrix ? a.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), r || 0; }
    function _o(e) { return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1); }
    function Ao(e) { return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType); }
    function Oo() { for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), n = ["__proto__", "constructor", "prototype"], t = 1; t < arguments.length; t += 1) {
        var r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (void 0 !== r && null !== r && !Ao(r))
            for (var a = Object.keys(Object(r)).filter((function (e) { return n.indexOf(e) < 0; })), i = 0, o = a.length; i < o; i += 1) {
                var l = a[i], s = Object.getOwnPropertyDescriptor(r, l);
                void 0 !== s && s.enumerable && (_o(e[l]) && _o(r[l]) ? r[l].__swiper__ ? e[l] = r[l] : Oo(e[l], r[l]) : !_o(e[l]) && _o(r[l]) ? (e[l] = {}, r[l].__swiper__ ? e[l] = r[l] : Oo(e[l], r[l])) : e[l] = r[l]);
            }
    } return e; }
    function Po(e, n, t) { e.style.setProperty(n, t); }
    function Lo(e) { var n, t = e.swiper, r = e.targetPosition, a = e.side, i = ao(), o = -t.translate, l = null, s = t.params.speed; t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID); var u = r > o ? "next" : "prev", c = function (e, n) { return "next" === u && e >= n || "prev" === u && e <= n; }; !function e() { n = (new Date).getTime(), null === l && (l = n); var u = Math.max(Math.min((n - l) / s, 1), 0), d = .5 - Math.cos(u * Math.PI) / 2, f = o + d * (r - o); if (c(f, r) && (f = r), t.wrapperEl.scrollTo(ot({}, a, f)), c(f, r))
        return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((function () { t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(ot({}, a, f)); })), void i.cancelAnimationFrame(t.cssModeFrameID); t.cssModeFrameID = i.requestAnimationFrame(e); }(); }
    function Io() { return wo || (wo = function () { var e = ao(), n = to(); return { smoothScroll: n.documentElement && "scrollBehavior" in n.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && n instanceof e.DocumentTouch), passiveListener: function () { var n = !1; try {
            var t = Object.defineProperty({}, "passive", { get: function () { n = !0; } });
            e.addEventListener("testPassiveListener", null, t);
        }
        catch (r) { } return n; }(), gestures: "ongesturestart" in e }; }()), wo; }
    function Do(e) { return void 0 === e && (e = {}), xo || (xo = function (e) { var n = (void 0 === e ? {} : e).userAgent, t = Io(), r = ao(), a = r.navigator.platform, i = n || r.navigator.userAgent, o = { ios: !1, android: !1 }, l = r.screen.width, s = r.screen.height, u = i.match(/(Android);?[\s\/]+([\d.]+)?/), c = i.match(/(iPad).*OS\s([\d_]+)/), d = i.match(/(iPod)(.*OS\s([\d_]+))?/), f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = "Win32" === a, h = "MacIntel" === a; return !c && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(s)) >= 0 && ((c = i.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), h = !1), u && !p && (o.os = "android", o.android = !0), (c || f || d) && (o.os = "ios", o.ios = !0), o; }(e)), xo; }
    function jo() { return So || (So = function () { var e = ao(); return { isSafari: function () { var n = e.navigator.userAgent.toLowerCase(); return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0; }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) }; }()), So; }
    var No = { on: function (e, n, t) { var r = this; if (!r.eventsListeners || r.destroyed)
            return r; if ("function" !== typeof n)
            return r; var a = t ? "unshift" : "push"; return e.split(" ").forEach((function (e) { r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](n); })), r; }, once: function (e, n, t) { var r = this; if (!r.eventsListeners || r.destroyed)
            return r; if ("function" !== typeof n)
            return r; function a() { r.off(e, a), a.__emitterProxy && delete a.__emitterProxy; for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)
            i[o] = arguments[o]; n.apply(r, i); } return a.__emitterProxy = n, r.on(e, a, t); }, onAny: function (e, n) { var t = this; if (!t.eventsListeners || t.destroyed)
            return t; if ("function" !== typeof e)
            return t; var r = n ? "unshift" : "push"; return t.eventsAnyListeners.indexOf(e) < 0 && t.eventsAnyListeners[r](e), t; }, offAny: function (e) { var n = this; if (!n.eventsListeners || n.destroyed)
            return n; if (!n.eventsAnyListeners)
            return n; var t = n.eventsAnyListeners.indexOf(e); return t >= 0 && n.eventsAnyListeners.splice(t, 1), n; }, off: function (e, n) { var t = this; return !t.eventsListeners || t.destroyed ? t : t.eventsListeners ? (e.split(" ").forEach((function (e) { "undefined" === typeof n ? t.eventsListeners[e] = [] : t.eventsListeners[e] && t.eventsListeners[e].forEach((function (r, a) { (r === n || r.__emitterProxy && r.__emitterProxy === n) && t.eventsListeners[e].splice(a, 1); })); })), t) : t; }, emit: function () { var e, n, t, r = this; if (!r.eventsListeners || r.destroyed)
            return r; if (!r.eventsListeners)
            return r; for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
            i[o] = arguments[o]; "string" === typeof i[0] || Array.isArray(i[0]) ? (e = i[0], n = i.slice(1, i.length), t = r) : (e = i[0].events, n = i[0].data, t = i[0].context || r), n.unshift(t); var l = Array.isArray(e) ? e : e.split(" "); return l.forEach((function (e) { r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach((function (r) { r.apply(t, [e].concat(Ki(n))); })), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach((function (e) { e.apply(t, n); })); })), r; } };
    var zo = { updateSize: function () { var e, n, t = this, r = t.$el; e = "undefined" !== typeof t.params.width && null !== t.params.width ? t.params.width : r[0].clientWidth, n = "undefined" !== typeof t.params.height && null !== t.params.height ? t.params.height : r[0].clientHeight, 0 === e && t.isHorizontal() || 0 === n && t.isVertical() || (e = e - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(n) && (n = 0), Object.assign(t, { width: e, height: n, size: t.isHorizontal() ? e : n })); }, updateSlides: function () { var e = this; function n(n) { return e.isHorizontal() ? n : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[n]; } function t(e, t) { return parseFloat(e.getPropertyValue(n(t)) || 0); } var r = e.params, a = e.$wrapperEl, i = e.size, o = e.rtlTranslate, l = e.wrongRTL, s = e.virtual && r.virtual.enabled, u = s ? e.virtual.slides.length : e.slides.length, c = a.children(".".concat(e.params.slideClass)), d = s ? e.virtual.slides.length : c.length, f = [], p = [], h = [], m = r.slidesOffsetBefore; "function" === typeof m && (m = r.slidesOffsetBefore.call(e)); var v = r.slidesOffsetAfter; "function" === typeof v && (v = r.slidesOffsetAfter.call(e)); var g = e.snapGrid.length, y = e.slidesGrid.length, b = r.spaceBetween, w = -m, x = 0, S = 0; if ("undefined" !== typeof i) {
            "string" === typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, o ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c.css({ marginRight: "", marginBottom: "", marginTop: "" }), r.centeredSlides && r.cssMode && (Po(e.wrapperEl, "--swiper-centered-offset-before", ""), Po(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var k, E = r.grid && r.grid.rows > 1 && e.grid;
            E && e.grid.initSlides(d);
            for (var C = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((function (e) { return "undefined" !== typeof r.breakpoints[e].slidesPerView; })).length > 0, T = 0; T < d; T += 1) {
                k = 0;
                var _ = c.eq(T);
                if (E && e.grid.updateSlide(T, _, d, n), "none" !== _.css("display")) {
                    if ("auto" === r.slidesPerView) {
                        C && (c[T].style[n("width")] = "");
                        var A = getComputedStyle(_[0]), O = _[0].style.transform, P = _[0].style.webkitTransform;
                        if (O && (_[0].style.transform = "none"), P && (_[0].style.webkitTransform = "none"), r.roundLengths)
                            k = e.isHorizontal() ? _.outerWidth(!0) : _.outerHeight(!0);
                        else {
                            var L = t(A, "width"), I = t(A, "padding-left"), D = t(A, "padding-right"), j = t(A, "margin-left"), N = t(A, "margin-right"), z = A.getPropertyValue("box-sizing");
                            if (z && "border-box" === z)
                                k = L + j + N;
                            else {
                                var M = _[0], R = M.clientWidth;
                                k = L + I + D + j + N + (M.offsetWidth - R);
                            }
                        }
                        O && (_[0].style.transform = O), P && (_[0].style.webkitTransform = P), r.roundLengths && (k = Math.floor(k));
                    }
                    else
                        k = (i - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (k = Math.floor(k)), c[T] && (c[T].style[n("width")] = "".concat(k, "px"));
                    c[T] && (c[T].swiperSlideSize = k), h.push(k), r.centeredSlides ? (w = w + k / 2 + x / 2 + b, 0 === x && 0 !== T && (w = w - i / 2 - b), 0 === T && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), r.roundLengths && (w = Math.floor(w)), S % r.slidesPerGroup === 0 && f.push(w), p.push(w)) : (r.roundLengths && (w = Math.floor(w)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup === 0 && f.push(w), p.push(w), w = w + k + b), e.virtualSize += k + b, x = k, S += 1;
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, i) + v, o && l && ("slide" === r.effect || "coverflow" === r.effect) && a.css({ width: "".concat(e.virtualSize + r.spaceBetween, "px") }), r.setWrapperSize && a.css(ot({}, n("width"), "".concat(e.virtualSize + r.spaceBetween, "px"))), E && e.grid.updateWrapperSize(k, f, n), !r.centeredSlides) {
                for (var F = [], B = 0; B < f.length; B += 1) {
                    var $ = f[B];
                    r.roundLengths && ($ = Math.floor($)), f[B] <= e.virtualSize - i && F.push($);
                }
                f = F, Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - i);
            }
            if (0 === f.length && (f = [0]), 0 !== r.spaceBetween) {
                var U = e.isHorizontal() && o ? "marginLeft" : n("marginRight");
                c.filter((function (e, n) { return !r.cssMode || n !== c.length - 1; })).css(ot({}, U, "".concat(b, "px")));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
                var H = 0;
                h.forEach((function (e) { H += e + (r.spaceBetween ? r.spaceBetween : 0); }));
                var W = (H -= r.spaceBetween) - i;
                f = f.map((function (e) { return e < 0 ? -m : e > W ? W + v : e; }));
            }
            if (r.centerInsufficientSlides) {
                var V = 0;
                if (h.forEach((function (e) { V += e + (r.spaceBetween ? r.spaceBetween : 0); })), (V -= r.spaceBetween) < i) {
                    var G = (i - V) / 2;
                    f.forEach((function (e, n) { f[n] = e - G; })), p.forEach((function (e, n) { p[n] = e + G; }));
                }
            }
            if (Object.assign(e, { slides: c, snapGrid: f, slidesGrid: p, slidesSizesGrid: h }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                Po(e.wrapperEl, "--swiper-centered-offset-before", "".concat(-f[0], "px")), Po(e.wrapperEl, "--swiper-centered-offset-after", "".concat(e.size / 2 - h[h.length - 1] / 2, "px"));
                var q = -e.snapGrid[0], Y = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((function (e) { return e + q; })), e.slidesGrid = e.slidesGrid.map((function (e) { return e + Y; }));
            }
            if (d !== u && e.emit("slidesLengthChange"), f.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== y && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), !s && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                var K = "".concat(r.containerModifierClass, "backface-hidden"), Q = e.$el.hasClass(K);
                d <= r.maxBackfaceHiddenSlides ? Q || e.$el.addClass(K) : Q && e.$el.removeClass(K);
            }
        } }, updateAutoHeight: function (e) { var n, t = this, r = [], a = t.virtual && t.params.virtual.enabled, i = 0; "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed); var o = function (e) { return a ? t.slides.filter((function (n) { return parseInt(n.getAttribute("data-swiper-slide-index"), 10) === e; }))[0] : t.slides.eq(e)[0]; }; if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
                (t.visibleSlides || ko([])).each((function (e) { r.push(e); }));
            else
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                    var l = t.activeIndex + n;
                    if (l > t.slides.length && !a)
                        break;
                    r.push(o(l));
                }
        else
            r.push(o(t.activeIndex)); for (n = 0; n < r.length; n += 1)
            if ("undefined" !== typeof r[n]) {
                var s = r[n].offsetHeight;
                i = s > i ? s : i;
            } (i || 0 === i) && t.$wrapperEl.css("height", "".concat(i, "px")); }, updateSlidesOffset: function () { for (var e = this.slides, n = 0; n < e.length; n += 1)
            e[n].swiperSlideOffset = this.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop; }, updateSlidesProgress: function (e) { void 0 === e && (e = this && this.translate || 0); var n = this, t = n.params, r = n.slides, a = n.rtlTranslate, i = n.snapGrid; if (0 !== r.length) {
            "undefined" === typeof r[0].swiperSlideOffset && n.updateSlidesOffset();
            var o = -e;
            a && (o = e), r.removeClass(t.slideVisibleClass), n.visibleSlidesIndexes = [], n.visibleSlides = [];
            for (var l = 0; l < r.length; l += 1) {
                var s = r[l], u = s.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (u -= r[0].swiperSlideOffset);
                var c = (o + (t.centeredSlides ? n.minTranslate() : 0) - u) / (s.swiperSlideSize + t.spaceBetween), d = (o - i[0] + (t.centeredSlides ? n.minTranslate() : 0) - u) / (s.swiperSlideSize + t.spaceBetween), f = -(o - u), p = f + n.slidesSizesGrid[l];
                (f >= 0 && f < n.size - 1 || p > 1 && p <= n.size || f <= 0 && p >= n.size) && (n.visibleSlides.push(s), n.visibleSlidesIndexes.push(l), r.eq(l).addClass(t.slideVisibleClass)), s.progress = a ? -c : c, s.originalProgress = a ? -d : d;
            }
            n.visibleSlides = ko(n.visibleSlides);
        } }, updateProgress: function (e) { var n = this; if ("undefined" === typeof e) {
            var t = n.rtlTranslate ? -1 : 1;
            e = n && n.translate && n.translate * t || 0;
        } var r = n.params, a = n.maxTranslate() - n.minTranslate(), i = n.progress, o = n.isBeginning, l = n.isEnd, s = o, u = l; 0 === a ? (i = 0, o = !0, l = !0) : (o = (i = (e - n.minTranslate()) / a) <= 0, l = i >= 1), Object.assign(n, { progress: i, isBeginning: o, isEnd: l }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && n.updateSlidesProgress(e), o && !s && n.emit("reachBeginning toEdge"), l && !u && n.emit("reachEnd toEdge"), (s && !o || u && !l) && n.emit("fromEdge"), n.emit("progress", i); }, updateSlidesClasses: function () { var e, n = this, t = n.slides, r = n.params, a = n.$wrapperEl, i = n.activeIndex, o = n.realIndex, l = n.virtual && r.virtual.enabled; t.removeClass("".concat(r.slideActiveClass, " ").concat(r.slideNextClass, " ").concat(r.slidePrevClass, " ").concat(r.slideDuplicateActiveClass, " ").concat(r.slideDuplicateNextClass, " ").concat(r.slideDuplicatePrevClass)), (e = l ? n.$wrapperEl.find(".".concat(r.slideClass, '[data-swiper-slide-index="').concat(i, '"]')) : t.eq(i)).addClass(r.slideActiveClass), r.loop && (e.hasClass(r.slideDuplicateClass) ? a.children(".".concat(r.slideClass, ":not(.").concat(r.slideDuplicateClass, ')[data-swiper-slide-index="').concat(o, '"]')).addClass(r.slideDuplicateActiveClass) : a.children(".".concat(r.slideClass, ".").concat(r.slideDuplicateClass, '[data-swiper-slide-index="').concat(o, '"]')).addClass(r.slideDuplicateActiveClass)); var s = e.nextAll(".".concat(r.slideClass)).eq(0).addClass(r.slideNextClass); r.loop && 0 === s.length && (s = t.eq(0)).addClass(r.slideNextClass); var u = e.prevAll(".".concat(r.slideClass)).eq(0).addClass(r.slidePrevClass); r.loop && 0 === u.length && (u = t.eq(-1)).addClass(r.slidePrevClass), r.loop && (s.hasClass(r.slideDuplicateClass) ? a.children(".".concat(r.slideClass, ":not(.").concat(r.slideDuplicateClass, ')[data-swiper-slide-index="').concat(s.attr("data-swiper-slide-index"), '"]')).addClass(r.slideDuplicateNextClass) : a.children(".".concat(r.slideClass, ".").concat(r.slideDuplicateClass, '[data-swiper-slide-index="').concat(s.attr("data-swiper-slide-index"), '"]')).addClass(r.slideDuplicateNextClass), u.hasClass(r.slideDuplicateClass) ? a.children(".".concat(r.slideClass, ":not(.").concat(r.slideDuplicateClass, ')[data-swiper-slide-index="').concat(u.attr("data-swiper-slide-index"), '"]')).addClass(r.slideDuplicatePrevClass) : a.children(".".concat(r.slideClass, ".").concat(r.slideDuplicateClass, '[data-swiper-slide-index="').concat(u.attr("data-swiper-slide-index"), '"]')).addClass(r.slideDuplicatePrevClass)), n.emitSlidesClasses(); }, updateActiveIndex: function (e) { var n, t = this, r = t.rtlTranslate ? t.translate : -t.translate, a = t.slidesGrid, i = t.snapGrid, o = t.params, l = t.activeIndex, s = t.realIndex, u = t.snapIndex, c = e; if ("undefined" === typeof c) {
            for (var d = 0; d < a.length; d += 1)
                "undefined" !== typeof a[d + 1] ? r >= a[d] && r < a[d + 1] - (a[d + 1] - a[d]) / 2 ? c = d : r >= a[d] && r < a[d + 1] && (c = d + 1) : r >= a[d] && (c = d);
            o.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0);
        } if (i.indexOf(r) >= 0)
            n = i.indexOf(r);
        else {
            var f = Math.min(o.slidesPerGroupSkip, c);
            n = f + Math.floor((c - f) / o.slidesPerGroup);
        } if (n >= i.length && (n = i.length - 1), c !== l) {
            var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, { snapIndex: n, realIndex: p, previousIndex: l, activeIndex: c }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), s !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
        }
        else
            n !== u && (t.snapIndex = n, t.emit("snapIndexChange")); }, updateClickedSlide: function (e) { var n, t = this, r = t.params, a = ko(e).closest(".".concat(r.slideClass))[0], i = !1; if (a)
            for (var o = 0; o < t.slides.length; o += 1)
                if (t.slides[o] === a) {
                    i = !0, n = o;
                    break;
                } if (!a || !i)
            return t.clickedSlide = void 0, void (t.clickedIndex = void 0); t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(ko(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, r.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide(); } };
    var Mo = { getTranslate: function (e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); var n = this, t = n.params, r = n.rtlTranslate, a = n.translate, i = n.$wrapperEl; if (t.virtualTranslate)
            return r ? -a : a; if (t.cssMode)
            return a; var o = To(i[0], e); return r && (o = -o), o || 0; }, setTranslate: function (e, n) { var t = this, r = t.rtlTranslate, a = t.params, i = t.$wrapperEl, o = t.wrapperEl, l = t.progress, s = 0, u = 0; t.isHorizontal() ? s = r ? -e : e : u = e, a.roundLengths && (s = Math.floor(s), u = Math.floor(u)), a.cssMode ? o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -s : -u : a.virtualTranslate || i.transform("translate3d(".concat(s, "px, ").concat(u, "px, ").concat(0, "px)")), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? s : u; var c = t.maxTranslate() - t.minTranslate(); (0 === c ? 0 : (e - t.minTranslate()) / c) !== l && t.updateProgress(e), t.emit("setTranslate", t.translate, n); }, minTranslate: function () { return -this.snapGrid[0]; }, maxTranslate: function () { return -this.snapGrid[this.snapGrid.length - 1]; }, translateTo: function (e, n, t, r, a) { void 0 === e && (e = 0), void 0 === n && (n = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = !0); var i = this, o = i.params, l = i.wrapperEl; if (i.animating && o.preventInteractionOnTransition)
            return !1; var s, u = i.minTranslate(), c = i.maxTranslate(); if (s = r && e > u ? u : r && e < c ? c : e, i.updateProgress(s), o.cssMode) {
            var d = i.isHorizontal();
            if (0 === n)
                l[d ? "scrollLeft" : "scrollTop"] = -s;
            else {
                var f;
                if (!i.support.smoothScroll)
                    return Lo({ swiper: i, targetPosition: -s, side: d ? "left" : "top" }), !0;
                l.scrollTo((ot(f = {}, d ? "left" : "top", -s), ot(f, "behavior", "smooth"), f));
            }
            return !0;
        } return 0 === n ? (i.setTransition(0), i.setTranslate(s), t && (i.emit("beforeTransitionStart", n, a), i.emit("transitionEnd"))) : (i.setTransition(n), i.setTranslate(s), t && (i.emit("beforeTransitionStart", n, a), i.emit("transitionStart")), i.animating || (i.animating = !0, i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function (e) { i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd), i.onTranslateToWrapperTransitionEnd = null, delete i.onTranslateToWrapperTransitionEnd, t && i.emit("transitionEnd")); }), i.$wrapperEl[0].addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd))), !0; } };
    function Ro(e) { var n = e.swiper, t = e.runCallbacks, r = e.direction, a = e.step, i = n.activeIndex, o = n.previousIndex, l = r; if (l || (l = i > o ? "next" : i < o ? "prev" : "reset"), n.emit("transition".concat(a)), t && i !== o) {
        if ("reset" === l)
            return void n.emit("slideResetTransition".concat(a));
        n.emit("slideChangeTransition".concat(a)), "next" === l ? n.emit("slideNextTransition".concat(a)) : n.emit("slidePrevTransition".concat(a));
    } }
    var Fo = { slideTo: function (e, n, t, r, a) { if (void 0 === e && (e = 0), void 0 === n && (n = this.params.speed), void 0 === t && (t = !0), "number" !== typeof e && "string" !== typeof e)
            throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(typeof e, "] given.")); if ("string" === typeof e) {
            var i = parseInt(e, 10);
            if (!isFinite(i))
                throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
            e = i;
        } var o = this, l = e; l < 0 && (l = 0); var s = o.params, u = o.snapGrid, c = o.slidesGrid, d = o.previousIndex, f = o.activeIndex, p = o.rtlTranslate, h = o.wrapperEl, m = o.enabled; if (o.animating && s.preventInteractionOnTransition || !m && !r && !a)
            return !1; var v = Math.min(o.params.slidesPerGroupSkip, l), g = v + Math.floor((l - v) / o.params.slidesPerGroup); g >= u.length && (g = u.length - 1), (f || s.initialSlide || 0) === (d || 0) && t && o.emit("beforeSlideChangeStart"); var y, b = -u[g]; if (o.updateProgress(b), s.normalizeSlideIndex)
            for (var w = 0; w < c.length; w += 1) {
                var x = -Math.floor(100 * b), S = Math.floor(100 * c[w]), k = Math.floor(100 * c[w + 1]);
                "undefined" !== typeof c[w + 1] ? x >= S && x < k - (k - S) / 2 ? l = w : x >= S && x < k && (l = w + 1) : x >= S && (l = w);
            } if (o.initialized && l !== f) {
            if (!o.allowSlideNext && b < o.translate && b < o.minTranslate())
                return !1;
            if (!o.allowSlidePrev && b > o.translate && b > o.maxTranslate() && (f || 0) !== l)
                return !1;
        } if (y = l > f ? "next" : l < f ? "prev" : "reset", p && -b === o.translate || !p && b === o.translate)
            return o.updateActiveIndex(l), s.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== s.effect && o.setTranslate(b), "reset" !== y && (o.transitionStart(t, y), o.transitionEnd(t, y)), !1; if (s.cssMode) {
            var E = o.isHorizontal(), C = p ? b : -b;
            if (0 === n) {
                var T = o.virtual && o.params.virtual.enabled;
                T && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), h[E ? "scrollLeft" : "scrollTop"] = C, T && requestAnimationFrame((function () { o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1; }));
            }
            else {
                var _;
                if (!o.support.smoothScroll)
                    return Lo({ swiper: o, targetPosition: C, side: E ? "left" : "top" }), !0;
                h.scrollTo((ot(_ = {}, E ? "left" : "top", C), ot(_, "behavior", "smooth"), _));
            }
            return !0;
        } return o.setTransition(n), o.setTranslate(b), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", n, r), o.transitionStart(t, y), 0 === n ? o.transitionEnd(t, y) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function (e) { o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(t, y)); }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0; }, slideToLoop: function (e, n, t, r) { if (void 0 === e && (e = 0), void 0 === n && (n = this.params.speed), void 0 === t && (t = !0), "string" === typeof e) {
            var a = parseInt(e, 10);
            if (!isFinite(a))
                throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
            e = a;
        } var i = this, o = e; return i.params.loop && (o += i.loopedSlides), i.slideTo(o, n, t, r); }, slideNext: function (e, n, t) { void 0 === e && (e = this.params.speed), void 0 === n && (n = !0); var r = this, a = r.animating, i = r.enabled, o = r.params; if (!i)
            return r; var l = o.slidesPerGroup; "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (l = Math.max(r.slidesPerViewDynamic("current", !0), 1)); var s = r.activeIndex < o.slidesPerGroupSkip ? 1 : l; if (o.loop) {
            if (a && o.loopPreventsSlide)
                return !1;
            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
        } return o.rewind && r.isEnd ? r.slideTo(0, e, n, t) : r.slideTo(r.activeIndex + s, e, n, t); }, slidePrev: function (e, n, t) { void 0 === e && (e = this.params.speed), void 0 === n && (n = !0); var r = this, a = r.params, i = r.animating, o = r.snapGrid, l = r.slidesGrid, s = r.rtlTranslate; if (!r.enabled)
            return r; if (a.loop) {
            if (i && a.loopPreventsSlide)
                return !1;
            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
        } function u(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e); } var c, d = u(s ? r.translate : -r.translate), f = o.map((function (e) { return u(e); })), p = o[f.indexOf(d) - 1]; "undefined" === typeof p && a.cssMode && (o.forEach((function (e, n) { d >= e && (c = n); })), "undefined" !== typeof c && (p = o[c > 0 ? c - 1 : c])); var h = 0; if ("undefined" !== typeof p && ((h = l.indexOf(p)) < 0 && (h = r.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), a.rewind && r.isBeginning) {
            var m = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
            return r.slideTo(m, e, n, t);
        } return r.slideTo(h, e, n, t); }, slideReset: function (e, n, t) { return void 0 === e && (e = this.params.speed), void 0 === n && (n = !0), this.slideTo(this.activeIndex, e, n, t); }, slideToClosest: function (e, n, t, r) { void 0 === e && (e = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = .5); var a = this, i = a.activeIndex, o = Math.min(a.params.slidesPerGroupSkip, i), l = o + Math.floor((i - o) / a.params.slidesPerGroup), s = a.rtlTranslate ? a.translate : -a.translate; if (s >= a.snapGrid[l]) {
            var u = a.snapGrid[l];
            s - u > (a.snapGrid[l + 1] - u) * r && (i += a.params.slidesPerGroup);
        }
        else {
            var c = a.snapGrid[l - 1];
            s - c <= (a.snapGrid[l] - c) * r && (i -= a.params.slidesPerGroup);
        } return i = Math.max(i, 0), i = Math.min(i, a.slidesGrid.length - 1), a.slideTo(i, e, n, t); }, slideToClickedSlide: function () { var e, n = this, t = n.params, r = n.$wrapperEl, a = "auto" === t.slidesPerView ? n.slidesPerViewDynamic() : t.slidesPerView, i = n.clickedIndex; if (t.loop) {
            if (n.animating)
                return;
            e = parseInt(ko(n.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? i < n.loopedSlides - a / 2 || i > n.slides.length - n.loopedSlides + a / 2 ? (n.loopFix(), i = r.children(".".concat(t.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(t.slideDuplicateClass, ")")).eq(0).index(), Eo((function () { n.slideTo(i); }))) : n.slideTo(i) : i > n.slides.length - a ? (n.loopFix(), i = r.children(".".concat(t.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(t.slideDuplicateClass, ")")).eq(0).index(), Eo((function () { n.slideTo(i); }))) : n.slideTo(i);
        }
        else
            n.slideTo(i); } };
    var Bo = { loopCreate: function () { var e = this, n = to(), t = e.params, r = e.$wrapperEl, a = r.children().length > 0 ? ko(r.children()[0].parentNode) : r; a.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove(); var i = a.children(".".concat(t.slideClass)); if (t.loopFillGroupWithBlank) {
            var o = t.slidesPerGroup - i.length % t.slidesPerGroup;
            if (o !== t.slidesPerGroup) {
                for (var l = 0; l < o; l += 1) {
                    var s = ko(n.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));
                    a.append(s);
                }
                i = a.children(".".concat(t.slideClass));
            }
        } "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = i.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > i.length && e.params.loopedSlidesLimit && (e.loopedSlides = i.length); var u = [], c = []; i.each((function (e, n) { ko(e).attr("data-swiper-slide-index", n); })); for (var d = 0; d < e.loopedSlides; d += 1) {
            var f = d - Math.floor(d / i.length) * i.length;
            c.push(i.eq(f)[0]), u.unshift(i.eq(i.length - f - 1)[0]);
        } for (var p = 0; p < c.length; p += 1)
            a.append(ko(c[p].cloneNode(!0)).addClass(t.slideDuplicateClass)); for (var h = u.length - 1; h >= 0; h -= 1)
            a.prepend(ko(u[h].cloneNode(!0)).addClass(t.slideDuplicateClass)); }, loopFix: function () { var e = this; e.emit("beforeLoopFix"); var n, t = e.activeIndex, r = e.slides, a = e.loopedSlides, i = e.allowSlidePrev, o = e.allowSlideNext, l = e.snapGrid, s = e.rtlTranslate; e.allowSlidePrev = !0, e.allowSlideNext = !0; var u = -l[t] - e.getTranslate(); if (t < a)
            n = r.length - 3 * a + t, n += a, e.slideTo(n, 0, !1, !0) && 0 !== u && e.setTranslate((s ? -e.translate : e.translate) - u);
        else if (t >= r.length - a) {
            n = -r.length + t + a, n += a, e.slideTo(n, 0, !1, !0) && 0 !== u && e.setTranslate((s ? -e.translate : e.translate) - u);
        } e.allowSlidePrev = i, e.allowSlideNext = o, e.emit("loopFix"); }, loopDestroy: function () { var e = this, n = e.$wrapperEl, t = e.params, r = e.slides; n.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), r.removeAttr("data-swiper-slide-index"); } };
    function $o(e) { var n = this, t = to(), r = ao(), a = n.touchEventsData, i = n.params, o = n.touches; if (n.enabled && (!n.animating || !i.preventInteractionOnTransition)) {
        !n.animating && i.cssMode && i.loop && n.loopFix();
        var l = e;
        l.originalEvent && (l = l.originalEvent);
        var s = ko(l.target);
        if (("wrapper" !== i.touchEventsTarget || s.closest(n.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0) && (!a.isTouched || !a.isMoved))) {
            !!i.noSwipingClass && "" !== i.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (s = ko(e.path[0]));
            var u = i.noSwipingSelector ? i.noSwipingSelector : ".".concat(i.noSwipingClass), c = !(!l.target || !l.target.shadowRoot);
            if (i.noSwiping && (c ? function (e, n) { return void 0 === n && (n = this), function n(t) { if (!t || t === to() || t === ao())
                return null; t.assignedSlot && (t = t.assignedSlot); var r = t.closest(e); return r || t.getRootNode ? r || n(t.getRootNode().host) : null; }(n); }(u, s[0]) : s.closest(u)[0]))
                n.allowClick = !0;
            else if (!i.swipeHandler || s.closest(i.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var d = o.currentX, f = o.currentY, p = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection, h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                if (p && (d <= h || d >= r.innerWidth - h)) {
                    if ("prevent" !== p)
                        return;
                    e.preventDefault();
                }
                if (Object.assign(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), o.startX = d, o.startY = f, a.touchStartTime = Co(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, i.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                    var m = !0;
                    s.is(a.focusableElements) && (m = !1, "SELECT" === s[0].nodeName && (a.isTouched = !1)), t.activeElement && ko(t.activeElement).is(a.focusableElements) && t.activeElement !== s[0] && t.activeElement.blur();
                    var v = m && n.allowTouchMove && i.touchStartPreventDefault;
                    !i.touchStartForcePreventDefault && !v || s[0].isContentEditable || l.preventDefault();
                }
                n.params.freeMode && n.params.freeMode.enabled && n.freeMode && n.animating && !i.cssMode && n.freeMode.onTouchStart(), n.emit("touchStart", l);
            }
        }
    } }
    function Uo(e) { var n = to(), t = this, r = t.touchEventsData, a = t.params, i = t.touches, o = t.rtlTranslate; if (t.enabled) {
        var l = e;
        if (l.originalEvent && (l = l.originalEvent), r.isTouched) {
            if (!r.isTouchEvent || "touchmove" === l.type) {
                var s = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]), u = "touchmove" === l.type ? s.pageX : l.pageX, c = "touchmove" === l.type ? s.pageY : l.pageY;
                if (l.preventedByNestedSwiper)
                    return i.startX = u, void (i.startY = c);
                if (!t.allowTouchMove)
                    return ko(l.target).is(r.focusableElements) || (t.allowClick = !1), void (r.isTouched && (Object.assign(i, { startX: u, startY: c, currentX: u, currentY: c }), r.touchStartTime = Co()));
                if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (t.isVertical()) {
                        if (c < i.startY && t.translate <= t.maxTranslate() || c > i.startY && t.translate >= t.minTranslate())
                            return r.isTouched = !1, void (r.isMoved = !1);
                    }
                    else if (u < i.startX && t.translate <= t.maxTranslate() || u > i.startX && t.translate >= t.minTranslate())
                        return;
                if (r.isTouchEvent && n.activeElement && l.target === n.activeElement && ko(l.target).is(r.focusableElements))
                    return r.isMoved = !0, void (t.allowClick = !1);
                if (r.allowTouchCallbacks && t.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    i.currentX = u, i.currentY = c;
                    var d = i.currentX - i.startX, f = i.currentY - i.startY;
                    if (!(t.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) < t.params.threshold)) {
                        var p;
                        if ("undefined" === typeof r.isScrolling)
                            t.isHorizontal() && i.currentY === i.startY || t.isVertical() && i.currentX === i.startX ? r.isScrolling = !1 : d * d + f * f >= 25 && (p = 180 * Math.atan2(Math.abs(f), Math.abs(d)) / Math.PI, r.isScrolling = t.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle);
                        if (r.isScrolling && t.emit("touchMoveOpposite", l), "undefined" === typeof r.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (r.startMoving = !0)), r.isScrolling)
                            r.isTouched = !1;
                        else if (r.startMoving) {
                            t.allowClick = !1, !a.cssMode && l.cancelable && l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), r.isMoved || (a.loop && !a.cssMode && t.loopFix(), r.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !a.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", l)), t.emit("sliderMove", l), r.isMoved = !0;
                            var h = t.isHorizontal() ? d : f;
                            i.diff = h, h *= a.touchRatio, o && (h = -h), t.swipeDirection = h > 0 ? "prev" : "next", r.currentTranslate = h + r.startTranslate;
                            var m = !0, v = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (v = 0), h > 0 && r.currentTranslate > t.minTranslate() ? (m = !1, a.resistance && (r.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + r.startTranslate + h, v))) : h < 0 && r.currentTranslate < t.maxTranslate() && (m = !1, a.resistance && (r.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - r.startTranslate - h, v))), m && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), t.allowSlidePrev || t.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                                if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
                                    return void (r.currentTranslate = r.startTranslate);
                                if (!r.allowThresholdMove)
                                    return r.allowThresholdMove = !0, i.startX = i.currentX, i.startY = i.currentY, r.currentTranslate = r.startTranslate, void (i.diff = t.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY);
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && t.freeMode || a.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), t.params.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(r.currentTranslate), t.setTranslate(r.currentTranslate));
                        }
                    }
                }
            }
        }
        else
            r.startMoving && r.isScrolling && t.emit("touchMoveOpposite", l);
    } }
    function Ho(e) { var n = this, t = n.touchEventsData, r = n.params, a = n.touches, i = n.rtlTranslate, o = n.slidesGrid; if (n.enabled) {
        var l = e;
        if (l.originalEvent && (l = l.originalEvent), t.allowTouchCallbacks && n.emit("touchEnd", l), t.allowTouchCallbacks = !1, !t.isTouched)
            return t.isMoved && r.grabCursor && n.setGrabCursor(!1), t.isMoved = !1, void (t.startMoving = !1);
        r.grabCursor && t.isMoved && t.isTouched && (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) && n.setGrabCursor(!1);
        var s, u = Co(), c = u - t.touchStartTime;
        if (n.allowClick) {
            var d = l.path || l.composedPath && l.composedPath();
            n.updateClickedSlide(d && d[0] || l.target), n.emit("tap click", l), c < 300 && u - t.lastClickTime < 300 && n.emit("doubleTap doubleClick", l);
        }
        if (t.lastClickTime = Co(), Eo((function () { n.destroyed || (n.allowClick = !0); })), !t.isTouched || !t.isMoved || !n.swipeDirection || 0 === a.diff || t.currentTranslate === t.startTranslate)
            return t.isTouched = !1, t.isMoved = !1, void (t.startMoving = !1);
        if (t.isTouched = !1, t.isMoved = !1, t.startMoving = !1, s = r.followFinger ? i ? n.translate : -n.translate : -t.currentTranslate, !r.cssMode)
            if (n.params.freeMode && r.freeMode.enabled)
                n.freeMode.onTouchEnd({ currentPos: s });
            else {
                for (var f = 0, p = n.slidesSizesGrid[0], h = 0; h < o.length; h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                    var m = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    "undefined" !== typeof o[h + m] ? s >= o[h] && s < o[h + m] && (f = h, p = o[h + m] - o[h]) : s >= o[h] && (f = h, p = o[o.length - 1] - o[o.length - 2]);
                }
                var v = null, g = null;
                r.rewind && (n.isBeginning ? g = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1 : n.isEnd && (v = 0));
                var y = (s - o[f]) / p, b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (c > r.longSwipesMs) {
                    if (!r.longSwipes)
                        return void n.slideTo(n.activeIndex);
                    "next" === n.swipeDirection && (y >= r.longSwipesRatio ? n.slideTo(r.rewind && n.isEnd ? v : f + b) : n.slideTo(f)), "prev" === n.swipeDirection && (y > 1 - r.longSwipesRatio ? n.slideTo(f + b) : null !== g && y < 0 && Math.abs(y) > r.longSwipesRatio ? n.slideTo(g) : n.slideTo(f));
                }
                else {
                    if (!r.shortSwipes)
                        return void n.slideTo(n.activeIndex);
                    n.navigation && (l.target === n.navigation.nextEl || l.target === n.navigation.prevEl) ? l.target === n.navigation.nextEl ? n.slideTo(f + b) : n.slideTo(f) : ("next" === n.swipeDirection && n.slideTo(null !== v ? v : f + b), "prev" === n.swipeDirection && n.slideTo(null !== g ? g : f));
                }
            }
    } }
    function Wo() { var e = this, n = e.params, t = e.el; if (!t || 0 !== t.offsetWidth) {
        n.breakpoints && e.setBreakpoint();
        var r = e.allowSlideNext, a = e.allowSlidePrev, i = e.snapGrid;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === n.slidesPerView || n.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = a, e.allowSlideNext = r, e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
    } }
    function Vo(e) { var n = this; n.enabled && (n.allowClick || (n.params.preventClicks && e.preventDefault(), n.params.preventClicksPropagation && n.animating && (e.stopPropagation(), e.stopImmediatePropagation()))); }
    function Go() { var e = this, n = e.wrapperEl, t = e.rtlTranslate; if (e.enabled) {
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -n.scrollLeft : e.translate = -n.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        var r = e.maxTranslate() - e.minTranslate();
        (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(t ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    } }
    var qo = !1;
    function Yo() { }
    var Ko = function (e, n) { var t = to(), r = e.params, a = e.touchEvents, i = e.el, o = e.wrapperEl, l = e.device, s = e.support, u = !!r.nested, c = "on" === n ? "addEventListener" : "removeEventListener", d = n; if (s.touch) {
        var f = !("touchstart" !== a.start || !s.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
        i[c](a.start, e.onTouchStart, f), i[c](a.move, e.onTouchMove, s.passiveListener ? { passive: !1, capture: u } : u), i[c](a.end, e.onTouchEnd, f), a.cancel && i[c](a.cancel, e.onTouchEnd, f);
    }
    else
        i[c](a.start, e.onTouchStart, !1), t[c](a.move, e.onTouchMove, u), t[c](a.end, e.onTouchEnd, !1); (r.preventClicks || r.preventClicksPropagation) && i[c]("click", e.onClick, !0), r.cssMode && o[c]("scroll", e.onScroll), r.updateOnWindowResize ? e[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Wo, !0) : e[d]("observerUpdate", Wo, !0); };
    var Qo = { attachEvents: function () { var e = this, n = to(), t = e.params, r = e.support; e.onTouchStart = $o.bind(e), e.onTouchMove = Uo.bind(e), e.onTouchEnd = Ho.bind(e), t.cssMode && (e.onScroll = Go.bind(e)), e.onClick = Vo.bind(e), r.touch && !qo && (n.addEventListener("touchstart", Yo), qo = !0), Ko(e, "on"); }, detachEvents: function () { Ko(this, "off"); } }, Xo = function (e, n) { return e.grid && n.grid && n.grid.rows > 1; };
    var Jo = { setBreakpoint: function () { var e = this, n = e.activeIndex, t = e.initialized, r = e.loopedSlides, a = void 0 === r ? 0 : r, i = e.params, o = e.$el, l = i.breakpoints; if (l && (!l || 0 !== Object.keys(l).length)) {
            var s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (s && e.currentBreakpoint !== s) {
                var u = (s in l ? l[s] : void 0) || e.originalParams, c = Xo(e, i), d = Xo(e, u), f = i.enabled;
                c && !d ? (o.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !c && d && (o.addClass("".concat(i.containerModifierClass, "grid")), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === i.grid.fill) && o.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((function (n) { var t = i[n] && i[n].enabled, r = u[n] && u[n].enabled; t && !r && e[n].disable(), !t && r && e[n].enable(); }));
                var p = u.direction && u.direction !== i.direction, h = i.loop && (u.slidesPerView !== i.slidesPerView || p);
                p && t && e.changeDirection(), Oo(e.params, u);
                var m = e.params.enabled;
                Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), f && !m ? e.disable() : !f && m && e.enable(), e.currentBreakpoint = s, e.emit("_beforeBreakpoint", u), h && t && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(n - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", u);
            }
        } }, getBreakpoint: function (e, n, t) { if (void 0 === n && (n = "window"), e && ("container" !== n || t)) {
            var r = !1, a = ao(), i = "window" === n ? a.innerHeight : t.clientHeight, o = Object.keys(e).map((function (e) { if ("string" === typeof e && 0 === e.indexOf("@")) {
                var n = parseFloat(e.substr(1));
                return { value: i * n, point: e };
            } return { value: e, point: e }; }));
            o.sort((function (e, n) { return parseInt(e.value, 10) - parseInt(n.value, 10); }));
            for (var l = 0; l < o.length; l += 1) {
                var s = o[l], u = s.point, c = s.value;
                "window" === n ? a.matchMedia("(min-width: ".concat(c, "px)")).matches && (r = u) : c <= t.clientWidth && (r = u);
            }
            return r || "max";
        } } };
    var Zo = { addClasses: function () { var e = this, n = e.classNames, t = e.params, r = e.rtl, a = e.$el, i = e.device, o = e.support, l = function (e, n) { var t = []; return e.forEach((function (e) { "object" === typeof e ? Object.keys(e).forEach((function (r) { e[r] && t.push(n + r); })) : "string" === typeof e && t.push(n + e); })), t; }(["initialized", t.direction, { "pointer-events": !o.touch }, { "free-mode": e.params.freeMode && t.freeMode.enabled }, { autoheight: t.autoHeight }, { rtl: r }, { grid: t.grid && t.grid.rows > 1 }, { "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill }, { android: i.android }, { ios: i.ios }, { "css-mode": t.cssMode }, { centered: t.cssMode && t.centeredSlides }, { "watch-progress": t.watchSlidesProgress }], t.containerModifierClass); n.push.apply(n, Ki(l)), a.addClass(Ki(n).join(" ")), e.emitContainerClasses(); }, removeClasses: function () { var e = this, n = e.$el, t = e.classNames; n.removeClass(t.join(" ")), e.emitContainerClasses(); } };
    var el = { init: !0, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, resizeObserver: !0, nested: !1, createElements: !1, enabled: !0, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: !1, userAgent: null, url: null, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: !1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopedSlidesLimit: !0, loopFillGroupWithBlank: !1, loopPreventsSlide: !0, rewind: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0, _emitClasses: !1 };
    function nl(e, n) { return function (t) { void 0 === t && (t = {}); var r = Object.keys(t)[0], a = t[r]; "object" === typeof a && null !== a ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = { auto: !0 }), r in e && "enabled" in a ? (!0 === e[r] && (e[r] = { enabled: !0 }), "object" !== typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = { enabled: !1 }), Oo(n, t)) : Oo(n, t)) : Oo(n, t); }; }
    var tl = { eventsEmitter: No, update: zo, translate: Mo, transition: { setTransition: function (e, n) { var t = this; t.params.cssMode || t.$wrapperEl.transition(e), t.emit("setTransition", e, n); }, transitionStart: function (e, n) { void 0 === e && (e = !0); var t = this, r = t.params; r.cssMode || (r.autoHeight && t.updateAutoHeight(), Ro({ swiper: t, runCallbacks: e, direction: n, step: "Start" })); }, transitionEnd: function (e, n) { void 0 === e && (e = !0); var t = this, r = t.params; t.animating = !1, r.cssMode || (t.setTransition(0), Ro({ swiper: t, runCallbacks: e, direction: n, step: "End" })); } }, slide: Fo, loop: Bo, grabCursor: { setGrabCursor: function (e) { var n = this; if (!(n.support.touch || !n.params.simulateTouch || n.params.watchOverflow && n.isLocked || n.params.cssMode)) {
                var t = "container" === n.params.touchEventsTarget ? n.el : n.wrapperEl;
                t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab";
            } }, unsetGrabCursor: function () { var e = this; e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = ""); } }, events: Qo, breakpoints: Jo, checkOverflow: { checkOverflow: function () { var e = this, n = e.isLocked, t = e.params, r = t.slidesOffsetBefore; if (r) {
                var a = e.slides.length - 1, i = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * r;
                e.isLocked = e.size > i;
            }
            else
                e.isLocked = 1 === e.snapGrid.length; !0 === t.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === t.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), n && n !== e.isLocked && (e.isEnd = !1), n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"); } }, classes: Zo, images: { loadImage: function (e, n, t, r, a, i) { var o, l = ao(); function s() { i && i(); } ko(e).parent("picture")[0] || e.complete && a ? s() : n ? ((o = new l.Image).onload = s, o.onerror = s, r && (o.sizes = r), t && (o.srcset = t), n && (o.src = n)) : s(); }, preloadImages: function () { var e = this; function n() { "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))); } e.imagesToLoad = e.$el.find("img"); for (var t = 0; t < e.imagesToLoad.length; t += 1) {
                var r = e.imagesToLoad[t];
                e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, n);
            } } } }, rl = {}, al = function () { function e() { var n, t; Qi(this, e); for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i]; if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : (n = a[0], t = a[1]), t || (t = {}), t = Oo({}, t), n && !t.el && (t.el = n), t.el && ko(t.el).length > 1) {
        var o = [];
        return ko(t.el).each((function (n) { var r = Oo({}, t, { el: n }); o.push(new e(r)); })), o;
    } var l, s = this; (s.__swiper__ = !0, s.support = Io(), s.device = Do({ userAgent: t.userAgent }), s.browser = jo(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = Ki(s.__modules__), t.modules && Array.isArray(t.modules)) && (l = s.modules).push.apply(l, Ki(t.modules)); var u = {}; s.modules.forEach((function (e) { e({ swiper: s, extendParams: nl(t, u), on: s.on.bind(s), once: s.once.bind(s), off: s.off.bind(s), emit: s.emit.bind(s) }); })); var c = Oo({}, el, u); return s.params = Oo({}, c, rl, t), s.originalParams = Oo({}, s.params), s.passedParams = Oo({}, t), s.params && s.params.on && Object.keys(s.params.on).forEach((function (e) { s.on(e, s.params.on[e]); })), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = ko, Object.assign(s, { enabled: s.params.enabled, el: n, classNames: [], slides: ko(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function () { return "horizontal" === s.params.direction; }, isVertical: function () { return "vertical" === s.params.direction; }, activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: s.params.allowSlideNext, allowSlidePrev: s.params.allowSlidePrev, touchEvents: function () { var e = ["touchstart", "touchmove", "touchend", "touchcancel"], n = ["pointerdown", "pointermove", "pointerup"]; return s.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }, s.touchEventsDesktop = { start: n[0], move: n[1], end: n[2] }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop; }(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: s.params.focusableElements, lastClickTime: Co(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: s.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), s.emit("_swiper"), s.params.init && s.init(), s; } return Ji(e, [{ key: "enable", value: function () { var e = this; e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable")); } }, { key: "disable", value: function () { var e = this; e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable")); } }, { key: "setProgress", value: function (e, n) { var t = this; e = Math.min(Math.max(e, 0), 1); var r = t.minTranslate(), a = (t.maxTranslate() - r) * e + r; t.translateTo(a, "undefined" === typeof n ? 0 : n), t.updateActiveIndex(), t.updateSlidesClasses(); } }, { key: "emitContainerClasses", value: function () { var e = this; if (e.params._emitClasses && e.el) {
                var n = e.el.className.split(" ").filter((function (n) { return 0 === n.indexOf("swiper") || 0 === n.indexOf(e.params.containerModifierClass); }));
                e.emit("_containerClasses", n.join(" "));
            } } }, { key: "getSlideClasses", value: function (e) { var n = this; return n.destroyed ? "" : e.className.split(" ").filter((function (e) { return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(n.params.slideClass); })).join(" "); } }, { key: "emitSlidesClasses", value: function () { var e = this; if (e.params._emitClasses && e.el) {
                var n = [];
                e.slides.each((function (t) { var r = e.getSlideClasses(t); n.push({ slideEl: t, classNames: r }), e.emit("_slideClass", t, r); })), e.emit("_slideClasses", n);
            } } }, { key: "slidesPerViewDynamic", value: function (e, n) { void 0 === e && (e = "current"), void 0 === n && (n = !1); var t = this, r = t.params, a = t.slides, i = t.slidesGrid, o = t.slidesSizesGrid, l = t.size, s = t.activeIndex, u = 1; if (r.centeredSlides) {
                for (var c, d = a[s].swiperSlideSize, f = s + 1; f < a.length; f += 1)
                    a[f] && !c && (u += 1, (d += a[f].swiperSlideSize) > l && (c = !0));
                for (var p = s - 1; p >= 0; p -= 1)
                    a[p] && !c && (u += 1, (d += a[p].swiperSlideSize) > l && (c = !0));
            }
            else if ("current" === e)
                for (var h = s + 1; h < a.length; h += 1) {
                    (n ? i[h] + o[h] - i[s] < l : i[h] - i[s] < l) && (u += 1);
                }
            else
                for (var m = s - 1; m >= 0; m -= 1) {
                    i[s] - i[m] < l && (u += 1);
                } return u; } }, { key: "update", value: function () { var e = this; if (e && !e.destroyed) {
                var n = e.snapGrid, t = e.params;
                t.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(), t.watchOverflow && n !== e.snapGrid && e.checkOverflow(), e.emit("update");
            } function r() { var n = e.rtlTranslate ? -1 * e.translate : e.translate, t = Math.min(Math.max(n, e.maxTranslate()), e.minTranslate()); e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses(); } } }, { key: "changeDirection", value: function (e, n) { void 0 === n && (n = !0); var t = this, r = t.params.direction; return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (t.$el.removeClass("".concat(t.params.containerModifierClass).concat(r)).addClass("".concat(t.params.containerModifierClass).concat(e)), t.emitContainerClasses(), t.params.direction = e, t.slides.each((function (n) { "vertical" === e ? n.style.width = "" : n.style.height = ""; })), t.emit("changeDirection"), n && t.update()), t; } }, { key: "changeLanguageDirection", value: function (e) { var n = this; n.rtl && "rtl" === e || !n.rtl && "ltr" === e || (n.rtl = "rtl" === e, n.rtlTranslate = "horizontal" === n.params.direction && n.rtl, n.rtl ? (n.$el.addClass("".concat(n.params.containerModifierClass, "rtl")), n.el.dir = "rtl") : (n.$el.removeClass("".concat(n.params.containerModifierClass, "rtl")), n.el.dir = "ltr"), n.update()); } }, { key: "mount", value: function (e) { var n = this; if (n.mounted)
                return !0; var t = ko(e || n.params.el); if (!(e = t[0]))
                return !1; e.swiper = n; var r = function () { return ".".concat((n.params.wrapperClass || "").trim().split(" ").join(".")); }, a = function () { if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                var n = ko(e.shadowRoot.querySelector(r()));
                return n.children = function (e) { return t.children(e); }, n;
            } return t.children ? t.children(r()) : ko(t).children(r()); }(); if (0 === a.length && n.params.createElements) {
                var i = to().createElement("div");
                a = ko(i), i.className = n.params.wrapperClass, t.append(i), t.children(".".concat(n.params.slideClass)).each((function (e) { a.append(e); }));
            } return Object.assign(n, { $el: t, el: e, $wrapperEl: a, wrapperEl: a[0], mounted: !0, rtl: "rtl" === e.dir.toLowerCase() || "rtl" === t.css("direction"), rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === t.css("direction")), wrongRTL: "-webkit-box" === a.css("display") }), !0; } }, { key: "init", value: function (e) { var n = this; return n.initialized || !1 === n.mount(e) || (n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.params.loop && n.loopCreate(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.enabled && n.setGrabCursor(), n.params.preloadImages && n.preloadImages(), n.params.loop ? n.slideTo(n.params.initialSlide + n.loopedSlides, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0), n.attachEvents(), n.initialized = !0, n.emit("init"), n.emit("afterInit")), n; } }, { key: "destroy", value: function (e, n) { void 0 === e && (e = !0), void 0 === n && (n = !0); var t = this, r = t.params, a = t.$el, i = t.$wrapperEl, o = t.slides; return "undefined" === typeof t.params || t.destroyed || (t.emit("beforeDestroy"), t.initialized = !1, t.detachEvents(), r.loop && t.loopDestroy(), n && (t.removeClasses(), a.removeAttr("style"), i.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), t.emit("destroy"), Object.keys(t.eventsListeners).forEach((function (e) { t.off(e); })), !1 !== e && (t.$el[0].swiper = null, function (e) { var n = e; Object.keys(n).forEach((function (e) { try {
                n[e] = null;
            }
            catch (t) { } try {
                delete n[e];
            }
            catch (t) { } })); }(t)), t.destroyed = !0), null; } }], [{ key: "extendDefaults", value: function (e) { Oo(rl, e); } }, { key: "extendedDefaults", get: function () { return rl; } }, { key: "defaults", get: function () { return el; } }, { key: "installModule", value: function (n) { e.prototype.__modules__ || (e.prototype.__modules__ = []); var t = e.prototype.__modules__; "function" === typeof n && t.indexOf(n) < 0 && t.push(n); } }, { key: "use", value: function (n) { return Array.isArray(n) ? (n.forEach((function (n) { return e.installModule(n); })), e) : (e.installModule(n), e); } }]), e; }();
    Object.keys(tl).forEach((function (e) { Object.keys(tl[e]).forEach((function (n) { al.prototype[n] = tl[e][n]; })); })), al.use([function (e) { var n = e.swiper, t = e.on, r = e.emit, a = ao(), i = null, o = null, l = function () { n && !n.destroyed && n.initialized && (r("beforeResize"), r("resize")); }, s = function () { n && !n.destroyed && n.initialized && r("orientationchange"); }; t("init", (function () { n.params.resizeObserver && "undefined" !== typeof a.ResizeObserver ? n && !n.destroyed && n.initialized && (i = new ResizeObserver((function (e) { o = a.requestAnimationFrame((function () { var t = n.width, r = n.height, a = t, i = r; e.forEach((function (e) { var t = e.contentBoxSize, r = e.contentRect, o = e.target; o && o !== n.el || (a = r ? r.width : (t[0] || t).inlineSize, i = r ? r.height : (t[0] || t).blockSize); })), a === t && i === r || l(); })); })), i.observe(n.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", s)); })), t("destroy", (function () { o && a.cancelAnimationFrame(o), i && i.unobserve && n.el && (i.unobserve(n.el), i = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", s); })); }, function (e) { var n = e.swiper, t = e.extendParams, r = e.on, a = e.emit, i = [], o = ao(), l = function (e, n) { void 0 === n && (n = {}); var t = new (o.MutationObserver || o.WebkitMutationObserver)((function (e) { if (1 !== e.length) {
            var n = function () { a("observerUpdate", e[0]); };
            o.requestAnimationFrame ? o.requestAnimationFrame(n) : o.setTimeout(n, 0);
        }
        else
            a("observerUpdate", e[0]); })); t.observe(e, { attributes: "undefined" === typeof n.attributes || n.attributes, childList: "undefined" === typeof n.childList || n.childList, characterData: "undefined" === typeof n.characterData || n.characterData }), i.push(t); }; t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r("init", (function () { if (n.params.observer) {
            if (n.params.observeParents)
                for (var e = n.$el.parents(), t = 0; t < e.length; t += 1)
                    l(e[t]);
            l(n.$el[0], { childList: n.params.observeSlideChildren }), l(n.$wrapperEl[0], { attributes: !1 });
        } })), r("destroy", (function () { i.forEach((function (e) { e.disconnect(); })), i.splice(0, i.length); })); }]);
    var il = al;
    function ol(e, n, t, r) { var a = to(); return e.params.createElements && Object.keys(r).forEach((function (i) { if (!t[i] && !0 === t.auto) {
        var o = e.$el.children(".".concat(r[i]))[0];
        o || ((o = a.createElement("div")).className = r[i], e.$el.append(o)), t[i] = o, n[i] = o;
    } })), t; }
    function ll(e) { var n = e.swiper, t = e.extendParams, r = e.on, a = e.emit; function i(e) { var t; return e && (t = ko(e), n.params.uniqueNavElements && "string" === typeof e && t.length > 1 && 1 === n.$el.find(e).length && (t = n.$el.find(e))), t; } function o(e, t) { var r = n.params.navigation; e && e.length > 0 && (e[t ? "addClass" : "removeClass"](r.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t), n.params.watchOverflow && n.enabled && e[n.isLocked ? "addClass" : "removeClass"](r.lockClass)); } function l() { if (!n.params.loop) {
        var e = n.navigation, t = e.$nextEl;
        o(e.$prevEl, n.isBeginning && !n.params.rewind), o(t, n.isEnd && !n.params.rewind);
    } } function s(e) { e.preventDefault(), (!n.isBeginning || n.params.loop || n.params.rewind) && (n.slidePrev(), a("navigationPrev")); } function u(e) { e.preventDefault(), (!n.isEnd || n.params.loop || n.params.rewind) && (n.slideNext(), a("navigationNext")); } function c() { var e = n.params.navigation; if (n.params.navigation = ol(n, n.originalParams.navigation, n.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), e.nextEl || e.prevEl) {
        var t = i(e.nextEl), r = i(e.prevEl);
        t && t.length > 0 && t.on("click", u), r && r.length > 0 && r.on("click", s), Object.assign(n.navigation, { $nextEl: t, nextEl: t && t[0], $prevEl: r, prevEl: r && r[0] }), n.enabled || (t && t.addClass(e.lockClass), r && r.addClass(e.lockClass));
    } } function d() { var e = n.navigation, t = e.$nextEl, r = e.$prevEl; t && t.length && (t.off("click", u), t.removeClass(n.params.navigation.disabledClass)), r && r.length && (r.off("click", s), r.removeClass(n.params.navigation.disabledClass)); } t({ navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), n.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }, r("init", (function () { !1 === n.params.navigation.enabled ? f() : (c(), l()); })), r("toEdge fromEdge lock unlock", (function () { l(); })), r("destroy", (function () { d(); })), r("enable disable", (function () { var e = n.navigation, t = e.$nextEl, r = e.$prevEl; t && t[n.enabled ? "removeClass" : "addClass"](n.params.navigation.lockClass), r && r[n.enabled ? "removeClass" : "addClass"](n.params.navigation.lockClass); })), r("click", (function (e, t) { var r = n.navigation, i = r.$nextEl, o = r.$prevEl, l = t.target; if (n.params.navigation.hideOnClick && !ko(l).is(o) && !ko(l).is(i)) {
        if (n.pagination && n.params.pagination && n.params.pagination.clickable && (n.pagination.el === l || n.pagination.el.contains(l)))
            return;
        var s;
        i ? s = i.hasClass(n.params.navigation.hiddenClass) : o && (s = o.hasClass(n.params.navigation.hiddenClass)), a(!0 === s ? "navigationShow" : "navigationHide"), i && i.toggleClass(n.params.navigation.hiddenClass), o && o.toggleClass(n.params.navigation.hiddenClass);
    } })); var f = function () { n.$el.addClass(n.params.navigation.navigationDisabledClass), d(); }; Object.assign(n.navigation, { enable: function () { n.$el.removeClass(n.params.navigation.navigationDisabledClass), c(), l(); }, disable: f, update: l, init: c, destroy: d }); }
    function sl(e) { return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")); }
    function ul(e) { var n, t = e.swiper, r = e.extendParams, a = e.on, i = e.emit, o = "swiper-pagination"; r({ pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function (e) { return e; }, formatFractionTotal: function (e) { return e; }, bulletClass: "".concat(o, "-bullet"), bulletActiveClass: "".concat(o, "-bullet-active"), modifierClass: "".concat(o, "-"), currentClass: "".concat(o, "-current"), totalClass: "".concat(o, "-total"), hiddenClass: "".concat(o, "-hidden"), progressbarFillClass: "".concat(o, "-progressbar-fill"), progressbarOppositeClass: "".concat(o, "-progressbar-opposite"), clickableClass: "".concat(o, "-clickable"), lockClass: "".concat(o, "-lock"), horizontalClass: "".concat(o, "-horizontal"), verticalClass: "".concat(o, "-vertical"), paginationDisabledClass: "".concat(o, "-disabled") } }), t.pagination = { el: null, $el: null, bullets: [] }; var l = 0; function s() { return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length; } function u(e, n) { var r = t.params.pagination.bulletActiveClass; e[n]().addClass("".concat(r, "-").concat(n))[n]().addClass("".concat(r, "-").concat(n, "-").concat(n)); } function c() { var e = t.rtl, r = t.params.pagination; if (!s()) {
        var a, o = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, c = t.pagination.$el, d = t.params.loop ? Math.ceil((o - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? ((a = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > o - 1 - 2 * t.loopedSlides && (a -= o - 2 * t.loopedSlides), a > d - 1 && (a -= d), a < 0 && "bullets" !== t.params.paginationType && (a = d + a)) : a = "undefined" !== typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            var f, p, h, m = t.pagination.bullets;
            if (r.dynamicBullets && (n = m.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(t.isHorizontal() ? "width" : "height", "".concat(n * (r.dynamicMainBullets + 4), "px")), r.dynamicMainBullets > 1 && void 0 !== t.previousIndex && ((l += a - (t.previousIndex - t.loopedSlides || 0)) > r.dynamicMainBullets - 1 ? l = r.dynamicMainBullets - 1 : l < 0 && (l = 0)), f = Math.max(a - l, 0), h = ((p = f + (Math.min(m.length, r.dynamicMainBullets) - 1)) + f) / 2), m.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((function (e) { return "".concat(r.bulletActiveClass).concat(e); })).join(" ")), c.length > 1)
                m.each((function (e) { var n = ko(e), t = n.index(); t === a && n.addClass(r.bulletActiveClass), r.dynamicBullets && (t >= f && t <= p && n.addClass("".concat(r.bulletActiveClass, "-main")), t === f && u(n, "prev"), t === p && u(n, "next")); }));
            else {
                var v = m.eq(a), g = v.index();
                if (v.addClass(r.bulletActiveClass), r.dynamicBullets) {
                    for (var y = m.eq(f), b = m.eq(p), w = f; w <= p; w += 1)
                        m.eq(w).addClass("".concat(r.bulletActiveClass, "-main"));
                    if (t.params.loop)
                        if (g >= m.length) {
                            for (var x = r.dynamicMainBullets; x >= 0; x -= 1)
                                m.eq(m.length - x).addClass("".concat(r.bulletActiveClass, "-main"));
                            m.eq(m.length - r.dynamicMainBullets - 1).addClass("".concat(r.bulletActiveClass, "-prev"));
                        }
                        else
                            u(y, "prev"), u(b, "next");
                    else
                        u(y, "prev"), u(b, "next");
                }
            }
            if (r.dynamicBullets) {
                var S = Math.min(m.length, r.dynamicMainBullets + 4), k = (n * S - n) / 2 - h * n, E = e ? "right" : "left";
                m.css(t.isHorizontal() ? E : "top", "".concat(k, "px"));
            }
        }
        if ("fraction" === r.type && (c.find(sl(r.currentClass)).text(r.formatFractionCurrent(a + 1)), c.find(sl(r.totalClass)).text(r.formatFractionTotal(d))), "progressbar" === r.type) {
            var C;
            C = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
            var T = (a + 1) / d, _ = 1, A = 1;
            "horizontal" === C ? _ = T : A = T, c.find(sl(r.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_, ") scaleY(").concat(A, ")")).transition(t.params.speed);
        }
        "custom" === r.type && r.renderCustom ? (c.html(r.renderCustom(t, a + 1, d)), i("paginationRender", c[0])) : i("paginationUpdate", c[0]), t.params.watchOverflow && t.enabled && c[t.isLocked ? "addClass" : "removeClass"](r.lockClass);
    } } function d() { var e = t.params.pagination; if (!s()) {
        var n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, r = t.pagination.$el, a = "";
        if ("bullets" === e.type) {
            var o = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && o > n && (o = n);
            for (var l = 0; l < o; l += 1)
                e.renderBullet ? a += e.renderBullet.call(t, l, e.bulletClass) : a += "<".concat(e.bulletElement, ' class="').concat(e.bulletClass, '"></').concat(e.bulletElement, ">");
            r.html(a), t.pagination.bullets = r.find(sl(e.bulletClass));
        }
        "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : '<span class="'.concat(e.currentClass, '"></span>') + " / " + '<span class="'.concat(e.totalClass, '"></span>'), r.html(a)), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : '<span class="'.concat(e.progressbarFillClass, '"></span>'), r.html(a)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
    } } function f() { t.params.pagination = ol(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" }); var e = t.params.pagination; if (e.el) {
        var n = ko(e.el);
        0 !== n.length && (t.params.uniqueNavElements && "string" === typeof e.el && n.length > 1 && (n = t.$el.find(e.el)).length > 1 && (n = n.filter((function (e) { return ko(e).parents(".swiper")[0] === t.el; }))), "bullets" === e.type && e.clickable && n.addClass(e.clickableClass), n.addClass(e.modifierClass + e.type), n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.addClass(e.progressbarOppositeClass), e.clickable && n.on("click", sl(e.bulletClass), (function (e) { e.preventDefault(); var n = ko(this).index() * t.params.slidesPerGroup; t.params.loop && (n += t.loopedSlides), t.slideTo(n); })), Object.assign(t.pagination, { $el: n, el: n[0] }), t.enabled || n.addClass(e.lockClass));
    } } function p() { var e = t.params.pagination; if (!s()) {
        var n = t.pagination.$el;
        n.removeClass(e.hiddenClass), n.removeClass(e.modifierClass + e.type), n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && n.off("click", sl(e.bulletClass));
    } } a("init", (function () { !1 === t.params.pagination.enabled ? h() : (f(), d(), c()); })), a("activeIndexChange", (function () { (t.params.loop || "undefined" === typeof t.snapIndex) && c(); })), a("snapIndexChange", (function () { t.params.loop || c(); })), a("slidesLengthChange", (function () { t.params.loop && (d(), c()); })), a("snapGridLengthChange", (function () { t.params.loop || (d(), c()); })), a("destroy", (function () { p(); })), a("enable disable", (function () { var e = t.pagination.$el; e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass); })), a("lock unlock", (function () { c(); })), a("click", (function (e, n) { var r = n.target, a = t.pagination.$el; if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !ko(r).hasClass(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && r === t.navigation.nextEl || t.navigation.prevEl && r === t.navigation.prevEl))
            return;
        var o = a.hasClass(t.params.pagination.hiddenClass);
        i(!0 === o ? "paginationShow" : "paginationHide"), a.toggleClass(t.params.pagination.hiddenClass);
    } })); var h = function () { t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), p(); }; Object.assign(t.pagination, { enable: function () { t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), f(), d(), c(); }, disable: h, render: d, update: c, init: f, destroy: p }); }
    function cl(e) { var n, t = e.swiper, r = e.extendParams, a = e.on, i = e.emit; function o() { if (!t.size)
        return t.autoplay.running = !1, void (t.autoplay.paused = !1); var e = t.slides.eq(t.activeIndex), r = t.params.autoplay.delay; e.attr("data-swiper-autoplay") && (r = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(n), n = Eo((function () { var e; t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), e = t.slidePrev(t.params.speed, !0, !0), i("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? s() : (e = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), i("autoplay")) : (e = t.slidePrev(t.params.speed, !0, !0), i("autoplay")) : t.params.loop ? (t.loopFix(), e = t.slideNext(t.params.speed, !0, !0), i("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? s() : (e = t.slideTo(0, t.params.speed, !0, !0), i("autoplay")) : (e = t.slideNext(t.params.speed, !0, !0), i("autoplay")), (t.params.cssMode && t.autoplay.running || !1 === e) && o(); }), r); } function l() { return "undefined" === typeof n && (!t.autoplay.running && (t.autoplay.running = !0, i("autoplayStart"), o(), !0)); } function s() { return !!t.autoplay.running && ("undefined" !== typeof n && (n && (clearTimeout(n), n = void 0), t.autoplay.running = !1, i("autoplayStop"), !0)); } function u(e) { t.autoplay.running && (t.autoplay.paused || (n && clearTimeout(n), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function (e) { t.$wrapperEl[0].addEventListener(e, d); })) : (t.autoplay.paused = !1, o()))); } function c() { var e = to(); "hidden" === e.visibilityState && t.autoplay.running && u(), "visible" === e.visibilityState && t.autoplay.paused && (o(), t.autoplay.paused = !1); } function d(e) { t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function (e) { t.$wrapperEl[0].removeEventListener(e, d); })), t.autoplay.paused = !1, t.autoplay.running ? o() : s()); } function f() { t.params.autoplay.disableOnInteraction ? s() : (i("autoplayPause"), u()), ["transitionend", "webkitTransitionEnd"].forEach((function (e) { t.$wrapperEl[0].removeEventListener(e, d); })); } function p() { t.params.autoplay.disableOnInteraction || (t.autoplay.paused = !1, i("autoplayResume"), o()); } t.autoplay = { running: !1, paused: !1 }, r({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }), a("init", (function () { t.params.autoplay.enabled && (l(), to().addEventListener("visibilitychange", c), t.params.autoplay.pauseOnMouseEnter && (t.$el.on("mouseenter", f), t.$el.on("mouseleave", p))); })), a("beforeTransitionStart", (function (e, n, r) { t.autoplay.running && (r || !t.params.autoplay.disableOnInteraction ? t.autoplay.pause(n) : s()); })), a("sliderFirstMove", (function () { t.autoplay.running && (t.params.autoplay.disableOnInteraction ? s() : u()); })), a("touchEnd", (function () { t.params.cssMode && t.autoplay.paused && !t.params.autoplay.disableOnInteraction && o(); })), a("destroy", (function () { t.$el.off("mouseenter", f), t.$el.off("mouseleave", p), t.autoplay.running && s(), to().removeEventListener("visibilitychange", c); })), Object.assign(t.autoplay, { pause: u, run: o, start: l, stop: s }); }
    function dl(e) { var n, t, r, a = e.swiper; (0, e.extendParams)({ grid: { rows: 1, fill: "column" } }); a.grid = { initSlides: function (e) { var i = a.params.slidesPerView, o = a.params.grid, l = o.rows, s = o.fill; t = n / l, r = Math.floor(e / l), n = Math.floor(e / l) === e / l ? e : Math.ceil(e / l) * l, "auto" !== i && "row" === s && (n = Math.max(n, i * l)); }, updateSlide: function (e, i, o, l) { var s, u, c, d = a.params, f = d.slidesPerGroup, p = d.spaceBetween, h = a.params.grid, m = h.rows, v = h.fill; if ("row" === v && f > 1) {
            var g = Math.floor(e / (f * m)), y = e - m * f * g, b = 0 === g ? f : Math.min(Math.ceil((o - g * m * f) / m), f);
            s = (u = y - (c = Math.floor(y / b)) * b + g * f) + c * n / m, i.css({ "-webkit-order": s, order: s });
        }
        else
            "column" === v ? (c = e - (u = Math.floor(e / m)) * m, (u > r || u === r && c === m - 1) && (c += 1) >= m && (c = 0, u += 1)) : u = e - (c = Math.floor(e / t)) * t; i.css(l("margin-top"), 0 !== c ? p && "".concat(p, "px") : ""); }, updateWrapperSize: function (e, t, r) { var i = a.params, o = i.spaceBetween, l = i.centeredSlides, s = i.roundLengths, u = a.params.grid.rows; if (a.virtualSize = (e + o) * n, a.virtualSize = Math.ceil(a.virtualSize / u) - o, a.$wrapperEl.css(ot({}, r("width"), "".concat(a.virtualSize + o, "px"))), l) {
            t.splice(0, t.length);
            for (var c = [], d = 0; d < t.length; d += 1) {
                var f = t[d];
                s && (f = Math.floor(f)), t[d] < a.virtualSize + t[0] && c.push(f);
            }
            t.push.apply(t, c);
        } } }; }
    function fl(e) { return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1); }
    function pl(e, n) { var t = ["__proto__", "constructor", "prototype"]; Object.keys(n).filter((function (e) { return t.indexOf(e) < 0; })).forEach((function (t) { "undefined" === typeof e[t] ? e[t] = n[t] : fl(n[t]) && fl(e[t]) && Object.keys(n[t]).length > 0 ? n[t].__swiper__ ? e[t] = n[t] : pl(e[t], n[t]) : e[t] = n[t]; })); }
    function hl(e) { return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl; }
    function ml(e) { return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el; }
    function vl(e) { return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el; }
    function gl(e) { void 0 === e && (e = ""); var n = e.split(" ").map((function (e) { return e.trim(); })).filter((function (e) { return !!e; })), t = []; return n.forEach((function (e) { t.indexOf(e) < 0 && t.push(e); })), t.join(" "); }
    var yl = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
    function bl(e, n) { var t = n.slidesPerView; if (n.breakpoints) {
        var r = il.prototype.getBreakpoint(n.breakpoints), a = r in n.breakpoints ? n.breakpoints[r] : void 0;
        a && a.slidesPerView && (t = a.slidesPerView);
    } var i = Math.ceil(parseFloat(n.loopedSlides || t, 10)); return (i += n.loopAdditionalSlides) > e.length && n.loopedSlidesLimit && (i = e.length), i; }
    function wl(e) { var t = []; return n.Children.toArray(e).forEach((function (e) { e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && wl(e.props.children).forEach((function (e) { return t.push(e); })); })), t; }
    function xl(e) { var t = [], r = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] }; return n.Children.toArray(e).forEach((function (e) { if (e.type && "SwiperSlide" === e.type.displayName)
        t.push(e);
    else if (e.props && e.props.slot && r[e.props.slot])
        r[e.props.slot].push(e);
    else if (e.props && e.props.children) {
        var n = wl(e.props.children);
        n.length > 0 ? n.forEach((function (e) { return t.push(e); })) : r["container-end"].push(e);
    }
    else
        r["container-end"].push(e); })), { slides: t, slots: r }; }
    function Sl(e) { var n, t, r, a, i, o = e.swiper, l = e.slides, s = e.passedParams, u = e.changedParams, c = e.nextEl, d = e.prevEl, f = e.scrollbarEl, p = e.paginationEl, h = u.filter((function (e) { return "children" !== e && "direction" !== e; })), m = o.params, v = o.pagination, g = o.navigation, y = o.scrollbar, b = o.virtual, w = o.thumbs; u.includes("thumbs") && s.thumbs && s.thumbs.swiper && m.thumbs && !m.thumbs.swiper && (n = !0), u.includes("controller") && s.controller && s.controller.control && m.controller && !m.controller.control && (t = !0), u.includes("pagination") && s.pagination && (s.pagination.el || p) && (m.pagination || !1 === m.pagination) && v && !v.el && (r = !0), u.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || f) && (m.scrollbar || !1 === m.scrollbar) && y && !y.el && (a = !0), u.includes("navigation") && s.navigation && (s.navigation.prevEl || d) && (s.navigation.nextEl || c) && (m.navigation || !1 === m.navigation) && g && !g.prevEl && !g.nextEl && (i = !0); (h.forEach((function (e) { if (fl(m[e]) && fl(s[e]))
        pl(m[e], s[e]);
    else {
        var n = s[e];
        !0 !== n && !1 !== n || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? m[e] = s[e] : !1 === n && o[t = e] && (o[t].destroy(), "navigation" === t ? (m[t].prevEl = void 0, m[t].nextEl = void 0, o[t].prevEl = void 0, o[t].nextEl = void 0) : (m[t].el = void 0, o[t].el = void 0));
    } var t; })), h.includes("controller") && !t && o.controller && o.controller.control && m.controller && m.controller.control && (o.controller.control = m.controller.control), u.includes("children") && l && b && m.virtual.enabled ? (b.slides = l, b.update(!0)) : u.includes("children") && o.lazy && o.params.lazy.enabled && o.lazy.load(), n) && (w.init() && w.update(!0)); t && (o.controller.control = m.controller.control), r && (p && (m.pagination.el = p), v.init(), v.render(), v.update()), a && (f && (m.scrollbar.el = f), y.init(), y.updateSize(), y.setTranslate()), i && (c && (m.navigation.nextEl = c), d && (m.navigation.prevEl = d), g.init(), g.update()), u.includes("allowSlideNext") && (o.allowSlideNext = s.allowSlideNext), u.includes("allowSlidePrev") && (o.allowSlidePrev = s.allowSlidePrev), u.includes("direction") && o.changeDirection(s.direction, !1), o.update(); }
    function kl(e, t) { return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t); }
    var El = (0, n.createContext)(null), Cl = (0, n.createContext)(null), Tl = ["className", "tag", "wrapperTag", "children", "onSwiper"];
    function _l() { return _l = Object.assign ? Object.assign.bind() : function (e) { for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    } return e; }, _l.apply(this, arguments); }
    var Al = (0, n.forwardRef)((function (e, t) { var r = void 0 === e ? {} : e, a = r.className, i = r.tag, l = void 0 === i ? "div" : i, s = r.wrapperTag, u = void 0 === s ? "div" : s, c = r.children, d = r.onSwiper, f = Qr(r, Tl), p = !1, h = o((0, n.useState)("swiper"), 2), m = h[0], v = h[1], g = o((0, n.useState)(null), 2), y = g[0], b = g[1], w = o((0, n.useState)(!1), 2), x = w[0], S = w[1], k = (0, n.useRef)(!1), E = (0, n.useRef)(null), C = (0, n.useRef)(null), T = (0, n.useRef)(null), _ = (0, n.useRef)(null), A = (0, n.useRef)(null), O = (0, n.useRef)(null), P = (0, n.useRef)(null), L = (0, n.useRef)(null), I = function (e, n) { void 0 === e && (e = {}), void 0 === n && (n = !0); var t = { on: {} }, r = {}, a = {}; pl(t, il.defaults), pl(t, il.extendedDefaults), t._emitClasses = !0, t.init = !1; var i = {}, o = yl.map((function (e) { return e.replace(/_/, ""); })), l = Object.assign({}, e); return Object.keys(l).forEach((function (l) { "undefined" !== typeof e[l] && (o.indexOf(l) >= 0 ? fl(e[l]) ? (t[l] = {}, a[l] = {}, pl(t[l], e[l]), pl(a[l], e[l])) : (t[l] = e[l], a[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l] ? n ? r["".concat(l[2].toLowerCase()).concat(l.substr(3))] = e[l] : t.on["".concat(l[2].toLowerCase()).concat(l.substr(3))] = e[l] : i[l] = e[l]); })), ["navigation", "pagination", "scrollbar"].forEach((function (e) { !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e]; })), { params: t, passedParams: a, rest: i, events: r }; }(f), D = I.params, j = I.passedParams, N = I.rest, z = I.events, M = xl(c), R = M.slides, F = M.slots, B = function () { S(!x); }; Object.assign(D.on, { _containerClasses: function (e, n) { v(n); } }); var $ = function () { if (Object.assign(D.on, z), p = !0, C.current = new il(D), C.current.loopCreate = function () { }, C.current.loopDestroy = function () { }, D.loop && (C.current.loopedSlides = bl(R, D)), C.current.virtual && C.current.params.virtual.enabled) {
        C.current.virtual.slides = R;
        var e = { cache: !1, slides: R, renderExternal: b, renderExternalUpdate: !1 };
        pl(C.current.params.virtual, e), pl(C.current.originalParams.virtual, e);
    } }; E.current || $(), C.current && C.current.on("_beforeBreakpoint", B); return (0, n.useEffect)((function () { return function () { C.current && C.current.off("_beforeBreakpoint", B); }; })), (0, n.useEffect)((function () { !k.current && C.current && (C.current.emitSlidesClasses(), k.current = !0); })), kl((function () { if (t && (t.current = E.current), E.current)
        return C.current.destroyed && $(), function (e, n) { var t = e.el, r = e.nextEl, a = e.prevEl, i = e.paginationEl, o = e.scrollbarEl, l = e.swiper; hl(n) && r && a && (l.params.navigation.nextEl = r, l.originalParams.navigation.nextEl = r, l.params.navigation.prevEl = a, l.originalParams.navigation.prevEl = a), ml(n) && i && (l.params.pagination.el = i, l.originalParams.pagination.el = i), vl(n) && o && (l.params.scrollbar.el = o, l.originalParams.scrollbar.el = o), l.init(t); }({ el: E.current, nextEl: A.current, prevEl: O.current, paginationEl: P.current, scrollbarEl: L.current, swiper: C.current }, D), d && d(C.current), function () { C.current && !C.current.destroyed && C.current.destroy(!0, !1); }; }), []), kl((function () { !p && z && C.current && Object.keys(z).forEach((function (e) { C.current.on(e, z[e]); })); var e = function (e, n, t, r, a) { var i = []; if (!n)
        return i; var o = function (e) { i.indexOf(e) < 0 && i.push(e); }; if (t && r) {
        var l = r.map(a), s = t.map(a);
        l.join("") !== s.join("") && o("children"), r.length !== t.length && o("children");
    } return yl.filter((function (e) { return "_" === e[0]; })).map((function (e) { return e.replace(/_/, ""); })).forEach((function (t) { if (t in e && t in n)
        if (fl(e[t]) && fl(n[t])) {
            var r = Object.keys(e[t]), a = Object.keys(n[t]);
            r.length !== a.length ? o(t) : (r.forEach((function (r) { e[t][r] !== n[t][r] && o(t); })), a.forEach((function (r) { e[t][r] !== n[t][r] && o(t); })));
        }
        else
            e[t] !== n[t] && o(t); })), i; }(j, T.current, R, _.current, (function (e) { return e.key; })); return T.current = j, _.current = R, e.length && C.current && !C.current.destroyed && Sl({ swiper: C.current, slides: R, passedParams: j, changedParams: e, nextEl: A.current, prevEl: O.current, scrollbarEl: L.current, paginationEl: P.current }), function () { z && C.current && Object.keys(z).forEach((function (e) { C.current.off(e, z[e]); })); }; })), kl((function () { var e; !(e = C.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate()); }), [y]), n.createElement(l, _l({ ref: E, className: gl("".concat(m).concat(a ? " ".concat(a) : "")) }, N), n.createElement(Cl.Provider, { value: C.current }, F["container-start"], n.createElement(u, { className: "swiper-wrapper" }, F["wrapper-start"], D.virtual ? function (e, t, r) { if (!r)
        return null; var a = e.isHorizontal() ? ot({}, e.rtlTranslate ? "right" : "left", "".concat(r.offset, "px")) : { top: "".concat(r.offset, "px") }; return t.filter((function (e, n) { return n >= r.from && n <= r.to; })).map((function (t) { return n.cloneElement(t, { swiper: e, style: a }); })); }(C.current, R, y) : !D.loop || C.current && C.current.destroyed ? R.map((function (e) { return n.cloneElement(e, { swiper: C.current }); })) : function (e, t, r) { var a = t.map((function (t, r) { return n.cloneElement(t, { swiper: e, "data-swiper-slide-index": r }); })); function i(e, t, a) { return n.cloneElement(e, { key: "".concat(e.key, "-duplicate-").concat(t, "-").concat(a), className: "".concat(e.props.className || "", " ").concat(r.slideDuplicateClass) }); } if (r.loopFillGroupWithBlank) {
        var o = r.slidesPerGroup - a.length % r.slidesPerGroup;
        if (o !== r.slidesPerGroup)
            for (var l = 0; l < o; l += 1) {
                var s = n.createElement("div", { className: "".concat(r.slideClass, " ").concat(r.slideBlankClass) });
                a.push(s);
            }
    } "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = a.length); for (var u = bl(a, r), c = [], d = [], f = 0; f < u; f += 1) {
        var p = f - Math.floor(f / a.length) * a.length;
        d.push(i(a[p], f, "append")), c.unshift(i(a[a.length - p - 1], f, "prepend"));
    } return e && (e.loopedSlides = u), [].concat(c, Ki(a), d); }(C.current, R, D), F["wrapper-end"]), hl(D) && n.createElement(n.Fragment, null, n.createElement("div", { ref: O, className: "swiper-button-prev" }), n.createElement("div", { ref: A, className: "swiper-button-next" })), vl(D) && n.createElement("div", { ref: L, className: "swiper-scrollbar" }), ml(D) && n.createElement("div", { ref: P, className: "swiper-pagination" }), F["container-end"])); }));
    Al.displayName = "Swiper";
    var Ol = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];
    function Pl() { return Pl = Object.assign ? Object.assign.bind() : function (e) { for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    } return e; }, Pl.apply(this, arguments); }
    var Ll = (0, n.forwardRef)((function (e, t) { var r = void 0 === e ? {} : e, a = r.tag, i = void 0 === a ? "div" : a, l = r.children, s = r.className, u = void 0 === s ? "" : s, c = r.swiper, d = r.zoom, f = r.virtualIndex, p = Qr(r, Ol), h = (0, n.useRef)(null), m = o((0, n.useState)("swiper-slide"), 2), v = m[0], g = m[1]; function y(e, n, t) { n === h.current && g(t); } kl((function () { if (t && (t.current = h.current), h.current && c) {
        if (!c.destroyed)
            return c.on("_slideClass", y), function () { c && c.off("_slideClass", y); };
        "swiper-slide" !== v && g("swiper-slide");
    } })), kl((function () { c && h.current && !c.destroyed && g(c.getSlideClasses(h.current)); }), [c]); var b = { isActive: v.indexOf("swiper-slide-active") >= 0 || v.indexOf("swiper-slide-duplicate-active") >= 0, isVisible: v.indexOf("swiper-slide-visible") >= 0, isDuplicate: v.indexOf("swiper-slide-duplicate") >= 0, isPrev: v.indexOf("swiper-slide-prev") >= 0 || v.indexOf("swiper-slide-duplicate-prev") >= 0, isNext: v.indexOf("swiper-slide-next") >= 0 || v.indexOf("swiper-slide-duplicate-next") >= 0 }, w = function () { return "function" === typeof l ? l(b) : l; }; return n.createElement(i, Pl({ ref: h, className: gl("".concat(v).concat(u ? " ".concat(u) : "")), "data-swiper-slide-index": f }, p), n.createElement(El.Provider, { value: b }, d ? n.createElement("div", { className: "swiper-zoom-container", "data-swiper-zoom": "number" === typeof d ? d : void 0 }, w()) : w())); }));
    Ll.displayName = "SwiperSlide";
    var Il, Dl, jl, Nl, zl, Ml = function () { var e = o((0, n.useState)(Hl), 2), t = e[0], r = e[1], a = Vr(), i = se(Vt), l = i.stores, s = i.isLoading, u = xe(), c = (0, n.useRef)(), d = Gr(c.current); (0, n.useEffect)((function () { !function (e, n) { n(e <= 580 ? Rl : e <= 768 ? Fl : e <= 1024 ? Bl : e <= 1200 ? $l : Ul); }(a, r); }), [a]), (0, n.useEffect)((function () { u(Mt); }), []); var f = Pt(t.rows * t.slidesPerView).map((function () { return (0, Ur.jsx)(Ll, { children: (0, Ur.jsx)(ql, { children: (0, Ur.jsx)(Yl, {}) }) }); })), p = l.map((function (e) { var n = e.name, t = e.image; return (0, Ur.jsx)(Ll, { children: (0, Ur.jsx)(Gl, { to: "/stores/store/".concat(n), image: t }) }, Ma()); })); return (0, Ur.jsx)(Wl, { offset: d, ref: c, children: (0, Ur.jsx)(Vl, { windowWidth: a, rows: t.rows, slidesPerView: t.slidesPerView, spaceBetween: 5, pagination: { clickable: !0 }, grid: { rows: t.rows }, autoplay: { delay: 3e3, disableOnInteraction: !1, pauseOnMouseEnter: !0 }, navigation: !0, modules: [ul, dl, ll, cl], children: s ? f : p }) }); }, Rl = { slidesPerView: 2, rows: 2 }, Fl = { slidesPerView: 3, rows: 2 }, Bl = { slidesPerView: 3, rows: 3 }, $l = { slidesPerView: 5, rows: 2 }, Ul = { slidesPerView: 6, rows: 2 }, Hl = st({}, Rl);
    var Wl = rt.div(Il || (Il = Se(["\n  position: relative;\n  left: ", ";\n  width: ", ";\n  padding: 24px 16px 16px;\n  background-color: ", ";\n\n  @media screen and (min-width: 768px) {\n    padding: 32px 24px 16px;\n  }\n"])), (function (e) { var n = e.offset; return "-".concat(n, "px"); }), (function (e) { var n = e.offset; return "calc(100% + 2 * ".concat(n, "px)"); }), (function (e) { return e.theme.detail_II; })), Vl = rt(Al)(Dl || (Dl = Se(["\n  height: ", ";\n  padding: 5px 0 15px;\n\n  .swiper-pagination {\n    bottom: 0;\n\n    & .swiper-pagination-bullet {\n      background-color: ", ";\n    }\n  }\n\n  .swiper-button-next,\n  .swiper-button-prev {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background-color: ", ";\n    opacity: 0.5;\n    transition: opacity 300ms ease;\n\n    @media screen and (min-width: 768px) {\n      width: 50px;\n      height: 50px;\n    }\n\n    &:hover {\n      opacity: 0.8;\n    }\n\n    &::after {\n      position: relative;\n      font-size: 1rem;\n      font-weight: 700;\n      color: ", ";\n\n      @media screen and (min-width: 768px) {\n        font-size: 1.6rem;\n      }\n    }\n\n    color: ", ";\n  }\n\n  .swiper-button-next {\n    &::after {\n      left: 1.5px;\n\n      @media screen and (min-width: 768px) {\n        left: 3px;\n      }\n    }\n  }\n  .swiper-button-prev {\n    &::after {\n      right: 1.5px;\n\n      @media screen and (min-width: 768px) {\n        right: 3px;\n      }\n    }\n  }\n\n  .swiper-slide {\n    height: ", ";\n    padding: 5px;\n  }\n"])), (function (e) { var n = e.windowWidth, t = e.rows, r = e.slidesPerView; return "calc(".concat(.7 * n * t / r, "px + 20px)"); }), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.secondary_II; }), (function (e) { var n = e.rows; return "\n      calc((100% + 15px -  ".concat(30 * (n - 1), "px) / ").concat(n, ");\n    "); })), Gl = rt(Q)(jl || (jl = Se(["\n  position: relative;\n  right: 0;\n  bottom: 0;\n  display: block;\n  height: 100%;\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: ", ";\n  background-image: ", ";\n  transition: all 300ms ease;\n\n  &:hover {\n    right: 5px;\n    bottom: 5px;\n    box-shadow: 5px 5px 0 0 ", ";\n  }\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.detail_I; }), (function (e) { var n = e.image; return "url(".concat(n, ")"); }), (function (e) { return e.theme.secondary_II; })), ql = rt.div(Nl || (Nl = Se(["\n  position: relative;\n  right: 0;\n  bottom: 0;\n  display: block;\n  height: 100%;\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background-color: ", ";\n  overflow: hidden;\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.detail_I; })), Yl = rt.div(zl || (zl = Se(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    transform: rotate(30deg) scaleY(2);\n    width: 5px;\n    height: 100%;\n    background-color: ", ";\n    box-shadow: 0 0 15px 20px ", ";\n    opacity: 0.3;\n    animation-name: slide;\n    animation-duration: 1.8s;\n    animation-iteration-count: infinite;\n\n    @keyframes slide {\n      from {\n        left: -100%;\n        right: none;\n      }\n      to {\n        left: 200%;\n      }\n    }\n  }\n"])), (function (e) { return e.theme.detail_II; }), (function (e) { return e.theme.detail_II; }));
    var Kl, Ql, Xl = function (e) { var t = se(Lr), r = t.categories, a = t.isLoading, i = xe(); (0, n.useEffect)((function () { i(Or); }), []); var o = (0, Ur.jsx)(Ai, {}), l = r.map((function (e) { return (0, Ur.jsx)(Zl, { to: "/coupons/search/".concat(e.replace("/", "%2F")), children: e }); })); return (0, Ur.jsx)(Jl, { children: a ? o : l }); }, Jl = rt.div(Kl || (Kl = Se(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  width: 100%;\n"]))), Zl = rt(Q)(Ql || (Ql = Se(["\n  position: relative;\n  top: 0;\n  left: 0;\n  padding: 12px 16px;\n  border: 2px solid black;\n  border-radius: 6px;\n  font-weight: 700;\n  font-family: ", ";\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: ", ";\n  background-color: ", ";\n  transition: all 300ms ease;\n\n  @media screen and (min-width: 768px) {\n    font-size: 1.2rem;\n  }\n\n  &:hover {\n    top: -3px;\n    left: -3px;\n    box-shadow: 3px 3px 0 0 ", ";\n  }\n"])), (function (e) { return e.theme.secondaryFontFamily; }), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.primary_II; }), (function (e) { return e.theme.secondary_II; }));
    var es, ns, ts, rs, as, is, os, ls, ss, us, cs, ds, fs = function (e) { var t = e.coupon, r = e.showPlaceholder, a = o((0, n.useState)(!1), 2), i = a[0], l = a[1]; if (r)
        return (0, Ur.jsx)(hs, { children: (0, Ur.jsx)(ms, {}) }); var s = t.description, u = t.store, c = t.image, d = t.code, f = t.category, p = t.link; return (0, Ur.jsx)(ps, { title: s, children: (0, Ur.jsxs)(vs, { children: [(0, Ur.jsx)(gs, { children: (0, Ur.jsx)("img", { src: c, alt: u }) }), (0, Ur.jsxs)(ys, { children: [(0, Ur.jsx)(bs, { id: d, value: d, onClick: function (e) { !function (e, n) { Lt.apply(this, arguments); }(e.target.value, (function () { l(!0), setTimeout((function () { l(!1); }), 1e3); })); }, children: d }), (0, Ur.jsx)(ws, { htmlFor: d, children: "*clique para copiar o c\xf3digo" }), i && (0, Ur.jsx)(xs, { children: "Copiado!" })] }), (0, Ur.jsxs)(Ss, { children: [(0, Ur.jsx)(ks, { href: p, target: "_blank", children: "Seguir para a loja" }), (0, Ur.jsx)(Es, { children: f })] })] }) }); }, ps = rt(ja)(es || (es = Se(["\n  width: 100%;\n  padding: 20px 16px;\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    45deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(10, 98, 208, 1) 75%\n  );\n\n  @media screen and (min-width: 425px) {\n    background: url(", "),\n      linear-gradient(45deg, rgba(2, 0, 36, 1) 0%, rgba(10, 98, 208, 1) 75%);\n    background-repeat: no-repeat;\n    background-position: 12px 95%, 0 0;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 80%;\n  }\n\n  & > *:first-child {\n    color: white;\n    font-size: 1.2rem;\n\n    @media screen and (min-width: 768px) {\n      font-size: 1.5rem;\n    }\n  }\n"])), (function (e) { return e.theme.secondary_II; }), "../../assets/images/discount.svg"), hs = rt(ja)(ns || (ns = Se(["\n  width: 100%;\n  height: 430px;\n  padding: 20px 16px;\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background-color: ", ";\n  overflow: hidden;\n\n  @media screen and (min-width: 375px) {\n    height: 410px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 80%;\n    height: 300px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    height: 270px;\n  }\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.detail_I; })), ms = rt.div(ts || (ts = Se(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 00%;\n    transform: rotate(30deg) scaleY(2);\n    width: 5px;\n    height: 100%;\n    background-color: ", ";\n    box-shadow: 0 0 15px 20px ", ";\n    opacity: 0.3;\n    animation-name: slide;\n    animation-duration: 0.8s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes slide {\n      from {\n        left: -100%;\n        right: none;\n      }\n      to {\n        left: 300%;\n      }\n    }\n\n    @media screen and (min-width: 375px) {\n      @keyframes slide {\n        from {\n          left: -100%;\n          right: none;\n        }\n        to {\n          left: 250%;\n        }\n      }\n    }\n\n    @media screen and (min-width: 768px) {\n      @keyframes slide {\n        from {\n          left: -100%;\n          right: none;\n        }\n        to {\n          left: 200%;\n        }\n      }\n    }\n\n    @media screen and (min-width: 1024px) {\n      @keyframes slide {\n        from {\n          left: -100%;\n          right: none;\n        }\n        to {\n          left: 120%;\n        }\n      }\n    }\n  }\n"])), (function (e) { return e.theme.detail_II; }), (function (e) { return e.theme.detail_II; })), vs = rt.div(rs || (rs = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  font-family: ", ";\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-around;\n    margin: 24px 0;\n  }\n"])), (function (e) { return e.theme.secondaryFontFamily; })), gs = rt.div(as || (as = Se(["\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: ", ";\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    width: 140px;\n    height: 140px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n"])), (function (e) { return e.theme.detail_I; })), ys = rt.div(is || (is = Se(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))), bs = rt(oi)(os || (os = Se(["\n  margin-top: 16px;\n  min-width: 200px;\n\n  @media screen and (min-width: 768px) {\n    min-width: none;\n    margin: 0;\n  }\n\n  @media screen and (min-width: 1024px) {\n    min-width: 200px;\n  }\n"]))), ws = rt.label(ls || (ls = Se(["\n  margin-top: 6px;\n  font-size: 0.8rem;\n  color: ", ";\n"])), (function (e) { return e.theme.secondary_II; })), xs = rt.span(ss || (ss = Se(["\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  padding: 8px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: white;\n  border-radius: 6px;\n  background-color: ", ";\n\n  &::after {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    content: '';\n    width: 0;\n    height: 0;\n    border: 10px solid transparent;\n    border-top: 16px solid ", ";\n  }\n"])), (function (e) { return e.theme.alert_I; }), (function (e) { return e.theme.alert_I; })), Ss = rt.div(us || (us = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  margin-top: 12px;\n\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n"]))), ks = rt.a(cs || (cs = Se(["\n  padding: 8px 16px;\n  color: ", ";\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  border-radius: 999px;\n  background-color: black;\n  transition: all 300ms ease;\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n"])), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.primary_II; }), (function (e) { return e.theme.secondary_I; })), Es = rt.p(ds || (ds = Se(["\n  color: ", ";\n  font-size: 0.95rem;\n  font-weight: 400;\n"])), (function (e) { return e.theme.neutral_II; }));
    var Cs, Ts = function (e) { var t = e.coupons, r = e.isLoading, a = e.lazy, i = e.defaultUnits, l = void 0 === i ? 10 : i, s = o((0, n.useState)(l), 2), u = s[0], c = s[1], d = l, f = a && u < t.length, p = function () { var e = Et(St().mark((function e() { var n; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0:
                if (!(u >= t.length)) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");
            case 2: return n = window.scrollY, e.next = 5, c(u + d);
            case 5: window.scrollTo({ top: n });
            case 6:
            case "end": return e.stop();
        } }), e); }))); return function () { return e.apply(this, arguments); }; }(), h = Pt(l).map((function () { return (0, Ur.jsx)(fs, { showPlaceholder: !0 }, Ma()); })), m = t.filter((function (e, n) { return n < u; })).map((function (e) { return (0, Ur.jsx)(fs, { coupon: e }, Ma()); })); return (0, Ur.jsxs)(_s, { children: [r ? h : m, f && (0, Ur.jsx)(oi, { type: "button", onClick: p, children: "mostrar mais" })] }); }, _s = rt.div(Cs || (Cs = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n"])));
    var As = function (e) { var t = se(Zt), r = t.coupons, a = t.isLoading, i = xe(); return (0, n.useEffect)((function () { i(Xt); }), []), (0, Ur.jsxs)(n.Fragment, { children: [(0, Ur.jsx)(Za, { title: "Lojas em Destaque", children: (0, Ur.jsx)(Ml, {}) }), (0, Ur.jsx)(Za, { title: "Que tal procurar por categorias?", children: (0, Ur.jsx)(Xl, {}) }), (0, Ur.jsx)(Za, { title: "Os melhores coupons do momento", children: (0, Ur.jsx)(Ts, { coupons: r, isLoading: a }) })] }); };
    var Os = function () { return (0, Ur.jsx)(W, { children: (0, Ur.jsxs)(U, { path: "/", element: (0, Ur.jsx)(Ps, {}), children: [(0, Ur.jsx)(U, { index: !0, element: (0, Ur.jsx)(zs, {}) }), (0, Ur.jsx)(U, { path: "/:page", element: (0, Ur.jsx)(zs, {}) }), (0, Ur.jsx)(U, { path: "/search/:searchTerm", element: (0, Ur.jsx)(Ms, {}) })] }) }); };
    var Ps = function (e) { var t = o((0, n.useState)(!1), 2), r = t[0], a = t[1], i = se(lr), l = i.filters, s = i.searchTerm, u = l.store, c = l.category, d = l.keyword, f = xe(), p = z(), h = function (e) { var n = e.target, t = n.value, r = n.checked, a = { searchTerm: s, filters: st(st({}, l), {}, ot({}, t, r)) }; f(rr(a)); }; return (0, Ur.jsxs)(n.Fragment, { children: [(0, Ur.jsx)(Ks, { darkBorder: !0, type: "search", fieldLabel: "O que est\xe1 procurando?", buttonLabel: "buscar", onSubmit: function (e) { e.preventDefault(); var n = o(Array.from(e.target).filter((function (e) { return "search" === e.type; })), 1)[0].value, t = "../search/".concat(n); p(t); }, children: (0, Ur.jsxs)(Qs, { children: [(0, Ur.jsx)(Xs, { children: (0, Ur.jsxs)(Js, { onClick: function () { a(!r); }, children: ["Filtros", (0, Ur.jsx)(Zs, {})] }) }), (0, Ur.jsxs)(eu, { show: r, children: [(0, Ur.jsx)(nu, { type: "checkbox", value: "store", label: "Loja", checked: u, onChange: h }), (0, Ur.jsx)(nu, { type: "checkbox", value: "category", label: "Categoria", checked: c, onChange: h }), (0, Ur.jsx)(nu, { type: "checkbox", value: "keyword", label: "Palavra-chave", checked: d, onChange: h })] })] }) }), (0, Ur.jsx)($, {})] }); };
    var Ls, Is, Ds = function (e) { var n = e.page, t = e.numOfPages, r = e.basePath, a = z(), i = Vr(), o = function (e, n, t) { var r, a, i = []; t > n && (t = n); var o = !(t % 2); o ? (r = Math.floor(t / 2) - 1, a = Math.floor(t / 2)) : r = a = Math.floor(t / 2); if (e - r > 0 && e + a <= n) {
        if (o) {
            for (var l = e - r; l <= e + a; l++)
                i.push(l);
            return i;
        }
        for (var s = e - r; s <= e + a; s++)
            i.push(s);
    }
    else if (e + a >= n) {
        if (o) {
            for (var u = n - t + 1; u <= n; u++)
                i.push(u);
            return i;
        }
        for (var c = n - t + 1; c <= n; c++)
            i.push(c);
    }
    else
        for (var d = 1; d <= t; d++)
            i.push(d); return i; }(n, t, i < 425 ? 3 : i < 768 ? 5 : 8), l = function (e) { a("/".concat(r, "/").concat(e)); }, s = function (e) { var n = e.target.value; l(n); }; return (0, Ur.jsxs)(js, { children: [(0, Ur.jsx)(Ns, { onClick: function () { l(n - 1); }, disabled: 1 === n, children: "\u21e6" }), o.map((function (e) { return (0, Ur.jsx)(Ns, { selected: n === e, disabled: n === e, value: e, onClick: s, children: e }); })), (0, Ur.jsx)(Ns, { onClick: function () { l(n + 1); }, disabled: n === t, children: "\u21e8" })] }); }, js = rt.div(Ls || (Ls = Se(["\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n  margin-top: 48px;\n  font-family: ", ";\n\n  @media screen and (min-width: 768px) {\n    margin-top: 64px;\n  }\n"])), (function (e) { return e.theme.secondaryFontFamily; })), Ns = rt(oi)(Is || (Is = Se(["\n  width: 50px;\n  height: 50px;\n  font-size: 0.75rem;\n  border-radius: 50%;\n\n  @media screen and (min-width: 768px) {\n    width: 60px;\n    height: 60px;\n    font-size: 0.9rem;\n  }\n\n  &:disabled {\n    opacity: ", ";\n\n    &:hover {\n      top: 0;\n      left: 0;\n      box-shadow: none;\n    }\n  }\n"])), (function (e) { return e.selected ? "1" : "0.5"; }));
    var zs = function () { var e = se(fr), t = e.coupons, r = e.pagination, a = e.isLoading, i = xe(), o = R().page; return (0, n.useEffect)((function () { i(function (e) { return function () { var n = Et(St().mark((function n(t) { var r, a, i; return St().wrap((function (n) { for (;;)
        switch (n.prev = n.next) {
            case 0: return t(Ot(pr.LOAD_DATA_START)), n.prev = 1, n.next = 4, cr(e);
            case 4:
                r = n.sent, a = r.data, i = r.pagination, t(dr({ coupons: a, pagination: i })), n.next = 14;
                break;
            case 11: n.prev = 11, n.t0 = n.catch(1), t((o = n.t0, Ot(pr.LOAD_DATA_FAIL, o)));
            case 14:
            case "end": return n.stop();
        } var o; }), n, null, [[1, 11]]); }))); return function (e) { return n.apply(this, arguments); }; }(); }(o)); }), [o]), (0, Ur.jsxs)(Za, { title: "Confira todos os cupons dispon\xedveis", children: [(0, Ur.jsx)(Ts, { coupons: t, isLoading: a }), (0, Ur.jsx)(Ds, st(st({}, r), {}, { basePath: "coupons" }))] }); };
    var Ms = function () { var e = xe(), t = se(or), r = t.coupons, a = t.query, i = t.isLoading, o = R().searchTerm; return (0, n.useEffect)((function () { e(rr(st(st({}, a), {}, { searchTerm: o }))); }), [o]), (0, n.useEffect)((function () { a.searchTerm && e(ir(a)); }), [a]), (0, Ur.jsx)(Za, { title: "Resultados da busca", children: i ? (0, Ur.jsx)(Ai, { fullpage: !0 }) : (0, Ur.jsx)(Ts, { lazy: !0, coupons: r }) }); }, Rs = ["label", "value", "type"];
    var Fs, Bs, $s, Us, Hs, Ws, Vs, Gs, qs = function (e) { var n = e.label, t = e.value, r = e.type, a = Qr(e, Rs); return (0, Ur.jsxs)(Ys, st(st({}, a), {}, { children: [(0, Ur.jsx)("input", st({ type: r, id: n, value: t }, a)), n && (0, Ur.jsx)("label", { htmlFor: n, children: n })] })); }, Ys = rt.div(Fs || (Fs = Se(["\n  input {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    font-family: inherit;\n  }\n"]))), Ks = rt(mi)(Bs || (Bs = Se(["\n  margin: 0 auto;\n"]))), Qs = rt.fieldset($s || ($s = Se(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n"]))), Xs = rt.div(Us || (Us = Se(["\n  width: 100%;\n  height: 42px;\n"]))), Js = rt.legend(Hs || (Hs = Se(["\n  position: relative;\n  height: 100%;\n  width: 42px;\n  margin: 0 auto;\n  text-indent: -9999px;\n  cursor: pointer;\n"]))), Zs = rt.div(Ws || (Ws = Se(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  border-radius: 999px;\n  background-color: ", ";\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 14px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: block;\n    width: 70%;\n    height: 8px;\n    border-radius: 999px;\n    background-color: ", ";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: block;\n    width: 30%;\n    height: 8px;\n    border-radius: 999px;\n    background-color: ", ";\n  }\n"])), (function (e) { return e.theme.detail_II; }), (function (e) { return e.theme.detail_II; }), (function (e) { return e.theme.detail_II; })), eu = rt.div(Vs || (Vs = Se(["\n  height: ", ";\n  margin-top: 8px;\n  overflow: hidden;\n  transition: height 300ms ease;\n"])), (function (e) { return e.show ? "102px" : "0"; })), nu = rt(qs)(Gs || (Gs = Se(["\n  display: flex;\n  gap: 6px;\n  align-items: center;\n\n  input {\n    position: relative;\n    width: 28px;\n    height: 28px;\n    border: 2px solid ", ";\n    border-radius: 2px;\n    cursor: pointer;\n    transition: background-color 300ms ease;\n\n    &:checked {\n      background-color: ", ";\n\n      &::after {\n        content: '';\n        position: absolute;\n        bottom: 5px;\n        left: 50%;\n        transform: translateX(-50%) rotate(45deg);\n        display: block;\n        width: 10px;\n        height: 18px;\n        border: 3px solid ", ";\n        border-top: 0px;\n        border-left: 0px;\n        border-radius: 3px;\n      }\n    }\n  }\n\n  label {\n    font-weight: 700;\n    letter-spacing: 1px;\n    cursor: pointer;\n  }\n\n  &:hover {\n    label {\n      color: ", ";\n    }\n\n    input {\n      &:not(:checked) {\n        border-color: ", ";\n      }\n    }\n  }\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.detail_II; }), (function (e) { return e.theme.neutral_II; }), (function (e) { return e.theme.primary_II; }), (function (e) { return e.theme.primary_II; }));
    var tu, ru, au = function () { return (0, Ur.jsx)(W, { children: (0, Ur.jsxs)(U, { path: "/", element: (0, Ur.jsx)(lu, {}), children: [(0, Ur.jsx)(U, { index: !0, element: (0, Ur.jsx)(Tu, {}) }), (0, Ur.jsx)(U, { path: "/:page", element: (0, Ur.jsx)(Tu, {}) }), (0, Ur.jsx)(U, { path: "/search/:searchTerm", element: (0, Ur.jsx)(_u, {}) }), (0, Ur.jsx)(U, { path: "/store/:store", element: (0, Ur.jsx)(Au, {}) })] }) }); }, iu = rt(mi)(tu || (tu = Se(["\n  margin: 0 auto;\n"]))), ou = rt.div(ru || (ru = Se(["\n  position: relative;\n  left: ", ";\n  width: ", ";\n  padding: 24px 16px;\n  background-color: ", ";\n\n  @media screen and (min-width: 768px) {\n    padding: 32px 24px;\n  }\n"])), (function (e) { var n = e.offset; return "-".concat(n, "px"); }), (function (e) { var n = e.offset; return "calc(100% + 2 * ".concat(n, "px)"); }), (function (e) { return e.theme.detail_II; }));
    var lu = function () { var e = z(); return (0, Ur.jsxs)(n.Fragment, { children: [(0, Ur.jsx)(iu, { darkBorder: !0, type: "search", fieldLabel: "Que loja est\xe1 procurando?", buttonLabel: "buscar", onSubmit: function (n) { n.preventDefault(); var t = o(Array.from(n.target).filter((function (e) { return "INPUT" === e.nodeName; })), 1)[0].value; e("../search/".concat(t)); } }), (0, Ur.jsx)($, {})] }); };
    var su, uu, cu, du, fu, pu, hu = function (e) { var n = e.name, t = e.image, r = e.isLoading, a = (0, Ur.jsxs)(vu, { children: [(0, Ur.jsx)(yu, {}), (0, Ur.jsx)(wu, { children: "loading content" })] }), i = (0, Ur.jsxs)(mu, { to: "../store/".concat(n), children: [(0, Ur.jsx)(gu, { image: t }), (0, Ur.jsx)(bu, { children: n })] }); return r ? a : i; }, mu = rt(Q)(su || (su = Se(["\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  max-width: 250px;\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background-color: ", ";\n  box-shadow: 0 0 0 0 ", ";\n  transition: all 300ms ease;\n\n  @media screen and (min-width: 768px) {\n    max-width: none;\n  }\n\n  &:hover {\n    top: -5px;\n    left: -5px;\n    box-shadow: 5px 5px 0 0 ", ";\n  }\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.detail_I; }), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.secondary_II; })), vu = rt.div(uu || (uu = Se(["\n  position: relative;\n  display: block;\n  width: 100%;\n  max-width: 250px;\n  border: 2px solid ", ";\n  border-radius: 6px;\n  background-color: ", ";\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    max-width: none;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: rotate(30deg) scaleY(2);\n    width: 5px;\n    height: 100%;\n    background-color: ", ";\n    box-shadow: 0 0 15px 20px ", ";\n    opacity: 0.3;\n    animation-name: slide;\n    animation-duration: 1.8s;\n    animation-iteration-count: infinite;\n\n    @keyframes slide {\n      from {\n        left: -100%;\n        right: none;\n      }\n      to {\n        left: 200%;\n      }\n    }\n  }\n"])), (function (e) { return e.theme.secondary_II; }), (function (e) { return e.theme.detail_I; }), (function (e) { return e.theme.detail_II; }), (function (e) { return e.theme.detail_II; })), gu = rt.span(cu || (cu = Se(["\n  display: block;\n  width: 100%;\n  padding-top: 70%;\n  background-image: url(", ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n"])), (function (e) { return e.image; })), yu = rt.span(du || (du = Se(["\n  display: block;\n  width: 100%;\n  padding-top: 70%;\n"]))), bu = rt.span(fu || (fu = Se(["\n  display: block;\n  padding: 8px 6px;\n  text-align: center;\n  font-weight: 600;\n  font-family: ", ";\n"])), (function (e) { return e.theme.secondaryFontFamily; })), wu = rt.span(pu || (pu = Se(["\n  display: block;\n  padding: 8px 6px;\n  color: transparent;\n"])));
    var xu, Su, ku = function (e) { var t = e.stores, r = e.isLoading, a = e.lazy, i = e.defaultUnits, l = void 0 === i ? 10 : i, s = o((0, n.useState)(l), 2), u = s[0], c = s[1], d = l, f = a && u < t.length, p = function () { var e = Et(St().mark((function e() { var n; return St().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0:
                if (!(u >= t.length)) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");
            case 2: return n = window.scrollY, e.next = 5, c(u + d);
            case 5: window.scrollTo({ top: n });
            case 6:
            case "end": return e.stop();
        } }), e); }))); return function () { return e.apply(this, arguments); }; }(), h = t.filter((function (e, n) { return n < u; })).map((function (e) { return (0, Ur.jsx)(hu, st(st({}, e), {}, { isLoading: r }), Ma()); })); return (0, Ur.jsxs)(Eu, { children: [(0, Ur.jsx)(Cu, { children: h }), f && (0, Ur.jsx)(oi, { type: "button", onClick: p, children: "mostrar mais" })] }); }, Eu = rt.div(xu || (xu = Se(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n\n  @media screen and (min-width: 768px) {\n    gap: 32px;\n  }\n"]))), Cu = rt.div(Su || (Su = Se(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  place-items: center;\n  gap: 24px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 32px 24px;\n  }\n"])));
    var Tu = function () { var e = se(gr), t = e.stores, r = e.pagination, a = e.isLoading, i = xe(), o = R().page, l = (0, n.useRef)(), s = Gr(l.current); return (0, n.useEffect)((function () { i(function (e) { return function () { var n = Et(St().mark((function n(t) { var r, a, i; return St().wrap((function (n) { for (;;)
        switch (n.prev = n.next) {
            case 0: return t(Ot(yr.LOAD_DATA_START)), n.prev = 1, n.next = 4, mr(e);
            case 4:
                r = n.sent, a = r.data, i = r.pagination, t(vr({ stores: a, pagination: i })), n.next = 14;
                break;
            case 11: n.prev = 11, n.t0 = n.catch(1), t((o = n.t0, Ot(yr.LOAD_DATA_FAIL, o)));
            case 14:
            case "end": return n.stop();
        } var o; }), n, null, [[1, 11]]); }))); return function (e) { return n.apply(this, arguments); }; }(); }(o)); }), [o]), (0, Ur.jsx)(n.Fragment, { children: (0, Ur.jsxs)(Za, { title: "Confira todas as lojas dispon\xedveis", children: [(0, Ur.jsx)(ou, { offset: s, ref: l, children: (0, Ur.jsx)(ku, { stores: t, isLoading: a }) }), (0, Ur.jsx)(Ds, st(st({}, r), {}, { basePath: "stores" }))] }) }); };
    var _u = function () { var e = se(Sr), t = e.stores, r = e.isLoading, a = xe(), i = R().searchTerm; (0, n.useEffect)((function () { a(function (e) { return function () { var n = Et(St().mark((function n(t) { var r; return St().wrap((function (n) { for (;;)
        switch (n.prev = n.next) {
            case 0: return t(Ot(kr.LOAD_DATA_START)), n.prev = 1, n.next = 4, wr(e);
            case 4:
                r = n.sent, t(xr(r)), n.next = 11;
                break;
            case 8: n.prev = 8, n.t0 = n.catch(1), t((a = n.t0, Ot(kr.LOAD_DATA_FAIL, a)));
            case 11:
            case "end": return n.stop();
        } var a; }), n, null, [[1, 8]]); }))); return function (e) { return n.apply(this, arguments); }; }(); }(i)); }), [i]); var o = (0, Ur.jsx)(Ai, { fullpage: !0 }), l = (0, Ur.jsx)(ku, { lazy: !0, stores: t }); return (0, Ur.jsx)(n.Fragment, { children: (0, Ur.jsx)(Za, { title: "Resultados da busca", children: r ? o : l }) }); };
    var Au = function () { var e = se(or), t = e.coupons, r = e.isLoading, a = xe(), i = R().store; (0, n.useEffect)((function () { a(ir({ filters: { store: !0, category: !1, keyword: !1 }, searchTerm: i })); }), [i]); var o = (0, Ur.jsx)(Ai, { fullpage: !0 }), l = (0, Ur.jsx)(Ts, { coupons: t }); return (0, Ur.jsx)(n.Fragment, { children: (0, Ur.jsx)(Za, { title: i, children: r ? o : l }) }); };
    var Ou = function () { return (0, Ur.jsx)(W, { children: (0, Ur.jsxs)(U, { path: "/", element: (0, Ur.jsx)(Gi, {}), children: [(0, Ur.jsx)(U, { index: !0, element: (0, Ur.jsx)(As, {}) }), (0, Ur.jsx)(U, { path: "coupons/*", element: (0, Ur.jsx)(Os, {}) }), (0, Ur.jsx)(U, { path: "stores/*", element: (0, Ur.jsx)(au, {}) })] }) }); };
    r.createRoot(document.getElementById("root")).render((0, Ur.jsx)(n.StrictMode, { children: (0, Ur.jsx)(me, { store: $r, children: (0, Ur.jsxs)(Wr, { children: [(0, Ur.jsx)(it, {}), (0, Ur.jsx)(at, {}), (0, Ur.jsx)(K, { children: (0, Ur.jsx)(Ou, {}) })] }) }) }));
}(); }();
//# sourceMappingURL=main.72e2d543.js.map
