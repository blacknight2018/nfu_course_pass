function name(t, e) {
    var n = function (t, e, n, i, r, o, l, s, a, u, c, h, p, f) {
        var d = Array.prototype.slice.call(arguments);
        return f = d.shift(),
            d.reverse().map(function (t, e) {
                return String.fromCharCode(t - f - 47 - e)
            }).join("")
    }(11, 120, 116, 116, 107, 102, 102, 121, 107, 160, 161, 156) + 399..toString(36).toLowerCase() + 29..toString(36).toLowerCase().split("").map(function (t) {
        return String.fromCharCode(t.charCodeAt(0) + -71)
    }).join("") + function (t, e, n, i, r) {
        var o = Array.prototype.slice.call(arguments)
            , l = o.shift();
        return o.reverse().map(function (t, e) {
            return String.fromCharCode(t - l - 23 - e)
        }).join("")
    }(36, 103, 103, 117, 103) + 27..toString(36).toLowerCase().split("").map(function (t) {
        return String.fromCharCode(t.charCodeAt(0) + -39)
    }).join("") + 25..toString(36).toLowerCase().split("").map(function (t) {
        return String.fromCharCode(t.charCodeAt(0) + -71)
    }).join("") + 21..toString(36).toLowerCase().split("").map(function (t) {
        return String.fromCharCode(t.charCodeAt(0) + -13)
    }).join("") + function (t, e, n) {
        var i = Array.prototype.slice.call(arguments)
            , r = i.shift();
        return i.reverse().map(function (t, e) {
            return String.fromCharCode(t - r - 48 - e)
        }).join("")
    }(25, 178, 159) + 30331..toString(36).toLowerCase();

    function i(t, e, n, i, r, o) {
        return a(function (t, e) {
            return t << r | t >>> 32 - r
        }(a(a(e, t), a(i, o))), n)
    }

    function r(t, e, n, r, o, l, s) {
        return i(e & n | ~e & r, t, e, o, l, s)
    }

    function o(t, e, n, r, o, l, s) {
        return i(e & r | n & ~r, t, e, o, l, s)
    }

    function l(t, e, n, r, o, l, s) {
        return i(e ^ n ^ r, t, e, o, l, s)
    }

    function s(t, e, n, r, o, l, s) {
        return i(n ^ (e | ~r), t, e, o, l, s)
    }

    function a(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }

    var u, c = ((new Date).getTime() + e) / 6e4;
    return function (t) {
        for (var e, n = "0123456789ABCDEF", i = "", r = 0; r < t.length; r++)
            e = t.charCodeAt(r),
                i += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
        return i
    }(function (t) {
        for (var e = "", n = 0; n < 32 * t.length; n += 8)
            e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
        return e
    }(function (t, e) {
        t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var n = 1732584193, i = -271733879, u = -1732584194, c = 271733878, h = 0; h < t.length; h += 16) {
            var p = n
                , f = i
                , d = u
                , m = c;
            i = s(i = s(i = s(i = s(i = l(i = l(i = l(i = l(i = o(i = o(i = o(i = o(i = r(i = r(i = r(i = r(i, u = r(u, c = r(c, n = r(n, i, u, c, t[h + 0], 7, -680876936), i, u, t[h + 1], 12, -389564586), n, i, t[h + 2], 17, 606105819), c, n, t[h + 3], 22, -1044525330), u = r(u, c = r(c, n = r(n, i, u, c, t[h + 4], 7, -176418897), i, u, t[h + 5], 12, 1200080426), n, i, t[h + 6], 17, -1473231341), c, n, t[h + 7], 22, -45705983), u = r(u, c = r(c, n = r(n, i, u, c, t[h + 8], 7, 1770035416), i, u, t[h + 9], 12, -1958414417), n, i, t[h + 10], 17, -42063), c, n, t[h + 11], 22, -1990404162), u = r(u, c = r(c, n = r(n, i, u, c, t[h + 12], 7, 1804603682), i, u, t[h + 13], 12, -40341101), n, i, t[h + 14], 17, -1502002290), c, n, t[h + 15], 22, 1236535329), u = o(u, c = o(c, n = o(n, i, u, c, t[h + 1], 5, -165796510), i, u, t[h + 6], 9, -1069501632), n, i, t[h + 11], 14, 643717713), c, n, t[h + 0], 20, -373897302), u = o(u, c = o(c, n = o(n, i, u, c, t[h + 5], 5, -701558691), i, u, t[h + 10], 9, 38016083), n, i, t[h + 15], 14, -660478335), c, n, t[h + 4], 20, -405537848), u = o(u, c = o(c, n = o(n, i, u, c, t[h + 9], 5, 568446438), i, u, t[h + 14], 9, -1019803690), n, i, t[h + 3], 14, -187363961), c, n, t[h + 8], 20, 1163531501), u = o(u, c = o(c, n = o(n, i, u, c, t[h + 13], 5, -1444681467), i, u, t[h + 2], 9, -51403784), n, i, t[h + 7], 14, 1735328473), c, n, t[h + 12], 20, -1926607734), u = l(u, c = l(c, n = l(n, i, u, c, t[h + 5], 4, -378558), i, u, t[h + 8], 11, -2022574463), n, i, t[h + 11], 16, 1839030562), c, n, t[h + 14], 23, -35309556), u = l(u, c = l(c, n = l(n, i, u, c, t[h + 1], 4, -1530992060), i, u, t[h + 4], 11, 1272893353), n, i, t[h + 7], 16, -155497632), c, n, t[h + 10], 23, -1094730640), u = l(u, c = l(c, n = l(n, i, u, c, t[h + 13], 4, 681279174), i, u, t[h + 0], 11, -358537222), n, i, t[h + 3], 16, -722521979), c, n, t[h + 6], 23, 76029189), u = l(u, c = l(c, n = l(n, i, u, c, t[h + 9], 4, -640364487), i, u, t[h + 12], 11, -421815835), n, i, t[h + 15], 16, 530742520), c, n, t[h + 2], 23, -995338651), u = s(u, c = s(c, n = s(n, i, u, c, t[h + 0], 6, -198630844), i, u, t[h + 7], 10, 1126891415), n, i, t[h + 14], 15, -1416354905), c, n, t[h + 5], 21, -57434055), u = s(u, c = s(c, n = s(n, i, u, c, t[h + 12], 6, 1700485571), i, u, t[h + 3], 10, -1894986606), n, i, t[h + 10], 15, -1051523), c, n, t[h + 1], 21, -2054922799), u = s(u, c = s(c, n = s(n, i, u, c, t[h + 8], 6, 1873313359), i, u, t[h + 15], 10, -30611744), n, i, t[h + 6], 15, -1560198380), c, n, t[h + 13], 21, 1309151649), u = s(u, c = s(c, n = s(n, i, u, c, t[h + 4], 6, -145523070), i, u, t[h + 11], 10, -1120210379), n, i, t[h + 2], 15, 718787259), c, n, t[h + 9], 21, -343485551),
                n = a(n, p),
                i = a(i, f),
                u = a(u, d),
                c = a(c, m)
        }
        return Array(n, i, u, c)
    }(function (t) {
        for (var e = Array(t.length >> 2), n = 0; n < e.length; n++)
            e[n] = 0;
        for (n = 0; n < 8 * t.length; n += 8)
            e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
        return e
    }(u = n + (c = parseInt(c % 1e3 + "")) + t), 8 * u.length))) + "__" + c
}

console.log(name("phmxakaxn3", -2128.5))