/*!
 * surveyjs - Survey JavaScript library v1.9.55
 * Copyright (c) 2015-2022 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("react"), require("survey-core"), require("react-dom")))
        : "function" == typeof define && define.amd
        ? define("survey-react-ui", ["react", "survey-core", "react-dom"], t)
        : "object" == typeof exports
        ? (exports["survey-react-ui"] = t(require("react"), require("survey-core"), require("react-dom")))
        : (e.SurveyReact = t(e.React, e.Survey, e.ReactDOM));
})(this, function (e, t, n) {
    return (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 7))
        );
    })([
        function (t, n) {
            t.exports = e;
        },
        function (e, n) {
            e.exports = t;
        },
        function (e, t) {
            e.exports = n;
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (e) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            (function (e) {
                var r = (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
                    o = Function.prototype.apply;
                function i(e, t) {
                    (this._id = e), (this._clearFn = t);
                }
                (t.setTimeout = function () {
                    return new i(o.call(setTimeout, r, arguments), clearTimeout);
                }),
                    (t.setInterval = function () {
                        return new i(o.call(setInterval, r, arguments), clearInterval);
                    }),
                    (t.clearTimeout = t.clearInterval = function (e) {
                        e && e.close();
                    }),
                    (i.prototype.unref = i.prototype.ref = function () {}),
                    (i.prototype.close = function () {
                        this._clearFn.call(r, this._id);
                    }),
                    (t.enroll = function (e, t) {
                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                    }),
                    (t.unenroll = function (e) {
                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                    }),
                    (t._unrefActive = t.active = function (e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 &&
                            (e._idleTimeoutId = setTimeout(function () {
                                e._onTimeout && e._onTimeout();
                            }, t));
                    }),
                    n(5),
                    (t.setImmediate = ("undefined" != typeof self && self.setImmediate) || (void 0 !== e && e.setImmediate) || (this && this.setImmediate)),
                    (t.clearImmediate = ("undefined" != typeof self && self.clearImmediate) || (void 0 !== e && e.clearImmediate) || (this && this.clearImmediate));
            }.call(this, n(3)));
        },
        function (e, t, n) {
            (function (e, t) {
                !(function (e, n) {
                    "use strict";
                    if (!e.setImmediate) {
                        var r,
                            o,
                            i,
                            s,
                            a,
                            u = 1,
                            l = {},
                            c = !1,
                            p = e.document,
                            h = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        (h = h && h.setTimeout ? h : e),
                            "[object process]" === {}.toString.call(e.process)
                                ? (r = function (e) {
                                      t.nextTick(function () {
                                          f(e);
                                      });
                                  })
                                : !(function () {
                                      if (e.postMessage && !e.importScripts) {
                                          var t = !0,
                                              n = e.onmessage;
                                          return (
                                              (e.onmessage = function () {
                                                  t = !1;
                                              }),
                                              e.postMessage("", "*"),
                                              (e.onmessage = n),
                                              t
                                          );
                                      }
                                  })()
                                ? e.MessageChannel
                                    ? (((i = new MessageChannel()).port1.onmessage = function (e) {
                                          f(e.data);
                                      }),
                                      (r = function (e) {
                                          i.port2.postMessage(e);
                                      }))
                                    : p && "onreadystatechange" in p.createElement("script")
                                    ? ((o = p.documentElement),
                                      (r = function (e) {
                                          var t = p.createElement("script");
                                          (t.onreadystatechange = function () {
                                              f(e), (t.onreadystatechange = null), o.removeChild(t), (t = null);
                                          }),
                                              o.appendChild(t);
                                      }))
                                    : (r = function (e) {
                                          setTimeout(f, 0, e);
                                      })
                                : ((s = "setImmediate$" + Math.random() + "$"),
                                  (a = function (t) {
                                      t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && f(+t.data.slice(s.length));
                                  }),
                                  e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                                  (r = function (t) {
                                      e.postMessage(s + t, "*");
                                  })),
                            (h.setImmediate = function (e) {
                                "function" != typeof e && (e = new Function("" + e));
                                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                                var o = { callback: e, args: t };
                                return (l[u] = o), r(u), u++;
                            }),
                            (h.clearImmediate = d);
                    }
                    function d(e) {
                        delete l[e];
                    }
                    function f(e) {
                        if (c) setTimeout(f, 0, e);
                        else {
                            var t = l[e];
                            if (t) {
                                c = !0;
                                try {
                                    !(function (e) {
                                        var t = e.callback,
                                            n = e.args;
                                        switch (n.length) {
                                            case 0:
                                                t();
                                                break;
                                            case 1:
                                                t(n[0]);
                                                break;
                                            case 2:
                                                t(n[0], n[1]);
                                                break;
                                            case 3:
                                                t(n[0], n[1], n[2]);
                                                break;
                                            default:
                                                t.apply(void 0, n);
                                        }
                                    })(t);
                                } finally {
                                    d(e), (c = !1);
                                }
                            }
                        }
                    }
                })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
            }.call(this, n(3), n(6)));
        },
        function (e, t) {
            var n,
                r,
                o = (e.exports = {});
            function i() {
                throw new Error("setTimeout has not been defined");
            }
            function s() {
                throw new Error("clearTimeout has not been defined");
            }
            function a(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
                try {
                    return n(e, 0);
                } catch (t) {
                    try {
                        return n.call(null, e, 0);
                    } catch (t) {
                        return n.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                    n = i;
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                    r = s;
                }
            })();
            var u,
                l = [],
                c = !1,
                p = -1;
            function h() {
                c && u && ((c = !1), u.length ? (l = u.concat(l)) : (p = -1), l.length && d());
            }
            function d() {
                if (!c) {
                    var e = a(h);
                    c = !0;
                    for (var t = l.length; t; ) {
                        for (u = l, l = []; ++p < t; ) u && u[p].run();
                        (p = -1), (t = l.length);
                    }
                    (u = null),
                        (c = !1),
                        (function (e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                            try {
                                r(e);
                            } catch (t) {
                                try {
                                    return r.call(null, e);
                                } catch (t) {
                                    return r.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function f(e, t) {
                (this.fun = e), (this.array = t);
            }
            function m() {}
            (o.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new f(e, t)), 1 !== l.length || c || a(d);
            }),
                (f.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = m),
                (o.addListener = m),
                (o.once = m),
                (o.off = m),
                (o.removeListener = m),
                (o.removeAllListeners = m),
                (o.emit = m),
                (o.prependListener = m),
                (o.prependOnceListener = m),
                (o.listeners = function (e) {
                    return [];
                }),
                (o.binding = function (e) {
                    throw new Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                    return "/";
                }),
                (o.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                    return 0;
                });
        },
        function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "Survey", function () {
                    return te;
                }),
                n.d(t, "attachKey2click", function () {
                    return ne;
                }),
                n.d(t, "ReactSurveyElementsWrapper", function () {
                    return a;
                }),
                n.d(t, "SurveyNavigationBase", function () {
                    return oe;
                }),
                n.d(t, "SurveyTimerPanel", function () {
                    return J;
                }),
                n.d(t, "SurveyPage", function () {
                    return F;
                }),
                n.d(t, "SurveyRow", function () {
                    return m;
                }),
                n.d(t, "SurveyPanel", function () {
                    return ge;
                }),
                n.d(t, "SurveyFlowPanel", function () {
                    return Ce;
                }),
                n.d(t, "SurveyQuestion", function () {
                    return de;
                }),
                n.d(t, "SurveyElementErrors", function () {
                    return fe;
                }),
                n.d(t, "SurveyQuestionAndErrorsCell", function () {
                    return ye;
                }),
                n.d(t, "ReactSurveyElement", function () {
                    return p;
                }),
                n.d(t, "SurveyElementBase", function () {
                    return c;
                }),
                n.d(t, "SurveyQuestionElementBase", function () {
                    return h;
                }),
                n.d(t, "SurveyQuestionCommentItem", function () {
                    return ae;
                }),
                n.d(t, "SurveyQuestionComment", function () {
                    return se;
                }),
                n.d(t, "SurveyQuestionCheckbox", function () {
                    return qe;
                }),
                n.d(t, "SurveyQuestionCheckboxItem", function () {
                    return we;
                }),
                n.d(t, "SurveyQuestionRanking", function () {
                    return _e;
                }),
                n.d(t, "SurveyQuestionRankingItem", function () {
                    return Se;
                }),
                n.d(t, "TagboxFilterString", function () {
                    return Pe;
                }),
                n.d(t, "SurveyQuestionOptionItem", function () {
                    return Ne;
                }),
                n.d(t, "SurveyQuestionDropdownBase", function () {
                    return je;
                }),
                n.d(t, "SurveyQuestionDropdown", function () {
                    return ke;
                }),
                n.d(t, "SurveyQuestionTagboxItem", function () {
                    return Me;
                }),
                n.d(t, "SurveyQuestionTagbox", function () {
                    return Ae;
                }),
                n.d(t, "SurveyQuestionDropdownSelect", function () {
                    return We;
                }),
                n.d(t, "SurveyQuestionMatrix", function () {
                    return Ve;
                }),
                n.d(t, "SurveyQuestionMatrixRow", function () {
                    return Qe;
                }),
                n.d(t, "SurveyQuestionHtml", function () {
                    return ze;
                }),
                n.d(t, "SurveyQuestionFile", function () {
                    return Je;
                }),
                n.d(t, "SurveyQuestionMultipleText", function () {
                    return Ge;
                }),
                n.d(t, "SurveyQuestionRadiogroup", function () {
                    return et;
                }),
                n.d(t, "SurveyQuestionRadioItem", function () {
                    return tt;
                }),
                n.d(t, "SurveyQuestionText", function () {
                    return rt;
                }),
                n.d(t, "SurveyQuestionBoolean", function () {
                    return it;
                }),
                n.d(t, "SurveyQuestionBooleanCheckbox", function () {
                    return at;
                }),
                n.d(t, "SurveyQuestionBooleanRadio", function () {
                    return lt;
                }),
                n.d(t, "SurveyQuestionEmpty", function () {
                    return pt;
                }),
                n.d(t, "SurveyQuestionMatrixDropdownCell", function () {
                    return Ct;
                }),
                n.d(t, "SurveyQuestionMatrixDropdownBase", function () {
                    return vt;
                }),
                n.d(t, "SurveyQuestionMatrixDropdown", function () {
                    return qt;
                }),
                n.d(t, "SurveyQuestionMatrixDynamic", function () {
                    return Ot;
                }),
                n.d(t, "SurveyQuestionMatrixDynamicAddButton", function () {
                    return _t;
                }),
                n.d(t, "SurveyQuestionPanelDynamic", function () {
                    return Bt;
                }),
                n.d(t, "SurveyProgress", function () {
                    return At;
                }),
                n.d(t, "SurveyProgressButtons", function () {
                    return Wt;
                }),
                n.d(t, "SurveyQuestionRating", function () {
                    return Vt;
                }),
                n.d(t, "SurveyQuestionRatingDropdown", function () {
                    return Ut;
                }),
                n.d(t, "SurveyQuestionExpression", function () {
                    return Kt;
                }),
                n.d(t, "PopupSurvey", function () {
                    return Zt;
                }),
                n.d(t, "SurveyWindow", function () {
                    return Gt;
                }),
                n.d(t, "ReactQuestionFactory", function () {
                    return Z;
                }),
                n.d(t, "ReactElementFactory", function () {
                    return s;
                }),
                n.d(t, "SurveyQuestionImagePicker", function () {
                    return $t;
                }),
                n.d(t, "SurveyQuestionImage", function () {
                    return tn;
                }),
                n.d(t, "SurveyQuestionSignaturePad", function () {
                    return rn;
                }),
                n.d(t, "SurveyQuestionButtonGroup", function () {
                    return sn;
                }),
                n.d(t, "SurveyQuestionCustom", function () {
                    return ln;
                }),
                n.d(t, "SurveyQuestionComposite", function () {
                    return cn;
                }),
                n.d(t, "Popup", function () {
                    return x;
                }),
                n.d(t, "List", function () {
                    return fn;
                }),
                n.d(t, "TitleActions", function () {
                    return L;
                }),
                n.d(t, "TitleElement", function () {
                    return H;
                }),
                n.d(t, "SurveyActionBar", function () {
                    return D;
                }),
                n.d(t, "LogoImage", function () {
                    return yn;
                }),
                n.d(t, "SurveyHeader", function () {
                    return z;
                }),
                n.d(t, "SvgIcon", function () {
                    return b;
                }),
                n.d(t, "SurveyQuestionMatrixDynamicRemoveButton", function () {
                    return gn;
                }),
                n.d(t, "SurveyQuestionMatrixDetailButton", function () {
                    return Cn;
                }),
                n.d(t, "SurveyQuestionMatrixDynamicDragDropIcon", function () {
                    return mt;
                }),
                n.d(t, "SurveyQuestionPanelDynamicAddButton", function () {
                    return xt;
                }),
                n.d(t, "SurveyQuestionPanelDynamicRemoveButton", function () {
                    return qn;
                }),
                n.d(t, "SurveyQuestionPanelDynamicPrevButton", function () {
                    return Tt;
                }),
                n.d(t, "SurveyQuestionPanelDynamicNextButton", function () {
                    return Rt;
                }),
                n.d(t, "SurveyQuestionPanelDynamicProgressText", function () {
                    return Dt;
                }),
                n.d(t, "SurveyNavigationButton", function () {
                    return On;
                }),
                n.d(t, "MatrixRow", function () {
                    return dt;
                }),
                n.d(t, "Skeleton", function () {
                    return Sn;
                }),
                n.d(t, "SurveyLocStringViewer", function () {
                    return Q;
                }),
                n.d(t, "SurveyLocStringEditor", function () {
                    return xn;
                }),
                n.d(t, "ResponsivityManager", function () {
                    return Nn;
                }),
                n.d(t, "VerticalResponsivityManager", function () {
                    return Tn;
                }),
                n.d(t, "unwrap", function () {
                    return X;
                }),
                n.d(t, "SurveyModel", function () {
                    return i.SurveyModel;
                }),
                n.d(t, "SurveyWindowModel", function () {
                    return i.SurveyWindowModel;
                }),
                n.d(t, "settings", function () {
                    return i.settings;
                }),
                n.d(t, "surveyLocalization", function () {
                    return i.surveyLocalization;
                }),
                n.d(t, "surveyStrings", function () {
                    return i.surveyStrings;
                }),
                n.d(t, "Model", function () {
                    return i.SurveyModel;
                });
            var r = n(0),
                o = n.n(r),
                i = n(1),
                s = (function () {
                    function e() {
                        this.creatorHash = {};
                    }
                    return (
                        (e.prototype.registerElement = function (e, t) {
                            this.creatorHash[e] = t;
                        }),
                        (e.prototype.getAllTypes = function () {
                            var e = new Array();
                            for (var t in this.creatorHash) e.push(t);
                            return e.sort();
                        }),
                        (e.prototype.isElementRegistered = function (e) {
                            return !!this.creatorHash[e];
                        }),
                        (e.prototype.createElement = function (e, t) {
                            var n = this.creatorHash[e];
                            return null == n ? null : n(t);
                        }),
                        (e.Instance = new e()),
                        e
                    );
                })(),
                a = (function () {
                    function e() {}
                    return (
                        (e.wrapRow = function (e, t, n) {
                            var r = e.getRowWrapperComponentName(n),
                                o = e.getRowWrapperComponentData(n);
                            return s.Instance.createElement(r, { element: t, row: n, componentData: o });
                        }),
                        (e.wrapElement = function (e, t, n) {
                            var r = e.getElementWrapperComponentName(n),
                                o = e.getElementWrapperComponentData(n);
                            return s.Instance.createElement(r, { element: t, question: n, componentData: o });
                        }),
                        (e.wrapQuestionContent = function (e, t, n) {
                            var r = e.getQuestionContentWrapperComponentName(n),
                                o = e.getElementWrapperComponentData(n);
                            return s.Instance.createElement(r, { element: t, question: n, componentData: o });
                        }),
                        (e.wrapItemValue = function (e, t, n, r) {
                            var o = e.getItemValueWrapperComponentName(r, n),
                                i = e.getItemValueWrapperComponentData(r, n);
                            return s.Instance.createElement(o, { key: t.key, element: t, question: n, item: r, componentData: i });
                        }),
                        (e.wrapMatrixCell = function (e, t, n, r) {
                            void 0 === r && (r = "cell");
                            var o = e.getElementWrapperComponentName(n, r),
                                i = e.getElementWrapperComponentData(n, r);
                            return s.Instance.createElement(o, { element: t, cell: n, componentData: i });
                        }),
                        e
                    );
                })();
            i.SurveyModel.platform = "react";
            var u,
                l =
                    ((u = function (e, t) {
                        return (u =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(e, t);
                    }),
                    function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                        function n() {
                            this.constructor = e;
                        }
                        u(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                    }),
                c = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n._allowComponentUpdate = !0), n;
                    }
                    return (
                        l(t, e),
                        (t.renderLocString = function (e, t, n) {
                            return void 0 === t && (t = null), s.Instance.createElement(e.renderAs, { locStr: e.renderAsData, style: t, key: n });
                        }),
                        (t.renderQuestionDescription = function (e) {
                            var n = t.renderLocString(e.locDescription);
                            return r.createElement("div", { className: e.cssDescription }, n);
                        }),
                        (t.prototype.componentDidMount = function () {
                            this.makeBaseElementsReact();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.unMakeBaseElementsReact();
                        }),
                        (t.prototype.componentDidUpdate = function (e, t) {
                            this.makeBaseElementsReact();
                        }),
                        (t.prototype.allowComponentUpdate = function () {
                            (this._allowComponentUpdate = !0), this.forceUpdate();
                        }),
                        (t.prototype.denyComponentUpdate = function () {
                            this._allowComponentUpdate = !1;
                        }),
                        (t.prototype.shouldComponentUpdate = function (e, t) {
                            return this._allowComponentUpdate && this.unMakeBaseElementsReact(), this._allowComponentUpdate;
                        }),
                        (t.prototype.render = function () {
                            if (!this.canRender()) return null;
                            this.startEndRendering(1);
                            var e = this.renderElement();
                            return this.startEndRendering(-1), (e = this.wrapElement(e)), (this.changedStatePropNameValue = void 0), e;
                        }),
                        (t.prototype.wrapElement = function (e) {
                            return e;
                        }),
                        Object.defineProperty(t.prototype, "isRendering", {
                            get: function () {
                                for (var e = 0, t = this.getRenderedElements(); e < t.length; e++) {
                                    if (t[e].reactRendering > 0) return !0;
                                }
                                return !1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getRenderedElements = function () {
                            return this.getStateElements();
                        }),
                        (t.prototype.startEndRendering = function (e) {
                            for (var t = 0, n = this.getRenderedElements(); t < n.length; t++) {
                                var r = n[t];
                                r.reactRendering || (r.reactRendering = 0), (r.reactRendering += e);
                            }
                        }),
                        (t.prototype.canRender = function () {
                            return !0;
                        }),
                        (t.prototype.renderElement = function () {
                            return null;
                        }),
                        Object.defineProperty(t.prototype, "changedStatePropName", {
                            get: function () {
                                return this.changedStatePropNameValue;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.makeBaseElementsReact = function () {
                            for (var e = this.getStateElements(), t = 0; t < e.length; t++) this.makeBaseElementReact(e[t]);
                        }),
                        (t.prototype.unMakeBaseElementsReact = function () {
                            for (var e = this.getStateElements(), t = 0; t < e.length; t++) this.unMakeBaseElementReact(e[t]);
                        }),
                        (t.prototype.getStateElements = function () {
                            var e = this.getStateElement();
                            return e ? [e] : [];
                        }),
                        (t.prototype.getStateElement = function () {
                            return null;
                        }),
                        Object.defineProperty(t.prototype, "isDisplayMode", {
                            get: function () {
                                return this.props.isDisplayMode || !1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderLocString = function (e, n, r) {
                            return void 0 === n && (n = null), t.renderLocString(e, n, r);
                        }),
                        (t.prototype.canMakeReact = function (e) {
                            return !!e && !!e.iteratePropertiesHash;
                        }),
                        (t.prototype.makeBaseElementReact = function (e) {
                            var t = this;
                            this.canMakeReact(e) &&
                                (e.iteratePropertiesHash(function (e, n) {
                                    if (t.canUsePropInState(n)) {
                                        var r = e[n];
                                        if (Array.isArray(r))
                                            (r = r).onArrayChanged = function (e) {
                                                t.isRendering ||
                                                    ((t.changedStatePropNameValue = n),
                                                    t.setState(function (e) {
                                                        var t = {};
                                                        return (t[n] = r), t;
                                                    }));
                                            };
                                    }
                                }),
                                (e.setPropertyValueCoreHandler = function (e, n, r) {
                                    if (e[n] !== r) {
                                        if (((e[n] = r), !t.canUsePropInState(n))) return;
                                        if (t.isRendering) return;
                                        (t.changedStatePropNameValue = n),
                                            t.setState(function (e) {
                                                var t = {};
                                                return (t[n] = r), t;
                                            });
                                    }
                                }));
                        }),
                        (t.prototype.canUsePropInState = function (e) {
                            return !0;
                        }),
                        (t.prototype.unMakeBaseElementReact = function (e) {
                            this.canMakeReact(e) &&
                                ((e.setPropertyValueCoreHandler = void 0),
                                e.iteratePropertiesHash(function (e, t) {
                                    var n = e[t];
                                    Array.isArray(n) && ((n = n).onArrayChanged = function () {});
                                }));
                        }),
                        t
                    );
                })(r.Component),
                p = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        l(t, e),
                        Object.defineProperty(t.prototype, "cssClasses", {
                            get: function () {
                                return this.props.cssClasses;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        t
                    );
                })(c),
                h = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        l(t, e),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.updateDomElement();
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.updateDomElement();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            if ((e.prototype.componentWillUnmount.call(this), this.questionBase)) {
                                var t = this.control;
                                this.questionBase.beforeDestroyQuestionElement(t), t && t.removeAttribute("data-rendered");
                            }
                        }),
                        (t.prototype.updateDomElement = function () {
                            var e = this.control;
                            e && "r" !== e.getAttribute("data-rendered") && (e.setAttribute("data-rendered", "r"), this.questionBase.afterRenderQuestionElement(e));
                        }),
                        Object.defineProperty(t.prototype, "questionBase", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getRenderedElements = function () {
                            return [this.questionBase];
                        }),
                        Object.defineProperty(t.prototype, "creator", {
                            get: function () {
                                return this.props.creator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.questionBase && !!this.creator;
                        }),
                        (t.prototype.shouldComponentUpdate = function (t, n) {
                            return (
                                !!e.prototype.shouldComponentUpdate.call(this, t, n) &&
                                !(this.questionBase.customWidget && !this.questionBase.customWidgetData.isNeedRender && !this.questionBase.customWidget.widgetJson.isDefaultRender && !this.questionBase.customWidget.widgetJson.render)
                            );
                        }),
                        Object.defineProperty(t.prototype, "isDisplayMode", {
                            get: function () {
                                return this.props.isDisplayMode || (!!this.questionBase && this.questionBase.isInputReadOnly) || !1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.wrapCell = function (e, t, n) {
                            if (!n) return t;
                            var r,
                                o = this.questionBase.survey;
                            return o && (r = a.wrapMatrixCell(o, t, e, n)), null != r ? r : t;
                        }),
                        t
                    );
                })(c),
                d = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.updateValueOnEvent = function (e) {
                                i.Helpers.isTwoValueEquals(n.questionBase.value, e.target.value) || n.setValueCore(e.target.value);
                            }),
                            (n.updateValueOnEvent = n.updateValueOnEvent.bind(n)),
                            n
                        );
                    }
                    return (
                        l(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.setValueCore = function (e) {
                            this.questionBase.value = e;
                        }),
                        (t.prototype.getValueCore = function () {
                            return this.questionBase.value;
                        }),
                        (t.prototype.updateDomElement = function () {
                            if (this.control) {
                                var t = this.control,
                                    n = this.getValueCore();
                                i.Helpers.isTwoValueEquals(n, t.value) || (t.value = this.getValue(n));
                            }
                            e.prototype.updateDomElement.call(this);
                        }),
                        (t.prototype.getValue = function (e) {
                            return i.Helpers.isValueEmpty(e) ? "" : e;
                        }),
                        t
                    );
                })(h),
                f = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                m = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.rootRef = r.createRef()), n.recalculateCss(), n;
                    }
                    return (
                        f(t, e),
                        (t.prototype.recalculateCss = function () {
                            this.row.visibleElements.map(function (e) {
                                return e.cssClasses;
                            });
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.row;
                        }),
                        Object.defineProperty(t.prototype, "row", {
                            get: function () {
                                return this.props.row;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "survey", {
                            get: function () {
                                return this.props.survey;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "creator", {
                            get: function () {
                                return this.props.creator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "css", {
                            get: function () {
                                return this.props.css;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.row && !!this.survey && !!this.creator && this.row.visible;
                        }),
                        (t.prototype.renderElementContent = function () {
                            var e,
                                t = this;
                            return (
                                (e = this.row.visibleElements.map(function (e, n) {
                                    var o = t.createElement(e, n),
                                        i = e.cssClassesValue;
                                    return r.createElement(
                                        "div",
                                        { className: i.questionWrapper, style: e.rootStyle, "data-key": o.key, key: o.key, onFocus: e.focusIn },
                                        t.row.isNeedRender ? o : s.Instance.createElement(e.skeletonComponentName, { element: e, css: t.css })
                                    );
                                })),
                                r.createElement("div", { ref: this.rootRef, className: this.row.getRowCss() }, e)
                            );
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.survey,
                                t = this.renderElementContent();
                            return a.wrapRow(e, t, this.row) || t;
                        }),
                        (t.prototype.componentDidMount = function () {
                            var t = this;
                            e.prototype.componentDidMount.call(this);
                            var n = this.rootRef.current;
                            if (n && !this.row.isNeedRender) {
                                var r = n;
                                setTimeout(function () {
                                    t.row.startLazyRendering(r);
                                }, 10);
                            }
                        }),
                        (t.prototype.shouldComponentUpdate = function (t, n) {
                            return !!e.prototype.shouldComponentUpdate.call(this, t, n) && (t.row !== this.row && ((t.row.isNeedRender = this.row.isNeedRender), this.stopLazyRendering()), this.recalculateCss(), !0);
                        }),
                        (t.prototype.stopLazyRendering = function () {
                            this.row.stopLazyRendering(), (this.row.isNeedRender = !this.row.isLazyRendering());
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.stopLazyRendering();
                        }),
                        (t.prototype.createElement = function (e, t) {
                            var n = t ? "-" + t : 0,
                                r = e.getType();
                            return s.Instance.isElementRegistered(r) || (r = "question"), s.Instance.createElement(r, { key: e.name + n, element: e, creator: this.creator, survey: this.survey, css: this.css });
                        }),
                        t
                    );
                })(c),
                y = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                v = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.renderedRowsCache = {}), (n.rootRef = r.createRef()), n;
                    }
                    return (
                        y(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.panelBase;
                        }),
                        (t.prototype.canUsePropInState = function (t) {
                            return "elements" !== t && e.prototype.canUsePropInState.call(this, t);
                        }),
                        Object.defineProperty(t.prototype, "survey", {
                            get: function () {
                                return this.getSurvey();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "creator", {
                            get: function () {
                                return this.props.creator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "css", {
                            get: function () {
                                return this.getCss();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "panelBase", {
                            get: function () {
                                return this.getPanelBase();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getPanelBase = function () {
                            return this.props.element || this.props.question;
                        }),
                        (t.prototype.getSurvey = function () {
                            return this.props.survey || (this.panelBase ? this.panelBase.survey : null);
                        }),
                        (t.prototype.getCss = function () {
                            return this.props.css;
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.doAfterRender();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this);
                            var t = this.rootRef.current;
                            t && t.removeAttribute("data-rendered");
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), (t.page && this.survey && this.survey.currentPage && t.page.name === this.survey.currentPage.name) || this.doAfterRender();
                        }),
                        (t.prototype.doAfterRender = function () {
                            var e = this.rootRef.current;
                            e && this.survey && (this.panelBase.isPanel ? this.survey.afterRenderPanel(this.panelBase, e) : this.survey.afterRenderPage(e));
                        }),
                        (t.prototype.canRender = function () {
                            return e.prototype.canRender.call(this) && !!this.survey && !!this.panelBase && this.panelBase.isVisible && !!this.panelBase.survey;
                        }),
                        (t.prototype.renderRows = function (e) {
                            "rows" !== this.changedStatePropName && (this.renderedRowsCache = {});
                            for (var t = [], n = this.panelBase.rows, r = 0; r < n.length; r++) {
                                var o = this.renderedRowsCache[n[r].id];
                                o || ((o = this.createRow(n[r], e)), (this.renderedRowsCache[n[r].id] = o)), t.push(o);
                            }
                            return t;
                        }),
                        (t.prototype.createRow = function (e, t) {
                            return r.createElement(m, { key: e.id, row: e, survey: this.survey, creator: this.creator, css: t });
                        }),
                        t
                    );
                })(c),
                g = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                b = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.svgIconRef = o.a.createRef()), n;
                    }
                    return (
                        g(t, e),
                        (t.prototype.updateSvg = function () {
                            this.props.iconName && Object(i.createSvg)(this.props.size, this.props.width, this.props.height, this.props.iconName, this.svgIconRef.current, this.props.title);
                        }),
                        (t.prototype.componentDidUpdate = function () {
                            this.updateSvg();
                        }),
                        (t.prototype.render = function () {
                            var e = "sv-svg-icon";
                            return (
                                this.props.className && (e += " " + this.props.className),
                                this.props.iconName ? o.a.createElement("svg", { className: e, onClick: this.props.onClick, ref: this.svgIconRef, role: "img", "aria-label": this.props.title }, o.a.createElement("use", null)) : null
                            );
                        }),
                        (t.prototype.componentDidMount = function () {
                            this.updateSvg();
                        }),
                        t
                    );
                })(o.a.Component);
            s.Instance.registerElement("sv-svg-icon", function (e) {
                return o.a.createElement(b, e);
            });
            var C = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                E = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        C(t, e),
                        (t.prototype.render = function () {
                            var e = "sv-action-bar-separator ".concat(this.props.cssClasses);
                            return o.a.createElement("div", { className: e });
                        }),
                        t
                    );
                })(o.a.Component);
            s.Instance.registerElement("sv-action-bar-separator", function (e) {
                return o.a.createElement(E, e);
            });
            var q = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                w = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        q(t, e),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.item.getActionRootCss(),
                                t = this.item.needSeparator ? o.a.createElement(E, null) : null,
                                n = s.Instance.createElement(this.item.component || "sv-action-bar-item", { item: this.item });
                            return o.a.createElement("div", { className: e, id: this.item.id }, o.a.createElement("div", { className: "sv-action__content" }, t, n));
                        }),
                        t
                    );
                })(c),
                O = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        q(t, e),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        (t.prototype.renderElement = function () {
                            return o.a.createElement(o.a.Fragment, null, this.renderInnerButton());
                        }),
                        (t.prototype.renderText = function () {
                            if (!this.item.hasTitle) return null;
                            var e = this.item.getActionBarItemTitleCss();
                            return o.a.createElement("span", { className: e }, this.item.title);
                        }),
                        (t.prototype.renderButtonContent = function () {
                            var e = this.renderText(),
                                t = this.item.iconName ? o.a.createElement(b, { className: this.item.cssClasses.itemIcon, size: this.item.iconSize, iconName: this.item.iconName, title: this.item.tooltip || this.item.title }) : null;
                            return o.a.createElement(o.a.Fragment, null, t, e);
                        }),
                        (t.prototype.renderInnerButton = function () {
                            var e = this,
                                t = this.item.getActionBarItemCss(),
                                n = this.item.tooltip || this.item.title,
                                r = this.renderButtonContent(),
                                i = this.item.disableTabStop ? -1 : void 0;
                            return ne(
                                o.a.createElement(
                                    "button",
                                    {
                                        className: t,
                                        type: "button",
                                        disabled: this.item.disabled,
                                        onClick: function () {
                                            return e.item.action(e.item);
                                        },
                                        title: n,
                                        tabIndex: i,
                                    },
                                    r
                                ),
                                null,
                                { processEsc: !1 }
                            );
                        }),
                        t
                    );
                })(c);
            s.Instance.registerElement("sv-action-bar-item", function (e) {
                return o.a.createElement(O, e);
            });
            var _ = n(2),
                S = n.n(_),
                I = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                x = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.containerRef = o.a.createRef()), n.createModel(), n;
                    }
                    return (
                        I(t, e),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.model;
                        }),
                        (t.prototype.createModel = function () {
                            (this.popup = Object(i.createPopupViewModel)(this.props.model, void 0)), this.popup.initializePopupContainer();
                        }),
                        (t.prototype.setTargetElement = function () {
                            if (this.containerRef.current && !this.popup.isModal) {
                                var e = this.popup;
                                if (!e) return;
                                e.targetElement = this.containerRef.current.parentElement;
                            }
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.popup.initializePopupContainer(), this.setTargetElement();
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.setTargetElement();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.popup.unmountPopupContainer();
                        }),
                        (t.prototype.shouldComponentUpdate = function (t, n) {
                            var r;
                            if (!e.prototype.shouldComponentUpdate.call(this, t, n)) return !1;
                            var o = t.model !== this.popup.model;
                            return o && (null === (r = this.popup) || void 0 === r || r.dispose(), this.createModel()), o;
                        }),
                        (t.prototype.render = function () {
                            var e;
                            return (
                                (this.popup.model = this.model),
                                (e = this.model.isModal ? S.a.createPortal(o.a.createElement(P, { model: this.popup }), this.popup.container) : S.a.createPortal(o.a.createElement(R, { model: this.popup }), this.popup.container)),
                                o.a.createElement("div", { ref: this.containerRef }, e)
                            );
                        }),
                        t
                    );
                })(c);
            s.Instance.registerElement("sv-popup", function (e) {
                return o.a.createElement(x, e);
            });
            var P = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.prevIsVisible = !1),
                            (n.handleKeydown = function (e) {
                                n.model.onKeyDown(e);
                            }),
                            (n.clickInside = function (e) {
                                e.stopPropagation();
                            }),
                            n
                        );
                    }
                    return (
                        I(t, e),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.model;
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), !this.prevIsVisible && this.model.isVisible && this.model.updateOnShowing(), (this.prevIsVisible = this.model.isVisible);
                        }),
                        (t.prototype.renderContainer = function (e) {
                            var t = this,
                                n = e.showHeader ? this.renderHeaderPopup(e) : null,
                                r = e.title ? this.renderHeaderContent() : null,
                                i = this.renderContent(),
                                s = e.showFooter ? this.renderFooter(this.model) : null;
                            return o.a.createElement(
                                "div",
                                {
                                    className: "sv-popup__container",
                                    style: { left: e.left, top: e.top, height: e.height, width: e.width, minWidth: e.minWidth },
                                    onClick: function (e) {
                                        t.clickInside(e);
                                    },
                                },
                                o.a.createElement(
                                    "div",
                                    { className: "sv-popup__shadow" },
                                    n,
                                    o.a.createElement("div", { className: "sv-popup__body-content" }, r, o.a.createElement("div", { className: "sv-popup__scrolling-content" }, i), s)
                                )
                            );
                        }),
                        (t.prototype.renderHeaderContent = function () {
                            return o.a.createElement("div", { className: "sv-popup__body-header" }, this.model.title);
                        }),
                        (t.prototype.renderContent = function () {
                            var e = s.Instance.createElement(this.model.contentComponentName, this.model.contentComponentData);
                            return o.a.createElement("div", { className: "sv-popup__content" }, e);
                        }),
                        (t.prototype.renderHeaderPopup = function (e) {
                            return null;
                        }),
                        (t.prototype.renderFooter = function (e) {
                            return o.a.createElement("div", { className: "sv-popup__body-footer" }, o.a.createElement(D, { model: e.footerToolbar }));
                        }),
                        (t.prototype.render = function () {
                            var e = this,
                                t = this.renderContainer(this.model),
                                n = new i.CssClassBuilder().append("sv-popup").append(this.model.styleClass).toString(),
                                r = { display: this.model.isVisible ? "" : "none" };
                            return o.a.createElement(
                                "div",
                                {
                                    tabIndex: -1,
                                    className: n,
                                    style: r,
                                    onClick: function (t) {
                                        e.model.clickOutside(), t.stopPropagation();
                                    },
                                    onKeyDown: this.handleKeydown,
                                },
                                t
                            );
                        }),
                        t
                    );
                })(c),
                R = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        I(t, e),
                        (t.prototype.renderHeaderPopup = function (e) {
                            var t = e;
                            return t ? o.a.createElement("span", { style: { left: t.pointerTarget.left, top: t.pointerTarget.top }, className: "sv-popup__pointer" }) : null;
                        }),
                        t
                    );
                })(P);
            i.settings.showModal = function (e, t, n, r, s, a, u) {
                return (
                    void 0 === u && (u = "popup"),
                    (function (e) {
                        e.onHide = function () {
                            S.a.unmountComponentAtNode(t.container), t.unmountPopupContainer();
                        };
                        var t = Object(i.createPopupModalViewModel)(e);
                        return S.a.render(o.a.createElement(P, { model: t }), t.container), (t.model.isVisible = !0), t;
                    })(Object(i.createDialogOptions)(e, t, n, r, void 0, void 0, s, a, u))
                );
            };
            var N = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                T = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.viewModel = new i.ActionDropdownViewModel(n.item)), n;
                    }
                    return (
                        N(t, e),
                        (t.prototype.renderButtonContent = function () {
                            var t = e.prototype.renderButtonContent.call(this);
                            return o.a.createElement(o.a.Fragment, null, t, o.a.createElement(x, { model: this.item.popupModel }));
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.viewModel.dispose();
                        }),
                        t
                    );
                })(O);
            s.Instance.registerElement("sv-action-bar-item-dropdown", function (e) {
                return o.a.createElement(T, e);
            });
            var j = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                D = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.rootRef = o.a.createRef()), n;
                    }
                    return (
                        j(t, e),
                        Object.defineProperty(t.prototype, "handleClick", {
                            get: function () {
                                return void 0 === this.props.handleClick || this.props.handleClick;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            if ((e.prototype.componentDidMount.call(this), this.model.hasActions)) {
                                var t = this.rootRef.current;
                                this.model.initResponsivityManager(t);
                            }
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.model.hasActions && this.model.resetResponsivityManager();
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.model;
                        }),
                        (t.prototype.renderElement = function () {
                            if (!this.model.hasActions) return null;
                            var e = this.renderItems();
                            return o.a.createElement(
                                "div",
                                {
                                    ref: this.rootRef,
                                    className: this.model.getRootCss(),
                                    onClick: this.handleClick
                                        ? function (e) {
                                              e.stopPropagation();
                                          }
                                        : void 0,
                                },
                                e
                            );
                        }),
                        (t.prototype.renderItems = function () {
                            return this.model.renderedActions.map(function (e, t) {
                                return o.a.createElement(w, { item: e, key: "item" + t });
                            });
                        }),
                        t
                    );
                })(c);
            s.Instance.registerElement("sv-action-bar", function (e) {
                return o.a.createElement(D, e);
            });
            var k = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                B = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        k(t, e),
                        Object.defineProperty(t.prototype, "cssClasses", {
                            get: function () {
                                return this.props.cssClasses;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "element", {
                            get: function () {
                                return this.props.element;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            if (this.element.isTitleRenderedAsString) return c.renderLocString(this.element.locTitle);
                            var e = this.renderTitleSpans(this.element.getTitleOwner(), this.cssClasses);
                            return o.a.createElement(o.a.Fragment, null, e);
                        }),
                        (t.prototype.renderTitleSpans = function (e, t) {
                            var n = function (e) {
                                    return o.a.createElement("span", { "data-key": e, key: e }, " ");
                                },
                                r = [];
                            e.isRequireTextOnStart && (r.push(this.renderRequireText(e, t)), r.push(n("req-sp")));
                            var i = e.no;
                            return (
                                i && (r.push(o.a.createElement("span", { "data-key": "q_num", key: "q_num", className: t.number, style: { position: "static" }, "aria-hidden": !0 }, i)), r.push(n("num-sp"))),
                                e.isRequireTextBeforeTitle && (r.push(this.renderRequireText(e, t)), r.push(n("req-sp"))),
                                r.push(c.renderLocString(e.locTitle, null, "q_title")),
                                e.isRequireTextAfterTitle && (r.push(n("req-sp")), r.push(this.renderRequireText(e, t))),
                                r
                            );
                        }),
                        (t.prototype.renderRequireText = function (e, t) {
                            return o.a.createElement("span", { "data-key": "req-text", key: "req-text", className: t.requiredText || t.panel.requiredText, "aria-hidden": !0 }, e.requiredText);
                        }),
                        t
                    );
                })(o.a.Component),
                M = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                L = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        M(t, e),
                        Object.defineProperty(t.prototype, "cssClasses", {
                            get: function () {
                                return this.props.cssClasses;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "element", {
                            get: function () {
                                return this.props.element;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            var e = o.a.createElement(B, { element: this.element, cssClasses: this.cssClasses });
                            return this.element.hasTitleActions
                                ? o.a.createElement("div", { className: "sv-title-actions" }, o.a.createElement("span", { className: "sv-title-actions__title" }, e), o.a.createElement(D, { model: this.element.getTitleToolbar() }))
                                : e;
                        }),
                        t
                    );
                })(o.a.Component);
            i.RendererFactory.Instance.registerRenderer("element", "title-actions", "sv-title-actions"),
                s.Instance.registerElement("sv-title-actions", function (e) {
                    return o.a.createElement(L, e);
                });
            var A = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                H = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        A(t, e),
                        Object.defineProperty(t.prototype, "element", {
                            get: function () {
                                return this.props.element;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            var e = this.element;
                            if (!e || !e.hasTitle) return null;
                            var t = o.a.createElement(L, { element: e, cssClasses: e.cssClasses }),
                                n = null;
                            e.hasTitleEvents &&
                                (n = function (e) {
                                    Object(i.doKey2ClickUp)(e.nativeEvent);
                                });
                            var r = e.titleTagName;
                            return o.a.createElement(r, { className: e.cssTitle, id: e.ariaTitleId, "aria-label": e.titleAriaLabel, tabIndex: e.titleTabIndex, "aria-expanded": e.titleAriaExpanded, onClick: null, onKeyUp: n }, t);
                        }),
                        t
                    );
                })(o.a.Component),
                W = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                F = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        W(t, e),
                        (t.prototype.getPanelBase = function () {
                            return this.props.page;
                        }),
                        Object.defineProperty(t.prototype, "page", {
                            get: function () {
                                return this.panelBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.renderTitle(),
                                t = this.renderDescription(),
                                n = this.renderRows(this.panelBase.cssClasses);
                            return r.createElement("div", { ref: this.rootRef, className: this.page.cssRoot }, e, t, n);
                        }),
                        (t.prototype.renderTitle = function () {
                            return r.createElement(H, { element: this.page });
                        }),
                        (t.prototype.renderDescription = function () {
                            if (!this.page._showDescription) return null;
                            var e = c.renderLocString(this.page.locDescription);
                            return r.createElement("div", { className: this.panelBase.cssClasses.page.description }, e);
                        }),
                        t
                    );
                })(v),
                V = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Q = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.onChangedHandler = function (e, t) {
                                n.isRendering || n.setState({ changed: n.state && n.state.changed ? n.state.changed + 1 : 1 });
                            }),
                            (n.rootRef = o.a.createRef()),
                            n
                        );
                    }
                    return (
                        V(t, e),
                        Object.defineProperty(t.prototype, "locStr", {
                            get: function () {
                                return this.props.locStr;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "style", {
                            get: function () {
                                return this.props.style;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            this.reactOnStrChanged();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.locStr && this.locStr.onStringChanged.remove(this.onChangedHandler);
                        }),
                        (t.prototype.componentDidUpdate = function (e, t) {
                            e.locStr && this.locStr.onStringChanged.remove(this.onChangedHandler), this.reactOnStrChanged();
                        }),
                        (t.prototype.reactOnStrChanged = function () {
                            this.locStr && this.locStr.onStringChanged.add(this.onChangedHandler);
                        }),
                        (t.prototype.render = function () {
                            if (!this.locStr) return null;
                            this.isRendering = !0;
                            var e = this.renderString();
                            return (this.isRendering = !1), e;
                        }),
                        (t.prototype.renderString = function () {
                            if (this.locStr.hasHtml) {
                                var e = { __html: this.locStr.renderedHtml };
                                return o.a.createElement("span", { ref: this.rootRef, className: "sv-string-viewer", style: this.style, dangerouslySetInnerHTML: e });
                            }
                            return o.a.createElement("span", { ref: this.rootRef, className: "sv-string-viewer", style: this.style }, this.locStr.renderedHtml);
                        }),
                        t
                    );
                })(o.a.Component);
            s.Instance.registerElement(i.LocalizableString.defaultRenderer, function (e) {
                return o.a.createElement(Q, e);
            });
            var U = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                z = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.state = { changed: 0 }), n;
                    }
                    return (
                        U(t, e),
                        Object.defineProperty(t.prototype, "survey", {
                            get: function () {
                                return this.props.survey;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "css", {
                            get: function () {
                                return this.survey.css;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            var e = this;
                            this.survey.locLogo.onChanged = function () {
                                e.setState({ changed: e.state.changed + 1 });
                            };
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.survey.locLogo.onChanged = function () {};
                        }),
                        (t.prototype.renderTitle = function () {
                            if (!this.survey.renderedHasTitle) return null;
                            var e = c.renderLocString(this.survey.locDescription);
                            return o.a.createElement(
                                "div",
                                { className: this.css.headerText, style: { maxWidth: this.survey.titleMaxWidth } },
                                o.a.createElement(H, { element: this.survey }),
                                this.survey.renderedHasDescription ? o.a.createElement("h5", { className: this.css.description }, e) : null
                            );
                        }),
                        (t.prototype.renderLogoImage = function (e) {
                            if (!e) return null;
                            var t = this.survey.getElementWrapperComponentName(this.survey, "logo-image"),
                                n = this.survey.getElementWrapperComponentData(this.survey, "logo-image");
                            return s.Instance.createElement(t, { data: n });
                        }),
                        (t.prototype.render = function () {
                            return this.survey.renderedHasHeader
                                ? o.a.createElement(
                                      "div",
                                      { className: this.css.header },
                                      this.renderLogoImage(this.survey.isLogoBefore),
                                      this.renderTitle(),
                                      this.renderLogoImage(this.survey.isLogoAfter),
                                      o.a.createElement("div", { className: this.css.headerClose })
                                  )
                                : null;
                        }),
                        t
                    );
                })(o.a.Component);
            s.Instance.registerElement("survey-header", function (e) {
                return o.a.createElement(z, e);
            });
            var K = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                J = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        K(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.timerModel;
                        }),
                        Object.defineProperty(t.prototype, "timerModel", {
                            get: function () {
                                return this.props.timerModel;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            return r.createElement("div", { className: this.timerModel.survey.getCss().timerRoot }, this.timerModel.text);
                        }),
                        t
                    );
                })(p),
                Z = (function () {
                    function e() {
                        this.creatorHash = {};
                    }
                    return (
                        (e.prototype.registerQuestion = function (e, t) {
                            this.creatorHash[e] = t;
                        }),
                        (e.prototype.getAllTypes = function () {
                            var e = new Array();
                            for (var t in this.creatorHash) e.push(t);
                            return e.sort();
                        }),
                        (e.prototype.createQuestion = function (e, t) {
                            var n = this.creatorHash[e];
                            return null == n ? null : n(t);
                        }),
                        (e.Instance = new e()),
                        e
                    );
                })(),
                G = {
                    comparator: { trimStrings: !0, caseSensitive: !1 },
                    expressionDisableConversionChar: "#",
                    useLocalTimeZone: !0,
                    commentPrefix: "-Comment",
                    webserviceEncodeParameters: !0,
                    useCachingForChoicesRestful: !0,
                    get useCachingForChoicesRestfull() {
                        return G.useCachingForChoicesRestful;
                    },
                    set useCachingForChoicesRestfull(e) {
                        G.useCachingForChoicesRestful = e;
                    },
                    surveyServiceUrl: "https://api.surveyjs.io/public/v1/Survey",
                    itemValueSeparator: "|",
                    itemValueAlwaysSerializeAsObject: !1,
                    itemValueAlwaysSerializeText: !1,
                    defaultLocaleName: "default",
                    storeDuplicatedTranslations: !1,
                    matrixDefaultRowName: "default",
                    matrixDefaultCellType: "dropdown",
                    matrixTotalValuePostFix: "-total",
                    matrixMaximumRowCount: 1e3,
                    matrixMaxRowCountInCondition: 1,
                    matrixRenderRemoveAsIcon: !0,
                    panelMaximumPanelCount: 100,
                    ratingMaximumRateValueCount: 20,
                    disableOnGettingChoicesFromWeb: !1,
                    serializeLocalizableStringAsObject: !1,
                    allowShowEmptyTitleInDesignMode: !0,
                    allowShowEmptyDescriptionInDesignMode: !0,
                    executeCompleteTriggerOnValueChanged: !1,
                    changeNavigationButtonsOnCompleteTrigger: !0,
                    executeSkipTriggerOnValueChanged: !0,
                    readOnlyCommentRenderMode: "textarea",
                    readOnlyTextRenderMode: "input",
                    confirmActionFunc: function (e) {
                        return confirm(e);
                    },
                    minWidth: "300px",
                    maxWidth: "100%",
                    maximumConditionRunCountOnValueChanged: 10,
                    setQuestionVisibleIndexForHiddenTitle: !1,
                    setQuestionVisibleIndexForHiddenNumber: !1,
                    lazyRowsRendering: !1,
                    lazyRowsRenderingStartRow: 3,
                    showItemsInOrder: "default",
                    supportedValidators: { question: ["expression"], comment: ["text", "regex"], text: ["numeric", "text", "regex", "email"], checkbox: ["answercount"], imagepicker: ["answercount"] },
                    minDate: "",
                    maxDate: "",
                    showModal: void 0,
                    supportCreatorV2: !1,
                    showDefaultItemsInCreatorV2: !0,
                    customIcons: {},
                    titleTags: { survey: "h3", page: "h4", panel: "h4", question: "h5" },
                    questions: {
                        inputTypes: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"],
                        dataList: [
                            "name",
                            "honorific-prefix",
                            "given-name",
                            "additional-name",
                            "family-name",
                            "honorific-suffix",
                            "nickname",
                            "organization-title",
                            "username",
                            "new-password",
                            "current-password",
                            "organization",
                            "street-address",
                            "address-line1",
                            "address-line2",
                            "address-line3",
                            "address-level4",
                            "address-level3",
                            "address-level2",
                            "address-level1",
                            "country",
                            "country-name",
                            "postal-code",
                            "cc-name",
                            "cc-given-name",
                            "cc-additional-name",
                            "cc-family-name",
                            "cc-number",
                            "cc-exp",
                            "cc-exp-month",
                            "cc-exp-year",
                            "cc-csc",
                            "cc-type",
                            "transaction-currency",
                            "transaction-amount",
                            "language",
                            "bday",
                            "bday-day",
                            "bday-month",
                            "bday-year",
                            "sex",
                            "url",
                            "photo",
                            "tel",
                            "tel-country-code",
                            "tel-national",
                            "tel-area-code",
                            "tel-local",
                            "tel-local-prefix",
                            "tel-local-suffix",
                            "tel-extension",
                            "email",
                            "impp",
                        ],
                    },
                };
            function X(e) {
                return "function" != typeof e ? e : e();
            }
            var $ = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Y = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        $(t, e),
                        (t.prototype.render = function () {
                            return o.a.createElement(
                                "div",
                                { className: "sv-brand-info" },
                                o.a.createElement(
                                    "a",
                                    { className: "sv-brand-info__logo", href: "https://surveyjs.io/?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=landing_page" },
                                    o.a.createElement("img", { src: "https://surveyjs.io/Content/Images/poweredby.svg" })
                                ),
                                o.a.createElement(
                                    "div",
                                    { className: "sv-brand-info__text" },
                                    "Try and see how easy it is to ",
                                    o.a.createElement("a", { href: "https://surveyjs.io/create-survey?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=create_survey" }, "create a survey")
                                ),
                                o.a.createElement("div", { className: "sv-brand-info__terms" }, o.a.createElement("a", { href: "https://surveyjs.io/TermsOfUse" }, "Terms of Use & Privacy Statement"))
                            );
                        }),
                        t
                    );
                })(o.a.Component),
                ee = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                te = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.previousJSON = {}),
                            (n.handleTryAgainClick = n.handleTryAgainClick.bind(n)),
                            n.createSurvey(t),
                            n.updateSurvey(t, {}),
                            (n.rootRef = r.createRef()),
                            (n.rootNodeId = t.id || null),
                            (n.rootNodeClassName = t.className || ""),
                            n
                        );
                    }
                    return (
                        ee(t, e),
                        Object.defineProperty(t, "cssType", {
                            get: function () {
                                return i.surveyCss.currentType;
                            },
                            set: function (e) {
                                i.StylesManager.applyTheme(e);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.survey;
                        }),
                        (t.prototype.shouldComponentUpdate = function (t, n) {
                            return !!e.prototype.shouldComponentUpdate.call(this, t, n) && (this.isModelJSONChanged(t) && (this.createSurvey(t), this.updateSurvey(t, {})), !0);
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.updateSurvey(this.props, t);
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this);
                            var t = this.rootRef.current;
                            t && this.survey && this.survey.afterRenderSurvey(t), this.survey && this.survey.startTimerFromUI();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.survey && this.survey.stopTimer();
                        }),
                        (t.prototype.doRender = function () {
                            var e;
                            this.survey.needRenderIcons && i.SvgRegistry.renderIcons(),
                                (e =
                                    "completed" == this.survey.state
                                        ? this.renderCompleted()
                                        : "completedbefore" == this.survey.state
                                        ? this.renderCompletedBefore()
                                        : "loading" == this.survey.state
                                        ? this.renderLoading()
                                        : this.renderSurvey());
                            var t = r.createElement(z, { survey: this.survey }),
                                n = r.createElement("div", { className: "sv_custom_header" });
                            this.survey.hasLogo && (n = null);
                            var o = this.survey.getRootCss(),
                                s = this.rootNodeClassName ? this.rootNodeClassName + " " + o : o,
                                a = this.survey.isShowProgressBarOnTop && !this.survey.isShowStartingPage ? this.renderProgress(!0) : null;
                            return r.createElement(
                                "div",
                                { id: this.rootNodeId, ref: this.rootRef, className: s },
                                r.createElement(
                                    "form",
                                    {
                                        onSubmit: function (e) {
                                            e.preventDefault();
                                        },
                                    },
                                    n,
                                    r.createElement("div", { className: this.css.container }, t, this.renderTimerPanel("top"), a, e)
                                ),
                                this.survey.showBrandInfo ? r.createElement(Y, null) : null
                            );
                        }),
                        (t.prototype.renderElement = function () {
                            return this.doRender();
                        }),
                        Object.defineProperty(t.prototype, "css", {
                            get: function () {
                                return this.survey.css;
                            },
                            set: function (e) {
                                this.survey.css = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.handleTryAgainClick = function (e) {
                            this.survey.doComplete();
                        }),
                        (t.prototype.renderCompleted = function () {
                            if (!this.survey.showCompletedPage) return null;
                            var e = null;
                            if (this.survey.completedState) {
                                var t = null;
                                if ("error" == this.survey.completedState) {
                                    var n = this.survey.getLocalizationString("saveAgainButton");
                                    t = r.createElement("input", { type: "button", value: n, className: this.css.saveData.saveAgainButton, onClick: this.handleTryAgainClick });
                                }
                                var o = this.css.saveData[this.survey.completedState];
                                e = r.createElement("div", { className: this.css.saveData.root }, r.createElement("div", { className: o }, r.createElement("span", null, this.survey.completedStateText), t));
                            }
                            var i = { __html: this.survey.processedCompletedHtml };
                            return r.createElement(r.Fragment, null, r.createElement("div", { dangerouslySetInnerHTML: i, className: this.survey.completedCss }), e);
                        }),
                        (t.prototype.renderCompletedBefore = function () {
                            var e = { __html: this.survey.processedCompletedBeforeHtml };
                            return r.createElement("div", { dangerouslySetInnerHTML: e, className: this.css.body });
                        }),
                        (t.prototype.renderLoading = function () {
                            var e = { __html: this.survey.processedLoadingHtml };
                            return r.createElement("div", { dangerouslySetInnerHTML: e, className: this.css.body });
                        }),
                        (t.prototype.renderSurvey = function () {
                            var e = this.survey.activePage ? this.renderPage(this.survey.activePage) : null,
                                t = this.survey.isShowStartingPage,
                                n = this.survey.activePage ? this.survey.activePage.id : "",
                                o = this.survey.isShowProgressBarOnBottom && !t ? this.renderProgress(!1) : null,
                                i = this.survey.bodyCss;
                            e || ((i = this.css.bodyEmpty), (e = this.renderEmptySurvey()));
                            var s = {};
                            return (
                                this.survey.renderedWidth && ((s.width = this.survey.renderedWidth), (s.maxWidth = this.survey.renderedWidth)),
                                r.createElement("div", { id: n, className: i, style: s }, this.renderNavigation("top"), e, this.renderTimerPanel("bottom"), o, this.renderNavigation("bottom"))
                            );
                        }),
                        (t.prototype.renderTimerPanel = function (e) {
                            return this.survey.isShowStartingPage
                                ? null
                                : ("top" !== e || this.survey.isTimerPanelShowingOnTop) && ("bottom" !== e || this.survey.isTimerPanelShowingOnBottom)
                                ? r.createElement(J, { timerModel: this.survey.timerModel })
                                : null;
                        }),
                        (t.prototype.renderPage = function (e) {
                            return r.createElement(F, { survey: this.survey, page: e, css: this.css, creator: this });
                        }),
                        (t.prototype.renderProgress = function (e) {
                            return s.Instance.createElement("sv-progress-" + this.survey.progressBarType.toLowerCase(), { survey: this.survey, css: this.css, isTop: e });
                        }),
                        (t.prototype.renderNavigation = function (e) {
                            return "both" === this.survey.isNavigationButtonsShowing || ("none" !== this.survey.isNavigationButtonsShowing && this.survey.isNavigationButtonsShowing === e)
                                ? r.createElement(D, { model: this.survey.navigationBar })
                                : null;
                        }),
                        (t.prototype.renderEmptySurvey = function () {
                            return r.createElement("span", null, this.survey.emptySurveyText);
                        }),
                        (t.prototype.createSurvey = function (e) {
                            e || (e = {}),
                                (this.previousJSON = {}),
                                e ? (e.model ? (this.survey = e.model) : e.json && ((this.previousJSON = e.json), (this.survey = new i.SurveyModel(e.json)))) : (this.survey = new i.SurveyModel()),
                                e.css && (this.survey.css = this.css),
                                this.setSurveyEvents();
                        }),
                        (t.prototype.isModelJSONChanged = function (e) {
                            return e.model ? this.survey !== e.model : !!e.json && !i.Helpers.isTwoValueEquals(e.json, this.previousJSON);
                        }),
                        (t.prototype.updateSurvey = function (e, t) {
                            if (e)
                                for (var n in ((t = t || {}), e))
                                    "model" != n &&
                                        "children" != n &&
                                        "json" != n &&
                                        ("css" != n
                                            ? e[n] !== t[n] && (0 == n.indexOf("on") && this.survey[n] && this.survey[n].add ? (t[n] && this.survey[n].remove(t[n]), this.survey[n].add(e[n])) : (this.survey[n] = e[n]))
                                            : (this.survey.mergeValues(e.css, this.survey.getCss()), this.survey.updateNavigationCss(), this.survey.updateElementCss()));
                        }),
                        (t.prototype.setSurveyEvents = function () {
                            var e = this;
                            (this.survey.renderCallback = function () {
                                var t = e.state && e.state.modelChanged ? e.state.modelChanged : 0;
                                e.setState({ modelChanged: t + 1 });
                            }),
                                this.survey.onPartialSend.add(function (t) {
                                    e.state && e.setState(e.state);
                                });
                        }),
                        (t.prototype.createQuestionElement = function (e) {
                            return Z.Instance.createQuestion(!e.isDefaultRendering || e.isDefaultRendering() ? e.getTemplate() : e.getComponentName(), { question: e, isDisplayMode: e.isInputReadOnly, creator: this });
                        }),
                        (t.prototype.renderError = function (e, t, n) {
                            return r.createElement(
                                "div",
                                { key: e },
                                r.createElement("span", { className: n.error.icon || void 0, "aria-hidden": "true" }),
                                r.createElement("span", { className: n.error.item || void 0 }, r.createElement(Q, { locStr: t.locText }))
                            );
                        }),
                        (t.prototype.questionTitleLocation = function () {
                            return this.survey.questionTitleLocation;
                        }),
                        (t.prototype.questionErrorLocation = function () {
                            return this.survey.questionErrorLocation;
                        }),
                        t
                    );
                })(c);
            function ne(e, t, n) {
                return (
                    void 0 === n && (n = { processEsc: !0, disableTabStop: !1 }),
                    (t && t.disableTabStop) || (n && n.disableTabStop)
                        ? r.cloneElement(e, { tabIndex: -1 })
                        : r.cloneElement(e, {
                              tabIndex: 0,
                              onKeyUp: function (e) {
                                  return e.preventDefault(), e.stopPropagation(), Object(i.doKey2ClickUp)(e, n), !1;
                              },
                              onKeyDown: function (e) {
                                  return (function (e, t) {
                                      if ((void 0 === t && (t = { processEsc: !0 }), !e.target || "true" !== e.target.contentEditable)) {
                                          var n = e.which || e.keyCode,
                                              r = [13, 32];
                                          t.processEsc && r.push(27), -1 !== r.indexOf(n) && e.preventDefault();
                                      }
                                  })(e, n);
                              },
                              onBlur: function (e) {
                                  return (function (e) {
                                      var t = e.target;
                                      t && t.classList && t.classList.remove("sv-focused--by-key");
                                  })(e);
                              },
                          })
                );
            }
            s.Instance.registerElement("survey", function (e) {
                return r.createElement(te, e);
            });
            var re = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                oe = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.updateStateFunction = null), (n.state = { update: 0 }), n;
                    }
                    return (
                        re(t, e),
                        Object.defineProperty(t.prototype, "survey", {
                            get: function () {
                                return this.props.survey;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "css", {
                            get: function () {
                                return this.props.css;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            if (this.survey) {
                                var e = this;
                                (this.updateStateFunction = function () {
                                    e.setState({ update: e.state.update + 1 });
                                }),
                                    this.survey.onPageVisibleChanged.add(this.updateStateFunction);
                            }
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.survey && this.updateStateFunction && (this.survey.onPageVisibleChanged.remove(this.updateStateFunction), (this.updateStateFunction = null));
                        }),
                        t
                    );
                })(r.Component),
                ie = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                se = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        ie(t, e),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.question.isInputTextUpdate ? null : this.updateValueOnEvent,
                                n = this.question.renderedPlaceholder;
                            return this.question.isReadOnlyRenderDiv()
                                ? r.createElement("div", null, this.question.value)
                                : r.createElement("textarea", {
                                      id: this.question.inputId,
                                      className: this.question.className,
                                      disabled: this.question.isInputReadOnly,
                                      readOnly: this.question.isInputReadOnly,
                                      ref: function (t) {
                                          return (e.control = t);
                                      },
                                      maxLength: this.question.getMaxLength(),
                                      placeholder: n,
                                      onBlur: t,
                                      onInput: function (t) {
                                          e.question.isInputTextUpdate ? e.updateValueOnEvent(t) : e.question.updateElement();
                                      },
                                      onKeyDown: function (t) {
                                          e.question.onKeyDown(t);
                                      },
                                      cols: this.question.cols,
                                      rows: this.question.rows,
                                      "aria-required": this.question.ariaRequired,
                                      "aria-label": this.question.ariaLabel,
                                      "aria-invalid": this.question.ariaInvalid,
                                      "aria-describedby": this.question.ariaDescribedBy,
                                      style: { resize: this.question.resizeStyle },
                                  });
                        }),
                        t
                    );
                })(d),
                ae = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        ie(t, e),
                        (t.prototype.canRender = function () {
                            return !!this.props.question;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.props.question,
                                n = this.props.otherCss || this.cssClasses.comment,
                                o = function (n) {
                                    e.setState({ comment: n.target.value }), t.onCommentChange(n);
                                },
                                i = this.state ? this.state.comment : void 0;
                            void 0 !== i && i.trim() !== t.comment && (i = t.comment);
                            var s = void 0 !== i ? i : t.comment || "";
                            return t.isReadOnlyRenderDiv()
                                ? r.createElement("div", null, s)
                                : r.createElement("textarea", {
                                      className: n,
                                      value: s,
                                      disabled: this.isDisplayMode,
                                      maxLength: t.getOthersMaxLength(),
                                      placeholder: t.commentOrOtherPlaceholder,
                                      onChange: o,
                                      onBlur: function (e) {
                                          t.onCommentChange(e), o(e);
                                      },
                                      onInput: function (e) {
                                          return t.onCommentInput(e);
                                      },
                                      "aria-required": t.isRequired,
                                      "aria-label": t.locTitle.renderedHtml,
                                      style: { resize: t.resizeStyle },
                                  });
                        }),
                        t
                    );
                })(p);
            Z.Instance.registerQuestion("comment", function (e) {
                return r.createElement(se, e);
            });
            var ue = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                le = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.widgetRef = r.createRef()), n;
                    }
                    return (
                        ue(t, e),
                        (t.prototype._afterRender = function () {
                            if (this.questionBase.customWidget) {
                                var e = this.widgetRef.current;
                                e && (this.questionBase.customWidget.afterRender(this.questionBase, e), (this.questionBase.customWidgetData.isNeedRender = !1));
                            }
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.questionBase && this._afterRender();
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n);
                            var r = !!this.questionBase.customWidget && this.questionBase.customWidget.isDefaultRender;
                            this.questionBase && !r && this._afterRender();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            if ((e.prototype.componentWillUnmount.call(this), this.questionBase.customWidget)) {
                                var t = this.widgetRef.current;
                                t && this.questionBase.customWidget.willUnmount(this.questionBase, t);
                            }
                        }),
                        (t.prototype.canRender = function () {
                            return e.prototype.canRender.call(this) && this.questionBase.visible;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.questionBase.customWidget;
                            if (e.isDefaultRender) return r.createElement("div", { ref: this.widgetRef }, this.creator.createQuestionElement(this.questionBase));
                            var t = null;
                            if (e.widgetJson.render) t = e.widgetJson.render(this.questionBase);
                            else if (e.htmlTemplate) {
                                var n = { __html: e.htmlTemplate };
                                return r.createElement("div", { ref: this.widgetRef, dangerouslySetInnerHTML: n });
                            }
                            return r.createElement("div", { ref: this.widgetRef }, t);
                        }),
                        t
                    );
                })(h),
                ce = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                pe = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        ce(t, e),
                        Object.defineProperty(t.prototype, "element", {
                            get: function () {
                                return this.props.element;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            var e = this.element,
                                t = e.hasTitle ? o.a.createElement(H, { element: e }) : null,
                                n = e.hasDescriptionUnderTitle ? c.renderQuestionDescription(this.element) : null;
                            return o.a.createElement("div", { className: e.cssHeader, onClick: e.clickTitleFunction }, t, n);
                        }),
                        t
                    );
                })(o.a.Component),
                he = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                de = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.isNeedFocus = !1), (n.rootRef = r.createRef()), n;
                    }
                    return (
                        he(t, e),
                        (t.renderQuestionBody = function (e, t) {
                            return t.isVisible ? (t.customWidget ? r.createElement(le, { creator: e, question: t }) : e.createQuestionElement(t)) : null;
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.question;
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.element;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "creator", {
                            get: function () {
                                return this.props.creator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.question && (this.question.react = this), this.doAfterRender();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.question && (this.question.react = null);
                            var t = this.rootRef.current;
                            t && t.removeAttribute("data-rendered");
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.doAfterRender();
                        }),
                        (t.prototype.doAfterRender = function () {
                            if ((this.isNeedFocus && (this.question.isCollapsed || this.question.clickTitleFunction(), (this.isNeedFocus = !1)), this.question)) {
                                var e = this.rootRef.current;
                                e && "r" !== e.getAttribute("data-rendered") && (e.setAttribute("data-rendered", "r"), e.setAttribute("data-name", this.question.name), this.question.afterRender && this.question.afterRender(e));
                            }
                        }),
                        (t.prototype.canRender = function () {
                            return e.prototype.canRender.call(this) && !!this.question && !!this.creator && this.question.isVisible;
                        }),
                        (t.prototype.renderQuestionContent = function () {
                            var e = this.question,
                                t = { display: this.question.isCollapsed ? "none" : "" },
                                n = e.cssClasses,
                                o = this.renderQuestion(),
                                i = this.question.showErrorOnTop ? this.renderErrors(n, "top") : null,
                                s = this.question.showErrorOnBottom ? this.renderErrors(n, "bottom") : null,
                                a = e && e.hasComment ? this.renderComment(n) : null,
                                u = this.question.isErrorsModeTooltip ? this.renderErrors(n, "tooltip") : null,
                                l = e.hasDescriptionUnderInput ? this.renderDescription() : null;
                            return r.createElement("div", { className: e.cssContent || void 0, style: t, role: "presentation" }, i, o, a, s, u, l);
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.question,
                                t = e.cssClasses,
                                n = this.renderHeader(e),
                                o = e.hasTitleOnLeftTop ? n : null,
                                i = e.hasTitleOnBottom ? n : null,
                                s = this.question.showErrorsAboveQuestion ? this.renderErrors(t, "") : null,
                                a = this.question.showErrorsBelowQuestion ? this.renderErrors(t, "") : null,
                                u = {};
                            e.paddingLeft && (u.paddingLeft = e.paddingLeft), e.paddingRight && (u.paddingRight = e.paddingRight);
                            var l = this.wrapQuestionContent(this.renderQuestionContent());
                            return r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(
                                    "div",
                                    {
                                        ref: this.rootRef,
                                        id: e.id,
                                        className: e.getRootCss(),
                                        style: u,
                                        role: e.ariaRole,
                                        "aria-required": this.question.ariaRequired,
                                        "aria-invalid": this.question.ariaInvalid,
                                        "aria-labelledby": e.hasTitle ? e.ariaTitleId : null,
                                    },
                                    s,
                                    o,
                                    l,
                                    i,
                                    a
                                )
                            );
                        }),
                        (t.prototype.wrapElement = function (e) {
                            var t,
                                n = this.question.survey;
                            return n && (t = a.wrapElement(n, e, this.question)), null != t ? t : e;
                        }),
                        (t.prototype.wrapQuestionContent = function (e) {
                            var t,
                                n = this.question.survey;
                            return n && (t = a.wrapQuestionContent(n, e, this.question)), null != t ? t : e;
                        }),
                        (t.prototype.renderQuestion = function () {
                            return t.renderQuestionBody(this.creator, this.question);
                        }),
                        (t.prototype.renderDescription = function () {
                            return c.renderQuestionDescription(this.question);
                        }),
                        (t.prototype.renderComment = function (e) {
                            var t = c.renderLocString(this.question.locCommentText);
                            return r.createElement(
                                "div",
                                { className: this.question.cssClasses.formGroup },
                                r.createElement("div", null, t),
                                r.createElement(ae, { question: this.question, cssClasses: e, otherCss: e.other, isDisplayMode: this.question.isInputReadOnly })
                            );
                        }),
                        (t.prototype.renderHeader = function (e) {
                            return r.createElement(pe, { element: e });
                        }),
                        (t.prototype.renderErrors = function (e, t) {
                            return r.createElement(fe, { element: this.question, cssClasses: e, creator: this.creator, location: t, id: this.question.id + "_errors" });
                        }),
                        t
                    );
                })(c);
            s.Instance.registerElement("question", function (e) {
                return r.createElement(de, e);
            });
            var fe = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.state = n.getState()), (n.tooltipRef = r.createRef()), n;
                    }
                    return (
                        he(t, e),
                        Object.defineProperty(t.prototype, "id", {
                            get: function () {
                                return this.props.id;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "element", {
                            get: function () {
                                return this.props.element;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "creator", {
                            get: function () {
                                return this.props.creator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "location", {
                            get: function () {
                                return this.props.location;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getState = function (e) {
                            return void 0 === e && (e = null), e ? { error: e.error + 1 } : { error: 0 };
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.element && this.element.hasVisibleErrors;
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n),
                                "tooltip" == this.props.location &&
                                    (this.tooltipRef.current && !this.tooltipManager && (this.tooltipManager = new i.TooltipManager(this.tooltipRef.current)), this.tooltipManager && !this.tooltipRef.current && this.disposeTooltipManager());
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.tooltipManager && this.disposeTooltipManager();
                        }),
                        (t.prototype.disposeTooltipManager = function () {
                            this.tooltipManager.dispose(), (this.tooltipManager = void 0);
                        }),
                        (t.prototype.renderElement = function () {
                            for (var e = [], t = 0; t < this.element.errors.length; t++) {
                                var n = "error" + t;
                                e.push(this.creator.renderError(n, this.element.errors[t], this.cssClasses));
                            }
                            return r.createElement("div", { role: "alert", "aria-live": "polite", className: this.element.cssError, id: this.id, ref: this.tooltipRef }, e);
                        }),
                        t
                    );
                })(p),
                me = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        he(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.question;
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.getQuestion();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "creator", {
                            get: function () {
                                return this.props.creator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getQuestion = function () {
                            return this.props.question;
                        }),
                        Object.defineProperty(t.prototype, "itemCss", {
                            get: function () {
                                return this.props.itemCss;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.doAfterRender();
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.doAfterRender();
                        }),
                        (t.prototype.doAfterRender = function () {}),
                        (t.prototype.canRender = function () {
                            return !!this.question;
                        }),
                        (t.prototype.renderErrors = function (e) {
                            return this.getShowErrors() ? r.createElement(fe, { element: this.question, cssClasses: this.cssClasses, creator: this.creator, location: e }) : null;
                        }),
                        (t.prototype.renderContent = function () {
                            var e = this.creator.questionErrorLocation(),
                                t = this.renderErrors(e),
                                n = this.question.showErrorOnTop ? t : null,
                                o = this.question.showErrorOnBottom ? t : null,
                                i = this.renderQuestion();
                            return r.createElement(r.Fragment, null, n, i, o);
                        }),
                        (t.prototype.getShowErrors = function () {
                            return this.question.isVisible;
                        }),
                        (t.prototype.renderQuestion = function () {
                            return de.renderQuestionBody(this.creator, this.question);
                        }),
                        t
                    );
                })(p),
                ye = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.cellRef = r.createRef()), n;
                    }
                    return (
                        he(t, e),
                        (t.prototype.componentWillUnmount = function () {
                            if ((e.prototype.componentWillUnmount.call(this), this.question)) {
                                var t = this.cellRef.current;
                                t && t.removeAttribute("data-rendered");
                            }
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.getCellStyle(),
                                t = this.question.isErrorsModeTooltip ? this.renderErrors("tooltip") : null;
                            return r.createElement(
                                "td",
                                { ref: this.cellRef, className: this.itemCss, "data-responsive-title": this.getHeaderText(), title: this.props.cell.getTitle(), style: e },
                                this.wrapCell(this.props.cell, r.createElement("div", { className: this.cssClasses.cellQuestionWrapper }, this.renderContent(), t))
                            );
                        }),
                        (t.prototype.getCellStyle = function () {
                            return null;
                        }),
                        (t.prototype.getHeaderText = function () {
                            return "";
                        }),
                        (t.prototype.wrapCell = function (e, t) {
                            if (!e) return t;
                            var n,
                                r = this.question.survey;
                            return r && (n = a.wrapMatrixCell(r, t, e)), null != n ? n : t;
                        }),
                        t
                    );
                })(me),
                ve = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                ge = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.hasBeenExpanded = !1), n;
                    }
                    return (
                        ve(t, e),
                        Object.defineProperty(t.prototype, "panel", {
                            get: function () {
                                return this.panelBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.renderHeader(),
                                t = r.createElement(fe, { element: this.panelBase, cssClasses: this.panelBase.cssClasses, creator: this.creator }),
                                n = { paddingLeft: this.panel.innerPaddingLeft, display: this.panel.isCollapsed ? "none" : void 0 },
                                o = null;
                            if (!this.panel.isCollapsed || this.hasBeenExpanded) {
                                this.hasBeenExpanded = !0;
                                var i = this.renderRows(this.panelBase.cssClasses),
                                    s = this.panelBase.cssClasses.panel.content;
                                o = this.renderContent(n, i, s);
                            }
                            return r.createElement("div", { ref: this.rootRef, className: this.panelBase.getContainerCss(), onFocus: this.panelBase.focusIn }, e, t, o);
                        }),
                        (t.prototype.renderHeader = function () {
                            return this.panel.hasTitle || this.panel.hasDescription ? r.createElement(pe, { element: this.panel }) : null;
                        }),
                        (t.prototype.wrapElement = function (e) {
                            var t,
                                n = this.panel.survey;
                            return n && (t = a.wrapElement(n, e, this.panel)), null != t ? t : e;
                        }),
                        (t.prototype.renderContent = function (e, t, n) {
                            var o = this.renderBottom();
                            return r.createElement("div", { style: e, className: n, id: this.panel.contentId }, t, o);
                        }),
                        (t.prototype.renderTitle = function () {
                            return this.panelBase.title ? r.createElement(H, { element: this.panelBase }) : null;
                        }),
                        (t.prototype.renderDescription = function () {
                            if (!this.panelBase.description) return null;
                            var e = c.renderLocString(this.panelBase.locDescription);
                            return r.createElement("div", { className: this.panel.cssClasses.panel.description }, e);
                        }),
                        (t.prototype.renderBottom = function () {
                            var e = this.panel.getFooterToolbar();
                            return e.hasActions ? r.createElement(D, { model: e }) : null;
                        }),
                        t
                    );
                })(v);
            s.Instance.registerElement("panel", function (e) {
                return r.createElement(ge, e);
            });
            var be = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Ce = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        be(t, e),
                        Object.defineProperty(t.prototype, "flowPanel", {
                            get: function () {
                                return this.panel;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this),
                                this.flowPanel &&
                                    ((this.flowPanel.onCustomHtmlProducing = function () {
                                        return "";
                                    }),
                                    (this.flowPanel.onGetHtmlForQuestion = this.renderQuestion));
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.flowPanel && ((this.flowPanel.onCustomHtmlProducing = null), (this.flowPanel.onGetHtmlForQuestion = null));
                        }),
                        (t.prototype.getQuestion = function (e) {
                            return this.flowPanel.getQuestionByName(e);
                        }),
                        (t.prototype.renderQuestion = function (e) {
                            return "<question>" + e.name + "</question>";
                        }),
                        (t.prototype.renderRows = function () {
                            return [this.renderHtml()];
                        }),
                        (t.prototype.getNodeIndex = function () {
                            return this.renderedIndex++;
                        }),
                        (t.prototype.renderHtml = function () {
                            if (!this.flowPanel) return null;
                            var e = "<span>" + this.flowPanel.produceHtml() + "</span>";
                            if (!DOMParser) {
                                var t = { __html: e };
                                return r.createElement("div", { dangerouslySetInnerHTML: t });
                            }
                            var n = new DOMParser().parseFromString(e, "text/xml");
                            return (this.renderedIndex = 0), this.renderParentNode(n);
                        }),
                        (t.prototype.renderNodes = function (e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push(this.renderNode(e[n]));
                            return t;
                        }),
                        (t.prototype.getStyle = function (e) {
                            var t = {};
                            return "b" === e.toLowerCase() && (t.fontWeight = "bold"), "i" === e.toLowerCase() && (t.fontStyle = "italic"), "u" === e.toLowerCase() && (t.textDecoration = "underline"), t;
                        }),
                        (t.prototype.renderParentNode = function (e) {
                            var t = e.nodeName.toLowerCase(),
                                n = this.renderNodes(this.getChildDomNodes(e));
                            return "div" === t ? r.createElement("div", { key: this.getNodeIndex() }, n) : r.createElement("span", { key: this.getNodeIndex(), style: this.getStyle(t) }, n);
                        }),
                        (t.prototype.renderNode = function (e) {
                            if (!this.hasTextChildNodesOnly(e)) return this.renderParentNode(e);
                            var t = e.nodeName.toLowerCase();
                            if ("question" === t) {
                                var n = this.flowPanel.getQuestionByName(e.textContent);
                                if (!n) return null;
                                var o = r.createElement(de, { key: n.name, element: n, creator: this.creator, css: this.css });
                                return r.createElement("span", { key: this.getNodeIndex() }, o);
                            }
                            return "div" === t ? r.createElement("div", { key: this.getNodeIndex() }, e.textContent) : r.createElement("span", { key: this.getNodeIndex(), style: this.getStyle(t) }, e.textContent);
                        }),
                        (t.prototype.getChildDomNodes = function (e) {
                            for (var t = [], n = 0; n < e.childNodes.length; n++) t.push(e.childNodes[n]);
                            return t;
                        }),
                        (t.prototype.hasTextChildNodesOnly = function (e) {
                            for (var t = e.childNodes, n = 0; n < t.length; n++) if ("#text" !== t[n].nodeName.toLowerCase()) return !1;
                            return !0;
                        }),
                        (t.prototype.renderContent = function (e, t) {
                            return r.createElement("f-panel", { style: e }, t);
                        }),
                        t
                    );
                })(ge);
            s.Instance.registerElement("flowpanel", function (e) {
                return r.createElement(Ce, e);
            });
            var Ee = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                qe = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Ee(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.question.cssClasses;
                            return r.createElement(
                                "fieldset",
                                {
                                    role: "presentation",
                                    className: this.question.getSelectBaseRootCss(),
                                    ref: function (t) {
                                        return (e.control = t);
                                    },
                                },
                                r.createElement("legend", { role: "presentation", className: "sv-hidden" }),
                                this.getHeader(),
                                this.question.hasColumns ? this.getColumnedBody(t) : this.getBody(t),
                                this.getFooter(),
                                this.question.isOtherSelected ? this.renderOther() : null
                            );
                        }),
                        (t.prototype.getHeader = function () {
                            var e = this;
                            if (this.question.hasHeadItems)
                                return this.question.headItems.map(function (t, n) {
                                    return e.renderItem("item_h" + n, t, !1, e.question.cssClasses, null);
                                });
                        }),
                        (t.prototype.getFooter = function () {
                            var e = this;
                            if (this.question.hasFootItems)
                                return this.question.footItems.map(function (t, n) {
                                    return e.renderItem("item_f" + n, t, !1, e.question.cssClasses, null);
                                });
                        }),
                        (t.prototype.getColumnedBody = function (e) {
                            return r.createElement("div", { className: e.rootMultiColumn }, this.getColumns(e));
                        }),
                        (t.prototype.getColumns = function (e) {
                            var t = this;
                            return this.question.columns.map(function (n, o) {
                                var i = n.map(function (n, r) {
                                    return t.renderItem("item" + r, n, 0 === o && 0 === r, e, "" + o + r);
                                });
                                return r.createElement("div", { key: "column" + o, className: t.question.getColumnClass(), role: "presentation" }, i);
                            });
                        }),
                        (t.prototype.getBody = function (e) {
                            return this.question.blockedRow ? r.createElement("div", { className: e.rootRow }, this.getItems(e, this.question.dataChoices)) : r.createElement(r.Fragment, null, this.getItems(e, this.question.bodyItems));
                        }),
                        (t.prototype.getItems = function (e, t) {
                            for (var n = [], r = 0; r < t.length; r++) {
                                var o = t[r],
                                    i = "item" + r,
                                    s = this.renderItem(i, o, 0 == r, e, "" + r);
                                n.push(s);
                            }
                            return n;
                        }),
                        Object.defineProperty(t.prototype, "textStyle", {
                            get: function () {
                                return null;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderOther = function () {
                            var e = this.question.cssClasses;
                            return r.createElement("div", { className: "form-group" }, r.createElement(ae, { question: this.question, otherCss: e.other, cssClasses: e, isDisplayMode: this.isDisplayMode }));
                        }),
                        (t.prototype.renderItem = function (e, t, n, r, o) {
                            var i = s.Instance.createElement(this.question.itemComponent, { key: e, question: this.question, cssClasses: r, isDisplayMode: this.isDisplayMode, item: t, textStyle: this.textStyle, index: o, isFirst: n }),
                                u = this.question.survey,
                                l = null;
                            return u && (l = a.wrapItemValue(u, i, this.question, t)), null != l ? l : i;
                        }),
                        t
                    );
                })(h),
                we = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.handleOnChange = function (e) {
                                var t = [].concat(n.question.renderedValue || []),
                                    r = t.indexOf(n.item.value);
                                e.target.checked ? r < 0 && t.push(n.item.value) : r > -1 && t.splice(r, 1), (n.question.renderedValue = t);
                            }),
                            (n.selectAllChanged = function (e) {
                                n.question.toggleSelectAll();
                            }),
                            n
                        );
                    }
                    return (
                        Ee(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "textStyle", {
                            get: function () {
                                return this.props.textStyle;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "isFirst", {
                            get: function () {
                                return this.props.isFirst;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "index", {
                            get: function () {
                                return this.props.index;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "hideCaption", {
                            get: function () {
                                return !0 === this.props.hideCaption;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.shouldComponentUpdate = function (t, n) {
                            return (
                                !!e.prototype.shouldComponentUpdate.call(this, t, n) &&
                                !(this.question.customWidget && !this.question.customWidgetData.isNeedRender && !this.question.customWidget.widgetJson.isDefaultRender && !this.question.customWidget.widgetJson.render)
                            );
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.item && !!this.question;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.question.isItemSelected(this.item);
                            return this.renderCheckbox(e, null);
                        }),
                        Object.defineProperty(t.prototype, "inputStyle", {
                            get: function () {
                                return null;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderCheckbox = function (e, t) {
                            var n = this.question.getItemId(this.item),
                                o = this.hideCaption ? "" : this.renderLocString(this.item.locText),
                                i = this.question.getItemClass(this.item),
                                s = this.question.getLabelClass(this.item),
                                a = this.item == this.question.selectAllItem ? this.selectAllChanged : this.handleOnChange;
                            this.item.locText;
                            return r.createElement(
                                "div",
                                { className: i, role: "presentation" },
                                r.createElement(
                                    "label",
                                    { className: s, "aria-label": this.question.getAriaItemLabel(this.item) },
                                    r.createElement("input", {
                                        className: this.cssClasses.itemControl,
                                        type: "checkbox",
                                        name: this.question.name,
                                        value: "selectall" != this.item.value ? this.item.value : void 0,
                                        id: n,
                                        style: this.inputStyle,
                                        disabled: !this.question.getItemEnabled(this.item),
                                        checked: e,
                                        onChange: a,
                                        "aria-describedby": this.question.ariaDescribedBy,
                                    }),
                                    this.cssClasses.materialDecorator
                                        ? r.createElement(
                                              "span",
                                              { className: this.cssClasses.materialDecorator },
                                              this.question.itemSvgIcon ? r.createElement("svg", { className: this.cssClasses.itemDecorator }, r.createElement("use", { xlinkHref: this.question.itemSvgIcon })) : null
                                          )
                                        : null,
                                    r.createElement("span", { className: this.cssClasses.controlLabel }, o)
                                ),
                                t
                            );
                        }),
                        t
                    );
                })(p);
            s.Instance.registerElement("survey-checkbox-item", function (e) {
                return r.createElement(we, e);
            }),
                Z.Instance.registerQuestion("checkbox", function (e) {
                    return r.createElement(qe, e);
                });
            var Oe = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                _e = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        Oe(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this;
                            return r.createElement(
                                "div",
                                {
                                    className: this.question.rootClass,
                                    ref: function (t) {
                                        return (e.control = t);
                                    },
                                },
                                this.getItems()
                            );
                        }),
                        (t.prototype.getItems = function () {
                            for (
                                var e = this,
                                    t = [],
                                    n = this.question.rankingChoices,
                                    r = function (r) {
                                        var i = n[r];
                                        t.push(
                                            o.renderItem(
                                                i,
                                                r,
                                                function (t) {
                                                    e.question.handleKeydown.call(e.question, t, i);
                                                },
                                                function (t) {
                                                    t.persist(), e.question.handlePointerDown.call(e.question, t, i, t.currentTarget);
                                                },
                                                o.question.cssClasses,
                                                o.question.getItemClass(i),
                                                o.question
                                            )
                                        );
                                    },
                                    o = this,
                                    i = 0;
                                i < n.length;
                                i++
                            )
                                r(i);
                            return t;
                        }),
                        (t.prototype.renderItem = function (e, t, n, o, i, s, u) {
                            var l = e.value + "-" + t + "-item",
                                c = this.renderLocString(e.locText),
                                p = t,
                                h = this.question.getNumberByIndex(t),
                                d = this.question.getItemTabIndex(e),
                                f = r.createElement(Se, { key: l, text: c, index: p, indexText: h, itemTabIndex: d, handleKeydown: n, handlePointerDown: o, cssClasses: i, itemClass: s, question: u }),
                                m = this.question.survey,
                                y = null;
                            return m && (y = a.wrapItemValue(m, f, this.question, e)), null != y ? y : f;
                        }),
                        t
                    );
                })(h),
                Se = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        Oe(t, e),
                        Object.defineProperty(t.prototype, "text", {
                            get: function () {
                                return this.props.text;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "index", {
                            get: function () {
                                return this.props.index;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "indexText", {
                            get: function () {
                                return this.props.indexText;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "handleKeydown", {
                            get: function () {
                                return this.props.handleKeydown;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "handlePointerDown", {
                            get: function () {
                                return this.props.handlePointerDown;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "cssClasses", {
                            get: function () {
                                return this.props.cssClasses;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "itemClass", {
                            get: function () {
                                return this.props.itemClass;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "itemTabIndex", {
                            get: function () {
                                return this.props.itemTabIndex;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            return r.createElement(
                                "div",
                                { tabIndex: this.itemTabIndex, className: this.itemClass, onKeyDown: this.handleKeydown, onPointerDown: this.handlePointerDown, "data-sv-drop-target-ranking-item": this.index },
                                r.createElement(
                                    "div",
                                    { tabIndex: -1, style: { outline: "none" } },
                                    r.createElement("div", { className: this.cssClasses.itemGhostNode }),
                                    r.createElement(
                                        "div",
                                        { className: this.cssClasses.itemContent },
                                        r.createElement(
                                            "div",
                                            { className: this.cssClasses.itemIconContainer },
                                            r.createElement(
                                                "svg",
                                                { width: "10", height: "16", viewBox: "0 0 10 16", className: this.question.getIconHoverCss(), xmlns: "http://www.w3.org/2000/svg" },
                                                r.createElement("path", {
                                                    d:
                                                        "M6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4C6.9 4 6 3.1 6 2ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z",
                                                })
                                            ),
                                            r.createElement(
                                                "svg",
                                                { width: "10", height: "24", viewBox: "0 0 10 24", className: this.question.getIconFocusCss(), xmlns: "http://www.w3.org/2000/svg" },
                                                r.createElement("path", { d: "M10 5L5 0L0 5H4V9H6V5H10Z" }),
                                                r.createElement("path", { d: "M6 19V15H4V19H0L5 24L10 19H6Z" })
                                            )
                                        ),
                                        r.createElement("div", { className: this.cssClasses.itemIndex }, this.indexText),
                                        r.createElement("div", { className: this.cssClasses.controlLabel }, this.text)
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(p);
            Z.Instance.registerQuestion("ranking", function (e) {
                return r.createElement(_e, e);
            });
            var Ie = (function () {
                function e() {}
                return (
                    (e.isValueEmpty = function (t) {
                        if (Array.isArray(t) && 0 === t.length) return !0;
                        if (t && "object" == typeof t && t.constructor === Object) {
                            for (var n in t) if (!e.isValueEmpty(t[n])) return !1;
                            return !0;
                        }
                        return !t && 0 !== t && !1 !== t;
                    }),
                    (e.isArrayContainsEqual = function (t, n) {
                        if (!Array.isArray(t) || !Array.isArray(n)) return !1;
                        if (t.length !== n.length) return !1;
                        for (var r = 0; r < t.length; r++) {
                            for (var o = 0; o < n.length && !e.isTwoValueEquals(t[r], n[o]); o++);
                            if (o === n.length) return !1;
                        }
                        return !0;
                    }),
                    (e.isArraysEqual = function (t, n, r, o, i) {
                        if ((void 0 === r && (r = !1), !Array.isArray(t) || !Array.isArray(n))) return !1;
                        if (t.length !== n.length) return !1;
                        if (r) {
                            for (var s = [], a = [], u = 0; u < t.length; u++) s.push(t[u]), a.push(n[u]);
                            s.sort(), a.sort(), (t = s), (n = a);
                        }
                        for (u = 0; u < t.length; u++) if (!e.isTwoValueEquals(t[u], n[u], r, o, i)) return !1;
                        return !0;
                    }),
                    (e.isTwoValueEquals = function (t, n, r, o, i) {
                        if ((void 0 === r && (r = !1), t === n)) return !0;
                        if (Array.isArray(t) && 0 === t.length && void 0 === n) return !0;
                        if (Array.isArray(n) && 0 === n.length && void 0 === t) return !0;
                        if (null == t && "" === n) return !0;
                        if (null == n && "" === t) return !0;
                        if ((void 0 === i && (i = G.comparator.trimStrings), void 0 === o && (o = G.comparator.caseSensitive), "string" == typeof t && "string" == typeof n))
                            return i && ((t = t.trim()), (n = n.trim())), o || ((t = t.toLowerCase()), (n = n.toLowerCase())), t === n;
                        if (t instanceof Date && n instanceof Date) return t.getTime() == n.getTime();
                        if (e.isConvertibleToNumber(t) && e.isConvertibleToNumber(n) && parseInt(t) === parseInt(n) && parseFloat(t) === parseFloat(n)) return !0;
                        if ((!e.isValueEmpty(t) && e.isValueEmpty(n)) || (e.isValueEmpty(t) && !e.isValueEmpty(n))) return !1;
                        if ((!0 === t || !1 === t) && "string" == typeof n) return t.toString() === n.toLocaleLowerCase();
                        if ((!0 === n || !1 === n) && "string" == typeof t) return n.toString() === t.toLocaleLowerCase();
                        if (!(t instanceof Object || n instanceof Object)) return t == n;
                        if (!(t instanceof Object && n instanceof Object)) return !1;
                        if (t.equals) return t.equals(n);
                        if (t.toJSON && n.toJSON && t.getType && n.getType) return !t.isDiposed && !n.isDiposed && t.getType() === n.getType() && (!t.name || t.name === n.name) && this.isTwoValueEquals(t.toJSON(), n.toJSON(), r, o, i);
                        if (Array.isArray(t) && Array.isArray(n)) return e.isArraysEqual(t, n, r, o, i);
                        if (t.equalsTo && n.equalsTo) return t.equalsTo(n);
                        for (var s in t)
                            if (t.hasOwnProperty(s)) {
                                if (!n.hasOwnProperty(s)) return !1;
                                if (t[s] !== n[s]) {
                                    if ("object" != typeof t[s]) return !1;
                                    if (!this.isTwoValueEquals(t[s], n[s])) return !1;
                                }
                            }
                        for (s in n) if (n.hasOwnProperty(s) && !t.hasOwnProperty(s)) return !1;
                        return !0;
                    }),
                    (e.randomizeArray = function (e) {
                        for (var t = e.length - 1; t > 0; t--) {
                            var n = Math.floor(Math.random() * (t + 1)),
                                r = e[t];
                            (e[t] = e[n]), (e[n] = r);
                        }
                        return e;
                    }),
                    (e.getUnbindValue = function (e) {
                        return e && e instanceof Object ? JSON.parse(JSON.stringify(e)) : e;
                    }),
                    (e.createCopy = function (e) {
                        var t = {};
                        if (!e) return t;
                        for (var n in e) t[n] = e[n];
                        return t;
                    }),
                    (e.isConvertibleToNumber = function (e) {
                        return null != e && !Array.isArray(e) && !isNaN(e);
                    }),
                    (e.isNumber = function (e) {
                        return !("string" == typeof e && e && 0 == e.indexOf("0x") && e.length > 32) && !isNaN(parseFloat(e)) && isFinite(e);
                    }),
                    (e.getMaxLength = function (e, t) {
                        return e < 0 && (e = t), e > 0 ? e : null;
                    }),
                    (e.getNumberByIndex = function (t, n) {
                        if (t < 0) return "";
                        var r = 1,
                            o = "",
                            i = ".",
                            s = !0,
                            a = "A",
                            u = "";
                        if (n) {
                            for (var l = (u = n).length - 1, c = !1, p = 0; p < u.length; p++)
                                if (e.isCharDigit(u[p])) {
                                    c = !0;
                                    break;
                                }
                            for (
                                var h = function () {
                                    return (c && !e.isCharDigit(u[l])) || e.isCharNotLetterAndDigit(u[l]);
                                };
                                l >= 0 && h();

                            )
                                l--;
                            var d = "";
                            for (l < u.length - 1 && ((d = u.substring(l + 1)), (u = u.substring(0, l + 1))), l = u.length - 1; l >= 0 && !h() && (l--, c); );
                            (a = u.substring(l + 1)), (o = u.substring(0, l + 1)), parseInt(a) ? (r = parseInt(a)) : 1 == a.length && (s = !1), (d || o) && (i = d);
                        }
                        return s ? o + (t + r).toString() + i : o + String.fromCharCode(a.charCodeAt(0) + t) + i;
                    }),
                    (e.isCharNotLetterAndDigit = function (t) {
                        return t.toUpperCase() == t.toLowerCase() && !e.isCharDigit(t);
                    }),
                    (e.isCharDigit = function (e) {
                        return e >= "0" && e <= "9";
                    }),
                    (e.countDecimals = function (t) {
                        if (e.isNumber(t) && Math.floor(t) !== t) {
                            var n = t.toString().split(".");
                            return (n.length > 1 && n[1].length) || 0;
                        }
                        return 0;
                    }),
                    (e.correctAfterPlusMinis = function (t, n, r) {
                        var o = e.countDecimals(t),
                            i = e.countDecimals(n);
                        if (o > 0 || i > 0) {
                            var s = Math.max(o, i);
                            r = parseFloat(r.toFixed(s));
                        }
                        return r;
                    }),
                    (e.correctAfterMultiple = function (t, n, r) {
                        var o = e.countDecimals(t) + e.countDecimals(n);
                        return o > 0 && (r = parseFloat(r.toFixed(o))), r;
                    }),
                    (e.convertArrayValueToObject = function (t, n, r) {
                        void 0 === r && (r = void 0);
                        var o = new Array();
                        if (!t || !Array.isArray(t)) return o;
                        for (var i = 0; i < t.length; i++) {
                            var s = void 0;
                            Array.isArray(r) && (s = e.findObjByPropValue(r, n, t[i])), s || ((s = {})[n] = t[i]), o.push(s);
                        }
                        return o;
                    }),
                    (e.findObjByPropValue = function (t, n, r) {
                        for (var o = 0; o < t.length; o++) if (e.isTwoValueEquals(t[o][n], r)) return t[o];
                    }),
                    (e.convertArrayObjectToValue = function (t, n) {
                        var r = new Array();
                        if (!t || !Array.isArray(t)) return r;
                        for (var o = 0; o < t.length; o++) {
                            var i = t[o] ? t[o][n] : void 0;
                            e.isValueEmpty(i) || r.push(i);
                        }
                        return r;
                    }),
                    (e.convertDateToString = function (e) {
                        var t = function (e) {
                            return e < 10 ? "0" + e.toString() : e.toString();
                        };
                        return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate());
                    }),
                    (e.convertValToQuestionVal = function (t) {
                        return t instanceof Date ? e.convertDateToString(t) : t;
                    }),
                    e
                );
            })();
            String.prototype.format ||
                (String.prototype.format = function () {
                    var e = arguments;
                    return this.replace(/{(\d+)}/g, function (t, n) {
                        return void 0 !== e[n] ? e[n] : t;
                    });
                });
            var xe = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Pe = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        xe(t, e),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.updateDomElement();
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.updateDomElement();
                        }),
                        (t.prototype.updateDomElement = function () {
                            if (this.inputElement) {
                                var e = this.inputElement,
                                    t = this.model.filterString;
                                Ie.isTwoValueEquals(t, e.value) || (e.value = this.model.filterString);
                            }
                        }),
                        (t.prototype.onChange = function (e) {
                            e.target === document.activeElement && (this.model.filterString = e.target.value);
                        }),
                        (t.prototype.keyhandler = function (e) {
                            this.model.inputKeyHandler(e);
                        }),
                        (t.prototype.onBlur = function (e) {
                            this.model.onBlur(e);
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.model;
                        }),
                        (t.prototype.render = function () {
                            var e = this;
                            return r.createElement("input", {
                                type: "text",
                                autoComplete: "off",
                                id: this.question.getInputId(),
                                ref: function (t) {
                                    return (e.inputElement = t);
                                },
                                className: this.question.cssClasses.filterStringInput,
                                disabled: this.question.isInputReadOnly,
                                readOnly: !this.model.searchEnabled || void 0,
                                size: this.model.filterString ? void 0 : 1,
                                placeholder: this.model.filterStringPlaceholder,
                                onKeyDown: function (t) {
                                    e.keyhandler(t);
                                },
                                onChange: function (t) {
                                    e.onChange(t);
                                },
                                onBlur: function (t) {
                                    e.onBlur(t);
                                },
                            });
                        }),
                        t
                    );
                })(c);
            Z.Instance.registerQuestion("sv-tagbox-filter", function (e) {
                return r.createElement(Pe, e);
            });
            var Re = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Ne = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.state = { changed: 0 }), n.setupModel(), n;
                    }
                    return (
                        Re(t, e),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.setupModel();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.item && (this.item.locText.onChanged = function () {});
                        }),
                        (t.prototype.setupModel = function () {
                            if (this.item.locText) {
                                var e = this;
                                this.item.locText.onChanged = function () {
                                    e.setState({ changed: e.state.changed + 1 });
                                };
                            }
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.item;
                        }),
                        (t.prototype.renderElement = function () {
                            return r.createElement("option", { value: this.item.value, disabled: !this.item.isEnabled }, this.item.text);
                        }),
                        t
                    );
                })(p),
                Te = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                je = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t.click = function (e) {
                                var n;
                                null === (n = t.question.dropdownListModel) || void 0 === n || n.onClick(e);
                            }),
                            (t.clear = function (e) {
                                var n;
                                null === (n = t.question.dropdownListModel) || void 0 === n || n.onClear(e);
                            }),
                            (t.keyhandler = function (e) {
                                var n;
                                null === (n = t.question.dropdownListModel) || void 0 === n || n.keyHandler(e);
                            }),
                            (t.blur = function (e) {
                                var n;
                                null === (n = t.question.dropdownListModel) || void 0 === n || n.onBlur(e), t.updateInputDomElement();
                            }),
                            t
                        );
                    }
                    return (
                        Te(t, e),
                        (t.prototype.setValueCore = function (e) {
                            this.questionBase.renderedValue = e;
                        }),
                        (t.prototype.getValueCore = function () {
                            return this.questionBase.renderedValue;
                        }),
                        (t.prototype.renderSelect = function (e) {
                            var t,
                                n,
                                o = null;
                            if (this.question.isReadOnly) {
                                var s = this.question.selectedItemLocText ? this.renderLocString(this.question.selectedItemLocText) : "";
                                o = r.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), disabled: !0 }, s, r.createElement("div", null, this.question.readOnlyText));
                            } else
                                this.question.hasOwnProperty("dropdownListModel") || (this.question.dropdownListModel = new i.DropdownListModel(this.question)),
                                    (o = r.createElement(
                                        r.Fragment,
                                        null,
                                        this.renderInput(this.question.dropdownListModel),
                                        r.createElement(x, { model: null === (n = null === (t = this.question) || void 0 === t ? void 0 : t.dropdownListModel) || void 0 === n ? void 0 : n.popupModel })
                                    ));
                            return r.createElement("div", { className: e.selectWrapper }, o);
                        }),
                        (t.prototype.renderValueElement = function (e) {
                            return this.question.showInputFieldComponent
                                ? s.Instance.createElement(this.question.inputFieldComponentName, { item: e.getSelectedAction(), question: this.question })
                                : this.question.showSelectedItemLocText
                                ? this.renderLocString(this.question.selectedItemLocText)
                                : null;
                        }),
                        (t.prototype.renderInput = function (e) {
                            var t = this,
                                n = this.renderValueElement(e);
                            return r.createElement(
                                "div",
                                {
                                    id: this.question.inputId,
                                    className: this.question.getControlClass(),
                                    tabIndex: e.inputReadOnly ? void 0 : 0,
                                    onClick: this.click,
                                    disabled: this.question.isInputReadOnly,
                                    required: this.question.isRequired,
                                    onKeyDown: this.keyhandler,
                                    onBlur: this.blur,
                                    role: this.question.ariaRole,
                                    "aria-required": this.question.ariaRequired,
                                    "aria-label": this.question.ariaLabel,
                                    "aria-invalid": this.question.ariaInvalid,
                                    "aria-describedby": this.question.ariaDescribedBy,
                                },
                                r.createElement(
                                    "div",
                                    { className: this.question.cssClasses.controlValue },
                                    n,
                                    r.createElement("input", {
                                        type: "text",
                                        autoComplete: "off",
                                        id: this.question.getInputId(),
                                        ref: function (e) {
                                            return (t.inputElement = e);
                                        },
                                        className: this.question.cssClasses.filterStringInput,
                                        placeholder: this.question.readOnlyText,
                                        readOnly: !e.searchEnabled || void 0,
                                        tabIndex: e.inputReadOnly ? void 0 : -1,
                                        disabled: this.question.isInputReadOnly,
                                        onChange: function (t) {
                                            !(function (t) {
                                                t.target === document.activeElement && (e.filterString = t.target.value);
                                            })(t);
                                        },
                                        onBlur: this.blur,
                                    })
                                ),
                                this.createClearButton()
                            );
                        }),
                        (t.prototype.createClearButton = function () {
                            if (!this.question.allowClear || !this.question.cssClasses.cleanButtonIconId) return null;
                            var e = { display: this.question.isEmpty() ? "none" : "" };
                            return r.createElement(
                                "div",
                                { className: this.question.cssClasses.cleanButton, style: e, onClick: this.clear },
                                r.createElement(b, { className: this.question.cssClasses.cleanButtonSvg, iconName: this.question.cssClasses.cleanButtonIconId, title: this.question.clearCaption, size: "auto" })
                            );
                        }),
                        (t.prototype.renderOther = function (e) {
                            return r.createElement("div", { className: "form-group" }, r.createElement(ae, { question: this.question, otherCss: e.other, cssClasses: e, isDisplayMode: this.isDisplayMode }));
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.updateInputDomElement();
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.updateInputDomElement();
                        }),
                        (t.prototype.updateInputDomElement = function () {
                            if (this.inputElement) {
                                var e = this.inputElement,
                                    t = this.question.dropdownListModel.filterString;
                                Ie.isTwoValueEquals(t, e.value) || (e.value = this.question.dropdownListModel.filterString);
                            }
                        }),
                        t
                    );
                })(d),
                De = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                ke = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        De(t, e),
                        (t.prototype.renderElement = function () {
                            var e = this.question.cssClasses,
                                t = this.question.isOtherSelected ? this.renderOther(e) : null,
                                n = this.renderSelect(e);
                            return r.createElement("div", { className: this.question.renderCssRoot }, n, t);
                        }),
                        t
                    );
                })(je);
            Z.Instance.registerQuestion("dropdown", function (e) {
                return r.createElement(ke, e);
            });
            var Be = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Me = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Be(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.item && !!this.question;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.renderLocString(this.item.locText);
                            return r.createElement(
                                "div",
                                { className: "sv-tagbox__item" },
                                r.createElement("div", { className: "sv-tagbox__item-text" }, t),
                                r.createElement(
                                    "div",
                                    {
                                        className: this.question.cssClasses.cleanItemButton,
                                        onClick: function (t) {
                                            e.question.dropdownListModel.deselectItem(e.item.value), t.stopPropagation();
                                        },
                                    },
                                    r.createElement(b, { className: this.question.cssClasses.cleanItemButtonSvg, iconName: this.question.cssClasses.cleanItemButtonIconId, size: 16 })
                                )
                            );
                        }),
                        t
                    );
                })(p),
                Le = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Ae = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Le(t, e),
                        (t.prototype.renderItem = function (e, t) {
                            return r.createElement(Me, { key: e, question: this.question, item: t });
                        }),
                        (t.prototype.renderInput = function (e) {
                            var t = this,
                                n = e,
                                o = this.question.selectedChoices.map(function (e, n) {
                                    return t.renderItem("item" + n, e);
                                });
                            return r.createElement(
                                "div",
                                {
                                    id: this.question.inputId,
                                    className: this.question.getControlClass(),
                                    tabIndex: e.inputReadOnly ? void 0 : 0,
                                    onClick: this.click,
                                    disabled: this.question.isInputReadOnly,
                                    required: this.question.isRequired,
                                    onKeyDown: this.keyhandler,
                                    onBlur: this.blur,
                                    role: this.question.ariaRole,
                                    "aria-required": this.question.ariaRequired,
                                    "aria-label": this.question.ariaLabel,
                                    "aria-invalid": this.question.ariaInvalid,
                                    "aria-describedby": this.question.ariaDescribedBy,
                                },
                                r.createElement("div", { className: this.question.cssClasses.controlValue }, o, r.createElement(Pe, { model: n, question: this.question })),
                                this.createClearButton()
                            );
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.question.cssClasses,
                                t = this.question.isOtherSelected ? this.renderOther(e) : null,
                                n = this.renderSelect(e);
                            return r.createElement("div", { className: this.question.renderCssRoot }, n, t);
                        }),
                        t
                    );
                })(je);
            Z.Instance.registerQuestion("tagbox", function (e) {
                return r.createElement(Ae, e);
            });
            var He = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                We = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        He(t, e),
                        (t.prototype.renderSelect = function (e) {
                            var t = this,
                                n = this.isDisplayMode
                                    ? r.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), disabled: !0 }, this.question.readOnlyText)
                                    : r.createElement(
                                          "select",
                                          {
                                              id: this.question.inputId,
                                              className: this.question.getControlClass(),
                                              ref: function (e) {
                                                  return (t.control = e);
                                              },
                                              autoComplete: this.question.autoComplete,
                                              onChange: this.updateValueOnEvent,
                                              onInput: this.updateValueOnEvent,
                                              onClick: function (e) {
                                                  t.question.onClick(e);
                                              },
                                              onKeyUp: function (e) {
                                                  t.question.onKeyUp(e);
                                              },
                                              "aria-required": this.question.ariaRequired,
                                              "aria-label": this.question.ariaLabel,
                                              "aria-invalid": this.question.ariaInvalid,
                                              "aria-describedby": this.question.ariaDescribedBy,
                                              required: this.question.isRequired,
                                          },
                                          this.question.allowClear ? r.createElement("option", { value: "" }, this.question.placeholder) : null,
                                          this.question.visibleChoices.map(function (e, t) {
                                              return r.createElement(Ne, { key: "item" + t, item: e });
                                          })
                                      );
                            return r.createElement("div", { className: e.selectWrapper }, n);
                        }),
                        t
                    );
                })(ke);
            Z.Instance.registerQuestion("sv-dropdown-select", function (e) {
                return r.createElement(We, e);
            }),
                i.RendererFactory.Instance.registerRenderer("dropdown", "select", "sv-dropdown-select");
            var Fe = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Ve = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.state = { rowsChanged: 0 }), n;
                    }
                    return (
                        Fe(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            if ((e.prototype.componentDidMount.call(this), this.question)) {
                                var t = this;
                                this.question.visibleRowsChangedCallback = function () {
                                    t.setState({ rowsChanged: t.state.rowsChanged + 1 });
                                };
                            }
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), this.question && (this.question.visibleRowsChangedCallback = null);
                        }),
                        (t.prototype.renderElement = function () {
                            for (var e = this, t = this.question.cssClasses, n = this.question.hasRows ? r.createElement("td", null) : null, o = [], i = 0; i < this.question.visibleColumns.length; i++) {
                                var s = this.question.visibleColumns[i],
                                    a = "column" + i,
                                    u = this.renderLocString(s.locText);
                                o.push(r.createElement("th", { className: this.question.cssClasses.headerCell, key: a }, this.wrapCell({ column: s }, u, "column-header")));
                            }
                            var l = [],
                                c = this.question.visibleRows;
                            for (i = 0; i < c.length; i++) {
                                var p = c[i];
                                a = "row-" + p.name + "-" + i;
                                l.push(r.createElement(Qe, { key: a, question: this.question, cssClasses: t, isDisplayMode: this.isDisplayMode, row: p, isFirst: 0 == i }));
                            }
                            var h = this.question.showHeader ? r.createElement("thead", null, r.createElement("tr", null, n, o)) : null;
                            return r.createElement(
                                "div",
                                {
                                    className: t.tableWrapper,
                                    ref: function (t) {
                                        return (e.control = t);
                                    },
                                },
                                r.createElement(
                                    "fieldset",
                                    null,
                                    r.createElement("legend", { "aria-label": this.question.locTitle.renderedHtml }),
                                    r.createElement("table", { className: this.question.getTableCss() }, h, r.createElement("tbody", null, l))
                                )
                            );
                        }),
                        t
                    );
                })(h),
                Qe = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnChange = n.handleOnChange.bind(n)), n;
                    }
                    return (
                        Fe(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "row", {
                            get: function () {
                                return this.props.row;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.handleOnChange = function (e) {
                            (this.row.value = e.target.value), this.setState({ value: this.row.value });
                        }),
                        (t.prototype.wrapCell = function (e, t, n) {
                            if (!n) return t;
                            var r,
                                o = this.question.survey;
                            return o && (r = a.wrapMatrixCell(o, t, e, n)), null != r ? r : t;
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.row;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = null;
                            if (this.question.hasRows) {
                                var t = this.renderLocString(this.row.locText);
                                e = r.createElement("td", { className: this.question.cssClasses.rowTextCell }, this.wrapCell({ row: this.row }, t, "row-header"));
                            }
                            var n = this.generateTds();
                            return r.createElement("tr", { className: this.row.rowClasses || void 0 }, e, n);
                        }),
                        (t.prototype.generateTds = function () {
                            for (var e = this, t = [], n = this.row, o = 0; o < this.question.visibleColumns.length; o++) {
                                var i = null,
                                    s = this.question.visibleColumns[o],
                                    a = "value" + o,
                                    u = n.value == s.value,
                                    l = this.question.getItemClass(n, s),
                                    c = this.question.inputId + "_" + n.name + "_" + o;
                                if (this.question.hasCellText) {
                                    var p = this.question.isInputReadOnly
                                        ? null
                                        : function (t) {
                                              return function () {
                                                  return e.cellClick(n, t);
                                              };
                                          };
                                    i = r.createElement("td", { key: a, className: l, onClick: p ? p(s) : null }, this.renderLocString(this.question.getCellDisplayLocText(n.name, s)));
                                } else
                                    i = r.createElement(
                                        "td",
                                        { key: a, "data-responsive-title": s.locText.renderedHtml, className: this.question.cssClasses.cell },
                                        r.createElement(
                                            "label",
                                            { className: l },
                                            r.createElement("input", {
                                                id: c,
                                                type: "radio",
                                                className: this.cssClasses.itemValue,
                                                name: n.fullName,
                                                value: s.value,
                                                disabled: this.isDisplayMode,
                                                checked: u,
                                                onChange: this.handleOnChange,
                                                "aria-required": this.question.ariaRequired,
                                                "aria-label": s.locText.renderedHtml,
                                                "aria-invalid": this.question.ariaInvalid,
                                                "aria-describedby": this.question.ariaDescribedBy,
                                            }),
                                            r.createElement(
                                                "span",
                                                { className: this.question.cssClasses.materialDecorator },
                                                this.question.itemSvgIcon ? r.createElement("svg", { className: this.cssClasses.itemDecorator }, r.createElement("use", { xlinkHref: this.question.itemSvgIcon })) : null
                                            ),
                                            r.createElement("span", { style: this.question.isMobile ? void 0 : { display: "none" }, className: this.question.cssClasses.cellResponsiveTitle }, this.renderLocString(s.locText))
                                        )
                                    );
                                t.push(i);
                            }
                            return t;
                        }),
                        (t.prototype.cellClick = function (e, t) {
                            (e.value = t.value), this.setState({ value: this.row.value });
                        }),
                        t
                    );
                })(p);
            Z.Instance.registerQuestion("matrix", function (e) {
                return r.createElement(Ve, e);
            });
            var Ue = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                ze = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Ue(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            this.reactOnStrChanged();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.question.locHtml.onChanged = function () {};
                        }),
                        (t.prototype.componentDidUpdate = function (e, t) {
                            this.reactOnStrChanged();
                        }),
                        (t.prototype.reactOnStrChanged = function () {
                            var e = this;
                            this.question.locHtml.onChanged = function () {
                                e.setState({ changed: e.state && e.state.changed ? e.state.changed + 1 : 1 });
                            };
                        }),
                        (t.prototype.canRender = function () {
                            return e.prototype.canRender.call(this) && !!this.question.html;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = { __html: this.question.locHtml.renderedHtml };
                            return r.createElement("div", { className: this.question.renderCssRoot, dangerouslySetInnerHTML: e });
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("html", function (e) {
                return r.createElement(ze, e);
            });
            var Ke = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Je = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Ke(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e,
                                t = this,
                                n = this.renderPreview(),
                                o = this.renderFileDecorator(),
                                i = this.renderClearButton(this.question.showRemoveButton),
                                s = this.renderClearButton(this.question.showRemoveButtonBottom),
                                a = this.question.mobileFileNavigatorVisible ? r.createElement(D, { model: this.question.mobileFileNavigator }) : null;
                            return (
                                (e = this.isDisplayMode
                                    ? r.createElement("input", {
                                          type: "file",
                                          disabled: this.isDisplayMode,
                                          className: this.isDisplayMode ? this.question.getReadOnlyFileCss() : this.question.cssClasses.fileInput,
                                          id: this.question.inputId,
                                          ref: function (e) {
                                              return (t.control = e);
                                          },
                                          style: this.isDisplayMode ? { color: "transparent" } : {},
                                          onChange: this.isDisplayMode ? null : this.question.doChange,
                                          multiple: this.question.allowMultiple,
                                          placeholder: this.question.title,
                                          accept: this.question.acceptedTypes,
                                      })
                                    : r.createElement("input", {
                                          type: "file",
                                          disabled: this.isDisplayMode,
                                          className: this.isDisplayMode ? this.question.getReadOnlyFileCss() : this.question.cssClasses.fileInput,
                                          id: this.question.inputId,
                                          ref: function (e) {
                                              return (t.control = e);
                                          },
                                          style: this.isDisplayMode ? { color: "transparent" } : {},
                                          onChange: this.isDisplayMode ? null : this.question.doChange,
                                          "aria-required": this.question.ariaRequired,
                                          "aria-label": this.question.ariaLabel,
                                          "aria-invalid": this.question.ariaInvalid,
                                          "aria-describedby": this.question.ariaDescribedBy,
                                          multiple: this.question.allowMultiple,
                                          title: this.question.inputTitle,
                                          accept: this.question.acceptedTypes,
                                      })),
                                r.createElement(
                                    "div",
                                    { className: this.question.fileRootCss },
                                    e,
                                    r.createElement(
                                        "div",
                                        { className: this.question.cssClasses.dragArea, onDrop: this.question.onDrop, onDragOver: this.question.onDragOver, onDragLeave: this.question.onDragLeave, onDragEnter: this.question.onDragEnter },
                                        o,
                                        i,
                                        n,
                                        s,
                                        a
                                    )
                                )
                            );
                        }),
                        (t.prototype.renderFileDecorator = function () {
                            this.question.cssClasses;
                            var e,
                                t = null;
                            return (
                                (e = r.createElement(
                                    "label",
                                    { role: "button", className: this.question.getChooseFileCss(), htmlFor: this.question.inputId, "aria-label": this.question.chooseButtonCaption },
                                    r.createElement("span", null, this.question.chooseButtonCaption),
                                    this.question.cssClasses.chooseFileIconId ? r.createElement(b, { title: this.question.chooseButtonCaption, iconName: this.question.cssClasses.chooseFileIconId, size: "auto" }) : null
                                )),
                                this.question.isEmpty() && (t = r.createElement("span", { className: this.question.cssClasses.noFileChosen }, this.question.noFileChosenCaption)),
                                r.createElement(
                                    "div",
                                    { className: this.question.getFileDecoratorCss() },
                                    r.createElement("span", { className: this.question.cssClasses.dragAreaPlaceholder }, this.question.dragAreaPlaceholder),
                                    r.createElement("div", { className: this.question.cssClasses.wrapper }, e, t)
                                )
                            );
                        }),
                        (t.prototype.renderClearButton = function (e) {
                            return e
                                ? r.createElement(
                                      "button",
                                      { type: "button", onClick: this.question.doClean, className: e },
                                      r.createElement("span", null, this.question.clearButtonCaption),
                                      this.question.cssClasses.removeButtonIconId ? r.createElement(b, { iconName: this.question.cssClasses.removeButtonIconId, size: "auto", title: this.question.clearButtonCaption }) : null
                                  )
                                : null;
                        }),
                        (t.prototype.renderFileSign = function (e, t) {
                            var n = this;
                            return e && t.name
                                ? r.createElement(
                                      "div",
                                      { className: e },
                                      r.createElement(
                                          "a",
                                          {
                                              href: t.content,
                                              onClick: function (e) {
                                                  n.question.doDownloadFile(e, t);
                                              },
                                              title: t.name,
                                              download: t.name,
                                              style: { width: this.question.imageWidth },
                                          },
                                          t.name
                                      )
                                  )
                                : null;
                        }),
                        (t.prototype.renderPreview = function () {
                            var e = this;
                            if (!this.question.previewValue || !this.question.previewValue.length) return null;
                            var t = this.question.previewValue.map(function (t, n) {
                                return t
                                    ? r.createElement(
                                          "span",
                                          { key: e.question.inputId + "_" + n, className: e.question.cssClasses.preview, style: { display: e.question.isPreviewVisible(n) ? void 0 : "none" } },
                                          e.renderFileSign(e.question.cssClasses.fileSign, t),
                                          r.createElement(
                                              "div",
                                              { className: e.question.cssClasses.imageWrapper },
                                              e.question.canPreviewImage(t)
                                                  ? r.createElement("img", { src: t.content, style: { height: e.question.imageHeight, width: e.question.imageWidth }, alt: "File preview" })
                                                  : e.question.cssClasses.defaultImage
                                                  ? r.createElement(b, { iconName: e.question.cssClasses.defaultImageIconId, size: "auto", className: e.question.cssClasses.defaultImage })
                                                  : null,
                                              t.name && !e.question.isReadOnly
                                                  ? r.createElement(
                                                        "div",
                                                        {
                                                            className: e.question.cssClasses.removeFileButton,
                                                            onClick: function () {
                                                                return e.question.doRemoveFile(t);
                                                            },
                                                        },
                                                        r.createElement("span", { className: e.question.cssClasses.removeFile }, e.question.removeFileCaption),
                                                        e.question.cssClasses.removeFileSvgIconId
                                                            ? r.createElement(b, { title: e.question.removeFileCaption, iconName: e.question.cssClasses.removeFileSvgIconId, size: "auto", className: e.question.cssClasses.removeFileSvg })
                                                            : null
                                                    )
                                                  : null
                                          ),
                                          e.renderFileSign(e.question.cssClasses.fileSignBottom, t)
                                      )
                                    : null;
                            });
                            return r.createElement("div", { className: this.question.cssClasses.fileList || void 0 }, t);
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("file", function (e) {
                return r.createElement(Je, e);
            });
            var Ze = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Ge = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Ze(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            for (var e = this.question.cssClasses, t = this.question.getRows(), n = [], o = 0; o < t.length; o++) n.push(this.renderRow(o, t[o], e));
                            return r.createElement("table", { className: e.root }, r.createElement("tbody", null, n));
                        }),
                        (t.prototype.renderRow = function (e, t, n) {
                            for (var o = "item" + e, i = [], s = 0; s < t.length; s++) {
                                var a = t[s];
                                i.push(r.createElement("td", { key: "item" + s, className: this.question.cssClasses.cell }, r.createElement(Xe, { question: this.question, item: a, creator: this.creator, cssClasses: n })));
                            }
                            return r.createElement("tr", { key: o, className: n.row }, i);
                        }),
                        t
                    );
                })(h),
                Xe = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        Ze(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElements = function () {
                            return [this.item, this.item.editor];
                        }),
                        Object.defineProperty(t.prototype, "creator", {
                            get: function () {
                                return this.props.creator;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.item,
                                t = this.cssClasses;
                            return r.createElement(
                                "label",
                                { className: this.question.getItemLabelCss(e) },
                                r.createElement("span", { className: t.itemTitle }, r.createElement(B, { element: e.editor, cssClasses: e.editor.cssClasses })),
                                r.createElement($e, { cssClasses: t, itemCss: this.question.getItemCss(), question: e.editor, creator: this.creator }),
                                this.renderItemTooltipError(e, t)
                            );
                        }),
                        (t.prototype.renderItemTooltipError = function (e, t) {
                            return this.item.editor.isErrorsModeTooltip ? r.createElement(fe, { element: e.editor, cssClasses: t, creator: this.creator, location: "tooltip", id: e.editor.id + "_errors" }) : null;
                        }),
                        t
                    );
                })(p),
                $e = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        Ze(t, e),
                        (t.prototype.renderElement = function () {
                            return r.createElement("div", { className: this.itemCss }, this.renderContent());
                        }),
                        t
                    );
                })(me);
            Z.Instance.registerQuestion("multipletext", function (e) {
                return r.createElement(Ge, e);
            });
            var Ye = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                et = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Ye(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.question.cssClasses,
                                n = null;
                            return (
                                this.question.showClearButtonInContent &&
                                    (n = r.createElement(
                                        "div",
                                        null,
                                        r.createElement("input", {
                                            type: "button",
                                            className: this.question.cssClasses.clearButton,
                                            onClick: function () {
                                                return e.question.clearValue();
                                            },
                                            value: this.question.clearButtonCaption,
                                        })
                                    )),
                                r.createElement(
                                    "fieldset",
                                    {
                                        className: this.question.getSelectBaseRootCss(),
                                        role: "presentation",
                                        ref: function (t) {
                                            return (e.control = t);
                                        },
                                    },
                                    this.question.hasColumns ? this.getColumnedBody(t) : this.getBody(t),
                                    this.getFooter(),
                                    this.question.isOtherSelected ? this.renderOther(t) : null,
                                    n
                                )
                            );
                        }),
                        (t.prototype.getFooter = function () {
                            var e = this;
                            if (this.question.hasFootItems)
                                return this.question.footItems.map(function (t, n) {
                                    return e.renderItem("item_f" + n, t, !1, e.question.cssClasses, null);
                                });
                        }),
                        (t.prototype.getColumnedBody = function (e) {
                            return r.createElement("div", { className: e.rootMultiColumn }, this.getColumns(e));
                        }),
                        (t.prototype.getColumns = function (e) {
                            var t = this,
                                n = this.getStateValue();
                            return this.question.columns.map(function (o, i) {
                                var s = o.map(function (r, o) {
                                    return t.renderItem("item" + i + o, r, n, e, "" + i + o);
                                });
                                return r.createElement("div", { key: "column" + i, className: t.question.getColumnClass(), role: "presentation" }, s);
                            });
                        }),
                        (t.prototype.getBody = function (e) {
                            return this.question.blockedRow ? r.createElement("div", { className: e.rootRow }, this.getItems(e, this.question.dataChoices)) : r.createElement(r.Fragment, null, this.getItems(e, this.question.bodyItems));
                        }),
                        (t.prototype.getItems = function (e, t) {
                            for (var n = [], r = this.getStateValue(), o = 0; o < t.length; o++) {
                                var i = t[o],
                                    s = this.renderItem("item" + o, i, r, e, "" + o);
                                n.push(s);
                            }
                            return n;
                        }),
                        Object.defineProperty(t.prototype, "textStyle", {
                            get: function () {
                                return null;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderOther = function (e) {
                            return r.createElement("div", { className: "form-group" }, r.createElement(ae, { question: this.question, otherCss: e.other, cssClasses: e, isDisplayMode: this.isDisplayMode }));
                        }),
                        (t.prototype.renderItem = function (e, t, n, r, o) {
                            var i = s.Instance.createElement(this.question.itemComponent, {
                                    key: e,
                                    question: this.question,
                                    cssClasses: r,
                                    isDisplayMode: this.isDisplayMode,
                                    item: t,
                                    textStyle: this.textStyle,
                                    index: o,
                                    isChecked: n === t.value,
                                }),
                                u = this.question.survey,
                                l = null;
                            return u && (l = a.wrapItemValue(u, i, this.question, t)), null != l ? l : i;
                        }),
                        (t.prototype.getStateValue = function () {
                            return this.question.isEmpty() ? "" : this.question.renderedValue;
                        }),
                        t
                    );
                })(h),
                tt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnChange = n.handleOnChange.bind(n)), n;
                    }
                    return (
                        Ye(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "textStyle", {
                            get: function () {
                                return this.props.textStyle;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "index", {
                            get: function () {
                                return this.props.index;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "isChecked", {
                            get: function () {
                                return this.props.isChecked;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "hideCaption", {
                            get: function () {
                                return !0 === this.props.hideCaption;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.shouldComponentUpdate = function (t, n) {
                            return (
                                !!e.prototype.shouldComponentUpdate.call(this, t, n) &&
                                !(this.question.customWidget && !this.question.customWidgetData.isNeedRender && !this.question.customWidget.widgetJson.isDefaultRender && !this.question.customWidget.widgetJson.render)
                            );
                        }),
                        (t.prototype.handleOnChange = function (e) {
                            this.question.renderedValue = this.item.value;
                        }),
                        (t.prototype.canRender = function () {
                            return !!this.question && !!this.item;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.hideCaption ? "" : this.renderLocString(this.item.locText, this.textStyle),
                                t = this.question.getItemClass(this.item),
                                n = this.question.getLabelClass(this.item),
                                o = (this.item.locText, this.question.getControlLabelClass(this.item));
                            return r.createElement(
                                "div",
                                { className: t, role: "presentation" },
                                r.createElement(
                                    "label",
                                    { className: n, "aria-label": this.question.getAriaItemLabel(this.item) },
                                    r.createElement("input", {
                                        "aria-describedby": this.question.ariaDescribedBy,
                                        className: this.cssClasses.itemControl,
                                        id: this.question.getItemId(this.item),
                                        type: "radio",
                                        name: this.question.questionName,
                                        checked: this.isChecked,
                                        value: this.item.value,
                                        disabled: !this.question.getItemEnabled(this.item),
                                        onChange: this.handleOnChange,
                                    }),
                                    this.cssClasses.materialDecorator
                                        ? r.createElement(
                                              "span",
                                              { className: this.cssClasses.materialDecorator },
                                              this.question.itemSvgIcon ? r.createElement("svg", { className: this.cssClasses.itemDecorator }, r.createElement("use", { xlinkHref: this.question.itemSvgIcon })) : null
                                          )
                                        : null,
                                    r.createElement("span", { className: o }, e)
                                )
                            );
                        }),
                        t
                    );
                })(p);
            s.Instance.registerElement("survey-radiogroup-item", function (e) {
                return r.createElement(tt, e);
            }),
                Z.Instance.registerQuestion("radiogroup", function (e) {
                    return r.createElement(et, e);
                });
            var nt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                rt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n._isWaitingForEnter = !1), n;
                    }
                    return (
                        nt(t, e),
                        (t.prototype.renderInput = function () {
                            var e = this,
                                t = this.question.getControlClass(),
                                n = null,
                                o = null,
                                i = null;
                            this.question.isInputTextUpdate
                                ? ((n = function (t) {
                                      return (e._isWaitingForEnter = 229 === t.keyCode);
                                  }),
                                  (o = function (t) {
                                      (e._isWaitingForEnter && 13 !== t.keyCode) || (e.updateValueOnEvent(t), (e._isWaitingForEnter = !1));
                                  }),
                                  (i = function (t) {
                                      t.persist(),
                                          setTimeout(function () {
                                              e.updateValueOnEvent(t);
                                          }, 1);
                                  }))
                                : (o = function (t) {
                                      13 === t.keyCode && e.updateValueOnEvent(t);
                                  });
                            var s = this.question.renderedPlaceholder;
                            return this.question.isReadOnlyRenderDiv()
                                ? r.createElement("div", null, this.question.value)
                                : r.createElement("input", {
                                      id: this.question.inputId,
                                      disabled: this.isDisplayMode,
                                      className: t,
                                      type: this.question.inputType,
                                      ref: function (t) {
                                          return (e.control = t);
                                      },
                                      style: this.question.inputStyle,
                                      maxLength: this.question.getMaxLength(),
                                      min: this.question.renderedMin,
                                      max: this.question.renderedMax,
                                      step: this.question.renderedStep,
                                      size: this.question.inputSize,
                                      placeholder: s,
                                      list: this.question.dataListId,
                                      autoComplete: this.question.autoComplete,
                                      onBlur: this.updateValueOnEvent,
                                      onChange: function (t) {
                                          t.target === document.activeElement ? e.question.isInputTextUpdate && e.updateValueOnEvent(t) : e.updateValueOnEvent(t);
                                      },
                                      onKeyUp: o,
                                      onKeyDown: n,
                                      onCompositionUpdate: i,
                                      "aria-required": this.question.ariaRequired,
                                      "aria-label": this.question.ariaLabel,
                                      "aria-invalid": this.question.ariaInvalid,
                                      "aria-describedby": this.question.ariaDescribedBy,
                                  });
                        }),
                        (t.prototype.renderElement = function () {
                            return this.question.dataListId ? r.createElement("div", null, this.renderInput(), this.renderDataList()) : this.renderInput();
                        }),
                        (t.prototype.renderDataList = function () {
                            if (!this.question.dataListId) return null;
                            var e = this.question.dataList;
                            if (0 == e.length) return null;
                            for (var t = [], n = 0; n < e.length; n++) t.push(r.createElement("option", { key: "item" + n, value: e[n] }));
                            return r.createElement("datalist", { id: this.question.dataListId }, t);
                        }),
                        t
                    );
                })(d);
            Z.Instance.registerQuestion("text", function (e) {
                return r.createElement(rt, e);
            });
            var ot = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                it = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.handleOnChange = n.handleOnChange.bind(n)),
                            (n.handleOnClick = n.handleOnClick.bind(n)),
                            (n.handleOnLabelClick = n.handleOnLabelClick.bind(n)),
                            (n.handleOnSwitchClick = n.handleOnSwitchClick.bind(n)),
                            (n.handleOnKeyDown = n.handleOnKeyDown.bind(n)),
                            (n.checkRef = r.createRef()),
                            n
                        );
                    }
                    return (
                        ot(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.question;
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.doCheck = function (e) {
                            this.question.booleanValue = e;
                        }),
                        (t.prototype.handleOnChange = function (e) {
                            this.doCheck(e.target.checked);
                        }),
                        (t.prototype.handleOnClick = function (e) {
                            this.question.onLabelClick(e, !0);
                        }),
                        (t.prototype.handleOnSwitchClick = function (e) {
                            this.question.onSwitchClickModel(e.nativeEvent);
                        }),
                        (t.prototype.handleOnLabelClick = function (e, t) {
                            this.question.onLabelClick(e, t);
                        }),
                        (t.prototype.handleOnKeyDown = function (e) {
                            this.question.onKeyDownCore(e);
                        }),
                        (t.prototype.updateDomElement = function () {
                            if (this.question) {
                                var t = this.checkRef.current;
                                t && (t.indeterminate = this.question.isIndeterminate), (this.control = t), e.prototype.updateDomElement.call(this);
                            }
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.question.cssClasses,
                                n = this.question.getItemCss();
                            return r.createElement(
                                "div",
                                { className: t.root, onKeyDown: this.handleOnKeyDown },
                                r.createElement(
                                    "label",
                                    { className: n, onClick: this.handleOnClick },
                                    r.createElement("input", {
                                        ref: this.checkRef,
                                        type: "checkbox",
                                        name: this.question.name,
                                        value: null === this.question.booleanValue ? "" : this.question.booleanValue,
                                        id: this.question.inputId,
                                        className: t.control,
                                        disabled: this.isDisplayMode,
                                        checked: this.question.booleanValue || !1,
                                        onChange: this.handleOnChange,
                                        "aria-required": this.question.ariaRequired,
                                        "aria-label": this.question.ariaLabel,
                                        "aria-invalid": this.question.ariaInvalid,
                                        "aria-describedby": this.question.ariaDescribedBy,
                                    }),
                                    r.createElement(
                                        "span",
                                        {
                                            className: this.question.getLabelCss(!1),
                                            onClick: function (t) {
                                                return e.handleOnLabelClick(t, !1);
                                            },
                                        },
                                        this.renderLocString(this.question.locLabelFalse)
                                    ),
                                    r.createElement(
                                        "div",
                                        { className: t.switch, onClick: this.handleOnSwitchClick },
                                        r.createElement(
                                            "span",
                                            { className: t.slider },
                                            this.question.isDeterminated && t.sliderText ? r.createElement("span", { className: t.sliderText }, this.renderLocString(this.question.getCheckedLabel())) : null
                                        )
                                    ),
                                    r.createElement(
                                        "span",
                                        {
                                            className: this.question.getLabelCss(!0),
                                            onClick: function (t) {
                                                return e.handleOnLabelClick(t, !0);
                                            },
                                        },
                                        this.renderLocString(this.question.locLabelTrue)
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("boolean", function (e) {
                return r.createElement(it, e);
            });
            var st = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                at = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        st(t, e),
                        (t.prototype.renderElement = function () {
                            var e = this.question.cssClasses,
                                t = this.question.getCheckboxItemCss(),
                                n = this.question.canRenderLabelDescription ? c.renderQuestionDescription(this.question) : null;
                            return r.createElement(
                                "div",
                                { className: e.rootCheckbox },
                                r.createElement(
                                    "div",
                                    { className: t },
                                    r.createElement(
                                        "label",
                                        { className: e.checkboxLabel },
                                        r.createElement("input", {
                                            ref: this.checkRef,
                                            type: "checkbox",
                                            name: this.question.name,
                                            value: null === this.question.booleanValue ? "" : this.question.booleanValue,
                                            id: this.question.inputId,
                                            className: e.controlCheckbox,
                                            disabled: this.isDisplayMode,
                                            checked: this.question.booleanValue || !1,
                                            onChange: this.handleOnChange,
                                            "aria-required": this.question.ariaRequired,
                                            "aria-label": this.question.ariaLabel,
                                            "aria-invalid": this.question.ariaInvalid,
                                            "aria-describedby": this.question.ariaDescribedBy,
                                        }),
                                        r.createElement(
                                            "span",
                                            { className: e.checkboxMaterialDecorator },
                                            this.question.svgIcon ? r.createElement("svg", { className: e.checkboxItemDecorator }, r.createElement("use", { xlinkHref: this.question.svgIcon })) : null,
                                            r.createElement("span", { className: "check" })
                                        ),
                                        this.question.isLabelRendered && r.createElement("span", { className: e.checkboxControlLabel }, r.createElement(L, { element: this.question, cssClasses: this.question.cssClasses }))
                                    ),
                                    n
                                )
                            );
                        }),
                        t
                    );
                })(it);
            Z.Instance.registerQuestion("sv-boolean-checkbox", function (e) {
                return r.createElement(at, e);
            }),
                i.RendererFactory.Instance.registerRenderer("boolean", "checkbox", "sv-boolean-checkbox");
            var ut = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                lt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.handleOnChange = function (e) {
                                n.question.value = e.nativeEvent.target.value;
                            }),
                            n
                        );
                    }
                    return (
                        ut(t, e),
                        (t.prototype.renderRadioItem = function (e, t) {
                            var n = this.question.cssClasses;
                            return r.createElement(
                                "div",
                                { role: "presentation", className: this.question.getRadioItemClass(n, e) },
                                r.createElement(
                                    "label",
                                    { className: n.radioLabel },
                                    r.createElement("input", {
                                        type: "radio",
                                        name: this.question.name,
                                        value: e,
                                        "aria-describedby": this.question.ariaDescribedBy,
                                        checked: e === this.question.value,
                                        disabled: this.question.isInputReadOnly,
                                        className: n.itemRadioControl,
                                        onChange: this.handleOnChange,
                                    }),
                                    this.question.cssClasses.materialRadioDecorator
                                        ? r.createElement(
                                              "span",
                                              { className: n.materialRadioDecorator },
                                              this.question.itemSvgIcon ? r.createElement("svg", { className: n.itemRadioDecorator }, r.createElement("use", { xlinkHref: this.question.itemSvgIcon })) : null
                                          )
                                        : null,
                                    r.createElement("span", { className: n.radioControlLabel }, this.renderLocString(t))
                                )
                            );
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.question.cssClasses;
                            return r.createElement(
                                "div",
                                { className: e.rootRadio },
                                r.createElement("fieldset", { role: "presentation", className: e.radioFieldset }, this.renderRadioItem(!1, this.question.locLabelFalse), this.renderRadioItem(!0, this.question.locLabelTrue))
                            );
                        }),
                        t
                    );
                })(it);
            Z.Instance.registerQuestion("sv-boolean-radio", function (e) {
                return r.createElement(lt, e);
            }),
                i.RendererFactory.Instance.registerRenderer("boolean", "radio", "sv-boolean-radio");
            var ct = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                pt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.state = { value: n.question.value }), n;
                    }
                    return (
                        ct(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            return r.createElement("div", null);
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("empty", function (e) {
                return r.createElement(pt, e);
            });
            var ht = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                dt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.onPointerDownHandler = function (e) {
                                n.parentMatrix.onPointerDown(e.nativeEvent, n.model.row);
                            }),
                            n
                        );
                    }
                    return (
                        ht(t, e),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "parentMatrix", {
                            get: function () {
                                return this.props.parentMatrix;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.model;
                        }),
                        (t.prototype.render = function () {
                            var e = this,
                                t = this.model;
                            return o.a.createElement(
                                "tr",
                                {
                                    className: t.className,
                                    "data-sv-drop-target-matrix-row": t.row && t.row.id,
                                    onPointerDown: function (t) {
                                        return e.onPointerDownHandler(t);
                                    },
                                },
                                this.props.children
                            );
                        }),
                        t
                    );
                })(c);
            s.Instance.registerElement("sv-matrix-row", function (e) {
                return o.a.createElement(dt, e);
            });
            var ft = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                mt = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        ft(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.item.data.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            return this.question.iconDragElement
                                ? o.a.createElement("svg", { className: this.question.cssClasses.dragElementDecorator }, o.a.createElement("use", { xlinkHref: this.question.iconDragElement }))
                                : o.a.createElement("span", { className: this.question.cssClasses.iconDrag });
                        }),
                        t
                    );
                })(p);
            s.Instance.registerElement("sv-matrix-drag-drop-icon", function (e) {
                return o.a.createElement(mt, e);
            });
            var yt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                vt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.question.renderedTable;
                        return (n.state = n.getState()), n;
                    }
                    return (
                        yt(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getState = function (e) {
                            return void 0 === e && (e = null), { rowCounter: e ? e.rowCounter + 1 : 0 };
                        }),
                        (t.prototype.updateStateOnCallback = function () {
                            this.isRendering || this.setState(this.getState(this.state));
                        }),
                        (t.prototype.componentDidMount = function () {
                            var t = this;
                            e.prototype.componentDidMount.call(this),
                                (this.question.visibleRowsChangedCallback = function () {
                                    t.updateStateOnCallback();
                                }),
                                (this.question.onRenderedTableResetCallback = function () {
                                    (t.question.renderedTable.renderedRowsChangedCallback = function () {
                                        t.updateStateOnCallback();
                                    }),
                                        t.updateStateOnCallback();
                                }),
                                (this.question.renderedTable.renderedRowsChangedCallback = function () {
                                    t.updateStateOnCallback();
                                });
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this),
                                (this.question.visibleRowsChangedCallback = void 0),
                                (this.question.onRenderedTableResetCallback = void 0),
                                (this.question.renderedTable.renderedRowsChangedCallback = void 0);
                        }),
                        (t.prototype.renderElement = function () {
                            return this.renderTableDiv();
                        }),
                        (t.prototype.renderTableDiv = function () {
                            var e = this,
                                t = this.renderHeader(),
                                n = this.renderFooter(),
                                o = this.renderRows(),
                                i = this.question.showHorizontalScroll ? { overflowX: "scroll" } : {};
                            return r.createElement(
                                "div",
                                {
                                    style: i,
                                    ref: function (t) {
                                        return (e.control = t);
                                    },
                                },
                                r.createElement("table", { className: this.question.getTableCss() }, t, o, n)
                            );
                        }),
                        (t.prototype.renderHeader = function () {
                            var e = this.question.renderedTable;
                            if (!e.showHeader) return null;
                            for (var t = [], n = e.headerRow.cells, o = 0; o < n.length; o++) {
                                var i = n[o],
                                    s = "column" + o,
                                    a = {};
                                i.width && (a.width = i.width), i.minWidth && (a.minWidth = i.minWidth);
                                var u = this.renderCellContent(i, "column-header", {}),
                                    l = i.hasTitle ? r.createElement("th", { className: i.className, key: s, style: a }, " ", u, " ") : r.createElement("td", { className: i.className, key: s, style: a });
                                t.push(l);
                            }
                            return r.createElement("thead", null, r.createElement("tr", null, t));
                        }),
                        (t.prototype.renderFooter = function () {
                            var e = this.question.renderedTable;
                            if (!e.showFooter) return null;
                            var t = this.renderRow("footer", e.footerRow, this.question.cssClasses);
                            return r.createElement("tfoot", null, t);
                        }),
                        (t.prototype.renderRows = function () {
                            for (var e = this.question.cssClasses, t = [], n = this.question.renderedTable.rows, o = 0; o < n.length; o++) t.push(this.renderRow(n[o].id, n[o], e));
                            return r.createElement("tbody", null, t);
                        }),
                        (t.prototype.renderRow = function (e, t, n) {
                            for (var o = [], i = t.cells, s = 0; s < i.length; s++) o.push(this.renderCell(i[s], s, n));
                            var a = "row" + e;
                            return r.createElement(r.Fragment, { key: a }, r.createElement(dt, { model: t, parentMatrix: this.question }, o));
                        }),
                        (t.prototype.renderCell = function (e, t, n) {
                            var o = "cell" + t;
                            if (e.hasQuestion) return r.createElement(Ct, { key: o, cssClasses: n, cell: e, creator: this.creator });
                            var i = e.hasTitle ? "row-header" : "",
                                s = this.renderCellContent(e, i, n),
                                a = null;
                            return (e.width || e.minWidth) && ((a = {}), e.width && (a.width = e.width), e.minWidth && (a.minWidth = e.minWidth)), r.createElement("td", { className: e.className, key: o, style: a, colSpan: e.colSpans }, s);
                        }),
                        (t.prototype.renderCellContent = function (e, t, n) {
                            var o = null,
                                i = null;
                            if (((e.width || e.minWidth) && ((i = {}), e.width && (i.width = e.width), e.minWidth && (i.minWidth = e.minWidth)), e.hasTitle)) {
                                t = "row-header";
                                var a = this.renderLocString(e.locTitle),
                                    u = e.column ? r.createElement(bt, { column: e.column, question: this.question }) : null;
                                o = r.createElement(r.Fragment, null, a, u);
                            }
                            if (
                                (e.isDragHandlerCell && (o = r.createElement(r.Fragment, null, r.createElement(mt, { item: { data: { row: e.row, question: this.question } } }))),
                                e.isActionsCell && (o = s.Instance.createElement("sv-matrixdynamic-actions-cell", { question: this.question, cssClasses: n, cell: e, model: e.item.getData() })),
                                e.hasPanel && (o = r.createElement(ge, { key: e.panel.id, element: e.panel, survey: this.question.survey, cssClasses: n, isDisplayMode: this.isDisplayMode, creator: this.creator })),
                                !o)
                            )
                                return null;
                            var l = r.createElement(r.Fragment, null, o);
                            return this.wrapCell(e, l, t);
                        }),
                        t
                    );
                })(h),
                gt = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        yt(t, e),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            return r.createElement(D, { model: this.model, handleClick: !1 });
                        }),
                        t
                    );
                })(p);
            s.Instance.registerElement("sv-matrixdynamic-actions-cell", function (e) {
                return r.createElement(gt, e);
            });
            var bt = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        yt(t, e),
                        Object.defineProperty(t.prototype, "column", {
                            get: function () {
                                return this.props.column;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.column;
                        }),
                        (t.prototype.renderElement = function () {
                            return this.column.isRenderedRequired ? r.createElement(r.Fragment, null, r.createElement("span", { className: this.question.cssClasses.cellRequiredText }, this.column.requiredText)) : null;
                        }),
                        t
                    );
                })(p),
                Ct = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        yt(t, e),
                        Object.defineProperty(t.prototype, "cell", {
                            get: function () {
                                return this.props.cell;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "itemCss", {
                            get: function () {
                                return this.cell ? this.cell.className : "";
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getQuestion = function () {
                            var t = e.prototype.getQuestion.call(this);
                            return t || (this.cell ? this.cell.question : null);
                        }),
                        (t.prototype.doAfterRender = function () {
                            var e = this.cellRef.current;
                            if (e && this.cell && this.question && this.question.survey && "r" !== e.getAttribute("data-rendered")) {
                                e.setAttribute("data-rendered", "r");
                                var t = { cell: this.cell, cellQuestion: this.question, htmlElement: e, row: this.cell.row, column: this.cell.cell.column };
                                this.question.survey.matrixAfterCellRender(this.question, t);
                            }
                        }),
                        (t.prototype.getShowErrors = function () {
                            return this.question.isVisible && (!this.cell.isChoice || this.cell.isFirstChoice);
                        }),
                        (t.prototype.getCellStyle = function () {
                            var t = e.prototype.getCellStyle.call(this);
                            return (this.cell.width || this.cell.minWidth) && (t || (t = {}), this.cell.width && (t.width = this.cell.width), this.cell.minWidth && (t.minWidth = this.cell.minWidth)), t;
                        }),
                        (t.prototype.getHeaderText = function () {
                            return this.cell.headers;
                        }),
                        (t.prototype.renderQuestion = function () {
                            return this.cell.isChoice
                                ? this.cell.isOtherChoice
                                    ? this.renderOtherComment()
                                    : this.cell.isCheckbox
                                    ? this.renderCellCheckboxButton()
                                    : this.renderCellRadiogroupButton()
                                : de.renderQuestionBody(this.creator, this.question);
                        }),
                        (t.prototype.renderOtherComment = function () {
                            var e = this.cell.question,
                                t = e.cssClasses || {};
                            return r.createElement(ae, { question: e, cssClasses: t, otherCss: t.other, isDisplayMode: e.isInputReadOnly });
                        }),
                        (t.prototype.renderCellCheckboxButton = function () {
                            var e = this.cell.question.id + "item" + this.cell.choiceIndex;
                            return r.createElement(we, {
                                key: e,
                                question: this.cell.question,
                                cssClasses: this.cell.question.cssClasses,
                                isDisplayMode: this.cell.question.isInputReadOnly,
                                item: this.cell.item,
                                isFirst: this.cell.isFirstChoice,
                                index: this.cell.choiceIndex.toString(),
                                hideCaption: !0,
                            });
                        }),
                        (t.prototype.renderCellRadiogroupButton = function () {
                            var e = this.cell.question.id + "item" + this.cell.choiceIndex;
                            return r.createElement(tt, {
                                key: e,
                                question: this.cell.question,
                                cssClasses: this.cell.question.cssClasses,
                                isDisplayMode: this.cell.question.isInputReadOnly,
                                item: this.cell.item,
                                index: this.cell.choiceIndex.toString(),
                                isChecked: this.cell.question.value === this.cell.item.value,
                                isDisabled: this.cell.question.isReadOnly || !this.cell.item.isEnabled,
                                hideCaption: !0,
                            });
                        }),
                        t
                    );
                })(ye),
                Et = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                qt = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return Et(t, e), t;
                })(vt);
            Z.Instance.registerQuestion("matrixdropdown", function (e) {
                return r.createElement(qt, e);
            });
            var wt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Ot = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnRowAddClick = n.handleOnRowAddClick.bind(n)), n;
                    }
                    return (
                        wt(t, e),
                        Object.defineProperty(t.prototype, "matrix", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.handleOnRowAddClick = function (e) {
                            this.matrix.addRowUI();
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.question.cssClasses,
                                t = this.question.renderedTable.showTable ? this.renderTableDiv() : this.renderNoRowsContent(e);
                            return r.createElement("div", null, this.renderAddRowButtonOnTop(e), t, this.renderAddRowButtonOnBottom(e));
                        }),
                        (t.prototype.renderAddRowButtonOnTop = function (e) {
                            return this.matrix.renderedTable.showAddRowOnTop ? this.renderAddRowButton(e) : null;
                        }),
                        (t.prototype.renderAddRowButtonOnBottom = function (e) {
                            return this.matrix.renderedTable.showAddRowOnBottom ? this.renderAddRowButton(e) : null;
                        }),
                        (t.prototype.renderNoRowsContent = function (e) {
                            var t = this.renderLocString(this.matrix.locEmptyRowsText),
                                n = r.createElement("div", { className: e.emptyRowsText }, t),
                                o = this.renderAddRowButton(e, !0);
                            return r.createElement("div", { className: e.emptyRowsSection }, n, o);
                        }),
                        (t.prototype.renderAddRowButton = function (e, t) {
                            return void 0 === t && (t = !1), s.Instance.createElement("sv-matrixdynamic-add-btn", { question: this.question, cssClasses: e, isEmptySection: t });
                        }),
                        t
                    );
                })(vt);
            Z.Instance.registerQuestion("matrixdynamic", function (e) {
                return r.createElement(Ot, e);
            });
            var _t = (function (e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return (n.handleOnRowAddClick = n.handleOnRowAddClick.bind(n)), n;
                }
                return (
                    wt(t, e),
                    Object.defineProperty(t.prototype, "matrix", {
                        get: function () {
                            return this.props.question;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.prototype.handleOnRowAddClick = function (e) {
                        this.matrix.addRowUI();
                    }),
                    (t.prototype.renderElement = function () {
                        var e = this.renderLocString(this.matrix.locAddRowText),
                            t = r.createElement(
                                "button",
                                { className: this.matrix.getAddRowButtonCss(this.props.isEmptySection), type: "button", disabled: this.matrix.isInputReadOnly, onClick: this.matrix.isDesignMode ? void 0 : this.handleOnRowAddClick },
                                e,
                                r.createElement("span", { className: this.props.cssClasses.iconAdd })
                            );
                        return this.props.isEmptySection ? t : r.createElement("div", { className: this.props.cssClasses.footer }, t);
                    }),
                    t
                );
            })(p);
            s.Instance.registerElement("sv-matrixdynamic-add-btn", function (e) {
                return r.createElement(_t, e);
            });
            var St = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                It = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        St(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return (this.props.item && this.props.item.data.question) || this.props.data.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        t
                    );
                })(p),
                xt = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t.handleClick = function (e) {
                                t.question.addPanelUI();
                            }),
                            t
                        );
                    }
                    return (
                        St(t, e),
                        (t.prototype.renderElement = function () {
                            return this.question.canAddPanel
                                ? o.a.createElement(
                                      "button",
                                      { type: "button", className: this.question.getAddButtonCss(), onClick: this.handleClick },
                                      o.a.createElement("span", { className: this.question.cssClasses.buttonAddText }, this.question.panelAddText)
                                  )
                                : null;
                        }),
                        t
                    );
                })(It);
            s.Instance.registerElement("sv-paneldynamic-add-btn", function (e) {
                return o.a.createElement(xt, e);
            });
            var Pt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Rt = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t.handleClick = function (e) {
                                t.question.goToNextPanel();
                            }),
                            t
                        );
                    }
                    return (
                        Pt(t, e),
                        (t.prototype.renderElement = function () {
                            return o.a.createElement(
                                "div",
                                { title: this.question.panelNextText, onClick: this.handleClick, className: this.question.getNextButtonCss() },
                                o.a.createElement(b, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })
                            );
                        }),
                        t
                    );
                })(It);
            s.Instance.registerElement("sv-paneldynamic-next-btn", function (e) {
                return o.a.createElement(Rt, e);
            });
            var Nt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Tt = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t.handleClick = function (e) {
                                t.question.goToPrevPanel();
                            }),
                            t
                        );
                    }
                    return (
                        Nt(t, e),
                        (t.prototype.renderElement = function () {
                            return o.a.createElement(
                                "div",
                                { title: this.question.panelPrevText, onClick: this.handleClick, className: this.question.getPrevButtonCss() },
                                o.a.createElement(b, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })
                            );
                        }),
                        t
                    );
                })(It);
            s.Instance.registerElement("sv-paneldynamic-prev-btn", function (e) {
                return o.a.createElement(Tt, e);
            });
            var jt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Dt = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        jt(t, e),
                        (t.prototype.renderElement = function () {
                            return o.a.createElement("div", { className: this.question.cssClasses.progressText }, this.question.progressText);
                        }),
                        t
                    );
                })(It);
            s.Instance.registerElement("sv-paneldynamic-progress-text", function (e) {
                return o.a.createElement(Dt, e);
            });
            var kt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Bt = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        kt(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.setState({ panelCounter: 0 });
                            var t = this;
                            (this.question.panelCountChangedCallback = function () {
                                t.updateQuestionRendering();
                            }),
                                (this.question.currentIndexChangedCallback = function () {
                                    t.updateQuestionRendering();
                                }),
                                (this.question.renderModeChangedCallback = function () {
                                    t.updateQuestionRendering();
                                });
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), (this.question.panelCountChangedCallback = null), (this.question.currentIndexChangedCallback = null), (this.question.renderModeChangedCallback = null);
                        }),
                        (t.prototype.updateQuestionRendering = function () {
                            this.setState({ panelCounter: this.state ? this.state.panelCounter + 1 : 1 });
                        }),
                        (t.prototype.renderElement = function () {
                            var e = [];
                            if (this.question.isRenderModeList)
                                for (var t = 0; t < this.question.panels.length; t++) {
                                    var n = this.question.panels[t];
                                    e.push(r.createElement(Mt, { key: n.id, element: n, question: this.question, index: t, cssClasses: this.question.cssClasses, isDisplayMode: this.isDisplayMode, creator: this.creator }));
                                }
                            else if (null != this.question.currentPanel) {
                                n = this.question.currentPanel;
                                e.push(
                                    r.createElement(Mt, {
                                        key: this.question.currentIndex,
                                        element: n,
                                        question: this.question,
                                        index: this.question.currentIndex,
                                        cssClasses: this.question.cssClasses,
                                        isDisplayMode: this.isDisplayMode,
                                        creator: this.creator,
                                    })
                                );
                            }
                            var o = this.question.isRenderModeList && this.question.showLegacyNavigation ? this.renderAddRowButton() : null,
                                i = this.question.isProgressTopShowing ? this.renderNavigator() : null,
                                s = this.question.isProgressBottomShowing ? this.renderNavigator() : null,
                                a = this.renderNavigatorV2(),
                                u = this.renderPlaceholder();
                            return r.createElement("div", { className: this.question.cssClasses.root }, u, i, e, s, o, a);
                        }),
                        (t.prototype.renderNavigator = function () {
                            if (!this.question.showLegacyNavigation) return this.question.isRangeShowing && this.question.isProgressTopShowing ? this.renderRange() : null;
                            var e = this.question.isRangeShowing ? this.renderRange() : null,
                                t = this.rendrerPrevButton(),
                                n = this.rendrerNextButton(),
                                o = this.renderAddRowButton(),
                                i = this.question.isProgressTopShowing ? this.question.cssClasses.progressTop : this.question.cssClasses.progressBottom;
                            return r.createElement(
                                "div",
                                { className: i },
                                r.createElement("div", { style: { clear: "both" } }, r.createElement("div", { className: this.question.cssClasses.progressContainer }, t, e, n), o, this.renderProgressText())
                            );
                        }),
                        (t.prototype.renderProgressText = function () {
                            return r.createElement(Dt, { data: { question: this.question } });
                        }),
                        (t.prototype.rendrerPrevButton = function () {
                            return r.createElement(Tt, { data: { question: this.question } });
                        }),
                        (t.prototype.rendrerNextButton = function () {
                            return r.createElement(Rt, { data: { question: this.question } });
                        }),
                        (t.prototype.renderRange = function () {
                            return r.createElement(
                                "div",
                                { className: this.question.cssClasses.progress },
                                r.createElement("div", { className: this.question.cssClasses.progressBar, style: { width: this.question.progress }, role: "progressbar" })
                            );
                        }),
                        (t.prototype.renderAddRowButton = function () {
                            return s.Instance.createElement("sv-paneldynamic-add-btn", { data: { question: this.question } });
                        }),
                        (t.prototype.renderNavigatorV2 = function () {
                            if (0 === this.question.panelCount || this.question.showLegacyNavigation) return null;
                            var e = this.question.isRangeShowing && !this.question.isProgressTopShowing ? this.renderRange() : null;
                            return this.question.cssClasses.footer
                                ? r.createElement(
                                      "div",
                                      { className: this.question.cssClasses.footer },
                                      r.createElement("hr", { className: this.question.cssClasses.separator }),
                                      e,
                                      r.createElement("div", { className: this.question.cssClasses.footerButtonsContainer }, r.createElement(D, { model: this.question.footerToolbar }))
                                  )
                                : null;
                        }),
                        (t.prototype.renderPlaceholder = function () {
                            return this.question.getShowNoEntriesPlaceholder()
                                ? r.createElement("div", { className: this.question.cssClasses.noEntriesPlaceholder }, r.createElement("span", null, this.renderLocString(this.question.locNoEntriesText)), this.renderAddRowButton())
                                : null;
                        }),
                        t
                    );
                })(h),
                Mt = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        kt(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "index", {
                            get: function () {
                                return this.props.index;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getSurvey = function () {
                            return this.question ? this.question.survey : null;
                        }),
                        (t.prototype.getCss = function () {
                            var e = this.getSurvey();
                            return e ? e.getCss() : {};
                        }),
                        (t.prototype.render = function () {
                            var t = e.prototype.render.call(this),
                                n = this.renderButton(),
                                o = this.question.isRenderModeList && this.index < this.question.panelCount - 1 ? r.createElement("hr", { className: this.question.cssClasses.separator }) : null;
                            return r.createElement(r.Fragment, null, r.createElement("div", { className: this.question.getPanelWrapperCss() }, t, n), o);
                        }),
                        (t.prototype.renderButton = function () {
                            return !this.question.canRemovePanel || (this.question.isRenderModeList && this.panel.isCollapsed)
                                ? null
                                : s.Instance.createElement("sv-paneldynamic-remove-btn", { data: { question: this.question, index: this.index } });
                        }),
                        t
                    );
                })(ge);
            Z.Instance.registerQuestion("paneldynamic", function (e) {
                return r.createElement(Bt, e);
            });
            var Lt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                At = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Lt(t, e),
                        Object.defineProperty(t.prototype, "isTop", {
                            get: function () {
                                return this.props.isTop;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "progress", {
                            get: function () {
                                return this.survey.progressValue;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "progressText", {
                            get: function () {
                                return this.survey.progressText;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            var e = this.isTop ? {} : { marginTop: "1em" },
                                t = { width: this.progress + "%" };
                            return r.createElement(
                                "div",
                                { className: this.css.progress, style: e },
                                r.createElement(
                                    "div",
                                    { style: t, className: this.css.progressBar, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100 },
                                    r.createElement("span", { className: i.SurveyProgressModel.getProgressTextInBarCss(this.css) }, this.progressText)
                                ),
                                r.createElement("span", { className: i.SurveyProgressModel.getProgressTextUnderBarCss(this.css) }, this.progressText)
                            );
                        }),
                        t
                    );
                })(oe);
            s.Instance.registerElement("sv-progress-pages", function (e) {
                return r.createElement(At, e);
            }),
                s.Instance.registerElement("sv-progress-questions", function (e) {
                    return r.createElement(At, e);
                }),
                s.Instance.registerElement("sv-progress-correctquestions", function (e) {
                    return r.createElement(At, e);
                }),
                s.Instance.registerElement("sv-progress-requiredquestions", function (e) {
                    return r.createElement(At, e);
                });
            var Ht = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Wt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.updateScroller = void 0), (n.progressButtonsModel = new i.SurveyProgressButtonsModel(n.survey)), (n.listContainerRef = r.createRef()), n;
                    }
                    return (
                        Ht(t, e),
                        (t.prototype.render = function () {
                            var e = this;
                            return r.createElement(
                                "div",
                                { className: this.css.progressButtonsContainerCenter },
                                r.createElement(
                                    "div",
                                    { className: this.css.progressButtonsContainer },
                                    r.createElement("div", {
                                        className: this.getScrollButtonCss(!0),
                                        role: "button",
                                        onClick: function () {
                                            return e.clickScrollButton(e.listContainerRef.current, !0);
                                        },
                                    }),
                                    r.createElement("div", { className: this.css.progressButtonsListContainer, ref: this.listContainerRef }, r.createElement("ul", { className: this.css.progressButtonsList }, this.getListElements())),
                                    r.createElement("div", {
                                        className: this.getScrollButtonCss(!1),
                                        role: "button",
                                        onClick: function () {
                                            return e.clickScrollButton(e.listContainerRef.current, !1);
                                        },
                                    })
                                )
                            );
                        }),
                        (t.prototype.getListElements = function () {
                            var e = this,
                                t = [];
                            return (
                                this.survey.visiblePages.forEach(function (n, r) {
                                    t.push(e.renderListElement(n, r));
                                }),
                                t
                            );
                        }),
                        (t.prototype.renderListElement = function (e, t) {
                            var n = this;
                            return r.createElement(
                                "li",
                                {
                                    key: "listelement" + t,
                                    className: this.getListElementCss(t),
                                    onClick: this.isListElementClickable(t)
                                        ? function () {
                                              return n.clickListElement(t);
                                          }
                                        : void 0,
                                },
                                r.createElement("div", { className: this.css.progressButtonsPageTitle, title: e.navigationTitle || e.name }, e.navigationTitle || e.name),
                                r.createElement("div", { className: this.css.progressButtonsPageDescription, title: e.navigationDescription }, e.navigationDescription)
                            );
                        }),
                        (t.prototype.isListElementClickable = function (e) {
                            return this.progressButtonsModel.isListElementClickable(e);
                        }),
                        (t.prototype.getListElementCss = function (e) {
                            return this.progressButtonsModel.getListElementCss(e);
                        }),
                        (t.prototype.clickListElement = function (e) {
                            this.progressButtonsModel.clickListElement(e);
                        }),
                        (t.prototype.getScrollButtonCss = function (e) {
                            return this.progressButtonsModel.getScrollButtonCss(this.state.hasScroller, e);
                        }),
                        (t.prototype.clickScrollButton = function (e, t) {
                            e && (e.scrollLeft += 70 * (t ? -1 : 1));
                        }),
                        (t.prototype.componentDidMount = function () {
                            var e = this;
                            this.updateScroller = setInterval(function () {
                                e.listContainerRef.current && e.setState({ hasScroller: e.listContainerRef.current.scrollWidth > e.listContainerRef.current.offsetWidth });
                            }, 100);
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            void 0 !== this.updateScroller && (clearInterval(this.updateScroller), (this.updateScroller = void 0));
                        }),
                        t
                    );
                })(oe);
            s.Instance.registerElement("sv-progress-buttons", function (e) {
                return r.createElement(Wt, e);
            });
            var Ft = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Vt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnClick = n.handleOnClick.bind(n)), n;
                    }
                    return (
                        Ft(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.handleOnClick = function (e) {
                            this.question.setValueFromClick(e.target.value), this.setState({ value: this.question.value });
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.question.cssClasses,
                                n = this.question.minRateDescription ? this.renderLocString(this.question.locMinRateDescription) : null,
                                o = this.question.maxRateDescription ? this.renderLocString(this.question.locMaxRateDescription) : null;
                            return r.createElement(
                                "div",
                                {
                                    className: this.question.ratingRootCss,
                                    ref: function (t) {
                                        return (e.control = t);
                                    },
                                },
                                r.createElement(
                                    "fieldset",
                                    { role: "radiogroup" },
                                    r.createElement("legend", { role: "presentation", className: "sv-hidden" }),
                                    this.question.hasMinLabel ? r.createElement("span", { className: t.minText }, n) : null,
                                    this.question.renderedRateItems.map(function (n, r) {
                                        return e.renderItem("value" + r, n, r, t);
                                    }),
                                    this.question.hasMaxLabel ? r.createElement("span", { className: t.maxText }, o) : null
                                )
                            );
                        }),
                        (t.prototype.renderItem = function (e, t, n, o) {
                            var i = this.renderLocString(t.locText);
                            return r.createElement(
                                "label",
                                { key: e, className: this.question.getItemClass(t.itemValue) },
                                r.createElement("input", {
                                    type: "radio",
                                    className: "sv-visuallyhidden",
                                    name: this.question.name,
                                    id: this.question.getInputId(n),
                                    value: t.value,
                                    disabled: this.isDisplayMode,
                                    checked: this.question.value == t.value,
                                    onClick: this.handleOnClick,
                                    onChange: function () {},
                                    "aria-required": this.question.ariaRequired,
                                    "aria-label": this.question.ariaLabel,
                                    "aria-invalid": this.question.ariaInvalid,
                                    "aria-describedby": this.question.ariaDescribedBy,
                                }),
                                r.createElement("span", { className: o.itemText }, i)
                            );
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("rating", function (e) {
                return r.createElement(Vt, e);
            });
            var Qt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Ut = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Qt(t, e),
                        (t.prototype.renderElement = function () {
                            var e = this.question.cssClasses,
                                t = this.renderSelect(e);
                            return r.createElement("div", { className: this.question.cssClasses.rootDropdown }, t);
                        }),
                        t
                    );
                })(je);
            Z.Instance.registerQuestion("sv-rating-dropdown", function (e) {
                return r.createElement(Ut, e);
            }),
                i.RendererFactory.Instance.registerRenderer("rating", "dropdown", "sv-rating-dropdown");
            var zt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Kt = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        zt(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.question.cssClasses;
                            return r.createElement(
                                "div",
                                {
                                    id: this.question.inputId,
                                    className: t.root,
                                    ref: function (t) {
                                        return (e.control = t);
                                    },
                                },
                                this.question.formatedValue
                            );
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("expression", function (e) {
                return r.createElement(Kt, e);
            });
            var Jt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Zt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnExpanded = n.handleOnExpanded.bind(n)), n;
                    }
                    return (
                        Jt(t, e),
                        (t.prototype.getStateElements = function () {
                            return [this.popup, this.popup.survey];
                        }),
                        (t.prototype.handleOnExpanded = function (e) {
                            this.popup.changeExpandCollapse();
                        }),
                        (t.prototype.canRender = function () {
                            return e.prototype.canRender.call(this) && this.popup.isShowing;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.renderWindowHeader(),
                                t = this.popup.isExpanded ? this.renderBody() : null;
                            return r.createElement("div", { className: this.popup.cssRoot, style: { position: "fixed", bottom: 3, right: 10, maxWidth: "60%" } }, e, t);
                        }),
                        (t.prototype.renderWindowHeader = function () {
                            var e = { paddingRight: "10px" },
                                t = this.popup.cssButton;
                            t = "glyphicon pull-right " + t;
                            var n = c.renderLocString(this.survey.locTitle);
                            return r.createElement(
                                "div",
                                { className: this.popup.cssHeaderRoot },
                                r.createElement(
                                    "span",
                                    { onClick: this.handleOnExpanded, style: { width: "100%", cursor: "pointer" } },
                                    r.createElement("span", { className: this.popup.cssHeaderTitle, style: e }, n),
                                    r.createElement("span", { className: t, "aria-hidden": "true" })
                                ),
                                this.popup.isExpanded
                                    ? r.createElement("span", { onClick: this.handleOnExpanded, style: { float: "right", cursor: "pointer" } }, r.createElement("span", { className: this.popup.cssHeaderTitle, style: e }, "X"))
                                    : null
                            );
                        }),
                        (t.prototype.renderBody = function () {
                            return r.createElement("div", { className: this.popup.cssBody }, this.doRender());
                        }),
                        (t.prototype.createSurvey = function (t) {
                            t || (t = {}),
                                e.prototype.createSurvey.call(this, t),
                                (this.popup = new i.PopupSurveyModel(null, this.survey)),
                                t.closeOnCompleteTimeout && (this.popup.closeOnCompleteTimeout = t.closeOnCompleteTimeout),
                                (this.popup.isShowing = !0),
                                this.popup.isExpanded || (!t.expanded && !t.isExpanded) || this.popup.expand();
                        }),
                        t
                    );
                })(te),
                Gt = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return Jt(t, e), t;
                })(Zt),
                Xt = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                $t = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        Xt(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.question.cssClasses;
                            return r.createElement(
                                "fieldset",
                                { className: this.question.getSelectBaseRootCss() },
                                r.createElement("legend", { role: "radio", "aria-label": this.question.locTitle.renderedHtml }),
                                this.question.hasColumns ? this.getColumns(e) : this.getItems(e)
                            );
                        }),
                        (t.prototype.getColumns = function (e) {
                            var t = this;
                            return this.question.columns.map(function (n, o) {
                                var i = n.map(function (n, r) {
                                    return t.renderItem("item" + r, n, e);
                                });
                                return r.createElement("div", { key: "column" + o, className: t.question.getColumnClass(), role: "presentation" }, i);
                            });
                        }),
                        (t.prototype.getItems = function (e) {
                            for (var t = [], n = 0; n < this.question.visibleChoices.length; n++) {
                                var r = this.question.visibleChoices[n],
                                    o = "item" + n;
                                t.push(this.renderItem(o, r, e));
                            }
                            return t;
                        }),
                        Object.defineProperty(t.prototype, "textStyle", {
                            get: function () {
                                return { marginLeft: "3px", display: "inline", position: "static" };
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderItem = function (e, t, n) {
                            var o = r.createElement(Yt, { key: e, question: this.question, item: t, cssClasses: n }),
                                i = this.question.survey,
                                s = null;
                            return i && (s = a.wrapItemValue(i, o, this.question, t)), null != s ? s : o;
                        }),
                        t
                    );
                })(h),
                Yt = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnChange = n.handleOnChange.bind(n)), n;
                    }
                    return (
                        Xt(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.reactOnStrChanged();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), (this.item.locImageLink.onChanged = function () {});
                        }),
                        (t.prototype.componentDidUpdate = function (t, n) {
                            e.prototype.componentDidUpdate.call(this, t, n), this.reactOnStrChanged();
                        }),
                        (t.prototype.reactOnStrChanged = function () {
                            var e = this;
                            this.item.locImageLink.onChanged = function () {
                                e.setState({ locImageLinkchanged: e.state && e.state.locImageLink ? e.state.locImageLink + 1 : 1 });
                            };
                        }),
                        Object.defineProperty(t.prototype, "cssClasses", {
                            get: function () {
                                return this.props.cssClasses;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.handleOnChange = function (e) {
                            if (this.question.multiSelect)
                                if (e.target.checked) this.question.value = this.question.value.concat(e.target.value);
                                else {
                                    var t = this.question.value;
                                    t.splice(this.question.value.indexOf(e.target.value), 1), (this.question.value = t);
                                }
                            else this.question.value = e.target.value;
                            this.setState({ value: this.question.value });
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.item,
                                n = this.question,
                                o = this.cssClasses,
                                i = n.isItemSelected(t),
                                s = n.getItemClass(t),
                                a = null;
                            n.showLabel && (a = r.createElement("span", { className: n.cssClasses.itemText }, t.text ? c.renderLocString(t.locText) : t.value));
                            var u = { objectFit: this.question.imageFit },
                                l = null;
                            if (
                                (t.locImageLink.renderedHtml &&
                                    "image" === this.question.contentMode &&
                                    (l = r.createElement("img", {
                                        className: o.image,
                                        src: t.locImageLink.renderedHtml,
                                        width: this.question.renderedImageWidth,
                                        height: this.question.renderedImageHeight,
                                        alt: t.locText.renderedHtml,
                                        style: u,
                                        onLoad: function (n) {
                                            e.question.onContentLoaded(t, n.nativeEvent);
                                        },
                                    })),
                                t.locImageLink.renderedHtml &&
                                    "video" === this.question.contentMode &&
                                    (l = r.createElement("video", {
                                        controls: !0,
                                        className: o.image,
                                        src: t.locImageLink.renderedHtml,
                                        width: this.question.renderedImageWidth,
                                        height: this.question.renderedImageHeight,
                                        style: u,
                                        onLoadedMetadata: function (n) {
                                            e.question.onContentLoaded(t, n.nativeEvent);
                                        },
                                    })),
                                !t.locImageLink.renderedHtml)
                            ) {
                                var p = { width: this.question.renderedImageWidth, height: this.question.renderedImageHeight, objectFit: this.question.imageFit };
                                l = r.createElement(
                                    "div",
                                    { className: o.itemNoImage, style: p },
                                    o.itemNoImageSvgIcon ? r.createElement("svg", { className: o.itemNoImageSvgIcon }, r.createElement("use", { xlinkHref: o.itemNoImageSvgIconId })) : null
                                );
                            }
                            return r.createElement(
                                "div",
                                { className: s },
                                r.createElement(
                                    "label",
                                    { className: o.label },
                                    r.createElement("input", {
                                        className: o.itemControl,
                                        id: this.question.getItemId(t),
                                        type: this.question.inputType,
                                        name: this.question.questionName,
                                        checked: i,
                                        value: t.value,
                                        disabled: !this.question.getItemEnabled(t),
                                        onChange: this.handleOnChange,
                                        "aria-required": this.question.ariaRequired,
                                        "aria-label": this.question.ariaLabel,
                                        "aria-invalid": this.question.ariaInvalid,
                                        "aria-describedby": this.question.ariaDescribedBy,
                                    }),
                                    r.createElement("div", { className: this.question.cssClasses.itemDecorator }, r.createElement("div", { className: this.question.cssClasses.imageContainer }, l), a)
                                )
                            );
                        }),
                        t
                    );
                })(p);
            Z.Instance.registerQuestion("imagepicker", function (e) {
                return r.createElement($t, e);
            });
            var en = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                tn = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        en(t, e),
                        (t.prototype.componentDidMount = function () {
                            var t = this;
                            e.prototype.componentDidMount.call(this),
                                (this.question.locImageLink.onChanged = function () {
                                    t.forceUpdate();
                                });
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            e.prototype.componentWillUnmount.call(this), (this.question.locImageLink.onChanged = function () {});
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.canRender = function () {
                            return e.prototype.canRender.call(this) && !!this.question.imageLink;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.question.getImageCss(),
                                t = { objectFit: this.question.imageFit },
                                n = null;
                            return (
                                "image" === this.question.renderedMode &&
                                    (n = r.createElement("img", {
                                        className: e,
                                        src: this.question.locImageLink.renderedHtml,
                                        alt: this.question.altText || this.question.title,
                                        width: this.question.renderedWidth,
                                        height: this.question.renderedHeight,
                                        style: t,
                                    })),
                                "video" === this.question.renderedMode &&
                                    (n = r.createElement("video", { controls: !0, className: e, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: t })),
                                "youtube" === this.question.renderedMode &&
                                    (n = r.createElement("iframe", { className: e, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: t })),
                                r.createElement("div", { className: this.question.cssClasses.root }, n)
                            );
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("image", function (e) {
                return r.createElement(tn, e);
            });
            var nn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                rn = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.state = { value: n.question.value }), n;
                    }
                    return (
                        nn(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this,
                                t = this.question.cssClasses,
                                n = this.renderCleanButton();
                            return r.createElement(
                                "div",
                                {
                                    className: t.root,
                                    ref: function (t) {
                                        return (e.control = t);
                                    },
                                    style: { height: this.question.signatureHeight, width: this.question.signatureWidth },
                                },
                                r.createElement("div", { className: t.placeholder, style: { display: this.question.needShowPlaceholder() ? "" : "none" } }, this.question.placeHolderText),
                                r.createElement("div", null, r.createElement("canvas", { tabIndex: 0 })),
                                n
                            );
                        }),
                        (t.prototype.renderCleanButton = function () {
                            var e = this;
                            if (!this.question.canShowClearButton) return null;
                            var t = this.question.cssClasses;
                            return r.createElement(
                                "div",
                                { className: t.controls },
                                r.createElement(
                                    "button",
                                    {
                                        type: "button",
                                        className: t.clearButton,
                                        title: this.question.clearButtonCaption,
                                        onClick: function () {
                                            return e.question.clearValue();
                                        },
                                    },
                                    this.question.cssClasses.clearButtonIconId ? r.createElement(b, { iconName: this.question.cssClasses.clearButtonIconId, size: "auto" }) : r.createElement("span", null, "✖")
                                )
                            );
                        }),
                        t
                    );
                })(h);
            Z.Instance.registerQuestion("signaturepad", function (e) {
                return r.createElement(rn, e);
            });
            var on = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                sn = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        on(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.questionBase;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.question;
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.renderItems();
                            return o.a.createElement("div", { className: this.question.cssClasses.root }, e);
                        }),
                        (t.prototype.renderItems = function () {
                            var e = this;
                            return this.question.visibleChoices.map(function (t, n) {
                                return o.a.createElement(an, { key: e.question.inputId + "_" + n, item: t, question: e.question, index: n });
                            });
                        }),
                        t
                    );
                })(h),
                an = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        on(t, e),
                        Object.defineProperty(t.prototype, "index", {
                            get: function () {
                                return this.props.index;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        (t.prototype.renderElement = function () {
                            this.model = new i.ButtonGroupItemModel(this.question, this.item, this.index);
                            var e = this.renderIcon(),
                                t = this.renderInput(),
                                n = this.renderCaption();
                            return o.a.createElement("label", { role: "radio", className: this.model.css.label, title: this.model.caption.renderedHtml }, t, o.a.createElement("div", { className: this.model.css.decorator }, e, n));
                        }),
                        (t.prototype.renderIcon = function () {
                            return this.model.iconName ? o.a.createElement(b, { className: this.model.css.icon, iconName: this.model.iconName, size: this.model.iconSize || 24 }) : null;
                        }),
                        (t.prototype.renderInput = function () {
                            var e = this;
                            return o.a.createElement("input", {
                                className: this.model.css.control,
                                id: this.model.id,
                                type: "radio",
                                name: this.model.name,
                                checked: this.model.selected,
                                value: this.model.value,
                                disabled: this.model.readOnly,
                                onChange: function () {
                                    e.model.onChange();
                                },
                                "aria-required": this.model.isRequired,
                                "aria-label": this.model.caption.renderedHtml,
                                "aria-invalid": this.model.hasErrors,
                                "aria-describedby": this.model.describedBy,
                                role: "radio",
                            });
                        }),
                        (t.prototype.renderCaption = function () {
                            if (!this.model.showCaption) return null;
                            var e = this.renderLocString(this.model.caption);
                            return o.a.createElement("span", { className: this.model.css.caption, title: this.model.caption.renderedHtml }, e);
                        }),
                        t
                    );
                })(c),
                un = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                ln = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        un(t, e),
                        (t.prototype.getStateElements = function () {
                            var t = e.prototype.getStateElements.call(this);
                            return this.question.contentQuestion && t.push(this.question.contentQuestion), t;
                        }),
                        (t.prototype.renderElement = function () {
                            return de.renderQuestionBody(this.creator, this.question.contentQuestion);
                        }),
                        t
                    );
                })(d),
                cn = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        un(t, e),
                        (t.prototype.canRender = function () {
                            return !!this.question.contentPanel;
                        }),
                        (t.prototype.renderElement = function () {
                            return r.createElement(ge, { element: this.question.contentPanel, creator: this.creator, survey: this.question.survey });
                        }),
                        t
                    );
                })(d);
            Z.Instance.registerQuestion("custom", function (e) {
                return r.createElement(ln, e);
            }),
                Z.Instance.registerQuestion("composite", function (e) {
                    return r.createElement(cn, e);
                });
            var pn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                hn = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t.handleKeydown = function (e) {
                                t.model.onKeyDown(e);
                            }),
                            t
                        );
                    }
                    return (
                        pn(t, e),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.item;
                        }),
                        (t.prototype.render = function () {
                            var e = this;
                            if (!this.item) return null;
                            var t = { paddingLeft: this.model.getItemIndent(this.item) },
                                n = this.model.getItemClass(this.item),
                                r = [];
                            if (this.item.component) r.push(s.Instance.createElement(this.item.component, { item: this.item, key: this.item.id }));
                            else {
                                var i = this.renderLocString(this.item.locTitle, void 0, "locString");
                                if (this.item.iconName) {
                                    var a = o.a.createElement(b, { key: 1, className: this.model.cssClasses.itemIcon, iconName: this.item.iconName, size: 24, "aria-label": this.item.title });
                                    r.push(a), r.push(o.a.createElement("span", { key: 2 }, i));
                                } else r.push(i);
                            }
                            var u = o.a.createElement("div", { style: t, className: this.model.cssClasses.itemBody }, r),
                                l = this.item.needSeparator ? o.a.createElement("div", { className: this.model.cssClasses.itemSeparator }) : null,
                                c = { display: this.model.isItemVisible(this.item) ? null : "none" };
                            return ne(
                                o.a.createElement(
                                    "li",
                                    {
                                        className: n,
                                        role: "option",
                                        style: c,
                                        "aria-selected": this.model.isItemSelected(this.item),
                                        onClick: function (t) {
                                            e.model.onItemClick(e.item), t.stopPropagation();
                                        },
                                        onPointerDown: function (t) {
                                            return e.model.onPointerDown(t, e.item);
                                        },
                                    },
                                    l,
                                    u
                                )
                            );
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.model.onLastItemRended(this.item);
                        }),
                        t
                    );
                })(c);
            s.Instance.registerElement("sv-list-item", function (e) {
                return o.a.createElement(hn, e);
            });
            var dn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                fn = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.handleKeydown = function (e) {
                                n.model.onKeyDown(e);
                            }),
                            (n.handleMouseMove = function (e) {
                                n.model.onMouseMove(e);
                            }),
                            (n.state = { filterString: n.model.filterString || "" }),
                            (n.listContainerRef = o.a.createRef()),
                            n
                        );
                    }
                    return (
                        dn(t, e),
                        Object.defineProperty(t.prototype, "model", {
                            get: function () {
                                return this.props.model;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.getStateElement = function () {
                            return this.model;
                        }),
                        (t.prototype.componentDidMount = function () {
                            e.prototype.componentDidMount.call(this), this.model.initListContainerHtmlElement(this.listContainerRef.current);
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.renderItems();
                            return o.a.createElement(
                                "div",
                                { className: this.model.cssClasses.root, ref: this.listContainerRef },
                                this.searchElementContent(),
                                this.emptyContent(),
                                o.a.createElement(
                                    "ul",
                                    {
                                        className: this.model.cssClasses.itemsContainer,
                                        role: "listbox",
                                        onMouseDown: function (e) {
                                            e.preventDefault();
                                        },
                                        onKeyDown: this.handleKeydown,
                                        onMouseMove: this.handleMouseMove,
                                    },
                                    e
                                )
                            );
                        }),
                        (t.prototype.renderItems = function () {
                            var e = this;
                            if (!this.model) return null;
                            var t = this.model.renderedActions;
                            return t
                                ? t.map(function (t, n) {
                                      return o.a.createElement(hn, { model: e.model, item: t, key: "item" + n });
                                  })
                                : null;
                        }),
                        (t.prototype.searchElementContent = function () {
                            var e = this;
                            if (this.model.showFilter) {
                                return o.a.createElement(
                                    "div",
                                    { className: this.model.cssClasses.filter },
                                    o.a.createElement("div", { className: this.model.cssClasses.filterIcon }, o.a.createElement(b, { iconName: "icon-search", size: "auto" })),
                                    o.a.createElement("input", {
                                        type: "text",
                                        className: this.model.cssClasses.filterInput,
                                        "aria-label": this.model.filterStringPlaceholder,
                                        placeholder: this.model.filterStringPlaceholder,
                                        value: this.state.filterString,
                                        onKeyUp: function (t) {
                                            e.model.goToItems(t);
                                        },
                                        onChange: function (t) {
                                            t.target === document.activeElement && (e.model.filterString = t.target.value);
                                        },
                                    })
                                );
                            }
                            return null;
                        }),
                        (t.prototype.emptyContent = function () {
                            var e = { display: this.model.isEmpty ? null : "none" };
                            return o.a.createElement(
                                "div",
                                { className: this.model.cssClasses.emptyContainer, style: e },
                                o.a.createElement("div", { className: this.model.cssClasses.emptyText, "aria-label": this.model.emptyMessage }, this.model.emptyMessage)
                            );
                        }),
                        t
                    );
                })(c);
            s.Instance.registerElement("sv-list", function (e) {
                return o.a.createElement(fn, e);
            });
            var mn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                yn = (function (e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        mn(t, e),
                        Object.defineProperty(t.prototype, "survey", {
                            get: function () {
                                return this.props.data;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            var e = [];
                            return (
                                e.push(
                                    o.a.createElement(
                                        "div",
                                        { key: "logo-image", className: this.survey.logoClassNames },
                                        o.a.createElement("img", {
                                            className: this.survey.css.logoImage,
                                            src: this.survey.locLogo.renderedHtml,
                                            alt: this.survey.locTitle.renderedHtml,
                                            width: this.survey.logoWidth ? this.survey.logoWidth : void 0,
                                            height: this.survey.logoHeight ? this.survey.logoHeight : void 0,
                                            style: { objectFit: this.survey.logoFit },
                                        })
                                    )
                                ),
                                o.a.createElement(o.a.Fragment, null, e)
                            );
                        }),
                        t
                    );
                })(o.a.Component);
            s.Instance.registerElement("sv-logo-image", function (e) {
                return o.a.createElement(yn, e);
            });
            var vn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                gn = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnRowRemoveClick = n.handleOnRowRemoveClick.bind(n)), n;
                    }
                    return (
                        vn(t, e),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.item.data.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "row", {
                            get: function () {
                                return this.props.item.data.row;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.handleOnRowRemoveClick = function (e) {
                            this.question.removeRowUI(this.row);
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.renderLocString(this.question.locRemoveRowText);
                            return o.a.createElement(
                                "button",
                                { className: this.question.getRemoveRowButtonCss(), type: "button", onClick: this.handleOnRowRemoveClick, disabled: this.question.isInputReadOnly },
                                e,
                                o.a.createElement("span", { className: this.question.cssClasses.iconRemove })
                            );
                        }),
                        t
                    );
                })(p);
            s.Instance.registerElement("sv-matrix-remove-button", function (e) {
                return o.a.createElement(gn, e);
            });
            var bn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Cn = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.handleOnShowHideClick = n.handleOnShowHideClick.bind(n)), n;
                    }
                    return (
                        bn(t, e),
                        (t.prototype.getStateElement = function () {
                            return this.props.item;
                        }),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "question", {
                            get: function () {
                                return this.props.item.data.question;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "row", {
                            get: function () {
                                return this.props.item.data.row;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.handleOnShowHideClick = function (e) {
                            this.row.showHideDetailPanelClick();
                        }),
                        (t.prototype.renderElement = function () {
                            var e = this.row.isDetailPanelShowing,
                                t = e,
                                n = e ? this.row.detailPanelId : null;
                            return o.a.createElement(
                                "button",
                                { type: "button", onClick: this.handleOnShowHideClick, className: this.question.getDetailPanelButtonCss(this.row), "aria-expanded": t, "aria-controls": n },
                                o.a.createElement(b, { className: this.question.getDetailPanelIconCss(this.row), iconName: this.question.getDetailPanelIconId(this.row), size: "auto" })
                            );
                        }),
                        t
                    );
                })(p);
            s.Instance.registerElement("sv-matrix-detail-button", function (e) {
                return o.a.createElement(Cn, e);
            });
            var En = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                qn = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t.handleClick = function (e) {
                                t.question.removePanelUI(t.props.data.index);
                            }),
                            t
                        );
                    }
                    return (
                        En(t, e),
                        (t.prototype.renderElement = function () {
                            return o.a.createElement(
                                "button",
                                { className: this.question.getPanelRemoveButtonCss(), onClick: this.handleClick, type: "button" },
                                o.a.createElement("span", { className: this.question.cssClasses.buttonRemoveText }, this.question.panelRemoveText),
                                o.a.createElement("span", { className: this.question.cssClasses.iconRemove })
                            );
                        }),
                        t
                    );
                })(It);
            s.Instance.registerElement("sv-paneldynamic-remove-btn", function (e) {
                return o.a.createElement(qn, e);
            });
            var wn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                On = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        wn(t, e),
                        Object.defineProperty(t.prototype, "item", {
                            get: function () {
                                return this.props.item;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.canRender = function () {
                            return this.item.isVisible;
                        }),
                        (t.prototype.renderElement = function () {
                            return o.a.createElement("input", {
                                className: this.item.innerCss,
                                type: "button",
                                disabled: this.item.disabled,
                                onMouseDown: this.item.data && this.item.data.mouseDown,
                                onClick: this.item.action,
                                value: this.item.title,
                            });
                        }),
                        t
                    );
                })(p);
            s.Instance.registerElement("sv-nav-btn", function (e) {
                return o.a.createElement(On, e);
            });
            var _n = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Sn = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        _n(t, e),
                        (t.prototype.render = function () {
                            return o.a.createElement("div", { className: "sv-skeleton-element" });
                        }),
                        t
                    );
                })(o.a.Component);
            s.Instance.registerElement("sv-skeleton", function (e) {
                return o.a.createElement(Sn, e);
            });
            var In = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                xn = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.onInput = function (e) {
                                n.locStr.text = e.target.innerText;
                            }),
                            (n.onClick = function (e) {
                                e.preventDefault(), e.stopPropagation();
                            }),
                            (n.state = { changed: 0 }),
                            n
                        );
                    }
                    return (
                        In(t, e),
                        Object.defineProperty(t.prototype, "locStr", {
                            get: function () {
                                return this.props.locStr;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "style", {
                            get: function () {
                                return this.props.style;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            if (this.locStr) {
                                var e = this;
                                this.locStr.onChanged = function () {
                                    e.setState({ changed: e.state.changed + 1 });
                                };
                            }
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this.locStr && (this.locStr.onChanged = function () {});
                        }),
                        (t.prototype.render = function () {
                            if (!this.locStr) return null;
                            if (this.locStr.hasHtml) {
                                var e = { __html: this.locStr.renderedHtml };
                                return o.a.createElement("span", {
                                    className: "sv-string-editor",
                                    contentEditable: "true",
                                    suppressContentEditableWarning: !0,
                                    style: this.style,
                                    dangerouslySetInnerHTML: e,
                                    onBlur: this.onInput,
                                    onClick: this.onClick,
                                });
                            }
                            return o.a.createElement(
                                "span",
                                { className: "sv-string-editor", contentEditable: "true", suppressContentEditableWarning: !0, style: this.style, onBlur: this.onInput, onClick: this.onClick },
                                this.locStr.renderedHtml
                            );
                        }),
                        t
                    );
                })(o.a.Component);
            s.Instance.registerElement(i.LocalizableString.editableRenderer, function (e) {
                return o.a.createElement(xn, e);
            });
            var Pn = n(4),
                Rn = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                Nn = (function () {
                    function e(e, t, n, r) {
                        void 0 === r && (r = null);
                        var o = this;
                        (this.container = e),
                            (this.model = t),
                            (this.itemsSelector = n),
                            (this.dotsItemSize = r),
                            (this.resizeObserver = void 0),
                            (this.isInitialized = !1),
                            (this.minDimensionConst = 56),
                            (this.separatorSize = 17),
                            (this.separatorAddConst = 1),
                            (this.paddingSizeConst = 8),
                            (this.dotsSizeConst = 48),
                            (this.recalcMinDimensionConst = !0),
                            (this.getComputedStyle = window.getComputedStyle.bind(window)),
                            (this.model.updateCallback = function (e) {
                                e
                                    ? (o.isInitialized = !1)
                                    : Object(Pn.setTimeout)(function () {
                                          o.process();
                                      }, 1);
                            }),
                            "undefined" != typeof ResizeObserver &&
                                ((this.resizeObserver = new ResizeObserver(function (e) {
                                    return o.process();
                                })),
                                this.resizeObserver.observe(this.container.parentElement));
                    }
                    return (
                        (e.prototype.getDimensions = function (e) {
                            return { scroll: e.scrollWidth, offset: e.offsetWidth };
                        }),
                        (e.prototype.getAvailableSpace = function () {
                            var e = this.getComputedStyle(this.container),
                                t = this.container.offsetWidth;
                            return "border-box" === e.boxSizing && (t -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)), t;
                        }),
                        (e.prototype.calcItemSize = function (e) {
                            return e.offsetWidth;
                        }),
                        (e.prototype.calcMinDimension = function (e) {
                            var t = this.minDimensionConst;
                            return e.iconSize && this.recalcMinDimensionConst && (t = 2 * e.iconSize + this.paddingSizeConst), e.canShrink ? t + (e.needSeparator ? this.separatorSize : 0) : e.maxDimension;
                        }),
                        (e.prototype.calcItemsSizes = function () {
                            var e = this,
                                t = this.model.actions;
                            this.container.querySelectorAll(this.itemsSelector).forEach(function (n, r) {
                                var o = t[r];
                                e.calcActionDimensions(o, n);
                            });
                        }),
                        (e.prototype.calcActionDimensions = function (e, t) {
                            (e.maxDimension = this.calcItemSize(t)), (e.minDimension = this.calcMinDimension(e));
                        }),
                        Object.defineProperty(e.prototype, "isContainerVisible", {
                            get: function () {
                                return !!((e = this.container).offsetWidth || e.offsetHeight || e.getClientRects().length);
                                var e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.process = function () {
                            var e;
                            if (this.isContainerVisible && !this.model.isResponsivenessDisabled) {
                                this.isInitialized || (this.model.setActionsMode("large"), this.calcItemsSizes(), (this.isInitialized = !0));
                                var t = this.dotsItemSize;
                                if (!this.dotsItemSize) {
                                    var n = null === (e = this.container) || void 0 === e ? void 0 : e.querySelector(".sv-dots");
                                    t = (n && this.calcItemSize(n)) || this.dotsSizeConst;
                                }
                                this.model.fit(this.getAvailableSpace(), t);
                            }
                        }),
                        (e.prototype.dispose = function () {
                            (this.model.updateCallback = void 0), this.resizeObserver && this.resizeObserver.disconnect();
                        }),
                        e
                    );
                })(),
                Tn = (function (e) {
                    function t(t, n, r, o, i) {
                        void 0 === i && (i = 40);
                        var s = e.call(this, t, n, r, o) || this;
                        return (s.minDimensionConst = i), (s.recalcMinDimensionConst = !1), s;
                    }
                    return (
                        Rn(t, e),
                        (t.prototype.getDimensions = function () {
                            return { scroll: this.container.scrollHeight, offset: this.container.offsetHeight };
                        }),
                        (t.prototype.getAvailableSpace = function () {
                            var e = this.getComputedStyle(this.container),
                                t = this.container.offsetHeight;
                            return "border-box" === e.boxSizing && (t -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)), t;
                        }),
                        (t.prototype.calcItemSize = function (e) {
                            return e.offsetHeight;
                        }),
                        (t.prototype.calcActionDimensions = function (e, t) {
                            (e.maxDimension = this.calcItemSize(t)), (e.minDimension = this.calcItemSize(t));
                        }),
                        t
                    );
                })(Nn);
            Object(i.checkLibraryVersion)("".concat("1.9.55"), "survey-react-ui");
        },
    ]);
});
