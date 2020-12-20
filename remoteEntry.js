var header;
header = (()=>{
    "use strict";
    var e, r, t, n, o, a, i, u, l, s, f, d, p, h, c = {
        429: (e,r,t)=>{
            var n = {
                "./Header": ()=>Promise.all([t.e(373), t.e(339), t.e(102)]).then((()=>()=>t(102)))
            }
              , o = (e,r)=>(t.R = r,
            r = t.o(n, e) ? n[e]() : Promise.resolve().then((()=>{
                throw new Error('Module "' + e + '" does not exist in container.')
            }
            )),
            t.R = void 0,
            r)
              , a = (e,r)=>{
                if (t.S) {
                    var n = t.S.default
                      , o = "default";
                    if (n && n !== e)
                        throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[o] = e,
                    t.I(o, r)
                }
            }
            ;
            t.d(r, {
                get: ()=>o,
                init: ()=>a
            })
        }
    }, v = {};
    function m(e) {
        if (v[e])
            return v[e].exports;
        var r = v[e] = {
            exports: {}
        };
        return c[e](r, r.exports, m),
        r.exports
    }
    return m.m = c,
    m.n = e=>{
        var r = e && e.__esModule ? ()=>e.default : ()=>e;
        return m.d(r, {
            a: r
        }),
        r
    }
    ,
    m.d = (e,r)=>{
        for (var t in r)
            m.o(r, t) && !m.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }
    ,
    m.f = {},
    m.e = e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e, r),
    r)), [])),
    m.u = e=>e + ".js",
    m.o = (e,r)=>Object.prototype.hasOwnProperty.call(e, r),
    e = {},
    r = "wp5-starter-react:",
    m.l = (t,n,o)=>{
        if (e[t])
            e[t].push(n);
        else {
            var a, i;
            if (void 0 !== o)
                for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                    var s = u[l];
                    if (s.getAttribute("src") == t || s.getAttribute("data-webpack") == r + o) {
                        a = s;
                        break
                    }
                }
            a || (i = !0,
            (a = document.createElement("script")).charset = "utf-8",
            a.timeout = 120,
            m.nc && a.setAttribute("nonce", m.nc),
            a.setAttribute("data-webpack", r + o),
            a.src = t),
            e[t] = [n];
            var f = (r,n)=>{
                a.onerror = a.onload = null,
                clearTimeout(d);
                var o = e[t];
                if (delete e[t],
                a.parentNode && a.parentNode.removeChild(a),
                o && o.forEach((e=>e(n))),
                r)
                    return r(n)
            }
              , d = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = f.bind(null, a.onerror),
            a.onload = f.bind(null, a.onload),
            i && document.head.appendChild(a)
        }
    }
    ,
    m.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        m.S = {};
        var e = {}
          , r = {};
        m.I = (t,n)=>{
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}),
            !(n.indexOf(o) >= 0)) {
                if (n.push(o),
                e[t])
                    return e[t];
                m.o(m.S, t) || (m.S[t] = {});
                var a = m.S[t]
                  , i = "wp5-starter-react"
                  , u = (e,r,t)=>{
                    var n = a[e] = a[e] || {}
                      , o = n[r];
                    (!o || !o.loaded && i > o.from) && (n[r] = {
                        get: t,
                        from: i
                    })
                }
                  , l = [];
                switch (t) {
                case "default":
                    u("react-dom", "16.9.0", (()=>Promise.all([m.e(935), m.e(373)]).then((()=>()=>m(935))))),
                    u("react", "16.9.0", (()=>m.e(294).then((()=>()=>m(294))))),
                    u("styled-components", "5.1.0", (()=>Promise.all([m.e(163), m.e(373)]).then((()=>()=>m(163)))))
                }
                return e[t] = l.length ? Promise.all(l).then((()=>e[t] = 1)) : 1
            }
        }
    }
    )(),
    m.p = "https://prod-test-header.vercel.app/",
    t = e=>{
        var r = e=>e.split(".").map((e=>+e == e ? +e : e))
          , t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e)
          , n = t[1] ? r(t[1]) : [];
        return t[2] && (n.length++,
        n.push.apply(n, r(t[2]))),
        t[3] && (n.push([]),
        n.push.apply(n, r(t[3]))),
        n
    }
    ,
    n = (e,r)=>{
        e = t(e),
        r = t(r);
        for (var n = 0; ; ) {
            if (n >= e.length)
                return n < r.length && "u" != (typeof r[n])[0];
            var o = e[n]
              , a = (typeof o)[0];
            if (n >= r.length)
                return "u" == a;
            var i = r[n]
              , u = (typeof i)[0];
            if (a != u)
                return "o" == a && "n" == u || "s" == u || "u" == a;
            if ("o" != a && "u" != a && o != i)
                return o < i;
            n++
        }
    }
    ,
    o = e=>{
        if (1 === e.length)
            return "*";
        if (0 in e) {
            var r = ""
              , t = e[0];
            r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
            for (var n = 1, a = 1; a < e.length; a++)
                n--,
                r += "u" == (typeof (u = e[a]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2,
                u);
            return r
        }
        var i = [];
        for (a = 1; a < e.length; a++) {
            var u = e[a];
            i.push(0 === u ? "not(" + l() + ")" : 1 === u ? "(" + l() + " || " + l() + ")" : 2 === u ? i.pop() + " " + i.pop() : o(u))
        }
        return l();
        function l() {
            return i.pop().replace(/^\((.+)\)$/, "$1")
        }
    }
    ,
    a = (e,r)=>{
        if (0 in e) {
            r = t(r);
            var n = e[0]
              , o = n < 0;
            o && (n = -n - 1);
            for (var i = 0, u = 1, l = !0; ; u++,
            i++) {
                var s, f, d = u < e.length ? (typeof e[u])[0] : "";
                if (i >= r.length || "o" == (f = (typeof (s = r[i]))[0]))
                    return !l || ("u" == d ? u > n && !o : "" == d != o);
                if ("u" == f) {
                    if (!l || "u" != d)
                        return !1
                } else if (l)
                    if (d == f)
                        if (u <= n) {
                            if (s != e[u])
                                return !1
                        } else {
                            if (o ? s > e[u] : s < e[u])
                                return !1;
                            s != e[u] && (l = !1)
                        }
                    else if ("s" != d && "n" != d) {
                        if (o || u <= n)
                            return !1;
                        l = !1,
                        u--
                    } else {
                        if (u <= n || f < d != o)
                            return !1;
                        l = !1
                    }
                else
                    "s" != d && "n" != d && (l = !1,
                    u--)
            }
        }
        var p = []
          , h = p.pop.bind(p);
        for (i = 1; i < e.length; i++) {
            var c = e[i];
            p.push(1 == c ? h() | h() : 2 == c ? h() & h() : c ? a(c, r) : !h())
        }
        return !!h()
    }
    ,
    i = (e,r)=>{
        var t = e[r];
        return Object.keys(t).reduce(((e,r)=>!e || !t[e].loaded && n(e, r) ? r : e), 0)
    }
    ,
    u = (e,r,t)=>"Unsatisfied version " + r + " of shared singleton module " + e + " (required " + o(t) + ")",
    l = (e,r,t,n)=>{
        var o = i(e, t);
        return a(n, o) || "undefined" != typeof console && console.warn && console.warn(u(t, o, n)),
        s(e[t][o])
    }
    ,
    s = e=>(e.loaded = 1,
    e.get()),
    f = (e=>function(r, t, n, o) {
        var a = m.I(r);
        return a && a.then ? a.then(e.bind(e, r, m.S[r], t, n, o)) : e(0, m.S[r], t, n, o)
    }
    )(((e,r,t,n,o)=>r && m.o(r, t) ? l(r, 0, t, n) : o())),
    d = {},
    p = {
        373: ()=>f("default", "react", [4, 16, 9, 0], (()=>m.e(294).then((()=>()=>m(294))))),
        339: ()=>f("default", "styled-components", [4, 16, 9, 0], (()=>m.e(163).then((()=>()=>m(163)))))
    },
    h = {
        339: [339],
        373: [373]
    },
    m.f.consumes = (e,r)=>{
        m.o(h, e) && h[e].forEach((e=>{
            if (m.o(d, e))
                return r.push(d[e]);
            var t = r=>{
                d[e] = 0,
                c[e] = t=>{
                    delete v[e],
                    t.exports = r()
                }
            }
              , n = r=>{
                delete d[e],
                c[e] = t=>{
                    throw delete v[e],
                    r
                }
            }
            ;
            try {
                var o = p[e]();
                o.then ? r.push(d[e] = o.then(t).catch(n)) : t(o)
            } catch (e) {
                n(e)
            }
        }
        ))
    }
    ,
    (()=>{
        var e = {
            19: 0
        };
        m.f.j = (r,t)=>{
            var n = m.o(e, r) ? e[r] : void 0;
            if (0 !== n)
                if (n)
                    t.push(n[2]);
                else if (/^3(39|73)$/.test(r))
                    e[r] = 0;
                else {
                    var o = new Promise(((t,o)=>{
                        n = e[r] = [t, o]
                    }
                    ));
                    t.push(n[2] = o);
                    var a = m.p + m.u(r)
                      , i = new Error;
                    m.l(a, (t=>{
                        if (m.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0),
                        n)) {
                            var o = t && ("load" === t.type ? "missing" : t.type)
                              , a = t && t.target && t.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")",
                            i.name = "ChunkLoadError",
                            i.type = o,
                            i.request = a,
                            n[1](i)
                        }
                    }
                    ), "chunk-" + r)
                }
        }
        ;
        var r = self.webpackChunkwp5_starter_react = self.webpackChunkwp5_starter_react || []
          , t = r.push.bind(r);
        r.push = r=>{
            for (var n, o, [a,i,u] = r, l = 0, s = []; l < a.length; l++)
                o = a[l],
                m.o(e, o) && e[o] && s.push(e[o][0]),
                e[o] = 0;
            for (n in i)
                m.o(i, n) && (m.m[n] = i[n]);
            for (u && u(m),
            t(r); s.length; )
                s.shift()()
        }
    }
    )(),
    m(429)
}
)();
//# sourceMappingURL=remoteEntry.js.map