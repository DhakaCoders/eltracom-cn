! function(e) {
    "use strict";

    function r(e) {
        if (void 0 === e.length) o(e, "click", t);
        else if ("string" != typeof e && !(e instanceof String))
            for (var n = 0; n < e.length; n++) o(e[n], "click", t)
    }

    function t(e) {
        var n, t, o, i;
        return (o = (n = (e = e || window.event).currentTarget || e.srcElement).getAttribute("href")) && (i = e.ctrlKey || e.shiftKey || e.metaKey, t = n.getAttribute("target"), i || t && !f(t)) ? (r.open(o), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1) : void 0
    }

    function o(e, n, t) {
        var o, i;
        return e.addEventListener ? e.addEventListener(n, t, !1) : (o = "on" + n, void(e.attachEvent ? e.attachEvent(o, t) : e[o] ? (i = e[o], e[o] = function() {
            t(), i()
        }) : e[o] = t))
    }

    function f(e) {
        return "_top" === e || "_self" === e || "_parent" === e
    }
    var s = -1 !== navigator.userAgent.indexOf("MSIE"),
        v = window.open;
    r.open = function(e, n, t) {
        var o, i, r, d, l, a, u, c, p;
        return f(n) ? v.apply(window, arguments) : s ? ((o = v.apply(window, arguments)).opener = null, o) : (i = e, r = n, d = t, (l = document.createElement("iframe")).style.display = "none", document.body.appendChild(l), c = '"' + i + '"', r && (c += ', "' + r + '"'), d && (c += ', "' + d + '"'), (u = (a = l.contentDocument || l.contentWindow.document).createElement("script")).type = "text/javascript", u.text = "window.parent = null; window.top = null;window.frameElement = null; var child = window.open(" + c + ");child.opener = null", a.body.appendChild(u), p = l.contentWindow.child, document.body.removeChild(l), p)
    }, r.patch = function() {
        window.open = function() {
            return r.open.apply(this, arguments)
        }
    }, "undefined" != typeof exports && ("undefined" != typeof module && module.exports ? module.exports = r : exports.blankshield = r), "function" == typeof define && "object" == typeof define.amd && define("blankshield", [], function() {
        return r
    }), e.blankshield = r
}(this), document.addEventListener("DOMContentLoaded", function() {
    blankshield(document.querySelectorAll("a[target=_blank]"))
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, l, e, w, x, b, P, g, i, y, O, v, T, c, p, m, s;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(s, _, y) {
            var m = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                g = function(t, e, i) {
                    var s, r, n = t.cycle;
                    for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle
                },
                v = function(t, e, i) {
                    y.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = v.prototype.render
                },
                T = 1e-10,
                x = y._internals,
                b = x.isSelector,
                w = x.isArray,
                t = v.prototype = y.to({}, .1, {}),
                P = [];
            v.version = "1.20.3", t.constructor = v, t.kill()._gc = !1, v.killTweensOf = v.killDelayedCallsTo = y.killTweensOf, v.getTweensOf = y.getTweensOf, v.lagSmoothing = y.lagSmoothing, v.ticker = y.ticker, v.render = y.render, t.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), y.prototype.invalidate.call(this)
            }, t.updateTo = function(t, e) {
                var i, s = this.ratio,
                    r = this.vars.immediateRender || t.immediateRender;
                for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
                if (this._initted || r)
                    if (e) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && y._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var n = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || r)
                    for (var a, o = 1 / (1 - s), l = this._firstPT; l;) a = l.s + l.c, l.c *= o, l.s = a - l.c, l = l._next;
                return this
            }, t.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var s, r, n, a, o, l, h, _, u, f = this._dirty ? this.totalDuration() : this._totalDuration,
                    c = this._time,
                    p = this._totalTime,
                    d = this._cycle,
                    m = this._duration,
                    g = this._rawPrevTime;
                if (f - 1e-7 <= t && 0 <= t ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === m && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (g < 0 || t <= 0 && -1e-7 <= t || g === T && "isPause" !== this.data) && g !== t && (i = !0, T < g && (r = "onReverseComplete")), this._rawPrevTime = _ = !e || t || g === t ? t : T)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === m && 0 < g) && (r = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= g && (i = !0), this._rawPrevTime = _ = !e || t || g === t ? t : T)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = m + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time, (u = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== u || this._initted ? this._yoyoEase = u = !0 === u ? this._ease : u instanceof Ease ? u : Ease.map[u] : (u = this.vars.ease, this._yoyoEase = u = u ? u instanceof Ease ? u : "function" == typeof u ? new Ease(u, this.vars.easeParams) : Ease.map[u] || y.defaultEase : y.defaultEase)), this.ratio = u ? 1 - u.getRatio((m - this._time) / m) : 0)), this._time > m ? this._time = m : this._time < 0 && (this._time = 0)), this._easeType && !u ? (o = this._time / m, (1 === (l = this._easeType) || 3 === l && .5 <= o) && (o = 1 - o), 3 === l && (o *= 2), 1 === (h = this._easePower) ? o *= o : 2 === h ? o *= o * o : 3 === h ? o *= o * o * o : 4 === h && (o *= o * o * o * o), 1 === l ? this.ratio = 1 - o : 2 === l ? this.ratio = o : this._time / m < .5 ? this.ratio = o / 2 : this.ratio = 1 - o / 2) : u || (this.ratio = this._ease.getRatio(this._time / m))), c !== this._time || i || d !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = c, this._totalTime = p, this._rawPrevTime = g, this._cycle = d, x.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || s || u ? s && this._ease._calcEnd && !u && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / m)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== c && 0 <= t && (this._active = !0), 0 === p && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === m) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== p || r) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === m && this._rawPrevTime === T && _ !== T && (this._rawPrevTime = 0))
                } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, v.to = function(t, e, i) {
                return new v(t, e, i)
            }, v.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new v(t, e, i)
            }, v.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new v(t, e, s)
            }, v.staggerTo = v.allTo = function(t, e, i, s, r, n, a) {
                s = s || 0;
                var o, l, h, _, u = 0,
                    f = [],
                    c = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(a || i.callbackScope || this, n || P)
                    },
                    p = i.cycle,
                    d = i.startAt && i.startAt.cycle;
                for (w(t) || ("string" == typeof t && (t = y.selector(t) || t), b(t) && (t = m(t))), t = t || [], s < 0 && ((t = m(t)).reverse(), s *= -1), o = t.length - 1, h = 0; h <= o; h++) {
                    for (_ in l = {}, i) l[_] = i[_];
                    if (p && (g(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), d) {
                        for (_ in d = l.startAt = {}, i.startAt) d[_] = i.startAt[_];
                        g(l.startAt, t, h)
                    }
                    l.delay = u + (l.delay || 0), h === o && r && (l.onComplete = c), f[h] = new v(t[h], e, l), u += s
                }
                return f
            }, v.staggerFrom = v.allFrom = function(t, e, i, s, r, n, a) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, v.staggerTo(t, e, i, s, r, n, a)
            }, v.staggerFromTo = v.allFromTo = function(t, e, i, s, r, n, a, o) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, v.staggerTo(t, e, s, r, n, a, o)
            }, v.delayedCall = function(t, e, i, s, r) {
                return new v(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, v.set = function(t, e) {
                return new v(t, 0, e)
            }, v.isTweening = function(t) {
                return 0 < y.getTweensOf(t, !0).length
            };
            var n = function(t, e) {
                    for (var i = [], s = 0, r = t._first; r;) r instanceof y ? i[s++] = r : (e && (i[s++] = r), s = (i = i.concat(n(r, e))).length), r = r._next;
                    return i
                },
                u = v.getAllTweens = function(t) {
                    return n(s._rootTimeline, t).concat(n(s._rootFramesTimeline, t))
                };
            v.killAll = function(t, e, i, s) {
                null == e && (e = !0), null == i && (i = !0);
                var r, n, a, o = u(0 != s),
                    l = o.length,
                    h = e && i && s;
                for (a = 0; a < l; a++) n = o[a], (h || n instanceof _ || (r = n.target === n.vars.onComplete) && i || e && !r) && (t ? n.totalTime(n._reversed ? 0 : n.totalDuration()) : n._enabled(!1, !1))
            }, v.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var i, s, r, n, a, o = x.tweenLookup;
                    if ("string" == typeof t && (t = y.selector(t) || t), b(t) && (t = m(t)), w(t))
                        for (n = t.length; - 1 < --n;) v.killChildTweensOf(t[n], e);
                    else {
                        for (r in i = [], o)
                            for (s = o[r].target.parentNode; s;) s === t && (i = i.concat(o[r].tweens)), s = s.parentNode;
                        for (a = i.length, n = 0; n < a; n++) e && i[n].totalTime(i[n].totalDuration()), i[n]._enabled(!1, !1)
                    }
                }
            };
            var r = function(t, e, i, s) {
                e = !1 !== e, i = !1 !== i;
                for (var r, n, a = u(s = !1 !== s), o = e && i && s, l = a.length; - 1 < --l;) n = a[l], (o || n instanceof _ || (r = n.target === n.vars.onComplete) && i || e && !r) && n.paused(t)
            };
            return v.pauseAll = function(t, e, i) {
                r(!0, t, e, i)
            }, v.resumeAll = function(t, e, i) {
                r(!1, t, e, i)
            }, v.globalTimeScale = function(t) {
                var e = s._rootTimeline,
                    i = y.ticker.time;
                return arguments.length ? (t = t || T, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = s._rootFramesTimeline, i = y.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = s._rootTimeline._timeScale = t, t) : e._timeScale
            }, t.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, t.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, t.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, t.duration = function(t) {
                return arguments.length ? s.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, v
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(_, u, f) {
            var c = function(t) {
                    u.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var e, i, s = this.vars;
                    for (i in s) e = s[i], m(e) && -1 !== e.join("").indexOf("{self}") && (s[i] = this._swapSelfInParams(e));
                    m(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                },
                d = 1e-10,
                t = f._internals,
                e = c._internals = {},
                p = t.isSelector,
                m = t.isArray,
                g = t.lazyTweens,
                y = t.lazyRender,
                a = _gsScope._gsDefine.globals,
                v = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                T = function(t, e, i) {
                    var s, r, n = t.cycle;
                    for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle
                },
                n = e.pauseCallback = function() {},
                x = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                i = c.prototype = new u;
            return c.version = "1.20.3", i.constructor = c, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(t, e, i, s) {
                var r = i.repeat && a.TweenMax || f;
                return e ? this.add(new r(t, e, i), s) : this.set(t, i, s)
            }, i.from = function(t, e, i, s) {
                return this.add((i.repeat && a.TweenMax || f).from(t, e, i), s)
            }, i.fromTo = function(t, e, i, s, r) {
                var n = s.repeat && a.TweenMax || f;
                return e ? this.add(n.fromTo(t, e, i, s), r) : this.set(t, s, r)
            }, i.staggerTo = function(t, e, i, s, r, n, a, o) {
                var l, h, _ = new c({
                        onComplete: n,
                        onCompleteParams: a,
                        callbackScope: o,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    u = i.cycle;
                for ("string" == typeof t && (t = f.selector(t) || t), p(t = t || []) && (t = x(t)), (s = s || 0) < 0 && ((t = x(t)).reverse(), s *= -1), h = 0; h < t.length; h++)(l = v(i)).startAt && (l.startAt = v(l.startAt), l.startAt.cycle && T(l.startAt, t, h)), u && (T(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), _.to(t[h], e, l, h * s);
                return this.add(_, r)
            }, i.staggerFrom = function(t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
            }, i.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
            }, i.call = function(t, e, i, s) {
                return this.add(f.delayedCall(0, t, e, i), s)
            }, i.set = function(t, e, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new f(t, 0, e), i)
            }, c.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var i, s, r, n, a = new c(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof f && r.target === r.vars.onComplete || ((s = r._startTime - r._delay) < 0 && (i = 1), a.add(r, s)), r = n;
                return o.add(a, 0), i && a.totalDuration(), a
            }, i.add = function(t, e, i, s) {
                var r, n, a, o, l, h;
                if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof _)) {
                    if (t instanceof Array || t && t.push && m(t)) {
                        for (i = i || "normal", s = s || 0, r = e, n = t.length, a = 0; a < n; a++) m(o = t[a]) && (o = new c({
                            tweens: o
                        })), this.add(o, r), "string" != typeof o && "function" != typeof o && ("sequence" === i ? r = o._startTime + o.totalDuration() / o._timeScale : "start" === i && (o._startTime -= o.delay())), r += s;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof t) return this.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = f.delayedCall(0, t)
                }
                if (u.prototype.add.call(this, t, e), t._time && t.render((this.rawTime() - t._startTime) * t._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (h = (l = this).rawTime() > t._startTime; l._timeline;) h && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function(t) {
                if (t instanceof _) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? _._rootFramesTimeline : _._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && m(t)) {
                    for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, i._remove = function(t, e) {
                return u.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, i.insert = i.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, i.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, i.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, i.addPause = function(t, e, i, s) {
                var r = f.delayedCall(0, n, i, s || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, i.removeLabel = function(t) {
                return delete this._labels[t], this
            }, i.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, i._parseTimeOrLabel = function(t, e, i, s) {
                var r, n;
                if (s instanceof _ && s.timeline === this) this.remove(s);
                else if (s && (s instanceof Array || s.push && m(s)))
                    for (n = s.length; - 1 < --n;) s[n] instanceof _ && s[n].timeline === this && this.remove(s[n]);
                if (r = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - r : 0, i);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = r);
                else {
                    if (-1 === (n = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = r + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(n - 1) + "1", 10) * Number(t.substr(n + 1)), t = 1 < n ? this._parseTimeOrLabel(t.substr(0, n - 1), 0, i) : r
                }
                return Number(t) + e
            }, i.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, i.stop = function() {
                return this.paused(!0)
            }, i.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, i.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, i.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, n, a, o, l, h, _ = this._time,
                    u = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._startTime,
                    c = this._timeScale,
                    p = this._paused;
                if (_ !== this._time && (t += this._time - _), u - 1e-7 <= t && 0 <= t) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", o = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || this._rawPrevTime === d) && this._rawPrevTime !== t && this._first && (o = !0, this._rawPrevTime > d && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : d, t = u + 1e-4;
                else if (t < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime !== d && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = r = !0, a = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (o = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : d, 0 === t && r)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                        t = 0, this._initted || (o = !0)
                    } else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (_ <= t)
                            for (s = this._first; s && s._startTime <= t && !l;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (l = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !l;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (l = s), s = s._prev;
                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== _ && this._first || i || o || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && 0 < t && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), _ <= (h = this._time))
                        for (s = this._first; s && (n = s._next, h === this._time && (!this._paused || p));)(s._active || s._startTime <= h && !s._paused && !s._gc) && (l === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n;
                    else
                        for (s = this._last; s && (n = s._prev, h === this._time && (!this._paused || p));) {
                            if (s._active || s._startTime <= _ && !s._paused && !s._gc) {
                                if (l === s) {
                                    for (l = s._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = n
                        }
                    this._onUpdate && (e || (g.length && y(), this._callback("onUpdate"))), a && (this._gc || (f === this._startTime || c !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (g.length && y(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                }
            }, i._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof c && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, i.getChildren = function(t, e, i, s) {
                s = s || -9999999999;
                for (var r = [], n = this._first, a = 0; n;) n._startTime < s || (n instanceof f ? !1 !== e && (r[a++] = n) : (!1 !== i && (r[a++] = n), !1 !== t && (a = (r = r.concat(n.getChildren(!0, e, i))).length))), n = n._next;
                return r
            }, i.getTweensOf = function(t, e) {
                var i, s, r = this._gc,
                    n = [],
                    a = 0;
                for (r && this._enabled(!0, !0), s = (i = f.getTweensOf(t)).length; - 1 < --s;)(i[s].timeline === this || e && this._contains(i[s])) && (n[a++] = i[s]);
                return r && this._enabled(!1, !0), n
            }, i.recent = function() {
                return this._recent
            }, i._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, i.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return this._uncache(!0)
            }, i._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; - 1 < --s;) i[s]._kill(t, e) && (r = !0);
                return r
            }, i.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return _.prototype.invalidate.call(this)
            }, i._enabled = function(t, e) {
                if (t === this._gc)
                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                return u.prototype._enabled.call(this, t, e)
            }, i.totalTime = function(t, e, i) {
                this._forcingPlayhead = !0;
                var s = _.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, s
            }, i.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), s < (i = r._startTime + r._totalDuration / r._timeScale) && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, i.paused = function(t) {
                if (!t)
                    for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return _.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === _._rootFramesTimeline
            }, i.rawTime = function(t) {
                return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, c
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, o, t) {
            var i = function(t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                S = 1e-10,
                s = o._internals,
                k = s.lazyTweens,
                R = s.lazyRender,
                l = _gsScope._gsDefine.globals,
                h = new t(null, null, 1, 0),
                r = i.prototype = new e;
            return r.constructor = i, r.kill()._gc = !1, i.version = "1.20.3", r.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, r.addCallback = function(t, e, i, s) {
                return this.add(o.delayedCall(0, t, i, s), e)
            }, r.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); - 1 < --s;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                return this
            }, r.removePause = function(t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, r.tweenTo = function(t, e) {
                e = e || {};
                var i, s, r, n = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    },
                    a = e.repeat && l.TweenMax || o;
                for (s in e) n[s] = e[s];
                return n.time = this._parseTimeOrLabel(t), i = Math.abs(Number(n.time) - this._time) / this._timeScale || .001, r = new a(this, i, n), n.onStart = function() {
                    r.target.paused(!0), r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
                }, r
            }, r.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var s = this.tweenTo(e, i);
                return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
            }, r.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, n, a, o, l, h, _, u = this._time,
                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                    c = this._duration,
                    p = this._totalTime,
                    d = this._startTime,
                    m = this._timeScale,
                    g = this._rawPrevTime,
                    y = this._paused,
                    v = this._cycle;
                if (u !== this._time && (t += this._time - u), f - 1e-7 <= t && 0 <= t) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", o = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || g < 0 || g === S) && g !== t && this._first && (o = !0, S < g && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : S, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = c) + 1e-4;
                else if (t < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== u || 0 === c && g !== S && (0 < g || t < 0 && 0 <= g) && !this._locked) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = r = !0, a = "onReverseComplete") : 0 <= g && this._first && (o = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = c || !e || t || this._rawPrevTime === t ? t : S, 0 === t && r)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                        t = 0, this._initted || (o = !0)
                    } else if (0 === c && g < 0 && (o = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = c + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = c - this._time), this._time > c ? t = (this._time = c) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if (u <= (t = this._time) || this._repeat && v !== this._cycle)
                        for (s = this._first; s && s._startTime <= t && !h;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (h = s), s = s._next;
                    else
                        for (s = this._last; s && s._startTime >= t && !h;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (h = s), s = s._prev;
                    h && h._startTime < c && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== v && !this._locked) {
                    var T = this._yoyo && 0 != (1 & v),
                        x = T === (this._yoyo && 0 != (1 & this._cycle)),
                        b = this._totalTime,
                        w = this._cycle,
                        P = this._rawPrevTime,
                        O = this._time;
                    if (this._totalTime = v * c, this._cycle < v ? T = !T : this._totalTime += c, this._time = u, this._rawPrevTime = 0 === c ? g - 1e-4 : g, this._cycle = v, this._locked = !0, u = T ? 0 : c, this.render(u, e, 0 === c), e || this._gc || this.vars.onRepeat && (this._cycle = w, this._locked = !1, this._callback("onRepeat")), u !== this._time) return;
                    if (x && (this._cycle = v, this._locked = !0, u = T ? c + 1e-4 : -1e-4, this.render(u, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = O, this._totalTime = b, this._cycle = w, this._rawPrevTime = P
                }
                if (this._time !== u && this._first || i || o || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== p && 0 < t && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), u <= (_ = this._time))
                        for (s = this._first; s && (n = s._next, _ === this._time && (!this._paused || y));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (h === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n;
                    else
                        for (s = this._last; s && (n = s._prev, _ === this._time && (!this._paused || y));) {
                            if (s._active || s._startTime <= u && !s._paused && !s._gc) {
                                if (h === s) {
                                    for (h = s._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                    h = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = n
                        }
                    this._onUpdate && (e || (k.length && R(), this._callback("onUpdate"))), a && (this._locked || this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (k.length && R(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, r.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var s, r, n = [],
                    a = this.getChildren(t, e, i),
                    o = 0,
                    l = a.length;
                for (s = 0; s < l; s++)(r = a[s]).isActive() && (n[o++] = r);
                return n
            }, r.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    s = i.length;
                for (e = 0; e < s; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, r.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, r.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, r.invalidate = function() {
                return this._locked = !1, e.prototype.invalidate.call(this)
            }, r.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, r.totalDuration = function(t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, r.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), w = 180 / Math.PI, x = [], b = [], P = [], g = {}, i = _gsScope._gsDefine.globals, y = function(t, e, i, s) {
            i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
        }, O = function(t, e, i, s) {
            var r = {
                    a: t
                },
                n = {},
                a = {},
                o = {
                    c: s
                },
                l = (t + e) / 2,
                h = (e + i) / 2,
                _ = (i + s) / 2,
                u = (l + h) / 2,
                f = (h + _) / 2,
                c = (f - u) / 8;
            return r.b = l + (t - l) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + f) / 2, a.b = f - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
        }, v = function(t, e, i, s, r) {
            var n, a, o, l, h, _, u, f, c, p, d, m, g, y = t.length - 1,
                v = 0,
                T = t[0].a;
            for (n = 0; n < y; n++) a = (h = t[v]).a, o = h.d, l = t[v + 1].d, r ? (d = x[n], g = ((m = b[n]) + d) * e * .25 / (s ? .5 : P[n] || .5), f = o - ((_ = o - (o - a) * (s ? .5 * e : 0 !== d ? g / d : 0)) + (((u = o + (l - o) * (s ? .5 * e : 0 !== m ? g / m : 0)) - _) * (3 * d / (d + m) + .5) / 4 || 0))) : f = o - ((_ = o - (o - a) * e * .5) + (u = o + (l - o) * e * .5)) / 2, _ += f, u += f, h.c = c = _, h.b = 0 !== n ? T : T = h.a + .6 * (h.c - h.a), h.da = o - a, h.ca = c - a, h.ba = T - a, i ? (p = O(a, T, c, o), t.splice(v, 1, p[0], p[1], p[2], p[3]), v += 4) : v++, T = u;
            (h = t[v]).b = T, h.c = T + .4 * (h.d - T), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = T - h.a, i && (p = O(h.a, T, h.c, h.d), t.splice(v, 1, p[0], p[1], p[2], p[3]))
        }, T = function(t, e, i, s) {
            var r, n, a, o, l, h, _ = [];
            if (s)
                for (n = (t = [s].concat(t)).length; - 1 < --n;) "string" == typeof(h = t[n][e]) && "=" === h.charAt(1) && (t[n][e] = s[e] + Number(h.charAt(0) + h.substr(2)));
            if ((r = t.length - 2) < 0) return _[0] = new y(t[0][e], 0, 0, t[0][e]), _;
            for (n = 0; n < r; n++) a = t[n][e], o = t[n + 1][e], _[n] = new y(a, 0, 0, o), i && (l = t[n + 2][e], x[n] = (x[n] || 0) + (o - a) * (o - a), b[n] = (b[n] || 0) + (l - o) * (l - o));
            return _[n] = new y(t[n][e], 0, 0, t[n + 1][e]), _
        }, c = function(t, e, i, s, r, n) {
            var a, o, l, h, _, u, f, c, p = {},
                d = [],
                m = n || t[0];
            for (o in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) d.push(o);
            if (1 < t.length) {
                for (c = t[t.length - 1], f = !0, a = d.length; - 1 < --a;)
                    if (o = d[a], .05 < Math.abs(m[o] - c[o])) {
                        f = !1;
                        break
                    }
                f && (t = t.concat(), n && t.unshift(n), t.push(t[1]), n = t[t.length - 3])
            }
            for (x.length = b.length = P.length = 0, a = d.length; - 1 < --a;) o = d[a], g[o] = -1 !== r.indexOf("," + o + ","), p[o] = T(t, o, g[o], n);
            for (a = x.length; - 1 < --a;) x[a] = Math.sqrt(x[a]), b[a] = Math.sqrt(b[a]);
            if (!s) {
                for (a = d.length; - 1 < --a;)
                    if (g[o])
                        for (u = (l = p[d[a]]).length - 1, h = 0; h < u; h++) _ = l[h + 1].da / b[h] + l[h].da / x[h] || 0, P[h] = (P[h] || 0) + _ * _;
                for (a = P.length; - 1 < --a;) P[a] = Math.sqrt(P[a])
            }
            for (a = d.length, h = i ? 4 : 1; - 1 < --a;) l = p[o = d[a]], v(l, e, i, s, g[o]), f && (l.splice(0, h), l.splice(l.length - h, h));
            return p
        }, p = function(t, e, i) {
            for (var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i, d = t.length; - 1 < --d;)
                for (n = (f = t[d]).a, a = f.d - n, o = f.c - n, l = f.b - n, s = r = 0, _ = 1; _ <= i; _++) s = r - (r = ((h = p * _) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h), e[c = d * i + _ - 1] = (e[c] || 0) + s * s
        }, m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, l = e.values || [],
                    h = {},
                    _ = l[0],
                    u = e.autoRotate || i.vars.orientToBezier;
                for (s in this._autoRotate = u ? u instanceof Array ? u : [
                        ["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]
                    ] : null, _) this._props.push(s);
                for (n = this._props.length; - 1 < --n;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function(t, e, i) {
                        var s, r, n, a, o, l, h, _, u, f, c, p = {},
                            d = "cubic" === (e = e || "soft") ? 3 : 2,
                            m = "soft" === e,
                            g = [];
                        if (m && i && (t = [i].concat(t)), null == t || t.length < d + 1) throw "invalid Bezier data";
                        for (u in t[0]) g.push(u);
                        for (l = g.length; - 1 < --l;) {
                            for (p[u = g[l]] = o = [], f = 0, _ = t.length, h = 0; h < _; h++) s = null == i ? t[h][u] : "string" == typeof(c = t[h][u]) && "=" === c.charAt(1) ? i[u] + Number(c.charAt(0) + c.substr(2)) : Number(c), m && 1 < h && h < _ - 1 && (o[f++] = (s + o[f - 2]) / 2), o[f++] = s;
                            for (_ = f - d + 1, h = f = 0; h < _; h += d) s = o[h], r = o[h + 1], n = o[h + 2], a = 2 === d ? 0 : o[h + 3], o[f++] = c = 3 === d ? new y(s, r, n, a) : new y(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            o.length = f
                        }
                        return p
                    }(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                    var f = function(t, e) {
                        var i, s, r, n, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            _ = (e = e >> 0 || 6) - 1,
                            u = [],
                            f = [];
                        for (i in t) p(t[i], a, e);
                        for (r = a.length, s = 0; s < r; s++) l += Math.sqrt(a[s]), f[n = s % e] = l, n === _ && (h += l, u[n = s / e >> 0] = f, o[n] = h, l = 0, f = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: u
                        }
                    }(this._beziers, this._timeRes);
                    this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (u = this._autoRotate)
                    for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), n = u.length; - 1 < --n;) {
                        for (a = 0; a < 3; a++) s = u[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = u[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, s, r, n, a, o, l, h, _, u = this._segCount,
                    f = this._func,
                    c = this._target,
                    p = t !== this._startRatio;
                if (this._timeRes) {
                    if (h = this._lengths, _ = this._curSeg, t *= this._length, s = this._li, t > this._l2 && s < u - 1) {
                        for (l = u - 1; s < l && (this._l2 = h[++s]) <= t;);
                        this._l1 = h[s - 1], this._li = s, this._curSeg = _ = this._segments[s], this._s2 = _[this._s1 = this._si = 0]
                    } else if (t < this._l1 && 0 < s) {
                        for (; 0 < s && (this._l1 = h[--s]) >= t;);
                        0 === s && t < this._l1 ? this._l1 = 0 : s++, this._l2 = h[s], this._li = s, this._curSeg = _ = this._segments[s], this._s1 = _[(this._si = _.length - 1) - 1] || 0, this._s2 = _[this._si]
                    }
                    if (e = s, t -= this._l1, s = this._si, t > this._s2 && s < _.length - 1) {
                        for (l = _.length - 1; s < l && (this._s2 = _[++s]) <= t;);
                        this._s1 = _[s - 1], this._si = s
                    } else if (t < this._s1 && 0 < s) {
                        for (; 0 < s && (this._s1 = _[--s]) >= t;);
                        0 === s && t < this._s1 ? this._s1 = 0 : s++, this._s2 = _[s], this._si = s
                    }
                    a = (s + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else a = (t - (e = t < 0 ? 0 : 1 <= t ? u - 1 : u * t >> 0) * (1 / u)) * u;
                for (i = 1 - a, s = this._props.length; - 1 < --s;) r = this._props[s], o = (a * a * (n = this._beziers[r][e]).da + 3 * i * (a * n.ca + i * n.ba)) * a + n.a, this._mod[r] && (o = this._mod[r](o, c)), f[r] ? c[r](o) : c[r] = o;
                if (this._autoRotate) {
                    var d, m, g, y, v, T, x, b = this._autoRotate;
                    for (s = b.length; - 1 < --s;) r = b[s][2], T = b[s][3] || 0, x = !0 === b[s][4] ? 1 : w, n = this._beziers[b[s][0]], d = this._beziers[b[s][1]], n && d && (n = n[e], d = d[e], m = n.a + (n.b - n.a) * a, m += ((y = n.b + (n.c - n.b) * a) - m) * a, y += (n.c + (n.d - n.c) * a - y) * a, g = d.a + (d.b - d.a) * a, g += ((v = d.b + (d.c - d.b) * a) - g) * a, v += (d.c + (d.d - d.c) * a - v) * a, o = p ? Math.atan2(v - g, y - m) * x + T : this._initialRotations[s], this._mod[r] && (o = this._mod[r](o, c)), f[r] ? c[r](o) : c[r] = o)
                }
            }
        }), s = m.prototype, m.bezierThrough = c, m.cubicToQuadratic = O, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
            return new y(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
            var t = i.CSSPlugin;
            if (t) {
                var e = t._internals,
                    c = e._parseToProxy,
                    p = e._setPluginRatio,
                    d = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, i, s, r, n) {
                        e instanceof Array && (e = {
                            values: e
                        }), n = new m;
                        var a, o, l, h = e.values,
                            _ = h.length - 1,
                            u = [],
                            f = {};
                        if (_ < 0) return r;
                        for (a = 0; a <= _; a++) l = c(t, h[a], s, r, n, _ !== a), u[a] = l.end;
                        for (o in e) f[o] = e[o];
                        return f.values = u, (r = new d(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = n, r.setRatio = p, 0 === f.autoRotate && (f.autoRotate = !0), !f.autoRotate || f.autoRotate instanceof Array || (a = !0 === f.autoRotate ? 0 : Number(f.autoRotate), f.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", a, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", a, !1]
                        ]), f.autoRotate && (s._transform || s._enableTransforms(!1), l.autoRotate = s._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), n._onInitTween(l.proxy, f, s._tween), r
                    }
                })
            }
        }, s._mod = function(t) {
            for (var e, i = this._overwriteProps, s = i.length; - 1 < --s;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
        }, s._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = s.length; - 1 < --i;) s[i] === e && s.splice(i, 1);
            if (s = this._autoRotate)
                for (i = s.length; - 1 < --i;) t[s[i][2]] && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(n, B) {
            var p, P, S, d, Y = function() {
                    n.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = Y.prototype.setRatio
                },
                h = _gsScope._gsDefine.globals,
                m = {},
                t = Y.prototype = new n("css");
            (t.constructor = Y).version = "1.20.3", Y.API = 2, Y.defaultTransformPerspective = 0, Y.defaultSkewType = "compensated", Y.defaultSmoothOrigin = !0, t = "px", Y.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };
            var k, g, y, j, v, O, R, A, e, i, C = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                D = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                M = /(?:\d|\-|\+|=|#|\.)*/g,
                F = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                a = /alpha\(opacity *=.+?\)/i,
                b = /^(rgb|hsl)/,
                o = /([A-Z])/g,
                l = /-([a-z])/gi,
                w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                u = function(t, e) {
                    return e.toUpperCase()
                },
                c = /(?:Left|Right|Width)/i,
                f = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                E = /,(?=[^\)]*(?:\(|$))/gi,
                I = /[\s,\(]/i,
                U = Math.PI / 180,
                V = 180 / Math.PI,
                X = {},
                s = {
                    style: {}
                },
                N = _gsScope.document || {
                    createElement: function() {
                        return s
                    }
                },
                L = function(t, e) {
                    return N.createElementNS ? N.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : N.createElement(t)
                },
                q = L("div"),
                W = L("img"),
                r = Y._internals = {
                    _specialProps: m
                },
                G = (_gsScope.navigator || {}).userAgent || "",
                Z = (e = G.indexOf("Android"), i = L("a"), y = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === e || 3 < parseFloat(G.substr(e + 8, 2))), v = y && parseFloat(G.substr(G.indexOf("Version/") + 8, 2)) < 6, j = -1 !== G.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (O = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                H = function(t) {
                    return F.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                $ = function(t) {
                    _gsScope.console && console.log(t)
                },
                Q = "",
                K = "",
                J = function(t, e) {
                    var i, s, r = (e = e || q).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; - 1 < --s && void 0 === r[i[s] + t];);
                    return 0 <= s ? (Q = "-" + (K = 3 === s ? "ms" : i[s]).toLowerCase() + "-", K + t) : null
                },
                tt = N.defaultView ? N.defaultView.getComputedStyle : function() {},
                et = Y.getStyle = function(t, e, i, s, r) {
                    var n;
                    return Z || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || tt(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(o, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : H(t)
                },
                it = r.convertToPixels = function(t, e, i, s, r) {
                    if ("px" === s || !s && "lineHeight" !== e) return i;
                    if ("auto" === s || !i) return 0;
                    var n, a, o, l = c.test(e),
                        h = t,
                        _ = q.style,
                        u = i < 0,
                        f = 1 === i;
                    if (u && (i = -i), f && (i *= 100), "lineHeight" !== e || s)
                        if ("%" === s && -1 !== e.indexOf("border")) n = i / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (_.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== s && h.appendChild && "v" !== s.charAt(0) && "rem" !== s) _[l ? "borderLeftWidth" : "borderTopWidth"] = i + s;
                            else {
                                if (h = t.parentNode || N.body, -1 !== et(h, "display").indexOf("flex") && (_.position = "absolute"), a = h._gsCache, o = B.ticker.frame, a && l && a.time === o) return a.width * i / 100;
                                _[l ? "width" : "height"] = i + s
                            }
                            h.appendChild(q), n = parseFloat(q[l ? "offsetWidth" : "offsetHeight"]), h.removeChild(q), l && "%" === s && !1 !== Y.cacheWidths && ((a = h._gsCache = h._gsCache || {}).time = o, a.width = n / i * 100), 0 !== n || r || (n = it(t, e, i, s, !0))
                        } else a = tt(t).lineHeight, t.style.lineHeight = i, n = parseFloat(tt(t).lineHeight), t.style.lineHeight = a;
                    return f && (n /= 100), u ? -n : n
                },
                st = r.calculateOffset = function(t, e, i) {
                    if ("absolute" !== et(t, "position", i)) return 0;
                    var s = "left" === e ? "Left" : "Top",
                        r = et(t, "margin" + s, i);
                    return t["offset" + s] - (it(t, e, parseFloat(r), r.replace(M, "")) || 0)
                },
                rt = function(t, e) {
                    var i, s, r, n = {};
                    if (e = e || tt(t, null))
                        if (i = e.length)
                            for (; - 1 < --i;)(-1 === (r = e[i]).indexOf("-transform") || Et === r) && (n[r.replace(l, u)] = e.getPropertyValue(r));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || zt === i) && (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(l, u)] = e[i]);
                    return Z || (n.opacity = H(t)), s = Zt(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Xt && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                },
                nt = function(t, e, i, s, r) {
                    var n, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(_, "") ? n : 0 : st(t, a), void 0 !== h[a] && (o = new Tt(h, a, h[a], o)));
                    if (s)
                        for (a in s) "className" !== a && (l[a] = s[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                at = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                lt = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                    if (t.getCTM && qt(t)) return t.getBBox()[e] || 0;
                    var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = at[e],
                        n = r.length;
                    for (i = i || tt(t, null); - 1 < --n;) s -= parseFloat(et(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(et(t, "border" + r[n] + "Width", i, !0)) || 0;
                    return s
                },
                ht = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i, s = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                        n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                    if (3 < s.length && !e) {
                        for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(ht(s[i]));
                        return t.join(",")
                    }
                    return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (2 < s.length ? " " + s[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(_, "")), e.oy = parseFloat(n.replace(_, "")), e.v = t), e || t
                },
                _t = function(t, e) {
                    return "function" == typeof t && (t = t(A, R)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                ut = function(t, e) {
                    return "function" == typeof t && (t = t(A, R)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                ft = function(t, e, i, s) {
                    var r, n, a, o, l;
                    return "function" == typeof t && (t = t(A, R)), null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : V) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && ((a %= r) !== a % 180 && (a = a < 0 ? a + r : a - r)), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % r - (a / r | 0) * r)), o = e + a), o < 1e-6 && -1e-6 < o && (o = 0), o
                },
                ct = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                pt = function(t, e, i) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                dt = Y.parseColor = function(t, e) {
                    var i, s, r, n, a, o, l, h, _, u, f;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (s = t.charAt(1)) + s + (r = t.charAt(2)) + r + (n = t.charAt(3)) + n), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = f = t.match(C), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(D)
                                } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < i.length && (i[3] = Number(i[3])), i[0] = pt(a + 1 / 3, s, r), i[1] = pt(a, s, r), i[2] = pt(a - 1 / 3, s, r);
                            else i = t.match(C) || ct.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        } else i = ct.black;
                    return e && !f && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, l = ((h = Math.max(s, r, n)) + (_ = Math.min(s, r, n))) / 2, h === _ ? a = o = 0 : (u = h - _, o = .5 < l ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (r < n ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                mt = function(t, e) {
                    var i, s, r, n = t.match(gt) || [],
                        a = 0,
                        o = "";
                    if (!n.length) return t;
                    for (i = 0; i < n.length; i++) s = n[i], a += (r = t.substr(a, t.indexOf(s, a) - a)).length + s.length, 3 === (s = dt(s, e)).length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                    return o + t.substr(a)
                },
                gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in ct) gt += "|" + t + "\\b";
            gt = new RegExp(gt + ")", "gi"), Y.colorStringFilter = function(t) {
                var e, i = t[0] + " " + t[1];
                gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), gt.lastIndex = 0
            }, B.defaultStringFilter || (B.defaultStringFilter = Y.colorStringFilter);
            var yt = function(t, e, n, a) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var o, l = e ? (t.match(gt) || [""])[0] : "",
                        h = t.split(l).join("").match(T) || [],
                        _ = t.substr(0, t.indexOf(h[0])),
                        u = ")" === t.charAt(t.length - 1) ? ")" : "",
                        f = -1 !== t.indexOf(" ") ? " " : ",",
                        c = h.length,
                        p = 0 < c ? h[0].replace(C, "") : "";
                    return c ? o = e ? function(t) {
                        var e, i, s, r;
                        if ("number" == typeof t) t += p;
                        else if (a && E.test(t)) {
                            for (r = t.replace(E, "|").split("|"), s = 0; s < r.length; s++) r[s] = o(r[s]);
                            return r.join(",")
                        }
                        if (e = (t.match(gt) || [l])[0], s = (i = t.split(e).join("").match(T) || []).length, c > s--)
                            for (; ++s < c;) i[s] = n ? i[(s - 1) / 2 | 0] : h[s];
                        return _ + i.join(f) + f + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, i, s;
                        if ("number" == typeof t) t += p;
                        else if (a && E.test(t)) {
                            for (i = t.replace(E, "|").split("|"), s = 0; s < i.length; s++) i[s] = o(i[s]);
                            return i.join(",")
                        }
                        if (s = (e = t.match(T) || []).length, c > s--)
                            for (; ++s < c;) e[s] = n ? e[(s - 1) / 2 | 0] : h[s];
                        return _ + e.join(f) + u
                    } : function(t) {
                        return t
                    }
                },
                vt = function(h) {
                    return h = h.split(","),
                        function(t, e, i, s, r, n, a) {
                            var o, l = (e + "").split(" ");
                            for (a = {}, o = 0; o < 4; o++) a[h[o]] = l[o] = l[o] || l[(o - 1) / 2 >> 0];
                            return s.parse(t, a, r, n)
                        }
                },
                Tt = (r._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t)
                        for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                    i[n] = r
                                }
                            } else i[n] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, s, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, s && ((s._prev = this)._next = s)
                }),
                xt = (r._parseToProxy = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u = s,
                        f = {},
                        c = {},
                        p = i._transform,
                        d = X;
                    for (i._transform = null, X = e, s = _ = i.parse(t, e, s, r), X = d, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                        if (s.type <= 1 && (c[o = s.p] = s.s + s.c, f[o] = s.s, n || (h = new Tt(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                            for (a = s.l; 0 < --a;) l = "xn" + a, c[o = s.p + "_" + l] = s.data[l], f[o] = s[l], n || (h = new Tt(s, l, o, h, s.rxp[l]));
                        s = s._next
                    }
                    return {
                        proxy: f,
                        end: c,
                        firstMPT: h,
                        pt: _
                    }
                }, r.CSSPropTween = function(t, e, i, s, r, n, a, o, l, h, _) {
                    this.t = t, this.p = e, this.s = i, this.c = s, this.n = a || e, t instanceof xt || d.push(this.n), this.r = o, this.type = n || 0, l && (this.pr = l, p = !0), this.b = void 0 === h ? i : h, this.e = void 0 === _ ? i + s : _, r && ((this._next = r)._prev = this)
                }),
                bt = function(t, e, i, s, r, n) {
                    var a = new xt(t, e, i, s - i, r, -1, n);
                    return a.b = i, a.e = a.xs0 = s, a
                },
                wt = Y.parseComplex = function(t, e, i, s, r, n, a, o, l, h) {
                    i = i || n || "", "function" == typeof s && (s = s(A, R)), a = new xt(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, s), s += "", r && gt.test(s + i) && (s = [i, s], Y.colorStringFilter(s), i = s[0], s = s[1]);
                    var _, u, f, c, p, d, m, g, y, v, T, x, b, w = i.split(", ").join(",").split(" "),
                        P = s.split(", ").join(",").split(" "),
                        O = w.length,
                        S = !1 !== k;
                    for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (w = w.join(" ").replace(E, ", ").split(" "), P = P.join(" ").replace(E, ", ").split(" ")) : (w = w.join(" ").split(",").join(", ").split(" "), P = P.join(" ").split(",").join(", ").split(" ")), O = w.length), O !== P.length && (O = (w = (n || "").split(" ")).length), a.plugin = l, a.setRatio = h, _ = gt.lastIndex = 0; _ < O; _++)
                        if (c = w[_], p = P[_], (g = parseFloat(c)) || 0 === g) a.appendXtra("", g, _t(p, g), p.replace(D, ""), S && -1 !== p.indexOf("px"), !0);
                        else if (r && gt.test(c)) x = ")" + ((x = p.indexOf(")") + 1) ? p.substr(x) : ""), b = -1 !== p.indexOf("hsl") && Z, v = p, c = dt(c, b), p = dt(p, b), (y = 6 < c.length + p.length) && !Z && 0 === p[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(P[_]).join("transparent")) : (Z || (y = !1), b ? a.appendXtra(v.substr(0, v.indexOf("hsl")) + (y ? "hsla(" : "hsl("), c[0], _t(p[0], c[0]), ",", !1, !0).appendXtra("", c[1], _t(p[1], c[1]), "%,", !1).appendXtra("", c[2], _t(p[2], c[2]), y ? "%," : "%" + x, !1) : a.appendXtra(v.substr(0, v.indexOf("rgb")) + (y ? "rgba(" : "rgb("), c[0], p[0] - c[0], ",", !0, !0).appendXtra("", c[1], p[1] - c[1], ",", !0).appendXtra("", c[2], p[2] - c[2], y ? "," : x, !0), y && (c = c.length < 4 ? 1 : c[3], a.appendXtra("", c, (p.length < 4 ? 1 : p[3]) - c, x, !1))), gt.lastIndex = 0;
                    else if (d = c.match(C)) {
                        if (!(m = p.match(D)) || m.length !== d.length) return a;
                        for (u = f = 0; u < d.length; u++) T = d[u], v = c.indexOf(T, f), a.appendXtra(c.substr(f, v - f), Number(T), _t(m[u], T), "", S && "px" === c.substr(v + T.length, 2), 0 === u), f = v + T.length;
                        a["xs" + a.l] += c.substr(f)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + p : p;
                    if (-1 !== s.indexOf("=") && a.data) {
                        for (x = a.xs0 + a.data.s, _ = 1; _ < a.l; _++) x += a["xs" + _] + a.data["xn" + _];
                        a.e = x + a["xs" + _]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                Pt = 9;
            for ((t = xt.prototype).l = t.pr = 0; 0 < --Pt;) t["xn" + Pt] = 0, t["xs" + Pt] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function(t, e, i, s, r, n) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", 0 < o ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new xt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = r)) : a["xs" + o] += e + (s || ""), a
            };
            var Ot = function(t, e) {
                    e = e || {}, this.p = e.prefix && J(t) || t, m[t] = m[this.p] = this, this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                St = r._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var s, r = t.split(","),
                        n = e.defaultValue;
                    for (i = i || [n], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new Ot(r[s], e)
                },
                kt = r._registerPluginProp = function(t) {
                    if (!m[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        St(t, {
                            parser: function(t, e, i, s, r, n, a) {
                                var o = h.com.greensock.plugins[l];
                                return o ? (o._cssRegister(), m[i].parse(t, e, i, s, r, n, a)) : ($("Error: " + l + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (t = Ot.prototype).parseComplex = function(t, e, i, s, r, n) {
                var a, o, l, h, _, u, f = this.keyword;
                if (this.multi && (E.test(i) || E.test(e) ? (o = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : f && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && ((_ = e.indexOf(f)) !== (u = i.indexOf(f)) && (-1 === u ? o[a] = o[a].split(f).join("") : -1 === _ && (o[a] += " " + f)));
                    e = o.join(", "), i = l.join(", ")
                }
                return wt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
            }, t.parse = function(t, e, i, s, r, n, a) {
                return this.parseComplex(t.style, this.format(et(t, this.p, S, !1, this.dflt)), this.format(e), r, n)
            }, Y.registerSpecialProp = function(t, l, h) {
                St(t, {
                    parser: function(t, e, i, s, r, n, a) {
                        var o = new xt(t, i, 0, 0, r, 2, i, !1, h);
                        return o.plugin = n, o.setRatio = l(t, e, s._tween, i), o
                    },
                    priority: h
                })
            }, Y.useSVGTransformAttr = !0;
            var Rt, At, Ct, Dt, Mt, Ft = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                zt = J("transform"),
                Et = Q + "transform",
                It = J("transformOrigin"),
                Xt = null !== J("perspective"),
                Nt = r.Transform = function() {
                    this.perspective = parseFloat(Y.defaultTransformPerspective) || 0, this.force3D = !(!1 === Y.defaultForce3D || !Xt) && (Y.defaultForce3D || "auto")
                },
                Lt = _gsScope.SVGElement,
                Bt = function(t, e, i) {
                    var s, r = N.createElementNS("http://www.w3.org/2000/svg", t),
                        n = /([a-z])([A-Z])/g;
                    for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                    return e.appendChild(r), r
                },
                Yt = N.documentElement || {},
                jt = (Mt = O || /Android/i.test(G) && !_gsScope.chrome, N.createElementNS && !Mt && (At = Bt("svg", Yt), Dt = (Ct = Bt("rect", At, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ct.style[It] = "50% 50%", Ct.style[zt] = "scaleX(0.5)", Mt = Dt === Ct.getBoundingClientRect().width && !(j && Xt), Yt.removeChild(At)), Mt),
                Ut = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, f, c, p, d, m, g, y, v, T = t._gsTransform,
                        x = Gt(t, !0);
                    T && (y = T.xOrigin, v = T.yOrigin), (!s || (a = s.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), a = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = h = parseFloat(a[0]), i.yOrigin = _ = parseFloat(a[1]), s && x !== Wt && (u = x[0], f = x[1], c = x[2], p = x[3], d = x[4], m = x[5], (g = u * p - f * c) && (o = h * (p / g) + _ * (-c / g) + (c * m - p * d) / g, l = h * (-f / g) + _ * (u / g) - (u * m - f * d) / g, h = i.xOrigin = a[0] = o, _ = i.yOrigin = a[1] = l)), T && (n && (i.xOffset = T.xOffset, i.yOffset = T.yOffset, T = i), r || !1 !== r && !1 !== Y.defaultSmoothOrigin ? (o = h - y, l = _ - v, T.xOffset += o * x[0] + l * x[2] - o, T.yOffset += o * x[1] + l * x[3] - l) : T.xOffset = T.yOffset = 0), n || t.setAttribute("data-svg-origin", a.join(" "))
                },
                Vt = function(t) {
                    var e, i = L("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        s = this.parentNode,
                        r = this.nextSibling,
                        n = this.style.cssText;
                    if (Yt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Vt
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? s.insertBefore(this, r) : s.appendChild(this), Yt.removeChild(i), this.style.cssText = n, e
                },
                qt = function(t) {
                    return !(!Lt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return Vt.call(e, !0)
                        }
                    }(t))
                },
                Wt = [1, 0, 0, 1, 0, 0],
                Gt = function(t, e) {
                    var i, s, r, n, a, o, l = t._gsTransform || new Nt,
                        h = t.style;
                    if (zt ? s = et(t, Et, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match(f)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !zt || !(o = !tt(t) || "none" === tt(t).display) && t.parentNode || (o && (n = h.display, h.display = "block"), t.parentNode || (a = 1, Yt.appendChild(t)), i = !(s = et(t, Et, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? h.display = n : o && Kt(h, "display"), a && Yt.removeChild(t)), (l.svg || t.getCTM && qt(t)) && (i && -1 !== (h[zt] + "").indexOf("matrix") && (s = h[zt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Wt;
                    for (r = (s || "").match(C) || [], Pt = r.length; - 1 < --Pt;) n = Number(r[Pt]), r[Pt] = (a = n - (n |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
                    return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Zt = r.getTransform = function(t, e, i, s) {
                    if (t._gsTransform && i && !s) return t._gsTransform;
                    var r, n, a, o, l, h, _ = i && t._gsTransform || new Nt,
                        u = _.scaleX < 0,
                        f = Xt && (parseFloat(et(t, It, e, !1, "0 0 0").split(" ")[2]) || _.zOrigin) || 0,
                        c = parseFloat(Y.defaultTransformPerspective) || 0;
                    if (_.svg = !(!t.getCTM || !qt(t)), _.svg && (Ut(t, et(t, It, e, !1, "50% 50%") + "", _, t.getAttribute("data-svg-origin")), Rt = Y.useSVGTransformAttr || jt), (r = Gt(t)) !== Wt) {
                        if (16 === r.length) {
                            var p, d, m, g, y, v = r[0],
                                T = r[1],
                                x = r[2],
                                b = r[3],
                                w = r[4],
                                P = r[5],
                                O = r[6],
                                S = r[7],
                                k = r[8],
                                R = r[9],
                                A = r[10],
                                C = r[12],
                                D = r[13],
                                M = r[14],
                                F = r[11],
                                z = Math.atan2(O, A);
                            _.zOrigin && (C = k * (M = -_.zOrigin) - r[12], D = R * M - r[13], M = A * M + _.zOrigin - r[14]), _.rotationX = z * V, z && (p = w * (g = Math.cos(-z)) + k * (y = Math.sin(-z)), d = P * g + R * y, m = O * g + A * y, k = w * -y + k * g, R = P * -y + R * g, A = O * -y + A * g, F = S * -y + F * g, w = p, P = d, O = m), z = Math.atan2(-x, A), _.rotationY = z * V, z && (d = T * (g = Math.cos(-z)) - R * (y = Math.sin(-z)), m = x * g - A * y, R = T * y + R * g, A = x * y + A * g, F = b * y + F * g, v = p = v * g - k * y, T = d, x = m), z = Math.atan2(T, v), _.rotation = z * V, z && (p = v * (g = Math.cos(z)) + T * (y = Math.sin(z)), d = w * g + P * y, m = k * g + R * y, T = T * g - v * y, P = P * g - w * y, R = R * g - k * y, v = p, w = d, k = m), _.rotationX && 359.9 < Math.abs(_.rotationX) + Math.abs(_.rotation) && (_.rotationX = _.rotation = 0, _.rotationY = 180 - _.rotationY), z = Math.atan2(w, P), _.scaleX = (1e5 * Math.sqrt(v * v + T * T + x * x) + .5 | 0) / 1e5, _.scaleY = (1e5 * Math.sqrt(P * P + O * O) + .5 | 0) / 1e5, _.scaleZ = (1e5 * Math.sqrt(k * k + R * R + A * A) + .5 | 0) / 1e5, v /= _.scaleX, w /= _.scaleY, T /= _.scaleX, P /= _.scaleY, 2e-5 < Math.abs(z) ? (_.skewX = z * V, w = 0, "simple" !== _.skewType && (_.scaleY *= 1 / Math.cos(z))) : _.skewX = 0, _.perspective = F ? 1 / (F < 0 ? -F : F) : 0, _.x = C, _.y = D, _.z = M, _.svg && (_.x -= _.xOrigin - (_.xOrigin * v - _.yOrigin * w), _.y -= _.yOrigin - (_.yOrigin * T - _.xOrigin * P))
                        } else if (!Xt || s || !r.length || _.x !== r[4] || _.y !== r[5] || !_.rotationX && !_.rotationY) {
                            var E = 6 <= r.length,
                                I = E ? r[0] : 1,
                                X = r[1] || 0,
                                N = r[2] || 0,
                                L = E ? r[3] : 1;
                            _.x = r[4] || 0, _.y = r[5] || 0, a = Math.sqrt(I * I + X * X), o = Math.sqrt(L * L + N * N), l = I || X ? Math.atan2(X, I) * V : _.rotation || 0, h = N || L ? Math.atan2(N, L) * V + l : _.skewX || 0, _.scaleX = a, _.scaleY = o, _.rotation = l, _.skewX = h, Xt && (_.rotationX = _.rotationY = _.z = 0, _.perspective = c, _.scaleZ = 1), _.svg && (_.x -= _.xOrigin - (_.xOrigin * I + _.yOrigin * N), _.y -= _.yOrigin - (_.xOrigin * X + _.yOrigin * L))
                        }
                        for (n in 90 < Math.abs(_.skewX) && Math.abs(_.skewX) < 270 && (u ? (_.scaleX *= -1, _.skewX += _.rotation <= 0 ? 180 : -180, _.rotation += _.rotation <= 0 ? 180 : -180) : (_.scaleY *= -1, _.skewX += _.skewX <= 0 ? 180 : -180)), _.zOrigin = f, _) _[n] < 2e-5 && -2e-5 < _[n] && (_[n] = 0)
                    }
                    return i && ((t._gsTransform = _).svg && (Rt && t.style[zt] ? B.delayedCall(.001, function() {
                        Kt(t.style, zt)
                    }) : !Rt && t.getAttribute("transform") && B.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), _
                },
                Ht = function(t) {
                    var e, i, s = this.data,
                        r = -s.rotation * U,
                        n = r + s.skewX * U,
                        a = 1e5,
                        o = (Math.cos(r) * s.scaleX * a | 0) / a,
                        l = (Math.sin(r) * s.scaleX * a | 0) / a,
                        h = (Math.sin(n) * -s.scaleY * a | 0) / a,
                        _ = (Math.cos(n) * s.scaleY * a | 0) / a,
                        u = this.t.style,
                        f = this.t.currentStyle;
                    if (f) {
                        i = l, l = -h, h = -i, e = f.filter, u.filter = "";
                        var c, p, d = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            g = "absolute" !== f.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                            v = s.x + d * s.xPercent / 100,
                            T = s.y + m * s.yPercent / 100;
                        if (null != s.ox && (v += (c = (s.oxp ? d * s.ox * .01 : s.ox) - d / 2) - (c * o + (p = (s.oyp ? m * s.oy * .01 : s.oy) - m / 2) * l), T += p - (c * h + p * _)), g ? y += ", Dx=" + ((c = d / 2) - (c * o + (p = m / 2) * l) + v) + ", Dy=" + (p - (c * h + p * _) + T) + ")" : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(z, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (g && -1 === y.indexOf("Dx=0, Dy=0") || F.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
                            var x, b, w, P = O < 8 ? 1 : -1;
                            for (c = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((o < 0 ? -o : o) * d + (l < 0 ? -l : l) * m)) / 2 + v), s.ieOffsetY = Math.round((m - ((_ < 0 ? -_ : _) * m + (h < 0 ? -h : h) * d)) / 2 + T), Pt = 0; Pt < 4; Pt++) w = (i = -1 !== (x = f[b = ot[Pt]]).indexOf("px") ? parseFloat(x) : it(this.t, b, parseFloat(x), x.replace(M, "")) || 0) !== s[b] ? Pt < 2 ? -s.ieOffsetX : -s.ieOffsetY : Pt < 2 ? c - s.ieOffsetX : p - s.ieOffsetY, u[b] = (s[b] = Math.round(i - w * (0 === Pt || 2 === Pt ? 1 : P))) + "px"
                        }
                    }
                },
                $t = r.set3DTransformRatio = r.setTransformRatio = function(t) {
                    var e, i, s, r, n, a, o, l, h, _, u, f, c, p, d, m, g, y, v, T, x, b, w, P = this.data,
                        O = this.t.style,
                        S = P.rotation,
                        k = P.rotationX,
                        R = P.rotationY,
                        A = P.scaleX,
                        C = P.scaleY,
                        D = P.scaleZ,
                        M = P.x,
                        F = P.y,
                        z = P.z,
                        E = P.svg,
                        I = P.perspective,
                        X = P.force3D,
                        N = P.skewY,
                        L = P.skewX;
                    if (N && (L += N, S += N), !((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || z || I || R || k || 1 !== D) || Rt && E || !Xt) S || L || E ? (S *= U, b = L * U, w = 1e5, i = Math.cos(S) * A, n = Math.sin(S) * A, s = Math.sin(S - b) * -C, a = Math.cos(S - b) * C, b && "simple" === P.skewType && (e = Math.tan(b - N * U), s *= e = Math.sqrt(1 + e * e), a *= e, N && (e = Math.tan(N * U), i *= e = Math.sqrt(1 + e * e), n *= e)), E && (M += P.xOrigin - (P.xOrigin * i + P.yOrigin * s) + P.xOffset, F += P.yOrigin - (P.xOrigin * n + P.yOrigin * a) + P.yOffset, Rt && (P.xPercent || P.yPercent) && (d = this.t.getBBox(), M += .01 * P.xPercent * d.width, F += .01 * P.yPercent * d.height), M < (d = 1e-6) && -d < M && (M = 0), F < d && -d < F && (F = 0)), v = (i * w | 0) / w + "," + (n * w | 0) / w + "," + (s * w | 0) / w + "," + (a * w | 0) / w + "," + M + "," + F + ")", E && Rt ? this.t.setAttribute("transform", "matrix(" + v) : O[zt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + v) : O[zt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + C + "," + M + "," + F + ")";
                    else {
                        if (j && (A < (d = 1e-4) && -d < A && (A = D = 2e-5), C < d && -d < C && (C = D = 2e-5), !I || P.z || P.rotationX || P.rotationY || (I = 0)), S || L) S *= U, m = i = Math.cos(S), g = n = Math.sin(S), L && (S -= L * U, m = Math.cos(S), g = Math.sin(S), "simple" === P.skewType && (e = Math.tan((L - N) * U), m *= e = Math.sqrt(1 + e * e), g *= e, P.skewY && (e = Math.tan(N * U), i *= e = Math.sqrt(1 + e * e), n *= e))), s = -g, a = m;
                        else {
                            if (!(R || k || 1 !== D || I || E)) return void(O[zt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + F + "px," + z + "px)" + (1 !== A || 1 !== C ? " scale(" + A + "," + C + ")" : ""));
                            i = a = 1, s = n = 0
                        }
                        _ = 1, r = o = l = h = u = f = 0, c = I ? -1 / I : 0, p = P.zOrigin, d = 1e-6, T = ",", x = "0", (S = R * U) && (m = Math.cos(S), u = c * (l = -(g = Math.sin(S))), r = i * g, o = n * g, c *= _ = m, i *= m, n *= m), (S = k * U) && (e = s * (m = Math.cos(S)) + r * (g = Math.sin(S)), y = a * m + o * g, h = _ * g, f = c * g, r = s * -g + r * m, o = a * -g + o * m, _ *= m, c *= m, s = e, a = y), 1 !== D && (r *= D, o *= D, _ *= D, c *= D), 1 !== C && (s *= C, a *= C, h *= C, f *= C), 1 !== A && (i *= A, n *= A, l *= A, u *= A), (p || E) && (p && (M += r * -p, F += o * -p, z += _ * -p + p), E && (M += P.xOrigin - (P.xOrigin * i + P.yOrigin * s) + P.xOffset, F += P.yOrigin - (P.xOrigin * n + P.yOrigin * a) + P.yOffset), M < d && -d < M && (M = x), F < d && -d < F && (F = x), z < d && -d < z && (z = 0)), v = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", v += (i < d && -d < i ? x : i) + T + (n < d && -d < n ? x : n) + T + (l < d && -d < l ? x : l), v += T + (u < d && -d < u ? x : u) + T + (s < d && -d < s ? x : s) + T + (a < d && -d < a ? x : a), k || R || 1 !== D ? (v += T + (h < d && -d < h ? x : h) + T + (f < d && -d < f ? x : f) + T + (r < d && -d < r ? x : r), v += T + (o < d && -d < o ? x : o) + T + (_ < d && -d < _ ? x : _) + T + (c < d && -d < c ? x : c) + T) : v += ",0,0,0,0,1,0,", v += M + T + F + T + z + T + (I ? 1 + -z / I : 1) + ")", O[zt] = v
                    }
                };
            (t = Nt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, s, r, n, a) {
                    if (s._lastParsedTransform === a) return r;
                    var o, l = (s._lastParsedTransform = a).scale && "function" == typeof a.scale ? a.scale : 0;
                    "function" == typeof a[i] && (o = a[i], a[i] = e), l && (a.scale = l(A, t));
                    var h, _, u, f, c, p, d, m, g, y = t._gsTransform,
                        v = t.style,
                        T = Ft.length,
                        x = a,
                        b = {},
                        w = "transformOrigin",
                        P = Zt(t, S, !0, x.parseTransform),
                        O = x.transform && ("function" == typeof x.transform ? x.transform(A, R) : x.transform);
                    if (P.skewType = x.skewType || P.skewType || Y.defaultSkewType, s._transform = P, O && "string" == typeof O && zt)(_ = q.style)[zt] = O, _.display = "block", _.position = "absolute", N.body.appendChild(q), h = Zt(q, null, !1), "simple" === P.skewType && (h.scaleY *= Math.cos(h.skewX * U)), P.svg && (p = P.xOrigin, d = P.yOrigin, h.x -= P.xOffset, h.y -= P.yOffset, (x.transformOrigin || x.svgOrigin) && (O = {}, Ut(t, ht(x.transformOrigin), O, x.svgOrigin, x.smoothOrigin, !0), p = O.xOrigin, d = O.yOrigin, h.x -= O.xOffset - P.xOffset, h.y -= O.yOffset - P.yOffset), (p || d) && (m = Gt(q, !0), h.x -= p - (p * m[0] + d * m[2]), h.y -= d - (p * m[1] + d * m[3]))), N.body.removeChild(q), h.perspective || (h.perspective = P.perspective), null != x.xPercent && (h.xPercent = ut(x.xPercent, P.xPercent)), null != x.yPercent && (h.yPercent = ut(x.yPercent, P.yPercent));
                    else if ("object" == typeof x) {
                        if (h = {
                                scaleX: ut(null != x.scaleX ? x.scaleX : x.scale, P.scaleX),
                                scaleY: ut(null != x.scaleY ? x.scaleY : x.scale, P.scaleY),
                                scaleZ: ut(x.scaleZ, P.scaleZ),
                                x: ut(x.x, P.x),
                                y: ut(x.y, P.y),
                                z: ut(x.z, P.z),
                                xPercent: ut(x.xPercent, P.xPercent),
                                yPercent: ut(x.yPercent, P.yPercent),
                                perspective: ut(x.transformPerspective, P.perspective)
                            }, null != (c = x.directionalRotation))
                            if ("object" == typeof c)
                                for (_ in c) x[_] = c[_];
                            else x.rotation = c;
                            "string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0, h.xPercent = ut(x.x, P.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0, h.yPercent = ut(x.y, P.yPercent)), h.rotation = ft("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : P.rotation, P.rotation, "rotation", b), Xt && (h.rotationX = ft("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", b), h.rotationY = ft("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", b)), h.skewX = ft(x.skewX, P.skewX), h.skewY = ft(x.skewY, P.skewY)
                    }
                    for (Xt && null != x.force3D && (P.force3D = x.force3D, f = !0), (u = P.force3D || P.z || P.rotationX || P.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == x.scale || (h.scaleZ = 1); - 1 < --T;)(1e-6 < (O = h[g = Ft[T]] - P[g]) || O < -1e-6 || null != x[g] || null != X[g]) && (f = !0, r = new xt(P, g, P[g], O, r), g in b && (r.e = b[g]), r.xs0 = 0, r.plugin = n, s._overwriteProps.push(r.n));
                    return O = x.transformOrigin, P.svg && (O || x.svgOrigin) && (p = P.xOffset, d = P.yOffset, Ut(t, ht(O), h, x.svgOrigin, x.smoothOrigin), r = bt(P, "xOrigin", (y ? P : h).xOrigin, h.xOrigin, r, w), r = bt(P, "yOrigin", (y ? P : h).yOrigin, h.yOrigin, r, w), (p !== P.xOffset || d !== P.yOffset) && (r = bt(P, "xOffset", y ? p : P.xOffset, P.xOffset, r, w), r = bt(P, "yOffset", y ? d : P.yOffset, P.yOffset, r, w)), O = "0px 0px"), (O || Xt && u && P.zOrigin) && (zt ? (f = !0, g = It, O = (O || et(t, g, S, !1, "50% 50%")) + "", (r = new xt(v, g, 0, 0, r, -1, w)).b = v[g], r.plugin = n, Xt ? (_ = P.zOrigin, O = O.split(" "), P.zOrigin = (2 < O.length && (0 === _ || "0px" !== O[2]) ? parseFloat(O[2]) : _) || 0, r.xs0 = r.e = O[0] + " " + (O[1] || "50%") + " 0px", (r = new xt(P, "zOrigin", 0, 0, r, -1, r.n)).b = _, r.xs0 = r.e = P.zOrigin) : r.xs0 = r.e = O) : ht(O + "", P)), f && (s._transformType = P.svg && Rt || !u && 3 !== this._transformType ? 2 : 3), o && (a[i] = o), l && (a.scale = l), r
                },
                prefix: !0
            }), St("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), St("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, s, r, n) {
                    e = this.format(e);
                    var a, o, l, h, _, u, f, c, p, d, m, g, y, v, T, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        w = t.style;
                    for (p = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), a = e.split(" "), o = 0; o < b.length; o++) this.p.indexOf("border") && (b[o] = J(b[o])), -1 !== (_ = h = et(t, b[o], S, !1, "0px")).indexOf(" ") && (_ = (h = _.split(" "))[0], h = h[1]), u = l = a[o], f = parseFloat(_), g = _.substr((f + "").length), (y = "=" === u.charAt(1)) ? (c = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), c *= parseFloat(u), m = u.substr((c + "").length - (c < 0 ? 1 : 0)) || "") : (c = parseFloat(u), m = u.substr((c + "").length)), "" === m && (m = P[i] || g), m !== g && (v = it(t, "borderLeft", f, g), T = it(t, "borderTop", f, g), "%" === m ? (_ = v / p * 100 + "%", h = T / d * 100 + "%") : "em" === m ? (_ = v / (x = it(t, "borderLeft", 1, "em")) + "em", h = T / x + "em") : (_ = v + "px", h = T + "px"), y && (u = parseFloat(_) + c + m, l = parseFloat(h) + c + m)), r = wt(w, b[o], _ + " " + h, u + " " + l, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: yt("0px 0px 0px 0px", !1, !0)
            }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, s, r, n) {
                    return wt(t.style, i, this.format(et(t, i, S, !1, "0px 0px")), this.format(e), !1, "0px", r)
                },
                prefix: !0,
                formatter: yt("0px 0px", !1, !0)
            }), St("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, f = "background-position",
                        c = S || tt(t, null),
                        p = this.format((c ? O ? c.getPropertyValue(f + "-x") + " " + c.getPropertyValue(f + "-y") : c.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        d = this.format(e);
                    if (-1 !== p.indexOf("%") != (-1 !== d.indexOf("%")) && d.split(",").length < 2 && ((u = et(t, "backgroundImage").replace(w, "")) && "none" !== u)) {
                        for (a = p.split(" "), o = d.split(" "), W.setAttribute("src", u), l = 2; - 1 < --l;)(h = -1 !== (p = a[l]).indexOf("%")) !== (-1 !== o[l].indexOf("%")) && (_ = 0 === l ? t.offsetWidth - W.width : t.offsetHeight - W.height, a[l] = h ? parseFloat(p) / 100 * _ + "px" : parseFloat(p) / _ * 100 + "%");
                        p = a.join(" ")
                    }
                    return this.parseComplex(t.style, p, d, r, n)
                },
                formatter: ht
            }), St("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return ht(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
                }
            }), St("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), St("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), St("transformStyle", {
                prefix: !0
            }), St("backfaceVisibility", {
                prefix: !0
            }), St("userSelect", {
                prefix: !0
            }), St("margin", {
                parser: vt("marginTop,marginRight,marginBottom,marginLeft")
            }), St("padding", {
                parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), St("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, s, r, n) {
                    var a, o, l;
                    return O < 9 ? (o = t.currentStyle, l = O < 8 ? " " : ",", a = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")", e = this.format(e).split(",").join(l)) : (a = this.format(et(t, this.p, S, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, n)
                }
            }), St("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), St("autoRound,strictUnits", {
                parser: function(t, e, i, s, r) {
                    return r
                }
            }), St("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, s, r, n) {
                    var a = et(t, "borderTopWidth", S, !1, "0px"),
                        o = this.format(e).split(" "),
                        l = o[0].replace(M, "");
                    return "px" !== l && (a = parseFloat(a) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(a + " " + et(t, "borderTopStyle", S, !1, "solid") + " " + et(t, "borderTopColor", S, !1, "#000")), o.join(" "), r, n)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
                }
            }), St("borderWidth", {
                parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), St("float,cssFloat,styleFloat", {
                parser: function(t, e, i, s, r, n) {
                    var a = t.style,
                        o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new xt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e)
                }
            });
            var Qt = function(t) {
                var e, i = this.t,
                    s = i.filter || et(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !et(this.data, "filter")) : (i.filter = s.replace(a, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(F, "opacity=" + r))
            };
            St("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, s, r, n) {
                    var a = parseFloat(et(t, "opacity", S, !1, "1")),
                        o = t.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), l && 1 === a && "hidden" === et(t, "visibility", S) && 0 !== e && (a = 0), Z ? r = new xt(o, "opacity", a, e - a, r) : ((r = new xt(o, "opacity", 100 * a, 100 * (e - a), r)).xn1 = l ? 1 : 0, o.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = n, r.setRatio = Qt), l && ((r = new xt(o, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                }
            });
            var Kt = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(o, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Jt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Kt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            St("className", {
                parser: function(t, e, i, s, r, n, a) {
                    var o, l, h, _, u, f = t.getAttribute("class") || "",
                        c = t.style.cssText;
                    if ((r = s._classNamePT = new xt(t, i, 0, 0, r, 2)).setRatio = Jt, r.pr = -11, p = !0, r.b = f, l = rt(t, S), h = t._gsClassPT) {
                        for (_ = {}, u = h.data; u;) _[u.p] = 1, u = u._next;
                        h.setRatio(1)
                    }
                    return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), o = nt(t, l, rt(t), a, _), t.setAttribute("class", f), r.data = o.firstMPT, t.style.cssText = c, r.xfirst = s.parse(t, o.difs, r, n)
                }
            });
            var te = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, r, n, a = this.t.style,
                        o = m.transform.parse;
                    if ("all" === this.e) r = !(a.cssText = "");
                    else
                        for (s = (e = this.e.split(" ").join("").split(",")).length; - 1 < --s;) i = e[s], m[i] && (m[i].parse === o ? r = !0 : i = "transformOrigin" === i ? It : m[i].p), Kt(a, i);
                    r && (Kt(a, zt), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (St("clearProps", {
                    parser: function(t, e, i, s, r) {
                        return (r = new xt(t, i, 0, 0, r, 2)).setRatio = te, r.e = e, r.pr = -10, r.data = s._tween, p = !0, r
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), Pt = t.length; Pt--;) kt(t[Pt]);
            (t = Y.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function(t, e, i, s) {
                if (!t.nodeType) return !1;
                this._target = R = t, this._tween = i, this._vars = e, A = s, k = e.autoRound, p = !1, P = e.suffixMap || Y.suffixMap, S = tt(t, ""), d = this._overwriteProps;
                var r, n, a, o, l, h, _, u, f, c = t.style;
                if (g && "" === c.zIndex && (("auto" === (r = et(t, "zIndex", S)) || "" === r) && this._addLazySet(c, "zIndex", 0)), "string" == typeof e && (o = c.cssText, r = rt(t, S), c.cssText = o + ";" + e, r = nt(t, r, rt(t)).difs, !Z && x.test(e) && (r.opacity = parseFloat(RegExp.$1)), e = r, c.cssText = o), e.className ? this._firstPT = n = m.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = n = this.parse(t, e, null), this._transformType) {
                    for (f = 3 === this._transformType, zt ? y && (g = !0, "" === c.zIndex && (("auto" === (_ = et(t, "zIndex", S)) || "" === _) && this._addLazySet(c, "zIndex", 0)), v && this._addLazySet(c, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (f ? "visible" : "hidden"))) : c.zoom = 1, a = n; a && a._next;) a = a._next;
                    u = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(u, null, a), u.setRatio = zt ? $t : Ht, u.data = this._transform || Zt(t, S, !0), u.tween = i, u.pr = -1, d.pop()
                }
                if (p) {
                    for (; n;) {
                        for (h = n._next, a = o; a && a.pr > n.pr;) a = a._next;
                        (n._prev = a ? a._prev : l) ? n._prev._next = n: o = n, (n._next = a) ? a._prev = n : l = n, n = h
                    }
                    this._firstPT = o
                }
                return !0
            }, t.parse = function(t, e, i, s) {
                var r, n, a, o, l, h, _, u, f, c, p = t.style;
                for (r in e) {
                    if ("function" == typeof(h = e[r]) && (h = h(A, R)), n = m[r]) i = n.parse(t, h, r, this, i, s, e);
                    else {
                        if ("--" === r.substr(0, 2)) {
                            this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(r) + "", h + "", r, !1, r);
                            continue
                        }
                        l = et(t, r, S) + "", f = "string" == typeof h, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || f && b.test(h) ? (f || (h = (3 < (h = dt(h)).length ? "rgba(" : "rgb(") + h.join(",") + ")"), i = wt(p, r, l, h, !0, "transparent", i, 0, s)) : f && I.test(h) ? i = wt(p, r, l, h, !0, null, i, 0, s) : (_ = (a = parseFloat(l)) || 0 === a ? l.substr((a + "").length) : "", ("" === l || "auto" === l) && ("width" === r || "height" === r ? (a = lt(t, r, S), _ = "px") : "left" === r || "top" === r ? (a = st(t, r, S), _ = "px") : (a = "opacity" !== r ? 0 : 1, _ = "")), (c = f && "=" === h.charAt(1)) ? (o = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), o *= parseFloat(h), u = h.replace(M, "")) : (o = parseFloat(h), u = f ? h.replace(M, "") : ""), "" === u && (u = r in P ? P[r] : _), h = o || 0 === o ? (c ? o + a : o) + u : e[r], _ !== u && ("" !== u || "lineHeight" === r) && (o || 0 === o) && a && (a = it(t, r, a, _), "%" === u ? (a /= it(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = a + "%")) : "em" === u || "rem" === u || "vw" === u || "vh" === u ? a /= it(t, r, 1, u) : "px" !== u && (o = it(t, r, o, u), u = "px"), c && (o || 0 === o) && (h = o + a + u)), c && (o += a), !a && 0 !== a || !o && 0 !== o ? void 0 !== p[r] && (h || h + "" != "NaN" && null != h) ? (i = new xt(p, r, o || a || 0, 0, i, -1, r, !1, 0, l, h)).xs0 = "none" !== h || "display" !== r && -1 === r.indexOf("Style") ? h : l : $("invalid " + r + " tween value: " + e[r]) : (i = new xt(p, r, a, o - a, i, 0, r, !1 !== k && ("px" === u || "zIndex" === r), 0, l, h)).xs0 = u)
                    }
                    s && i && !i.plugin && (i.plugin = s)
                }
                return i
            }, t.setRatio = function(t) {
                var e, i, s, r = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, t._enableTransforms = function(t) {
                this._transform = this._transform || Zt(this._target, S, !0), this._transformType = this._transform.svg && Rt || !t && 3 !== this._transformType ? 2 : 3
            };
            var ee = function(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            t._addLazySet = function(t, e, i) {
                var s = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = ee, s.data = this
            }, t._linkCSSP = function(t, e, i, s) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, t._mod = function(t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, t._kill = function(t) {
                var e, i, s, r = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in r = {}, t) r[i] = t[i];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((s = e.xfirst) && s._prev ? this._linkCSSP(s._prev, e._next, s._prev._prev) : s === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, s._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
                return n.prototype._kill.call(this, r)
            };
            var ie = function(t, e, i) {
                var s, r, n, a;
                if (t.slice)
                    for (r = t.length; - 1 < --r;) ie(t[r], e, i);
                else
                    for (r = (s = t.childNodes).length; - 1 < --r;) a = (n = s[r]).type, n.style && (e.push(rt(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || ie(n, e, i)
            };
            return Y.cascadeTo = function(t, e, i) {
                var s, r, n, a, o = B.to(t, e, i),
                    l = [o],
                    h = [],
                    _ = [],
                    u = [],
                    f = B._internals.reservedProps;
                for (t = o._targets || o.target, ie(t, h, u), o.render(e, !0, !0), ie(t, _), o.render(0, !0, !0), o._enabled(!0), s = u.length; - 1 < --s;)
                    if ((r = nt(u[s], h[s], _[s])).firstMPT) {
                        for (n in r = r.difs, i) f[n] && (r[n] = i[n]);
                        for (n in a = {}, r) a[n] = h[s][n];
                        l.push(B.fromTo(u[s], e, a, r))
                    }
                return l
            }, n.activate([Y]), Y
        }, !0), t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i, !0
            }
        }), l = function(t) {
            for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
        }, (e = t.prototype)._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; - 1 < --n;) a[r[n]] = Math.round;
            for (n = r.length; - 1 < --n;)
                for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._mod(a) : e.n === t && (2 === e.f && e.t ? l(e.t._firstPT) : (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o)), e = i;
            return !1
        }, e._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(t, e, i, s) {
                var r, n;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) "function" == typeof(n = e[r]) && (n = n(s, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, s) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var r, n, a, o, l, h, _ = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e) "useRadians" !== r && ("function" == typeof(o = e[r]) && (o = o(s, t)), n = (h = (o + "").split("_"))[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - a, h.length && (-1 !== (n = h.join("_")).indexOf("short") && ((l %= _) !== l % (_ / 2) && (l = l < 0 ? l + _ : l - _)), -1 !== n.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)), (1e-6 < l || l < -1e-6) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(m) {
            var i, e, t, s = _gsScope.GreenSockGlobals || _gsScope,
                r = s.com.greensock,
                n = 2 * Math.PI,
                a = Math.PI / 2,
                o = r._class,
                l = function(t, e) {
                    var i = o("easing." + t, function() {}, !0),
                        s = i.prototype = new m;
                    return s.constructor = i, s.getRatio = e, i
                },
                h = m.register || function() {},
                _ = function(t, e, i, s, r) {
                    var n = o("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new s
                    }, !0);
                    return h(n, t), n
                },
                g = function(t, e, i) {
                    this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
                },
                u = function(t, e) {
                    var i = o("easing." + t, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        s = i.prototype = new m;
                    return s.constructor = i, s.getRatio = e, s.config = function(t) {
                        return new i(t)
                    }, i
                },
                f = _("Back", u("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), u("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), u("BackInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                c = o("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                p = c.prototype = new m;
            return p.constructor = c, p.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, c.ease = new c(.7, .7), p.config = c.config = function(t, e, i) {
                return new c(t, e, i)
            }, (p = (i = o("easing.SteppedEase", function(t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new m).constructor = i, p.getRatio = function(t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, p.config = i.config = function(t, e) {
                return new i(t, e)
            }, (p = (e = o("easing.RoughEase", function(t) {
                for (var e, i, s, r, n, a, o = (t = t || {}).taper || "none", l = [], h = 0, _ = 0 | (t.points || 20), u = _, f = !1 !== t.randomize, c = !0 === t.clamp, p = t.template instanceof m ? t.template : null, d = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --u;) e = f ? Math.random() : 1 / _ * u, i = p ? p.getRatio(e) : e, "none" === o ? s = d : "out" === o ? s = (r = 1 - e) * r * d : "in" === o ? s = e * e * d : s = (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * .5 * d, f ? i += Math.random() * s - .5 * s : u % 2 ? i += .5 * s : i -= .5 * s, c && (1 < i ? i = 1 : i < 0 && (i = 0)), l[h++] = {
                    x: e,
                    y: i
                };
                for (l.sort(function(t, e) {
                        return t.x - e.x
                    }), a = new g(1, 1, null), u = _; - 1 < --u;) n = l[u], a = new g(n.x, n.y, a);
                this._prev = new g(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new m).constructor = e, p.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, p.config = function(t) {
                return new e(t)
            }, e.ease = new e, _("Bounce", l("BounceOut", function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), l("BounceIn", function(t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), l("BounceInOut", function(t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), _("Circ", l("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), l("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), l("CircInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), _("Elastic", (t = function(t, e, i) {
                var s = o("easing." + t, function(t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / n * (Math.asin(1 / this._p1) || 0), this._p2 = n / this._p2
                    }, !0),
                    r = s.prototype = new m;
                return r.constructor = s, r.getRatio = e, r.config = function(t, e) {
                    return new s(t, e)
                }, s
            })("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), t("ElasticIn", function(t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), t("ElasticInOut", function(t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), _("Expo", l("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), l("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), l("ExpoInOut", function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), _("Sine", l("SineOut", function(t) {
                return Math.sin(t * a)
            }), l("SineIn", function(t) {
                return 1 - Math.cos(t * a)
            }), l("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), o("easing.EaseLookup", {
                find: function(t) {
                    return m.map[t]
                }
            }, !0), h(s.SlowMo, "SlowMo", "ease,"), h(e, "RoughEase", "ease,"), h(i, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(f, c) {
        "use strict";
        var e, i, p = {},
            s = f.document,
            d = f.GreenSockGlobals = f.GreenSockGlobals || f;
        if (!d.TweenLite) {
            var t, r, n, m, g, y = function(t) {
                    var e, i = t.split("."),
                        s = d;
                    for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                },
                u = y("com.greensock"),
                v = 1e-10,
                l = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                T = function() {},
                x = (e = Object.prototype.toString, i = e.call([]), function(t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
                }),
                b = {},
                w = function(o, l, h, _) {
                    this.sc = b[o] ? b[o].sc : [], (b[o] = this).gsClass = null, this.func = h;
                    var u = [];
                    this.check = function(t) {
                        for (var e, i, s, r, n = l.length, a = n; - 1 < --n;)(e = b[l[n]] || new w(l[n], [])).gsClass ? (u[n] = e.gsClass, a--) : t && e.sc.push(this);
                        if (0 === a && h) {
                            if (s = (i = ("com.greensock." + o).split(".")).pop(), r = y(i.join("."))[s] = this.gsClass = h.apply(h, u), _)
                                if (d[s] = p[s] = r, "undefined" != typeof module && module.exports)
                                    if (o === c)
                                        for (n in module.exports = p[c] = r, p) r[n] = p[n];
                                    else p[c] && (p[c][s] = r);
                            else "function" == typeof define && define.amd && define((f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") + o.split(".").pop(), [], function() {
                                return r
                            });
                            for (n = 0; n < this.sc.length; n++) this.sc[n].check()
                        }
                    }, this.check(!0)
                },
                a = f._gsDefine = function(t, e, i, s) {
                    return new w(t, e, i, s)
                },
                P = u._class = function(t, e, i) {
                    return e = e || function() {}, a(t, [], function() {
                        return e
                    }, i), e
                };
            a.globals = d;
            var o = [0, 0, 1, 1],
                O = P("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? o.concat(e) : o
                }, !0),
                S = O.map = {},
                h = O.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --h;)
                        for (n = l[h], r = s ? P("easing." + n, null, !0) : u.easing[n] || {}, a = _.length; - 1 < --a;) o = _[a], S[n + "." + o] = S[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for ((n = O.prototype)._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : t < .5 ? s / 2 : 1 - s / 2
                }, r = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --r;) n = t[r] + ",Power" + r, h(new O(null, null, 1, r), n, "easeOut", !0), h(new O(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), h(new O(null, null, 3, r), n, "easeInOut");
            S.linear = u.easing.Linear.easeIn, S.swing = u.easing.Quad.easeInOut;
            var k = P("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (n = k.prototype).addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, a, o = this._listeners[t],
                    l = 0;
                for (this !== m || g || m.wake(), null == o && (this._listeners[t] = o = []), a = o.length; - 1 < --a;)(n = o[a]).c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < r && (l = a + 1);
                o.splice(l, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                })
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; - 1 < --i;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (1 < (e = r.length) && (r = r.slice(0)), i = this._eventTarget; - 1 < --e;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var R = f.requestAnimationFrame,
                A = f.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                D = C();
            for (r = (t = ["ms", "moz", "webkit", "o"]).length; - 1 < --r && !R;) R = f[t[r] + "RequestAnimationFrame"], A = f[t[r] + "CancelAnimationFrame"] || f[t[r] + "CancelRequestAnimationFrame"];
            P("Ticker", function(t, e) {
                var r, n, a, o, l, h = this,
                    _ = C(),
                    i = !(!1 === e || !R) && "auto",
                    u = 500,
                    f = 33,
                    c = function(t) {
                        var e, i, s = C() - D;
                        u < s && (_ += s - f), D += s, h.time = (D - _) / 1e3, e = h.time - l, (!r || 0 < e || !0 === t) && (h.frame++, l += e + (o <= e ? .004 : o - e), i = !0), !0 !== t && (a = n(c)), i && h.dispatchEvent("tick")
                    };
                k.call(h), h.time = h.frame = 0, h.tick = function() {
                    c(!0)
                }, h.lagSmoothing = function(t, e) {
                    return arguments.length ? (u = t || 1e10, void(f = Math.min(e, u, 0))) : u < 1e10
                }, h.sleep = function() {
                    null != a && (i && A ? A(a) : clearTimeout(a), n = T, a = null, h === m && (g = !1))
                }, h.wake = function(t) {
                    null !== a ? h.sleep() : t ? _ += -D + (D = C()) : 10 < h.frame && (D = C() - u + 5), n = 0 === r ? T : i && R ? R : function(t) {
                        return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                    }, h === m && (g = !0), c(2)
                }, h.fps = function(t) {
                    return arguments.length ? (o = 1 / ((r = t) || 60), l = this.time + o, void h.wake()) : r
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), i = t, void h.fps(r)) : i
                }, h.fps(t), setTimeout(function() {
                    "auto" === i && h.frame < 5 && "hidden" !== s.visibilityState && h.useRAF(!1)
                }, 1500)
            }), (n = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
            var _ = P("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, $) {
                    g || m.wake();
                    var i = this.vars.useFrames ? H : $;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            m = _.ticker = new u.Ticker, (n = _.prototype)._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var M = function() {
                g && 2e3 < C() - D && ("hidden" !== s.visibilityState || !m.lagSmoothing()) && m.wake();
                var t = setTimeout(M, 2e3);
                t.unref && t.unref()
            };
            M(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function(t, e, i) {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, n._enabled = function(t, e) {
                return g || m.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    s = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this;
                switch (s ? s.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, s[0]);
                        break;
                    case 2:
                        i.call(r, s[0], s[1]);
                        break;
                    default:
                        i.apply(r, s)
                }
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = x(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (g || m.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (s < t && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && K(), this.render(t, e, !1), I.length && K())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                var e, i;
                for (t = t || v, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                return this
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (g || t || m.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var F = P("core.SimpleTimeline", function(t) {
                _.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (n = F.prototype = new _).constructor = F, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e, i, s) {
                var r, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (n = t._startTime; r && r._startTime > n;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return g || m.wake(), this._totalTime
            };
            var z = P("TweenLite", function(t, e, i) {
                    if (_.call(this, e, i), this.render = z.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                    var s, r, n, a = t.jquery || t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType),
                        o = this.vars.overwrite;
                    if (this._overwrite = o = null == o ? Z[z.defaultOverwrite] : "number" == typeof o ? o >> 0 : Z[o], (a || t instanceof Array || t.push && x(t)) && "number" != typeof t[0])
                        for (this._targets = n = l(t), this._propLookup = [], this._siblings = [], s = 0; s < n.length; s++)(r = n[s]) ? "string" != typeof r ? r.length && r !== f && r[0] && (r[0] === f || r[0].nodeType && r[0].style && !r.nodeType) ? (n.splice(s--, 1), this._targets = n = n.concat(l(r))) : (this._siblings[s] = J(r, this, !1), 1 === o && 1 < this._siblings[s].length && et(r, this, null, 1, this._siblings[s])) : "string" == typeof(r = n[s--] = z.selector(r)) && n.splice(s + 1, 1) : n.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = J(t, this, !1), 1 === o && 1 < this._siblings.length && et(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -v, this.render(Math.min(0, -this._delay)))
                }, !0),
                E = function(t) {
                    return t && t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType)
                };
            (n = z.prototype = new _).constructor = z, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, z.version = "1.20.3", z.defaultEase = n._ease = new O(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = m, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
                m.lagSmoothing(t, e)
            }, z.selector = f.$ || f.jQuery || function(t) {
                var e = f.$ || f.jQuery;
                return e ? (z.selector = e)(t) : void 0 === s ? t : s.querySelectorAll ? s.querySelectorAll(t) : s.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var I = [],
                X = {},
                N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                L = /[\+-]=-?[\.\d]/,
                B = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                Y = function(t, e, i, s) {
                    var r, n, a, o, l, h, _, u = [],
                        f = 0,
                        c = "",
                        p = 0;
                    for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(N) || [], n = e.match(N) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = n.length, o = 0; o < l; o++) _ = n[o], c += (h = e.substr(f, e.indexOf(_, f) - f)) || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : 0
                    }), f += _.length;
                    return (c += e.substr(f)) && u.push(c), u.setRatio = B, L.test(e) && (u.end = null), u
                },
                j = function(t, e, i, s, r, n, a, o, l) {
                    "function" == typeof s && (s = s(l || 0, t));
                    var h = typeof t[e],
                        _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        u = "get" !== i ? i : _ ? a ? t[_](a) : t[_]() : t[e],
                        f = "string" == typeof s && "=" === s.charAt(1),
                        c = {
                            t: t,
                            p: e,
                            s: u,
                            f: "function" === h,
                            pg: 0,
                            n: r || e,
                            m: n ? "function" == typeof n ? n : Math.round : 0,
                            pr: 0,
                            c: f ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                        };
                    return ("number" != typeof u || "number" != typeof s && !f) && (a || isNaN(u) || !f && isNaN(s) || "boolean" == typeof u || "boolean" == typeof s ? (c.fp = a, c = {
                        t: Y(u, f ? parseFloat(c.s) + c.c : s, o || z.defaultStringFilter, c),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                    }) : (c.s = parseFloat(u), f || (c.c = parseFloat(s) - c.s || 0))), c.c ? ((c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c) : void 0
                },
                U = z._internals = {
                    isArray: x,
                    isSelector: E,
                    lazyTweens: I,
                    blobDif: Y
                },
                V = z._plugins = {},
                q = U.tweenLookup = {},
                W = 0,
                G = U.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                Z = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                H = _._rootFramesTimeline = new F,
                $ = _._rootTimeline = new F,
                Q = 30,
                K = U.lazyRender = function() {
                    var t, e = I.length;
                    for (X = {}; - 1 < --e;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            $._startTime = m.time, H._startTime = m.frame, $._active = H._active = !0, setTimeout(K, 1), _._updateRoot = z.render = function() {
                var t, e, i;
                if (I.length && K(), $.render((m.time - $._startTime) * $._timeScale, !1, !1), H.render((m.frame - H._startTime) * H._timeScale, !1, !1), I.length && K(), m.frame >= Q) {
                    for (i in Q = m.frame + (parseInt(z.autoSleep, 10) || 120), q) {
                        for (t = (e = q[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete q[i]
                    }
                    if ((!(i = $._first) || i._paused) && z.autoSleep && !H._first && 1 === m._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || m.sleep()
                    }
                }
            }, m.addEventListener("tick", _._updateRoot);
            var J = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (q[n || (t._gsTweenID = n = "t" + W++)] || (q[n] = {
                            target: t,
                            tweens: []
                        }), e && ((s = q[n].tweens)[r = s.length] = e, i))
                        for (; - 1 < --r;) s[r] === e && s.splice(r, 1);
                    return q[n].tweens
                },
                tt = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), (a = z.onOverwrite) && (n = a(t, e, i, s)), !1 !== r && !1 !== n
                },
                et = function(t, e, i, s, r) {
                    var n, a, o, l;
                    if (1 === s || 4 <= s) {
                        for (l = r.length, n = 0; n < l; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, _ = e._startTime + v,
                        u = [],
                        f = 0,
                        c = 0 === e._duration;
                    for (n = r.length; - 1 < --n;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || it(e, 0, c), 0 === it(o, h, c) && (u[f++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((c || !o._initted) && _ - o._startTime <= 2e-10 || (u[f++] = o)));
                    for (n = f; - 1 < --n;)
                        if (o = u[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !tt(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                it = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return e < (n /= r) ? n - e : i && n === e || !t._initted && n - e < 2 * v ? v : (n += t.totalDuration() / t._timeScale / r) > e + v ? 0 : n - e - v
                };
            n._init = function() {
                var t, e, i, s, r, n, a = this.vars,
                    o = this._overwrittenProps,
                    l = this._duration,
                    h = !!a.immediateRender,
                    _ = a.ease;
                if (a.startAt) {
                    for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, a.startAt) r[s] = a.startAt[s];
                    if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = z.to(this.target, 0, r), h)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== l) return
                } else if (a.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (s in 0 !== this._time && (h = !1), i = {}, a) G[s] && "autoCSS" !== s || (i[s] = a[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = z.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = _ = _ ? _ instanceof O ? _ : "function" == typeof _ ? new O(_, a.easeParams) : S[_] || z.defaultEase : z.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (n = this._targets.length, t = 0; t < n; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (e && z._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, n._initProps = function(t, e, i, s, r) {
                var n, a, o, l, h, _;
                if (null == t) return !1;
                for (n in X[t._gsTweenID] && K(), this.vars.css || t.style && t !== f && t.nodeType && V.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, s = {};
                        for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                        t.css = s
                    }(this.vars, t), this.vars)
                    if (_ = this.vars[n], G[n]) _ && (_ instanceof Array || _.push && x(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (V[n] && (l = new V[n])._onInitTween(t, this.vars[n], this, r)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: n,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, a = l._overwriteProps.length; - 1 < --a;) e[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else e[n] = j.call(this, t, n, "get", _, n, 0, null, this.vars.stringFilter, r);
                return s && this._kill(s, t) ? this._initProps(t, e, i, s, r) : 1 < this._overwrite && this._firstPT && 1 < i.length && et(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (X[t._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (l - 1e-7 <= t && 0 <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && -1e-7 <= t || h === v && "isPause" !== this.data) && h !== t && (i = !0, v < h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : v);
                else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && 0 < h) && (r = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= h && (h !== v || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : v)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var _ = t / l,
                        u = this._easeType,
                        f = this._easePower;
                    (1 === u || 3 === u && .5 <= _) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === f ? _ *= _ : 2 === f ? _ *= _ * _ : 3 === f ? _ *= _ * _ * _ : 4 === f && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && 0 <= t && (this._active = !0), 0 === o && (this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === v && a !== v && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                var s, r, n, a, o, l, h, _, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((x(e) || E(e)) && "number" != typeof e[0])
                    for (s = e.length; - 1 < --s;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; - 1 < --s;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !tt(this, i, e, u)) return !1
                        }
                        for (n in h)(a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], _.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(Math.min(0, -this._delay))), this
            }, n._enabled = function(t, e) {
                if (g || m.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; - 1 < --i;) this._siblings[i] = J(s[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return _.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, z.to = function(t, e, i) {
                return new z(t, e, i)
            }, z.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
            }, z.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new z(t, e, s)
            }, z.delayedCall = function(t, e, i, s, r) {
                return new z(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, z.set = function(t, e) {
                return new z(t, 0, e)
            }, z.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, s, r, n;
                if (t = "string" != typeof t ? t : z.selector(t) || t, (x(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; - 1 < --i;) s = s.concat(z.getTweensOf(t[i], e));
                    for (i = s.length; - 1 < --i;)
                        for (n = s[i], r = i; - 1 < --r;) n === s[r] && s.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (s = J(t).concat()).length; - 1 < --i;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s || []
            }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = z.getTweensOf(t, e), r = s.length; - 1 < --r;) s[r]._kill(i, t)
            };
            var st = P("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype
            }, !0);
            if (n = st.prototype, st.version = "1.19.0", st.API = 2, n._firstPT = null, n._addTween = j, n.setRatio = B, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._mod = n._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, z._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, st.activate = function(t) {
                    for (var e = t.length; - 1 < --e;) t[e].API === st.API && (V[(new t[e])._propName] = t[e]);
                    return !0
                }, a.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        a = P("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            st.call(this, i, s), this._overwriteProps = r || []
                        }, !0 === t.global),
                        o = a.prototype = new st(i);
                    for (e in (o.constructor = a).API = t.API, n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, st.activate([a]), a
                }, t = f._gsQueue) {
                for (r = 0; r < t.length; r++) t[r]();
                for (n in b) b[n].func || f.console.log("GSAP encountered missing dependency: " + n)
            }
            g = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
! function(t) {
    "function" == typeof define && define.amd ? define("datepicker", ["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(A) {
    "use strict";

    function o(t) {
        return "string" == typeof t
    }

    function n(t) {
        return "number" == typeof t && !isNaN(t)
    }

    function r(t) {
        return void 0 === t
    }

    function d(t) {
        return "date" === (e = t, a.call(e).slice(8, -1).toLowerCase());
        var e
    }

    function s(t, e) {
        var i = [];
        return Array.from ? Array.from(t).slice(e || 0) : (n(e) && i.push(e), i.slice.apply(t, i))
    }

    function t(t, e) {
        var i = s(arguments, 2);
        return function() {
            return t.apply(e, i.concat(s(arguments)))
        }
    }

    function P(t, e) {
        return [31, (i = t, i % 4 == 0 && i % 100 != 0 || i % 400 == 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e];
        var i
    }

    function l(t, e) {
        (e = A.isPlainObject(e) ? e : {}).language && (e = A.extend({}, l.LANGUAGES[e.language], e)), this.$element = A(t), this.options = A.extend({}, l.DEFAULTS, e), this.isBuilt = !1, this.isShown = !1, this.isInput = !1, this.isInline = !1, this.initialValue = "", this.initialDate = null, this.startDate = null, this.endDate = null, this.init()
    }
    var e = A(window),
        h = window.document,
        f = A(h),
        c = window.Number,
        u = "datepicker",
        i = "click.datepicker",
        p = /(y|m|d)+/g,
        g = /\d+/g,
        w = /^\d{2,4}$/,
        m = ["datepicker-top-left", "datepicker-top-right", "datepicker-bottom-left", "datepicker-bottom-right"].join(" "),
        y = "datepicker-hide",
        k = 0,
        v = 1,
        D = 2,
        C = Math.min,
        a = Object.prototype.toString;
    l.prototype = {
        constructor: l,
        init: function() {
            var t = this.options,
                e = this.$element,
                i = t.startDate,
                s = t.endDate,
                a = t.date;
            this.$trigger = A(t.trigger), this.isInput = e.is("input") || e.is("textarea"), this.isInline = t.inline && (t.container || !this.isInput), this.format = function(t) {
                var e, i, s = String(t).toLowerCase(),
                    a = s.match(p);
                if (!a || 0 === a.length) throw new Error("Invalid date format.");
                for (t = {
                        source: s,
                        parts: a
                    }, e = a.length, i = 0; i < e; i++) switch (a[i]) {
                    case "dd":
                    case "d":
                        t.hasDay = !0;
                        break;
                    case "mm":
                    case "m":
                        t.hasMonth = !0;
                        break;
                    case "yyyy":
                    case "yy":
                        t.hasYear = !0
                }
                return t
            }(t.format), this.oldValue = this.initialValue = this.getValue(), a = this.parseDate(a || this.initialValue), i && (i = this.parseDate(i), a.getTime() < i.getTime() && (a = new Date(i)), this.startDate = i), s && (s = this.parseDate(s), i && s.getTime() < i.getTime() && (s = new Date(i)), a.getTime() > s.getTime() && (a = new Date(s)), this.endDate = s), this.date = a, this.viewDate = new Date(a), this.initialDate = new Date(this.date), this.bind(), (t.autoShow || this.isInline) && this.show(), t.autoPick && this.pick()
        },
        build: function() {
            var t, e = this.options,
                i = this.$element;
            this.isBuilt || (this.isBuilt = !0, this.$picker = t = A(e.template), this.$week = t.find('[data-view="week"]'), this.$yearsPicker = t.find('[data-view="years picker"]'), this.$yearsPrev = t.find('[data-view="years prev"]'), this.$yearsNext = t.find('[data-view="years next"]'), this.$yearsCurrent = t.find('[data-view="years current"]'), this.$years = t.find('[data-view="years"]'), this.$monthsPicker = t.find('[data-view="months picker"]'), this.$yearPrev = t.find('[data-view="year prev"]'), this.$yearNext = t.find('[data-view="year next"]'), this.$yearCurrent = t.find('[data-view="year current"]'), this.$months = t.find('[data-view="months"]'), this.$daysPicker = t.find('[data-view="days picker"]'), this.$monthPrev = t.find('[data-view="month prev"]'), this.$monthNext = t.find('[data-view="month next"]'), this.$monthCurrent = t.find('[data-view="month current"]'), this.$days = t.find('[data-view="days"]'), this.isInline ? A(e.container || i).append(t.addClass("datepicker-inline")) : (A(h.body).append(t.addClass("datepicker-dropdown")), t.addClass(y)), this.fillWeek())
        },
        unbuild: function() {
            this.isBuilt && (this.isBuilt = !1, this.$picker.remove())
        },
        bind: function() {
            var t = this.options,
                e = this.$element;
            A.isFunction(t.show) && e.on("show.datepicker", t.show), A.isFunction(t.hide) && e.on("hide.datepicker", t.hide), A.isFunction(t.pick) && e.on("pick.datepicker", t.pick), this.isInput && e.on("keyup.datepicker", A.proxy(this.keyup, this)), this.isInline || (t.trigger ? this.$trigger.on(i, A.proxy(this.toggle, this)) : this.isInput ? e.on("focus.datepicker", A.proxy(this.show, this)) : e.on(i, A.proxy(this.show, this)))
        },
        unbind: function() {
            var t = this.options,
                e = this.$element;
            A.isFunction(t.show) && e.off("show.datepicker", t.show), A.isFunction(t.hide) && e.off("hide.datepicker", t.hide), A.isFunction(t.pick) && e.off("pick.datepicker", t.pick), this.isInput && e.off("keyup.datepicker", this.keyup), this.isInline || (t.trigger ? this.$trigger.off(i, this.toggle) : this.isInput ? e.off("focus.datepicker", this.show) : e.off(i, this.show))
        },
        showView: function(t) {
            var e = this.$yearsPicker,
                i = this.$monthsPicker,
                s = this.$daysPicker,
                a = this.format;
            if (a.hasYear || a.hasMonth || a.hasDay) switch (c(t)) {
                case D:
                case "years":
                    i.addClass(y), s.addClass(y), a.hasYear ? (this.fillYears(), e.removeClass(y), this.place()) : this.showView(k);
                    break;
                case v:
                case "months":
                    e.addClass(y), s.addClass(y), a.hasMonth ? (this.fillMonths(), i.removeClass(y), this.place()) : this.showView(D);
                    break;
                default:
                    e.addClass(y), i.addClass(y), a.hasDay ? (this.fillDays(), s.removeClass(y), this.place()) : this.showView(v)
            }
        },
        hideView: function() {
            !this.isInline && this.options.autoHide && this.hide()
        },
        place: function() {
            if (!this.isInline) {
                var t = this.options,
                    e = this.$element,
                    i = this.$picker,
                    s = f.outerWidth(),
                    a = f.outerHeight(),
                    n = e.outerWidth(),
                    h = e.outerHeight(),
                    r = i.width(),
                    l = i.height(),
                    o = e.offset(),
                    d = o.left,
                    c = o.top,
                    u = parseFloat(t.offset) || 10,
                    p = "datepicker-top-left";
                l < c && a < c + h + l ? (c -= l + u, p = "datepicker-bottom-left") : c += h + u, s < d + r && (d = d + n - r, p = p.replace("left", "right")), i.removeClass(m).addClass(p).css({
                    top: c,
                    left: d,
                    zIndex: parseInt(t.zIndex, 10)
                })
            }
        },
        trigger: function(t, e) {
            var i = A.Event(t, e);
            return this.$element.trigger(i), i
        },
        createItem: function(t) {
            var e = this.options,
                i = e.itemTag,
                s = {
                    text: "",
                    view: "",
                    muted: !1,
                    picked: !1,
                    disabled: !1,
                    highlighted: !1
                },
                a = [];
            return A.extend(s, t), s.muted && a.push(e.mutedClass), s.highlighted && a.push(e.highlightedClass), s.picked && a.push(e.pickedClass), s.disabled && a.push(e.disabledClass), "<" + i + ' class="' + a.join(" ") + '"' + (s.view ? ' data-view="' + s.view + '"' : "") + ">" + s.text + "</" + i + ">"
        },
        fillAll: function() {
            this.fillYears(), this.fillMonths(), this.fillDays()
        },
        fillWeek: function() {
            var t, e = this.options,
                i = parseInt(e.weekStart, 10) % 7,
                s = e.daysMin,
                a = "";
            for (s = A.merge(s.slice(i), s.slice(0, i)), t = 0; t <= 6; t++) a += this.createItem({
                text: s[t]
            });
            this.$week.html(a)
        },
        fillYears: function() {
            var t, e = this.options,
                i = e.disabledClass || "",
                s = e.yearSuffix || "",
                a = A.isFunction(e.filter) && e.filter,
                n = this.startDate,
                h = this.endDate,
                r = this.viewDate,
                l = r.getFullYear(),
                o = r.getMonth(),
                d = r.getDate(),
                c = (new Date).getFullYear(),
                u = this.date,
                p = u.getFullYear(),
                f = !1,
                g = !1,
                w = !1,
                m = !1,
                y = !1,
                k = "";
            for (t = -5; t <= 6; t++) u = new Date(l + t, o, d), y = -5 === t || 6 === t, m = l + t === p, w = !1, n && (w = u.getFullYear() < n.getFullYear(), -5 === t && (f = w)), !w && h && (w = u.getFullYear() > h.getFullYear(), 6 === t && (g = w)), !w && a && (w = !1 === a.call(this.$element, u)), k += this.createItem({
                text: l + t,
                view: w ? "year disabled" : m ? "year picked" : "year",
                muted: y,
                picked: m,
                disabled: w,
                highlighted: u.getFullYear() === c
            });
            this.$yearsPrev.toggleClass(i, f), this.$yearsNext.toggleClass(i, g), this.$yearsCurrent.toggleClass(i, !0).html(l + -5 + s + " - " + (l + 6) + s), this.$years.html(k)
        },
        fillMonths: function() {
            var t, e = this.options,
                i = e.disabledClass || "",
                s = e.monthsShort,
                a = A.isFunction(e.filter) && e.filter,
                n = this.startDate,
                h = this.endDate,
                r = this.viewDate,
                l = r.getFullYear(),
                o = r.getDate(),
                d = new Date,
                c = d.getFullYear(),
                u = d.getMonth(),
                p = this.date,
                f = p.getFullYear(),
                g = p.getMonth(),
                w = !1,
                m = !1,
                y = !1,
                k = !1,
                v = "";
            for (t = 0; t <= 11; t++) p = new Date(l, t, o), k = l === f && t === g, y = !1, n && (y = (w = p.getFullYear() === n.getFullYear()) && p.getMonth() < n.getMonth()), !y && h && (y = (m = p.getFullYear() === h.getFullYear()) && p.getMonth() > h.getMonth()), !y && a && (y = !1 === a.call(this.$element, p)), v += this.createItem({
                index: t,
                text: s[t],
                view: y ? "month disabled" : k ? "month picked" : "month",
                picked: k,
                disabled: y,
                highlighted: l === c && p.getMonth() === u
            });
            this.$yearPrev.toggleClass(i, w), this.$yearNext.toggleClass(i, m), this.$yearCurrent.toggleClass(i, w && m).html(l + e.yearSuffix || ""), this.$months.html(v)
        },
        fillDays: function() {
            var t, e, i, s = this.options,
                a = s.disabledClass || "",
                n = s.yearSuffix || "",
                h = s.monthsShort,
                r = parseInt(s.weekStart, 10) % 7,
                l = A.isFunction(s.filter) && s.filter,
                o = this.startDate,
                d = this.endDate,
                c = this.viewDate,
                u = c.getFullYear(),
                p = c.getMonth(),
                f = u,
                g = p,
                w = u,
                m = new Date,
                y = m.getFullYear(),
                k = m.getMonth(),
                v = m.getDate(),
                D = p,
                C = this.date,
                b = C.getFullYear(),
                $ = C.getMonth(),
                x = C.getDate(),
                F = !1,
                S = !1,
                I = !1,
                M = !1,
                V = [],
                T = [],
                Y = [];
            for (0 === p ? (f -= 1, g = 11) : g -= 1, t = P(f, g), (i = (C = new Date(u, p, 1)).getDay() - r) <= 0 && (i += 7), o && (F = C.getTime() <= o.getTime()), e = t - (i - 1); e <= t; e++) C = new Date(f, g, e), M = f === b && g === $ && e === x, I = !1, o && (I = C.getTime() < o.getTime()), !I && l && (I = !1 === l.call(this.$element, C)), V.push(this.createItem({
                text: e,
                view: "day prev",
                muted: !0,
                picked: M,
                disabled: I,
                highlighted: f === y && g === k && C.getDate() === v
            }));
            for (11 === p ? (w += 1, D = 0) : D += 1, t = P(u, p), i = 42 - (V.length + t), C = new Date(u, p, t), d && (S = C.getTime() >= d.getTime()), e = 1; e <= i; e++) C = new Date(w, D, e), M = w === b && D === $ && e === x, I = !1, d && (I = C.getTime() > d.getTime()), !I && l && (I = !1 === l.call(this.$element, C)), T.push(this.createItem({
                text: e,
                view: "day next",
                muted: !0,
                picked: M,
                disabled: I,
                highlighted: w === y && D === k && C.getDate() === v
            }));
            for (e = 1; e <= t; e++) C = new Date(u, p, e), M = u === b && p === $ && e === x, I = !1, o && (I = C.getTime() < o.getTime()), !I && d && (I = C.getTime() > d.getTime()), !I && l && (I = !1 === l.call(this.$element, C)), Y.push(this.createItem({
                text: e,
                view: I ? "day disabled" : M ? "day picked" : "day",
                picked: M,
                disabled: I,
                highlighted: u === y && p === k && C.getDate() === v
            }));
            this.$monthPrev.toggleClass(a, F), this.$monthNext.toggleClass(a, S), this.$monthCurrent.toggleClass(a, F && S).html(s.yearFirst ? u + n + " " + h[p] : h[p] + " " + u + n), this.$days.html(V.join("") + Y.join(" ") + T.join(""))
        },
        click: function(t) {
            var e, i, s, a, n, h, r = A(t.target),
                l = this.options,
                o = this.viewDate;
            if (t.stopPropagation(), t.preventDefault(), !r.hasClass("disabled")) switch (e = o.getFullYear(), i = o.getMonth(), s = o.getDate(), h = r.data("view")) {
                case "years prev":
                case "years next":
                    e = "years prev" === h ? e - 10 : e + 10, n = r.text(), (a = w.test(n)) && (e = parseInt(n, 10), this.date = new Date(e, i, C(s, 28))), this.viewDate = new Date(e, i, C(s, 28)), this.fillYears(), a && (this.showView(v), this.pick("year"));
                    break;
                case "year prev":
                case "year next":
                    e = "year prev" === h ? e - 1 : e + 1, this.viewDate = new Date(e, i, C(s, 28)), this.fillMonths();
                    break;
                case "year current":
                    this.format.hasYear && this.showView(D);
                    break;
                case "year picked":
                    this.format.hasMonth ? this.showView(v) : (r.addClass(l.pickedClass).siblings().removeClass(l.pickedClass), this.hideView()), this.pick("year");
                    break;
                case "year":
                    e = parseInt(r.text(), 10), this.date = new Date(e, i, C(s, 28)), this.format.hasMonth ? (this.viewDate = new Date(e, i, C(s, 28)), this.showView(v)) : (r.addClass(l.pickedClass).siblings().removeClass(l.pickedClass), this.hideView()), this.pick("year");
                    break;
                case "month prev":
                case "month next":
                    i = "month prev" === h ? i - 1 : "month next" === h ? i + 1 : i, this.viewDate = new Date(e, i, C(s, 28)), this.fillDays();
                    break;
                case "month current":
                    this.format.hasMonth && this.showView(v);
                    break;
                case "month picked":
                    this.format.hasDay ? this.showView(k) : (r.addClass(l.pickedClass).siblings().removeClass(l.pickedClass), this.hideView()), this.pick("month");
                    break;
                case "month":
                    i = A.inArray(r.text(), l.monthsShort), this.date = new Date(e, i, C(s, 28)), this.format.hasDay ? (this.viewDate = new Date(e, i, C(s, 28)), this.showView(k)) : (r.addClass(l.pickedClass).siblings().removeClass(l.pickedClass), this.hideView()), this.pick("month");
                    break;
                case "day prev":
                case "day next":
                case "day":
                    i = "day prev" === h ? i - 1 : "day next" === h ? i + 1 : i, s = parseInt(r.text(), 10), this.date = new Date(e, i, s), r.addClass(l.pickedClass).siblings().removeClass(l.pickedClass), "day" === h && this.hideView(), this.pick("day");
                    break;
                case "day picked":
                    r.addClass(l.pickedClass).siblings().removeClass(l.pickedClass), this.hideView(), this.pick("day")
            }
        },
        clickDoc: function(t) {
            for (var e, i = t.target, s = this.$element[0], a = this.$trigger[0]; i !== h;) {
                if (i === a || i === s) {
                    e = !0;
                    break
                }
                i = i.parentNode
            }
            e || this.hide()
        },
        keyup: function() {
            this.update()
        },
        keyupDoc: function(t) {
            this.isInput && t.target !== this.$element[0] && this.isShown && ("Tab" === t.key || 9 === t.keyCode) && this.hide()
        },
        getValue: function() {
            var t = this.$element,
                e = "";
            return this.isInput ? e = t.val() : this.isInline ? this.options.container && (e = t.text()) : e = t.text(), e
        },
        setValue: function(t) {
            var e = this.$element;
            t = o(t) ? t : "", this.isInput ? e.val(t) : this.isInline ? this.options.container && e.text(t) : e.text(t)
        },
        show: function() {
            this.isBuilt || this.build(), this.isShown || this.trigger("show.datepicker").isDefaultPrevented() || (this.isShown = !0, this.$picker.removeClass(y).on(i, A.proxy(this.click, this)), this.showView(this.options.startView), this.isInline || (e.on("resize.datepicker", this._place = t(this.place, this)), f.on(i, this._clickDoc = t(this.clickDoc, this)), f.on("keyup.datepicker", this._keyupDoc = t(this.keyupDoc, this)), this.place()))
        },
        hide: function() {
            this.isShown && (this.trigger("hide.datepicker").isDefaultPrevented() || (this.isShown = !1, this.$picker.addClass(y).off(i, this.click), this.isInline || (e.off("resize.datepicker", this._place), f.off(i, this._clickDoc), f.off("keyup.datepicker", this._keyupDoc))))
        },
        toggle: function() {
            this.isShown ? this.hide() : this.show()
        },
        update: function() {
            var t = this.getValue();
            t !== this.oldValue && (this.setDate(t, !0), this.oldValue = t)
        },
        pick: function(t) {
            var e = this.$element,
                i = this.date;
            this.trigger("pick.datepicker", {
                view: t || "",
                date: i
            }).isDefaultPrevented() || (this.setValue(i = this.formatDate(this.date)), this.isInput && e.trigger("change"))
        },
        reset: function() {
            this.setDate(this.initialDate, !0), this.setValue(this.initialValue), this.isShown && this.showView(this.options.startView)
        },
        getMonthName: function(t, e) {
            var i = this.options,
                s = i.months;
            return A.isNumeric(t) ? t = c(t) : r(e) && (e = t), !0 === e && (s = i.monthsShort), s[n(t) ? t : this.date.getMonth()]
        },
        getDayName: function(t, e, i) {
            var s = this.options,
                a = s.days;
            return A.isNumeric(t) ? t = c(t) : (r(i) && (i = e), r(e) && (e = t)), (a = !0 === i ? s.daysMin : !0 === e ? s.daysShort : a)[n(t) ? t : this.date.getDay()]
        },
        getDate: function(t) {
            var e = this.date;
            return t ? this.formatDate(e) : new Date(e)
        },
        setDate: function(t, e) {
            var i = this.options.filter;
            if (d(t) || o(t)) {
                if (t = this.parseDate(t), A.isFunction(i) && !1 === i.call(this.$element, t)) return;
                this.date = t, this.viewDate = new Date(t), e || this.pick(), this.isBuilt && this.fillAll()
            }
        },
        setStartDate: function(t) {
            (d(t) || o(t)) && (this.startDate = this.parseDate(t), this.isBuilt && this.fillAll())
        },
        setEndDate: function(t) {
            (d(t) || o(t)) && (this.endDate = this.parseDate(t), this.isBuilt && this.fillAll())
        },
        parseDate: function(t) {
            var e, i, s, a, n, h, r = this.format,
                l = [];
            if (d(t)) return new Date(t.getFullYear(), t.getMonth(), t.getDate());
            if (o(t) && (l = t.match(g) || []), i = (t = new Date).getFullYear(), s = t.getDate(), a = t.getMonth(), e = r.parts.length, l.length === e)
                for (h = 0; h < e; h++) switch (n = parseInt(l[h], 10) || 1, r.parts[h]) {
                    case "dd":
                    case "d":
                        s = n;
                        break;
                    case "mm":
                    case "m":
                        a = n - 1;
                        break;
                    case "yy":
                        i = 2e3 + n;
                        break;
                    case "yyyy":
                        i = n
                }
            return new Date(i, a, s)
        },
        formatDate: function(t) {
            var e, i, s, a, n, h = this.format,
                r = "";
            if (d(t))
                for (r = h.source, i = t.getFullYear(), (a = {
                        d: t.getDate(),
                        m: t.getMonth() + 1,
                        yy: i.toString().substring(2),
                        yyyy: i
                    }).dd = (a.d < 10 ? "0" : "") + a.d, a.mm = (a.m < 10 ? "0" : "") + a.m, e = h.parts.length, n = 0; n < e; n++) s = h.parts[n], r = r.replace(s, a[s]);
            return r
        },
        destroy: function() {
            this.unbind(), this.unbuild(), this.$element.removeData(u)
        }
    }, l.LANGUAGES = {}, l.DEFAULTS = {
        autoShow: !1,
        autoHide: !1,
        autoPick: !1,
        inline: !1,
        container: null,
        trigger: null,
        language: "",
        format: "mm/dd/yyyy",
        date: null,
        startDate: null,
        endDate: null,
        startView: 0,
        weekStart: 0,
        yearFirst: !1,
        yearSuffix: "",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        itemTag: "li",
        mutedClass: "muted",
        pickedClass: "picked",
        disabledClass: "disabled",
        highlightedClass: "highlighted",
        template: '<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',
        offset: 10,
        zIndex: 1e3,
        filter: null,
        show: null,
        hide: null,
        pick: null
    }, l.setDefaults = function(t) {
        (t = A.isPlainObject(t) ? t : {}).language && (t = A.extend({}, l.LANGUAGES[t.language], t)), A.extend(l.DEFAULTS, t)
    }, l.other = A.fn.datepicker, A.fn.datepicker = function(a) {
        var n, h = s(arguments, 1);
        return this.each(function() {
            var t, e, i = A(this),
                s = i.data(u);
            if (!s) {
                if (/destroy/.test(a)) return;
                t = A.extend({}, i.data(), A.isPlainObject(a) && a), i.data(u, s = new l(this, t))
            }
            o(a) && A.isFunction(e = s[a]) && (n = e.apply(s, h))
        }), r(n) ? this : n
    }, A.fn.datepicker.Constructor = l, A.fn.datepicker.languages = l.LANGUAGES, A.fn.datepicker.setDefaults = l.setDefaults, A.fn.datepicker.noConflict = function() {
        return A.fn.datepicker = l.other, this
    }
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(i) {
    "use strict";
    var s = i.GreenSockGlobals || i,
        e = function(e) {
            var t, i = e.split("."),
                n = s;
            for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
            return n
        }("com.greensock.utils"),
        C = function(e) {
            var t = e.nodeType,
                i = "";
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) i += C(e)
            } else if (3 === t || 4 === t) return e.nodeValue;
            return i
        },
        $ = document,
        q = $.defaultView ? $.defaultView.getComputedStyle : function() {},
        r = /([A-Z])/g,
        z = function(e, t, i, n) {
            var s;
            return (i = i || q(e, null)) ? s = (e = i.getPropertyValue(t.replace(r, "-$1").toLowerCase())) || i.length ? e : i[t] : e.currentStyle && (s = (i = e.currentStyle)[t]), n ? s : parseInt(s, 10) || 0
        },
        l = function(e) {
            return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
        },
        T = /(?:\r|\n|\t\t)/g,
        N = /(?:\s\s+)/g,
        w = 127462,
        A = 127487,
        L = function(e) {
            return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 65536
        },
        o = " style='position:relative;display:inline-block;" + ($.all && !$.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
        d = function(e, t) {
            var i = -1 !== (e = e || "").indexOf("++"),
                n = 1;
            return i && (e = e.split("++").join("")),
                function() {
                    return "<" + t + o + (e ? " class='" + e + (i ? n++ : "") + "'>" : ">")
                }
        },
        n = e.SplitText = s.SplitText = function(e, t) {
            if ("string" == typeof e && (e = n.selector(e)), !e) throw "cannot split a null element.";
            this.elements = l(e) ? function(e) {
                var t, i, n, s = [],
                    r = e.length;
                for (t = 0; t < r; t++)
                    if (i = e[t], l(i))
                        for (n = i.length, n = 0; n < i.length; n++) s.push(i[n]);
                    else s.push(i);
                return s
            }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
        },
        D = function(e, t, i) {
            var n = e.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (e = e.firstChild; e; e = e.nextSibling) D(e, t, i);
            else(3 === n || 4 === n) && (e.nodeValue = e.nodeValue.split(t).join(i))
        },
        F = function(e, t) {
            for (var i = t.length; - 1 < --i;) e.push(t[i])
        },
        p = function(e) {
            var t, i = [],
                n = e.length;
            for (t = 0; t !== n; i.push(e[t++]));
            return i
        },
        I = function(e, t, i) {
            for (var n; e && e !== t;) {
                if (n = e._next || e.nextSibling) return n.textContent.charAt(0) === i;
                e = e.parentNode || e._parent
            }
            return !1
        },
        P = function(e) {
            var t, i, n = p(e.childNodes),
                s = n.length;
            for (t = 0; t < s; t++)(i = n[t])._isSplit ? P(i) : (t && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && e.insertBefore(i.firstChild, i), e.removeChild(i))
        },
        a = function(e, t, i, n, s, r, l) {
            var o, d, p, a, h, u, f, c, g, y, x, v, _ = q(e),
                b = z(e, "paddingLeft", _),
                S = -999,
                m = z(e, "borderBottomWidth", _) + z(e, "borderTopWidth", _),
                C = z(e, "borderLeftWidth", _) + z(e, "borderRightWidth", _),
                T = z(e, "paddingTop", _) + z(e, "paddingBottom", _),
                N = z(e, "paddingLeft", _) + z(e, "paddingRight", _),
                w = .2 * z(e, "fontSize"),
                A = z(e, "textAlign", _, !0),
                L = [],
                B = [],
                V = [],
                W = t.wordDelimiter || " ",
                H = t.span ? "span" : "div",
                E = t.type || t.split || "chars,words,lines",
                O = s && -1 !== E.indexOf("lines") ? [] : null,
                k = -1 !== E.indexOf("words"),
                R = -1 !== E.indexOf("chars"),
                j = "absolute" === t.position || !0 === t.absolute,
                M = t.linesClass,
                G = -1 !== (M || "").indexOf("++");
            for (O && 1 === e.children.length && e.children[0]._isSplit && (e = e.children[0]), G && (M = M.split("++").join("")), p = (d = e.getElementsByTagName("*")).length, h = [], o = 0; o < p; o++) h[o] = d[o];
            if (O || j)
                for (o = 0; o < p; o++)((u = (a = h[o]).parentNode === e) || j || R && !k) && (v = a.offsetTop, O && u && Math.abs(v - S) > w && "BR" !== a.nodeName && (f = [], O.push(f), S = v), j && (a._x = a.offsetLeft, a._y = v, a._w = a.offsetWidth, a._h = a.offsetHeight), O && ((a._isSplit && u || !R && u || k && u || !k && a.parentNode.parentNode === e && !a.parentNode._isSplit) && (f.push(a), a._x -= b, I(a, e, W) && (a._wordEnd = !0)), "BR" === a.nodeName && a.nextSibling && "BR" === a.nextSibling.nodeName && O.push([])));
            for (o = 0; o < p; o++) u = (a = h[o]).parentNode === e, "BR" !== a.nodeName ? (j && (g = a.style, k || u || (a._x += a.parentNode._x, a._y += a.parentNode._y), g.left = a._x + "px", g.top = a._y + "px", g.position = "absolute", g.display = "block", g.width = a._w + 1 + "px", g.height = a._h + "px"), !k && R ? a._isSplit ? (a._next = a.nextSibling, a.parentNode.appendChild(a)) : a.parentNode._isSplit ? (a._parent = a.parentNode, !a.previousSibling && a.firstChild && (a.firstChild._isFirst = !0), a._next = a.nextSibling && a.nextSibling._isFirst ? null : a.nextSibling, a.parentNode.removeChild(a), h.splice(o--, 1), p--) : u || (v = !a.nextSibling && I(a.parentNode, e, W), a.parentNode._parent && a.parentNode._parent.appendChild(a), v && a.parentNode.appendChild($.createTextNode(" ")), t.span && (a.style.display = "inline"), L.push(a)) : a.parentNode._isSplit && !a._isSplit && "" !== a.innerHTML ? B.push(a) : R && !a._isSplit && (t.span && (a.style.display = "inline"), L.push(a))) : O || j ? (e.removeChild(a), h.splice(o--, 1), p--) : k || e.appendChild(a);
            if (O) {
                for (j && (y = $.createElement(H), e.appendChild(y), x = y.offsetWidth + "px", v = y.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(y)), g = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                for (c = " " === W && (!j || !k && !R), o = 0; o < O.length; o++) {
                    for (f = O[o], (y = $.createElement(H)).style.cssText = "display:block;text-align:" + A + ";position:" + (j ? "absolute;" : "relative;"), M && (y.className = M + (G ? o + 1 : "")), V.push(y), p = f.length, d = 0; d < p; d++) "BR" !== f[d].nodeName && (a = f[d], y.appendChild(a), c && a._wordEnd && y.appendChild($.createTextNode(" ")), j && (0 === d && (y.style.top = a._y + "px", y.style.left = b + v + "px"), a.style.top = "0px", v && (a.style.left = a._x - v + "px")));
                    0 === p ? y.innerHTML = "&nbsp;" : k || R || (P(y), D(y, String.fromCharCode(160), " ")), j && (y.style.width = x, y.style.height = a._h + "px"), e.appendChild(y)
                }
                e.style.cssText = g
            }
            j && (l > e.clientHeight && (e.style.height = l - T + "px", e.clientHeight < l && (e.style.height = l + m + "px")), r > e.clientWidth && (e.style.width = r - N + "px", e.clientWidth < r && (e.style.width = r + C + "px"))), F(i, L), F(n, B), F(s, V)
        },
        h = function(e, t, i, n) {
            var s, r, l = p(e.childNodes),
                o = l.length,
                d = "absolute" === t.position || !0 === t.absolute;
            if (3 !== e.nodeType || 1 < o) {
                for (t.absolute = !1, s = 0; s < o; s++)(3 !== (r = l[s]).nodeType || /\S+/.test(r.nodeValue)) && (d && 3 !== r.nodeType && "inline" === z(r, "display", null, !0) && (r.style.display = "inline-block", r.style.position = "relative"), r._isSplit = !0, h(r, t, i, n));
                return t.absolute = d, void(e._isSplit = !0)
            }! function(e, t, i, n) {
                var s, r, l, o, d, p, a, h, u, f = t.span ? "span" : "div",
                    c = t.type || t.split || "chars,words,lines",
                    g = (c.indexOf("words"), -1 !== c.indexOf("chars")),
                    y = "absolute" === t.position || !0 === t.absolute,
                    x = t.wordDelimiter || " ",
                    v = " " !== x ? "" : y ? "&#173; " : " ",
                    _ = t.span ? "</span>" : "</div>",
                    b = !0,
                    S = $.createElement("div"),
                    m = e.parentNode;
                for (m.insertBefore(S, e), S.textContent = e.nodeValue, m.removeChild(e), a = -1 !== (s = C(e = S)).indexOf("<"), !1 !== t.reduceWhiteSpace && (s = s.replace(N, " ").replace(T, "")), a && (s = s.split("<").join("{{LT}}")), d = s.length, r = (" " === s.charAt(0) ? v : "") + i(), l = 0; l < d; l++)
                    if ((p = s.charAt(l)) === x && s.charAt(l - 1) !== x && l) {
                        for (r += b ? _ : "", b = !1; s.charAt(l + 1) === x;) r += v, l++;
                        l === d - 1 ? r += v : ")" !== s.charAt(l + 1) && (r += v + i(), b = !0)
                    } else "{" === p && "{{LT}}" === s.substr(l, 6) ? (r += g ? n() + "{{LT}}</" + f + ">" : "{{LT}}", l += 5) : 55296 <= p.charCodeAt(0) && p.charCodeAt(0) <= 56319 || 65024 <= s.charCodeAt(l + 1) && s.charCodeAt(l + 1) <= 65039 ? (h = L(s.substr(l, 2)), u = L(s.substr(l + 2, 2)), o = w <= h && h <= A && w <= u && u <= A || 127995 <= u && u <= 127999 ? 4 : 2, r += g && " " !== p ? n() + s.substr(l, o) + "</" + f + ">" : s.substr(l, o), l += o - 1) : r += g && " " !== p ? n() + p + "</" + f + ">" : p;
                e.outerHTML = r + (b ? _ : ""), a && D(m, "{{LT}}", "<")
            }(e, t, i, n)
        },
        t = n.prototype;
    t.split = function(e) {
        this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var t, i, n, s = this.elements.length, r = e.span ? "span" : "div", l = ("absolute" === e.position || e.absolute, d(e.wordsClass, r)), o = d(e.charsClass, r); - 1 < --s;) n = this.elements[s], this._originals[s] = n.innerHTML, t = n.clientHeight, i = n.clientWidth, h(n, e, l, o), a(n, e, this.chars, this.words, this.lines, i, t);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, t.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var e = this._originals.length; - 1 < --e;) this.elements[e].innerHTML = this._originals[e];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, n.selector = i.$ || i.jQuery || function(e) {
        var t = i.$ || i.jQuery;
        return t ? (n.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, n.version = "0.5.6"
}(_gsScope),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).SplitText
    };
    "function" == typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports && (module.exports = t())
}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.CustomEase", ["easing.Ease"], function(m) {
            var x = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                S = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                v = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                d = /[cLlsS]/g,
                w = "CustomEase only accepts Cubic Bezier data.",
                D = function(e, t, i, n, o, s, a, r, u, c, h) {
                    var f, l = (e + i) / 2,
                        g = (t + n) / 2,
                        p = (i + o) / 2,
                        x = (n + s) / 2,
                        d = (o + a) / 2,
                        y = (s + r) / 2,
                        m = (l + p) / 2,
                        S = (g + x) / 2,
                        v = (p + d) / 2,
                        w = (x + y) / 2,
                        _ = (m + v) / 2,
                        b = (S + w) / 2,
                        M = a - e,
                        k = r - t,
                        C = Math.abs((i - a) * k - (n - r) * M),
                        z = Math.abs((o - a) * k - (s - r) * M);
                    return c || (c = [{
                        x: e,
                        y: t
                    }, {
                        x: a,
                        y: r
                    }], h = 1), c.splice(h || c.length - 1, 0, {
                        x: _,
                        y: b
                    }), u * (M * M + k * k) < (C + z) * (C + z) && (f = c.length, D(e, t, l, g, m, S, _, b, u, c, h), D(_, b, v, w, d, y, a, r, u, c, h + 1 + (c.length - f))), c
                },
                n = function(e) {
                    var t = this.lookup[e * this.l | 0] || this.lookup[this.l - 1];
                    return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
                },
                o = function(e, t, i) {
                    this._calcEnd = !0, (this.id = e) && (m.map[e] = this), this.getRatio = n, this.setData(t, i)
                },
                e = o.prototype = new m;
            return e.constructor = o, e.setData = function(e, t) {
                var i, n, o, s, a, r, u, c, h, f, l = (e = e || "0,0,1,1").match(x),
                    g = 1,
                    p = [];
                if (f = (t = t || {}).precision || 1, this.data = e, this.lookup = [], this.points = p, this.fast = f <= 1, (d.test(e) || -1 !== e.indexOf("M") && -1 === e.indexOf("C")) && (l = function(e) {
                        var t, i, n, o, s, a, r, u, c, h, f, l = (e + "").replace(v, function(e) {
                                var t = +e;
                                return t < 1e-4 && -1e-4 < t ? 0 : t
                            }).match(S) || [],
                            g = [],
                            p = 0,
                            x = 0,
                            d = l.length,
                            y = 2;
                        for (t = 0; t < d; t++)
                            if (c = o, isNaN(l[t]) ? s = (o = l[t].toUpperCase()) !== l[t] : t--, i = +l[t + 1], n = +l[t + 2], s && (i += p, n += x), t || (r = i, u = n), "M" === o) a && a.length < 8 && (g.length -= 1, y = 0), p = r = i, x = u = n, a = [i, n], y = 2, g.push(a), t += 2, o = "L";
                            else if ("C" === o) a || (a = [0, 0]), a[y++] = i, a[y++] = n, s || (p = x = 0), a[y++] = p + 1 * l[t + 3], a[y++] = x + 1 * l[t + 4], a[y++] = p += 1 * l[t + 5], a[y++] = x += 1 * l[t + 6], t += 6;
                        else if ("S" === o) "C" === c || "S" === c ? (h = p - a[y - 4], f = x - a[y - 3], a[y++] = p + h, a[y++] = x + f) : (a[y++] = p, a[y++] = x), a[y++] = i, a[y++] = n, s || (p = x = 0), a[y++] = p += 1 * l[t + 3], a[y++] = x += 1 * l[t + 4], t += 4;
                        else {
                            if ("L" !== o && "Z" !== o) throw w;
                            "Z" === o && (i = r, n = u, a.closed = !0), ("L" === o || .5 < Math.abs(p - i) || .5 < Math.abs(x - n)) && (a[y++] = p + (i - p) / 3, a[y++] = x + (n - x) / 3, a[y++] = p + 2 * (i - p) / 3, a[y++] = x + 2 * (n - x) / 3, a[y++] = i, a[y++] = n, "L" === o && (t += 2)), p = i, x = n
                        }
                        return g[0]
                    }(e)), 4 === (i = l.length)) l.unshift(0, 0), l.push(1, 1), i = 8;
                else if ((i - 2) % 6) throw w;
                for ((0 != +l[0] || 1 != +l[i - 2]) && function(e, t, i) {
                        i || 0 === i || (i = Math.max(+e[e.length - 1], +e[1]));
                        var n, o = -1 * +e[0],
                            s = -i,
                            a = e.length,
                            r = 1 / (+e[a - 2] + o),
                            u = -t || (Math.abs(+e[a - 1] - +e[1]) < .01 * (+e[a - 2] - +e[0]) ? function(e) {
                                var t, i = e.length,
                                    n = 999999999999;
                                for (t = 1; t < i; t += 6) + e[t] < n && (n = +e[t]);
                                return n
                            }(e) + s : +e[a - 1] + s);
                        for (u = u ? 1 / u : -r, n = 0; n < a; n += 2) e[n] = (+e[n] + o) * r, e[n + 1] = (+e[n + 1] + s) * u
                    }(l, t.height, t.originY), this.rawBezier = l, s = 2; s < i; s += 6) n = {
                    x: +l[s - 2],
                    y: +l[s - 1]
                }, o = {
                    x: +l[s + 4],
                    y: +l[s + 5]
                }, p.push(n, o), D(n.x, n.y, +l[s], +l[s + 1], +l[s + 2], +l[s + 3], o.x, o.y, 1 / (2e5 * f), p, p.length - 1);
                for (i = p.length, s = 0; s < i; s++) u = p[s], c = p[s - 1] || u, u.x > c.x || c.y !== u.y && c.x === u.x || u === c ? (c.cx = u.x - c.x, c.cy = u.y - c.y, c.n = u, c.nx = u.x, this.fast && 1 < s && 2 < Math.abs(c.cy / c.cx - p[s - 2].cy / p[s - 2].cx) && (this.fast = !1), c.cx < g && (c.cx ? g = c.cx : c.cx = .001)) : (p.splice(s--, 1), i--);
                if (i = 1 / g + 1 | 0, a = 1 / (this.l = i), u = p[r = 0], this.fast) {
                    for (s = 0; s < i; s++) h = s * a, u.nx < h && (u = p[++r]), n = u.y + (h - u.x) / u.cx * u.cy, this.lookup[s] = {
                        x: h,
                        cx: a,
                        y: n,
                        cy: 0,
                        nx: 9
                    }, s && (this.lookup[s - 1].cy = n - this.lookup[s - 1].y);
                    this.lookup[i - 1].cy = p[p.length - 1].y - n
                } else
                    for (s = 0; s < i; s++) u.nx < s * a && (u = p[++r]), this.lookup[s] = u;
                return this
            }, e.getRatio = n, e.getSVGData = function(e) {
                return o.getSVGData(this, e)
            }, o.create = function(e, t, i) {
                return new o(e, t, i)
            }, o.version = "0.2.0", o.bezierToPoints = D, o.get = function(e) {
                return m.map[e]
            }, o.getSVGData = function(e, t) {
                var i, n, o, s, a, r, u, c, h, f, l = 1e3,
                    g = (t = t || {}).width || 100,
                    p = t.height || 100,
                    x = t.x || 0,
                    d = (t.y || 0) + p,
                    y = t.path;
                if (t.invert && (p = -p, d = 0), (e = e.getRatio ? e : m.map[e] || console.log("No ease found: ", e)).rawBezier) {
                    for (i = [], u = e.rawBezier.length, o = 0; o < u; o += 2) i.push(((x + e.rawBezier[o] * g) * l | 0) / l + "," + ((d + e.rawBezier[o + 1] * -p) * l | 0) / l);
                    i[0] = "M" + i[0], i[1] = "C" + i[1]
                } else
                    for (i = ["M" + x + "," + d], s = 1 / (u = Math.max(5, 200 * (t.precision || 1))), c = 5 / (u += 2), h = ((x + s * g) * l | 0) / l, n = ((f = ((d + e.getRatio(s) * -p) * l | 0) / l) - d) / (h - x), o = 2; o < u; o++) a = ((x + o * s * g) * l | 0) / l, r = ((d + e.getRatio(o * s) * -p) * l | 0) / l, (Math.abs((r - f) / (a - h) - n) > c || o === u - 1) && (i.push(h + "," + f), n = (r - f) / (a - h)), h = a, f = r;
                return y && ("string" == typeof y ? document.querySelector(y) : y).setAttribute("d", i.join(" ")), i.join(" ")
            }, o
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).CustomEase
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }();
! function(p, c, v) {
    function m(e, n) {
        return typeof e === n
    }

    function h() {
        return "function" != typeof c.createElement ? c.createElement(arguments[0]) : b ? c.createElementNS.call(c, "http://www.w3.org/2000/svg", arguments[0]) : c.createElement.apply(c, arguments)
    }

    function g(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function a(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function y(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function C(e, n, t, r) {
        var o, i, s, a, l, f = "modernizr",
            u = h("div"),
            d = ((l = c.body) || ((l = h(b ? "svg" : "body")).fake = !0), l);
        if (parseInt(t, 10))
            for (; t--;)(s = h("div")).id = r ? r[t] : f + (t + 1), u.appendChild(s);
        return (o = h("style")).type = "text/css", o.id = "s" + f, (d.fake ? d : u).appendChild(o), d.appendChild(u), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(c.createTextNode(e)), u.id = f, d.fake && (d.style.background = "", d.style.overflow = "hidden", a = x.style.overflow, x.style.overflow = "hidden", x.appendChild(d)), i = n(u, e), d.fake ? (d.parentNode.removeChild(d), x.style.overflow = a, x.offsetHeight) : u.parentNode.removeChild(u), !!i
    }

    function l(e, n, t, r) {
        function o() {
            s && (delete _.style, delete _.modElem)
        }
        if (r = !m(r, "undefined") && r, !m(t, "undefined")) {
            var i = function(e, n) {
                var t = e.length;
                if ("CSS" in p && "supports" in p.CSS) {
                    for (; t--;)
                        if (p.CSS.supports(y(e[t]), n)) return !0;
                    return !1
                }
                if ("CSSSupportsRule" in p) {
                    for (var r = []; t--;) r.push("(" + y(e[t]) + ":" + n + ")");
                    return C("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                        return "absolute" == getComputedStyle(e, null).position
                    })
                }
                return v
            }(e, t);
            if (!m(i, "undefined")) return i
        }
        for (var s, a, l, f, u, d = ["modernizr", "tspan", "samp"]; !_.style && d.length;) s = !0, _.modElem = h(d.shift()), _.style = _.modElem.style;
        for (l = e.length, a = 0; a < l; a++)
            if (f = e[a], u = _.style[f], !!~("" + f).indexOf("-") && (f = g(f)), _.style[f] !== v) {
                if (r || m(t, "undefined")) return o(), "pfx" != n || f;
                try {
                    _.style[f] = t
                } catch (e) {}
                if (_.style[f] != u) return o(), "pfx" != n || f
            }
        return o(), !1
    }

    function r(e, n, t, r, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + w.join(i + " ") + i).split(" ");
        return m(n, "string") || m(n, "undefined") ? l(s, n, r, o) : function(e, n, t) {
            var r;
            for (var o in e)
                if (e[o] in n) return !1 === t ? e[o] : m(r = n[e[o]], "function") ? a(r, t || n) : r;
            return !1
        }(s = (e + " " + S.join(i + " ") + i).split(" "), n, t)
    }

    function e(e, n, t) {
        return r(e, v, v, n, t)
    }
    var f = [],
        u = [],
        n = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                u.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                u.push({
                    name: null,
                    fn: e
                })
            }
        },
        d = function() {};
    d.prototype = n, d = new d;
    var x = c.documentElement,
        b = "svg" === x.nodeName.toLowerCase();
    d.addTest("placeholder", "placeholder" in h("input") && "placeholder" in h("textarea"));
    var t = "Moz O ms Webkit",
        w = n._config.usePrefixes ? t.split(" ") : [];
    n._cssomPrefixes = w;
    var o = function(e) {
        var n, t = prefixes.length,
            r = p.CSSRule;
        if (void 0 === r) return v;
        if (!e) return !1;
        if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in r) return "@" + e;
        for (var o = 0; o < t; o++) {
            var i = prefixes[o];
            if (i.toUpperCase() + "_" + n in r) return "@-" + i.toLowerCase() + "-" + e
        }
        return !1
    };
    n.atRule = o;
    var S = n._config.usePrefixes ? t.toLowerCase().split(" ") : [];
    n._domPrefixes = S;
    var i = {
        elem: h("modernizr")
    };
    d._q.push(function() {
        delete i.elem
    });
    var _ = {
        style: i.elem.style
    };
    d._q.unshift(function() {
        delete _.style
    }), n.testAllProps = r;
    var s = n.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? o(e) : (-1 != e.indexOf("-") && (e = g(e)), n ? r(e, n, t) : r(e, "pfx"))
    };
    d.addTest("backgroundblendmode", s("backgroundBlendMode", "text")), d.addTest("objectfit", !!s("objectFit"), {
            aliases: ["object-fit"]
        }), n.testAllProps = e, d.addTest("backgroundcliptext", function() {
            return e("backgroundClip", "text")
        }), d.addTest("bgsizecover", e("backgroundSize", "cover")),
        function() {
            var e, n, t, r, o, i;
            for (var s in u)
                if (u.hasOwnProperty(s)) {
                    if (e = [], (n = u[s]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                        for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                    for (r = m(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) 1 === (i = e[o].split(".")).length ? d[i[0]] = r : (!d[i[0]] || d[i[0]] instanceof Boolean || (d[i[0]] = new Boolean(d[i[0]])), d[i[0]][i[1]] = r), f.push((r ? "" : "no-") + i.join("-"))
                }
        }(),
        function(e) {
            var n = x.className,
                t = d._config.classPrefix || "";
            if (b && (n = n.baseVal), d._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(r, "$1" + t + "js$2")
            }
            d._config.enableClasses && (n += " " + t + e.join(" " + t), b ? x.className.baseVal = n : x.className = n)
        }(f), delete n.addTest, delete n.addAsyncTest;
    for (var T = 0; T < d._q.length; T++) d._q[T]();
    p.Modernizr = d
}(window, document);
! function(c, w, x) {
    "use strict";

    function t(e) {
        if (S = w.documentElement, n = w.body, G(), re = this, le = (e = e || {}).constants || {}, e.easing)
            for (var t in e.easing) Y[t] = e.easing[t];
        de = e.edgeStrategy || "set", ae = {
            beforerender: e.beforerender,
            render: e.render,
            keyframe: e.keyframe
        }, (ie = !1 !== e.forceHeight) && (Ie = e.scale || 1), se = e.mobileDeceleration || u, fe = !1 !== e.smoothScrolling, ue = e.smoothScrollingDuration || p, me = {
            targetTop: re.getScrollTop()
        }, (Me = (e.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || c.opera)
        })()) ? ((oe = w.getElementById(e.skrollrBody || m)) && te(), R(), Ee(S, [a, s], [i])) : Ee(S, [a, l], [i]), re.refresh(), he(c, "resize orientationchange", function() {
            var e = S.clientWidth,
                t = S.clientHeight;
            (t !== ze || e !== Ve) && (ze = t, Ve = e, qe = !0)
        });
        var r = K();
        return function e() {
            U(), ve = r(e)
        }(), re
    }
    var S, n, E = {
            get: function() {
                return re
            },
            init: function(e) {
                return re || new t(e)
            },
            VERSION: "0.6.29"
        },
        A = Object.prototype.hasOwnProperty,
        k = c.Math,
        o = c.getComputedStyle,
        F = "touchstart",
        C = "touchmove",
        H = "touchcancel",
        D = "touchend",
        I = "skrollable",
        P = I + "-before",
        N = I + "-between",
        O = I + "-after",
        a = "skrollr",
        i = "no-" + a,
        l = a + "-desktop",
        s = a + "-mobile",
        f = "linear",
        u = .004,
        m = "skrollr-body",
        p = 200,
        d = "center",
        g = "bottom",
        V = "___skrollable_id",
        z = /^(?:input|textarea|button|select)$/i,
        r = /^\s+|\s+$/g,
        q = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        v = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        h = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function(e, t) {
            return t.toUpperCase()
        },
        y = /[\-+]?[\d]*\.?[\d]+/g,
        T = /\{\?\}/g,
        b = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        $ = /[a-z\-]+-gradient/g,
        B = "",
        _ = "",
        G = function() {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (o) {
                var t = o(n, null);
                for (var r in t)
                    if (B = r.match(e) || +r == r && t[r].match(e)) break;
                if (!B) return B = _ = "", x;
                "-" === (B = B[0]).slice(0, 1) ? B = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[_ = B] : _ = "-" + B.toLowerCase() + "-"
            }
        },
        K = function() {
            var e = c.requestAnimationFrame || c[B.toLowerCase() + "RequestAnimationFrame"],
                n = Ce();
            return (Me || !e) && (e = function(e) {
                var t = Ce() - n,
                    r = k.max(0, 1e3 / 60 - t);
                return c.setTimeout(function() {
                    n = Ce(), e()
                }, r)
            }), e
        },
        Y = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return e * e
            },
            cubic: function(e) {
                return e * e * e
            },
            swing: function(e) {
                return -k.cos(e * k.PI) / 2 + .5
            },
            sqrt: function(e) {
                return k.sqrt(e)
            },
            outCubic: function(e) {
                return k.pow(e - 1, 3) + 1
            },
            bounce: function(e) {
                var t;
                if (e <= .5083) t = 3;
                else if (e <= .8489) t = 9;
                else if (e <= .96208) t = 27;
                else {
                    if (!(e <= .99981)) return 1;
                    t = 91
                }
                return 1 - k.abs(3 * k.cos(1.028 * e * t) / t)
            }
        };
    t.prototype.refresh = function(e) {
        var t, r, n = !1;
        for (e === x ? (n = !0, ne = [], Le = 0, e = w.getElementsByTagName("*")) : e.length === x && (e = [e]), t = 0, r = e.length; t < r; t++) {
            var o = e[t],
                a = o,
                i = [],
                l = fe,
                s = de,
                c = !1;
            if (n && V in o && delete o[V], o.attributes) {
                for (var f = 0, u = o.attributes.length; f < u; f++) {
                    var m = o.attributes[f];
                    if ("data-anchor-target" !== m.name)
                        if ("data-smooth-scrolling" !== m.name)
                            if ("data-edge-strategy" !== m.name)
                                if ("data-emit-events" !== m.name) {
                                    var p = m.name.match(q);
                                    if (null !== p) {
                                        var d = {
                                            props: m.value,
                                            element: o,
                                            eventType: m.name.replace(L, M)
                                        };
                                        i.push(d);
                                        var g = p[1];
                                        g && (d.constant = g.substr(1));
                                        var v = p[2];
                                        /p$/.test(v) ? (d.isPercentage = !0, d.offset = (0 | v.slice(0, -1)) / 100) : d.offset = 0 | v;
                                        var h = p[3],
                                            y = p[4] || h;
                                        h && "start" !== h && "end" !== h ? (d.mode = "relative", d.anchors = [h, y]) : (d.mode = "absolute", "end" === h ? d.isEnd = !0 : d.isPercentage || (d.offset = d.offset * Ie))
                                    }
                                } else c = !0;
                    else s = m.value;
                    else l = "off" !== m.value;
                    else if (null === (a = w.querySelector(m.value))) throw 'Unable to find anchor target "' + m.value + '"'
                }
                var T, b, S;
                if (i.length) !n && V in o ? (S = o[V], T = ne[S].styleAttr, b = ne[S].classAttr) : (S = o[V] = Le++, T = o.style.cssText, b = xe(o)), ne[S] = {
                    element: o,
                    styleAttr: T,
                    classAttr: b,
                    anchorTarget: a,
                    keyFrames: i,
                    smoothScrolling: l,
                    edgeStrategy: s,
                    emitEvents: c,
                    lastFrameIndex: -1
                }, Ee(o, [I], [])
            }
        }
        for (Se(), t = 0, r = e.length; t < r; t++) {
            var k = ne[e[t][V]];
            k !== x && (X(k), W(k))
        }
        return re
    }, t.prototype.relativeToAbsolute = function(e, t, r) {
        var n = S.clientHeight,
            o = e.getBoundingClientRect(),
            a = o.top,
            i = o.bottom - o.top;
        return t === g ? a -= n : t === d && (a -= n / 2), r === g ? a += i : r === d && (a += i / 2), 0 | (a += re.getScrollTop()) + .5
    }, t.prototype.animateTo = function(e, t) {
        t = t || {};
        var r = Ce(),
            n = re.getScrollTop();
        return (ce = {
            startTop: n,
            topDiff: e - n,
            targetTop: e,
            duration: t.duration || 1e3,
            startTime: r,
            endTime: r + (t.duration || 1e3),
            easing: Y[t.easing || f],
            done: t.done
        }).topDiff || (ce.done && ce.done.call(re, !1), ce = x), re
    }, t.prototype.stopAnimateTo = function() {
        ce && ce.done && ce.done.call(re, !0), ce = x
    }, t.prototype.isAnimatingTo = function() {
        return !!ce
    }, t.prototype.isMobile = function() {
        return Me
    }, t.prototype.setScrollTop = function(e, t) {
        return pe = !0 === t, Me ? $e = k.min(k.max(e, 0), De) : c.scrollTo(0, e), re
    }, t.prototype.getScrollTop = function() {
        return Me ? $e : c.pageYOffset || S.scrollTop || n.scrollTop || 0
    }, t.prototype.getMaxScrollTop = function() {
        return De
    }, t.prototype.on = function(e, t) {
        return ae[e] = t, re
    }, t.prototype.off = function(e) {
        return delete ae[e], re
    }, t.prototype.destroy = function() {
        var e;
        (e = c.cancelAnimationFrame || c[B.toLowerCase() + "CancelAnimationFrame"], (Me || !e) && (e = function(e) {
            return c.clearTimeout(e)
        }), e)(ve), Te(), Ee(S, [i], [a, l, s]);
        for (var t = 0, r = ne.length; t < r; t++) ee(ne[t].element);
        S.style.overflow = n.style.overflow = "", S.style.height = n.style.height = "", oe && E.setStyle(oe, "transform", "none"), Pe = "down", Me = qe = !(Ne = -(Ie = 1)), $e = Le = ze = Ve = De = 0, ge = de = pe = me = ue = fe = ce = se = le = ie = ae = oe = re = x
    };
    var R = function() {
            var f, u, m, p, d, g, v, h, y, T, b;
            he(S, [F, C, H, D].join(" "), function(e) {
                var t = e.changedTouches[0];
                for (p = e.target; 3 === p.nodeType;) p = p.parentNode;
                switch (d = t.clientY, g = t.clientX, y = e.timeStamp, z.test(p.tagName) || e.preventDefault(), e.type) {
                    case F:
                        f && f.blur(), re.stopAnimateTo(), f = p, u = v = d, m = g, y;
                        break;
                    case C:
                        z.test(p.tagName) && w.activeElement !== p && e.preventDefault(), h = d - v, b = y - T, re.setScrollTop($e - h, !0), v = d, T = y;
                        break;
                    default:
                    case H:
                    case D:
                        var r = u - d,
                            n = m - g;
                        if (n * n + r * r < 49) {
                            if (!z.test(f.tagName)) {
                                f.focus();
                                var o = w.createEvent("MouseEvents");
                                o.initMouseEvent("click", !0, !0, e.view, 1, t.screenX, t.screenY, t.clientX, t.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), f.dispatchEvent(o)
                            }
                            return
                        }
                        f = x;
                        var a = h / b;
                        a = k.max(k.min(a, 3), -3);
                        var i = k.abs(a / se),
                            l = a * i + .5 * se * i * i,
                            s = re.getScrollTop() - l,
                            c = 0;
                        De < s ? (c = (De - s) / l, s = De) : s < 0 && (c = -s / l, s = 0), i *= 1 - c, re.animateTo(0 | s + .5, {
                            easing: "outCubic",
                            duration: i
                        })
                }
            }), c.scrollTo(0, 0), S.style.overflow = n.style.overflow = "hidden"
        },
        U = function() {
            qe && (qe = !1, Se());
            var e, t, r = re.getScrollTop(),
                n = Ce();
            if (ce) n >= ce.endTime ? (r = ce.targetTop, e = ce.done, ce = x) : (t = ce.easing((n - ce.startTime) / ce.duration), r = 0 | ce.startTop + t * ce.topDiff), re.setScrollTop(r, !0);
            else if (!pe) {
                me.targetTop - r && (me = {
                    startTop: Ne,
                    topDiff: r - Ne,
                    targetTop: r,
                    startTime: Oe,
                    endTime: Oe + ue
                }), me.endTime >= n && (t = Y.sqrt((n - me.startTime) / ue), r = 0 | me.startTop + t * me.topDiff)
            }
            if (Me && oe && E.setStyle(oe, "transform", "translate(0, " + -$e + "px) " + ge), pe || Ne !== r) {
                var o = {
                    curTop: r,
                    lastTop: Ne,
                    maxTop: De,
                    direction: Pe = Ne < r ? "down" : r < Ne ? "up" : Pe
                };
                (pe = !1) !== (ae.beforerender && ae.beforerender.call(re, o)) && (function(e, t) {
                    for (var r = 0, n = ne.length; r < n; r++) {
                        var o, a, i = ne[r],
                            l = i.element,
                            s = i.smoothScrolling ? e : t,
                            c = i.keyFrames,
                            f = c.length,
                            u = c[0],
                            m = c[c.length - 1],
                            p = u.frame > s,
                            d = s > m.frame,
                            g = p ? u : m,
                            v = i.emitEvents,
                            h = i.lastFrameIndex;
                        if (p || d) {
                            if (p && -1 === i.edge || d && 1 === i.edge) continue;
                            switch (p ? (Ee(l, [P], [O, N]), v && -1 < h && (be(l, u.eventType, Pe), i.lastFrameIndex = -1)) : (Ee(l, [O], [P, N]), v && h < f && (be(l, m.eventType, Pe), i.lastFrameIndex = f)), i.edge = p ? -1 : 1, i.edgeStrategy) {
                                case "reset":
                                    ee(l);
                                    continue;
                                case "ease":
                                    s = g.frame;
                                    break;
                                default:
                                case "set":
                                    var y = g.props;
                                    for (o in y) A.call(y, o) && (a = Q(y[o].value), 0 === o.indexOf("@") ? l.setAttribute(o.substr(1), a) : E.setStyle(l, o, a));
                                    continue
                            }
                        } else 0 !== i.edge && (Ee(l, [I, N], [P, O]), i.edge = 0);
                        for (var T = 0; T < f - 1; T++)
                            if (s >= c[T].frame && c[T + 1].frame >= s) {
                                var b = c[T],
                                    S = c[T + 1];
                                for (o in b.props)
                                    if (A.call(b.props, o)) {
                                        var k = (s - b.frame) / (S.frame - b.frame);
                                        k = b.props[o].easing(k), a = J(b.props[o].value, S.props[o].value, k), a = Q(a), 0 === o.indexOf("@") ? l.setAttribute(o.substr(1), a) : E.setStyle(l, o, a)
                                    }
                                v && h !== T && (be(l, "down" === Pe ? b.eventType : S.eventType, Pe), i.lastFrameIndex = T);
                                break
                            }
                    }
                }(r, re.getScrollTop()), Ne = r, ae.render && ae.render.call(re, o)), e && e.call(re, !1)
            }
            Oe = n
        },
        X = function(e) {
            for (var t = 0, r = e.keyFrames.length; t < r; t++) {
                for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = v.exec(l.props));) a = i[1], o = i[2], null !== (n = a.match(h)) ? (a = n[1], n = n[2]) : n = f, o = o.indexOf("!") ? j(o) : [o.slice(1)], s[a] = {
                    value: o,
                    easing: Y[n]
                };
                l.props = s
            }
        },
        j = function(e) {
            var t = [];
            return b.lastIndex = 0, e = e.replace(b, function(e) {
                return e.replace(y, function(e) {
                    return e / 255 * 100 + "%"
                })
            }), _ && ($.lastIndex = 0, e = e.replace($, function(e) {
                return _ + e
            })), e = e.replace(y, function(e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        W = function(e) {
            var t, r, n = {};
            for (t = 0, r = e.keyFrames.length; t < r; t++) Z(e.keyFrames[t], n);
            for (n = {}, t = e.keyFrames.length - 1; 0 <= t; t--) Z(e.keyFrames[t], n)
        },
        Z = function(e, t) {
            var r;
            for (r in t) A.call(e.props, r) || (e.props[r] = t[r]);
            for (r in e.props) t[r] = e.props[r]
        },
        J = function(e, t, r) {
            var n, o = e.length;
            if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var a = [e[0]];
            for (n = 1; n < o; n++) a[n] = e[n] + (t[n] - e[n]) * r;
            return a
        },
        Q = function(e) {
            var t = 1;
            return T.lastIndex = 0, e[0].replace(T, function() {
                return e[t++]
            })
        },
        ee = function(e, t) {
            for (var r, n, o = 0, a = (e = [].concat(e)).length; o < a; o++) n = e[o], (r = ne[n[V]]) && (t ? (n.style.cssText = r.dirtyStyleAttr, Ee(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = xe(n), n.style.cssText = r.styleAttr, Ee(n, r.classAttr)))
        },
        te = function() {
            ge = "translateZ(0)", E.setStyle(oe, "transform", ge);
            var e = o(oe),
                t = e.getPropertyValue("transform"),
                r = e.getPropertyValue(_ + "transform");
            t && "none" !== t || r && "none" !== r || (ge = "")
        };
    E.setStyle = function(e, t, r) {
        var n = e.style;
        if ("zIndex" === (t = t.replace(L, M).replace("-", ""))) n[t] = isNaN(r) ? r : "" + (0 | r);
        else if ("float" === t) n.styleFloat = n.cssFloat = r;
        else try {
            B && (n[B + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r
        } catch (e) {}
    };
    var re, ne, oe, ae, ie, le, se, ce, fe, ue, me, pe, de, ge, ve, he = E.addEvent = function(e, t, r) {
            for (var n, o = function(e) {
                    return (e = e || c.event).target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function() {
                        e.returnValue = !1, e.defaultPrevented = !0
                    }), r.call(this, e)
                }, a = 0, i = (t = t.split(" ")).length; a < i; a++) n = t[a], e.addEventListener ? e.addEventListener(n, r, !1) : e.attachEvent("on" + n, o), Be.push({
                element: e,
                name: n,
                listener: r
            })
        },
        ye = E.removeEvent = function(e, t, r) {
            for (var n = 0, o = (t = t.split(" ")).length; n < o; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
        },
        Te = function() {
            for (var e, t = 0, r = Be.length; t < r; t++) e = Be[t], ye(e.element, e.name, e.listener);
            Be = []
        },
        be = function(e, t, r) {
            ae.keyframe && ae.keyframe.call(re, e, t, r)
        },
        Se = function() {
            var e = re.getScrollTop();
            De = 0, ie && !Me && (n.style.height = ""),
                function() {
                    var e, t, r, n, o, a, i, l, s, c, f, u = S.clientHeight,
                        m = ke();
                    for (l = 0, s = ne.length; l < s; l++)
                        for (t = (e = ne[l]).element, r = e.anchorTarget, o = 0, a = (n = e.keyFrames).length; o < a; o++) c = (i = n[o]).offset, f = m[i.constant] || 0, i.frame = c, i.isPercentage && (c *= u, i.frame = c), "relative" === i.mode && (ee(t), i.frame = re.relativeToAbsolute(r, i.anchors[0], i.anchors[1]) - c, ee(t, !0)), i.frame += f, ie && !i.isEnd && i.frame > De && (De = i.frame);
                    for (De = k.max(De, we()), l = 0, s = ne.length; l < s; l++) {
                        for (o = 0, a = (n = (e = ne[l]).keyFrames).length; o < a; o++) f = m[(i = n[o]).constant] || 0, i.isEnd && (i.frame = De - i.offset + f);
                        e.keyFrames.sort(He)
                    }
                }(), ie && !Me && (n.style.height = De + S.clientHeight + "px"), Me ? re.setScrollTop(k.min(re.getScrollTop(), De)) : re.setScrollTop(e, !0), pe = !0
        },
        ke = function() {
            var e, t, r = S.clientHeight,
                n = {};
            for (e in le) "function" == typeof(t = le[e]) ? t = t.call(re) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
            return n
        },
        we = function() {
            var e = 0;
            return oe && (e = k.max(oe.offsetHeight, oe.scrollHeight)), k.max(e, n.scrollHeight, n.offsetHeight, S.scrollHeight, S.offsetHeight, S.clientHeight) - S.clientHeight
        },
        xe = function(e) {
            var t = "className";
            return c.SVGElement && e instanceof c.SVGElement && (e = e[t], t = "baseVal"), e[t]
        },
        Ee = function(e, t, r) {
            var n = "className";
            if (c.SVGElement && e instanceof c.SVGElement && (e = e[n], n = "baseVal"), r === x) return e[n] = t, x;
            for (var o = e[n], a = 0, i = r.length; a < i; a++) o = Fe(o).replace(Fe(r[a]), " ");
            o = Ae(o);
            for (var l = 0, s = t.length; l < s; l++) - 1 === Fe(o).indexOf(Fe(t[l])) && (o += " " + t[l]);
            e[n] = Ae(o)
        },
        Ae = function(e) {
            return e.replace(r, "")
        },
        Fe = function(e) {
            return " " + e + " "
        },
        Ce = Date.now || function() {
            return +new Date
        },
        He = function(e, t) {
            return e.frame - t.frame
        },
        De = 0,
        Ie = 1,
        Pe = "down",
        Ne = -1,
        Oe = Ce(),
        Ve = 0,
        ze = 0,
        qe = !1,
        Le = 0,
        Me = !1,
        $e = 0,
        Be = [];
    "function" == typeof define && define.amd ? define([], function() {
        return E
    }) : "undefined" != typeof module && module.exports ? module.exports = E : c.skrollr = E
}(window, document);
var browserPrefix = "",
    $htmlbody = jQuery("html:not(:animated),body:not(:animated)");
usrAg = navigator.userAgent, -1 < usrAg.indexOf("Chrome") || -1 < usrAg.indexOf("Safari") ? browserPrefix = "-webkit-" : -1 < usrAg.indexOf("Opera") ? browserPrefix = "-o" : -1 < usrAg.indexOf("Firefox") ? browserPrefix = "-moz-" : -1 < usrAg.indexOf("MSIE") && (browserPrefix = "-ms-");
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 100)
};

function scroll_to_element(e, r, t) {
    r = void 0 !== r ? r : 0, t = void 0 !== t ? t : 1800;
    var n = e.offset().top - r;
    $htmlbody.animate({
        scrollTop: n
    }, t)
}

function scroll_to_position(e, r) {
    r = void 0 !== r ? r : 600, $htmlbody.animate({
        scrollTop: e
    }, r)
}

function format(e) {
    return m = Math.floor(e / 60), m = 10 <= m ? m : "0" + m, e = 10 <= (e = Math.floor(e % 60)) ? e : "0" + e, m + ":" + e
}

function checkEmail(e) {
    var r = document.getElementById(e);
    return 0 != r.value.length && !!r.value.match(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/)
}

function show_error(e, r) {
    jQuery("#" + e).addClass("field-with-error"), jQuery("#" + r + " label[for='" + e + "']").addClass("label_with_error")
}

function clear_errors(r) {
    jQuery("#" + r + " input, #" + r + " select, #" + r + " textarea").each(function() {
        if ("hidden" != jQuery(this).attr("type") && "button" != jQuery(this).attr("type") && "submit" != jQuery(this).attr("type") || void 0 !== jQuery(this).attr("noborder")) {
            jQuery(this).removeClass("field-with-error");
            var e = jQuery(this).attr("id");
            jQuery("#" + r + " label[for='" + e + "']").removeClass("label_with_error")
        }
    }), jQuery(".err-msg").html("")
}
get_now = Date.now || function() {
    return (new Date).getTime()
}, _throttle = function(t, n, o) {
    var i, a, u, l = null,
        s = 0;
    o || (o = {});
    var m = function() {
        s = !1 === o.leading ? 0 : get_now(), l = null, u = t.apply(i, a), l || (i = a = null)
    };
    return function() {
        var e = get_now();
        s || !1 !== o.leading || (s = e);
        var r = n - (e - s);
        return i = this, a = arguments, r <= 0 || n < r ? (l && (clearTimeout(l), l = null), s = e, u = t.apply(i, a), l || (i = a = null)) : l || !1 === o.trailing || (l = setTimeout(m, r)), u
    }
}, _debounce = function(r, t, n) {
    var o, i, a, u, l, s = function() {
        var e = get_now() - u;
        e < t && 0 <= e ? o = setTimeout(s, t - e) : (o = null, n || (l = r.apply(a, i), o || (a = i = null)))
    };
    return function() {
        a = this, i = arguments, u = get_now();
        var e = n && !o;
        return o || (o = setTimeout(s, t)), e && (l = r.apply(a, i), a = i = null), l
    }
};
var s, bLazy, Main = {
    el: {
        openclose: jQuery(".openclose"),
        scroll_to: jQuery(".scroll-to"),
        bricks_holder: jQuery("#bricks-holder"),
        menu_handler: jQuery("#menu-handler"),
        close_menu: jQuery("#close-menu"),
        menu_holder: jQuery("#menu-holder"),
        body: jQuery("body"),
        parallax_scene: jQuery(".parallax-scene"),
        cookie: jQuery("#cookie"),
        cookie_accept: jQuery("#cookie-accept"),
        cookie_close: jQuery("#close-cookie"),
        search_handler: jQuery("#search-handler"),
        search_field: jQuery("#search-field"),
        search_autocomplete: jQuery("#search-autocomplete"),
        window: jQuery(window)
    },
    vars: {
        window_w: jQuery(window).width(),
        window_h: jQuery(window).height()
    },
    init: function() {
        if (Main.el.body.addClass("loaded"), Main.resizing(), Main.el.body.hasClass("page-template-home") && jQuery(window).scroll(function() {
                jQuery(".parallax").each(function() {
                    var e = jQuery(window).scrollTop(),
                        a = jQuery(this).offset().top,
                        t = jQuery(this).height(),
                        s = jQuery(this).attr("data-velocity");
                    e + Main.vars.window_h > a && e < a + t && TweenLite.to(jQuery(this), 1.2, {
                        yPercent: (e + Main.vars.window_h - a) / Main.vars.window_h * s,
                        xPercent: (e + Main.vars.window_w - a) / Main.vars.window_w * s,
                        ease: Power1.easeOut,
                        overwrite: 0
                    }), 0 == e && TweenLite.to(jQuery(this), 1.2, {
                        yPercent: 0,
                        xPercent: 0,
                        ease: Power1.easeOut,
                        overwrite: 0
                    })
                })
            }), jQuery(".datepicker").datepicker({
                format: "YYYY-MM-DD",
                weekStart: 1,
                startView: 2,
                yearFirst: !0,
                autoHide: !0,
                endDate: new Date
            }), document.getElementById("career-form")) {
            var t, i = {},
                l = {},
                n = {};
            jQuery("#cv").on("change", function() {
                var e = jQuery("#cv").prop("files")[0];
                if (null != e) {
                    var a = new FileReader;
                    a.readAsDataURL(e), a.onload = function() {
                        t = a.result.split(",")[1], i.data = t, i.fileTypeId = 1027, i.description = "CV", i.filename = e.name
                    }
                } else i = {}
            }), jQuery("#cl").on("change", function() {
                var e = jQuery("#cl").prop("files")[0];
                if (null != e) {
                    var a = new FileReader;
                    a.readAsDataURL(e), a.onload = function() {
                        t = a.result.split(",")[1], l.data = t, l.fileTypeId = 1028, l.description = "Cover letter", l.filename = e.name
                    }
                } else l = {}
            }), jQuery("#form-submit").click(function(e) {
                e.preventDefault();
                var s = jQuery(this).data("formid"),
                    a = (jQuery(this).data("reply"), function(a, e) {
                        clear_errors(a);
                        var t, s, r, o = !0,
                            i = jQuery("#" + a),
                            l = jQuery(".err-msg"),
                            n = jQuery(".checkbox_check");
                        jQuery("#career-form").find(".required").each(function() {
                            r = jQuery(this).data("error_msg"), t = jQuery(this).attr("id"), s = l.filter('[data-error="' + t + '"]'), "" != jQuery(this).val() && 0 != jQuery(this).find(":selected").val() || (o = !1, show_error(t, a), s.html(r))
                        }), n.hasClass("required") && (r = n.data("error_msg"), t = n.attr("id"), s = l.filter('[data-error="' + t + '"]'), n.is(":checked") || (o = !1, show_error(t, a), s.html(r))); {
                            if (i.find(".input-file").each(function() {
                                    var e = jQuery(this).prop("files")[0];
                                    if (r = jQuery(this).data("error_msg"), t = jQuery(this).attr("id"), s = l.filter('[data-error="' + t + '"]'), null != e && 2048e3 < e.size) return o = !1, show_error(t, a), jQuery(this).focus().select(), s.html("<span>File size limit exceeded. Max. 2mb per file</span>"), !1
                                }), i.find(".datepicker").each(function() {
                                    if (r = jQuery(this).data("error_msg"), t = jQuery(this).attr("id"), s = l.filter('[data-error="' + t + '"]'), (new Date).getFullYear() - new Date(jQuery("#form-birthDate").val()).getFullYear() < 14) return o = !1, show_error(t, a), jQuery(this).focus().select(), s.html("<span>The minimum age requirement is 14 years old</span>"), !1
                                }), !0 !== o) return scroll_to_element(jQuery(".field-with-error"), 150, 1e3), !1;
                            i.find(".email").each(function() {
                                if (r = jQuery(this).data("error_msg"), t = jQuery(this).attr("id"), s = l.filter('[data-error="' + t + '"]'), !1 === checkEmail(t) && !0 === o) return o = !1, show_error(t, a), jQuery(this).focus().select(), s.html(r), !1
                            })
                        }
                        "" != i.find("#form-check").val() && (o = !1);
                        if (!0 === o) return !0
                    }(s)),
                    r = jQuery(this).data("ref"),
                    o = jQuery(this).data("group");
                if (a) {
                    var t = jQuery("#g-recaptcha-response").serialize();
                    "g-recaptcha-response=" === t ? jQuery("#form-reply-text").html('<div class="captcha-error color-orange font-bold title-bold-14 a-center">Please check captcha</div>') : jQuery.ajax({
                        url: templateURL + "ajax_recaptcha.php",
                        type: "post",
                        data: {
                            captcha_val: t
                        },
                        success: function(e) {
                            if (e) {
                                var a = {
                                        uploadedFiles: [],
                                        diplomas: []
                                    },
                                    t = jQuery("#" + s).serializeArray();
                                jQuery.each(t, function() {
                                    "birthDate" == this.name ? "" != this.value && (a[this.name] = this.value) : "diplomaCode" == this.name || "educationLevelCode" == this.name ? 0 != this.value && (n[this.name] = this.value) : a[this.name] = this.value || ""
                                }), n && a.diplomas.push(n), null != l.data && l.data.length && a.uploadedFiles.push(l), null != i.data && i.data.length && a.uploadedFiles.push(i), jQuery("#form-reply-text").html('<div class="loading"></div>'), "" !== r ? (console.log(a), jQuery.ajax({
                                    type: "POST",
                                    url: "https://bunkerproxy.remotely.sh/api/r/v1/bunkerholding/apply/" + o + "/" + r,
                                    data: JSON.stringify(a),
                                    dataType: "json",
                                    contentType: "application/json;charset=UTF-8"
                                }).done(function(e) {
                                    jQuery("#form-reply-text").html('<div class="application-form-success">Thank you for your application at BH. You’ve made a great choice. In BH we are committed to giving our employees the opportunity to learn and develop in our truly global organization.</div>')
                                }).fail(function(e) {
                                    if (422 === e.status) {
                                        e.responseJSON;
                                        jQuery("#form-reply-text").html('<div class="application-form-error">The given data was invalid.</div>')
                                    } else {
                                        jQuery("#form-reply-text").html('<div class="application-form-error">Error! Your job application has not been sent. Please try again.</div>')
                                    }
                                })) : jQuery.ajax({
                                    type: "POST",
                                    url: "https://bunkerproxy.remotely.sh/api/r/v1/bunkerholding/apply/" + o,
                                    data: JSON.stringify(a),
                                    dataType: "json",
                                    contentType: "application/json;charset=UTF-8"
                                }).done(function(e) {
                                    jQuery("#form-reply-text").html('<div class="application-form-success">Thank you for your application at BH. You’ve made a great choice. In BH we are committed to giving our employees the opportunity to learn and develop in our truly global organization.</div>')
                                }).fail(function(e) {
                                    if (422 === e.status) {
                                        e.responseJSON;
                                        jQuery("#form-reply-text").html('<div class="application-form-error">The given data was invalid.</div>')
                                    } else {
                                        jQuery("#form-reply-text").html('<div class="application-form-error">Error! Your job application has not been sent. Please try again.</div>')
                                    }
                                })
                            } else jQuery("#form-reply-text").html('<div class="captcha-error color-orange font-bold title-bold-14 a-center">Wrong captcha</div>')
                        }
                    })
                }
            })
        }
        if (Main.el.body.hasClass("single-stories")) {
            var e = jQuery(".stories-content").find(".size-full");
            jQuery(e).each(function() {
                jQuery(this).wrap('<div class="js-stories-img-holder"></div>')
            })
        }
        if (Main.el.body.hasClass("loaded") && setTimeout(function() {
                var a = new TimelineMax({
                        paused: !1,
                        reversed: !1
                    }),
                    e = jQuery(".js-cookie-fade"),
                    t = jQuery("#cookie-bg"),
                    s = jQuery("#cookie");
                a.to(t, .8, {
                    scaleY: 1,
                    transformOrigin: "top left",
                    ease: CustomEase.create("custom", "M0,0 C0.35,0 0,1 1,1")
                }, 0), a.staggerTo(e, .8, {
                    autoAlpha: 1,
                    ease: Power1.easeIn
                }, .05, .6), Main.el.cookie_close.click(function() {
                    a.reverse(), a.timeScale(1), setTimeout(function() {
                        jQuery(s).addClass("remove")
                    }, 2e3)
                }), Main.el.cookie_accept.click(function() {
                    jQuery.ajax({
                        url: templateURL + "ajax_cookies_agree.php",
                        type: "post",
                        success: function(e) {
                            a.reverse(), a.timeScale(2), setTimeout(function() {
                                jQuery(s).addClass("remove")
                            }, 2e3)
                        }
                    })
                })
            }, 2e3), document.getElementById("load-more")) {
            var a = {
                button: jQuery("#load-more"),
                target: "",
                shown_posts: "",
                shown_posts_total: "",
                offset: 0,
                total: 0,
                shown_count: 0
            };
            a.target = jQuery(a.button.data("target")), a.shown_posts = a.button.data("shown"), a.shown_posts_total = a.button.data("totalshown"), a.total = a.button.data("total"), a.shown_count = a.button.data("shown_count"), a.button.click(function() {
                jQuery.ajax({
                    url: templateURL + "ajax_load_more.php",
                    type: "post",
                    data: {
                        shown_posts: a.shown_posts,
                        shown_posts_total: a.shown_posts_total,
                        offset: a.offset
                    },
                    success: function(e) {
                        a.target.append(e), setTimeout(function() {
                            jQuery(".load-more-results").addClass("loc")
                        }, 100)
                    }
                }), a.offset = a.offset + 4, a.offset + a.shown_count >= a.total && a.button.addClass("faded")
            })
        }
        if (Main.el.body.hasClass("search")) {
            var r = {
                    handler: jQuery("#tabs-handler"),
                    holder: jQuery("#tabs-holder"),
                    bg: jQuery("#tabs-bg"),
                    elements: jQuery("#tabs-elements"),
                    closeHandler: jQuery("#close-tabs")
                },
                o = new TimelineMax({
                    paused: !0,
                    reversed: !1
                }),
                u = jQuery(".search-content");
            o.set(r.holder, {
                alpha: 0,
                visibility: "hidden"
            }), o.to(r.holder, .2, {
                alpha: 1,
                visibility: "visible"
            }, 0), o.to(r.bg, .7, {
                scaleX: 1,
                transformOrigin: "top left"
            }, .5), o.to(r.elements, .7, {
                autoAlpha: 1
            }, 1), o.to(r.closeHandler, .7, {
                autoAlpha: 1
            }, 1), r.handler.click(function() {
                o.play()
            }), r.closeHandler.click(function() {
                o.timeScale(1.2), o.reverse()
            }), u.length && u.mark(jQuery("#search-name").html(), {
                element: "span",
                className: "mark-search"
            })
        }
        if (document.getElementById("play-popup")) {
            var c = {
                    popup: jQuery("#play-popup"),
                    close: jQuery("#close-popup"),
                    bg: jQuery(".close-popup__bg"),
                    close_icon: jQuery(".close-popup__icon"),
                    title: jQuery("#js-vimeo-page-title"),
                    poster: jQuery("#js_vimeo_poster"),
                    page_header: jQuery(".header"),
                    adjustments: jQuery("#videoAdjustments"),
                    container: jQuery("#embed-container"),
                    play: jQuery("#play"),
                    pause: jQuery("#pause"),
                    sound: jQuery("#sound"),
                    mute: jQuery("#mute"),
                    set_time: jQuery("#setTime"),
                    current_play: jQuery("#currentPlay"),
                    status: jQuery("#status")
                },
                d = new TimelineMax({
                    paused: !0,
                    reversed: !1
                });
            d.set(c.bg, {
                scaleY: 0,
                transformOrigin: "top left"
            }), d.set(Main.el.body, {
                className: "+=overflow"
            }), d.set(c.container, {
                className: "+=loc"
            }), d.to(c.popup, .5, {
                autoAlpha: 0
            }, .1), d.to(c.title, .5, {
                autoAlpha: 0
            }, .1), d.to(c.poster, .7, {
                autoAlpha: 0
            }, .2), d.to(c.page_header, .7, {
                autoAlpha: 0
            }, .2), d.to(c.close, .7, {
                autoAlpha: 1
            }, .2), d.to(c.bg, .7, {
                scaleY: 1,
                transformOrigin: "top left"
            }, .4), d.to(c.close_icon, .7, {
                autoAlpha: 1
            }, .5), d.to(c.adjustments, .7, {
                autoAlpha: 1
            }, .5);
            var m = new Vimeo.Player("vimeo-player");
            m.ready().then(function() {
                m.pause(), m.setVolume(1), m.setLoop(1)
            }), jQuery(c.popup).click(function() {
                scroll_to_element(jQuery("body"), 150, 0), d.play(), m.setVolume(1), setTimeout(function() {
                    m.play()
                }, 1e3)
            }), jQuery(c.close).click(function() {
                m.pause(), d.reverse(), setTimeout(function() {
                    c.play.removeClass("loc"), c.sound.removeClass("loc"), c.pause.addClass("loc"), c.mute.addClass("loc")
                }, 1200)
            }), m.getDuration().then(function(e) {
                c.set_time.add(c.current_play).attr("max", e)
            }), jQuery(document).on("input", c.set_time, function() {
                m.pause(), m.getDuration().then(function(e) {
                    var a = c.set_time.val();
                    m.setCurrentTime(a), m.play()
                })
            }), m.on("timeupdate", function(e) {
                var a = Math.ceil(e.seconds);
                c.set_time.add(c.current_play).val(a), c.status.text(format(a))
            }), c.sound.click(function() {
                m.setVolume(1), jQuery(this).removeClass("loc"), c.mute.addClass("loc")
            }), c.mute.click(function() {
                m.setVolume(0), jQuery(this).removeClass("loc"), c.sound.addClass("loc")
            }), c.play.click(function() {
                m.play(), jQuery(this).removeClass("loc"), c.pause.addClass("loc")
            }), c.pause.click(function() {
                m.pause(), jQuery(this).removeClass("loc"), c.play.addClass("loc")
            })
        }
        var h = new TimelineMax({
                reversed: !1,
                paused: !0,
                onComplete: function() {
                    setTimeout(function() {
                        Main.el.search_field.focus().select()
                    }, 200)
                }
            }),
            p = jQuery("#search-holder"),
            y = jQuery(".search-bg"),
            f = jQuery("#search-close"),
            j = jQuery("#search__inner");
        CustomEase.create("menu_custom", "M0,0 C0.86,0 0.07,1 1,1"), h.set(p, {
            autoAlpha: 0
        }), h.set(y, {
            scaleX: 0
        }), h.to(p, .5, {
            autoAlpha: 1
        }, 0), h.to(y, 1, {
            scaleX: 1,
            ease: Expo.easeOut,
            transformOrigin: "top right"
        }, .6), h.to(f, .2, {
            autoAlpha: 1
        }, .8), h.from(j, .1, {
            autoAlpha: 0,
            ease: "menu_custom"
        }, 1.1), f.click(function() {
            h.reverse(), Main.el.search_handler.removeClass("loc")
        }), Main.el.search_handler.click(function() {
            jQuery(this).toggleClass("loc"), jQuery(this).hasClass("loc") ? h.play() : h.reverse()
        }), Main.el.search_field.keyup(function() {
            if (3 <= jQuery(this).val().length) {
                var e = jQuery(this).val();
                jQuery.ajax({
                    url: templateURL + "ajax_search.php",
                    type: "post",
                    data: {
                        search_val: e
                    },
                    success: function(e) {
                        Main.el.search_autocomplete.html(e)
                    }
                })
            } else Main.el.search_autocomplete.html("")
        });
        var v = jQuery("#menu-holder"),
            Q = jQuery(".menu__mainmenu-ani"),
            _ = jQuery(".burger-title"),
            g = jQuery("#menu__mainmenu .menu-a, #menu__mainmenu .submenu-a"),
            w = new SplitText(g, {
                type: "lines",
                linesClass: "overflow menu-line-holder"
            }).lines,
            C = jQuery("#menu-handler"),
            b = jQuery("#menu-holder-bg"),
            x = jQuery(".menu-holder .menu-item.level-01"),
            M = new TimelineMax({
                reversed: !1,
                paused: !0
            }),
            T = jQuery(".line--top"),
            k = jQuery(".line--mid"),
            E = jQuery(".line--bottom"),
            A = jQuery(".line--top-close"),
            O = jQuery(".burger__line");
        CustomEase.create("burger-custom", "M0,0 C0.43,0.01 0.09,0.99 1,1"), M.set(A, {
            visibility: "hidden",
            rotation: 45,
            transformOrigin: "left",
            y: -7,
            x: 7,
            scaleX: 0
        }), M.set(O, {
            className: "+=loc"
        }, 0), M.to(T, .7, {
            scaleX: 0,
            ease: "burger-custom"
        }, 0), M.to(E, .7, {
            scaleX: 0,
            ease: "burger-custom"
        }, 0), M.to(k, .7, {
            transformOrigin: "center",
            rotation: 135,
            ease: "burger-custom"
        }, .5), M.to(A, .7, {
            visibility: "visible",
            scaleX: 1,
            ease: "burger-custom"
        }, .7), M.to(O, .7, {
            backgroundColor: "#9595ab"
        }, .8);
        var I = !1,
            P = !1;
        if (jQuery(g).click(function() {
                event.preventDefault();
                var e = jQuery(this).attr("href"),
                    a = new TimelineMax;
                CustomEase.create("menu-trans", "M0,0 C0.49,0.05 0.18,0.94 1,1"), M.reverse(), a.to(w, 1, {
                    y: -60,
                    ease: "menu-trans"
                }, 0), a.set(x, {
                    className: "-= loc"
                }, 0), a.to(C, .5, {
                    zIndex: 610
                }, 0), a.to(Q, .5, {
                    autoAlpha: 0
                }, .5), a.to(b, .6, {
                    scaleX: 0,
                    ease: "menu-trans",
                    transformOrigin: "right top",
                    onComplete: function() {
                        window.location.href = e
                    }
                }, .8), a.to(v, .8, {
                    visibility: "hidden"
                }, 1.5), a.to(_, .3, {
                    autoAlpha: 1,
                    clearProps: "all"
                }, 1.5), a.set(Main.el.body, {
                    className: "-= body-scroll"
                }, 1.6)
            }), Main.el.menu_handler.click(function() {
                if (!P) {
                    P = !0;
                    var e = 1;
                    if (e = 2, I) {
                        var a = new TimelineMax;
                        M.reverse(), CustomEase.create("menu-trans", "M0,0 C0.49,0.05 0.18,0.94 1,1"), a.to(w, .8, {
                            y: -100,
                            ease: "menu-trans"
                        }, 0), a.to(C, .5, {
                            zIndex: 610
                        }, 0), a.set(x, {
                            className: "-= loc"
                        }, 0), a.to(Q, .5, {
                            autoAlpha: 0
                        }, .8), a.to(b, .6, {
                            scaleX: 0,
                            ease: "menu-trans",
                            transformOrigin: "right top"
                        }, 1), a.to(v, .8, {
                            visibility: "hidden"
                        }, 1.5), a.to(_, .3, {
                            autoAlpha: 1,
                            clearProps: "all"
                        }, 1.5), a.set(Main.el.body, {
                            className: "-= body-scroll"
                        }, 1.6)
                    } else {
                        var t = new TimelineMax;
                        M.play(), CustomEase.create("menu-trans", "M0,0 C0.49,0.05 0.18,0.94 1,1"), t.set(w, {
                            y: 100,
                            transformOrigin: "center"
                        }, 0), t.set(Main.el.body, {
                            className: "+= body-scroll"
                        }, 0), t.to(v, .3, {
                            visibility: "visible"
                        }, 0), t.to(_, .3, {
                            autoAlpha: 0
                        }, 0), t.to(C, .5, {
                            zIndex: 610
                        }, 0), t.to(b, .8, {
                            scaleX: 1,
                            ease: "menu-trans",
                            transformOrigin: "left top"
                        }, .8), t.to(Q, .8, {
                            autoAlpha: 1
                        }, 1), t.to(w, 1.1, {
                            y: 0,
                            ease: "menu-trans"
                        }, 1.1), t.set(x, {
                            className: "+= loc"
                        }, 1.5)
                    }
                    I = !I, TweenLite.delayedCall(e, function() {
                        P = !1
                    })
                }
            }), Main.el.body.hasClass("page-template-contact")) {
            var S = jQuery("textarea"),
                z = new TimelineMax({
                    delay: .2,
                    reversed: !0,
                    paused: !0
                }),
                Y = jQuery(".placeholder-effect"),
                L = new SplitText(Y, {
                    type: "chars"
                }).chars;
            z.staggerTo(L, .5, {
                alpha: 0,
                y: 10
            }, 0), jQuery(S).focus(function() {
                z.play()
            }), jQuery(S).focusout(function() {
                jQuery(this).val() || z.reverse()
            })
        }
        document.getElementById("form-holder") && jQuery(".input-file").each(function() {
            var t = jQuery(this);
            t.on("change", function() {
                var e = jQuery(this).attr("id");
                document.getElementById(e + "-fake").innerHTML = t.val().replace(/^.*[\\\/]/, ""), jQuery("#" + e + "-fake-holder").addClass("loc");
                var a = jQuery("#" + e + "-fake-holder").find(".remove-file");
                jQuery(a).click(function() {
                    t.val("") ? (document.getElementById(e + "-fake").innerHTML = "", jQuery("#" + e + "-fake-holder").removeClass("loc")) : document.getElementById(e + "-fake").innerHTML = t.val().replace(/^.*[\\\/]/, "")
                })
            })
        });
        Main.el.scroll_to.click(function() {
            var e = void 0 !== jQuery(this).data("target") ? jQuery(this).data("target") : "",
                a = void 0 !== jQuery(this).data("position") && jQuery(this).data("position"),
                t = void 0 !== jQuery(this).data("goto_offset") ? jQuery(this).data("goto_offset") : 105,
                s = void 0 !== jQuery(this).data("goto_speed") ? jQuery(this).data("goto_speed") : 1e3;
            !1 !== a && 0 <= a ? scroll_to_position(a, s) : scroll_to_element(jQuery(e), t, s)
        }), jQuery(document).keyup(function(e) {
            27 === e.keyCode && Main.escape_triggers()
        });
        var F = jQuery(".init-slider");
        Main.build_sliders(F), s = skrollr.init({
            keyframe: function(e, a, t) {
                var s = new TimelineMax,
                    r = jQuery(e),
                    o = jQuery(e).data("delay"),
                    i = jQuery(e).data("trans"),
                    l = jQuery(e).data("ease"),
                    n = jQuery(e).data("cubic");
                null == i && (i = 1), null == o && (o = 0);
                var u = new TimelineMax,
                    c = jQuery(".js-sm-bg"),
                    d = jQuery(".js-top-fade"),
                    m = jQuery(".js-icon");
                if (r.hasClass("view-point") && "data100" == a && "down" == t && (u.to(d, .2, {
                        autoAlpha: 0
                    }, 0), u.to(m, .4, {
                        scaleY: 0,
                        transformOrigin: "top left"
                    }, 0), u.to(c, .5, {
                        scaleY: 0,
                        transformOrigin: "top left"
                    }, .1)), r.hasClass("view-point") && "data100" == a && "up" == t && (u.to(m, .5, {
                        scaleY: 1,
                        transformOrigin: "bottom left"
                    }, 0), u.to(c, .5, {
                        scaleY: 1,
                        transformOrigin: "bottom left"
                    }, .1), u.to(d, .5, {
                        autoAlpha: 1
                    }, .25)), r.hasClass("skrollr-pointer") && "dataBottomTop" == a && "down" == t) {
                    if (r.hasClass("letter-fade-in")) {
                        var h = new SplitText(r, {
                                type: "lines",
                                linesClass: "overflow lines-ani"
                            }).lines,
                            p = r.data("separator"),
                            y = r.data("velocity");
                        s.to(e, .2, {
                            alpha: 1
                        }, 0), null == p && (p = .2), s.staggerFromTo(h, y, {
                            alpha: 0,
                            y: 100
                        }, {
                            y: 0,
                            alpha: 1,
                            ease: CustomEase.create("custom", "M0,0 C0.388,0.464 0.108,1 1,1"),
                            onComplete: C
                        }, p, o)
                    }
                    if (r.hasClass("words-fadeIn")) {
                        var f = new SplitText(r, {
                                type: "words"
                            }),
                            j = f.words,
                            v = r.data("velocity"),
                            Q = r.data("separator");
                        s.to(e, .2, {
                            alpha: 1
                        }), null == Q && (Q = .06), s.staggerFromTo(j, v, {
                            alpha: 0
                        }, {
                            alpha: 1,
                            ease: Power4.easeInOut,
                            onComplete: C
                        }, Q, o)
                    }
                    if (r.hasClass("lines-in")) {
                        var _ = new SplitText(r, {
                                type: "lines"
                            }).lines,
                            g = r.data("velocity"),
                            w = r.data("separator");
                        null == w && (w = .06), s.to(e, .2, {
                            alpha: 1
                        }), s.staggerFromTo(_, g, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            ease: CustomEase.create("custom", "M0,0 C0.215,0.61 0.355,1 1,1"),
                            onComplete: C
                        }, w, o)
                    }
                    r.hasClass("js-circle-svg") && (TweenMax.fromTo(jQuery(e).find(".circle-fill"), 1.3, {
                        delay: .2,
                        attr: {
                            "stroke-dashoffset": 339.292
                        }
                    }, {
                        attr: {
                            "stroke-dashoffset": 226.19466666667
                        }
                    }), TweenMax.fromTo(jQuery(e).find(".circle-fill"), 1.3, {
                        delay: .2,
                        attr: {
                            "data-dashoffset": 339.292
                        }
                    }, {
                        attr: {
                            "data-dashoffset": 226.19466666667
                        }
                    })), r.hasClass("scale-left") && (l = null == n || "custom" != n ? CustomEase.create("custom", "M0,0 C0.19,1 0.22,1 1,1") : Power1.easeInOut, s.to(e, i, {
                        scaleX: 1,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("scale-top") && (l = null == n || "custom" != n ? CustomEase.create("custom", "M0,0 C0.19,1 0.22,1 1,1") : Power1.easeInOut, s.to(e, i, {
                        scaleY: 1,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("curtain-vertical") && (l = null == n || "custom" != n ? CustomEase.create("custom", "M0,0 C0.348,0.822 0.22,1 1,1") : Power1.easeInOut, s.to(e, i, {
                        scaleY: 0,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("curtain-left") && (l = null == n || "custom" != n ? CustomEase.create("custom", "M0,0 C0.348,0.822 0.22,1 1,1") : Power1.easeOut, s.to(e, i, {
                        scaleX: 0,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("curtain-right") && (l = null == n || "custom" != n ? CustomEase.create("custom", "M0,0 C0.348,0.822 0.22,1 1,1") : Power1.easeInOut, s.to(e, i, {
                        scaleX: 0,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("curtain-loaded") && (l = null == n || "custom" != n ? CustomEase.create("custom", "M0,0 C0.348,0.822 0.22,1 1,1") : Power0.easeNone, s.to(e, i, {
                        scaleX: 1,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("fade-in") && s.to(e, i, {
                        alpha: 1,
                        onComplete: C,
                        ease: Power2.easeInOut
                    }, o), r.hasClass("js-ani-fadeup") && (l = null == n || "custom" != n ? CustomEase.create("custom", "M0,0 C0.35,0 0,1 1,1") : Expo.easeOut, s.to(jQuery(e).find(".fade-up"), i, {
                        alpha: 1,
                        y: 0,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("curtain-loaded-top") && (l = null == n || "custom" != n ? Expo.easeOut : CustomEase.create("custom", "M0,0 C0.348,0.822 0.22,1 1,1"), s.to(e, i, {
                        scaleY: 1,
                        onComplete: C,
                        ease: l
                    }, o)), r.hasClass("js-bt") && s.to(jQuery(e).find(".js-ani-bt"), 1.5, {
                        y: 0,
                        onComplete: C,
                        ease: Expo.easeOut
                    }, o), r.hasClass("arch-ani") && s.staggerTo(jQuery(".intro_dot"), .7, {
                        alpha: 1,
                        ease: Power1.easeInOut
                    }, .004, 0), r.addClass("loc")
                } else r.removeClass("skrollr-view");

                function C() {
                    r.removeClass("skrollr-pointer"), s.progress(1), null == f || f.revert()
                }
            },
            mobileCheck: function() {
                return !1
            },
            forceHeight: !1
        }), jQuery(".ns__field").focusout(function() {
            var e = jQuery(this).val().length,
                a = jQuery(this).siblings(".ns__input-label");
            0 != e ? a.addClass("filled") : a.removeClass("filled")
        });
        var N = jQuery("#accept-newsletter"),
            D = jQuery(".accept-terms__text");
        N.on("click", function() {
            jQuery(this).hasClass("check") ? jQuery(this).removeClass("check") : (jQuery(this).addClass("check"), D.removeClass("error-accept"))
        }), jQuery("#ns-submit").on("click", function() {
            if (N.hasClass("check")) {
                var e = jQuery(this).parents("form").attr("id"),
                    a = jQuery(this).data("reply");
                Main.checkform_ns(e, a)
            } else D.addClass("error-accept")
        })
    },
    build_sliders: function(e) {
        e.each(function() {
            var e = jQuery(this),
                a = e.attr("id"),
                u = [];
            if ("slider-main" == a) {
                new TimelineMax;
                e.gsapSlider({
                    slider_id: a,
                    enable_swipe: !0,
                    afterChange_delay: "0",
                    start_main_animation_time: .6,
                    setCustomAnimation: function(e, a, t) {
                        if ("initialState" === a) return {
                            zIndex: 5,
                            alpha: 0
                        };
                        var s = new TimelineMax;
                        return TweenLite.defaultEase = Power4.easeInOut, CustomEase.create("custom-gallery", "M0,0 C0.692,0 0.102,1 1,1"), CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1"), s.set(t.old_slide, {
                            zIndex: 10
                        }), s.set(t.new_slide, {
                            alpha: 1,
                            zIndex: 15
                        }), s
                    },
                    beforeChange: function(e, a, t, s) {
                        var r = new TimelineMax,
                            o = e.find(".slider__content");
                        e.find(".js_fade"), e.find(".js-slider-num");
                        if (CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1"), r.to(e, .2, {
                                alpha: 0
                            }, 1), $this_slide_text = e.find(".js-chars"), 0 < $this_slide_text.length) {
                            void 0 === u[t] && (u[t] = new SplitText($this_slide_text, {
                                type: "lines chars",
                                charsClass: "character",
                                linesClass: "overflow"
                            }));
                            var i = u[t].chars;
                            r.staggerFromTo(i, 1, {
                                y: "0%",
                                ease: CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1")
                            }, {
                                y: "100%",
                                ease: CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1")
                            }, .02, .5)
                        }
                        return r.fromTo(o, .8, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0
                        }, 0), r
                    },
                    afterChange: function(e, a, t) {
                        var s = new TimelineMax;
                        CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1");
                        var r = e.find(".slider__content");
                        if ($this_slide_text = e.find(".js-chars"), 0 < $this_slide_text.length) {
                            void 0 === u[t] && (u[t] = new SplitText($this_slide_text, {
                                type: "lines chars",
                                charsClass: "character",
                                linesClass: "overflow"
                            }));
                            var o = u[t].chars;
                            s.staggerFrom(o, 1.3, {
                                y: "100%",
                                ease: CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1")
                            }, .02, 0), s.staggerFromTo(o, 1.3, {
                                y: "100%",
                                ease: CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1")
                            }, {
                                y: "0%",
                                ease: CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1")
                            }, .02, 0)
                        }
                        return s.fromTo(r, .5, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1
                        }, 0), s
                    }
                })
            }
            if ("slider-work" == a) {
                new TimelineMax;
                e.gsapSlider({
                    slider_id: a,
                    enable_swipe: !0,
                    afterChange_delay: "0",
                    start_main_animation_time: .6,
                    setCustomAnimation: function(e, a, t) {
                        if ("initialState" === a) return {
                            zIndex: 5,
                            alpha: 0
                        };
                        var s = new TimelineMax;
                        return TweenLite.defaultEase = Power4.easeInOut, s.set(t.old_slide, {
                            zIndex: 10
                        }), s.set(t.new_slide, {
                            alpha: 1,
                            zIndex: 15
                        }), s
                    },
                    beforeChange: function(e, a, t, s) {
                        var r = new TimelineMax,
                            o = e.find(".slider__content"),
                            i = e.find(".js-slider-fade");
                        if (CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1"), r.to(e, .2, {
                                alpha: 0
                            }, 1), $this_slide_text = e.find(".js-chars"), 0 < $this_slide_text.length) {
                            void 0 === u[t] && (u[t] = new SplitText($this_slide_text, {
                                type: "lines chars",
                                charsClass: "character",
                                linesClass: "overflow"
                            }));
                            var l = u[t].chars;
                            r.fromTo(l, .8, {
                                y: "0%",
                                ease: Expo.easeOut
                            }, {
                                y: "100%",
                                ease: "custom"
                            }, 0)
                        }
                        return r.fromTo(o, .8, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0
                        }, .5), r.to(i, 1.5, {
                            autoAlpha: 0
                        }, 0), r
                    },
                    afterChange: function(e, a, t) {
                        var s = new TimelineMax;
                        CustomEase.create("custom", "M0,0,C0.698,0,0.396,1,1,1");
                        var r = e.find(".slider__content"),
                            o = e.find(".js-slider-fade"),
                            i = e.find(".js-tl"),
                            l = e.find(".js-tl-img");
                        if (Main.vars.window_w, s.fromTo(i, 1.3, {
                                xPercent: -100
                            }, {
                                xPercent: 0
                            }, 0), s.fromTo(l, 1.3, {
                                xPercent: 100
                            }, {
                                xPercent: 0
                            }, 0), s.fromTo(o, 1.5, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1
                            }, 0), $this_slide_text = e.find(".js-chars"), 0 < $this_slide_text.length) {
                            void 0 === u[t] && (u[t] = new SplitText($this_slide_text, {
                                type: "lines chars",
                                charsClass: "character",
                                linesClass: "overflow"
                            }));
                            var n = u[t].chars;
                            s.from(n, 1.3, {
                                y: "100%",
                                ease: "custom"
                            }, 0), s.fromTo(n, 1.3, {
                                y: "100%",
                                ease: "custom"
                            }, {
                                y: "0%",
                                ease: "custom"
                            }, 0)
                        }
                        return s.fromTo(r, .8, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1
                        }, 0), s.to(jQuery("#number_1"), 1.3, {
                            morphSVG: "#number_" + Number(t + 1),
                            autoAlpha: 1
                        }, 0), s
                    }
                })
            }
        })
    },
    escape_triggers: function() {},
    checkform_ns: function(e, a) {
        clear_errors(e);
        var t = 1;
        if (jQuery("#" + e + " .required").each(function() {
                id = jQuery(this).attr("id"), "" !== jQuery(this).val() && jQuery(this).val() != document.getElementById(id).defaultValue || (t = 0, show_error(id, e), jQuery(a).html('<div class="error relative font-special title-special-11 color-red">You must fill all the mandatory fields (*)</div>'))
            }), 1 !== t) return !1;
        if (jQuery("#" + e + " .email").each(function() {
                if (id = jQuery(this).attr("id"), !1 === checkEmail(id) && 1 === t) return t = 0, show_error(id, e), jQuery(a).html('<div class="error relative font-special title-special-11 color-red">Your email address is not valid.</div>'), !1
            }), "" != jQuery("#" + e + " #ns-check").val() && (t = 0), 1 === t) {
            var s = jQuery("#" + e).serialize();
            jQuery.post(templateURL + "ajax_ns_submit.php", s).done(function(e) {
                (e = JSON.parse(e)).status && jQuery("#nsform-submit").addClass("fadeout"), jQuery(a).html(e.msg)
            })
        }
    },
    resizing: function() {
        Main.vars.window_w = Main.el.window.width(), Main.vars.window_h = Main.el.window.height()
    }
};
jQuery(window).load(function() {
    Main.init()
});
var debounce_resize = _debounce(Main.resizing, 70);
onresize = debounce_resize;